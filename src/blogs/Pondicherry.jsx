import React, { useEffect } from "react";

export default function Pondicherry() {

  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/pondicherry-travel-guide" // **UPDATE with actual URL**
        },
        headline: "Pondicherry: A Definitive Guide to the French Quarters, Auroville & Coastal Charm",
        image: ["https://example.com/images/pondicherry-white-town.jpg", "https://example.com/images/auroville-matrimandir.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Coastal Travel Stories Team" // **UPDATE with actual author**
        },
        publisher: {
          "@type": "Organization",
          name: "Coastal Travel Stories",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "Discover Pondicherry’s French architecture, serene beaches, cozy cafés, Auroville, and perfect walking routes through the White Town. This guide covers best seasons, transportation, must-try French and Tamil cuisine, and cultural etiquette."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "South India", "item": "https://example.com/south-india" },
          { "@type": "ListItem", "position": 3, "name": "Pondicherry Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How many days are needed to explore Pondicherry?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A comfortable trip requires **3 days**. This allows one full day for the White Town and Rock Beach, one day for Auroville, and one day for the beaches and local markets."
            }
          },
          {
            "@type": "Question",
            name: "Is it mandatory to stay in Auroville to visit Matrimandir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, you can visit the Matrimandir viewpoint without staying in Auroville. However, to enter the Inner Chamber for meditation, you must register at least two days in advance."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Pondicherry: A Definitive Guide to the French Quarters, Auroville & Coastal Charm";

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

    const descriptionContent = "Discover Pondicherry’s French architecture, serene beaches, cozy cafés, Auroville, and perfect walking routes through the White Town. This guide covers best seasons, transportation, must-try French and Tamil cuisine, and cultural etiquette.";
    const titleContent = "Pondicherry: French Quarters, Auroville & Coastal Charm Guide";
    const imageUrl = "https://example.com/images/pondicherry-white-town.jpg"; // **UPDATE URL**

    // 2. General SEO Meta Tag
    setOrCreate("description", descriptionContent);
    
    // 3. Open Graph Tags (for Social Media)
    setOrCreate('og:title', titleContent, 'property');
    setOrCreate('og:description', descriptionContent, 'property');
    setOrCreate('og:type', 'article', 'property');
    setOrCreate('og:url', window.location.href, 'property');
    setOrCreate('og:image', imageUrl, 'property');
    setOrCreate('og:site_name', 'Coastal Travel Stories', 'property');

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
    let jsonScript = document.getElementById("pondicherry-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "pondicherry-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);

  const faqItems = [
    { 
      q: "How many days are needed to explore Pondicherry?", 
      a: "A comfortable trip requires **3 days**. This allows one full day for the White Town and Rock Beach, one day for Auroville, and one day for the beaches and local markets." 
    },
    { 
      q: "Is it mandatory to stay in Auroville to visit Matrimandir?", 
      a: "No, you can visit the Matrimandir viewpoint without staying in Auroville. However, to enter the Inner Chamber for meditation, you must register at least two days in advance." 
    },
    {
      q: "What is the best way to get around Pondicherry?",
      a: "The most popular way to explore the area is by **renting a bicycle** (ideal for the White Town) or a **scooty/moped** (ideal for traveling to Auroville and the beaches outside the city center)."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-red-700">
          Pondicherry: A Slice of France in India 🇫🇷🇮🇳
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          A calm, colorful, and culturally rich guide to Pondicherry’s colonial charm,
          beaches, food trails, and peaceful neighborhoods.
        </p>
      </header>

      {/* --- Section 1: Cultural Overview --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-red-600">1. Why Pondicherry Feels Different: French Heritage</h2>
        <p className="mt-3 leading-relaxed">
          Pondicherry (officially Puducherry) was a French colony until 1954, and its legacy is beautifully preserved. The city is distinctly divided into the **French Quarter (White Town)** and the **Tamil Quarter**.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-red-500">The White Town Mood</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Architecture:** Iconic mustard yellow and white colonial buildings, wide avenues named after French figures (e.g., Rue Dumas).</li>
          <li>**Atmosphere:** A mood that is slow, calm, and artistic, perfect for cycling or leisurely walks.</li>
          <li>**Cuisine:** Authentic French bakeries and cafés sit next to traditional South Indian eateries.</li>
        </ul>
      </section>

      <hr className="my-8 border-red-200" />

      {/* --- Section 2: Best Places to Explore --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-red-600">2. Must-Visit Destinations and Walking Routes</h2>
        <p className="mt-3 leading-relaxed">
          The city is best experienced on foot or two wheels. Divide your sightseeing between the coastal city center and the outskirts.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-red-500">City Center Highlights</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Rock Beach / Promenade:** Best for sunrise walks; no vehicles are allowed in the evenings, creating a vibrant pedestrian zone.</li>
          <li>**Aurobindo Ashram:** The spiritual heart of the city, founded by Sri Aurobindo and The Mother. Maintain silence near the Samadhi.</li>
          <li>**Basilica of the Sacred Heart of Jesus:** Stunning Gothic architecture and stained glass—a must-see even if you are not religious.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 text-red-500">Outskirt Exploration</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Auroville (The City of Dawn):** The experimental township. Visit the **Matrimandir** viewpoint, the Peace Area, and the numerous eco-friendly cafés.</li>
          <li>**Paradise Beach:** Accessible via a short boat ride from Chunnambar Boat House, known for its pristine sands and tranquil setting.</li>
          <li>**Serenity Beach:** Located north of the city, famous for surfing and beautiful sunrises.</li>
        </ul>
      </section>

      <hr className="my-8 border-red-200" />

      {/* --- Section 3: Food and Activities --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-red-600">3. Food Trails and Activities</h2>

        <h3 className="text-xl font-semibold mt-4 text-red-500">What to Eat (A French-Tamil Fusion)</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cuisine</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Must-Try Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Spot</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">French Bakery</td>
                <td className="px-6 py-4 whitespace-nowrap">Croissants, Baguettes, Quiches, éclairs.</td>
                <td className="px-6 py-4 whitespace-nowrap">Baker Street or Zuka (for chocolates).</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Coastal Fusion</td>
                <td className="px-6 py-4 whitespace-nowrap">Seafood specials, Continental dishes, Pizzas.</td>
                <td className="px-6 py-4 whitespace-nowrap">Le Café (on the Promenade) or local beachside shacks.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Tamilian</td>
                <td className="px-6 py-4 whitespace-nowrap">Authentic South Indian Thalis, Idli, Dosa.</td>
                <td className="px-6 py-4 whitespace-nowrap">Hotel Saravana Bhavan (or any local mess).</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-4 text-red-500">Activities & Experiences</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Bicycle Tours:** Rent a bike early in the morning for the perfect White Town experience.</li>
          <li>**Water Sports:** Kayaking, jet-skiing, and boat rides are available near Paradise Beach.</li>
          <li>**Wellness:** Enroll in a yoga, meditation, or pottery workshop, especially around the Auroville area.</li>
        </ul>
      </section>

      <hr className="my-8 border-red-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="pondicherry-faq">
        <h2 className="text-3xl font-bold text-red-600">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-red-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr className="my-8 border-red-200" />

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — Coastal Travel Stories. Travel safely and enjoy the French vibes!
      </footer>
    </main>
  );
}
