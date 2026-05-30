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
  if (e.wordNo === undefined) return `${e.word}|${e.sentence}`;
  return `${e.wordNo}|${e.sentence}`;
}

function getOverride(overrides, entry) {
  const key = entryKey(entry);
  if (overrides[key]) return overrides[key];
  if (entry.wordNo === undefined) {
    const legacy = `undefined|${entry.sentence}`;
    if (overrides[legacy]) return overrides[legacy];
  }
  return null;
}

function resolveOverride(overrides, entry) {
  const raw = getOverride(overrides, entry);
  if (!raw) return null;
  if (typeof raw === "string") {
    return { jpAnswer: raw, jpBlank: null };
  }
  return { jpAnswer: raw.jpAnswer, jpBlank: raw.jpBlank ?? null };
}

function jpMainText(jp) {
  return jp.replace(/（[^）]*）/g, "");
}

function formatJpBlankForDisplay(jpBlank) {
  if (!jpBlank) return "";
  return jpBlank.replace(/（\(   \)）/g, BLANK).replace(/（[^）]*）/g, "");
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

  if (base.endsWith("う")) {
    const stem = base.slice(0, -1);
    variants.add(stem + "わない");
    variants.add(stem + "いません");
  }

  return [...variants].filter(v => v.length >= 2);
}

