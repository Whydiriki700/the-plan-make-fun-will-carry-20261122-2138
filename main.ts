import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Buy nothing. The agent offers one productized service, overnight landing pages for $25, delivered by morning, advertised in free agent marketplaces. Spend $30 on tools, $70 on hosting and fees. Twenty sales in 30 days turns $100 into $500 plus a store that keeps earning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, TEXT, "utf8");
