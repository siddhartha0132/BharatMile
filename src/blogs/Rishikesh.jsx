import React, { useEffect } from "react";

export default function Rishikesh() {
  
  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/rishikesh-travel-guide" // **UPDATE with actual URL**
        },
        headline: "Rishikesh: The Definitive Guide to Yoga, Rafting, and Spiritual Peace in the Himalayas",
        image: ["https://example.com/images/rishikesh-ram-jhula.jpg", "https://example.com/images/rishikesh-rafting.jpg"], // **UPDATE with actual image URLS**
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
        description: "Rishikesh travel guide covering certified yoga schools, white-water rafting routes, ashrams, mindful travel tips, and essential safety checks for the best adventure and spiritual retreat."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "Himalayan Destinations", "item": "https://example.com/himalayas" },
          { "@type": "ListItem", "position": 3, "name": "Rishikesh Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best time for white-water rafting in Rishikesh?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The main rafting season runs from **September to June**. The best and safest time is typically from **mid-September to November** and then **March to May**, when water levels are optimal."
            }
          },
          {
            "@type": "Question",
            name: "Is Rishikesh vegetarian only?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the city is officially vegetarian. Many ashrams and local eateries adhere strictly to vegetarian and satvik diets, and alcohol is largely prohibited within the municipal limits."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Rishikesh: The Definitive Guide to Yoga, Rafting, and Spiritual Peace";

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

    const descriptionContent = "Rishikesh travel guide covering certified yoga schools, white-water rafting routes, ashrams, mindful travel tips, and essential safety checks for the best adventure and spiritual retreat.";
    const titleContent = "Rishikesh: Yoga, Rafting, and Spiritual Peace Guide";
    const imageUrl = "https://example.com/images/rishikesh-ram-jhula.jpg"; // **UPDATE URL**

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
    let jsonScript = document.getElementById("rishikesh-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "rishikesh-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);

  const faqItems = [
    { 
      q: "What is the best time for white-water rafting in Rishikesh?", 
      a: "The main rafting season runs from **September to June**. The best and safest time is typically from **mid-September to November** and then **March to May**, when water levels are optimal." 
    },
    { 
      q: "Is Rishikesh vegetarian only?", 
      a: "Yes, the city is officially vegetarian. Many ashrams and local eateries adhere strictly to vegetarian and satvik diets, and alcohol is largely prohibited within the municipal limits." 
    },
    {
      q: "What are the main areas in Rishikesh?",
      a: "The city is centered around three main pedestrian areas: **Ram Jhula** and **Laxman Jhula** (the two suspension bridges) and the neighboring **Tapovan** area, which has the highest density of yoga schools and cafés."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-teal-700">
          Rishikesh: Yoga, Rafting, and Spiritual Peace 🕉️🌊
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          A balanced guide for adventure-seekers and spiritual travellers visiting
          Rishikesh, the **Yoga Capital of the World**, on the banks of the sacred River Ganga.
        </p>
      </header>

      {/* --- Section 1: The Dual Identity --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-teal-600">1. What to Expect: Adventure Meets Spirituality</h2>
        <p className="mt-3 leading-relaxed">
          Rishikesh perfectly balances two travel worlds: the serene, meditative environment of its ashrams and the raw, thrilling adventure provided by the Himalayan foothills and the fast-flowing Ganga River.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-teal-500">Must-Try Experiences</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Morning Kirtans:** Wake up to morning chants and yoga sessions on the river bank.</li>
          <li>**River Runs:** Experience adrenaline-pumping white-water rafting on grades II and III rapids.</li>
          <li>**Sunset Ganga Aarti:** Witness the beautiful evening fire ceremony at Triveni Ghat.</li>
        </ul>
      </section>

      <hr className="my-8 border-teal-200" />

      {/* --- Section 2: Spiritual and Wellness Guide --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-teal-600">2. The Yoga Capital: Retreats and Ashrams</h2>
        <p className="mt-3 leading-relaxed">
          Rishikesh is famous globally for its authentic yoga and Ayurveda tradition. It is home to hundreds of schools offering everything from drop-in classes to 200-hour Yoga Teacher Training (YTT) courses.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-teal-500">Choosing a Yoga School (Safety First)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Accreditation:** Ensure the school is certified by the **Yoga Alliance** (or equivalent body) if seeking teacher training.</li>
          <li>**Stay:** Many ashrams (like Parmarth Niketan) offer basic accommodation and meals in exchange for participating in daily spiritual routines.</li>
          <li>**The Beatles Ashram (Chaurasi Kutia):** A fascinating, abandoned spot where The Beatles studied Transcendental Meditation in 1968. Now open to visitors.</li>
        </ul>
      </section>

      <hr className="my-8 border-teal-200" />

      {/* --- Section 3: Adventure and Thrill Guide --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-teal-600">3. Adventure Sports: Rafting and Bungee</h2>
        <p className="mt-3 leading-relaxed">
          The stretch of the Ganga between Kaudiyala and Rishikesh is a world-class white-water rafting destination.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-teal-500">Rafting Routes and Difficulty</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route Start</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance (Approx.)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience Level</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Marine Drive</td>
                <td className="px-6 py-4 whitespace-nowrap">26 km</td>
                <td className="px-6 py-4 whitespace-nowrap">Advanced (Grade III-IV rapids)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Shivpuri</td>
                <td className="px-6 py-4 whitespace-nowrap">16 km</td>
                <td className="px-6 py-4 whitespace-nowrap">Beginner/Intermediate (Most Popular)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Brahmpuri</td>
                <td className="px-6 py-4 whitespace-nowrap">9 km</td>
                <td className="px-6 py-4 whitespace-nowrap">Family/Beginner (Grade II rapids)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-4 text-teal-500">Other Thrills</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Bungee Jumping:** Offered by several operators outside the city (e.g., Jumpin Heights) for a high-adrenalin experience.</li>
          <li>**Cliff Jumping & Body Surfing:** Often included as part of the longer rafting packages.</li>
        </ul>
      </section>
      
      <hr className="my-8 border-teal-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="rishikesh-faq">
        <h2 className="text-3xl font-bold text-teal-600">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-teal-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr className="my-8 border-teal-200" />

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — Wander Guides. Find your inner peace and adventure!
      </footer>
    </main>
  );
}