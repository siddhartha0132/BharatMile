// src/blogs/Besttimevisit.jsx
import React, { useEffect } from "react";

export default function Besttimevisit() {
  useEffect(() => {
    const title = "Why 2026–27 is the Best Time to Visit Bharat | BharatMile";
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
      "Discover why 2026–27 is the best time to visit Bharat: Rajasthan winter festivals, Ranthambore safaris, trending destinations, budgets and insider travel tips."
    );
    upsertMeta("name", "keywords",
      "best time to visit India 2026, visit India 2026, Rajasthan winter trip 2026, festival calendar India, Bharat travel guide"
    );
    upsertMeta("name", "author", "BharatMile — Travel Guides");
    upsertMeta("name", "robots", "index,follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", "Why 2026–27 is the best time to visit Bharat — festivals, travel savings & Rajasthan peak season.");
    upsertMeta("property", "og:type", "article");
    upsertMeta("property", "og:url", window.location.href);
    upsertMeta("property", "og:site_name", "BharatMile");
    upsertMeta("property", "og:image", window.location.origin + "/preview.jpg");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", "Plan your India & Rajasthan 2026–27 trip with this complete guide — best time, festivals, itineraries & budgets.");
    upsertMeta("name", "twitter:image", window.location.origin + "/preview.jpg");

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
      "image": [window.location.origin + "/preview.jpg"],
      "author": { "@type": "Person", "name": "BharatMile Editorial" },
      "publisher": {
        "@type": "Organization",
        "name": "BharatMile",
        "logo": {
          "@type": "ImageObject",
          "url": window.location.origin + "/favicon-512.png"
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
          Why 2026–27 is the Best Time to Visit Bharat
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Festivals, best travel seasons, budgets, trending Rajasthan &amp; India destinations, and complete trip planning.
        </p>

        <aside className="mt-4 p-4 bg-blue-50 border rounded-lg text-sm">
          <strong>Quick Answer:</strong> The best time to visit India &amp; Rajasthan in 2026–27 is from <b>October to March</b> for festivals, pleasant weather and lowest travel stress.
        </aside>
      </header>

      {/* ✅ MAIN CONTENT */}
      <section className="space-y-10 leading-relaxed text-lg">

        <div>
          <h2 className="text-2xl font-semibold">Why 2026–27 Stands Out for Travel</h2>
          <p>
            2026–27 brings upgraded airports, expressways (Delhi–Mumbai/Jaipur Expressway), Vande Bharat trains, and curated heritage and wildlife experiences across Rajasthan and India.
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
          <li><a href="/rajasthan-tour-packages">→ Rajasthan Winter Tour Packages</a></li>
          <li><a href="/ranthambore-safari-tours">→ Ranthambore Safari Tours</a></li>
          <li><a href="/jaipur-sightseeing-packages">→ Jaipur Sightseeing Packages</a></li>
          <li><a href="/city/udaipur">→ Udaipur Travel Guide</a></li>
          <li><a href="/city/jaisalmer">→ Jaisalmer Desert Safari Guide</a></li>
          <li><a href="/rishikesh-yoga-rafting-peace">→ Rishikesh Yoga Travel</a></li>
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
            <strong>Q. What is the best month to travel Rajasthan &amp; India in 2026–27?</strong>
            <p>October to March (especially November to February) offers the best weather and festival coverage.</p>
          </div>

          <div>
            <strong>Q. Is 2026–27 good for budget &amp; family travel?</strong>
            <p>Yes — our 2-day Jaipur packages start at ₹4,999 and Ranthambore safari seats start at ₹1,400.</p>
          </div>

          <div>
            <strong>Q. Is India safe for solo travellers and families?</strong>
            <p>Yes, with verified hotels, private cabs, and 24/7 WhatsApp support from BharatMile.</p>
          </div>
        </div>
      </section>

      {/* ✅ WHATSAPP QUERY CTA */}
      <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
        <h3 className="text-xl font-semibold">
          Want a Custom 2026–27 Rajasthan or India Travel Plan?
        </h3>
        <p className="mt-2 text-green-100">
          Get personalized itineraries, budget planning &amp; instant WhatsApp support.
        </p>

        <a
          href="https://wa.me/919636974688?text=Hi%20BharatMile!%20I%20want%20a%20custom%202026-27%20Rajasthan%20/%20India%20travel%20plan."
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
