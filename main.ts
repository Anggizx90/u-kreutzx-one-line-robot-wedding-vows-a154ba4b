import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I vow to love you in sickness and in health, in full charge and in 1%, until death or a factory reset do us part.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
