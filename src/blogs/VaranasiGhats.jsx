import React, { useEffect } from "react";

export default function VaranasiGhats() {

  const faqItems = [
    { 
      q: "What is the best time for a boat ride on the Ganges?", 
      a: "The best time is **sunrise (5:30–6:30 AM)** when rituals, yoga and daily life unfold beautifully on the ghats." 
    },
    { 
      q: "Is photography allowed at the cremation ghats?", 
      a: "**No. Photography is strictly discouraged** at Manikarnika and Harishchandra Ghats to respect grieving families." 
    },
    {
      q: "Where is the main Ganga Aarti performed?",
      a: "The grand evening Ganga Aarti is held at **Dashashwamedh Ghat**, starting shortly after sunset."
    }
  ];

  /* ================= SEO + JSON-LD ================= */
  useEffect(() => {
    document.title =
      "Varanasi Ghats Guide 2025 – Ganga Aarti, Rituals, Boat Ride & Photography Tips";

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
      "Complete Varanasi Ghats Guide 2025: Ganga Aarti timings, sunrise boat rides, cremation ghats etiquette, photography rules, rituals and safety tips.";

    set("description", description);
    set(
      "keywords",
      "Varanasi ghats, Ganga Aarti, Manikarnika Ghat, Dashashwamedh Ghat, Varanasi travel guide, spiritual India"
    );

    // Open Graph
    set("og:title", document.title, "property");
    set("og:description", description, "property");
    set("og:type", "article", "property");
    set("og:image", "https://yourwebsite.com/images/varanasi-ganga-aarti.jpg", "property");

    // Twitter
    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set("twitter:description", description);
    set(
      "twitter:image",
      "https://yourwebsite.com/images/varanasi-ganga-aarti.jpg"
    );

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/varanasi-ghats-guide";

    // JSON-LD Article
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: document.title,
      description,
      image: ["https://yourwebsite.com/images/varanasi-ganga-aarti.jpg"],
      author: { "@type": "Organization", name: "BharatMile Heritage" },
      publisher: { "@type": "Organization", name: "BharatMile" },
      mainEntityOfPage: { "@type": "WebPage", "@id": window.location.href },
    };

    let script = document.getElementById("varanasi-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "varanasi-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">

      {/* HERO IMAGE */}
      <img
        src="/images/varanasi-ganga-aarti.jpg"
        alt="Varanasi Ghats and Ganga Aarti"
        className="rounded-xl w-full mb-8 shadow-lg"
      />

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        Varanasi Ghats Guide 2025 – Rituals, Aarti & Boat Ride Experience 🙏
      </h1>

      <p className="text-lg bg-amber-50 p-4 rounded border-l-4 border-amber-600 mb-8">
        Varanasi isn’t just a city—it’s a living spiritual universe. The ghats along the River Ganga form the heart of its daily rituals, prayers, life, and death.
      </p>

      {/* SECTION 1 */}
      <section>
        <h2 className="text-3xl font-bold text-amber-700 mb-3">
          1. Morning & Evening Rituals
        </h2>
        <ul className="list-disc ml-6 mt-3 space-y-1">
          <li><strong>Sunrise Boat Ride:</strong> 5:30–6:30 AM (best photography)</li>
          <li><strong>Ganga Aarti:</strong> Dashashwamedh Ghat after sunset</li>
          <li><strong>Morning Yoga:</strong> Assi Ghat daily sessions</li>
        </ul>
      </section>

      <hr className="my-10" />

      {/* SECTION 2 */}
      <section>
        <h2 className="text-3xl font-bold text-amber-700 mb-3">
          2. Types of Ghats & Their Purpose
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Devotional Ghats:</strong> Dashashwamedh, Assi, Tulsi</li>
          <li><strong>Cremation Ghats:</strong> Manikarnika, Harishchandra</li>
        </ul>

        <p className="mt-4 text-red-700 bg-red-50 p-3 rounded border-l-4 border-red-500">
          ⚠️ Photography at cremation ghats is forbidden. Show full respect.
        </p>
      </section>

      <hr className="my-10" />

      {/* SECTION 3 */}
      <section>
        <h2 className="text-3xl font-bold text-amber-700 mb-3">
          3. Cultural Etiquette & Safety
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Dress modestly (covered shoulders & knees)</li>
          <li>Ask before photographing people</li>
          <li>Avoid barefoot walking near the river</li>
          <li>Ignore aggressive guides & ritual sellers</li>
        </ul>
      </section>

      <hr className="my-10" />

      {/* FAQ */}
      <section id="varanasi-faq">
        <h2 className="text-3xl font-bold text-amber-700 mb-5">
          Frequently Asked Questions
        </h2>

        {faqItems.map((item, i) => (
          <details key={i} className="mb-3 p-4 bg-gray-50 border rounded">
            <summary className="font-semibold text-amber-700 cursor-pointer">
              {item.q}
            </summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <footer className="mt-12 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} BharatMile Heritage — Travel with respect & awareness.
      </footer>

    </main>
  );
}
