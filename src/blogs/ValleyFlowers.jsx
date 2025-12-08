import React, { useEffect } from "react";

export default function ValleyFlowers() {

  const faqItems = [
    { 
      q: "When is the Valley of Flowers open for trekking?", 
      a: "The Valley of Flowers National Park is open from **June to October**. Peak blooming happens from **mid-July to mid-August** during the monsoon." 
    },
    { 
      q: "How many days are required for the Valley of Flowers trek?", 
      a: "A minimum of **3 days** is required: Day 1 Govindghat to Ghangaria, Day 2 Valley visit, Day 3 return. Many add **Hemkund Sahib** as Day 4." 
    },
    {
      q: "Is accommodation available inside the Valley?",
      a: "No. Staying inside the park is **strictly prohibited**. All hotels and lodges are located at **Ghangaria village**."
    }
  ];

  /* ================= SEO META + JSON-LD ================= */
  useEffect(() => {
    document.title =
      "Valley of Flowers Trek Guide 2025 – Best Time, Route, Permits & Safety Tips";

    const set = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const description =
      "Complete Valley of Flowers Trek Guide 2025: best monsoon season, permits, 3-day route via Govindghat–Ghangaria, altitude, safety tips & packing list.";

    set("description", description);
    set(
      "keywords",
      "Valley of Flowers trek, Valley of Flowers guide, Valley of Flowers best time, Govindghat Ghangaria trek, Uttarakhand monsoon trek"
    );

    // Open Graph
    set("og:title", document.title, "property");
    set("og:description", description, "property");
    set("og:type", "article", "property");
    set("og:image", "https://yourwebsite.com/images/valley-of-flowers-bloom.jpg", "property");

    // Twitter
    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set("twitter:description", description);
    set(
      "twitter:image",
      "https://yourwebsite.com/images/valley-of-flowers-bloom.jpg"
    );

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/valley-of-flowers-trek-guide";

    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: document.title,
      description,
      image: ["https://yourwebsite.com/images/valley-of-flowers-bloom.jpg"],
      author: { "@type": "Organization", name: "BharatMile Treks" },
      publisher: { "@type": "Organization", name: "BharatMile" },
      mainEntityOfPage: { "@type": "WebPage", "@id": window.location.href },
    };

    let script = document.getElementById("valley-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "valley-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">

      {/* HERO IMAGE */}
      <img
        src="/images/valley-of-flowers-bloom.jpg"
        alt="Valley of Flowers National Park Trek"
        className="rounded-xl w-full mb-8 shadow-lg"
      />

      {/* TITLE */}
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        Valley of Flowers Trek Guide 2025 🌸
      </h1>

      <p className="text-lg bg-indigo-50 p-4 rounded border-l-4 border-indigo-600 mb-8">
        The Valley of Flowers in Uttarakhand is one of India’s most breathtaking
        monsoon treks. A UNESCO World Heritage Site, it transforms into a colorful
        alpine carpet during peak bloom.
      </p>

      {/* SECTION 1 */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-3">
          1. Best Time to Visit (Blooming Season)
        </h2>
        <p>
          Unlike most Himalayan treks, the **best time to visit Valley of Flowers
          is during monsoon (July–September)**.
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li><strong>June:</strong> Snow melting, fewer flowers.</li>
          <li><strong>Mid-July to Mid-August:</strong> ✅ Peak bloom.</li>
          <li><strong>September:</strong> Clear skies, fading flowers.</li>
        </ul>
      </section>

      <hr className="my-10" />

      {/* SECTION 2 */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-3">
          2. Trek Route & Distance
        </h2>
        <p>The Valley of Flowers trek is a **moderate 3-day trek**:</p>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li><strong>Day 1:</strong> Govindghat → Ghangaria (13 km)</li>
          <li><strong>Day 2:</strong> Ghangaria → Valley → Ghangaria (8 km)</li>
          <li><strong>Day 3:</strong> Ghangaria → Govindghat (13 km downhill)</li>
        </ul>

        <p className="mt-4 text-red-700 bg-red-50 p-4 rounded border-l-4 border-red-500">
          ⚠️ Altitude ranges from 6,000 ft to 11,500 ft — **acclimatization in Joshimath is highly recommended.**
        </p>
      </section>

      <hr className="my-10" />

      {/* SECTION 3 */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-3">
          3. Permits & Entry Rules
        </h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Permits issued at **Govindghat Forest Office**</li>
          <li>Valid for **3 days only**</li>
          <li>Entry between **7 AM – 12 PM only**</li>
          <li>No overnight stay inside the park</li>
        </ul>
      </section>

      <hr className="my-10" />

      {/* SECTION 4 */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-700 mb-3">
          4. Essential Packing List
        </h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li>Waterproof jacket & backpack cover</li>
          <li>Good trekking shoes (anti-slip)</li>
          <li>Thermals, wool socks & gloves</li>
          <li>Basic medicines & AMS tablets</li>
          <li>Trekking pole (highly recommended)</li>
        </ul>
      </section>

      <hr className="my-10" />

      {/* FAQ */}
      <section id="valley-faq">
        <h2 className="text-3xl font-bold text-indigo-700 mb-5">
          Frequently Asked Questions
        </h2>

        {faqItems.map((item, i) => (
          <details key={i} className="mb-3 p-4 bg-gray-50 border rounded">
            <summary className="font-semibold text-indigo-700 cursor-pointer">
              {item.q}
            </summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="mt-12 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} BharatMile Treks — Travel responsibly and protect the Himalayas 🌿
      </footer>

    </main>
  );
}
