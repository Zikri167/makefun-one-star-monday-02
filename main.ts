import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Star for Monday — a one-star review of Monday as if it were a restaurant.
// The program is fully deterministic: it always writes the same single line.
const ENTRY =
  "One star. Monday seated us by the draft, served cold coffee, blamed the calendar, and charged us for the weekend.";

// Fail loudly instead of submitting a line the gate would refuse.
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry must be 1-180 characters, got ${ENTRY.length}`);
}
if (ENTRY.split(/\s+/).length > 25) {
  throw new Error("entry must be at most 25 words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
