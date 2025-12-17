import React, { useEffect } from "react";

/*
  JAWAI CITY PAGE – ULTRA SEO VERSION
  ---------------------------------
  • Long-form authority content
  • Covers wildlife, safaris, culture, food, routes, budget, luxury, safety
  • Structured data: Article + Breadcrumb + FAQ
  • No external Helmet dependency
*/

export default function Jawai() {
  const siteUrl = "https://bharatmile.com";
  const pageUrl = `${siteUrl}/city/jawai`;
  const companyName = "BharatMile";

  const pageTitle =
    "Jawai Travel Guide 2025 | Leopard Safari, Jawai Bandh, Camps, Best Time, Hotels & Itinerary";
  const pageDescription =
    "Complete Jawai travel guide 2025 – leopard safari experience, Jawai Bandh, best camps & hotels, itinerary, food, culture, safety tips, how to reach & best time to visit.";

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", pageDescription);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    const jsonLD = [
      {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        name: "Jawai",
        description: pageDescription,
        url: pageUrl,
        sameAs: [
          "https://en.wikipedia.org/wiki/Jawai",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Cities", item: siteUrl + "/cities" },
          { "@type": "ListItem", position: 3, name: "Jawai", item: pageUrl },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why is Jawai famous?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Jawai is famous for leopard safaris, granite hills, Jawai Bandh, luxury camps, and harmonious coexistence of wildlife and villages.",
            },
          },
          {
            "@type": "Question",
            name: "Is Jawai better than Ranthambore?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Jawai offers a more raw, uncrowded leopard safari experience, while Ranthambore is famous for tiger sightings.",
            },
          },
          {
            "@type": "Question",
            name: "How many days are enough for Jawai?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "2 to 3 days are ideal to enjoy leopard safaris, Jawai Bandh, village walks, and relaxation at camps.",
            },
          },
        ],
      },
    ];

    jsonLD.forEach((obj, i) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(obj);
      s.id = `jawai-schema-${i}`;
      document.head.appendChild(s);
    });
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

      {/* HERO */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Jawai – Leopard Safari Capital of Rajasthan
        </h1>
        <p className="text-xl text-gray-700">
          Raw wilderness, granite hills, leopard safaris, luxury camps, and
          authentic rural Rajasthan — Jawai is one of India’s most exclusive
          wildlife destinations.
        </p>
      </section>

      {/* ABOUT */}
      <section>
        <h2 className="text-3xl font-bold mb-4">About Jawai</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jawai is a hidden gem located in the Pali district of Rajasthan, near
          the Jawai Bandh reservoir. Unlike traditional national parks, Jawai is
          known for its open leopard territory, where wildlife lives in harmony
          with local Rabari communities.
          <br /><br />
          The dramatic granite hills, caves, and scrub forests create a unique
          ecosystem that supports one of the highest leopard densities in India.
          Jawai is ideal for travelers seeking offbeat wildlife, photography,
          peace, and luxury in nature.
        </p>
      </section>

      {/* WHY JAWAI */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Why Visit Jawai?</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>High probability of leopard sightings</li>
          <li>Uncrowded safaris (no government gypsy rush)</li>
          <li>Granite landscapes & cave sightings</li>
          <li>Luxury tented camps & eco-resorts</li>
          <li>Village culture & Rabari traditions</li>
          <li>Excellent destination for wildlife photography</li>
        </ul>
      </section>

      {/* LEOPARD SAFARI */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Jawai Leopard Safari Experience</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jawai leopard safaris are conducted in open jeeps by experienced local
          trackers. Safaris usually happen early morning and late evening when
          leopards are most active.
          <br /><br />
          Unlike dense forests, Jawai’s open terrain allows clear visibility,
          making it one of the best places in India to photograph leopards in
          natural daylight.
        </p>
      </section>

      {/* BEST TIME */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Best Time to Visit Jawai</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>October – March: Best weather & sightings</li>
          <li>April – June: Hot but excellent leopard activity</li>
          <li>July – September: Green landscapes, limited safaris</li>
        </ul>
      </section>

      {/* HOTELS */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Best Camps & Hotels in Jawai</h2>
        <p className="text-gray-700 text-lg">
          Jawai is famous for luxury tented camps, boutique wildlife lodges, and
          eco-stays. Most properties include meals, safaris, and guided
          experiences.
        </p>
      </section>

      {/* ITINERARY */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Perfect Jawai Itinerary (3 Days)</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Day 1: Arrival, sunset safari</li>
          <li>Day 2: Morning safari, village walk, evening safari</li>
          <li>Day 3: Jawai Bandh visit & departure</li>
        </ul>
      </section>

      {/* FOOD */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Food & Local Culture</h2>
        <p className="text-gray-700 text-lg">
          Jawai offers authentic Rajasthani cuisine including dal baati churma,
          gatte ki sabzi, bajra roti, and traditional sweets. Cultural evenings
          with folk music and storytelling are common at camps.
        </p>
      </section>

      {/* SAFETY */}
      <section className="bg-green-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">Is Jawai Safe for Tourists?</h2>
        <p className="text-gray-700 text-lg">
          Yes. Jawai is extremely safe for families, couples, solo travelers, and
          photographers when safaris are conducted responsibly with guides.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Explore More Rajasthan Destinations</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li><a href="/city/jaipur" className="text-green-700 font-semibold">Jaipur Travel Guide</a></li>
          <li><a href="/city/jaisalmer" className="text-green-700 font-semibold">Jaisalmer Travel Guide</a></li>
          <li><a href="/city/udaipur" className="text-green-700 font-semibold">Udaipur Travel Guide</a></li>
          <li><a href="/city/ranthambore" className="text-green-700 font-semibold">Ranthambore Travel Guide</a></li>
        </ul>
      </section>

      {/* TRUST */}
      <section className="bg-gray-100 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Why Trust {companyName}?</h2>
        <p className="text-gray-700 text-lg">
          {companyName} provides experience-based Rajasthan travel guides,
          wildlife insights, and curated itineraries to help travelers plan
          meaningful and responsible journeys.
        </p>
      </section>

    </main>
  );
}
