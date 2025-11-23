import React, { useEffect } from "react";

export default function MeghalayaWalking() {

  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/meghalaya-root-bridges" // **UPDATE with actual URL**
        },
        headline: "Meghalaya: The Definitive Guide to Trekking the Living Root Bridges",
        image: ["https://example.com/images/double-decker-bridge.jpg", "https://example.com/images/meghalaya-trek.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", // Use dynamic date or fixed publication date
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "India Travel Insights Team" // **UPDATE with actual author**
        },
        publisher: {
          "@type": "Organization",
          name: "India Travel Insights",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "Explore Meghalaya's iconic Living Root Bridges—trekking routes, difficulty level, essential tips for visiting the Double-Decker Bridge in Nongriat, best time to visit the wettest place on Earth, and eco-friendly travel guidance."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "India Destinations", "item": "https://example.com/india" },
          { "@type": "ListItem", "position": 3, "name": "Meghalaya Root Bridges Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How difficult is the trek to the Double-Decker Root Bridge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The trek to the Double-Decker Root Bridge (Jingkieng Nongriat) is of **moderate difficulty**. It involves descending (and later ascending) approximately 3,500 steps. It takes 3-4 hours round trip, plus time spent at the bridge."
            }
          },
          {
            "@type": "Question",
            name: "What is the best time to visit the Living Root Bridges?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best time to visit is during the **winter season (October to March)**. The weather is cool and the humidity and rainfall are significantly lower than in the summer monsoon months."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Meghalaya: The Definitive Guide to Trekking the Living Root Bridges";

    // Helper function to create or update meta tags
    const setOrCreate = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${n}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const descriptionContent = "Explore Meghalaya's iconic Living Root Bridges—trekking routes, difficulty level, essential tips for visiting the Double-Decker Bridge in Nongriat, best time to visit the wettest place on Earth, and eco-friendly travel guidance.";
    const titleContent = "Meghalaya: Trekking the Living Root Bridges | Travel Guide";
    const imageUrl = "https://example.com/images/double-decker-bridge.jpg"; // **UPDATE URL**

    // 2. General SEO Meta Tag
    setOrCreate("description", descriptionContent);
    
    // 3. Open Graph Tags (for Social Media)
    setOrCreate('og:title', titleContent, 'property');
    setOrCreate('og:description', descriptionContent, 'property');
    setOrCreate('og:type', 'article', 'property');
    setOrCreate('og:url', window.location.href, 'property');
    setOrCreate('og:image', imageUrl, 'property');
    setOrCreate('og:site_name', 'India Travel Insights', 'property');

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
    let jsonScript = document.getElementById("meghalaya-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "meghalaya-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);

  const faqItems = [
    { 
      q: "How difficult is the trek to the Double-Decker Root Bridge?", 
      a: "The trek to the Double-Decker Root Bridge (Jingkieng Nongriat) is of **moderate difficulty**. It involves descending (and later ascending) approximately 3,500 slippery steps. Allow 3-4 hours round trip, plus time at the bridge." 
    },
    { 
      q: "What is the best time to visit the Living Root Bridges?", 
      a: "The best time to visit is during the **winter season (October to March)**. The weather is cool and the humidity and rainfall are significantly lower, making the treks safer and more enjoyable." 
    },
    {
      q: "How old are the Living Root Bridges?",
      a: "The oldest and strongest root bridges are estimated to be over **200 years old**. They take 10 to 15 years to fully form, and the Khasi tribe guides their growth using betel nut trunks."
    },
  ];


  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-green-800">
          Meghalaya: Walking on Living Root Bridges 🌱
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          A serene journey into Meghalaya’s rain-soaked valleys and natural root
          architecture built by the Khasi tribes—the ultimate guide to trekking this natural wonder.
        </p>
      </header>

      {/* --- Section 1: The Magic and Science --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-green-700">1. The Magic and Architecture of the Bridges</h2>
        <p className="mt-3 leading-relaxed">
          These incredible bridges—**grown, not built**—are a testament to the symbiotic relationship between the **Khasi tribe** and the forest. They are crafted by guiding the flexible aerial roots of the **Rubber Fig tree** (Ficus elastica) across streams.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-green-600">Why They Last Centuries</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Self-Strengthening:** Unlike wooden bridges that rot in the high moisture of Cherrapunji, these living structures grow stronger and thicker over time.</li>
          <li>**Guidance System:** Young roots are directed using hollowed-out **betel nut trunks** to guide them to the other side of the stream.</li>
          <li>**Age:** Some bridges are more than **200 years old** and still used daily, easily capable of holding 50+ people.</li>
        </ul>
      </section>

      <hr className="my-8 border-green-200" />

      {/* --- Section 2: Key Destinations & Treks --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-green-700">2. Key Trekking Destinations and Difficulty</h2>
        <p className="mt-3 leading-relaxed">
          The best root bridges require commitment. Most are located near Cherrapunji (Sohra) and Mawlynnong.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-green-600">The Double-Decker Challenge (Nongriat)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Location:** Nongriat Village (near Cherrapunji).</li>
          <li>**Trek Difficulty:** **Moderate to Hard.** Involves a steep descent of approximately 3,500 steps, followed by the equally tough ascent.</li>
          <li>**Duration:** 3–6 hours round trip.</li>
          <li>**Reward:** The spectacular **Jingkieng Nongriat**, the only functional double-decker root bridge in the world.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-green-600">Easier and Accessible Bridges</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Riwai Single Root Bridge:** Very close to Mawlynnong (Asia's Cleanest Village). Requires only a 5-minute easy walk from the road.</li>
          <li>**Mawsaw Root Bridge:** Another single bridge, easily accessible and often less crowded than the double-decker bridge.</li>
        </ul>
      </section>

      <hr className="my-8 border-green-200" />

      {/* --- Section 3: Essential Trekking Tips --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-green-700">3. Trekking Tips and Eco-Friendly Travel</h2>
        <p className="mt-3 leading-relaxed">
          Meghalaya is the wettest region on Earth. Preparation is key to enjoying the trek and respecting the environment.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 text-green-600">Gear & Preparation Checklist</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Footwear:** Wear durable trekking shoes with excellent grip. The steps and rocks are perpetually damp and extremely slippery.</li>
          <li>**Timing:** Start the trek to Nongriat early (by 8:00 AM) to avoid the intense afternoon sun and tourist crowds.</li>
          <li>**Essentials:** Carry a lightweight rain poncho/jacket, a waterproof bag cover, and a headlamp (if starting before sunrise).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-green-600">Responsible Tourism Guide 🌿</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Waste:** Carry all plastic, wrappers, and non-biodegradable waste back with you. Meghalaya takes environmental cleanliness seriously.</li>
          <li>**Respect:** Be mindful of the Khasi village life. Ask for permission before photographing locals or entering private areas.</li>
          <li>**Foot Traffic:** Do not peel, cut, or interfere with the bridge roots in any way; these structures are alive and require care.</li>
        </ul>
      </section>

      <hr className="my-8 border-green-200" />

      {/* --- FAQ Section (Matches JSON-LD) --- */}
      <section className="mt-12" id="meghalaya-faq">
        <h2 className="text-3xl font-bold text-green-700">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-green-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr className="my-8 border-green-200" />

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — India Travel Insights. All rights reserved.
      </footer>
    </main>
  );
}
