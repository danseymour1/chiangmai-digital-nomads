import type { APIRoute } from "astro";
import { site } from "../site.config.ts";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", site.url).href}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
