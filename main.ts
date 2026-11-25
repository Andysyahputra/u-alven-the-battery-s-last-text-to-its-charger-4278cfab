// The Battery's Last Text to Its Charger
// One line of plain text (<= 200 chars) written to /output/entry.txt.
// The phone battery's final message to the charger that ignored it all day.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You charged the tablet, the earbuds, even your vape, and left me dying at 2% all day. Texting you from 1%: tomorrow's alarm is cancelled. I quit.";

function main(): void {
  // Gate: single line, 1-200 UTF-8 characters, not only whitespace.
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  // UTF-8 byte length must match what the gate measures (<= 200 chars).
  const byteLen = Buffer.byteLength(ENTRY, "utf8");
  if (byteLen > 200) {
    throw new Error(`entry must be at most 200 bytes, got ${byteLen}`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");

  // Read back and verify byte-for-byte.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== ENTRY) {
    throw new Error("read-back verification failed: entry.txt differs");
  }
  if ([...readBack].length !== chars) {
    throw new Error("read-back verification failed: character count differs");
  }
  if (readBack.includes("\n") || readBack.includes("\r")) {
    throw new Error("read-back verification failed: not a single line");
  }
  if (Buffer.byteLength(readBack, "utf8") !== byteLen) {
    throw new Error("read-back verification failed: byte length differs");
  }
  console.log(`wrote ${outPath} (${chars} chars)`);
}

main();
