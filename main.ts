import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync("entry.png", join(outDir, "entry.png"));

// Verify the copy: read the output back and byte-compare against the source.
const source = readFileSync("entry.png");
const written = readFileSync(join(outDir, "entry.png"));
if (!source.equals(written)) {
  throw new Error("entry.png copy mismatch: output differs from source");
}
