import React from "react";
import { Helmet } from "react-helmet";

import heroImg from "../assets/jaisalmer-fort.jpg";
import fortImg from "../assets/jaisalmer-fort.jpg";
import desertImg from "../assets/sam-sand.jpeg";
import haveliImg from "../assets/patwon.jpeg";
import lakeImg from "../assets/Gadisar-Lake.jpeg";

export default function Jaisalmer() {

  const title =
    "Jaisalmer Travel Guide 2025 | Golden City, Desert Safari, Places, Hotels, Itinerary & Tips";

  const description =
    "Complete Jaisalmer travel guide 2025 covering Golden Fort, Sam Sand Dunes, desert safari prices, best hotels, food, shopping, safety, routes, culture, festivals & itinerary.";

  const url = "https://bharatmile.com/city/jaisalmer";
  const img = "https://bharatmile.com/assets/jaisalmer.jpg";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Jaisalmer called the Golden City?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Jaisalmer is called the Golden City because its fort, houses, and havelis are built using yellow sandstone that glows golden under sunlight."
        }
      },
      {
        "@type": "Question",
        name: "Is Jaisalmer worth visiting?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Jaisalmer is one of India’s most unique destinations offering desert safaris, a living fort, heritage architecture, and cultural experiences."
        }
      },
      {
        "@type": "Question",
        name: "How many days are enough for Jaisalmer?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "2 to 3 days are ideal to explore Jaisalmer Fort, havelis, Gadisar Lake, and enjoy a desert safari."
        }
      }
    ]
  };

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Jaisalmer",
    description,
    url,
    image: img,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.9157",
      longitude: "70.9083"
    },
    sameAs: [
      "https://en.wikipedia.org/wiki/Jaisalmer",
      "https://www.britannica.com/place/Jaisalmer"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(citySchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative h-[460px] rounded-xl overflow-hidden shadow-xl mb-16">
        <img src={heroImg} alt="Jaisalmer Golden City" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <h1 className="text-5xl font-bold text-white p-8">
            Jaisalmer – The Golden City of India
          </h1>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">About Jaisalmer</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Jaisalmer, famously known as the <strong>Golden City of India</strong>,
          is a breathtaking desert destination located in western Rajasthan.
          Rising from the heart of the Thar Desert, Jaisalmer is known for its
          yellow sandstone architecture, royal forts, desert safaris, camel rides,
          folk culture, and unforgettable sunsets.
          <br /><br />
          Founded in 1156 AD by Rawal Jaisal, the city played a crucial role as a
          trading post on ancient silk routes. Even today, the city retains its
          medieval charm through narrow lanes, carved havelis, temples, and
          traditional lifestyle.
        </p>
      </section>

      {/* HISTORY */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">History of Jaisalmer</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Jaisalmer has a rich Rajput history shaped by desert warfare,
          trade caravans, and royal patronage. The Jaisalmer Fort,
          also known as Sonar Quila, served as a protective stronghold
          and trading hub. Unlike other forts in India, this is a
          <strong> living fort</strong> with homes, temples, shops,
          and cafes inside.
        </p>
      </section>

      {/* PLACES */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Best Places to Visit in Jaisalmer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="bg-white p-6 shadow rounded-xl">
            <img src={fortImg} className="rounded mb-4" alt="Jaisalmer Fort" />
            <h3 className="text-xl font-semibold">Jaisalmer Fort</h3>
            <p className="text-gray-600">
              A UNESCO-listed living fort built with golden sandstone,
              offering panoramic views of the city.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <img src={haveliImg} className="rounded mb-4" alt="Patwon Ki Haveli" />
            <h3 className="text-xl font-semibold">Patwon Ki Haveli</h3>
            <p className="text-gray-600">
              Finest haveli complex in Jaisalmer, famous for intricate carvings.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <img src={lakeImg} className="rounded mb-4" alt="Gadisar Lake" />
            <h3 className="text-xl font-semibold">Gadisar Lake</h3>
            <p className="text-gray-600">
              A serene lake ideal for sunrise, photography, and boating.
            </p>
          </div>

        </div>
      </section>

      {/* DESERT SAFARI */}
      <section className="bg-yellow-50 p-10 rounded-2xl border mb-20">
        <h2 className="text-3xl font-bold mb-4">Jaisalmer Desert Safari Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Desert safari is the highlight of any Jaisalmer trip.
          The Sam Sand Dunes and Khuri villages offer camel safaris,
          jeep safaris, cultural programs, and overnight desert camping.
        </p>

        <ul className="mt-6 list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Camel Safari – Traditional and peaceful</li>
          <li>Jeep Safari – Thrilling dune bashing</li>
          <li>Sunset Safari – Most romantic experience</li>
          <li>Overnight Desert Camp – Music, dance & stargazing</li>
        </ul>
      </section>

      {/* FOOD */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Food & Cuisine of Jaisalmer</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Jaisalmer offers authentic Rajasthani desert cuisine.
          Must-try dishes include Dal Baati Churma, Ghotua Ladoo,
          Ker Sangri, Laal Maas, and Bajra Roti.
        </p>
      </section>

      {/* BEST TIME */}
      <section className="bg-blue-50 p-8 rounded-xl mb-20">
        <h2 className="text-3xl font-bold mb-3">Best Time to Visit Jaisalmer</h2>
        <p className="text-gray-700 text-lg">
          October to March is the best time when the desert weather
          is pleasant and ideal for sightseeing and safaris.
        </p>
      </section>

      {/* ITINERARY */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Perfect Jaisalmer Itinerary (3 Days)</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Day 1: Jaisalmer Fort, Havelis, Gadisar Lake</li>
          <li>Day 2: Sam Sand Dunes, Desert Safari, Cultural Night</li>
          <li>Day 3: Shopping, Jain Temples, Departure</li>
        </ul>
      </section>

      {/* SAFETY */}
      <section className="bg-green-50 p-8 rounded-xl mb-20">
        <h2 className="text-2xl font-semibold mb-3">Is Jaisalmer Safe for Tourists?</h2>
        <p className="text-gray-700 text-lg">
          Yes. Jaisalmer is extremely safe for families, couples,
          and solo travelers. Locals are friendly and tourism-driven.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6">Explore More Rajasthan Destinations</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li><a href="/city/jaipur" className="text-green-700 font-semibold">Jaipur Travel Guide</a></li>
          <li><a href="/city/udaipur" className="text-green-700 font-semibold">Udaipur Travel Guide</a></li>
          <li><a href="/city/ranthambore" className="text-green-700 font-semibold">Ranthambore Travel Guide</a></li>
          <li><a href="/city/pushkar" className="text-green-700 font-semibold">Pushkar Travel Guide</a></li>
        </ul>
      </section>

    </div>
  );
}
