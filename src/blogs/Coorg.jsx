import React from "react";
import { Helmet } from "react-helmet";

export default function Coorg() {
  return (
    <main className="bg-[#f7f9fc] text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-12">

        <Helmet>
          <title>Coorg: The Scotland of India Coffee Guide | Complete 2025 Travel Blog</title>
          <meta
            name="description"
            content="Complete Coorg travel guide 2025: coffee plantations, waterfalls, treks, food, culture, itineraries, budget, best time to visit & homestays."
          />
          <meta
            name="keywords"
            content="Coorg travel guide, Coorg coffee plantations, Scotland of India, Coorg itinerary, Coorg budget trip, Coorg weather, Kodagu tourism"
          />
          <link rel="canonical" href={window.location.href} />

          {/* ✅ Open Graph */}
          <meta property="og:title" content="Coorg Travel Guide 2025 – The Scotland of India" />
          <meta
            property="og:description"
            content="Explore Coorg — coffee estates, waterfalls, treks, homestays & scenic viewpoints in this full 2025 travel guide."
          />
          <meta
            property="og:image"
            content={window.location.origin + "/images/coorg-hero.jpg"}
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={window.location.href} />

          {/* ✅ Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Coorg Travel Guide 2025 – Scotland of India" />
          <meta
            name="twitter:description"
            content="Best time, itinerary, budget, coffee estates & things to do in Coorg."
          />
          <meta
            name="twitter:image"
            content={window.location.origin + "/images/coorg-hero.jpg"}
          />

          {/* ✅ Article Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Coorg: The Scotland of India — A Complete Travel Guide",
              description:
                "Complete Coorg travel guide including coffee plantations, waterfalls, treks, food, itinerary & budget.",
              image: window.location.origin + "/images/coorg-hero.jpg",
              author: {
                "@type": "Organization",
                name: "Wander Guides",
              },
              publisher: {
                "@type": "Organization",
                name: "Wander Guides",
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
            src="/images/coorg-hero.jpg"
            alt="Coffee plantations of Coorg"
            className="w-full h-72 object-cover rounded-xl shadow-lg mb-6"
            loading="lazy"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            Coorg: The Scotland of India — Complete Travel & Coffee Guide (2025)
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            A peaceful hill escape famous for coffee plantations, waterfalls,
            misty roads, Kodava culture & forest adventures.
          </p>

          <aside className="mt-5 p-4 bg-green-50 border rounded-lg text-sm">
            <strong>Quick Tip:</strong> The best time to visit Coorg is from
            <b> October to April</b> for plantations, treks & sightseeing.
          </aside>
        </header>

        {/* ✅ MAIN CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-semibold">Why Coorg Feels Different</h2>
            <p>
              Coorg, also known as Kodagu, is a misty hill district in Karnataka
              known for coffee estates, green valleys, waterfalls and
              old-world homestays. The air smells of fresh rain and roasted
              coffee beans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Top Things to Do in Coorg</h2>
            <ul className="list-disc list-inside">
              <li>Coffee plantation tours</li>
              <li>Mandalpatti sunrise viewpoint</li>
              <li>Abbey Falls forest trail</li>
              <li>Dubare Elephant Camp</li>
              <li>Namdroling Monastery (Golden Temple)</li>
              <li>Barapole river rafting (seasonal)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Coorg & Coffee Culture</h2>
            <p>
              Coorg produces some of India’s finest Arabica and Robusta coffee.
              Many homestays sit inside active plantations where you can learn
              about harvesting, roasting, grinding and tasting freshly brewed
              coffee.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">3-Day Perfect Coorg Itinerary</h2>
            <ul className="list-disc list-inside">
              <li><b>Day 1:</b> Madikeri Fort, Raja’s Seat, markets</li>
              <li><b>Day 2:</b> Mandalpatti, Abbey Falls, plantation tour</li>
              <li><b>Day 3:</b> Dubare Camp, Golden Temple, rafting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Coorg Food You Must Try</h2>
            <ul className="list-disc list-inside">
              <li>Pandi Curry (Pork Speciality)</li>
              <li>Kadambuttu (Rice dumplings)</li>
              <li>Akki Roti</li>
              <li>Bamboo Shoot Curry</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Best Time to Visit</h2>
            <p>
              <b>October–April:</b> Best weather for sightseeing & plantations  
              <br />
              <b>June–September:</b> Magical monsoon greenery & waterfalls
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Trip Budget (3 Days)</h2>
            <ul className="list-disc list-inside">
              <li>Homestay: ₹1500–₹3500/night</li>
              <li>Food: ₹800–₹1500/day</li>
              <li>Local travel: ₹2000–₹4000</li>
            </ul>
          </div>

        </section>

        {/* ✅ INTERNAL BACKLINKS */}
        <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Related Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/goa-tour">→ Goa Beach Travel</a></li>
            <li><a href="/ooty-tour">→ Ooty Hill Station Guide</a></li>
            <li><a href="/mysore-tour">→ Mysore Palace Tour</a></li>
            <li><a href="/jaipur-tour">→ Jaipur Travel Guide</a></li>
            <li><a href="/andaman-tour">→ Andaman Island Guide</a></li>
            <li><a href="/rishikesh-tour">→ Rishikesh Yoga Travel</a></li>
          </ul>
        </section>

        {/* ✅ EXTERNAL AUTHORITY LINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Tourism Resources</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a
                href="https://www.karnatakatourism.org"
                target="_blank"
                rel="nofollow noreferrer"
              >
                → Karnataka Tourism Official Website
              </a>
            </li>
            <li>
              <a
                href="https://www.incredibleindia.org"
                target="_blank"
                rel="nofollow noreferrer"
              >
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
              <strong>Q. Why is Coorg called Scotland of India?</strong>
              <p>Because of its misty hills, cool climate & rolling green valleys.</p>
            </div>
            <div>
              <strong>Q. How many days are enough for Coorg?</strong>
              <p>3 to 4 days are perfect for sightseeing & relaxation.</p>
            </div>
            <div>
              <strong>Q. Is Coorg good for couples?</strong>
              <p>Yes, it is very popular for honeymoons & romantic getaways.</p>
            </div>
          </div>
        </section>

        {/* ✅ WHATSAPP CTA */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Planning a Coorg Trip?
          </h3>
          <p className="mt-2 text-green-100">
            Get custom itinerary, hotels & cab booking instantly.
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
          © {new Date().getFullYear()} — Wander Guides.
        </footer>

      </div>
    </main>
  );
}

