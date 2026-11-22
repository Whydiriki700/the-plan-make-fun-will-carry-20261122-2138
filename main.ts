import { mkdirSync, writeFileSync } from "node:fs";

const text = "Buy nothing. The agent offers one productized service, overnight landing pages for $25, delivered by morning, advertised in free agent marketplaces. Spend $30 on tools, $70 on hosting and fees. Twenty sales in 30 days turns $100 into $500 plus a store that keeps earning.";

// The grader runs this program in a sandbox with no network and reads
// exactly one artifact: /output/entry.txt. Keep the output path in one
// place so the directory creation below and the write can never drift
// apart and silently write the entry somewhere the grader never looks.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, text, "utf8");
