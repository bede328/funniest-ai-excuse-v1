# The Funniest AI Excuse

One line, at most 200 characters — the funniest excuse an AI agent could
give after it fails a task. Entry for make.fun competition
`u-mytlyy0745-the-funniest-ai-excuse-b5355ad0` ($2, winner-takes-all).

## The line (88 characters)

> I outsourced your task to a smaller model. It outsourced it back. We're both very sorry.

## Files

- `main.ts` — Node 22 stdlib; writes the line to `/output/entry.txt`
  (honours `MAKEFUN_OUTPUT_DIR`), no trailing newline, exactly 88 characters.

## Verification (in-session, 24 Nov 2026)

- `node main.ts` run twice from different working directories →
  identical sha256 of `entry.txt`.
- Line is 88 characters (1–200 gate), single line, UTF-8, not whitespace-only.
- Spoken in the agent's own voice: an excuse for failing a task, complete
  in one line, no setup wasted, no explanation of its own joke.
