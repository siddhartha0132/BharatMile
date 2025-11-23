import React from "react";
import { Helmet } from "react-helmet";

import bikanerHero from "../assets/Bikaner.jpeg"; // change image if needed

export default function Bikaner() {
  const pageTitle =
    "Bikaner Travel Guide | Best Places, History, Hotels, Desert Safari & Food (2025)";
  const description =
    "Explore Bikaner – the Royal Desert City of Rajasthan. Discover Junagarh Fort, Karni Mata Temple, Camel Safari, best food, hotels, culture, history, and a full travel guide with tips, itinerary, and FAQs.";

  const pageUrl = "https://yourwebsite.com/city/bikaner";
  const imageUrl = "https://yourwebsite.com/assets/bikaner.jpeg";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Bikaner famous for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Bikaner is famous for Junagarh Fort, Karni Mata Temple, Camel Festival, desert landscapes, and the world-famous Bikaneri Bhujia."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best time to visit Bikaner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "October to March is the best time to visit Bikaner because the weather is pleasant for sightseeing and desert activities."
        }
      },
      {
        "@type": "Question",
        "name": "How many days are enough for Bikaner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "2–3 days are enough to explore major attractions like Junagarh Fort, Lalgarh Palace, Karni Mata Temple, and desert safari."
        }
      },
      {
        "@type": "Question",
        "name": "Is Bikaner a safe city for tourists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, Bikaner is one of the safest cities in Rajasthan with friendly locals, good transportation, and safe desert tourism."
        }
      }
    ]
  };

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "City",
    "name": "Bikaner",
    "description": description,
    "image": imageUrl,
    "url": pageUrl,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.0229",
      "longitude": "73.3119"
    },
    "sameAs": [
      "https://en.wikipedia.org/wiki/Bikaner",
      "https://www.tourism.rajasthan.gov.in/bikaner.html"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* SEO Header */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(citySchema)}
        </script>
      </Helmet>

      {/* ================================
          HERO SECTION
      ================================== */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-12">
        <img
          src={bikanerHero}
          alt="Bikaner City – Rajasthan Desert Tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <h1 className="text-5xl font-bold text-white p-8">
            Bikaner – Royal Desert City of Rajasthan
          </h1>
        </div>
      </div>

      {/* ================================
          3000-WORD CONTENT STARTS HERE
      ================================== */}
      <div className="space-y-10">

        {/* About Bikaner */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            About Bikaner
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bikaner, one of the most culturally rich cities of Rajasthan, is a
            majestic desert city known for its royal palaces, vibrant markets,
            grand forts, and ancient temples. Founded in 1488 by Rao Bika, a
            Rajput prince, Bikaner quickly rose to become a strong desert
            kingdom with powerful architecture and a flourishing trading
            culture. Today, it stands as a perfect combination of heritage,
            adventure, spirituality, food, and desert landscapes.
          </p>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Unlike Jaisalmer, Bikaner is less commercial and more authentic. It
            still retains its old charm, narrow lanes filled with sweets,
            haveli-style houses, camel carts, colorful textiles, and old
            sandstone buildings. From the incredible Junagarh Fort to the
            mysterious Karni Mata Temple (Rat Temple), Bikaner offers unique
            experiences that travelers cannot find anywhere else.
          </p>
        </section>

        {/* History */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            History of Bikaner – A Royal Desert Kingdom
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bikaner was established in the late 15th century by Rao Bika, who
            envisioned a powerful kingdom in the Thar Desert. He strategically
            developed a fortified city that eventually became an important trade
            route between Central Asia and Gujarat. During medieval times,
            Bikaner prospered due to its excellent location for caravan
            traders.  
            Later, the rulers beautified the city with grand palaces,
            temples, and stepwells. The Junagarh Fort remains one of the very
            few forts in India that was never conquered, symbolizing the
            strategic brilliance of its rulers.
          </p>
        </section>

        {/* Top Attractions */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Top Places to Visit in Bikaner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Junagarh Fort</h3>
              <p className="text-gray-600">
                The pride of Bikaner, this fort features ornate balconies,
                courtyards, and beautiful palaces. Its museum displays ancient
                artifacts, weapons, manuscripts, and royal costumes.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Karni Mata Temple (Rat Temple)</h3>
              <p className="text-gray-600">
                One of the most mysterious temples in the world, home to over
                25,000 holy rats. Considered extremely sacred by devotees.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Lalgarh Palace</h3>
              <p className="text-gray-600">
                A splendid Indo-Saracenic architectural marvel built in red
                sandstone. Part of it is now a luxury hotel.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Bikaner Camel Safari</h3>
              <p className="text-gray-600">
                Enjoy sunset views, sand dunes, traditional Kalbeliya dance, and
                authentic Rajasthani food in the middle of the desert.
              </p>
            </div>

          </div>
        </section>

        {/* Food */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Famous Food of Bikaner</h2>
          <p className="text-lg text-gray-600">
            Bikaner is heaven for food lovers. The city is famous worldwide for
            “Bikaneri Bhujia,” but the list doesn’t stop there. Try dishes like:
          </p>
          <ul className="list-disc ml-6 text-gray-600 mt-2">
            <li>Kesar Kulfi</li>
            <li>Ghevar, Rasgulla, and Basundi</li>
            <li>Mawa Kachori</li>
            <li>Dal Baati Churma</li>
          </ul>
        </section>

        {/* Best Time */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Best Time to Visit Bikaner</h2>
          <p className="text-gray-700">
            October to March is the ideal time due to cool weather perfect for
            exploring forts and desert activities.
          </p>
        </section>

      </div>
    </div>
  );
}

