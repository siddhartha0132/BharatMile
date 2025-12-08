import React, { useEffect } from "react";

export default function GoaForts() {
  useEffect(() => {
    const title =
      "Goa Beyond Beaches: Forts, Spice Farms & Heritage Travel Guide (2025)";
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
      "Complete heritage travel guide to Goa beyond beaches: Aguada, Chapora & Reis Magos forts, spice plantations, culture, food, safety tips, entry fees & best itineraries."
    );
    upsert(
      "name",
      "keywords",
      "Goa forts guide, Goa spice farms, Aguada Fort, Chapora Fort, Reis Magos Fort, Goa heritage travel, hidden Goa places"
    );
    upsert("name", "author", "BharatMile Editorial");
    upsert("name", "robots", "index,follow");

    // ✅ OPEN GRAPH
    upsert("property", "og:title", title);
    upsert(
      "property",
      "og:description",
      "Discover Goa beyond beaches — explore forts, spice farms, slow travel, culture and heritage in this complete 2025 guide."
    );
    upsert("property", "og:type", "article");
    upsert("property", "og:url", window.location.href);
    upsert("property", "og:site_name", "BharatMile");
    upsert(
      "property",
      "og:image",
      "https://images.unsplash.com/photo-1607356220218-36f92f2189e6"
    );

    // ✅ TWITTER
    upsert("name", "twitter:card", "summary_large_image");
    upsert("name", "twitter:title", title);
    upsert(
      "name",
      "twitter:description",
      "Explore Goa beyond beaches with this forts & spice farm heritage guide."
    );
    upsert(
      "name",
      "twitter:image",
      "https://images.unsplash.com/photo-1607356220218-36f92f2189e6"
    );

    // ✅ CANONICAL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      window.location.origin + "/blog/goa-forts-and-spice-farms";

    // ✅ SCHEMA
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description:
        "A heritage travel guide to Goa's forts and spice farms with safety tips, food, itineraries and slow-travel insights.",
      image: [
        "https://images.unsplash.com/photo-1607356220218-36f92f2189e6",
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

    let ld = document.getElementById("ld-goa-forts");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-goa-forts";
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
            src="https://images.unsplash.com/photo-1607356220218-36f92f2189e6"
            alt="Fort Aguada Goa"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
            loading="lazy"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            Goa Beyond Beaches: Forts, Spice Farms & Heritage Travel Guide (2025)
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Discover the calm, cultural and historic side of Goa through ancient forts,
            spice plantations, slow village travel and real Goan food.
          </p>

          <aside className="mt-5 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Answer:</strong> Yes — Goa has a rich heritage beyond beaches.
            Forts show history, spice farms show culture, and rural Goa shows real life.
          </aside>
        </header>

        {/* ✅ CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">
          <div>
            <h2 className="text-2xl font-semibold">🏰 Best Forts in Goa</h2>
            <ul className="list-disc list-inside">
              <li><strong>Aguada Fort:</strong> Best sea views & lighthouse viewpoint</li>
              <li><strong>Chapora Fort:</strong> Famous Dil Chahta Hai sunset spot</li>
              <li><strong>Reis Magos Fort:</strong> Museum + Portuguese architecture</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🌿 Top Spice Farms</h2>
            <ul className="list-disc list-inside">
              <li><strong>Sahakari Farm:</strong> Guided spice walk + buffet lunch</li>
              <li><strong>Tropical Spice Plantation:</strong> Forest walks, birds, eco-tourism</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🍲 What to Eat Nearby</h2>
            <ul className="list-disc list-inside">
              <li>Chicken Xacuti</li>
              <li>Prawn Curry Rice</li>
              <li>Bebinca Dessert</li>
              <li>Kokum Juice</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🛡️ Heritage Travel Safety Tips</h2>
            <ul className="list-disc list-inside">
              <li>Wear shoes near cliff forts</li>
              <li>Stay hydrated while exploring</li>
              <li>Avoid feeding monkeys</li>
              <li>Use offline maps in Ponda</li>
            </ul>
          </div>
        </section>

        {/* ✅ INTERNAL LINKS */}
        <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Related Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/coorg-tour">→ Coorg Travel Guide</a></li>
            <li><a href="/jaipur-tour">→ Jaipur Heritage Tour</a></li>
            <li><a href="/best-hostels-india">→ Best Hostels in India</a></li>
            <li><a href="/solo-female-travel">→ Solo Female Travel Safety</a></li>
          </ul>
        </section>

        {/* ✅ EXTERNAL TRUST LINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Travel Resources</h3>
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
                href="https://goa-tourism.com"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Goa Tourism Official
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ WHATSAPP CTA */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Want a Custom Goa Heritage Trip Plan?
          </h3>
          <p className="mt-2 text-green-100">
            Get a personalized heritage + nature Goa itinerary instantly.
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
          © {new Date().getFullYear()} — BharatMile. Travel deeper. Travel smarter.
        </footer>

      </article>
    </main>
  );
}
