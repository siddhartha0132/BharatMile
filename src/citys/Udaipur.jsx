import React from "react";
import { Helmet } from "react-helmet";
import udaipurHero from "../assets/udaipur.jpeg";

export default function Udaipur() {

  const title =
    "Udaipur Travel Guide | City of Lakes, Places to Visit, Hotels, Food, Itinerary & Best Time";

  const description =
    "Complete Udaipur travel guide covering City Palace, Lake Pichola, Jag Mandir, hotels, food, shopping, itinerary, safety tips, best time to visit & nearby places.";

  const url = "https://bharatmile.com/city/udaipur";
  const image = "https://bharatmile.com/assets/udaipur.jpeg";

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
      </Helmet>

      {/* HERO */}
      <section className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-lg mb-16">
        <img
          src={udaipurHero}
          alt="Lake Pichola Udaipur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <h1 className="text-5xl font-bold text-white p-8">
            Udaipur – The City of Lakes
          </h1>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">About Udaipur</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Udaipur, often referred to as the <strong>“Venice of the East”</strong>,
          is one of the most beautiful and romantic cities in India. Located in
          southern Rajasthan and surrounded by the Aravalli Hills, Udaipur is
          famous for its shimmering lakes, royal palaces, heritage hotels, and
          vibrant culture.
          <br /><br />
          Founded in <strong>1559 by Maharana Udai Singh II</strong>, Udaipur
          served as the capital of the Mewar kingdom. Unlike the desert cities
          of Rajasthan, Udaipur offers a refreshing landscape filled with water
          bodies, greenery, and scenic hill views.
        </p>
      </section>

      {/* LOCATION */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Where Is Udaipur Located & How to Reach
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Udaipur is located in southern Rajasthan and is well connected by air,
          rail, and road.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg space-y-2">
          <li><strong>By Air:</strong> Maharana Pratap Airport (UDR)</li>
          <li><strong>By Train:</strong> Udaipur City Railway Station</li>
          <li><strong>By Road:</strong> Jaipur (6 hrs), Ahmedabad (5 hrs)</li>
        </ul>
      </section>

      {/* ATTRACTIONS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Top Places to Visit in Udaipur
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">City Palace</h3>
            <p className="text-gray-600">
              The largest palace complex in Rajasthan overlooking Lake Pichola,
              showcasing Mughal–Rajput architecture.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Lake Pichola</h3>
            <p className="text-gray-600">
              The soul of Udaipur. Sunset boat rides offer unforgettable views
              of City Palace and Jag Mandir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Jag Mandir</h3>
            <p className="text-gray-600">
              A stunning island palace located in Lake Pichola, known for its
              peaceful ambiance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Sajjangarh (Monsoon Palace)</h3>
            <p className="text-gray-600">
              A hilltop palace offering panoramic sunset views of lakes and the
              entire city.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Fateh Sagar Lake</h3>
            <p className="text-gray-600">
              A peaceful lake surrounded by hills, popular for evening walks
              and boating.
            </p>
          </div>

        </div>
      </section>

      {/* FOOD */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Food & Cuisine of Udaipur
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Udaipur offers a rich blend of traditional Rajasthani flavors and
          modern café culture.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg space-y-2">
          <li>Dal Baati Churma</li>
          <li>Gatte ki Sabzi</li>
          <li>Ker Sangri</li>
          <li>Laal Maas</li>
          <li>Street food near old city & lakeside cafés</li>
        </ul>
      </section>

      {/* HOTELS */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Best Areas & Hotels to Stay in Udaipur
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Udaipur is known for heritage hotels, luxury lakefront resorts, and
          budget guesthouses.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg space-y-2">
          <li>Lake Pichola – Luxury & heritage hotels</li>
          <li>City Center – Mid-range hotels</li>
          <li>Outside city – Budget stays & resorts</li>
        </ul>
      </section>

      {/* ITINERARY */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Ideal Udaipur Itinerary (3 Days)
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Day 1: City Palace, Jagdish Temple, boat ride on Lake Pichola</li>
          <li>Day 2: Sajjangarh Palace, Fateh Sagar Lake, local markets</li>
          <li>Day 3: Cafés, shopping, leisure & photography</li>
        </ul>
      </section>

      {/* BEST TIME */}
      <section className="bg-blue-50 p-8 rounded-xl mb-20">
        <h2 className="text-2xl font-semibold mb-3">
          Best Time to Visit Udaipur
        </h2>
        <p className="text-gray-700 text-lg">
          September to March is the best time to visit Udaipur with pleasant
          weather. Summers are hot, while monsoon adds greenery and romance.
        </p>
      </section>

      {/* SAFETY */}
      <section className="bg-green-50 p-8 rounded-xl mb-20">
        <h2 className="text-2xl font-semibold mb-3">
          Is Udaipur Safe for Tourists?
        </h2>
        <p className="text-gray-700 text-lg">
          Yes. Udaipur is considered one of the safest cities in Rajasthan for
          families, couples, and solo travelers.
        </p>
      </section>

      {/* NEARBY */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Nearby Places from Udaipur
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Mount Abu – 3 hrs</li>
          <li>Kumbhalgarh Fort – 2 hrs</li>
          <li>Chittorgarh – 2.5 hrs</li>
        </ul>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6">
          Explore More Rajasthan Travel Guides
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-lg">
          <li><a href="/city/jaipur" className="text-blue-700 font-semibold">Jaipur Travel Guide</a></li>
          <li><a href="/city/jodhpur" className="text-blue-700 font-semibold">Jodhpur Travel Guide</a></li>
          <li><a href="/city/jaisalmer" className="text-blue-700 font-semibold">Jaisalmer Travel Guide</a></li>
          <li><a href="/city/ranthambore" className="text-blue-700 font-semibold">Ranthambore Travel Guide</a></li>
        </ul>
      </section>

      {/* TRUST */}
      <section className="bg-gray-100 p-8 rounded-xl mt-20">
        <h2 className="text-3xl font-bold mb-4">
          Why Trust BharatMile?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          BharatMile is a Rajasthan-focused travel platform providing accurate,
          experience-based travel guides, curated itineraries, and trusted
          local partnerships to help travelers plan memorable trips.
        </p>
      </section>

    </div>
  );
}
