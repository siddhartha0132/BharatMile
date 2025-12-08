// src/blogs/HyderabadiBiryani_Full.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function HyderabadiBiryani() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hyderabadi Biryani: The Authentic Food Trail — Complete Guide (2025)",
    description:
      "A complete Hyderabadi biryani guide: history, kacchi vs pakki styles, best restaurants in Hyderabad, recipes, etiquette & food traveller tips.",
    image: ["https://images.unsplash.com/photo-1604908177522-f86a1b4ba53b"],
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
      "@id": window.location.href,
    },
  };

  return (
    <main className="bg-[#f7f9fc] text-gray-800">
      <Helmet>
        <title>Hyderabadi Biryani: The Authentic Food Trail — Complete Guide (2025)</title>

        <meta
          name="description"
          content="Ultimate Hyderabadi biryani food guide: history, kacchi vs pakki styles, best biryani restaurants, recipes, etiquette & Hyderabad food tour tips."
        />
        <meta
          name="keywords"
          content="Hyderabadi biryani, best biryani in Hyderabad, kacchi biryani, pakki biryani, Paradise biryani, Shah Ghouse, Bawarchi, Hyderabad food guide"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/blog/hyderabadi-biryani-authentic-food-trail"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Hyderabadi Biryani: The Authentic Food Trail"
        />
        <meta
          property="og:description"
          content="Explore the real Hyderabadi biryani story — history, best places, recipes & traveller food tips."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1604908177522-f86a1b4ba53b"
        />
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
            src="https://images.unsplash.com/photo-1604908177522-f86a1b4ba53b"
            alt="Hyderabadi Biryani"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            Hyderabadi Biryani: The Authentic Food Trail
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            The legendary rice dish that defines Hyderabad. History, styles, best
            restaurants, recipes, etiquette & real food traveller secrets.
          </p>

          <aside className="mt-5 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Answer:</strong> Hyderabadi biryani is best experienced
            through <b>kacchi dum biryani</b> at Shah Ghouse, Bawarchi & Old City
            kitchens.
          </aside>
        </header>

        {/* ✅ CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-semibold">Why Hyderabadi Biryani Matters</h2>
            <p>
              Biryani in Hyderabad is not just food — it is identity, royalty,
              celebration and comfort in one pot. Born in the kitchens of Nizams,
              this dish blends Persian techniques with Deccan spice mastery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Kacchi vs Pakki Biryani (Explained Simply)
            </h2>
            <ul className="list-disc list-inside">
              <li><b>Kacchi:</b> Raw meat + rice slow-cooked together</li>
              <li><b>Pakki:</b> Meat & rice cooked separately then layered</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Best Places for Biryani</h2>
            <ul className="list-disc list-inside">
              <li>Paradise Biryani</li>
              <li>Bawarchi</li>
              <li>Shah Ghouse</li>
              <li>Hotel Shadab (Old City)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              What Comes With Biryani?
            </h2>
            <ul className="list-disc list-inside">
              <li>Mirchi ka salan</li>
              <li>Raita</li>
              <li>Lemon & onions</li>
            </ul>
          </div>

        </section>

        {/* ✅ INTERNAL BACKLINKS */}
        <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Related Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/chandni-chowk">→ Delhi Street Food Guide</a></li>
            <li><a href="/goa-forts">→ Goa Beyond Beaches</a></li>
            <li><a href="/coorg-tour">→ Coorg Coffee Travel</a></li>
            <li><a href="/hampi-empire">→ Hampi Empire Guide</a></li>
          </ul>
        </section>

        {/* ✅ AUTHORITY LINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Food & Tourism Resources</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a
                href="https://www.telangana.gov.in"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Telangana Tourism
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ WHATSAPP CTA */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Want a Personalized Hyderabad Food Tour?
          </h3>
          <p className="mt-2 text-green-100">
            Get the best biryani + street food route instantly.
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
          © {new Date().getFullYear()} — BharatMile. Eat local. Travel smart.
        </footer>
      </article>
    </main>
  );
}
