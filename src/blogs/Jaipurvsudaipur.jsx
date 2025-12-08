// src/blogs/JaipurvsUdaipur.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function JaipurvsUdaipur() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jaipur vs Udaipur: Which City Should You Visit? | BharatMile",
    description:
      "A complete Jaipur vs Udaipur comparison covering vibe, attractions, food, budget, transport, safety, photography spots, and sample itineraries.",
    image: ["/images/jaipur-udaipur-compare.jpg"],
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
      "@id": "https://yourwebsite.com/blog/jaipur-vs-udaipur-which-city-should-you-visit",
    },
  };

  return (
    <main className="bg-[#f7f9fc] text-gray-800">
      <Helmet>
        <title>
          Jaipur vs Udaipur: Which City Should You Visit? | BharatMile Guide
        </title>

        <meta
          name="description"
          content="Jaipur vs Udaipur — detailed travel comparison of Rajasthan’s two most famous cities covering vibe, forts, lakes, food, budget, transport, safety & itineraries."
        />

        <meta
          name="keywords"
          content="Jaipur vs Udaipur, Jaipur or Udaipur which is better, Jaipur travel guide, Udaipur travel guide, Rajasthan trip comparison"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/blog/jaipur-vs-udaipur-which-city-should-you-visit"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Jaipur vs Udaipur: Which City Should You Visit?" />
        <meta
          property="og:description"
          content="Confused between Jaipur and Udaipur? This deep comparison helps you choose the perfect Rajasthan city."
        />
        <meta property="og:image" content="/images/jaipur-udaipur-compare.jpg" />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="max-w-5xl mx-auto px-6 py-12">

        {/* ✅ HERO */}
        <header className="mb-10">
          <img
            src="/images/jaipur-udaipur-compare.jpg"
            alt="Jaipur vs Udaipur travel comparison"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            Jaipur vs Udaipur: Which City Should You Visit?
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Jaipur and Udaipur are Rajasthan’s crown jewels — one loud with royal
            energy, the other soft with lakes and romance. This guide helps you
            choose the city that matches your travel personality.
          </p>

          <aside className="mt-5 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Answer:</strong> Jaipur is for culture, forts & markets.
            Udaipur is for couples, lakes & relaxed travel.
          </aside>
        </header>

        {/* ✅ MAIN SECTIONS */}
        <section className="space-y-10 text-lg leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold">Vibe & First Impressions</h2>
            <p>
              Jaipur is loud, colorful and energetic with forts everywhere and
              busy bazaars. Udaipur feels calm, slow and romantic with lakes,
              old havelis and rooftop cafés.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Top Attractions</h2>
            <ul className="list-disc list-inside">
              <li><strong>Jaipur:</strong> Amber Fort, City Palace, Hawa Mahal, Nahargarh</li>
              <li><strong>Udaipur:</strong> City Palace, Lake Pichola, Jag Mandir, Monsoon Palace</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Food Comparison</h2>
            <p>
              Jaipur is famous for street food, kachori, dal-baati-churma and
              ghevar. Udaipur offers romantic lake-view dining with fusion cuisine
              and rooftop cafés.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Budget Comparison</h2>
            <ul className="list-disc list-inside">
              <li><strong>Jaipur:</strong> Hotels from ₹900–₹3500</li>
              <li><strong>Udaipur:</strong> Lake-view hotels ₹2000–₹6000</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Best for Who?</h2>
            <ul className="list-disc list-inside">
              <li>Backpackers → Jaipur</li>
              <li>Couples & Honeymoon → Udaipur</li>
              <li>Solo Cultural Travel → Jaipur</li>
              <li>Luxury Slow Travel → Udaipur</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">2-Day Sample Itineraries</h2>
            <p><strong>Jaipur:</strong> Amber → City Palace → Hawa Mahal → Nahargarh Sunset</p>
            <p><strong>Udaipur:</strong> City Palace → Boat Ride → Bagore Haveli → Monsoon Palace</p>
          </div>

        </section>

        {/* ✅ INTERNAL LINKS */}
        <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Related Rajasthan Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/hampi-empire">→ Hampi Empire Travel</a></li>
            <li><a href="/golden-temple">→ Golden Temple Langar Guide</a></li>
            <li><a href="/goa-forts">→ Goa Beyond Beaches</a></li>
            <li><a href="/india-500-per-day-travel-guide">→ Travel India on ₹500</a></li>
          </ul>
        </section>

        {/* ✅ AUTHORITY LINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Tourism Resources</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a
                href="https://www.incredibleindia.org"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Incredible India
              </a>
            </li>
            <li>
              <a
                href="https://tourism.rajasthan.gov.in"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Rajasthan Tourism
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ WHATSAPP CTA (REAL NUMBER) */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Confused Between Jaipur & Udaipur?
          </h3>
          <p className="mt-2 text-green-100">
            Get a personalized Rajasthan trip plan in minutes.
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
          © {new Date().getFullYear()} — BharatMile. Royals or Romance — you choose.
        </footer>

      </article>
    </main>
  );
}
