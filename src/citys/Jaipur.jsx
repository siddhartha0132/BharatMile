// filename: src/citys/Jaipur.jsx
import React, { useEffect } from "react";
import jaipurHero from "../assets/jaipur.jpeg"; // update path if needed
// optional additional images (place in assets folder)
import amberFort from "../assets/amber-fort.jpg";
import hawaMahal from "../assets/jaipur.jpeg";
import cityPalace from "../assets/city-palace.jpeg";

/**
 * Jaipur city page — longform, SEO-friendly, no external head libs
 *
 * Replace placeholders:
 *  - SITE_URL -> your live site URL (e.g. https://bharatmile.example)
 *  - companyName -> your company name (BharatMile)
 *  - image imports -> make sure images exist in /src/assets
 */

export default function Jaipur() {
  const city = "Jaipur";
  const country = "India";
  const siteUrl = "http://localhost:5173"; // change to your production domain when live
  const pageUrl = `${siteUrl}/city/jaipur`;
  const companyName = "BharatMile";
  const pageTitle =
    "Jaipur Travel Guide — Pink City Attractions, 3-Day Itinerary, Best Time to Visit";
  const description =
    "Complete Jaipur travel guide: top attractions (Hawa Mahal, Amber Fort, City Palace), 3-day itinerary, best time to visit, how to reach, where to eat, safety tips & local experiences.";

  // JSON-LD schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Cities", "item": `${siteUrl}/cities` },
      { "@type": "ListItem", "position": 3, "name": "Jaipur", "item": pageUrl }
    ]
  };

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "City",
    "name": city,
    "description": description,
    "url": pageUrl,
    "image": `${siteUrl}/assets/jaipur.jpeg`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "sameAs": [
      "https://en.wikipedia.org/wiki/Jaipur",
      "https://www.britannica.com/place/Jaipur"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": companyName,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [siteUrl],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": country
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to visit Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "October to March — pleasant weather and many festivals. Avoid April–June (very hot)."
        }
      },
      {
        "@type": "Question",
        "name": "How many days are enough to explore Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2–3 full days cover major sights (Hawa Mahal, Amber Fort, City Palace, Jantar Mantar) and shopping."
        }
      },
      {
        "@type": "Question",
        "name": "Is Jaipur safe for solo travellers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jaipur is generally safe during daytime for most travellers. Use common-sense precautions at night and avoid isolated areas."
        }
      }
    ]
  };

  // Set document head manually (avoids react-helmet dependency)
  useEffect(() => {
    // title
    document.title = pageTitle;

    // canonical
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", pageUrl);

    // meta description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Open Graph & Twitter — helper
    function upsertMeta(attrName, attrValue, content) {
      let sel = `meta[${attrName}='${attrValue}']`;
      let el = document.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", `${siteUrl}/assets/jaipur.jpeg`);
    upsertMeta("property", "og:type", "article");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", `${siteUrl}/assets/jaipur.jpeg`);

    // inject JSON-LD scripts (remove existing to avoid duplicates)
    const removeIfExists = (id) => {
      const e = document.getElementById(id);
      if (e) e.remove();
    };
    removeIfExists("jaipur-breadcrumb-jsonld");
    removeIfExists("jaipur-city-jsonld");
    removeIfExists("jaipur-business-jsonld");
    removeIfExists("jaipur-faq-jsonld");

    const addJsonLd = (id, obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    };

    addJsonLd("jaipur-breadcrumb-jsonld", breadcrumbSchema);
    addJsonLd("jaipur-city-jsonld", citySchema);
    addJsonLd("jaipur-business-jsonld", localBusinessSchema);
    addJsonLd("jaipur-faq-jsonld", faqSchema);

    // cleanup on unmount (optional)
    return () => {
      // not removing head tags on unmount to avoid flicker if SPA navigates;
      // if desired, remove added JSON-LD tags:
      removeIfExists("jaipur-breadcrumb-jsonld");
      removeIfExists("jaipur-city-jsonld");
      removeIfExists("jaipur-business-jsonld");
      removeIfExists("jaipur-faq-jsonld");
    };
  }, []); // run once

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* HERO */}
      <header className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg mb-12">
        <picture>
          <source
            srcSet={`${jaipurHero.replace(".jpeg", "-800.jpeg")} 800w, ${jaipurHero.replace(
              ".jpeg",
              "-1200.jpeg"
            )} 1200w`}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <img
            src={jaipurHero}
            alt="Jaipur – Pink City skyline and Amber Fort"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Jaipur — The Pink City of India
            </h1>
            <p className="text-sm md:text-base text-gray-200 mt-2 max-w-2xl">
              Explore royal palaces, hilltop forts, vibrant bazaars and authentic Rajasthani food — a complete guide to Jaipur.
            </p>
            <div className="mt-4">
              <a
                href="#top-places"
                className="inline-block bg-pink-600 text-white px-4 py-2 rounded-md mr-3"
              >
                Top Places
              </a>
              <a
                href="#itinerary"
                className="inline-block border border-white text-white px-4 py-2 rounded-md"
              >
                3-Day Itinerary
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Quick overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Jaipur is the capital of Rajasthan and a centre of royal Rajasthani architecture.
          Founded in 1727, the city is famous for its pink-painted historic district, palaces,
          hill forts and a thriving handicraft scene. Jaipur is a major stop on Rajasthan circuits
          and a gateway to hill forts and desert excursions.
        </p>
      </section>

      {/* TOP PLACES */}
      <section id="top-places" className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-center">Top places to visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-lg shadow p-6">
            <img src={hawaMahal || jaipurHero} alt="Hawa Mahal" className="w-full h-44 object-cover rounded-md mb-4" loading="lazy" />
            <h3 className="text-lg font-semibold">Hawa Mahal</h3>
            <p className="text-gray-600 mt-2">Built in 1799, this ornate five-storey facade is the city's most photographed landmark.</p>
          </article>

          <article className="bg-white rounded-lg shadow p-6">
            <img src={amberFort || jaipurHero} alt="Amber Fort" className="w-full h-44 object-cover rounded-md mb-4" loading="lazy" />
            <h3 className="text-lg font-semibold">Amber Fort</h3>
            <p className="text-gray-600 mt-2">Hilltop fort with courtyards, halls and the mirror palace — Sheesh Mahal.</p>
          </article>

          <article className="bg-white rounded-lg shadow p-6">
            <img src={cityPalace || jaipurHero} alt="City Palace Jaipur" className="w-full h-44 object-cover rounded-md mb-4" loading="lazy" />
            <h3 className="text-lg font-semibold">City Palace</h3>
            <p className="text-gray-600 mt-2">Royal residence with museums showcasing textiles, weapons and decorative arts.</p>
          </article>

          <article className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Jantar Mantar</h3>
            <p className="text-gray-600 mt-2">UNESCO-listed astronomical observatory with monumental instruments.</p>
          </article>

          <article className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Nahargarh Fort</h3>
            <p className="text-gray-600 mt-2">Panoramic city views and sunset spots above Jaipur.</p>
          </article>

          <article className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Local bazaars</h3>
            <p className="text-gray-600 mt-2">Johari Bazaar for jewelry, Bapu Bazaar for textiles and Rajasthani handicrafts.</p>
          </article>
        </div>
      </section>

      {/* ITINERARIES */}
      <section id="itinerary" className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">Suggested itineraries</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">2-Day Jaipur</h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li><strong>Day 1:</strong> Hawa Mahal (photo stop), City Palace, Jantar Mantar, evening shopping at Johari Bazaar.</li>
              <li><strong>Day 2:</strong> Amber Fort (arrive early), Panna Meena ka Kund, Nahargarh Fort sunset.</li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-3">3-Day Jaipur (Leisure)</h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Day 1: City Palace, Jantar Mantar, Albert Hall Museum.</li>
              <li>Day 2: Amber Fort, Jaigarh Fort, Panna Meena stepwell.</li>
              <li>Day 3: Textile workshops, cooking class, evening cultural show or light/sound at Amber.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Practical travel tips</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li><strong>Getting there:</strong> Jaipur has an international airport (JAI) with frequent flights to major Indian cities. It is also connected by rail and national highways.</li>
          <li><strong>Local transport:</strong> Use app-based cabs, prepaid taxis, or cycle-rickshaws for short trips. Negotiate fares for auto-rickshaws if needed.</li>
          <li><strong>Money:</strong> Major cards accepted in hotels and big shops; carry cash for bazaars and small food stalls.</li>
          <li><strong>Clothing:</strong> Lightweight breathable clothes for summers; late autumn to winter evenings can be cool.</li>
          <li><strong>Health & Safety:</strong> Drink bottled water, carry sunscreen, and be cautious when sampling street food (choose busy stalls).</li>
        </ul>
      </section>

      {/* FOOD */}
      <section id="food" className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Where to eat — Rajasthani food highlights</h2>
        <p className="text-gray-700 mb-4">
          Try local specialities like Laal Maas (spicy mutton curry), Dal Baati Churma, Ghevar (sweet), and kachoris. Popular dining areas: MI Road, C Scheme, and old city lanes near the bazaars.
        </p>
      </section>

      {/* NEARBY TRIPS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Nearby trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Pushkar</h3>
            <p className="mt-2">Famous for the Pushkar lake and Brahma temple (3–4 hours by road).</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Sambhar Salt Lake / Samode</h3>
            <p className="mt-2">Lesser-known escapes for heritage hotels and quiet countryside drives.</p>
          </div>
        </div>
      </section>

      {/* FAQ — inline for users */}
      <section id="faq" className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>

        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-medium">When is the best time to visit Jaipur?</summary>
            <p className="mt-2 text-gray-700">October to March is ideal — pleasant temperatures and festival season.</p>
          </details>

          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-medium">How much should I budget?</summary>
            <p className="mt-2 text-gray-700">Budget depends on style: budget travellers (₹1500–₹3000/day), midrange (₹3000–₹7000/day), luxury much higher.</p>
          </details>

          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-medium">Do I need advance tickets for attractions?</summary>
            <p className="mt-2 text-gray-700">Amber Fort, City Palace and some museums have ticket counters and online booking — buy online for peak season to skip queues.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-12 text-center">
        <p className="text-gray-700 mb-4">Planning a trip? BharatMile can help with local tours, guides, and curated experiences.</p>
        <a href={`${siteUrl}/contact`} className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md">
          Contact BharatMile
        </a>
      </section>

      <footer className="text-sm text-gray-500">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </main>
  );
}
