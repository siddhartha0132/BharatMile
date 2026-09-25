// Single source of truth for <head> SEO tags. Pages still set their own
// title/description (imperatively or via Helmet); this runs afterwards and
// leaves exactly one canonical, description and set of OG/Twitter tags.
// Used both in the browser (SiteSeo) and at build time (prerender).

export const SITE = "https://bharatmile.com";
export const DEFAULT_IMAGE = `${SITE}/preview.jpg`;
const DEFAULT_TITLE = "Book Ranthambore Safari Tours & Jaipur Sightseeing Packages | BharatMile";
const DEFAULT_DESC =
  "Book expert Ranthambore tiger safari tours & Jaipur sightseeing packages with BharatMile. Family-safe safaris, heritage fort tours, custom itineraries from ₹4,999. WhatsApp us today!";

const FALLBACK = {
  "/blogs": {
    title: "Ranthambore, Jaipur & India Travel Blog 2026 | BharatMile",
    description:
      "Ranthambore safari guides, Jaipur itineraries, booking tips and India travel stories from BharatMile's Jaipur-based team. Plan smarter, book with confidence.",
  },
  "/about": {
    description:
      "BharatMile is a Jaipur-based travel company running Ranthambore tiger safaris and Jaipur heritage tours. Meet the team, our promise and why families trust us.",
  },
  "/contact": {
    description:
      "Contact BharatMile to plan a Ranthambore safari or Jaipur sightseeing tour. Call or WhatsApp +91-9636974688 — quick replies, custom quotes, no hidden charges.",
  },
  "/city": {
    title: "Rajasthan City Guides: Jaipur, Ranthambore, Udaipur & More | BharatMile",
  },
};

const clip = (s, n) => {
  s = (s || "").replace(/\s+/g, " ").trim();
  return s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)) + "…";
};

function upsert(doc, selector, create) {
  const all = [...doc.head.querySelectorAll(selector)];
  all.slice(1).forEach((el) => el.remove());
  if (all[0]) return all[0];
  const el = create();
  doc.head.appendChild(el);
  return el;
}

function setMeta(doc, key, value, attr = "name") {
  const el = upsert(doc, `meta[${attr}="${key}"]`, () => {
    const m = doc.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute("content", value);
}

export function normalizeHead(doc, pathname, { kind, notFound } = {}) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  const url = path === "/" ? `${SITE}/` : `${SITE}${path}`;
  const fb = FALLBACK[path] || {};
  const h1 = doc.querySelector("#root h1")?.textContent;
  const firstPara = [...doc.querySelectorAll("#root main p")].find((p) => p.textContent.trim().length > 80)?.textContent;

  // Title — the last <title> wins (Helmet appends its own).
  const titles = [...doc.head.querySelectorAll("title")];
  let title = (titles.at(-1)?.textContent || doc.title || "").trim();
  if (path !== "/" && (!title || title === DEFAULT_TITLE)) {
    title = fb.title || (h1 ? `${clip(h1, 55)} | BharatMile` : DEFAULT_TITLE);
  }
  titles.slice(0, -1).forEach((t) => t.remove());
  doc.title = title;

  // Description — prefer the page's own (the last one added).
  const descs = [...doc.head.querySelectorAll('meta[name="description"]')];
  let description = descs.at(-1)?.getAttribute("content") || "";
  if (path !== "/" && (!description || description === DEFAULT_DESC)) {
    description = fb.description || clip(firstPara, 155) || description;
  }
  descs.forEach((d) => d.remove());
  setMeta(doc, "description", description);

  // Canonical — always the clean URL of the route being served.
  upsert(doc, 'link[rel="canonical"]', () => {
    const l = doc.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  }).setAttribute("href", url);

  setMeta(doc, "robots", notFound ? "noindex, follow" : "index, follow");

  // Open Graph / Twitter mirror the final title & description. Page-level
  // og:image values mostly point at unhashed /assets paths that 404, so
  // use the site preview image everywhere.
  setMeta(doc, "og:title", title, "property");
  setMeta(doc, "og:description", description, "property");
  setMeta(doc, "og:url", url, "property");
  setMeta(doc, "og:type", kind === "blog" ? "article" : "website", "property");
  setMeta(doc, "og:image", DEFAULT_IMAGE, "property");
  setMeta(doc, "twitter:title", title);
  setMeta(doc, "twitter:description", description);
  setMeta(doc, "twitter:image", DEFAULT_IMAGE);

  // Breadcrumbs (shown in Google results as bharatmile.com › Blogs › …).
  const section = kind === "blog" ? ["Blogs", "/blogs"] : path.startsWith("/city/") ? ["Cities", "/city"] : null;
  doc.getElementById("ld-breadcrumb")?.remove();
  if (section && !notFound) {
    const crumbs = [["Home", "/"], section, [clip(h1 || title, 80), path]];
    const ld = doc.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "ld-breadcrumb";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map(([name, p], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        item: p === "/" ? `${SITE}/` : `${SITE}${p}`,
      })),
    });
    doc.head.appendChild(ld);
  }

  // Pages append JSON-LD on every mount; drop exact duplicates.
  const seen = new Set();
  doc.head.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
    const key = s.textContent.trim();
    if (seen.has(key)) s.remove();
    else seen.add(key);
  });
}
