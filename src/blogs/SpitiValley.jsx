import React, { useEffect } from 'react';

export default function SpitiValley() {
  
  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/spiti-valley-travel-guide" // **UPDATE with actual URL**
        },
        headline: "Spiti Valley: The Definitive Guide to India's Middle Land—Routes, AMS Safety, and Villages",
        image: ["https://example.com/images/spiti-ki-monastery.jpg", "https://example.com/images/spiti-hikkim-postoffice.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Travel Notes Team" // **UPDATE with actual author**
        },
        publisher: {
          "@type": "Organization",
          name: "Travel Notes",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "The definitive guide to Spiti Valley, India's remote Middle Land. Covers best time to visit (June-September), essential dual-route planning (Manali or Shimla), critical altitude sickness (AMS) safety tips, and guide to key monasteries and homestays."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "Himalayan Travel", "item": "https://example.com/himalayan-travel" },
          { "@type": "ListItem", "position": 3, "name": "Spiti Valley Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best route to enter Spiti Valley to avoid AMS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The **Shimla-Kaza route** is highly recommended for better acclimatization. It features a slower, gradual ascent, minimizing the risk of Acute Mountain Sickness (AMS) compared to the sudden high altitude gain via the Manali-Leh route."
            }
          },
          {
            "@type": "Question",
            name: "Can I visit Spiti Valley in winter (November - April)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Travel in winter is possible but highly challenging, requiring experienced drivers and 4x4 vehicles. The Manali road is closed, and only the Shimla route remains partially open, often requiring local permits and dealing with heavy snow."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Spiti Valley: The Definitive Guide to India's Middle Land—Routes, AMS Safety, and Villages";

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

    const descriptionContent = "The definitive guide to Spiti Valley, India's remote Middle Land. Covers best time to visit (June-September), essential dual-route planning (Manali or Shimla), critical altitude sickness (AMS) safety tips, and guide to key monasteries and homestays.";
    const titleContent = "Spiti Valley: Routes, AMS Safety, Villages & Monastery Guide";
    const imageUrl = "https://example.com/images/spiti-ki-monastery.jpg"; // **UPDATE URL**

    // 2. General SEO Meta Tag
    setOrCreate("description", descriptionContent);
    
    // 3. Open Graph Tags (for Social Media)
    setOrCreate('og:title', titleContent, 'property');
    setOrCreate('og:description', descriptionContent, 'property');
    setOrCreate('og:type', 'article', 'property');
    setOrCreate('og:url', window.location.href, 'property');
    setOrCreate('og:image', imageUrl, 'property');
    setOrCreate('og:site_name', 'Travel Notes', 'property');

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
    let jsonScript = document.getElementById("spiti-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "spiti-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);

  const faqItems = [
    { 
      q: "Which is the best route to enter Spiti Valley to avoid AMS?", 
      a: "The **Shimla-Kaza route** is highly recommended for better acclimatization. It features a slower, gradual ascent, minimizing the risk of Acute Mountain Sickness (AMS) compared to the sudden high altitude gain via the Manali-Leh route." 
    },
    { 
      q: "Can I visit Spiti Valley in winter (November - April)?", 
      a: "Travel in winter is possible but highly challenging, requiring experienced drivers and 4x4 vehicles. The Manali road is closed, and only the Shimla route remains partially open, often requiring local permits and dealing with heavy snow." 
    },
    {
      q: "What is the typical altitude of Spiti Valley villages?",
      a: "Most major villages like Kaza are around **12,500 feet (3,800 meters)**. Key attractions like Komik and Langza reach up to **14,500 feet (4,400 meters)**."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-blue-800">
          Spiti Valley: India's Middle Land—Routes, AMS Safety, & Villages 🏔️
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          A definitive guide to remote high-altitude life, ancient Buddhist culture, and how to travel safely and responsibly in Spiti, Himachal Pradesh.
        </p>
      </header>

      {/* --- Section 1: Overview and Best Time --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">1. Overview and Best Season to Visit</h2>
        <p className="mt-3 leading-relaxed">
          Spiti, meaning 'The Middle Land,' is a high-altitude cold desert nestled between India and Tibet. It's defined by its rugged landscapes, ancient Buddhist monasteries, and the resilient culture of its people.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">Best Time for Road Travel (The Circuit)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Ideal Season:** **Mid-June to Mid-October**. This is the only period when the entire Spiti circuit is open (both Manali and Shimla routes).</li>
          <li>**Shoulder Season:** May and Late October. Only the Shimla route may be open, and high passes might have limited access.</li>
          <li>**Winter:** Not recommended for inexperienced travelers; roads are hazardous and facilities are minimal.</li>
        </ul>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- Section 2: Route Planning and AMS Safety (Critical) --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">2. Route Planning and Critical AMS Safety</h2>
        <p className="mt-3 leading-relaxed">
          There are two main routes, but choosing the right entry point is crucial for avoiding Acute Mountain Sickness (AMS).
        </p>
        
        <h3 className="text-xl font-semibold mt-4 text-red-600">The Dual Route Comparison (Acclimatization is Key)</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acclimatization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Shimla → Kaza</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-700 font-bold">Excellent (Gradual ascent)</td>
                <td className="px-6 py-4 whitespace-nowrap">Narkanda, Reckong Peo, Nako.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Manali → Kaza</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-700 font-bold">Poor (Rapid high gain)</td>
                <td className="px-6 py-4 whitespace-nowrap">Rohtang Pass, Kunzum Pass (15,060 ft).</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-4 text-red-600">Essential AMS Safety Protocol</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Ascend Slowly:** Follow the Shimla route and spend nights in Reckong Peo (9,000 ft) and Nako (12,000 ft) before reaching Kaza.</li>
          <li>**Hydration:** Drink 3-4 liters of water daily. Avoid alcohol, smoking, and excessive exertion.</li>
          <li>**Medication:** Carry Diamox (after consulting a doctor) and an emergency oxygen canister.</li>
        </ul>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- Section 3: Key Villages and Monasteries --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">3. Spiritual Heart: Monasteries and High Villages</h2>
        <p className="mt-3 leading-relaxed">
          The heart of Spitian culture lies in its ancient gompas (monasteries) and remote villages, which boast high-altitude status and breathtaking views.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">Must-Visit Monasteries</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Key Monastery (Ki Gompa):** The largest and most famous monastery, situated dramatically on a hilltop. A key center for Buddhist learning.</li>
          <li>**Tabo Monastery:** Over 1,000 years old, famous for its incredible frescoes and murals. Known as the 'Ajanta of the Himalayas.'</li>
          <li>**Lhalung Monastery:** Known for its 'Golden Temple' and stunning location in the Lingti Valley.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 text-blue-600">The Highest Habitable Spots</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Hikkim (14,400 ft):** Home to the highest post office in the world. (Don't forget to send a postcard!)</li>
          <li>**Komik (14,830 ft):** Claimed to be one of the highest villages in Asia connected by a motorable road.</li>
          <li>**Langza (14,500 ft):** Famous for its large Golden Buddha statue overlooking the valley and its abundance of marine fossils.</li>
        </ul>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- Section 4: Responsible Travel --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-blue-700">4. Responsible Travel Tips</h2>

        <h3 className="text-xl font-semibold mt-4 text-blue-600">Culture and Environment</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Homestays:** Stay in homestays to support the local economy directly. This provides a genuine cultural experience and includes meals.</li>
          <li>**Water Conservation:** Water is extremely scarce in the cold desert. Be mindful of usage in guesthouses.</li>
          <li>**Plastics:** Carry your own water bottle and minimize plastic usage. Carry all non-biodegradable waste out of the valley.</li>
          <li>**Customs:** Always seek permission before photographing locals or entering prayer rooms. Walk clockwise around monasteries and stupas.</li>
        </ul>
      </section>

      <hr className="my-8 border-blue-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="spiti-faq">
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
        © {new Date().getFullYear()} — Travel Notes. Respect the mountain, enjoy the silence.
      </footer>
    </main>
  );
}