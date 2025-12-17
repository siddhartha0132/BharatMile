import React from "react";
import { Helmet } from "react-helmet";
import ranthamboreHero from "../assets/Ranthambore.jpg";

export default function Ranthambore() {
  const title =
    "Ranthambore National Park Travel Guide | Safari Zones, Timings, Best Time & Hotels";
  const description =
    "Complete Ranthambore National Park travel guide with safari zones 1–10, timings, booking tips, best season, wildlife, hotels, fort, itinerary & photography spots.";
  const url = "https://bharatmile.com/city/ranthambore";
  const image = "https://bharatmile.com/assets/ranthambore.jpg";

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
            "Ranthambore National Park is famous for Bengal Tigers, jungle safaris, Ranthambore Fort, scenic lakes, and rich wildlife.",
        },
      },
      {
        "@type": "Question",
        name: "Which safari zone is best in Ranthambore?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Zones 1 to 5 are considered the best safari zones in Ranthambore due to higher tiger density and water bodies.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best time to visit Ranthambore?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "October to June is the best time to visit Ranthambore. Summer months offer the highest chance of tiger sightings.",
        },
      },
      {
        "@type": "Question",
        name: "How to book Ranthambore safari?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ranthambore safari can be booked online via the Rajasthan Forest Department or through authorized travel agents.",
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50">

      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative h-[460px]">
        <img
          src={ranthamboreHero}
          alt="Ranthambore National Park Tiger Safari"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ranthambore National Park
            </h1>
            <p className="text-xl max-w-2xl">
              India’s most famous tiger reserve — jungle safaris, wildlife
              photography, ancient forts, and scenic lakes.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="font-semibold">Best Time</p>
            <p className="text-gray-600">Oct – Jun</p>
          </div>
          <div>
            <p className="font-semibold">Safari Zones</p>
            <p className="text-gray-600">1 – 10</p>
          </div>
          <div>
            <p className="font-semibold">Safari Type</p>
            <p className="text-gray-600">Gypsy / Canter</p>
          </div>
          <div>
            <p className="font-semibold">Nearest Station</p>
            <p className="text-gray-600">Sawai Madhopur</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-20">

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-4">
            About Ranthambore National Park
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ranthambore National Park is located in the Sawai Madhopur district
            of Rajasthan and is one of the best places in India to spot Bengal
            Tigers in the wild. The park is known for its open forests, lakes,
            rocky terrain, and historic ruins scattered across the jungle.
            <br /><br />
            Once a royal hunting ground, Ranthambore is now a protected
            wildlife reserve and part of Project Tiger, offering one of the
            highest tiger sighting probabilities in India.
          </p>
        </section>

        {/* LOCATION */}
        <section>
          <h2 className="text-3xl font-bold mb-4">
            Where Is Ranthambore Located?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ranthambore is located around 180 km from Jaipur and is easily
            accessible by road and rail. Sawai Madhopur Junction is the nearest
            railway station, well connected to Jaipur, Delhi, Mumbai, and Kota.
            Jaipur International Airport is the nearest airport, approximately
            3.5 to 4 hours away by road.
          </p>
        </section>

        {/* WILDLIFE */}
        <section>
          <h2 className="text-3xl font-bold mb-4">
            Wildlife in Ranthambore National Park
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ranthambore is home to a rich variety of wildlife including Bengal
            Tigers, leopards, sloth bears, striped hyenas, sambar deer, chital,
            nilgai, wild boar, crocodiles, and over 300 species of birds.
          </p>
        </section>

        {/* SAFARI TYPES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Ranthambore Safari Types & Timings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Gypsy Safari</h3>
              <p className="text-gray-700">
                6-seater open jeep, best for photography and close wildlife
                encounters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Canter Safari</h3>
              <p className="text-gray-700">
                20-seater open vehicle, ideal for groups and budget travelers.
              </p>
            </div>
          </div>
        </section>

        {/* ZONES */}
        <section>
          <h2 className="text-3xl font-bold mb-4">
            Ranthambore Safari Zones (1–10)
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Zones 1 to 5 are core zones with higher tiger density and popular
            water bodies like Padam Talab and Rajbagh. Zones 6 to 10 are buffer
            zones offering quieter safari experiences.
          </p>
        </section>

        {/* FORT */}
        <section>
          <h2 className="text-3xl font-bold mb-4">
            Ranthambore Fort – UNESCO Heritage Site
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ranthambore Fort is a UNESCO World Heritage Site located inside the
            national park. It offers panoramic views of forests and lakes and
            houses the famous Ganesh Temple, ancient palaces, and step wells.
          </p>
        </section>

        {/* ITINERARY */}
        <section>
          <h2 className="text-3xl font-bold mb-4">
            Ideal Ranthambore Itinerary (2 Nights / 3 Days)
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
            <li>Day 1: Arrival, hotel check-in, leisure time</li>
            <li>Day 2: Morning safari, fort visit, evening safari</li>
            <li>Day 3: Breakfast and departure</li>
          </ul>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold mb-6">
            Explore More Rajasthan Travel Guides
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li><a href="/city/jaipur" className="text-green-700 font-semibold hover:underline">Jaipur Travel Guide</a></li>
            <li><a href="/city/jaisalmer" className="text-green-700 font-semibold hover:underline">Jaisalmer Travel Guide</a></li>
            <li><a href="/city/udaipur" className="text-green-700 font-semibold hover:underline">Udaipur Travel Guide</a></li>
            <li><a href="/city/pushkar" className="text-green-700 font-semibold hover:underline">Pushkar Travel Guide</a></li>
          </ul>
        </section>

        {/* TRUST */}
        <section className="bg-gray-100 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">
            Why Trust BharatMile?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            BharatMile is a Rajasthan-focused travel platform providing
            accurate, experience-based travel guides, safari insights, hotel
            recommendations, and itinerary planning to help travelers plan
            better trips.
          </p>
        </section>

      </main>
    </div>
  );
}
