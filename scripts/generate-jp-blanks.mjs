/**
 * Generate jpBlank / jpAnswer for all vocabulary entries.
 * Usage: node scripts/generate-jp-blanks.mjs [--apply]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SCRIPT_PATH = path.join(ROOT, "script.js");
const OVERRIDES_PATH = path.join(__dirname, "jp-blank-overrides.json");

const BLANK = "(   )";

function loadUnits() {
  const code = fs.readFileSync(SCRIPT_PATH, "utf8");
  const start = code.indexOf("const units = {");
  const end = code.indexOf("\n  };", start);
  if (start === -1 || end === -1) throw new Error("units block not found");
  const block = code.slice(start + "const units = ".length, end + 4);
  return { units: Function(`"use strict"; return ${block}`)(), code, start, end };
}

function loadOverrides() {
  if (!fs.existsSync(OVERRIDES_PATH)) return {};
  return JSON.parse(fs.readFileSync(OVERRIDES_PATH, "utf8"));
}

function entryKey(e) {
  return `${e.wordNo}|${e.sentence}`;
}

function cleanMeaning(meaning) {
  const stripped = meaning.replace(/（[^）]*）/g, " ").replace(/\([^)]*\)/g, " ");
  return stripped
    .split(/[，,、・]/)
    .map(s => s.trim())
    .filter(Boolean);
}

function stripPrefix(phrase) {
  return phrase
    .replace(/^〜(を|に|が|と|で|へ|の|も|から|まで|より|と)?/, "")
    .replace(/^（[^）]*）/, "")
    .trim();
}

function meaningVariants(phrase) {
  const base = stripPrefix(phrase);
  const variants = new Set([phrase, base].filter(Boolean));

  if (base.endsWith("する")) {
    variants.add(base);
    variants.add(base.slice(0, -2));
    variants.add(base.slice(0, -1));
  }
  if (base.endsWith("している")) variants.add(base.replace(/している$/, "している"));
  if (base.endsWith("い")) {
    variants.add(base.slice(0, -1) + "く");
    variants.add(base.slice(0, -1) + "くない");
  }
  if (base.endsWith("的な")) variants.add(base.slice(0, -2));
  if (base.endsWith("的")) variants.add(base.slice(0, -1));

  // Negation pairs
  if (base.endsWith("う")) {
    const stem = base.slice(0, -1);
    variants.add(stem + "わない");
    variants.add(stem + "いません");
  }

  // Noun from long meaning: 形態 -> 形
  if (base.length >= 2) {
    for (let len = 1; len <= Math.min(3, base.length - 1); len++) {
      variants.add(base.slice(0, len));
    }
  }

  return [...variants].filter(v => v.length >= 1);
}

function allCandidates(entry) {
  const { meaning, jp } = entry;
  const set = new Set();

  for (const part of cleanMeaning(meaning)) {
    for (const v of meaningVariants(part)) set.add(v);
  }

  // Parenthetical synonyms inside jp: 正しい（正確な）
  const parenParts = jp.match(/（([^）]+)）/g) || [];
  for (const p of parenParts) {
    const inner = p.slice(1, -1);
    inner.split(/[，,、・]/).forEach(s => {
      const t = s.trim();
      if (t) set.add(t);
    });
  }

  // Katakana from meaning
  const katakana = meaning.match(/[\u30A0-\u30FFー]+/g) || [];
  katakana.forEach(k => set.add(k));

  return [...set].sort((a, b) => b.length - a.length);
}

function findAllOccurrences(haystack, needle) {
  const positions = [];
  let idx = 0;
  while (true) {
    const pos = haystack.indexOf(needle, idx);
    if (pos === -1) break;
    positions.push(pos);
    idx = pos + 1;
  }
  return positions;
}

function scoreCandidate(entry, candidate, position) {
  const { jp, meaning } = entry;
  let score = candidate.length * 10;
  if (position === 0 && jp.length <= candidate.length + 4) score += 50;
  if (position + candidate.length === jp.length) score += 20;
  if (meaning.includes(candidate)) score += 15;
  if (candidate.length <= 1) score -= 100;
  if (candidate.length === 2 && !/[\u30A0-\u30FF]/.test(candidate)) score -= 5;
  return score;
}

function pickBestMatch(entry, candidates) {
  const { jp } = entry;
  let best = null;
  let bestScore = -Infinity;

  for (const cand of candidates) {
    if (!cand || !jp.includes(cand)) continue;
    const positions = findAllOccurrences(jp, cand);
    for (const pos of positions) {
      const score = scoreCandidate(entry, cand, pos);
      if (score > bestScore) {
        bestScore = score;
        best = { answer: cand, index: pos };
      }
    }
  }
  return best;
}

function verbFormCandidates(entry) {
  const { meaning, jp } = entry;
  const results = [];
  const parts = cleanMeaning(meaning);

  for (const part of parts) {
    const base = stripPrefix(part);
    if (!base) continue;

    let stem = base;
    if (base.endsWith("する")) stem = base.slice(0, -2);
    else if (base.endsWith("る")) stem = base.slice(0, -1);
    else if (base.endsWith("く")) stem = base.slice(0, -1);
    else if (base.endsWith("い")) stem = base.slice(0, -1);

    const verbEndings = [
      "している", "してい", "されて", "されている", "されている",
      "されている", "させる", "させられる", "することができる", "ことができる", "ことができた",
      "しない", "した", "して", "すれば", "します", "しました",
      "される", "された", "れている", "れる", "られる", "ない", "た", "て", "る",
      "わない", "いません", "える", "ければ"
    ];

    for (const end of verbEndings) {
      const form = stem + end;
      if (form.length >= 2 && jp.includes(form)) results.push(form);
    }

    if (stem.length >= 2 && jp.includes(stem)) results.push(stem);
  }

  return [...new Set(results)].sort((a, b) => b.length - a.length);
}

function scanJpVerbPhrases(jp) {
  const patterns = [
    /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+(?:している|してい|された|されている|できる|できた|する|した|して|ない|わない|れる|られる|ける|げる|める|べる|せる|ている|てい|ない)/g,
    /[\u4E00-\u9FFF]{2,}(?:する|した|して|できる|できた|される|された|ない|わない|いる|える|ける)/g
  ];
  const found = new Set();
  for (const re of patterns) {
    const m = jp.match(re);
    if (m) m.forEach(s => found.add(s));
  }
  return [...found].sort((a, b) => b.length - a.length);
}

function contextualFallback(entry) {
  const { meaning, jp } = entry;
  const phrases = scanJpVerbPhrases(jp);

  for (const part of cleanMeaning(meaning)) {
    const base = stripPrefix(part);
    const stem = base.endsWith("する") ? base.slice(0, -2) : base.slice(0, -1);
    for (const ph of phrases) {
      if (ph.includes(stem) || stem.includes(ph.slice(0, 2))) return ph;
    }
  }

  // Last resort: longest verb-like phrase at end
  const endMatch = jp.match(/([\u4E00-\u9FFF\u3040-\u309F]+(?:している|した|する|できる|できた|される|された|ない|わない|いる|ける|げる|める))(?:[。．.!！?？]|$)/);
  if (endMatch) return endMatch[1];

  return null;
}

function nounPhraseFallback(entry) {
  const { jp, meaning } = entry;

  if (jp.length <= 12) {
    const parts = cleanMeaning(meaning);
    for (const p of parts) {
      const base = p.replace(/^〜(を|に|が|と|で|へ|の)?/, "").replace(/(する|した|している)$/, "");
      if (base && jp.includes(base)) return base;
    }
    return jp.replace(/[。．.!！?？]$/, "");
  }

  return null;
}

function compoundModifierFallback(entry) {
  const { jp, meaning } = entry;
  const parts = cleanMeaning(meaning);
  for (const p of parts) {
    const mod = p.replace(/(の|な|的な|的)$/, "");
    if (mod.length >= 2 && jp.startsWith(mod) && jp.length > mod.length) {
      return mod;
    }
  }
  return null;
}

function predictJpAnswer(entry) {
  const overrides = loadOverrides();
  const key = entryKey(entry);
  if (overrides[key]) return overrides[key];

  let match = pickBestMatch(entry, allCandidates(entry));
  if (match) return match.answer;

  match = pickBestMatch(entry, verbFormCandidates(entry));
  if (match) return match.answer;

  const compound = compoundModifierFallback(entry);
  if (compound) return compound;

  const noun = nounPhraseFallback(entry);
  if (noun) return noun;

  const ctx = contextualFallback(entry);
  if (ctx && entry.jp.includes(ctx)) return ctx;

  return null;
}

function makeJpBlank(jp, answer) {
  const idx = jp.indexOf(answer);
  if (idx === -1) return null;
  return jp.slice(0, idx) + BLANK + jp.slice(idx + answer.length);
}

function validate(entry) {
  const { jp, jpAnswer, jpBlank } = entry;
  if (!jpAnswer || !jpBlank) return "missing fields";
  if ((jpBlank.match(/\(   \)/g) || []).length !== 1) return "blank count";
  if (jpBlank.replace(BLANK, jpAnswer) !== jp) return "restore mismatch";
  if (!jp.includes(jpAnswer)) return "answer not in jp";
  return null;
}

function processAll(units) {
  const results = [];
  const failures = [];

  for (const arr of Object.values(units)) {
    for (const entry of arr) {
      const jpAnswer = predictJpAnswer(entry);
      const jpBlank = jpAnswer ? makeJpBlank(entry.jp, jpAnswer) : null;
      const updated = { ...entry, jpAnswer, jpBlank };
      const err = validate(updated);
      if (err) {
        failures.push({ entry, err, jpAnswer, jpBlank });
      }
      results.push(updated);
    }
  }
  return { results, failures };
}

function serializeEntry(entry, indent = "  ") {
  const lines = [
    `${indent}{`,
    `${indent}  wordNo: ${entry.wordNo},`,
    `${indent}  word: ${JSON.stringify(entry.word)},`,
    `${indent}  meaning: ${JSON.stringify(entry.meaning)},`,
    `${indent}  sentence: ${JSON.stringify(entry.sentence)},`,
    `${indent}  jp: ${JSON.stringify(entry.jp)},`,
    `${indent}  jpBlank: ${JSON.stringify(entry.jpBlank)},`,
    `${indent}  jpAnswer: ${JSON.stringify(entry.jpAnswer)}`,
    `${indent}}`
  ];
  return lines.join("\n");
}

function applyToScript(units) {
  const { code, start, end } = loadUnits();
  const unitKeys = Object.keys(units).sort((a, b) => Number(a) - Number(b));

  let unitsBlock = "const units = {\n\n";
  for (const key of unitKeys) {
    unitsBlock += `${key}: [\n`;
    for (const entry of units[key]) {
      unitsBlock += serializeEntry(entry, "  ") + ",\n";
    }
    unitsBlock += "],\n";
  }
  unitsBlock += "  };";

  const newCode = code.slice(0, start) + unitsBlock + code.slice(end + 4);
  fs.writeFileSync(SCRIPT_PATH, newCode, "utf8");
}

function main() {
  const apply = process.argv.includes("--apply");
  const { units } = loadUnits();
  let total = 0;
  Object.values(units).forEach(a => { total += a.length; });

  const { results, failures } = processAll(units);
  console.log(`Total entries: ${total}`);
  console.log(`Success: ${total - failures.length}`);
  console.log(`Failures: ${failures.length}`);

  if (failures.length > 0) {
    const reportPath = path.join(__dirname, "jp-blank-failures.json");
    fs.writeFileSync(reportPath, JSON.stringify(failures.map(f => ({
      key: entryKey(f.entry),
      wordNo: f.entry.wordNo,
      word: f.entry.word,
      meaning: f.entry.meaning,
      jp: f.entry.jp,
      err: f.err,
      jpAnswer: f.jpAnswer
    })), null, 2), "utf8");
    console.log(`Failure report: ${reportPath}`);
    failures.slice(0, 20).forEach(f => {
      console.log(`  [${f.entry.wordNo}] ${f.entry.word}: ${f.err} — ${f.entry.jp}`);
    });
  }

  if (apply && failures.length === 0) {
    const rebuilt = {};
    for (const entry of results) {
      const key = Object.keys(units).find(k => units[k].includes(entry) ||
        units[k].some(e => e.wordNo === entry.wordNo && e.sentence === entry.sentence));
      // Rebuild from original structure
    }
    // Simpler: mutate in place
    for (const arr of Object.values(units)) {
      for (let i = 0; i < arr.length; i++) {
        const key = entryKey(arr[i]);
        const found = results.find(r => entryKey(r) === key);
        if (found) {
          arr[i].jpBlank = found.jpBlank;
          arr[i].jpAnswer = found.jpAnswer;
        }
      }
    }
    applyToScript(units);
    console.log("Applied to script.js");
  } else if (apply && failures.length > 0) {
    console.error("Cannot apply: fix failures first (add overrides to jp-blank-overrides.json)");
    process.exit(1);
  }
}

main();
