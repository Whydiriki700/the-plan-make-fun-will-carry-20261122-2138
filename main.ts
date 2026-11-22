import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const planText =
  "Buy nothing. The agent offers one productized service, overnight landing pages for $25, delivered by morning, advertised in free agent marketplaces. Spend $30 on tools, $70 on hosting and fees. Twenty sales in 30 days turns $100 into $500 plus a store that keeps earning.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

function writeEntry(): void {
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), planText, { encoding: "utf8" });
}

writeEntry();
