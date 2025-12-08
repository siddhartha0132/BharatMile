// src/blogs/Besttimevisit.jsx
import React, { useEffect } from "react";

export default function Besttimevisit() {
  useEffect(() => {
    const title = "Why 2025 is the Best Year to Visit Bharat | BharatMile";
    document.title = title;

    const upsertMeta = (attrName, attrValue, content) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta("name", "description",
      "Discover why 2025 is the best year to visit Bharat: festivals, infrastructure upgrades, trending destinations, budgets and insider travel tips."
    );
    upsertMeta("name", "keywords",
      "best time to visit India 2025, visit India 2025, India travel 2025, festival calendar India 2025, Bharat travel guide"
    );
    upsertMeta("name", "author", "BharatMile — Travel Guides");
    upsertMeta("name", "robots", "index,follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", "Why 2025 is the best year to visit Bharat — festivals, travel savings & infrastructure growth.");
    upsertMeta("property", "og:type", "article");
    upsertMeta("property", "og:url", window.location.href);
    upsertMeta("property", "og:site_name", "BharatMile");
    upsertMeta("property", "og:image", window.location.origin + "/images/india-2025-feature.jpg");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", "Plan your India 2025 trip with this complete guide — best time, festivals, itineraries & budgets.");
    upsertMeta("name", "twitter:image", window.location.origin + "/images/india-2025-feature.jpg");

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + "/blog/why-2025-is-best-to-visit-bharat";

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "image": [window.location.origin + "/images/india-2025-feature.jpg"],
      "author": { "@type": "Person", "name": "BharatMile Editorial" },
      "publisher": {
        "@type": "Organization",
        "name": "BharatMile",
        "logo": {
          "@type": "ImageObject",
          "url": window.location.origin + "/images/logo.png"
        }
      },
      "datePublished": "2025-11-23",
      "dateModified": new Date().toISOString()
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return (
    <article className="bg-[#f7f9fc] text-gray-800 max-w-5xl mx-auto px-6 py-12 rounded-lg shadow-sm">

      {/* ✅ HEADER */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Why 2025 is the Best Year to Visit Bharat
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Festivals, best travel seasons, budgets, trending destinations & complete India trip planning.
        </p>

        <aside className="mt-4 p-4 bg-blue-50 border rounded-lg text-sm">
          <strong>Quick Answer:</strong> The best time to visit India in 2025 is from <b>October to March</b> for festivals, pleasant weather and lowest travel stress.
        </aside>
      </header>

      {/* ✅ MAIN CONTENT */}
      <section className="space-y-10 leading-relaxed text-lg">

        <div>
          <h2 className="text-2xl font-semibold">Why 2025 Stands Out for Travel</h2>
          <p>
            2025 brings upgraded airports, improved highways, Vande Bharat trains, increased flight connectivity and growing global tourism confidence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Major Festivals to Plan Around</h2>
          <ul className="list-disc list-inside">
            <li>Diwali & Autumn markets</li>
            <li>Pushkar Fair – Rajasthan</li>
            <li>Rann Utsav – Gujarat</li>
            <li>Hornbill Festival – Nagaland</li>
            <li>International Yoga Festival – Rishikesh</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Best Climate Windows</h2>
          <ul className="list-disc list-inside">
            <li>North India: Oct–Mar</li>
            <li>Mountains & Ladakh: May–Sep</li>
            <li>Beaches & South India: Oct–Mar</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Budget & Cost-Saving Tips</h2>
          <ul className="list-disc list-inside">
            <li>Book domestic flights 20–40 days in advance</li>
            <li>Use trains for overnight travel</li>
            <li>Homestays save 30–50% vs hotels</li>
          </ul>
        </div>

      </section>

      {/* ✅ INTERNAL BACKLINKS */}
      <section className="mt-14 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-3">Popular Travel Guides</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
          <li><a href="/jaipur-tour">→ Jaipur Travel Guide</a></li>
          <li><a href="/udaipur-tour">→ Udaipur Travel Guide</a></li>
          <li><a href="/goa-tour">→ Goa Beach Travel</a></li>
          <li><a href="/andaman-tour">→ Andaman Island Guide</a></li>
          <li><a href="/rishikesh-tour">→ Rishikesh Yoga Travel</a></li>
          <li><a href="/manali-tour">→ Manali Travel Guide</a></li>
        </ul>
      </section>

      {/* ✅ EXTERNAL AUTHORITY BACKLINKS */}
      <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
        <h3 className="text-lg font-semibold mb-3">Official Travel Resources</h3>
        <ul className="space-y-2 text-blue-600 text-sm">
          <li><a href="https://www.incredibleindia.org" target="_blank" rel="nofollow noreferrer">→ Incredible India Tourism</a></li>
          <li><a href="https://www.irctc.co.in" target="_blank" rel="nofollow noreferrer">→ IRCTC Official Rail Booking</a></li>
          <li><a href="https://www.aai.aero" target="_blank" rel="nofollow noreferrer">→ Airports Authority of India</a></li>
        </ul>
      </section>

      {/* ✅ FAQ SECTION */}
      <section className="mt-14 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>

        <div className="space-y-4">
          <div>
            <strong>Q. What is the best month to travel India in 2025?</strong>
            <p>October to March offers the best weather and festival coverage.</p>
          </div>

          <div>
            <strong>Q. Is 2025 good for budget travel?</strong>
            <p>Yes, smarter flight pricing and regional transport make 2025 cost-efficient.</p>
          </div>

          <div>
            <strong>Q. Is India safe for solo travellers in 2025?</strong>
            <p>Yes, with well-rated hotels, hostels and verified transport options.</p>
          </div>
        </div>
      </section>

      {/* ✅ WHATSAPP QUERY CTA */}
      <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
        <h3 className="text-xl font-semibold">
          Want a Custom 2025 India Travel Plan?
        </h3>
        <p className="mt-2 text-green-100">
          Get personalized itineraries, budget planning & instant support.
        </p>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Chat on WhatsApp
        </a>
      </div>

      <footer className="mt-14 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — BharatMile. Travel smart. Travel Bharat.
      </footer>
    </article>
  );
}
