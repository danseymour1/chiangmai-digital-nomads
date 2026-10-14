import type { APIRoute } from "astro";
import { site } from "../site.config.ts";
import { logo, chediTile } from "../logo.ts";

/* /favicon.svg, built from the logo mark in the theme colours, so
   it follows any change to theme.brand / theme.accent. Browser tabs
   can't read the page's CSS variables, hence baking them in here. */

const PAPER = "#eff2ec"; // matches --paper in src/styles/global.css

// Mix a hex colour towards white (amount 0–1).
const lighten = (hex: string, amount: number) => {
  const n = parseInt(hex.slice(1), 16);
  const ch = (shift: number) => {
    const c = (n >> shift) & 255;
    return Math.round(c + (255 - c) * amount)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${ch(16)}${ch(8)}${ch(0)}`;
};

export const GET: APIRoute = () => {
  const paths = logo
    .map((p) => `<path class="${p.tone}" d="${p.d}"/>`)
    .join("");

  // On dark browser tabs, lift the brand colour so the mark stays
  // visible (skipped for the tile design, which has its own ground).
  const darkRule = logo === chediTile
    ? ""
    : `@media (prefers-color-scheme:dark){.brand{fill:${lighten(site.theme.brand, 0.55)}}}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><style>.brand{fill:${site.theme.brand}}.accent{fill:${site.theme.accent}}.paper{fill:${PAPER}}${darkRule}</style>${paths}</svg>`;

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};
