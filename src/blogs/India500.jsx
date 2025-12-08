// src/blogs/India500.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function India500() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Travel India on ₹500 a Day | Ultra Budget India Guide",
    description:
      "A complete ultra-budget India travel guide explaining how to explore India on ₹500/day using cheap food, hostels, public transport, real routes & survival hacks.",
    image: ["/images/india-budget.jpg"],
    author: { "@type": "Organization", name: "BharatMile Editorial" },
    publisher: {
      "@type": "Organization",
      name: "BharatMile",
      logo: {
        "@type": "ImageObject",
        url: "/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://yourwebsite.com/india-500-per-day-travel-guide",
    },
  };

  return (
    <main className="bg-[#f7f9fc] text-gray-800">
      <Helmet>
        <title>How to Travel India on ₹500 a Day | Ultra Budget India Guide</title>

        <meta
          name="description"
          content="Ultimate ultra-budget India travel guide: eat, stay, travel & explore India on just ₹500 per day with real hostel, food, bus & survival hacks."
        />

        <meta
          name="keywords"
          content="travel India on 500 rupees, India budget travel, cheapest travel India, backpack India cheap, India low budget travel, hostel India cheap"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/india-500-per-day-travel-guide"
        />

        {/* Open Graph */}
        <meta property="og:title" content="How to Travel India on ₹500 a Day" />
        <meta
          property="og:description"
          content="Realistic street-level travel hacks to explore India on ₹500/day with food, transport & hostel breakdowns."
        />
        <meta property="og:image" content="/images/india-budget.jpg" />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* ✅ HERO */}
        <header className="mb-10">
          <img
            src="/images/india-budget.jpg"
            alt="Ultra budget travel in India"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            How to Travel India on ₹500 a Day (Full Practical Guide)
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Real backpacker-tested strategies to eat, stay, travel & survive in
            India on just ₹500 per day — no myths, only ground reality.
          </p>

          <aside className="mt-5 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Answer:</strong> Yes, ₹500/day is absolutely possible in
            India if you use hostels, street food, public buses & walkable cities.
          </aside>
        </header>

        {/* ✅ MAIN CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-semibold">Is ₹500/day Really Possible?</h2>
            <p>
              Yes — thousands of Indian students, pilgrims and foreign backpackers
              regularly live under ₹500 per day. The secret is blending into local
              systems instead of tourist systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">₹500 Daily Budget Breakdown</h2>
            <ul className="list-disc list-inside">
              <li>₹150–₹250 — Hostel / Dharamshala</li>
              <li>₹120–₹180 — Meals (thalis & street food)</li>
              <li>₹40–₹100 — Buses & shared autos</li>
              <li>₹20–₹50 — Tickets & emergency buffer</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Food Hacks to Eat Under ₹180/day</h2>
            <ul className="list-disc list-inside">
              <li>Idli, Poha, Upma — ₹20–₹40</li>
              <li>Thali lunch — ₹70–₹120</li>
              <li>Gurudwara Langar — Free</li>
              <li>Banana + roasted peanuts — cheapest dinner</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Ultra-Cheap Transport Rules</h2>
            <ul className="list-disc list-inside">
              <li>Local buses only</li>
              <li>Shared autos not cabs</li>
              <li>Night trains = transport + hotel</li>
              <li>Walk under 3 km whenever possible</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Where to Stay Under ₹250</h2>
            <ul className="list-disc list-inside">
              <li>Dharamshalas near temples</li>
              <li>Ashrams (Rishikesh, Varanasi)</li>
              <li>Zostel-type dorms</li>
              <li>Railway retiring rooms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Best Cities for ₹500/day</h2>
            <ul className="list-disc list-inside">
              <li>Varanasi</li>
              <li>Rishikesh</li>
              <li>Pushkar</li>
              <li>Gokarna</li>
              <li>Mysore</li>
              <li>Pondicherry</li>
            </ul>
          </div>

        </section>

        {/* ✅ INTERNAL BACKLINKS */}
        <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Related Budget Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/hampi-empire">→ Hampi Empire (Cheap History Trip)</a></li>
            <li><a href="/coorg-tour">→ Coorg Budget Coffee Trip</a></li>
            <li><a href="/goa-forts">→ Goa Beyond Beaches</a></li>
            <li><a href="/golden-temple">→ Golden Temple Langar Experience</a></li>
          </ul>
        </section>

        {/* ✅ AUTHORITY LINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Backpacker Resources</h3>
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
                href="https://www.indianrail.gov.in"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Indian Railways
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ WHATSAPP CTA (YOUR REAL NUMBER) */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Want a Custom ₹500 Budget Trip Plan?
          </h3>
          <p className="mt-2 text-green-100">
            Get hostel, food & bus routes customized for your destination.
          </p>

          <a
            href="https://wa.me/919636974688"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        <footer className="mt-12 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} — BharatMile. Travel poor. Live rich.
        </footer>
      </article>
    </main>
  );
}
