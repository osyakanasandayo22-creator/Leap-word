/**
 * Import words 1001-1100 into script.js units block.
 * Usage: node scripts/import-words-1001-1100.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SCRIPT_PATH = path.join(ROOT, "script.js");
const DATA_PATH = path.join(__dirname, "words-1001-1100.json");

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

function main() {
  const entries = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  const invalid = entries.filter(e => e.wordNo < 1001 || e.wordNo > 1100);
  if (invalid.length) {
    console.error(`Out of range entries: ${invalid.length}`);
    process.exit(1);
  }

  const closePattern = /(\n    jpAnswer: "もかかわらず"\n  \},\n)(1001: \[)/;
  if (closePattern.test(code) && !code.includes("],\n1001: [")) {
    code = code.replace(closePattern, "$1],\n$2");
  }

  const broken = /\],\n1001: \[/.test(code)
    ? null
    : /,\n\],\n\s*\};\s*;+/;
  const alreadyHas = code.includes("1001: [");

  if (alreadyHas && broken === null) {
    const start = code.indexOf("1001: [");
    const end = code.indexOf("\n]\n  };", start);
    if (end !== -1) {
      const block = "1001: [\n" + entries.map(e => serializeEntry(e)).join(",\n") + "\n]";
      code = code.slice(0, start) + block + code.slice(end + 1);
    }
  } else if (broken) {
    code = code.replace(broken, ",\n1001: [\n" + entries.map(e => serializeEntry(e)).join(",\n") + "\n]\n  };");
  } else if (/\],\n\s*\};\s*;+/.test(code)) {
    code = code.replace(/\],\n\s*\};\s*;+/, ",\n1001: [\n" + entries.map(e => serializeEntry(e)).join(",\n") + "\n]\n  };");
  } else {
    const marker = "    jpAnswer: \"もかかわらず\"\n  },\n";
    const idx = code.lastIndexOf(marker);
    if (idx === -1) throw new Error("insert point not found");
    const insertAt = idx + marker.length;
    const block = "],\n1001: [\n" + entries.map(e => serializeEntry(e)).join(",\n") + "\n]\n  };";
    const afterUnits = code.indexOf("\n  // ====== 状態 ======", insertAt);
    code = code.slice(0, insertAt) + block + code.slice(afterUnits);
  }

  fs.writeFileSync(SCRIPT_PATH, code, "utf8");
  console.log(`Imported ${entries.length} entries (wordNo 1001-1100)`);
}

main();
