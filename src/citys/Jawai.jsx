// filename: Jawai.jsx
import React, { useEffect } from "react";

/**
 * Jawai.jsx
 * SEO-friendly long-form city page for "Jawai" (ready to paste).
 *
 * Usage:
 * 1. Import images above (example below commented).
 *    import jawaiHero from "../assets/jawai-hero.jpg";
 *    import jawaiLeopard from "../assets/jawai-leopard.jpg";
 *
 * 2. Replace COMPANY_NAME, SITE_URL and image paths below.
 *
 * 3. Drop into your router: /city/jawai
 *
 * Notes:
 * - This component sets document.title and meta tags via useEffect
 *   (no external helmet dependency).
 * - JSON-LD structured data is injected for Article, BreadcrumbList and FAQ.
 * - Content is long-form, keyword-rich and organized with semantic headings.
 */

export default function Jawai({
  companyName = "BharatMile",
  siteUrl = "http://localhost:5173",
  heroImage = "/assets/jawai-hero.jpg", // replace with imported image variable
  images = [], // optional array of additional image URLs or imports
}) {
  const pagePath = "/city/jawai";
  const pageUrl = (siteUrl.replace(/\/$/, "") || "") + pagePath;
  const pageTitle =
    "Jawai Travel Guide • Jawai Leopard Safaris, Camping, Best Time to Visit | " +
    companyName;
  const pageDescription =
    "Complete Jawai travel guide — leopard safaris, camping, best hotels, itineraries, local culture, how to get there and travel tips. Plan your Jawai trip with practical tips and expert local guides.";

  // Long-form SEO content (kept inside component to be server-render friendly if pre-rendered)
  const longContent = [
    {
      id: "intro",
      title: "Jawai: Wild, Rugged, Unforgettable",
      paragraphs: [
        "Nestled in the rugged hills of southern Rajasthan, Jawai is a place where wilderness meets culture. Known for its rare leopard population, granite boulders, vibrant villages and pristine night skies, Jawai offers an authentic, off-the-beaten-track experience for nature lovers, wildlife photographers and adventure travelers.",
        "Jawai's leopard safaris, jeep trails, tribal encounters, luxury tented camps and eco-conscious stays have made it one of India’s most talked-about wildlife micro-destinations. This guide brings together everything you need to plan a memorable Jawai trip — practical travel tips, best time to visit, where to stay, how to reach, sample itineraries, and responsible travel advice."
      ],
    },

    {
      id: "why-jawai",
      title: "Why Visit Jawai?",
      paragraphs: [
        "Leopard viewing: Jawai is one of the few places in India where leopards are regularly seen in broad daylight on the granite ridges and open plains. The landscape—huge granite boulders dotted with acacia and tamarind trees—creates dramatic sighting opportunities.",
        "Authentic rural life: The region’s village life, local crafts and warm Dhani hospitality add cultural depth to your wildlife trip. Visiting Jawai is as much about people and culture as it is about wildlife.",
        "Adventure & photography: Jawai’s landscape is a photographer’s paradise — long shadows, dramatic silhouettes of rocks at sunrise, and intense leopard behaviour create unforgettable frames.",
        "Luxury & eco stays: From high-end tented camps to family-run homestays and eco-lodges, Jawai caters to a wide range of travelers while promoting low-impact tourism."
      ],
    },

    {
      id: "top-attractions",
      title: "Top Experiences & Attractions in Jawai",
      list: [
        "Jawai Bandh (reservoir) — scenic water body framed by huge boulders; excellent birdwatching.",
        "Leopard Safaris — guided Jeep safaris at dawn and dusk with experienced local trackers.",
        "Bera Hills — the granite ridges where leopards are often seen sunning themselves.",
        "Local village walks — meet local artisans, taste Rajasthani food and learn traditional crafts.",
        "Stargazing & night photography — minimal light pollution makes Jawai ideal for night skies.",
        "Birdwatching — migratory and resident species gather at the reservoir and wetlands."
      ],
    },

    {
      id: "best-time",
      title: "Best Time to Visit Jawai",
      paragraphs: [
        "October to March is the best time to visit Jawai. The winter months bring pleasant days and crisp mornings — ideal for early morning leopard safaris. Avoid the peak summer months (April–June) when temperatures rise sharply.",
        "During the monsoon (July–September) Jawai becomes lush and green; however, safaris can be restricted depending on rainfall. For birders, post-monsoon months are particularly rewarding with migratory arrivals."
      ],
    },

    {
      id: "how-to-reach",
      title: "How to Reach Jawai",
      paragraphs: [
        "By road: Jawai is well connected by road from major Rajasthani cities — approx 3–4 hours from Udaipur and 5–6 hours from Jodhpur depending on route. Hiring a private car is the most flexible option to reach camps and reserve areas.",
        "By rail: The nearest major railway stations are Jawai Bandh (small station) and Falna. From there, taxis connect to camps and homestays.",
        "By air: Udaipur Dabok (UDR) is the closest airport with regular flights from major Indian cities. From the airport, hire a car or pre-arranged transfer to Jawai."
      ],
    },

    {
      id: "where-to-stay",
      title: "Where to Stay — Tents, Camps & Homestays",
      paragraphs: [
        "Jawai offers a range of accommodation — from luxury glamping experiences on private wildlife properties to small, locally run camps that keep you close to nature. While choosing, prioritize camps that practice ethical wildlife viewing and contribute to local communities.",
        "Tip: Book early for winter months (Dec–Feb) when demand spikes. Ask camps about safari vehicles' capacity and experience of naturalist guides."
      ],
    },

    {
      id: "food-culture",
      title: "Food & Local Culture",
      paragraphs: [
        "Rajasthani cuisine in Jawai is hearty and flavorful — dal baati churma, gatte ki sabzi, bajra rotla and local sweets. Camps often serve a mix of local and continental food; request special diets in advance.",
        "Cultural interactions are a highlight: traditional stories, music and folk dance performances deepen the travel experience."
      ],
    },

    {
      id: "itineraries",
      title: "Suggested Itineraries (1–4 Days)",
      paragraphs: [
        "1-day trip: Early morning jeep safari + mid-morning breakfast at camp + village walk + sunset viewpoint.",
        "2-day trip: Day 1: Evening arrival, short sunset drive. Day 2: Dawn safari, relax at camp, village visit, second safari at dusk.",
        "3–4 day trip: Add a dedicated photography session, full-day village immersion, and a guided birdwatching walk. Longer stays increase chances of great leopard encounters."
      ],
    },

    {
      id: "responsible-travel",
      title: "Responsible Travel & Safety",
      paragraphs: [
        "Respect wildlife: Maintain distance; never attempt to feed or provoke animals. Follow guide instructions at all times.",
        "Pack responsibly: Bring lightweight layers for mornings/evenings, sturdy walking shoes, a good telephoto lens for photography, and reusable water bottles.",
        "Support the local economy: Choose camps that employ locals, buy handicrafts directly and donate to community-led conservation initiatives if you can."
      ],
    },

    {
      id: "conclusion",
      title: "Plan Your Jawai Adventure",
      paragraphs: [
        "Jawai is a rare blend of raw wilderness and cultural warmth. Whether you’re a wildlife photographer, a family looking for an unusual holiday, or a traveler seeking quiet landscapes, Jawai rewards curiosity. With careful planning and responsible practices, your Jawai trip can be unforgettable and support local conservation at the same time.",
        "Book early, choose ethical camps, travel consciously and enjoy one of Rajasthan’s most magical wildlife experiences."
      ],
    }
  ];

  // Inject meta tags and JSON-LD for SEO and social sharing
  useEffect(() => {
    // Title & meta description
    document.title = pageTitle;

    // Helper to create/update meta tags
    function upsertMeta(nameOrProp, attrValue, content) {
      const isProp = ["og:title", "og:description", "og:image", "og:url", "og:type"].includes(attrValue);
      let selector = isProp ? `meta[property="${attrValue}"]` : `meta[name="${attrValue}"]`;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProp) el.setAttribute("property", attrValue);
        else el.setAttribute("name", attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    // Description & canonical
    let desc = document.head.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", pageDescription);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);

    // Open Graph & Twitter
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", pageDescription);
    upsertMeta("property", "og:image", heroImage.startsWith("http") ? heroImage : siteUrl.replace(/\/$/, "") + heroImage);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:type", "article");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", pageDescription);
    upsertMeta("name", "twitter:image", heroImage.startsWith("http") ? heroImage : siteUrl.replace(/\/$/, "") + heroImage);

    // JSON-LD: Article + Breadcrumbs + FAQ
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageTitle,
      "description": pageDescription,
      "image": [heroImage.startsWith("http") ? heroImage : siteUrl.replace(/\/$/, "") + heroImage],
      "author": { "@type": "Organization", "name": companyName },
      "publisher": { "@type": "Organization", "name": companyName },
      "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": siteUrl + "/cities" },
        { "@type": "ListItem", "position": 3, "name": "Jawai", "item": pageUrl }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When is the best time to visit Jawai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Jawai for leopard sightings and comfortable weather."
          }
        },
        {
          "@type": "Question",
          "name": "How do I reach Jawai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jawai is best reached by road from Udaipur or Jodhpur. The nearest airport is Udaipur Dabok (UDR)."
          }
        }
      ]
    };

    // Remove any previously injected JSON-LD created by this component (avoid duplicates)
    const existingInjected = document.head.querySelectorAll('script[data-jawai-seo="true"]');
    existingInjected.forEach(n => n.remove());

    function injectJSONLD(obj) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-jawai-seo", "true");
      script.text = JSON.stringify(obj);
      document.head.appendChild(script);
    }

    injectJSONLD(articleSchema);
    injectJSONLD(breadcrumbSchema);
    injectJSONLD(faqSchema);

    // Cleanup function: optional removal on unmount
    return () => {
      // keep meta tags as is (usually good), but remove JSON-LD we added
      const injected = document.head.querySelectorAll('script[data-jawai-seo="true"]');
      injected.forEach(n => n.remove());
    };
  }, [pageTitle, pageDescription, pageUrl, heroImage, companyName, siteUrl]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 prose prose-lg">
      {/* HERO */}
      <section className="relative w-full rounded-lg overflow-hidden shadow-lg mb-10">
        <img
          src={heroImage}
          alt="Jawai landscape with leopard and granite boulders"
          className="w-full h-96 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end p-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Jawai — Leopard Safaris, Camps & Wild Rajasthan
            </h1>
            <p className="text-sm text-white/90 mt-2">
              A full Jawai travel guide to plan safaris, stays, food, culture and photography.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <article id="article-content">
        {longContent.map((section) => (
          <section key={section.id} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>

            {section.paragraphs &&
              section.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700">
                  {p}
                </p>
              ))}

            {section.list && (
              <ul className="list-disc list-inside mt-3 text-gray-700">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Sample internal links to help crawlability */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold">More from {companyName}</h3>
          <p>
            Explore other Rajasthan destinations:{" "}
            <a href={siteUrl + "/city/jaipur"} className="text-indigo-600 underline">
              Jaipur
            </a>
            ,{" "}
            <a href={siteUrl + "/city/udaipur"} className="text-indigo-600 underline">
              Udaipur
            </a>
            ,{" "}
            <a href={siteUrl + "/city/jaisalmer"} className="text-indigo-600 underline">
              Jaisalmer
            </a>
            . Check our travel blog for photography tips, packing lists, and sustainable travel guides.
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 mb-10">
          <h3 className="text-2xl font-bold">Ready to book your Jawai trip?</h3>
          <p className="text-gray-700">
            Contact {companyName} to plan a tailor-made Jawai experience — leopard safaris, private camps, and local guides. Early bookings recommended for the winter season.
          </p>
          <div className="mt-4">
            <a
              href={siteUrl + "/contact"}
              className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium"
            >
              Plan with {companyName}
            </a>
          </div>
        </section>

        {/* FAQ (visible) */}
        <section id="faq" className="mb-16">
          <h3 className="text-2xl font-bold">Frequently Asked Questions (FAQ)</h3>

          <div className="mt-4">
            <details className="mb-3">
              <summary className="font-medium cursor-pointer">When is the best time to visit Jawai?</summary>
              <p className="mt-2 text-gray-700">October to March for comfortable weather and best leopard sighting chances.</p>
            </details>

            <details className="mb-3">
              <summary className="font-medium cursor-pointer">Are leopard safaris safe?</summary>
              <p className="mt-2 text-gray-700">Yes — when conducted with licensed guides using proper safari protocols. Always follow the guide's instructions.</p>
            </details>

            <details className="mb-3">
              <summary className="font-medium cursor-pointer">What should I pack for Jawai?</summary>
              <p className="mt-2 text-gray-700">Layered clothing, binoculars, chargers, power bank, a telephoto lens (if you photograph), sturdy shoes, sunscreen and a reusable water bottle.</p>
            </details>
          </div>
        </section>

        {/* Footer note / author */}
        <footer className="border-t pt-6 text-sm text-gray-600">
          <p>
            Guide by <strong>{companyName}</strong>. Content updated: {new Date().toLocaleDateString()}.
            This page aims to offer practical, SEO-optimized information to help travelers plan a safe and meaningful Jawai trip.
          </p>
        </footer>
      </article>
    </main>
  );
}