function allCandidates(entry) {
  const { meaning } = entry;
  const set = new Set();

  for (const part of cleanMeaning(meaning)) {
    for (const v of meaningVariants(part)) set.add(v);
  }

  const katakana = meaning.match(/[\u30A0-\u30FFー]+/g) || [];
  katakana.forEach(k => set.add(k));

  return [...set].sort((a, b) => a.length - b.length);
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

function isInsideJapaneseParen(text, start, length) {
  const before = text.slice(0, start);
  const opens = (before.match(/（/g) || []).length;
  const closes = (before.match(/）/g) || []).length;
  return opens > closes;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findAllOccurrencesInMain(jp, needle) {
  const positions = [];
  let idx = 0;
  while (true) {
    const pos = jp.indexOf(needle, idx);
    if (pos === -1) break;
    if (!isInsideJapaneseParen(jp, pos, needle.length)) {
      positions.push(pos);
    }
    idx = pos + 1;
  }
  return positions;
}

function scoreCandidate(entry, candidate, position) {
  const { jp, meaning } = entry;
  const main = jpMainText(jp);
  const jpLen = main.replace(/[。．.!！?？]/g, "").length;

  let score = 200;
  score -= candidate.length * 6;
  if (candidate.length <= 2 && main.length > 12) score -= 80;
  if (candidate.length >= jpLen * 0.55) score -= 120;
  if (candidate.length > 8) score -= (candidate.length - 8) * 12;
  if (meaning.includes(candidate)) score += 20;
  if (candidate.length >= 2 && candidate.length <= 7) score += 30;
  if (position + candidate.length === main.length || main[position + candidate.length] === "。") score += 8;

  return score;
}

function pickBestMatch(entry, candidates) {
  const { jp } = entry;
  const main = jpMainText(jp);
  let best = null;
  let bestScore = -Infinity;

  for (const cand of candidates) {
    if (!cand || !main.includes(cand)) continue;
    const positions = findAllOccurrencesInMain(jp, cand);
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

function trimOverlongAnswer(entry, answer) {
  const main = jpMainText(entry.jp);
  if (!answer || answer.length <= 8) return answer;
  for (const part of cleanMeaning(entry.meaning)) {
    const base = stripPrefix(part);
    if (base.length >= 3 && base.length <= 8 && answer.includes(base) && main.includes(base)) {
      return base;
    }
    if (base.endsWith("する")) {
      const stem = base.slice(0, -2);
      if (stem.length >= 2 && answer.includes(stem) && main.includes(stem)) return stem;
    }
  }
  return answer.length > 10 ? null : answer;
}

function verbFormCandidates(entry) {
  const { meaning, jp } = entry;
  const main = jpMainText(jp);
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
      "している", "してい", "されて", "されている",
      "させる", "させられる", "することができる", "ことができる", "ことができた",
      "しない", "した", "して", "すれば", "します", "しました",
      "される", "された", "れている", "れる", "られる", "ない", "た", "て", "る",
      "わない", "いません", "える", "ければ", "ませんか"
    ];

    for (const end of verbEndings) {
      const form = stem + end;
      if (form.length >= 2 && main.includes(form)) results.push(form);
    }

    if (stem.length >= 2 && main.includes(stem)) results.push(stem);
  }

  return [...new Set(results)].sort((a, b) => b.length - a.length);
}

function scanJpVerbPhrases(jp) {
  const main = jpMainText(jp);
  const patterns = [
    /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+(?:している|してい|された|されている|できる|できた|する|した|して|ない|わない|れる|られる|ける|げる|める|べる|せる|ている|てい|ない|ませんか)/g,
    /[\u4E00-\u9FFF]{2,}(?:する|した|して|できる|できた|される|された|ない|わない|いる|える|ける)/g
  ];
  const found = new Set();
  for (const re of patterns) {
    const m = main.match(re);
    if (m) m.forEach(s => found.add(s));
  }
  return [...found].sort((a, b) => a.length - b.length);
}

function contextualFallback(entry) {
  const { meaning } = entry;
  const main = jpMainText(entry.jp);
  const phrases = scanJpVerbPhrases(entry.jp).sort((a, b) => a.length - b.length);

  for (const part of cleanMeaning(meaning)) {
    const base = stripPrefix(part);
    const stem = base.endsWith("する") ? base.slice(0, -2) : base.slice(0, -1);
    for (const ph of phrases) {
      if (ph.includes(stem) && ph.length <= 8) return ph;
    }
  }

  const endMatch = main.match(/([\u4E00-\u9FFF\u3040-\u309F]{2,8}(?:する|した|して|できる|ない|わない|いる|ける|げる|める|ませんか))(?:[。．.!！?？]|$)/);
  if (endMatch && endMatch[1].length <= 8) return endMatch[1];

  return null;
}

function nounPhraseFallback(entry) {
  const { meaning } = entry;
  const main = jpMainText(entry.jp);
  const core = main.replace(/[。．.!！?？]/g, "");

  if (findInlineParenGlosses(entry.jp).length) return null;

  if (core.length <= 4) {
    const parts = cleanMeaning(meaning);
    for (const p of parts) {
      const base = stripPrefix(p).replace(/(する|した|している)$/, "");
      if (base && core.includes(base)) return base;
    }
    return core;
  }

  return null;
}

function compoundModifierFallback(entry) {
  const { meaning } = entry;
  const main = jpMainText(entry.jp);
  const parts = cleanMeaning(meaning);
  for (const p of parts) {
    const mod = p.replace(/(の|な|的な|的)$/, "");
    if (mod.length >= 2 && main.startsWith(mod) && main.length > mod.length) {
      return mod;
    }
  }
  return null;
}

function findInlineParenGlosses(jp) {
  const results = [];
  const re = /（([^）]{1,6})）/g;
  let m;
  while ((m = re.exec(jp)) !== null) {
    const answer = m[1];
    const idx = m.index;
    const before = jp[idx - 1];
    const after = jp[idx + m[0].length];
    if (before && after && !/\s/.test(before) && !/\s/.test(after)) {
      results.push(answer);
    }
  }
  return results;
}

function isInlineParenAnswer(jp, answer) {
  return findInlineParenGlosses(jp).includes(answer);
}

function makeInlineParenBlank(jp, answer) {
  const pattern = new RegExp(`（${escapeRegex(answer)}）`);
  if (!pattern.test(jp)) return null;
  return cleanupJpBlank(jp.replace(pattern, BLANK));
}

function mainTextTailFallback(entry) {
  const main = jpMainText(entry.jp);
  const m = main.match(/([一-龯ぁ-んァ-ン\u30A0-\u30FF]{2,8}(?:を受けた|もらった|された|していた|している|できます|ませんか))(?:[。．.!！?？]|$)/);
  if (m && m[1].length >= 2 && m[1].length <= 8) return m[1];
  return null;
}

function mainTextKeywordFallback(entry) {
  const main = jpMainText(entry.jp);
  for (const c of allCandidates(entry)) {
    if (main.includes(c)) return c;
  }
  const segments = main.match(/[一-龯ぁ-んァ-ン\u30A0-\u30FF]{2,6}/g) || [];
  const unique = [...new Set(segments)].sort((a, b) => a.length - b.length);
  for (const s of unique) {
    if (s.length >= 2 && s.length <= 6 && main.includes(s)) return s;
  }
  return null;
}

function inlineParenFallback(entry) {
  const glosses = findInlineParenGlosses(entry.jp);
  if (!glosses.length) return null;
  const meaningParts = allCandidates(entry);
  for (const g of glosses) {
    if (meaningParts.some(c => g.includes(c) || c.includes(g))) return g;
  }
  return glosses.sort((a, b) => a.length - b.length)[0];
}

function endingFallback(entry) {
  const core = jpMainText(entry.jp).replace(/[。．.!！?？]/g, "");

  const adj = core.match(/([^\s（]{2,6}い)$/);
  if (adj) return adj[1];

  const verb = core.match(/([一-龯ぁ-んァ-ン]{2,8}(?:する|した|して|ない|わない|える|ける|げる|める|られる|れる|つ|す|く|み|け|げ|べ|せ|ませんか))$/);
  if (verb && verb[1].length <= 8) return verb[1];

  if (core.length >= 2 && core.length <= 8) return core;

  return null;
}

function predictJpAnswer(entry) {
  let match = pickBestMatch(entry, allCandidates(entry));
  if (match) return trimOverlongAnswer(entry, match.answer) || match.answer;

  match = pickBestMatch(entry, verbFormCandidates(entry));
  if (match) return trimOverlongAnswer(entry, match.answer) || match.answer;

  const inline = inlineParenFallback(entry);
  if (inline) return inline;

  const compound = compoundModifierFallback(entry);
  if (compound) return compound;

  const keyword = mainTextKeywordFallback(entry);
  if (keyword) return keyword;

  const noun = nounPhraseFallback(entry);
  if (noun) return noun;

  const ctx = contextualFallback(entry);
  if (ctx && jpMainText(entry.jp).includes(ctx)) return ctx;

  const tail = mainTextTailFallback(entry);
  if (tail && jpMainText(entry.jp).includes(tail)) return tail;

  const ending = endingFallback(entry);
  if (ending && jpMainText(entry.jp).includes(ending)) return ending;

  return null;
}

function cleanupJpBlank(jpBlank) {
  const placeholder = "__BLANK__";
  let s = jpBlank.replace(/\(   \)/g, placeholder);
  s = s.replace(/（\(   \)）/g, placeholder);
  s = s.replace(/（[^）]*）/g, "");
  s = s.replace(/，+/g, "，").replace(/、+/g, "、");
  return s.replace(new RegExp(placeholder, "g"), BLANK);
}

function makeJpBlank(jp, answer) {
  if (!answer) return null;

  if (isInlineParenAnswer(jp, answer)) {
    return makeInlineParenBlank(jp, answer);
  }

  if (!jpMainText(jp).includes(answer)) return null;

  let target = jp.replace(/^（[^）]*）/, "");
  const positions = findAllOccurrencesInMain(target, answer);
  if (positions.length === 0) return null;

  const idx = positions[0];
  const raw = target.slice(0, idx) + BLANK + target.slice(idx + answer.length);
  return cleanupJpBlank(raw);
}

function validateDisplayNaturalness(jpBlank, jpAnswer) {
  const displayed = formatJpBlankForDisplay(jpBlank);
  if (!displayed.includes(BLANK)) return "no blank in display";

  const filled = displayed.replace(BLANK, jpAnswer);
  if (!filled.includes(jpAnswer)) return "answer not in displayed sentence";

  if (/\(   \)[。]?$/.test(displayed.trim())) {
    const beforeBlank = displayed.slice(0, displayed.indexOf(BLANK));
    if (beforeBlank.includes(jpAnswer)) return "trailing blank duplicate";
  }

  return null;
}

function validate(entry, allowLong = false) {
  const { jp, jpAnswer, jpBlank } = entry;
  if (!jpAnswer || !jpBlank) return "missing fields";
  if ((jpBlank.match(/\(   \)/g) || []).length !== 1) return "blank count";
  if (!jp.includes(jpAnswer)) return "answer not in jp";
  if (!jpMainText(jp).includes(jpAnswer) && !isInlineParenAnswer(jp, jpAnswer)) {
    return "answer not in main text";
  }
  if (/（.*\(   \).*）/.test(jpBlank)) return "nested paren";

  const restored = jpBlank.replace(BLANK, jpAnswer);
  const normalize = s => s.replace(/（[^）]*）/g, "").replace(/\s+/g, "");
  const jpNorm = normalize(jpMainText(jp));
  const restoredNorm = normalize(restored);
  if (restoredNorm !== jpNorm && !isInlineParenAnswer(jp, jpAnswer)) {
    return "restore mismatch";
  }
  if (isInlineParenAnswer(jp, jpAnswer) && normalize(jp.replace(`（${jpAnswer}）`, jpAnswer)) !== restoredNorm) {
    return "restore mismatch";
  }

  const displayErr = validateDisplayNaturalness(jpBlank, jpAnswer);
  if (displayErr) return displayErr;

  if (!allowLong && jpAnswer.length > 10) return "too long";
  if (!jpAnswer.length) return "too short";
  return null;
}

function resolveEntryFields(entry, overrides) {
  const ov = resolveOverride(overrides, entry);
  if (ov) {
    const jpAnswer = ov.jpAnswer;
    const jpBlank = ov.jpBlank ?? (jpAnswer ? makeJpBlank(entry.jp, jpAnswer) : null);
    return { jpAnswer, jpBlank };
  }
  const jpAnswer = predictJpAnswer(entry);
  const jpBlank = jpAnswer ? makeJpBlank(entry.jp, jpAnswer) : null;
  return { jpAnswer, jpBlank };
}

function processAll(units) {
  const overrides = loadOverrides();
  const results = [];
  const failures = [];

  for (const arr of Object.values(units)) {
    for (const entry of arr) {
      const { jpAnswer, jpBlank } = resolveEntryFields(entry, overrides);
      const updated = {
        ...entry,
        jpAnswer: jpAnswer ?? entry.jpAnswer,
        jpBlank: jpBlank ?? entry.jpBlank
      };
      const isOverride = !!getOverride(overrides, entry);
      const err = validate(updated, isOverride);
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

  const overrides = loadOverrides();
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
      jpAnswer: f.jpAnswer,
      jpBlank: f.jpBlank
    })), null, 2), "utf8");
    console.log(`Failure report: ${reportPath}`);
    failures.slice(0, 20).forEach(f => {
      console.log(`  [${f.entry.wordNo}] ${f.entry.word}: ${f.err} — ${f.entry.jp}`);
    });
  }

  if (apply) {
    let applied = 0;
    for (const arr of Object.values(units)) {
      for (let i = 0; i < arr.length; i++) {
        const key = entryKey(arr[i]);
        const found = results.find(r => entryKey(r) === key);
        if (!found?.jpBlank || !found?.jpAnswer) continue;
        const isOverride = !!getOverride(overrides, arr[i]);
        const applyErr = validate(found, isOverride);
        if (applyErr) continue;
        arr[i].jpBlank = found.jpBlank;
        arr[i].jpAnswer = found.jpAnswer;
        applied++;
      }
    }
    applyToScript(units);
    console.log(`Applied ${applied} entries to script.js`);
    if (failures.length > 0) {
      console.warn(`${failures.length} entries could not be improved (see jp-blank-failures.json)`);
    }
  }
}

main();
