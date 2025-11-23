import React from "react";
import { Helmet } from "react-helmet";

// Add your images
import ranthamboreHero from "../assets/Ranthambore.jpg";
// import tigerImg from "../assets/tiger.jpg";
// import fortImg from "../assets/ranthambore-fort.jpg";
// import safariImg from "../assets/safari.jpg";
// import lakeImg from "../assets/padamtalab.jpg";

export default function Ranthambore() {
  const title =
    "Ranthambore Travel Guide | Tiger Safari, National Park Zones, Timings & Best Season";
  const description =
    "Explore Ranthambore National Park – Home of Bengal Tigers. Safari timings, zones 1–10, hotels, booking tips, best time to visit, photography spots, and complete travel guide.";
  const url = "https://bharatmile.com/city/ranthambore";
  const image = "https://bharatmile.com/assets/ranthambore.jpg";

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Ranthambore National Park",
    description: description,
    image: image,
    url: url,
    sameAs: [
      "https://en.wikipedia.org/wiki/Ranthambore_National_Park",
      "https://www.britannica.com/place/Ranthambore-National-Park",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Ranthambore famous for?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ranthambore is famous for its Bengal Tiger sightings, wildlife safaris, Ranthambore Fort, lakes, and being one of India’s top national parks.",
        },
      },
      {
        "@type": "Question",
        name: "Which zone is best for tiger sightings in Ranthambore?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Zones 1, 2, 3, 4, and 5 are considered the best for spotting tigers due to high tiger density and water bodies.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time to visit Ranthambore?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "October to June is the best time to visit Ranthambore. Summer months increase tiger sightings near lakes.",
        },
      },
      {
        "@type": "Question",
        name: "How to book a safari in Ranthambore?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Safaris can be booked online via the Rajasthan Forest Department website or through verified travel operators.",
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

      {/* HERO */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-12">
        <img
          src={ranthamboreHero}
          alt="Ranthambore National Park Safari – BharatMile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <h1 className="text-4xl md:text-5xl font-bold text-white p-6">
            Ranthambore National Park – Tiger Safari Experience
          </h1>
        </div>
      </div>

      {/* ABOUT */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          About Ranthambore National Park
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Ranthambore National Park is one of India’s most legendary wildlife
          destinations, located in Sawai Madhopur, Rajasthan. It is globally
          famous for its Bengal Tigers roaming freely in their natural habitat.
          <br /><br />
          With dense forests, rocky mountains, ancient ruins, serene lakes, and
          the majestic Ranthambore Fort overlooking the jungle, the park offers
          a perfect blend of wildlife, history, and natural beauty.
          <br /><br />
          Ranthambore is divided into 10 safari zones, each offering unique
          landscapes and high chances of spotting tigers, leopards, sloth
          bears, crocodiles, deer, nilgai, hyenas, migratory birds, and more.
        </p>
      </section>

      {/* TOP PLACES */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Best Places to Visit in Ranthambore
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Tiger Safari (Zone 1–10)
            </h3>
            <p className="text-gray-700">
              Ranthambore has 10 zones, each offering a thrilling safari
              experience. Zones 1–5 are the most popular for tiger sightings
              due to lakes, grasslands, and dense forest cover.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Ranthambore Fort</h3>
            <p className="text-gray-700">
              A UNESCO World Heritage hill fort with breathtaking aerial views
              of the national park. Visit the Ganesh Temple inside the fort for
              a spiritual experience.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Padam Talab</h3>
            <p className="text-gray-700">
              One of the largest lakes inside the park, popular for spotting
              tigers near the water, Sambhar deer, and migratory birds.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Rajbagh Ruins</h3>
            <p className="text-gray-700">
              Ancient palaces and arches partly submerged in the lake —
              extremely photogenic and a prime tiger sighting spot.
            </p>
          </div>

        </div>
      </section>

      {/* BEST TIME */}
      <section className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200 mb-14">
        <h2 className="text-2xl font-semibold mb-3">Best Time to Visit</h2>
        <p className="text-gray-700">
          The best time to visit Ranthambore is <strong>October to June</strong>.
          <br />
          • **Winter (Oct–Feb)** → Perfect climate  
          • **Summer (Mar–Jun)** → BEST tiger sightings  
          • Park stays **closed in monsoon (Jul–Sep)**  
        </p>
      </section>

      {/* LONG SEO CONTENT */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Complete Ranthambore Safari Guide (Booking, Zones, Prices & Tips)
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Ranthambore is one of India’s most organized and tourist-friendly
          wildlife reserves. Safari bookings open well in advance, and early
          booking increases your chances of getting popular zones like 2, 3, and
          4.
          <br /><br />
          Safaris are conducted in **Gypsy (6-seater)** and **Canter
          (20-seater)**. Both vehicles provide excellent visibility and safety.
          <br /><br />
          Tiger sightings peak around lakes (Padam Talab, Malik Talab, Rajbagh)
          where animals come to drink water. Morning safaris offer golden light
          for photography, while evening safaris are preferred for animal
          movement.
        </p>
      </section>
    </div>
  );
}

