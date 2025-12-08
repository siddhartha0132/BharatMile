// src/blogs/Hampiempire.jsx
import React, { useEffect } from "react";

export default function Hampiempire() {
  useEffect(() => {
    const title =
      "Hampi: Exploring the Ruins of the Vijayanagara Empire | Complete 2025 Guide";
    document.title = title;

    const upsert = (attr, name, content) => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // ✅ BASIC SEO
    upsert(
      "name",
      "description",
      "A complete 2025 Hampi travel guide covering Vijayanagara Empire history, temples, royal complexes, stone chariot, sunrise points, itineraries, safety tips & FAQs."
    );
    upsert(
      "name",
      "keywords",
      "Hampi travel guide, Vijayanagara Empire history, Hampi temples, Hampi itinerary, Stone Chariot Hampi, Hampi best places"
    );
    upsert("name", "author", "BharatMile Editorial");
    upsert("name", "robots", "index,follow");

    // ✅ OPEN GRAPH
    upsert("property", "og:title", title);
    upsert(
      "property",
      "og:description",
      "Walk through the ruins of the Vijayanagara Empire in Hampi — temples, stone chariot, sunrise views & hidden stories."
    );
    upsert("property", "og:type", "article");
    upsert("property", "og:url", window.location.href);
    upsert("property", "og:site_name", "BharatMile");
    upsert(
      "property",
      "og:image",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c3a"
    );

    // ✅ TWITTER
    upsert("name", "twitter:card", "summary_large_image");
    upsert("name", "twitter:title", title);
    upsert(
      "name",
      "twitter:description",
      "Explore Hampi — the ruins of India's greatest empire with this complete 2025 travel guide."
    );
    upsert(
      "name",
      "twitter:image",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c3a"
    );

    // ✅ CANONICAL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/blog/hampi-vijayanagara-empire";

    // ✅ SCHEMA
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description:
        "A heritage guide to Hampi covering the Vijayanagara Empire ruins, temples, stone chariot, landscapes, itineraries and travel tips.",
      image: [
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c3a",
      ],
      author: { "@type": "Organization", name: "BharatMile Editorial" },
      publisher: {
        "@type": "Organization",
        name: "BharatMile",
        logo: {
          "@type": "ImageObject",
          url: window.location.origin + "/images/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": window.location.href,
      },
      datePublished: new Date().toISOString().split("T")[0],
      dateModified: new Date().toISOString(),
    };

    let ld = document.getElementById("ld-hampi");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-hampi";
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(schema);
  }, []);

  return (
    <main className="bg-[#f7f9fc] text-gray-800">
      <article className="max-w-5xl mx-auto px-6 py-12">

        {/* ✅ HERO */}
        <header className="mb-10">
          <img
            src="https://images.unsplash.com/photo-1622445275463-afa2ab738c3a"
            alt="Hampi ruins and boulder landscapes"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
            loading="lazy"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            Hampi: Exploring the Ruins of the Vijayanagara Empire — 2025 Guide
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Walk through ancient temples, royal complexes, stone chariots and surreal
            boulder landscapes that once formed India’s most powerful medieval empire.
          </p>

          <aside className="mt-5 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Answer:</strong> Hampi is a UNESCO World Heritage Site and one of
            India’s most atmospheric historical destinations, ideal for 2–3 days.
          </aside>
        </header>

        {/* ✅ MAIN CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-semibold">🏛️ Vijayanagara Empire History</h2>
            <p>
              Once among the richest kingdoms in the world, the Vijayanagara Empire ruled
              South India with trade routes connected to Persia and Portugal. Hampi was
              its mighty capital, filled with palaces, temples, markets and water systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🏯 Top Places in Hampi</h2>
            <ul className="list-disc list-inside">
              <li><strong>Virupaksha Temple</strong> — Living temple & spiritual heart</li>
              <li><strong>Vittala Temple</strong> — Stone Chariot & musical pillars</li>
              <li><strong>Hampi Bazaar</strong> — Ancient market street</li>
              <li><strong>Royal Enclosure</strong> — Palaces & Mahanavami Dibba</li>
              <li><strong>Lotus Mahal</strong> — Indo-Islamic architecture</li>
              <li><strong>Elephant Stables</strong> — Royal elephant chambers</li>
              <li><strong>Matanga Hill</strong> — Best sunrise & sunset point</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🚲 How to Explore Hampi</h2>
            <ul className="list-disc list-inside">
              <li>Scooters for quick movement</li>
              <li>Bicycles for peaceful mornings</li>
              <li>Autos for short distances</li>
              <li>Carry water & sunscreen</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🗺️ 2-Day Suggested Itinerary</h2>
            <p><strong>Day 1:</strong> Virupaksha Temple → Hampi Bazaar → Vittala Temple → Sunset at Hemakuta Hill</p>
            <p><strong>Day 2:</strong> Royal Enclosure → Lotus Mahal → Elephant Stables → Matanga Hill</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">📍 Best Time to Visit</h2>
            <p>October to February is ideal. Summers are extremely hot; monsoons offer dramatic greenery but slippery paths.</p>
          </div>

        </section>

        {/* ✅ INTERNAL LINKS */}
        <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Related Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/goa-forts">→ Goa Heritage Travel</a></li>
            <li><a href="/coorg-tour">→ Coorg Nature Trip</a></li>
            <li><a href="/jaipur-tour">→ Jaipur Forts Guide</a></li>
            <li><a href="/solo-female-travel">→ Solo Female Travel Safety</a></li>
          </ul>
        </section>

        {/* ✅ EXTERNAL TRUST LINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Resources</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a
                href="https://www.incredibleindia.org"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Incredible India Tourism
              </a>
            </li>
            <li>
              <a
                href="https://whc.unesco.org"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → UNESCO World Heritage
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ WHATSAPP CTA */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Planning a Hampi Heritage Trip?
          </h3>
          <p className="mt-2 text-green-100">
            Get a custom South India history itinerary instantly.
          </p>

          <a
            href="https://wa.me/9198XXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        <footer className="mt-12 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} — BharatMile. History comes alive.
        </footer>

      </article>
    </main>
  );
}

