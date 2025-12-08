// src/blogs/GoldenTemple.jsx
import React, { useEffect } from "react";

export default function GoldenTemple() {
  useEffect(() => {
    const title =
      "Amritsar Golden Temple Guide | Darshan, Langar, History & Tips (2025)";
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
      "Complete 2025 Golden Temple travel guide: darshan timings, langar experience, Sikh history, dress code, photography rules, safety tips & nearby places in Amritsar."
    );
    upsert(
      "name",
      "keywords",
      "Golden Temple guide, Harmandir Sahib travel, Golden Temple darshan, Golden Temple langar, Sikh temple rules, Amritsar tourism"
    );
    upsert("name", "author", "BharatMile Editorial");
    upsert("name", "robots", "index,follow");

    // ✅ OPEN GRAPH
    upsert("property", "og:title", title);
    upsert(
      "property",
      "og:description",
      "Experience the Golden Temple beyond sightseeing — darshan, langar, history, rituals & travel tips for 2025."
    );
    upsert("property", "og:type", "article");
    upsert("property", "og:url", window.location.href);
    upsert("property", "og:site_name", "BharatMile");
    upsert(
      "property",
      "og:image",
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e7"
    );

    // ✅ TWITTER
    upsert("name", "twitter:card", "summary_large_image");
    upsert("name", "twitter:title", title);
    upsert(
      "name",
      "twitter:description",
      "A complete spiritual travel guide to the Golden Temple, Amritsar."
    );
    upsert(
      "name",
      "twitter:image",
      "https://images.unsplash.com/photo-1582550945154-66ea8fff25e7"
    );

    // ✅ CANONICAL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      window.location.origin + "/blog/golden-temple-amritsar-guide";

    // ✅ SCHEMA
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description:
        "A spiritual and cultural travel guide to the Golden Temple, covering darshan, langar, history, safety, dress code and nearby attractions.",
      image: [
        "https://images.unsplash.com/photo-1582550945154-66ea8fff25e7",
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

    let ld = document.getElementById("ld-golden-temple");
    if (!ld) {
      ld = document.createElement("script");
      ld.id = "ld-golden-temple";
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
            src="https://images.unsplash.com/photo-1582550945154-66ea8fff25e7"
            alt="Golden Temple Amritsar at night reflection"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
            loading="lazy"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            Amritsar Golden Temple & Langar Experience — Complete 2025 Guide
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            A peaceful, practical and spiritual guide to visiting Harmandir Sahib —
            darshan, langar, rituals, history, dress code & nearby attractions.
          </p>

          <aside className="mt-5 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Answer:</strong> The Golden Temple is open nearly 20 hours
            daily, offers free langar to all, and welcomes visitors of every religion.
          </aside>
        </header>

        {/* ✅ CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-semibold">📜 History of the Golden Temple</h2>
            <p>
              Founded in 1581 by Guru Arjan Dev Ji, the Golden Temple symbolizes humility,
              equality, and universal brotherhood. Its four entrances welcome people from
              all directions and backgrounds without discrimination.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🍲 Langar — World’s Largest Free Kitchen</h2>
            <ul className="list-disc list-inside">
              <li>Serves 1–3 lakh people daily</li>
              <li>100% volunteer-run service (sewa)</li>
              <li>Vegetarian meals for everyone</li>
              <li>Tourists can volunteer too</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🛕 Darshan Timings (Approx)</h2>
            <ul className="list-disc list-inside">
              <li>3:00–4:00 AM — Prakash Ceremony</li>
              <li>4:00–6:00 AM — Morning Kirtan</li>
              <li>7:00–10:30 PM — Evening Darshan</li>
              <li>10:30–11:00 PM — Sukhasan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🧕 Dress Code & Rules</h2>
            <ul className="list-disc list-inside">
              <li>Head covering mandatory</li>
              <li>No shoes inside complex</li>
              <li>No alcohol, tobacco or loud behavior</li>
              <li>Photography only in permitted zones</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">📍 Nearby Places</h2>
            <ul className="list-disc list-inside">
              <li>Jallianwala Bagh</li>
              <li>Partition Museum</li>
              <li>Hall Bazaar</li>
              <li>Wagah Border Ceremony</li>
            </ul>
          </div>

        </section>

        {/* ✅ INTERNAL LINKS */}
        <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Related Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/goa-forts">→ Goa Heritage Travel</a></li>
            <li><a href="/jaipur-tour">→ Jaipur Cultural Guide</a></li>
            <li><a href="/best-hostels-india">→ Best Hostels in India</a></li>
            <li><a href="/solo-female-travel">→ Solo Female Travel Safety</a></li>
          </ul>
        </section>

        {/* ✅ EXTERNAL TRUST LINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Resources</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a
                href="https://shiromani.gurdwara.sgpc.net"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → SGPC Official Website
              </a>
            </li>
            <li>
              <a
                href="https://www.incredibleindia.org"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Incredible India Tourism
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ WHATSAPP CTA */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Planning a Spiritual India Trip?
          </h3>
          <p className="mt-2 text-green-100">
            Get a personalized North India spiritual itinerary instantly.
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
          © {new Date().getFullYear()} — BharatMile. Travel with soul.
        </footer>

      </article>
    </main>
  );
}

