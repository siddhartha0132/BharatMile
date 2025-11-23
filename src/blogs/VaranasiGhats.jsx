import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO tags

export default function VaranasiGhats() {
  
  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/varanasi-ghats-guide" // **UPDATE with actual URL**
        },
        headline: "Varanasi Ghats: A Spiritual Journey—Rituals, Etiquette, and Photography Guide",
        image: ["https://example.com/images/varanasi-ganga-aarti.jpg", "https://example.com/images/varanasi-sunrise-boat.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Cultural Journeys" // **UPDATE with actual author**
        },
        publisher: {
          "@type": "Organization",
          name: "Cultural Journeys",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "Explore Varanasi: definitive guide to the 80+ ghats, sacred rituals (Ganga Aarti), best times to visit, cultural etiquette, photography tips, and safety along the River Ganga."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "India Heritage", "item": "https://example.com/india-heritage" },
          { "@type": "ListItem", "position": 3, "name": "Varanasi Ghats Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best time for a boat ride on the Ganges?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The best time is sunrise (around 5:30 AM to 6:30 AM). The light is soft, and you can witness the morning rituals, yoga, and life along the ghats unfold as the sun rises."
            }
          },
          {
            "@type": "Question",
            name: "Is photography allowed at the cremation ghats (Manikarnika/Harishchandra)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Photography is **strictly discouraged** and often prohibited at the cremation ghats (Manikarnika and Harishchandra) out of respect for the grieving families. Please observe from a distance and do not point cameras directly at the ceremonies."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title (Expanded for SEO)
    document.title = "Varanasi Ghats: A Spiritual Journey—Rituals, Etiquette, and Photography Guide";

    // Helper function to create or update meta tags
    const setOrCreate = (name, content, attr = 'name') => {
      let e = document.querySelector(`meta[${attr}="${name}"]`);
      if (!e) {
        e = document.createElement('meta');
        e.setAttribute(a, n);
        document.head.appendChild(e);
      }
      e.setAttribute('content', content);
    };

    const descriptionContent = 'Explore Varanasi: definitive guide to the 80+ ghats, sacred rituals (Ganga Aarti), best times to visit, cultural etiquette, photography tips, and safety along the River Ganga.';
    const titleContent = "Varanasi Ghats: Rituals, Etiquette, and Photography Guide";
    const imageUrl = "https://example.com/images/varanasi-ganga-aarti.jpg"; // **UPDATE URL**

    // 2. General SEO Meta Tag (already in component)
    setOrCreate('description', descriptionContent);
    
    // 3. Open Graph Tags (for Social Media)
    setOrCreate('og:title', titleContent, 'property');
    setOrCreate('og:description', descriptionContent, 'property');
    setOrCreate('og:type', 'article', 'property');
    setOrCreate('og:url', window.location.href, 'property');
    setOrCreate('og:image', imageUrl, 'property');
    setOrCreate('og:site_name', 'Cultural Journeys', 'property');

    // 4. Twitter Card Tags
    setOrCreate('twitter:card', 'summary_large_image');
    setOrCreate('twitter:title', titleContent);
    setOrCreate('twitter:description', descriptionContent);
    setOrCreate('twitter:image', imageUrl);

    // 5. Canonical Link Tag (usually added via Helmet for React apps, but kept for legacy set)
    setOrCreate('canonical', window.location.href, 'rel');

  }, []);

  const faqItems = [
    { 
      q: "What is the best time for a boat ride on the Ganges?", 
      a: "The best time is sunrise (around 5:30 AM to 6:30 AM). The light is soft, and you can witness the morning rituals, yoga, and life along the ghats unfold as the sun rises." 
    },
    { 
      q: "Is photography allowed at the cremation ghats (Manikarnika/Harishchandra)?", 
      a: "Photography is **strictly discouraged** and often prohibited at the cremation ghats (Manikarnika and Harishchandra) out of respect for the grieving families. Please observe from a distance and do not point cameras directly at the ceremonies." 
    },
    {
      q: "Where is the main Ganga Aarti performed?",
      a: "The most famous and elaborate Ganga Aarti ceremony takes place every evening at **Dashashwamedh Ghat**, starting shortly after sunset (typically 6:30 PM in winter, 7:00 PM in summer)."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
        <title>Varanasi Ghats: A Spiritual Journey—Rituals, Etiquette, and Photography Guide</title>
        <meta name="description" content="Explore Varanasi: definitive guide to the 80+ ghats, sacred rituals (Ganga Aarti), best times to visit, cultural etiquette, photography tips, and safety along the River Ganga." />
        <meta name="keywords" content="Varanasi ghats, Ganga Aarti, Manikarnika Ghat, Varanasi travel guide, Dashashwamedh Ghat, spiritual travel" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-amber-800">
          A Spiritual Journey Through Varanasi's Ghats 🙏
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          An empathetic and informative look at rituals, river life, and traveller etiquette along the sacred River Ganga in the world's oldest living city.
        </p>
      </header>

      {/* --- Section 1: Morning & Evening Rituals (The Essential Timings) --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-amber-700">1. Morning and Evening Rituals: Don't Miss the Magic</h2>
        <p className="mt-3 leading-relaxed">
          Varanasi revolves around the Ganga River, and its key experiences are tied to the clock. Being present at the right time transforms the visit.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-amber-600">The Ganga Aarti (Evening)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Location:** Primarily at **Dashashwamedh Ghat**.</li>
          <li>**Timing:** Starts shortly after sunset (check local timings; usually around 6:00 PM - 7:00 PM).</li>
          <li>**Experience:** A powerful sensory ritual involving fire, incense, bells, and chanting. Arrive 30-45 minutes early for a good spot, or view it from a stationary boat in the river.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-amber-600">Sunrise Boat Ride (Morning)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Timing:** 5:00 AM - 6:30 AM.</li>
          <li>**Experience:** The best way to witness the daily life of pilgrims—performing yoga, bathing, and offering prayers—as the sun rises over the eastern bank.</li>
        </ul>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* --- Section 2: Types of Ghats (Where to Go) --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-amber-700">2. The Ghats: Ritual, Bathing, and Cremation</h2>
        <p className="mt-3 leading-relaxed">
          Varanasi has over 80 ghats, each serving a unique purpose. It's important to know the difference.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-amber-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">Examples</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">Primary Activity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap font-medium">Devotional/Bathing</td>
                <td className="px-4 py-4 whitespace-nowrap">Dashashwamedh, Assi, Tulsi Ghat</td>
                <td className="px-4 py-4">Pooja, bathing, yoga, cultural events.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap font-medium">Cremation (Moksha)</td>
                <td className="px-4 py-4 whitespace-nowrap text-red-700 font-bold">Manikarnika Ghat, Harishchandra Ghat</td>
                <td className="px-4 py-4">Cremation ceremonies (24/7). **Observe strict respect.**</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-4 text-amber-600">The Best Walking Route</h3>
        <p className="mt-2">
          Start your walk early morning from **Assi Ghat** (the southernmost, most tranquil ghat) and walk north towards **Dashashwamedh** and then **Manikarnika** (the busiest cremation ghat). This covers the most vibrant stretch.
        </p>
      </section>
      
      <hr className="my-8 border-amber-200" />

      {/* --- Section 3: Etiquette & Safety --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-amber-700">3. Cultural Etiquette, Safety, and Photography</h2>
        
        <h3 className="text-xl font-semibold mt-4 text-red-600">Photography and Respect</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Cremation Ghats:** As detailed in the FAQ, **do not photograph** the actual ceremonies. It is a private, deeply religious moment. Be highly respectful.</li>
          <li>**People:** Always **ask before photographing people**, especially women, sadhus (holy men), or children.</li>
          <li>**Dress:** Dress modestly (shoulders and knees covered) when exploring the alleys or attending temple services.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-amber-600">Safety and Practical Tips</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Scams:** Be wary of touts offering "exclusive" deals or self-proclaimed guides near the main ghats and temples.</li>
          <li>**Footwear:** Avoid walking barefoot unless participating in a ritual. The stairs and alleys are often slippery and can be polluted.</li>
          <li>**Walking:** The ghats and alleys are confusing! Use Google Maps, but be prepared to get pleasantly lost.</li>
        </ul>
      </section>

      <hr className="my-8 border-amber-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="varanasi-faq">
        <h2 className="text-3xl font-bold text-amber-700">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-amber-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — Cultural Journeys. May your journey be insightful and peaceful.
      </footer>
    </main>
  );
}