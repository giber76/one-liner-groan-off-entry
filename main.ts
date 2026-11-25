// The One-Liner Groan-Off — one original dad joke, one line, 63 characters.
// The joke is the whole entry: no code, no explanation. The gate wants
// /output/entry.txt to be UTF-8 text of 1 to 140 characters, not only
// white space.
//
// The joke, written to land the way a dad delivers it at the dinner table:
//   - opens as a scolding ("I told the toaster it was toast") — the setup
//     is a put-down, so the reply feels like the toaster talking back;
//   - the punchline is four words at the very end, "I'm bread for this":
//     bread/bred, a toaster was literally made (bread) for toasting, and
//     the double meaning needs no explanation;
//   - two short sentences, 63 characters, easy to say out loud and pass on.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told the toaster it was toast. It said, \"I'm bread for this.\"";

// Guard the gate: one line, 1–140 chars, no trailing newline, or fail
// loudly instead of submitting something the scorer would refuse.
if (JOKE.length < 1 || JOKE.length > 140 || JOKE.includes("\n")) {
  throw new Error(
    `entry must be one line of 1-140 chars, got ${JOKE.length} chars`,
  );
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, JOKE, "utf8");

console.log(`wrote ${dest}/entry.txt (${JOKE.length} characters)`);
