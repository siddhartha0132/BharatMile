import React, { useEffect } from "react";

export default function TheUltimate2Week() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The Ultimate 2 Week India Itinerary for First Time Travelers (2025 Guide)",
    description:
      "Perfect 14 day India itinerary for first timers covering Delhi, Agra, Jaipur, Udaipur and Goa with exact transport plan, budget, safety tips and hotels.",
    image: ["https://yourwebsite.com/images/india-itinerary-hero.jpg"],
    author: {
      "@type": "Organization",
      name: "BharatMile",
    },
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
      "@id": "https://yourwebsite.com/blog/2-week-india-itinerary",
    },
  };

  useEffect(() => {
    document.title =
      "Ultimate 2 Week India Itinerary for First Time Travelers (2025)";

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
      "Best 14 day India itinerary for first time travelers covering Delhi, Agra (Taj Mahal), Jaipur, Udaipur and Goa with transport, budget and safety tips."
    );

    set(
      "keywords",
      "2 week India itinerary, India trip plan 14 days, first time India travel guide, Delhi Agra Jaipur Goa itinerary, Golden Triangle itinerary India"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Safe and complete 2 week India travel itinerary for beginners: Golden Triangle + Goa with full transport and budget guide.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/india-itinerary-hero.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "The perfect 14-day India itinerary for first time travelers."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/india-itinerary-hero.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/blog/2-week-india-itinerary";

    let script = document.getElementById("2week-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "2week-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">

      <h1 className="text-4xl font-extrabold mb-6 text-indigo-800">
        Ultimate 2-Week India Itinerary for First-Time Travelers 🇮🇳🎒
      </h1>

      <p className="mb-8 text-lg bg-indigo-50 p-4 rounded border-l-4 border-indigo-600">
        Visiting India for the first time? This **14-day India travel plan** is
        perfectly designed to balance history, culture, luxury cities, and
        tropical beaches. You’ll cover the **Golden Triangle (Delhi-Agra-Jaipur)**,
        romantic **Udaipur**, and finish with **5 days of relaxation in Goa**.
      </p>

      {/* DAY-WISE ITINERARY */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">
          ✅ Complete 14-Day India Itinerary (Day-by-Day)
        </h2>

        <ul className="space-y-4 list-disc list-inside">
          <li><b>Day 1–2:</b> Delhi – Old Delhi, India Gate, Humayun’s Tomb, Chandni Chowk food walk</li>
          <li><b>Day 3:</b> Agra – Sunrise Taj Mahal, Agra Fort, Mehtab Bagh sunset</li>
          <li><b>Day 4–6:</b> Jaipur – Amber Fort, Hawa Mahal, City Palace, markets</li>
          <li><b>Day 7–8:</b> Udaipur – Lake Pichola boat ride, City Palace, Jag Mandir</li>
          <li><b>Day 9–13:</b> Goa – Beaches, seafood, churches, nightlife, water sports</li>
          <li><b>Day 14:</b> Return flight from Goa or Mumbai</li>
        </ul>
      </section>

      {/* TRANSPORT */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-3">
          🚆 Transport Strategy (Fast + Safe)
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>Delhi → Agra → Jaipur: **AC Trains or Private Car**</li>
          <li>Jaipur → Udaipur: **Train or flight**</li>
          <li>Udaipur → Goa: **Domestic Flight (Mandatory)**</li>
          <li>Local Travel: Uber/Ola, Metro (Delhi), Scooters (Goa)</li>
        </ul>
      </section>

      {/* BUDGET */}
      <section className="mb-12 bg-green-50 p-5 rounded">
        <h2 className="text-2xl font-bold text-green-800 mb-3">
          💰 Budget for 2 Weeks in India
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>Budget: ₹3,500–₹5,000/day</li>
          <li>Mid-range: ₹7,000–₹10,000/day</li>
          <li>Luxury: ₹15,000+/day</li>
        </ul>
      </section>

      {/* SAFETY */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-3">
          🛡️ Safety + Health Tips for First-Timers
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>Drink only sealed bottled water</li>
          <li>Avoid raw street food on Day 1–2</li>
          <li>Keep digital + paper copies of passport & visa</li>
          <li>Dress modestly in temples & mosques</li>
          <li>Use prepaid taxis or ride-hailing apps</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-3">
          ❓ Frequently Asked Questions
        </h2>

        <p><b>Is 2 weeks enough for India?</b><br />Yes—this plan covers the best highlights without rushing.</p>
        <p><b>Is India safe for solo travelers?</b><br />Yes, if basic precautions are followed.</p>
        <p><b>Should I book trains in advance?</b><br />Yes—especially Agra & Jaipur routes.</p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile · Ultimate India Travel Guide
      </footer>
    </main>
  );
}
