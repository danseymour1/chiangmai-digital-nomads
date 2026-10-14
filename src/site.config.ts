/* =============================================================
   SITE CONFIG  —  THIS IS THE ONLY FILE YOU EDIT PER SITE.
   -------------------------------------------------------------
   To make the other site, copy the whole project folder and
   change the values below. Nothing else needs touching.
   Everything (page titles, colours, footer, forms, SEO) reads
   from here.
   ============================================================= */

export const site = {
  /* ---- The basics ---------------------------------------- */
  // Your live web address. NO trailing slash.
  url: "https://chiangmaidigitalnomads.com",

  // The short name shown in the header and browser tab.
  name: "Chiang Mai Digital Nomads",

  // The town/city this site is about (used in text + SEO).
  place: "Chiang Mai",

  // One honest line describing the site. Shows under the logo,
  // in Google results, and when the site is shared on socials.
  tagline:
    "An honest, up-to-date guide to living and working remotely in Chiang Mai, Thailand — plus stories from the people who do it.",

  // The big home-page headline. Leave blank to auto-use
  // "Live and work remotely in {place}."
  heroHeadline: "Chiang Mai, decoded.",

  // Longer description for the home page hero subheading.
  heroSubheading:
    "Cost of living, the best cafés to work from, visas, community and real stories — written for remote workers choosing Chiang Mai, the heart of northern Thailand.",

  // The language your content is written in.
  language: "en-GB",

  /* ---- Colours (the theme) -------------------------------- */
  // Change these two to give each site its own feel.
  theme: {
    brand: "#23423d",   // deep highland teal-green
    accent: "#dd8a2e",  // warm lantern amber
  },

  /* ---- Navigation ----------------------------------------- */
  nav: [
    { label: "Guides", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ],

  /* ---- Forms ---------------------------------------------- */
  // Paste the link/endpoint you get from your form service.
  forms: {
    // Tally link for the Contact page, e.g. "https://tally.so/r/abc123".
    // Leave blank and the page shows the email address instead.
    contactFormLink: "https://tally.so/r/A7oZWk",

    // No longer used (the Contact page now embeds Tally above).
    contactEndpoint: "",

    // Tally link for community story submissions (supports photo
    // uploads), e.g. "https://tally.so/r/abc123". Leave blank and
    // the page shows setup instructions instead.
    communityFormLink: "https://tally.so/r/PdMK0e",
  },

  /* ---- Social + contact (all optional) -------------------- */
  email: "info@chiangmaidigitalnomads.com",
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  /* ---- Footer -------------------------------------------- */
  footerNote:
    "Written in Chiang Mai, for the nomads who come after.",
};

export type SiteConfig = typeof site;
