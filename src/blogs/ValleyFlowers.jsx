import React, { useEffect } from "react";

export default function ValleyFlowers() {
  
  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/valley-of-flowers-trek-guide" // **UPDATE with actual URL**
        },
        headline: "Valley of Flowers Trek: Complete Monsoon Guide, Permits, Route, and Safety Tips",
        image: ["https://example.com/images/valley-of-flowers-bloom.jpg", "https://example.com/images/valley-of-flowers-ghangaria.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Himalayan Trek Guides" // **UPDATE with actual author**
        },
        publisher: {
          "@type": "Organization",
          name: "Himalayan Trek Guides",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "A complete monsoon trekking guide to the UNESCO-listed Valley of Flowers National Park in Uttarakhand—best time, permits, 3-day route details (Govindghat to Ghangaria), altitude, and essential safety tips for Himalayan travellers."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "India Treks", "item": "https://example.com/india-treks" },
          { "@type": "ListItem", "position": 3, "name": "Valley of Flowers Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "When is the Valley of Flowers open for trekking?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Valley of Flowers National Park is typically open for visitors from **June 1st to October 31st**. The best time for peak bloom is mid-July to mid-August, coinciding with the monsoon season."
            }
          },
          {
            "@type": "Question",
            name: "How many days are required for the Valley of Flowers trek?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A minimum of **3 days** is needed: Day 1 (Govindghat to Ghangaria), Day 2 (Ghangaria to Valley of Flowers and back), Day 3 (Ghangaria to Govindghat). Adding a day for Hemkund Sahib is common."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Valley of Flowers Trek: Complete Monsoon Guide, Permits, Route, and Safety Tips";

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

    const descriptionContent = "A complete monsoon trekking guide to the UNESCO-listed Valley of Flowers National Park in Uttarakhand—best time, permits, 3-day route details (Govindghat to Ghangaria), altitude, and essential safety tips for Himalayan travellers.";
    const titleContent = "Valley of Flowers Trek: Monsoon Guide, Route, Permits, and Tips";
    const imageUrl = "https://example.com/images/valley-of-flowers-bloom.jpg"; // **UPDATE URL**

    // 2. General SEO Meta Tag
    setOrCreate("description", descriptionContent);
    
    // 3. Open Graph Tags (for Social Media)
    setOrCreate('og:title', titleContent, 'property');
    setOrCreate('og:description', descriptionContent, 'property');
    setOrCreate('og:type', 'article', 'property');
    setOrCreate('og:url', window.location.href, 'property');
    setOrCreate('og:image', imageUrl, 'property');
    setOrCreate('og:site_name', 'Himalayan Trek Guides', 'property');

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
    let jsonScript = document.getElementById("valley-flowers-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "valley-flowers-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);

  const faqItems = [
    { 
      q: "When is the Valley of Flowers open for trekking?", 
      a: "The Valley of Flowers National Park is typically open for visitors from **June 1st to October 31st**. The best time for peak bloom is mid-July to mid-August, coinciding with the monsoon season." 
    },
    { 
      q: "How many days are required for the Valley of Flowers trek?", 
      a: "A minimum of **3 days** is needed: Day 1 (Govindghat to Ghangaria), Day 2 (Ghangaria to Valley of Flowers and back), Day 3 (Ghangaria to Govindghat). Adding a day for Hemkund Sahib is common." 
    },
    {
      q: "Is there accommodation inside the Valley of Flowers?",
      a: "No. Staying inside the National Park is strictly prohibited. All accommodation (hotels, guesthouses, and Gurudwara facilities) is located in the base camp village of **Ghangaria**."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          Valley of Flowers: Trekking in Monsoon (UNESCO Site) 🌸
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Discover one of India’s most magical monsoon treks—carpets of alpine
          flowers, misty mountains, and the serene Himalayan landscapes of Uttarakhand.
        </p>
      </header>

      {/* --- Section 1: Peak Bloom and Season --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-600">1. Why Visit During the Monsoon (Peak Bloom)</h2>
        <p className="mt-3 leading-relaxed">
          The Valley of Flowers is a UNESCO World Heritage Site known for its endemic alpine flora. Unlike most Himalayan treks, the **monsoon (July to September)** is the prime season here.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-indigo-500">The Blooming Schedule</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Early June:** The valley opens; snow is melting. Less flowers, but views are crisp.</li>
          <li>**Mid-July to Mid-August:** **Peak Blooming Season.** Thousands of flower species, including the Blue Poppy and Brahma Kamal, transform the valley into a colourful canvas.</li>
          <li>**September:** The flowers begin to fade, but the weather is clearer, offering spectacular views of the surrounding peaks.</li>
        </ul>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 2: Trek Route and Logistics --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-600">2. Trek Details, Route, and Altitude</h2>
        <p className="mt-3 leading-relaxed">
          The trek is generally considered moderate and is spread across three distinct stages over three days.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-indigo-500">The 3-Day Trekking Plan</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route Segment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance/Altitude</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Day 1 (Base)</td>
                <td className="px-6 py-4 whitespace-nowrap">Govindghat (Road Head) to Ghangaria (Base Camp)</td>
                <td className="px-6 py-4 whitespace-nowrap">13 km | 10,000 ft</td>
                <td className="px-6 py-4">Steep ascent on a paved path. Stay overnight.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Day 2 (Valley)</td>
                <td className="px-6 py-4 whitespace-nowrap">Ghangaria to Valley of Flowers (Entry Gate)</td>
                <td className="px-6 py-4 whitespace-nowrap">4 km | 11,500 ft</td>
                <td className="px-6 py-4">Gentle trek to the valley; max 4 hours inside the park.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Day 3 (Return)</td>
                <td className="px-6 py-4 whitespace-nowrap">Ghangaria back to Govindghat</td>
                <td className="px-6 py-4 whitespace-nowrap">13 km | Descent</td>
                <td className="px-6 py-4">Easy descent.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-800">
          **Altitude Warning:** The trek starts at 6,000 ft and climbs to over 11,500 ft. Spend a night acclimatizing in Joshimath or Govindghat before starting the main trek to prevent AMS.
        </p>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 3: Permits, Safety, and Packing --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-600">3. Permits, Safety, and Monsoon Packing</h2>

        <h3 className="text-xl font-semibold mt-4 text-indigo-500">Permit and Entry Rules</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Where to Get:** Permits are issued by the Forest Department at the entry gate in **Govindghat**.</li>
          <li>**Fees:** Small daily fee (higher for foreigners). The permit is valid for **3 days**.</li>
          <li>**Time Restriction:** Entry is only allowed between 7:00 AM and 12:00 PM. You must leave the valley by 5:00 PM.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 text-indigo-500">Essential Monsoon Packing List</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Waterproof Gear:** High-quality rain jacket and pants, and a rainproof backpack cover.</li>
          <li>**Footwear:** Waterproof trekking shoes with excellent grip (the path is slippery). **Trekking poles are highly recommended.**</li>
          <li>**Warmth:** Thermal layers and wool socks, as temperatures drop sharply when it rains or gets misty.</li>
          <li>**Health:** Basic first aid kit, anti-diarrhea medication, and AMS medication (after consulting a doctor).</li>
        </ul>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="valley-flowers-faq">
        <h2 className="text-3xl font-bold text-indigo-600">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-indigo-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — Himalayan Trek Guides. Tread lightly and respect the fragile ecosystem!
      </footer>
    </main>
  );
}
