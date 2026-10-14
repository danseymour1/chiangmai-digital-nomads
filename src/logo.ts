/* -------------------------------------------------------------
   LOGO MARK — a simplified Chiang Mai chedi on a 32×32 grid.
   Used by the header (src/components/Header.astro) and the
   favicon (src/pages/favicon.svg.ts), coloured from the theme:
   "brand" parts use theme.brand, "accent" parts theme.accent and
   "paper" parts the page background colour.

   Shapes snap to even units so edges land on whole pixels at
   16px. To switch design, change `logo` at the bottom.
   ------------------------------------------------------------- */

export type LogoPart = { d: string; tone: "brand" | "accent" | "paper" };

// A: Wat Chedi Luang style. Stepped base and bell in brand,
// gilded spire in accent.
export const chediLuang: LogoPart[] = [
  { tone: "brand", d: "M4 30h24v-4H4zM8 26h16v-4H8zM10 22h12v-4H10z" },
  { tone: "brand", d: "M12 18c0-3.4 1.6-5.4 4-6 2.4.6 4 2.6 4 6z" },
  { tone: "accent", d: "M14 12 16 2l2 10z" },
];

// B: Doi Suthep style. Golden bell chedi in accent on a brand plinth.
export const doiSuthep: LogoPart[] = [
  { tone: "brand", d: "M6 30h20v-2H6zM8 28h16v-2H8z" },
  { tone: "accent", d: "M8 26c0-5.6 3.4-9 8-9.6 4.6.6 8 4 8 9.6z" },
  { tone: "accent", d: "M12 16h8l-1-2h-6zM13.5 13 16 2l2.5 11z" },
];

// C: Chedi on a rounded brand tile. Strongest contrast on any
// browser-tab colour, heavier in the header.
export const chediTile: LogoPart[] = [
  {
    tone: "brand",
    d: "M7 0h18a7 7 0 0 1 7 7v18a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7z",
  },
  { tone: "paper", d: "M6 28h20v-4H6zM8 24h16v-4H8zM10 20h12v-4H10z" },
  { tone: "paper", d: "M12 16c0-3 1.6-4.8 4-5.4 2.4.6 4 2.4 4 5.4z" },
  { tone: "accent", d: "M14 10.6 16 3l2 7.6z" },
];

export const logo = chediLuang;
