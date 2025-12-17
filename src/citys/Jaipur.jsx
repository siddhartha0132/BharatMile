import React, { useEffect } from "react";
import jaipurHero from "../assets/jaipur.jpeg";
import amberFort from "../assets/amber-fort.jpg";
import cityPalace from "../assets/city-palace.jpeg";

export default function Jaipur() {
  const siteUrl = "https://bharatmile.com";
  const pageUrl = `${siteUrl}/city/jaipur`;
  const pageTitle =
    "Jaipur Travel Guide | Places to Visit, Itinerary, Food, Hotels & Best Time";
  const description =
    "Ultimate Jaipur travel guide covering forts, palaces, shopping markets, food, hotels, itinerary, safety tips, best time to visit & nearby places.";

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    const schema = {
      "@context": "https://schema.org",
      "@type": "City",
      name: "Jaipur",
      description,
      url: pageUrl,
      image: `${siteUrl}/assets/jaipur.jpeg`,
      sameAs: [
        "https://en.wikipedia.org/wiki/Jaipur",
        "https://www.britannica.com/place/Jaipur",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">

      {/* HERO */}
      <section className="relative h-[450px] rounded-xl overflow-hidden shadow mb-16">
        <img
          src={jaipurHero}
          alt="Jaipur Pink City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end p-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Jaipur – The Pink City of India
            </h1>
            <p className="text-gray-200 max-w-3xl mt-3">
              Royal forts, majestic palaces, colorful bazaars, rich culture and
              authentic Rajasthani food — Jaipur is India’s most iconic heritage city.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">About Jaipur</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jaipur, the capital of Rajasthan, is one of India’s most visited
          heritage destinations. Popularly known as <strong>“The Pink City”</strong>,
          Jaipur is famous for its royal palaces, hill forts, planned streets,
          vibrant bazaars, and deep-rooted culture.
          <br /><br />
          Founded in <strong>1727 by Maharaja Sawai Jai Singh II</strong>, Jaipur is
          India’s first planned city designed according to Vastu Shastra. The
          old city was painted pink to welcome Prince Albert, and the color
          remains a symbol of hospitality.
          <br /><br />
          Jaipur is a major part of the <strong>Golden Triangle (Delhi–Agra–Jaipur)</strong>,
          making it one of the most searched travel destinations in India.
        </p>
      </section>

      {/* LOCATION */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Where Is Jaipur Located & How to Reach</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jaipur is located in eastern Rajasthan and is well connected by air,
          rail, and road.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg space-y-2">
          <li><strong>By Air:</strong> Jaipur International Airport (JAI)</li>
          <li><strong>By Train:</strong> Jaipur Junction & Durgapura Station</li>
          <li><strong>By Road:</strong> Delhi (5–6 hrs), Agra (4 hrs)</li>
        </ul>
      </section>

      {/* PLACES */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Top Places to Visit in Jaipur
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <img src={amberFort} alt="Amber Fort" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Amber Fort</h3>
            <p className="text-gray-600">
              Majestic hilltop fort famous for Sheesh Mahal and royal courtyards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img src={jaipurHero} alt="Hawa Mahal" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">Hawa Mahal</h3>
            <p className="text-gray-600">
              Iconic Palace of Winds with 953 windows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <img src={cityPalace} alt="City Palace" className="rounded mb-4" />
            <h3 className="text-xl font-semibold">City Palace</h3>
            <p className="text-gray-600">
              Royal residence with museums, courtyards and gates.
            </p>
          </div>
        </div>
      </section>

      {/* SHOPPING */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Shopping & Famous Markets in Jaipur</h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Johari Bazaar – Jewelry & gemstones</li>
          <li>Bapu Bazaar – Mojris & textiles</li>
          <li>Tripolia Bazaar – Bangles</li>
          <li>Chandpole Bazaar – Handicrafts</li>
        </ul>
      </section>

      {/* FOOD */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Food & Cuisine of Jaipur</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jaipur is famous for authentic Rajasthani cuisine. Must-try dishes
          include Dal Baati Churma, Laal Maas, Gatte ki Sabzi, Ker Sangri,
          Pyaaz Kachori, and Ghewar.
        </p>
      </section>

      {/* ITINERARY */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Perfect Jaipur 3-Day Itinerary</h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Day 1: City Palace, Jantar Mantar, Hawa Mahal, Shopping</li>
          <li>Day 2: Amber Fort, Jaigarh Fort, Nahargarh Fort</li>
          <li>Day 3: Albert Hall Museum, Food tour, Leisure</li>
        </ul>
      </section>

      {/* SAFETY */}
      <section className="bg-green-50 p-8 rounded-xl mb-20">
        <h2 className="text-2xl font-semibold mb-4">Is Jaipur Safe for Tourists?</h2>
        <p className="text-gray-700 text-lg">
          Jaipur is generally safe for families, solo travelers, and women.
          Avoid isolated areas at night, use trusted cabs, and be cautious
          with street vendors near tourist spots.
        </p>
      </section>

      {/* NEARBY */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Nearby Places from Jaipur</h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Pushkar & Ajmer – 2.5 hrs</li>
          <li>Ranthambore – 3.5 hrs</li>
          <li>Alwar & Sariska – 3 hrs</li>
        </ul>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6">
          Explore More Rajasthan Destinations
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li><a href="/city/ranthambore" className="text-green-700 font-semibold">Ranthambore Travel Guide</a></li>
          <li><a href="/city/jaisalmer" className="text-green-700 font-semibold">Jaisalmer Travel Guide</a></li>
          <li><a href="/city/udaipur" className="text-green-700 font-semibold">Udaipur Travel Guide</a></li>
          <li><a href="/city/pushkar" className="text-green-700 font-semibold">Pushkar Travel Guide</a></li>
        </ul>
      </section>

    </main>
  );
}

