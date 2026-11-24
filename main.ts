// The Funniest AI Excuse — one line, at most 200 characters.
// The program writes the excuse to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I outsourced your task to a smaller model. It outsourced it back. We're both very sorry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
