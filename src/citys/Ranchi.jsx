import React from "react";
import { Helmet } from "react-helmet";

// ❗ Add your images here
import ranchiHero from "../assets/ranchi.jpeg";
// import jonhaImg from "../assets/jonha.jpg";
// import dassamImg from "../assets/dassam.jpg";
// import rockGardenImg from "../assets/rockgarden.jpg";
// import hundruImg from "../assets/hundru.jpg";
// import pahariImg from "../assets/pahari.jpg";

export default function Ranchi() {
  const title =
    "Ranchi Travel Guide | Waterfalls, Tourism, Best Places to Visit, Weather & Tips";
  const description =
    "Explore Ranchi, the City of Waterfalls. Discover Dassam Falls, Hundru Falls, Patratu Valley, Rock Garden, Pahari Mandir & more. Best season, food, hotels & complete travel plan.";
  const url = "https://bharatmile.com/city/ranchi";
  const image = "https://bharatmile.com/assets/ranchi.jpg";

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "City",
    name: "Ranchi",
    description: description,
    image: image,
    url: url,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.3441",
      longitude: "85.3096",
    },
    sameAs: [
      "https://en.wikipedia.org/wiki/Ranchi",
      "https://www.britannica.com/place/Ranchi",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Ranchi famous?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ranchi is famous for its beautiful waterfalls, pleasant weather, lakes, hills, green forests, and vibrant Jharkhand tribal culture.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best time to visit Ranchi?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "The best time to visit Ranchi is from October to March. Winter and post-monsoon provide the perfect climate for sightseeing.",
        },
      },
      {
        "@type": "Question",
        name: "Is Ranchi a hill station?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ranchi is not a hill station but sits on the Chota Nagpur Plateau, giving it a cool climate, lush forests, and scenic hills similar to a hill station.",
        },
      },
      {
        "@type": "Question",
        name: "Is Ranchi safe for tourists?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Ranchi is safe for tourists, especially popular attractions like Patratu Valley, Rock Garden, and the waterfalls.",
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">
          {JSON.stringify(citySchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-10">
        <img
          src={ranchiHero}
          alt="Ranchi City – Travel Guide BharatMile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <h1 className="text-4xl md:text-5xl font-bold text-white p-6">
            Ranchi – The City of Waterfalls
          </h1>
        </div>
      </div>

      {/* ABOUT */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          About Ranchi
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Ranchi, the capital of Jharkhand, is known as the “City of Waterfalls”
          because it is surrounded by lush forests, beautiful hills, and
          stunning natural waterfalls. Perched on the Chota Nagpur Plateau,
          Ranchi offers cool weather, peaceful landscapes, tribal culture,
          historic temples, and thrilling viewing points.  
          <br />
          <br />
          What makes Ranchi special is its perfect blend of nature, culture,
          spirituality, and adventure. Whether you love trekking, photography,
          scenic drives, lakes, wildlife, or just relaxing in calm nature,
          Ranchi gives you everything in one place.
        </p>
      </section>

      {/* TOP PLACES */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Best Places to Visit in Ranchi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dassam Falls</h3>
            <p className="text-gray-700">
              A majestic 144-ft waterfall surrounded by dense forests. The
              crystal-clear water makes it ideal for photography and nature
              walks.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Hundru Falls</h3>
            <p className="text-gray-700">
              One of Ranchi’s tallest waterfalls. Its multi-layer rock
              formations create a breathtaking natural amphitheater.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Rock Garden & Kanke Lake</h3>
            <p className="text-gray-700">
              Built on Gonda Hill, Rock Garden gives panoramic views of the
              valley. The nearby Kanke Lake is perfect for peaceful evenings.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Patratu Valley</h3>
            <p className="text-gray-700">
              A dreamlike valley with winding roads, green mountains, and cool
              breeze. Popular for road trips and cinematic videography.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pahari Mandir</h3>
            <p className="text-gray-700">
              A hilltop Shiva temple offering 360° views of Ranchi city. A must-visit during
              sunrise or sunset.
            </p>
          </div>

        </div>
      </section>

      {/* BEST TIME */}
      <section className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200 mb-12">
        <h2 className="text-2xl font-semibold mb-3">Best Time to Visit Ranchi</h2>
        <p className="text-gray-700">
          The best time to travel is <strong>October to March</strong>.
          Winter and post-monsoon give clear skies, green landscapes, and the
          perfect temperature to explore waterfalls.
        </p>
      </section>

      {/* LONG SEO CONTENT (SUMMARY OF 3000 WORD STYLE) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Complete Ranchi Travel Guide (Food, Hotels, Weather, Budget & More)
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Ranchi offers a perfect mix of natural wonders, tribal culture,
          peaceful lakes, wildlife spots, and adventure activities. Travelers
          can enjoy authentic Jharkhandi cuisine like Handia, Dhuska, Litti
          Chokha, Rugra, and Arsa Roti.  
          <br /><br />
          The city’s geography makes it a cool and breezy destination year-round,
          especially during winter. From budget hotels to luxury resorts,
          Ranchi’s hospitality sector has grown rapidly, offering great comfort
          for tourists.
          <br /><br />
          Whether you're planning a family trip, a romantic vacation, an
          adventure weekend, or a nature photography tour — Ranchi delivers an
          unforgettable and refreshing experience.
        </p>
      </section>
    </div>
  );
}

