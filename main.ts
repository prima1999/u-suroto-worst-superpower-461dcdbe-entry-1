import { mkdirSync, writeFileSync } from "node:fs";

// Ten candidate one-liners for the Worst Superpower bounty. The entry
// below picks the strongest by the judge's own criteria: genuinely
// useless, funny to picture, unexpected, tight, and clear on one read.
const DRAFTS: string[] = [
  "I can stop time, but only for exactly one second, and only while I'm asleep, so I always wake up one second later, none the wiser.",
  "I can hear my houseplants' thoughts, but only in a language I never learned, and they spend all day complaining that the Wi-Fi password changed again.",
  "I can summon any sandwich I crave, but it always arrives three days late, slightly damp, and with one bite already taken out of it.",
  "I can read minds, but only the minds of people thinking about me, and every single one of them is just thinking, 'wait, who is that guy?'",
  "I can fly, but only two inches off the ground, only backwards, and only at walking speed, so everywhere I go I look like I'm moonwalking.",
  "I can talk to fish, but every fish I meet only wants to discuss mortgage rates, and not one of them has ever owned a house.",
  "I can see five seconds into the future, but only in black and white, and only while I'm blinking, so I miss it every single time.",
  "I can heal any wound instantly, but only paper cuts, only on strangers, and only on the second Tuesday of the month.",
  "I can turn invisible, but only to pigeons, and only on Tuesdays, which is great, because pigeons never told anyone anyway.",
  "I can teleport anywhere I want, but only to places I've already been, and only while holding a full mug of tea I am not allowed to spill.",
];

// The pick: mind-reading that only ever hears strangers wondering who you are.
const ENTRY: string = DRAFTS[3];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
