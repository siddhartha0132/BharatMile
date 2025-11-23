import React, { useEffect } from "react";

export default function Ooty() {
  
  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/ooty-toy-train-guide" // **UPDATE with actual URL**
        },
        headline: "Ooty Toy Train: The Definitive Guide to Nilgiri Mountain Railway (NMR) Tickets, Timings, and Route",
        image: ["https://example.com/images/ooty-toy-train-hero.jpg", "https://example.com/images/NMR-steam-engine.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Wander Guides Travel Team" // **UPDATE with actual author**
        },
        publisher: {
          "@type": "Organization",
          name: "Wander Guides",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "The complete guide on the UNESCO-listed Ooty Toy Train (Nilgiri Mountain Railway - NMR). Find detailed information on ticket prices, online reservation tips via IRCTC, timings, the best scenic route segments, and the history of this steam-powered journey."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "South India", "item": "https://example.com/south-india" },
          { "@type": "ListItem", "position": 3, "name": "Ooty Toy Train Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I book tickets for the Ooty Toy Train?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tickets must be booked online via the Indian Railways (IRCTC) website. Booking opens 120 days in advance and sells out quickly, especially for the steam-hauled Mettupalayam to Ooty section."
            }
          },
          {
            "@type": "Question",
            name: "Which side of the train has the best views?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For the Mettupalayam to Ooty ascent, the **right side** generally offers the most dramatic views of the gorges, waterfalls, and valleys. For the descent, the left side is better."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Ooty Toy Train: The Definitive Guide to NMR Tickets, Timings, and Route";

    // Helper function to create or update meta tags
    const setOrCreate = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const descriptionContent = "The complete guide on the UNESCO-listed Ooty Toy Train (Nilgiri Mountain Railway - NMR). Find detailed information on ticket prices, online reservation tips via IRCTC, timings, the best scenic route segments, and the history of this steam-powered journey.";
    const titleContent = "Ooty Toy Train: Nilgiri Railway Tickets, Timings & Route Guide";
    const imageUrl = "https://example.com/images/ooty-toy-train-hero.jpg"; // **UPDATE URL**

    // 2. General SEO Meta Tag
    setOrCreate("description", descriptionContent);
    
    // 3. Open Graph Tags (for Social Media)
    setOrCreate('og:title', titleContent, 'property');
    setOrCreate('og:description', descriptionContent, 'property');
    setOrCreate('og:type', 'article', 'property');
    setOrCreate('og:url', window.location.href, 'property');
    setOrCreate('og:image', imageUrl, 'property');
    setOrCreate('og:site_name', 'Wander Guides', 'property');

    // 4. Twitter Card Tags
    setOrCreate('twitter:card', 'summary_large_image');
    setOrCreate('twitter:title', titleContent);
    setOrCreate('twitter:description', descriptionContent);
    setOrCreate('twitter:image', imageUrl);

    // 5. Canonical Link Tag
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);

    // 6. JSON-LD Structured Data Script
    let jsonScript = document.getElementById("ooty-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "ooty-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);

  const faqItems = [
    { 
      q: "How can I book tickets for the Ooty Toy Train?", 
      a: "Tickets must be booked online via the Indian Railways (IRCTC) website. Booking opens 120 days in advance and sells out quickly, especially for the steam-hauled Mettupalayam to Ooty section." 
    },
    { 
      q: "Which side of the train has the best views?", 
      a: "For the Mettupalayam to Ooty ascent, the **right side** generally offers the most dramatic views of the gorges, waterfalls, and valleys. For the descent, the left side is better." 
    },
    {
      q: "What is the difference between First Class (FC) and Second Class (2S)?",
      a: "First Class offers wider seats, larger windows (ideal for photos), and is generally less crowded. Second Class is more budget-friendly but offers a denser seating arrangement and smaller windows."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-blue-800">
          Ooty Toy Train: Tickets, Timings & Essential Guide 🚂
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Everything you need to know about the iconic **Nilgiri Mountain Railway (NMR)** journey, a UNESCO World Heritage site, from Mettupalayam to Ooty.
        </p>
      </header>

      {/* --- Section 1: About the NMR --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">1. Nilgiri Mountain Railway: A UNESCO Gem</h2>
        <p className="mt-3 leading-relaxed">
          The Nilgiri Mountain Railway (NMR) is not just a ride; it's a step back in time. It was commissioned in 1908 and is celebrated for its unique **rack-and-pinion system**—a specialized gear that helps the train climb the steep gradients of the Nilgiri Hills.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">The Journey Highlights:</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Steam Power:** The primary section (Mettupalayam to Coonoor) is hauled by a century-old steam locomotive.</li>
          <li>**Route:** The 46-km line passes through 250 bridges and 16 tunnels.</li>
          <li>**Gradient:** It has the steepest track in Asia, with a gradient of 1 in 12.5.</li>
          <li>**Scenery:** Winding through tea plantations, dense Shola forests, and deep valleys, offering spectacular views.</li>
        </ul>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- Section 2: Toy Train Timings and Route Details --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">2. Toy Train Timings, Route, and Duration</h2>
        <p className="mt-3 leading-relaxed">
          The full journey from Mettupalayam to Ooty is the most scenic, taking approximately **4.5 to 5 hours**. Short segments are also available for tourists in Ooty who miss the main ride.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">Primary NMR Schedule (Mettupalayam to Ooty)</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival Time (Approx.)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Mettupalayam (MTP) → Ooty (UAM)</td>
                <td className="px-6 py-4 whitespace-nowrap">07:10 AM</td>
                <td className="px-6 py-4 whitespace-nowrap">12:00 PM</td>
                <td className="px-6 py-4 whitespace-nowrap">4 hours 50 min</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Ooty (UAM) → Mettupalayam (MTP)</td>
                <td className="px-6 py-4 whitespace-nowrap">02:00 PM</td>
                <td className="px-6 py-4 whitespace-nowrap">05:35 PM</td>
                <td className="px-6 py-4 whitespace-nowrap">3 hours 35 min</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-3 text-sm text-red-600 font-medium">
          **Important Note:** These are typical times for the primary service (Train 56136/56137). Always verify the latest schedule on the IRCTC website using the station codes (MTP, UAM, ONR).
        </p>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">Short, Scenic Rides (Coonoor to Ooty)</h3>
        <p className="mt-2">
          For a shorter experience, diesel-hauled rides run several times a day between Coonoor (ONR) and Ooty (UAM). These are easier to book and still offer beautiful tea estate views.
        </p>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- Section 3: Ticket Booking and Classes --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">3. Ticket Booking Tips and Fare Classes</h2>
        <p className="mt-3 leading-relaxed">
          Tickets are scarce, especially for the steam-hauled ascent. Treat booking like a reservation for an exclusive event.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">Reservation Strategy: The 120-Day Rule</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Advance Booking:** Tickets open **120 days** before the travel date (excluding the date of journey) on the IRCTC website.</li>
          <li>**Timing:** Be logged in and ready to book precisely at **8:00 AM IST** on the opening day for the best chance of securing a seat.</li>
          <li>**Booking Platform:** Use only the official Indian Railway Catering and Tourism Corporation (**IRCTC**) website or mobile app.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">Classes and Price Range</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approx. Fare (MTP→UAM)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">First Class (FC)</td>
                <td className="px-6 py-4 whitespace-nowrap">Padded seats, large windows, fewer people. **Best photo experience.**</td>
                <td className="px-6 py-4 whitespace-nowrap">₹500 - ₹700</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Second Class (2S)</td>
                <td className="px-6 py-4 whitespace-nowrap">Bench seating, functional windows, crowded.</td>
                <td className="px-6 py-4 whitespace-nowrap">₹150 - ₹250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- Section 4: Travel Tips and Best Views --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">4. Best Time to Ride & In-Train Travel Tips</h2>
        
        <h3 className="text-xl font-semibold mt-4 text-blue-600">Best Season to Visit</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Peak Season (Oct–Mar):** Clear skies, pleasant weather, and sharp visibility—ideal for photographers.</li>
          <li>**Monsoon (Jun–Sep):** Foggy, wet, and incredibly lush. The hills are cloaked in green and mist, providing a moody, romantic atmosphere.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">The Ultimate Photo Tip: Seat Choice</h3>
        <p className="mt-2">
          As the train climbs from Mettupalayam, the **right side** of the train offers superior views of the deep valley, dramatic bridges, and tunnels carved into the hillside.
        </p>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="ooty-faq">
        <h2 className="text-3xl font-bold text-blue-700">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-blue-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — Wander Guides. Travel safely and enjoy the rack-and-pinion journey!
      </footer>
    </main>
  );
}
