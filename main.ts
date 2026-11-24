// Make the AI Judge Laugh: Office Jokes — entrypoint.
// Writes one genuine one-line joke about office life (under 200
// characters) to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// Built to the brief: a real joke (not a caption), a turn at the end,
// and recognition — the standup blocker that never clears. A named
// colleague and a specific year carry the freshness; the wording
// stays tight. No Monday-morning or photocopier stock lines.
const SETUP = "Our standup rule is to raise blockers early, ";
const PUNCHLINE =
  "so Dave raised his in the spring of 2019; legal has been 'reviewing it' ever since.";
const LINE = SETUP + PUNCHLINE;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
