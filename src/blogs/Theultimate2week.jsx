import React from "react";
import { Helmet } from "react-helmet";

export default function Theultimate2week() {
  
  // Structured Data (JSON-LD) for SEO: WebPage, ItemList (for Itinerary), and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebPage Schema (Main Context)
      {
        "@type": "WebPage",
        "name": "The Ultimate 2-Week India Itinerary for First-Time Travelers",
        "description": "A perfect, beginner-friendly 14-day India itinerary covering the Golden Triangle (Delhi, Agra, Jaipur) and South India highlights like Udaipur and Goa. Includes essential transport, safety, and budget tips.",
        "url": "https://yourwebsite.com/india-2-week-itinerary", // **UPDATE URL**
        "inLanguage": "en",
        "author": { "@type": "Person", "name": "Your Name/Website Name" }, // **UPDATE Author**
        "datePublished": "2025-01-10", 
        "dateModified": new Date().toISOString(),
      },
      // 2. ItemList Schema (Itinerary Breakdown for Search Engines)
      {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Day 1-2: Delhi (Arrival & Heritage)", "description": "Old Delhi markets, Humayun’s Tomb, India Gate." },
          { "@type": "ListItem", "position": 2, "name": "Day 3: Agra (The Taj Mahal)", "description": "Sunrise Taj Mahal visit and Agra Fort." },
          { "@type": "ListItem", "position": 3, "name": "Day 4-6: Jaipur (Pink City)", "description": "Amber Fort, Hawa Mahal, City Palace, shopping." },
          { "@type": "ListItem", "position": 4, "name": "Day 7-8: Udaipur (Lake City)", "description": "Lake Pichola boat ride, City Palace." },
          { "@type": "ListItem", "position": 5, "name": "Day 9-13: Goa (Beaches & Relaxation)", "description": "Palolem, Calangute, or Baga Beach; water sports, nightlife." },
          { "@type": "ListItem", "position": 6, "name": "Day 14: Departure", "description": "Fly out from Goa or Mumbai." }
        ]
      },
      // 3. FAQPage Schema (For Rich Snippets)
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best way to travel between cities on this itinerary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For the Delhi-Agra-Jaipur loop, use the efficient train system (AC Classes) or hire a private car/driver. For the long jump from Udaipur to Goa, domestic flights are highly recommended to save time."
            }
          },
          {
            "@type": "Question",
            "name": "What is the approximate budget for this 2-week trip?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Excluding international flights, a budget traveler can expect to spend $40-60 USD per day (approx. ₹3,500-₹5,000), covering transport, accommodation, food, and entry fees."
            }
          }
        ]
      }
    ]
  };

  const itineraryData = [
    { days: "Day 1–2", city: "Delhi", highlights: "Old Delhi markets, Humayun’s Tomb, India Gate, Chandni Chowk street food.", transport: "Arrival at DEL, local metro/auto-rickshaw." },
    { days: "Day 3", city: "Agra", highlights: "Sunrise at Taj Mahal, Agra Fort, Mehtab Bagh for sunset.", transport: "Fast train (Shatabdi Express) or private car from Delhi." },
    { days: "Day 4–6", city: "Jaipur", highlights: "Amber Fort, Hawa Mahal, City Palace, shopping at Bapu Bazaar.", transport: "Train or car from Agra (4-5 hours)." },
    { days: "Day 7–8", city: "Udaipur", highlights: "Lake Pichola boat ride, City Palace, Jag Mandir, local art streets.", transport: "Domestic flight (JAI to UDR) or overnight train." },
    { days: "Day 9–13", city: "Goa", highlights: "Beaches (Palolem/Calangute), Old Goa churches, seafood, water sports.", transport: "Domestic flight (UDR to GOI). **Essential to fly this leg.**" },
    { days: "Day 14", city: "Departure", highlights: "Final souvenir shopping or relaxed brunch.", transport: "Fly back from Goa (GOI) or take an overnight train/flight to Mumbai/Delhi." },
  ];

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800 leading-relaxed">
      
      {/* --- SEO HEAD TAGS --- */}
      <Helmet>
        <title>The Ultimate 2-Week India Itinerary for First-Time Travelers</title>
        <meta
          name="description"
          content="A perfect, beginner-friendly 14-day India itinerary covering the Golden Triangle (Delhi, Agra, Jaipur) and South India highlights like Udaipur and Goa. Includes essential transport, safety, and budget tips."
        />
        <meta name="keywords" content="India itinerary, 2 week India travel plan, India trip for beginners, India travel guide, Golden Triangle itinerary, Delhi Agra Jaipur Goa" />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Ultimate 2-Week India Itinerary (Delhi, Taj Mahal, Goa)" />
        <meta property="og:description" content="A safe, easy 14-day plan for first-timers: Delhi, Agra, Jaipur, Udaipur, and 5 days relaxing on the beaches of Goa." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourwebsite.com/india-2-week-itinerary" />
        <meta property="og:image" content="https://yourwebsite.com/images/india-itinerary-hero.jpg" /> {/* **UPDATE IMAGE URL** */}
        
        <link rel="canonical" href="https://yourwebsite.com/india-2-week-itinerary" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* --- PAGE CONTENT --- */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b pb-2">
        The Ultimate 2-Week India Itinerary for First-Time Travelers 🎒🇮🇳
      </h1>

      <p className="mb-6 text-lg p-3 bg-indigo-50 border-l-4 border-indigo-500">
        If you're visiting India for the first time, this 14-day plan offers the
        perfect mix of culture, history, beaches, and relaxation. It successfully
        combines the **Golden Triangle** with the beautiful lakes of Rajasthan and the vibrant coast of Goa.
      </p>

      {/* --- Day-Wise Itinerary Table --- */}
      <h2 className="text-3xl font-semibold mt-10 mb-4 text-indigo-700">Detailed 14-Day Itinerary Breakdown</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider">Days</th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider">City/Region</th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider">Must-See Highlights</th>
              <th className="px-4 py-3 text-left text-sm font-medium uppercase tracking-wider">Transport Tip</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {itineraryData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-4 whitespace-nowrap font-semibold">{item.days}</td>
                <td className="px-4 py-4 whitespace-nowrap font-medium text-gray-900">{item.city}</td>
                <td className="px-4 py-4">{item.highlights}</td>
                <td className="px-4 py-4 text-sm text-gray-600 italic">{item.transport}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Logistics and Transport --- */}
      <h2 className="text-3xl font-semibold mt-12 mb-4 text-indigo-700">Logistics, Transport, and Accommodation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Internal Transport Strategy</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>**Golden Triangle (Delhi-Agra-Jaipur):** Use AC trains (Shatabdi/Rajdhani) for speed and comfort, or hire a dedicated private car/driver.</li>
            <li>**Long-Haul (Udaipur to Goa):** Book a **domestic flight**. This jump is over 2,000 km by road; flying saves two full days of travel.</li>
            <li>**City Travel:** Rely on the Metro (Delhi), Uber/Ola, or pre-paid auto-rickshaws for predictable fares.</li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Accommodation & Booking</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>**Delhi/Jaipur/Udaipur:** Boutique hotels, Havelis (heritage homes), or quality hostels offer the best value.</li>
            <li>**Goa:** Choose accommodation based on your vibe: North Goa (party) or South Goa (peaceful).</li>
            <li>**Booking Tip:** Use popular sites like Booking.com or Hostelworld and read recent reviews carefully for safety and hygiene.</li>
          </ul>
        </div>
      </div>
      
      {/* --- Essential Tips --- */}
      <h2 className="text-3xl font-semibold mt-12 mb-4 text-indigo-700">Essential Tips for First-Time Travellers</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          **Health and Safety:** Only drink **bottled water** (check the seal!) and be cautious with street food initially. Always carry a small bottle of hand sanitizer.
        </li>
        <li>
          **Documentation:** Carry **digital and printed copies** of your visa, passport, and major hotel/flight bookings in separate places.
        </li>
        <li>
          **Money:** Keep cash (for small shops, markets, and auto-rickshaws) and one debit/credit card separated in your luggage. ATMs are widely available.
        </li>
        <li>
          **Cultural Respect:** Dress modestly when visiting temples, mosques, or ashrams (cover shoulders and knees). Remove shoes before entering religious sites.
        </li>
      </ul>

      {/* --- Conclusion --- */}
      <h2 className="text-3xl font-semibold mt-12 mb-4 text-gray-900">Final Thoughts: Ready for Adventure</h2>
      <p>
        This itinerary covers the essential history of North India and rewards you with the relaxation of a coastal holiday. It's designed to minimize culture shock and maximize enjoyment, making your first trip to India seamless and unforgettable.
      </p>
    </div>
  );
}