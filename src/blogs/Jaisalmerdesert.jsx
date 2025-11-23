import React, { useEffect, useState } from "react";

export default function JaisalmerDesert() {
  // Corrected JSON-LD structure, combining TouristAttraction and FAQPage,
  // giving the FAQPage an @id for better SEO linkage.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        name: "Jaisalmer Desert Camping: A Night Under the Stars",
        description:
          "Luxury desert camping near Jaisalmer with private tents, cultural performances, camel safaris and gourmet Rajasthani dinners.",
        image: ["https://example.com/images/jaisalmer-hero.jpg"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaisalmer",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "jaisalmer-faq-schema", // Added ID for clarity
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I reach the Jaisalmer desert camp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most guests arrive by car from Jaisalmer city (approx. 45–60 minutes). We provide pick-up on request from the railway station or airport.",
            },
          },
          {
            "@type": "Question",
            name: "Is camping safe for families/children?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — our luxury tents are family-friendly, we provide bedding, mosquito nets, and private washrooms on select packages.",
            },
          },
          {
            // Adding the additional FAQs from the component body to the JSON-LD
            "@type": "Question",
            name: "Do you offer vegetarian meals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — veg, vegan and gluten-free options available.",
            },
          },
        ],
      },
    ],
  };

  useEffect(() => {
    // 1. Set Document Title
    document.title =
      "Jaisalmer Desert Camping · A Night Under the Stars | Luxury Tented Camp";

    // Helper function to create or update meta tags
    const setOrCreate = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Set SEO/Social Meta Tags (Open Graph, Twitter)
    setOrCreate(
      "description",
      "Experience luxury desert camping near Jaisalmer: private tents, camel safaris, cultural evenings, gourmet Rajasthani cuisine and stargazing."
    );
    setOrCreate(
      "og:title",
      "Jaisalmer Desert Camping: A Night Under the Stars",
      "property"
    );
    setOrCreate(
      "og:description",
      "Luxury desert camp near Jaisalmer with private tents, cultural performances and curated experiences.",
      "property"
    );
    setOrCreate("og:type", "website", "property");
    setOrCreate(
      "og:image",
      "https://example.com/images/jaisalmer-hero.jpg",
      "property"
    );
    setOrCreate("twitter:card", "summary_large_image");

    // 3. Set Canonical Link
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);

    // 4. Set JSON-LD Schema
    let jsonScript = document.getElementById("jaisalmer-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "jaisalmer-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);
  }, []); // Empty dependency array ensures this runs once after initial render

  // Refactored to not use a custom state for toggling.
  // The `<details>` element manages its own open/close state.

  const faqItems = [
    { q: "How do I reach the Jaisalmer desert camp?", a: "Most guests arrive by car from Jaisalmer city (approx. 45–60 minutes). We provide pick-up on request from the railway station or airport." },
    { q: "Is camping safe for families/children?", a: "Yes — our luxury tents are family-friendly, we provide bedding, mosquito nets, and private washrooms on select packages." },
    { q: "Do you offer vegetarian meals?", a: "Yes — veg, vegan and gluten-free options available." },
    { q: "Is there electricity?", a: "Limited charging points; stargazing-focused low-tech environment." },
    { q: "Can I customize events?", a: "Yes — weddings, shoots & private dinners available." }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* --- Hero Section --- */}
      <section className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Aspect ratio utility might not be defined in your CSS setup, 
            so using explicit Tailwind height classes for safety: */}
        <div className="bg-gray-100 w-full h-[400px] sm:h-[480px] overflow-hidden">
          <img
            src="/images/jaisalmer-hero.jpg"
            alt="Luxury desert camp tents under the Milky Way near Jaisalmer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-end">
          <div className="p-8 text-white">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Jaisalmer Desert Camping
            </h1>
            <p className="mt-2 text-lg sm:text-xl max-w-2xl">
              A Million-Dollar Night Under the Stars — luxury tents, camel safaris,
              cultural performances and gourmet Rajasthani dining.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#booking"
                className="inline-block bg-yellow-500 hover:opacity-95 rounded-md px-6 py-3 font-semibold shadow"
              >
                Book Your Experience
              </a>
              <a
                href="#itinerary"
                className="inline-block bg-white/10 rounded-md px-6 py-3 font-medium"
              >
                See Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* --- Highlights Section --- */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6" aria-label="highlights">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">Private Luxury Tents</h3>
          <p className="mt-2 text-sm text-gray-600">
            King-size beds, private verandas, premium bedding and optional ensuite washrooms.
          </p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">Authentic Rajasthani Cuisine</h3>
          <p className="mt-2 text-sm text-gray-600">
            Multi-course dinners, live tawa breads and veg & non-veg options.
          </p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold text-lg">Curated Experiences</h3>
          <p className="mt-2 text-sm text-gray-600">
            Camel safaris, stargazing, folk music & dance performances and sunrise dunes.
          </p>
        </div>
      </section>

      <hr />

      {/* --- Itinerary Section --- */}
      <section id="itinerary" className="mt-12">
        <h2 className="text-2xl font-bold">Sample 24-Hour Itinerary</h2>
        <ol className="mt-4 space-y-4 list-decimal list-inside text-gray-700">
          <li>
            <strong>Afternoon:</strong> Pickup from Jaisalmer station, scenic drive
            to the camp, welcome chai & snacks.
          </li>
          <li>
            <strong>Sunset:</strong> Camel safari onto the dunes to watch the golden
            light fall across the desert.
          </li>
          <li>
            <strong>Evening:</strong> Sundowner drinks, cultural performance, and a
            multi-course Rajasthani dinner by the bonfire.
          </li>
          <li>
            <strong>Night:</strong> Guided stargazing with telescopes and overnight
            in a luxury tent.
          </li>
          <li>
            <strong>Next Morning:</strong> Sunrise walk, breakfast, optional short
            jeep trip back to the city.
          </li>
        </ol>
      </section>

      <hr />

      {/* --- Inclusions/Details Section --- */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">What’s Included</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>Comfortable luxury tent (double occupancy)</li>
            <li>All meals (dinner + breakfast) and unlimited chai/coffee</li>
            <li>Camel safari (as per selected package)</li>
            <li>Live cultural programme and bonfire</li>
            <li>Pick-up & drop-off from Jaisalmer (on request)</li>
          </ul>
        </div>
        <aside className="p-6 border rounded-xl">
          <p className="text-sm text-gray-600">
            <strong>Best for:</strong> Couples, families, photographers, cultural
            travellers.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Seasons:</strong> October–March (cool evenings).
          </p>
        </aside>
      </section>

      <hr />

      {/* --- Gallery Section --- */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold">Gallery</h3>
        <p className="text-sm text-gray-600 mt-1">
          (Replace these placeholders with your high-resolution photos.)
        </p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden bg-gray-100 w-full aspect-[4/3]"
            >
              <img
                src={`/images/gallery-${i + 1}.jpg`}
                alt={`Jaisalmer camp photo ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="faq-section">
        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg">
            {/* The `<summary>` tag provides the native open/close toggle functionality. */}
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr />

      {/* --- Footer --- */}
      <footer className="mt-16 py-8 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Jaisalmer Desert Camping — All rights reserved.</p>
      </footer>
    </main>
  );
}