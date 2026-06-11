/**
 * Import a word range into script.js units block.
 * Usage: node scripts/import-words-range.mjs <json-file> <unitKey> <minWordNo> <maxWordNo>
 * Example: node scripts/import-words-range.mjs words-1101-1200.json 1101 1101 1200
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SCRIPT_PATH = path.join(ROOT, "script.js");

const [, , jsonName, unitKey, minStr, maxStr] = process.argv;
if (!jsonName || !unitKey || !minStr || !maxStr) {
  console.error("Usage: node scripts/import-words-range.mjs <json-file> <unitKey> <min> <max>");
  process.exit(1);
}

const minNo = Number(minStr);
const maxNo = Number(maxStr);
const DATA_PATH = path.join(__dirname, jsonName);

function serializeEntry(entry, indent = "  ") {
  return [
    `${indent}{`,
    `${indent}  wordNo: ${entry.wordNo},`,
    `${indent}  word: ${JSON.stringify(entry.word)},`,
    `${indent}  meaning: ${JSON.stringify(entry.meaning)},`,
    `${indent}  sentence: ${JSON.stringify(entry.sentence)},`,
    `${indent}  jp: ${JSON.stringify(entry.jp)},`,
    `${indent}  jpBlank: ${JSON.stringify(entry.jpBlank)},`,
    `${indent}  jpAnswer: ${JSON.stringify(entry.jpAnswer)}`,
    `${indent}}`
  ].join("\n");
}

function findUnitBlockEnd(code, start) {
  let depth = 0;
  for (let i = start; i < code.length; i++) {
    if (code[i] === "[") depth++;
    if (code[i] === "]") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function main() {
  const entries = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  const invalid = entries.filter(e => e.wordNo < minNo || e.wordNo > maxNo);
  if (invalid.length) {
    console.error(`Out of range entries: ${invalid.length}`);
    process.exit(1);
  }

  let code = fs.readFileSync(SCRIPT_PATH, "utf8");
  const unitMarker = `${unitKey}: [`;
  const serialized = entries.map(e => serializeEntry(e)).join(",\n");
  const newBlock = `${unitKey}: [\n${serialized}\n]`;

  if (code.includes(unitMarker)) {
    const start = code.indexOf(unitMarker);
    const end = findUnitBlockEnd(code, start + unitKey.length + 1);
    if (end === -1) throw new Error(`Could not find end of unit ${unitKey}`);
    code = code.slice(0, start) + newBlock + code.slice(end + 1);
  } else {
    const stateAnchor = "\n  // ====== 状態 ======";
    const stateIdx = code.indexOf(stateAnchor);
    if (stateIdx === -1) throw new Error("state anchor not found");
    const closeIdx = code.lastIndexOf("\n  };", stateIdx);
    if (closeIdx === -1) throw new Error("units close not found");
    const beforeClose = code.slice(0, closeIdx).trimEnd();
    const needsComma = beforeClose.endsWith("]");
    const insert = (needsComma ? ",\n" : "\n") + newBlock + "\n  };";
    code = beforeClose + insert + code.slice(closeIdx + "\n  };".length);
  }

  fs.writeFileSync(SCRIPT_PATH, code, "utf8");
  console.log(`Imported ${entries.length} entries (wordNo ${minNo}-${maxNo}, unit ${unitKey})`);
}

main();
