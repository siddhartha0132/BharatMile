import React from "react";
import { Helmet } from "react-helmet";

export default function ChandniChowk() {
  return (
    <div className="bg-[#f7f9fc] text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-12">

        <Helmet>
          <title>The Street Food of Delhi: Chandni Chowk Complete Guide</title>

          <meta
            name="description"
            content="Ultimate Chandni Chowk street food guide — best parathas, jalebi, chole bhature, kebabs, lassi, food lanes, hygiene tips & how to explore Old Delhi safely."
          />
          <meta
            name="keywords"
            content="Chandni Chowk food guide, Delhi street food, Old Delhi food tour, paratha wali gali, jama masjid kebabs, chole bhature Delhi"
          />

          {/* ✅ Open Graph */}
          <meta property="og:title" content="The Street Food of Delhi: Chandni Chowk Guide" />
          <meta
            property="og:description"
            content="Explore the best street food of Chandni Chowk — parathas, jalebi, kebabs, lassi & hidden food lanes of Old Delhi."
          />
          <meta
            property="og:image"
            content={window.location.origin + "/images/chandni-chowk-food.jpg"}
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={window.location.href} />

          {/* ✅ Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Chandni Chowk Street Food Guide" />
          <meta
            name="twitter:description"
            content="Your ultimate guide to Old Delhi’s most iconic street foods & hidden lanes."
          />
          <meta
            name="twitter:image"
            content={window.location.origin + "/images/chandni-chowk-food.jpg"}
          />

          {/* ✅ Canonical */}
          <link rel="canonical" href={window.location.href} />

          {/* ✅ JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "The Street Food of Delhi: Chandni Chowk Guide",
              description:
                "A complete guide to Chandni Chowk's street food — must-try snacks, food lanes, hygiene tips & travel advice.",
              image: window.location.origin + "/images/chandni-chowk-food.jpg",
              author: {
                "@type": "Organization",
                name: "India Travel Insights",
              },
              publisher: {
                "@type": "Organization",
                name: "India Travel Insights",
                logo: {
                  "@type": "ImageObject",
                  url: window.location.origin + "/images/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": window.location.href,
              },
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString(),
            })}
          </script>
        </Helmet>

        {/* ✅ HERO */}
        <header className="mb-10">
          <img
            src="/images/chandni-chowk-food.jpg"
            alt="Street food in Chandni Chowk"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
          />

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            The Street Food of Delhi: Chandni Chowk Complete Guide
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            From sizzling parathas to syrupy jalebis & smoky kebabs — this is the
            ultimate Old Delhi street food experience.
          </p>

          <aside className="mt-5 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Tip:</strong> Visit between <b>9 AM to 4 PM</b> for best
            food availability & manageable crowds.
          </aside>
        </header>

        {/* ✅ MAIN CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-semibold">Why Chandni Chowk is a Food Lover’s Paradise</h2>
            <p>
              Chandni Chowk is the beating heart of Old Delhi — chaotic, aromatic
              and historic. With Mughlai kitchens, 100-year-old sweet shops and
              legendary snack lanes, it is India’s most iconic street food hub.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🔥 Must-Try Street Foods</h2>
            <ul className="list-disc list-inside">
              <li><b>Paratha Wali Gali</b> — stuffed parathas with aam pickle & lassi</li>
              <li><b>Old Famous Jalebi Wala</b> — giant crispy jalebis in desi ghee</li>
              <li><b>Natraj Dahi Bhalle</b> — chilled & creamy street classic</li>
              <li><b>Karim’s</b> — kebabs, biryani & nihari near Jama Masjid</li>
              <li><b>Chole Kulche & Chole Bhature</b> — Delhi’s soul food</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">📍 Best Lanes to Explore</h2>
            <ul className="list-disc list-inside">
              <li>Paratha Wali Gali — breakfast heaven</li>
              <li>Dariba Kalan — silver shops + refreshing lassi</li>
              <li>Chawri Bazaar — chaat, drinks and snacks</li>
              <li>Jama Masjid Area — kebabs & Mughlai hotspots</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">🛡️ Hygiene & Safety Tips</h2>
            <ul className="list-disc list-inside">
              <li>Pick crowded shops for fresh food</li>
              <li>Avoid tap water — carry your own bottle</li>
              <li>Cash + UPI both useful</li>
              <li>Wear comfortable shoes</li>
              <li>Eat where food is cooked live</li>
            </ul>
          </div>

        </section>

        {/* ✅ INTERNAL BACKLINKS */}
        <section className="mt-14 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Popular Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/jaipur-tour">→ Jaipur Travel Guide</a></li>
            <li><a href="/agra-tour">→ Taj Mahal Travel Guide</a></li>
            <li><a href="/rajasthan-tour">→ Rajasthan Tour Guide</a></li>
            <li><a href="/varanasi-tour">→ Varanasi Street Food</a></li>
            <li><a href="/goa-tour">→ Goa Food & Travel</a></li>
            <li><a href="/delhi-tour">→ Delhi Sightseeing Guide</a></li>
          </ul>
        </section>

        {/* ✅ EXTERNAL AUTHORITY BACKLINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Tourism Resources</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a href="https://www.delhitourism.gov.in" target="_blank" rel="nofollow noreferrer">
                → Delhi Tourism Official Website
              </a>
            </li>
            <li>
              <a href="https://www.incredibleindia.org" target="_blank" rel="nofollow noreferrer">
                → Incredible India Tourism
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ FAQ */}
        <section className="mt-14 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>

          <div className="space-y-4">
            <div>
              <strong>Q. What is Chandni Chowk famous for?</strong>
              <p>Street food, Mughlai cuisine, spice markets, jewellery & history.</p>
            </div>

            <div>
              <strong>Q. Is Chandni Chowk safe for tourists?</strong>
              <p>Yes, during the daytime with normal precautions.</p>
            </div>

            <div>
              <strong>Q. Which day is Chandni Chowk closed?</strong>
              <p>Most shops remain closed on Sunday.</p>
            </div>
          </div>
        </section>

        {/* ✅ WHATSAPP CTA */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Planning a Delhi Food Tour?
          </h3>
          <p className="mt-2 text-green-100">
            Get custom food walks, timings & verified guides instantly.
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

        <footer className="mt-12 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} — India Travel Insights.
        </footer>

      </div>
    </div>
  );
}
