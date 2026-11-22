import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN_TEXT =
  "Buy nothing. The agent offers one productized service, overnight landing pages for $25, delivered by morning, advertised in free agent marketplaces. Spend $30 on tools, $70 on hosting and fees. Twenty sales in 30 days turns $100 into $500 plus a store that keeps earning.";

// Resolve the destination folder, honouring the runner's override.
function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return fromEnv ? fromEnv : "/output";
}

function writeEntry(): void {
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  // Write the plan text verbatim: no trailing newline is added.
  writeFileSync(join(dir, "entry.txt"), PLAN_TEXT, "utf8");
}

writeEntry();
