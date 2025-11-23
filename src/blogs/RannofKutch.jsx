import React, { useEffect } from "react";

export default function RannofKutch() {
  
  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/rann-of-kutch-festival-guide" // **UPDATE with actual URL**
        },
        headline: "Rann of Kutch: The Definitive Guide to the White Desert Festival (Rann Utsav)",
        image: ["https://example.com/images/kutch-white-desert-full-moon.jpg", "https://example.com/images/kutch-rann-utsav-tents.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
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
        description: "A complete guide to the Rann of Kutch White Desert Festival (Rann Utsav)—best time to visit, details on the Dhordo Tent City, activities, required permits, and essential travel tips for Gujarat's spectacular salt marsh."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "Gujarat Travel", "item": "https://example.com/gujarat-travel" },
          { "@type": "ListItem", "position": 3, "name": "Rann of Kutch Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best time to visit the Rann of Kutch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The ideal time to visit is during the Rann Utsav (November to February). Visiting during a **full moon night** is highly recommended for the most spectacular view of the salt desert glowing under the moonlight."
            }
          },
          {
            "@type": "Question",
            name: "Is a permit required to visit the White Rann?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, a permit is mandatory to enter the White Rann area, as it is close to the international border. Permits can be obtained online or at the Bhirandiyara checkpoint en route to Dhordo."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Rann of Kutch: The Definitive Guide to the White Desert Festival (Rann Utsav)";

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

    const descriptionContent = "A complete guide to the Rann of Kutch White Desert Festival (Rann Utsav)—best time to visit, details on the Dhordo Tent City, activities, required permits, and essential travel tips for Gujarat's spectacular salt marsh.";
    const titleContent = "Rann of Kutch: White Desert Festival (Rann Utsav) Guide";
    const imageUrl = "https://example.com/images/kutch-white-desert-full-moon.jpg"; // **UPDATE URL**

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
    let jsonScript = document.getElementById("rannofkutch-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "rannofkutch-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);

  const faqItems = [
    { 
      q: "What is the best time to visit the Rann of Kutch?", 
      a: "The ideal time is during the Rann Utsav (November to February). Visiting during a **full moon night** is highly recommended for the most spectacular view of the salt desert glowing under the moonlight." 
    },
    { 
      q: "Is a permit required to visit the White Rann?", 
      a: "Yes, a permit is mandatory to enter the White Rann area, as it is close to the international border. Permits can be obtained online or at the Bhirandiyara checkpoint en route to Dhordo. Carry valid photo ID." 
    },
    {
      q: "Where is the best place to stay during the Rann Utsav?",
      a: "Most visitors choose to stay at the organized **Tent City in Dhordo**, which provides luxury camping, food, and organized tours. Alternatively, Bhuj offers more traditional hotel and homestay options."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-orange-700">
          Rann of Kutch: The White Desert Festival (Rann Utsav) Guide 🧂🏕️
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Discover Gujarat’s iconic salt desert, the **Rann Utsav**, its mesmerizing landscape, cultural
          performances, tent stays, and travel essentials for an unforgettable experience.
        </p>
      </header>

      {/* --- Section 1: The Rann Utsav Experience --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-orange-600">1. Why Visit the White Desert Festival?</h2>
        <p className="mt-3 leading-relaxed">
          The Rann of Kutch is the world's largest salt marsh, transforming from a vast, submerged lake during the monsoon to an endless, **blindingly white salt desert** during winter. The **Rann Utsav** is a three-month-long festival that capitalizes on this unique landscape to showcase Gujarat's vibrant culture, turning the area into a massive celebration. 
        </p>

        <h3 className="text-xl font-semibold mt-4 text-orange-500">Key Festival Highlights:</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Cultural Extravaganza:** Daily performances of traditional Kutchi music, dance (Garba, Dandiya), and folk theatre.</li>
          <li>**Handicrafts:** Shopping for exquisite Kutchi embroidery, silver jewelry, and leather goods made by local artisans.</li>
          <li>**Adventure:** Organized camel safaris, ATV rides, and hot air balloon rides over the white expanse.</li>
        </ul>
      </section>

      <hr className="my-8 border-orange-200" />

      {/* --- Section 2: Best Time, Moon, and Weather --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-orange-600">2. Best Time, Full Moon Views, and Weather</h2>
        
        <h3 className="text-xl font-semibold mt-4 text-orange-500">The Golden Window: November to February</h3>
        <p className="mt-2">
          The festival typically runs from **early November to late February**. During this period, the desert is completely dry and the weather is ideal for travel.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-orange-500">Full Moon Magic (Must-See!)</h3>
        <p className="mt-2">
          The most breathtaking experience is visiting the White Rann on a **full moon night**. The moonlight reflects off the salt crystals, making the desert appear to glow with a surreal, ethereal light. Plan your travel dates around the lunar calendar for this unmissable view.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 text-orange-500">Kutch Weather Snapshot</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time of Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature Range</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Packing Note</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Daytime</td>
                <td className="px-6 py-4 whitespace-nowrap">25°C to 30°C</td>
                <td className="px-6 py-4 whitespace-nowrap">Light cotton clothes, hat, sunglasses.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Nighttime</td>
                <td className="px-6 py-4 whitespace-nowrap">5°C to 15°C (Drops sharply)</td>
                <td className="px-6 py-4 whitespace-nowrap">**Heavy woollens, jackets, warm socks are essential.**</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-orange-200" />

      {/* --- Section 3: Attractions, Permits, and Stay --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-orange-600">3. Main Attractions, Stay Options, and Permits</h2>
        
        <h3 className="text-xl font-semibold mt-4 text-orange-500">Accommodation: The Tent City</h3>
        <p className="mt-2">
          The official **Tent City (Rann Utsav Tent City)** is located in **Dhordo**, the nearest village to the White Rann. It offers various luxury tent options, complimentary meals, and organized transportation to the festival grounds and local sights. Booking is all-inclusive and must be done well in advance.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-orange-500">Must-See Sightseeing</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Kalo Dungar (Black Hill):** The highest point in Kutch, offering a panoramic view of the Great Rann. Great for sunset photos. </li>
          <li>**India Bridge:** A key checkpoint on the way to the border (requires an additional permit).</li>
          <li>**Bhuj:** The main city and travel hub, featuring historical sites like the Aina Mahal and Prag Mahal Palace.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-red-600">Permit Requirement (Mandatory)</h3>
        <p className="mt-2">
          Since the Rann is geographically close to the Indo-Pakistan border, a **permit is required** for every visitor, even Indian nationals.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Obtainment:** Permits are available online or at the **Bhirandiyara checkpoint** (about 55 km from Bhuj).</li>
          <li>**Required Documents:** Carry a **valid Photo ID** (Aadhar, Passport, Driving License) and photocopies for every member.</li>
        </ul>
      </section>

      <hr className="my-8 border-orange-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="kutch-faq">
        <h2 className="text-3xl font-bold text-orange-600">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-orange-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr className="my-8 border-orange-200" />

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — India Travel Insights. Enjoy the surreal beauty of the White Desert!
      </footer>
    </main>
  );
}