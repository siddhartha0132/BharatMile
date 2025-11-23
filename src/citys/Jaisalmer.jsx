import React from "react";
import { Helmet } from "react-helmet";
// Replace these imports with your actual images:
import heroImg from "../assets/jaisalmer-fort.jpg";
import fortImg from "../assets/jaisalmer-fort.jpg";
import desertImg from "../assets/sam-sand.jpeg";
import haveliImg from "../assets/patwon.jpeg";
import lakeImg from "../assets/Gadisar-Lake.jpeg";

export default function Jaisalmer() {

  const title = "Jaisalmer Travel Guide 2025 | Golden City Tourism, Best Attractions, Desert Safari, Prices & Tips";
  const description =
    "Complete Jaisalmer Tourism Guide 2025 – Explore the Golden City, Jaisalmer Fort, Thar Desert Safari, Sam Sand Dunes, Havelis, hotels, food, itinerary, and insider travel tips.";

  const url = "https://yourwebsite.com/city/jaisalmer";
  const img = "https://yourwebsite.com/assets/jaisalmer.jpg";

  // JSON-LD: FAQ + LocalBusiness for premium SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Jaisalmer famous for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jaisalmer is famous for its Golden Fort, desert safaris in the Thar Desert, Sam Sand Dunes, historic havelis, Rajasthani culture, and camel rides."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best time to visit Jaisalmer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "October to March is the best time to visit due to comfortable winter weather, ideal for desert activities."
        }
      },
      {
        "@type": "Question",
        "name": "How many days are enough for Jaisalmer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2 to 3 days are enough to explore Jaisalmer Fort, Havelis, Gadisar Lake, and enjoy a desert safari experience."
        }
      }
    ]
  };

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Jaisalmer",
    "description": description,
    "url": url,
    "image": img,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9157",
      "longitude": "70.9083"
    },
    "sameAs": [
      "https://en.wikipedia.org/wiki/Jaisalmer",
      "https://www.britannica.com/place/Jaisalmer"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* SEO HEADER */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(citySchema)}
        </script>
      </Helmet>

      {/* ---------------------- HERO SECTION ---------------------- */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl mb-12">
        <img src={heroImg} alt="Jaisalmer Golden City" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <h1 className="text-5xl font-bold text-white p-8"
            style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.6)" }}>
            Jaisalmer – The Golden City of India
          </h1>
        </div>
      </div>

      {/* ---------------------- INTRO SECTION ---------------------- */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Jaisalmer</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Jaisalmer is a place where time feels frozen in golden sandstone. Known as the
          “Golden City,” this iconic desert destination stands proudly in the heart of the
          Thar Desert. Its glowing fort, ancient havelis, narrow lanes, camel safaris, and
          soul-touching sunsets make it one of India’s most magical travel experiences.
          <br /><br />
          From the living fort that still houses families, to the breathtaking Sam Sand Dunes,
          Jaisalmer blends royalty, desert adventure, spirituality, and culture — all in one place.
        </p>
      </section>

      {/* ---------------------- WHY VISIT ---------------------- */}
      <section className="bg-yellow-50 p-8 rounded-xl shadow-sm border border-yellow-200 mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Why Visit Jaisalmer? (2025 Guide)
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Visiting Jaisalmer is like stepping into a golden painting. It’s not just a city — it’s
          an experience. Whether you’re planning a romantic trip, backpacking adventure,
          luxury holiday, or a cultural tour, Jaisalmer delivers.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✨ 1000-year-old golden fort that glows at sunset</li>
          <li>🐪 Desert safaris with camel or jeep rides</li>
          <li>🔥 Nights under a billion stars in the Thar Desert</li>
          <li>🏰 Majestic havelis and royal architecture</li>
          <li>🎶 Rajasthani folk dance & cultural evenings</li>
          <li>🥘 Traditional Rajasthani food like dal-baati, ghotua, laal maas</li>
        </ul>
      </section>

      {/* ---------------------- TOP ATTRACTIONS ---------------------- */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Top Places to Visit in Jaisalmer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Jaisalmer Fort */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src={fortImg} alt="Jaisalmer Fort" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jaisalmer Fort (Sonar Quila)</h3>
            <p className="text-gray-600">
              The only “living fort” in India, home to over 4000 residents. Explore temples,
              shops, cafes, museums, and stunning views of the golden city.
            </p>
          </div>

          {/* Sam Sand Dunes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src={desertImg} alt="Sam Sand Dunes" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sam Sand Dunes</h3>
            <p className="text-gray-600">
              The most famous desert safari area in Rajasthan. Experience camel rides,
              jeep dunes bashing, and magical sunsets.
            </p>
          </div>

          {/* Patwon Ki Haveli */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src={haveliImg} alt="Patwon Ki Haveli" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Patwon Ki Haveli</h3>
            <p className="text-gray-600">
              A masterpiece of intricate carvings and architecture. One of the finest havelis
              in Rajasthan.
            </p>
          </div>

          {/* Gadisar Lake */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src={lakeImg} alt="Gadisar Lake" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gadisar Lake</h3>
            <p className="text-gray-600">
              Peaceful lake surrounded by temples and ghats. Best for sunrise photography
              and paddle boating.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------- DESERT SAFARI GUIDE ---------------------- */}
      <section className="bg-white shadow-md p-8 rounded-2xl mb-16 border">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Jaisalmer Desert Safari Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          No trip to Jaisalmer is complete without a desert safari. Whether you choose a
          budget camp or a luxury private tent, the experience is unforgettable.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Types of Safaris</h3>
        <ul className="space-y-2 text-gray-700">
          <li>🐪 Camel Safari – Traditional, peaceful, slow desert experience.</li>
          <li>🚙 Jeep Safari – Fast, thrilling, dune bashing adventure.</li>
          <li>🌅 Sunset Safari – Perfect for couples and photographers.</li>
          <li>🔥 Overnight Desert Camping – Cultural shows + dinner + starry sky.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Average Prices</h3>
        <ul className="space-y-1 text-gray-700">
          <li>Camel Safari: ₹400–₹800</li>
          <li>Jeep Safari: ₹1200–₹2500</li>
          <li>Desert Camp (Budget): ₹1500–₹2500 per night</li>
          <li>Luxury Camp: ₹5000–₹10,000 per night</li>
        </ul>
      </section>

      {/* ---------------------- BEST TIME ---------------------- */}
      <section className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-200 mb-16">
        <h2 className="text-3xl font-semibold mb-3">Best Time to Visit Jaisalmer</h2>
        <p className="text-gray-700">
          October to March is ideal. The desert becomes pleasant, and evenings are perfect
          for safaris and camping.
        </p>
      </section>

      {/* ---------------------- FAQ ---------------------- */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Is Jaisalmer safe?</h3>
            <p className="text-gray-600">
              Yes, Jaisalmer is extremely safe for families, couples, and solo travelers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How expensive is Jaisalmer?</h3>
            <p className="text-gray-600">
              Budget trips start at ₹1200/day, while luxury trips can go up to ₹10,000/day.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
