import React from "react";
import { Helmet } from "react-helmet";

export default function Top10places() {

  const places = [
    { rank: 1, title: "Varanasi – The Spiritual Capital of India", region: "North India", bestFor: "Spirituality, Culture, Photography", highlight: "Witness the magical Ganga Aarti, walk through timeless alleys, or take a sunrise boat ride on the sacred Ganges." },
    { rank: 2, title: "Jaipur – The Royal Pink City", region: "Rajasthan", bestFor: "History, Architecture, Shopping", highlight: "A vibrant mix of history and culture. Visit Hawa Mahal, Amber Fort, and the bustling bazaars for royal charm." },
    { rank: 3, title: "Ladakh – Heaven for Adventure Lovers", region: "Himalayas", bestFor: "Adventure, Scenery, Monasteries", highlight: "Explore Pangong Lake, Nubra Valley, and ancient monasteries surrounded by the mighty Himalayas." },
    { rank: 4, title: "Goa – Beaches, Nightlife & Serenity", region: "West Coast", bestFor: "Relaxation, Beaches, Nightlife", highlight: "The perfect escape. Whether you want peaceful beaches or buzzing nightlife, Goa has something for everyone." },
    { rank: 5, title: "Kerala Backwaters – God’s Own Country", region: "South India", bestFor: "Houseboats, Slow Travel, Nature", highlight: "Offer a calm, slow-paced, and luxurious experience. Take a houseboat trip through palm-fringed canals and villages." },
    { rank: 6, title: "Agra – Home of the Taj Mahal", region: "North India", bestFor: "World Heritage, Architecture, History", highlight: "The Taj Mahal is a world wonder for a reason. Seeing its breathtaking beauty in person is an experience you must have." },
    { rank: 7, title: "Meghalaya – The Abode of Clouds", region: "Northeast India", bestFor: "Nature, Trekking, Living Root Bridges", highlight: "Famous for living root bridges, waterfalls, and rain-soaked forests. One of India’s most magical destinations for nature enthusiasts." },
    { rank: 8, title: "Rishikesh – Yoga, Adventure & Peace", region: "Himalayas", bestFor: "Yoga, Rafting, Meditation", highlight: "The yoga capital of the world. Try white-water rafting, visit ashrams, or relax by the Ganges surrounded by mountains." },
    { rank: 9, title: "Udaipur – The City of Lakes", region: "Rajasthan", bestFor: "Romance, Palaces, Lakeside Views", highlight: "Pure romance. The serene lakes, palaces, rooftop cafés, and Aravalli mountains make it one of India’s most beautiful cities." },
    { rank: 10, title: "Andaman Islands – Paradise for Beach Lovers", region: "Bay of Bengal", bestFor: "Diving, Beaches, Water Sports", highlight: "With turquoise waters and world-class diving spots, the Andamans feel like the Maldives—but cheaper and untouched." },
  ];

  // Structured Data (JSON-LD) for SEO: Article and ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema (Main Content Type)
      {
        "@type": "Article",
        "headline": "Top 10 Places to Visit in India Before You Die (2025 Guide)",
        "description": "A handpicked list of the 10 most essential places to visit in India, covering spirituality, adventure, beaches, and culture for an unforgettable adventure.",
        "image": ["https://yourwebsite.com/images/b1.jpg"], // **UPDATE URL**
        "datePublished": "2025-11-23T08:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": { "@type": "Person", "name": "BharatMile Blogs" },
        "publisher": { "@type": "Organization", "name": "BharatMile", "logo": { "@type": "ImageObject", "url": "https://yourwebsite.com/logo.png" } },
      },
      // 2. ItemList Schema (For Rich Snippets - crucial for "Top X" lists)
      {
        "@type": "ItemList",
        "itemListElement": places.map((place, index) => ({
          "@type": "ListItem",
          "position": place.rank,
          "name": place.title,
          "description": `${place.highlight} (Best for: ${place.bestFor})`,
        })),
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-800">
      
      {/* --- SEO HEAD TAGS --- */}
      <Helmet>
        <title>Top 10 Places to Visit in India Before You Die (2025 Definitive Guide)</title>
        <meta
          name="description"
          content="A handpicked list of the 10 most essential places to visit in India, covering spirituality, adventure, beaches, and culture for an unforgettable adventure. Updated for 2025."
        />
        <meta name="keywords" content="Top 10 India, India travel guide, must visit places India, Varanasi, Ladakh, Goa, Kerala, Taj Mahal" />
        <meta name="author" content="BharatMile Blogs" />
        <link rel="canonical" href="https://yourwebsite.com/india-top-10-places" /> {/* **UPDATE URL** */}
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Top 10 Places to Visit in India (2025 Definitive Guide)" />
        <meta property="og:description" content="The definitive list of 10 essential Indian destinations covering heritage, adventure, and beaches. Plan your bucket list trip now." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourwebsite.com/india-top-10-places" /> {/* **UPDATE URL** */}
        <meta property="og:image" content="https://yourwebsite.com/images/b1.jpg" /> {/* **UPDATE IMAGE URL** */}

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* --- PAGE CONTENT --- */}
      
      {/* --- HERO IMAGE --- */}
      <img 
        src="/images/b1.jpg" 
        alt="Top 10 Places to Visit in India Before You Die"
        className="rounded-xl w-full mb-8 shadow-lg"
      />

      {/* --- TITLE + DATE --- */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
        Top 10 Places to Visit in India Before You Die 🌍
      </h1>

      <p className="text-slate-500 text-sm mb-10 border-b pb-4">
        Updated for 2025 • 8 min read • By BharatMile Blogs
      </p>

      {/* --- INTRO --- */}
      <p className="text-lg leading-relaxed mb-6">
        India is not just a country—it’s a complete world wrapped into one incredible landmass. 
        From snow-capped Himalayas to golden deserts, ancient temples, lush forests, beaches, 
        and ultra-modern cities, India offers unforgettable experiences you won’t find anywhere else.  
      </p>

      <p className="text-lg leading-relaxed mb-8 p-3 bg-indigo-50 border-l-4 border-indigo-600">
        Whether you're a first-time traveler or a seasoned explorer, this handpicked list of the 
        <strong>Top 10 places to visit in India</strong> will help you plan the 
        perfect adventure in 2025 and beyond.
      </p>

      {/* --- LIST START: SUMMARY TABLE --- */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-indigo-700">Quick Summary of the Top 10</h2>
      
      <div className="overflow-x-auto shadow-md rounded-lg mb-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Rank</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Destination</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Best For</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">Region</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {places.map((place) => (
              <tr key={place.rank} className={place.rank % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 whitespace-nowrap font-bold text-lg text-indigo-600">{place.rank}</td>
                <td className="px-4 py-3 whitespace-nowrap font-medium">{place.title.split('–')[0].trim()}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{place.bestFor}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{place.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- DETAILED LIST --- */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-indigo-700">The Detailed List: What Makes Them Essential</h2>

      <div className="space-y-8">
        {places.map((place) => (
          <section key={place.rank} className="border-b pb-6">
            <h3 className="text-2xl font-extrabold text-gray-900">
              {place.rank}. {place.title}
            </h3>
            <p className="text-sm font-medium mt-1 text-indigo-600">
              Region: {place.region} | Best for: {place.bestFor}
            </p>
            <p className="leading-relaxed mt-3 text-gray-700">
              {place.highlight}
              <br />
              <span className="font-semibold italic block mt-2">
                Why it’s essential: {place.title.split('–')[1].trim()}
              </span>
            </p>
          </section>
        ))}
      </div>


      {/* --- CONCLUSION --- */}
      <h2 className="text-3xl font-bold mt-16 mb-4 text-indigo-700">Final Thoughts: Start Your Indian Adventure</h2>
      <p className="leading-relaxed mb-6">
        India is vast, diverse, and unbelievably beautiful. These top 10 places cover the entire spectrum—spirituality, 
        adventure, beaches, and hidden wonders. Start with any one of them and you’ll  
        fall in love with India all over again.
      </p>

      <p className="leading-relaxed">
        Planning a trip? Check out more guides on <a href="/blogs" className="text-indigo-600 underline hover:text-indigo-800 font-medium">BharatMile Blogs</a>.
      </p>
    </div>
  );
}