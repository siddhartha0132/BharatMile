import React, { useEffect } from "react";

export default function SpitiValley() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Spiti Valley Travel Guide 2025: Routes, AMS Safety, Villages, Monasteries & Road Trip Tips",
    description:
      "Complete Spiti Valley travel guide covering best time to visit, Shimla vs Manali routes, AMS prevention, villages, monasteries, permits, budget and itinerary.",
    image: ["https://yourwebsite.com/images/spiti-valley.jpg"],
    author: { "@type": "Organization", name: "BharatMile" },
    publisher: {
      "@type": "Organization",
      name: "BharatMile",
      logo: {
        "@type": "ImageObject",
        url: "https://yourwebsite.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://yourwebsite.com/blog/spiti-valley-travel-guide",
    },
  };

  useEffect(() => {
    document.title =
      "Spiti Valley Travel Guide 2025 | Routes, AMS Safety, Villages & Monasteries";

    const set = (n, c, a = "name") => {
      let e = document.querySelector(`meta[${a}="${n}"]`);
      if (!e) {
        e = document.createElement("meta");
        e.setAttribute(a, n);
        document.head.appendChild(e);
      }
      e.setAttribute("content", c);
    };

    set(
      "description",
      "Explore Spiti Valley with the safest routes, AMS prevention, villages, monasteries, best season, permits, budget and complete road trip planning guide."
    );

    set(
      "keywords",
      "Spiti Valley travel guide, Spiti Valley route, Shimla to Spiti, Manali to Spiti, Spiti AMS safety, Spiti villages, Spiti monasteries, Spiti road trip"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Complete Spiti Valley road trip guide with routes, AMS safety, budget, villages and monasteries.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/spiti-valley.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "Spiti Valley complete travel guide with routes, safety, villages and monasteries."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/spiti-valley.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/blog/spiti-valley-travel-guide";

    let script = document.getElementById("spiti-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "spiti-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
        Spiti Valley Travel Guide 2025: Routes, AMS Safety & High-Altitude Villages
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Spiti Valley is a cold desert Himalayan region famous for its ancient monasteries,
        dramatic landscapes, fossil villages and extreme altitude beauty. This guide covers
        routes, AMS safety, villages, permits, budget and best season for planning your Spiti road trip.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Best Time to Visit Spiti Valley</h2>
        <ul className="list-disc list-inside mt-3">
          <li>June to September – Best road access and weather</li>
          <li>October – Fewer tourists, cold nights</li>
          <li>November to April – Winter Spiti (snow, only for experts)</li>
          <li>May – Kunzum Pass may still be snow covered</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Spiti Valley Routes (Shimla vs Manali)</h2>
        <p className="mt-2">
          The <b>Shimla–Kaza route</b> is safest for acclimatization. The
          <b> Manali–Kaza route</b> is faster but risky due to sudden altitude gain.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Shimla → Nako → Kaza (Best for AMS safety)</li>
          <li>Manali → Rohtang → Kunzum → Kaza (Adventure route)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">AMS (Altitude Sickness) Safety</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Ascend slowly via Shimla route</li>
          <li>Drink 3–4L water daily</li>
          <li>Avoid alcohol & smoking</li>
          <li>Carry Diamox (doctor consultation required)</li>
          <li>Emergency oxygen canister recommended</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Top Villages & Monasteries</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Key (Ki) Monastery – Largest monastery in Spiti</li>
          <li>Tabo Monastery – 1000+ years old fresco monastery</li>
          <li>Hikkim – Highest post office</li>
          <li>Komik & Langza – Fossil villages & Buddha statue</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Permits for Spiti Valley</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Indian citizens: No permit for most areas</li>
          <li>Foreign tourists: Restricted Area Permit (RAP) required</li>
          <li>Inner Line Permit for certain border villages</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Suggested 5-Day Spiti Itinerary</h2>
        <p className="mt-2">
          Day 1: Shimla → Nako  
          Day 2: Nako → Kaza  
          Day 3: Key, Kibber, Langza  
          Day 4: Hikkim, Komik  
          Day 5: Return journey  
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Budget Estimate</h2>
        <ul className="list-disc list-inside mt-3">
          <li>₹1,500–₹3,000 per night (homestays)</li>
          <li>₹3,000–₹5,000 per day (vehicle with driver)</li>
          <li>Total ₹10,000–₹18,000 per person for 5 days</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Photography Tips</h2>
        <p className="mt-2">
          Best sunrise shots at Key Monastery, best wide angles at Langza Buddha,
          best night sky at Komic village.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <p className="mt-3"><b>Is Spiti safe for first-time travelers?</b> Yes, via Shimla route with acclimatization.</p>

        <p className="mt-3"><b>Is Spiti family-friendly?</b> Yes, but avoid elderly & infants due to altitude.</p>

        <p className="mt-3"><b>Is mobile network available?</b> BSNL works in Kaza & nearby villages.</p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile Travel Guides
      </footer>
    </main>
  );
}
