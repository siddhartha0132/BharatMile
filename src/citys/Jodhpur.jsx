import React from "react";
import { Helmet } from "react-helmet";
import jodhpurHero from "../assets/Jodhpur.jpg"; // add if available

export default function Jodhpur() {

  const company = {
    name: "BharatMile",
    url: "https://bharatmile.com",
    cityPath: "/city/jodhpur",
    logo: "/logo.png",
  };

  const pageTitle =
    "Jodhpur Travel Guide | Blue City of Rajasthan, Places to Visit, Hotels, Food, Itinerary & Tips";

  const description =
    "Ultimate Jodhpur travel guide covering Mehrangarh Fort, Blue City, Jaswant Thada, Umaid Bhawan Palace, food, shopping, hotels, itinerary, safety, best time to visit & nearby trips.";

  const pageUrl = `${company.url}${company.cityPath}`;
  const imageUrl = `${company.url}/assets/jodhpur-hero.jpg`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Jodhpur called the Blue City?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Jodhpur is called the Blue City because many houses in the old city are painted blue, originally to signify Brahmin homes and now to reflect heat and keep interiors cool."
        }
      },
      {
        "@type": "Question",
        name: "How many days are enough for Jodhpur?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "2 to 3 days are ideal to explore Jodhpur’s forts, palaces, markets, and food culture. 4–5 days allow nearby excursions."
        }
      },
      {
        "@type": "Question",
        name: "Is Jodhpur safe for tourists?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Jodhpur is generally safe for families, solo travelers, and women when basic travel precautions are followed."
        }
      }
    ]
  };

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Jodhpur",
    description,
    url: pageUrl,
    image: imageUrl,
    sameAs: [
      "https://en.wikipedia.org/wiki/Jodhpur",
      "https://www.britannica.com/place/Jodhpur"
    ]
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      {/* SEO */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />

        <script type="application/ld+json">{JSON.stringify(citySchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative h-96 rounded-xl overflow-hidden shadow-lg mb-14">
        <img
          src={jodhpurHero}
          alt="Mehrangarh Fort and Blue City of Jodhpur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end p-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Jodhpur – The Blue City of Rajasthan
            </h1>
            <p className="text-gray-200 max-w-2xl mt-2">
              Majestic forts, blue streets, royal palaces, desert culture,
              and unforgettable food experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">About Jodhpur</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jodhpur, the second-largest city in Rajasthan, is one of India’s most
          visually striking heritage destinations. Popularly known as the
          <strong> Blue City</strong>, Jodhpur is famous for its indigo-painted
          houses, massive forts, royal palaces, vibrant markets, and rich
          Marwari culture.
          <br /><br />
          Founded in <strong>1459 by Rao Jodha</strong>, Jodhpur served as the
          capital of the Marwar kingdom. Its strategic desert location made it
          a powerful trading and military center. Today, Jodhpur beautifully
          balances its royal legacy with modern tourism.
        </p>
      </section>

      {/* LOCATION */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          Where Is Jodhpur Located & How to Reach
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jodhpur is located in western Rajasthan, on the edge of the Thar
          Desert, and is well connected by air, rail, and road.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg space-y-2">
          <li><strong>By Air:</strong> Jodhpur Airport (JDH) connects to Delhi, Mumbai & Jaipur</li>
          <li><strong>By Train:</strong> Direct trains from Delhi, Jaipur, Jaisalmer, Udaipur</li>
          <li><strong>By Road:</strong> Jaipur (6 hrs), Jaisalmer (5 hrs), Udaipur (5 hrs)</li>
        </ul>
      </section>

      {/* PLACES */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Best Places to Visit in Jodhpur
        </h2>

        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
          <li><strong>Mehrangarh Fort</strong> – One of India’s largest forts with panoramic city views</li>
          <li><strong>Jaswant Thada</strong> – Marble cenotaph and peaceful gardens</li>
          <li><strong>Umaid Bhawan Palace</strong> – Royal residence and heritage hotel</li>
          <li><strong>Blue City Walk</strong> – Iconic blue houses beneath Mehrangarh</li>
          <li><strong>Mandore Gardens</strong> – Ancient royal memorials</li>
        </ul>
      </section>

      {/* FOOD */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          Food & Cuisine of Jodhpur
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Jodhpur is a food lover’s paradise, especially for traditional
          Rajasthani flavors. Due to desert climate, the cuisine focuses on
          spices, ghee, and long-lasting ingredients.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg space-y-2">
          <li>Dal Baati Churma</li>
          <li>Mirchi Bada</li>
          <li>Pyaaz Kachori</li>
          <li>Mawa Kachori (Jodhpur specialty)</li>
          <li>Gatte ki Sabzi</li>
        </ul>
      </section>

      {/* SHOPPING */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          Shopping & Famous Markets in Jodhpur
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Sardar Market & Clock Tower – Spices and handicrafts</li>
          <li>Tripolia Market – Textiles and bangles</li>
          <li>Nai Sarak – Footwear and traditional wear</li>
        </ul>
      </section>

      {/* ITINERARY */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          Ideal Jodhpur Itinerary (3 Days)
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Day 1: Mehrangarh Fort, Jaswant Thada, Blue City walk</li>
          <li>Day 2: Umaid Bhawan Palace, Mandore Gardens, shopping</li>
          <li>Day 3: Local food tour & leisure</li>
        </ul>
      </section>

      {/* BEST TIME */}
      <section className="bg-blue-50 p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-semibold mb-3">
          Best Time to Visit Jodhpur
        </h2>
        <p className="text-gray-700 text-lg">
          October to March is the best time with pleasant weather. Summers
          (April–June) are extremely hot, while monsoon months are short
          and mild.
        </p>
      </section>

      {/* SAFETY */}
      <section className="bg-green-50 p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-semibold mb-3">
          Is Jodhpur Safe for Tourists?
        </h2>
        <p className="text-gray-700 text-lg">
          Yes. Jodhpur is considered safe for families, couples, and solo
          travelers. Stick to main areas at night and use registered taxis.
        </p>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6">
          Explore More Rajasthan Travel Guides
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li><a href="/city/jaipur" className="text-blue-700 font-semibold">Jaipur Travel Guide</a></li>
          <li><a href="/city/jaisalmer" className="text-blue-700 font-semibold">Jaisalmer Travel Guide</a></li>
          <li><a href="/city/udaipur" className="text-blue-700 font-semibold">Udaipur Travel Guide</a></li>
          <li><a href="/city/ranthambore" className="text-blue-700 font-semibold">Ranthambore Travel Guide</a></li>
        </ul>
      </section>

      {/* TRUST */}
      <section className="bg-gray-100 p-8 rounded-xl mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Why Trust {company.name}?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {company.name} is a Rajasthan-focused travel platform offering
          experience-based travel guides, curated itineraries, and trusted
          local partnerships to help travelers plan memorable journeys.
        </p>
      </section>

    </main>
  );
}
