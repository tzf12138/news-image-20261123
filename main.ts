// Entry for the make.fun competition news-image-20261123 (program/v1, Node 22,
// standard library only). The entry image is the file entry.png next to this
// program: a newspaper front page summing up the world's news of Monday
// 23 November 2026. The program copies that image to /output/entry.png,
// or to $MAKEFUN_OUTPUT_DIR/entry.png when run outside the grader, so the
// two runs the grader makes write the same bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
