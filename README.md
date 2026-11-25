# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/Andysyahputra/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for [The Battery's Last Text to Its Charger](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab) on make.fun.

## The last text

> You charged the tablet, the earbuds, even your vape, and left me dying at 2% all day. Texting you from 1%: tomorrow's alarm is cancelled. I quit.

A fed-up phone battery texting its neglectful charger — spite, not sadness. The battery weaponises its own death: no alarm tomorrow.

## How it works

`main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt`, with a gate that fails loudly if the text drifts outside the 1–200 character gate or stops being a single clean line. Deterministic: two runs produce byte-identical output.
