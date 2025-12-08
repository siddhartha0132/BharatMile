// src/blogs/Mysore.jsx
import { useEffect } from "react";

export default function Mysore() {
  useEffect(() => {
    document.title =
      "Mysore Palace Dussehra 2025 | Timings, Light Show, Tickets & Travel Guide | BharatMile";

    const setMeta = (name, content, attr = "name") => {
      let m = document.querySelector(`meta[${attr}='${name}']`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute(attr, name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Complete Mysore Palace & Dussehra 2025 travel guide: history, light show timings, ticket prices, best time to visit & WhatsApp booking support."
    );

    setMeta(
      "keywords",
      "Mysore Palace Dussehra, Mysore Palace light show, Mysore Dussehra 2025, Mysore tourism, Mysore travel guide"
    );

    setMeta(
      "og:title",
      "Mysore Palace Dussehra 2025 | Royal Festival & Travel Guide",
      "property"
    );
    setMeta(
      "og:description",
      "Experience India’s most royal festival at Mysore Palace — timings, tickets & travel booking.",
      "property"
    );
    setMeta("og:type", "article", "property");
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1587033411391-5d9b9b1e10ef",
      "property"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute(
      "href",
      window.location.origin + "/blog/mysore-palace-dussehra"
    );

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Mysore Palace Dussehra 2025 | Complete Timings, Light Show & Travel Guide",
      description:
        "Complete Mysore Palace and Dussehra festival guide with timings, ticket prices, history and booking tips.",
      image: [
        "https://images.unsplash.com/photo-1587033411391-5d9b9b1e10ef",
      ],
      author: { "@type": "Organization", name: "BharatMile Editorial" },
      publisher: {
        "@type": "Organization",
        name: "BharatMile",
        logo: { "@type": "ImageObject", url: "/images/logo.png" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          typeof window !== "undefined"
            ? window.location.href
            : "https://yourwebsite.com/blog/mysore-palace-dussehra",
      },
    };

    let script = document.getElementById("mysore-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "mysore-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* ✅ HERO */}
      <section className="relative rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1587033411391-5d9b9b1e10ef"
          alt="Mysore Palace Dussehra"
          className="w-full h-[480px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Mysore Palace Dussehra 2025
            </h1>
            <p className="mt-3 text-lg">
              India’s grandest royal festival with light shows, elephants & palace
              processions.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book Mysore Tour on WhatsApp
              </a>
              <a
                href="#details"
                className="border border-white px-6 py-3 rounded-lg"
              >
                View Festival Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ INTRO */}
      <section className="mt-16 text-lg">
        <h2 className="text-3xl font-bold mb-4">
          Why Mysore Palace is the Pride of Karnataka
        </h2>
        <p>
          Mysore Palace is one of India’s most magnificent royal residences and the
          heart of Karnataka’s cultural identity. It served as the home of the
          Wadiyar dynasty for centuries and attracts millions of visitors every
          year with its Indo-Saracenic architecture and grand illumination.
        </p>
      </section>

      {/* ✅ DUSSEHRA FESTIVAL */}
      <section id="details" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Mysore Dussehra Festival – 400 Years of Royal Tradition
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Festival Duration:</strong> 10 days (Sept–Oct)</li>
          <li><strong>Main Event:</strong> Vijayadashami Jumbo Savari</li>
          <li><strong>Attraction:</strong> Decorated elephants with golden howdah</li>
          <li><strong>Cultural Shows:</strong> Dance, music & folklore daily</li>
        </ul>
      </section>

      {/* ✅ LIGHT SHOW */}
      <section className="mt-16 bg-indigo-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Mysore Palace Light Show Timings
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Evening Lighting:</strong> 7 PM – 7:45 PM (Daily)</li>
          <li><strong>During Dussehra:</strong> Full illumination every night</li>
          <li><strong>Total Bulbs:</strong> 1,00,000+ lights</li>
          <li><strong>Photography:</strong> Allowed outside the palace</li>
        </ul>
      </section>

      {/* ✅ VISITOR TIPS */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Visitor Tips for Mysore Palace
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Reach before 9 AM during Dussehra for entry</li>
          <li>Footwear must be removed inside the palace</li>
          <li>Mobile & cameras restricted inside</li>
          <li>Book hotels 30–45 days early during festival season</li>
        </ul>
      </section>

      {/* ✅ BEST TIME */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Best Time to Visit Mysore Palace
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>September–October:</strong> Best for Dussehra Festival</li>
          <li><strong>November–February:</strong> Pleasant weather</li>
          <li><strong>March–May:</strong> Hot but less crowded</li>
        </ul>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Mysore Palace Dussehra FAQs
        </h2>

        {[
          ["Is Mysore Dussehra worth visiting?", "Yes, it's India’s most royal and traditional Dussehra celebration."],
          ["Is ticket required for the palace?", "Yes, ticket required for internal palace visit."],
          ["Is photography allowed inside?", "No, photography is restricted indoors."],
          ["Is the light show free?", "Yes, exterior light illumination is free."],
        ].map((faq, i) => (
          <details key={i} className="border p-4 rounded-lg mb-4">
            <summary className="font-medium cursor-pointer">
              {faq[0]}
            </summary>
            <p className="mt-2 text-gray-700">{faq[1]}</p>
          </details>
        ))}
      </section>

      {/* ✅ FINAL CTA */}
      <section className="mt-20 bg-green-700 text-white p-10 rounded-xl text-center shadow-xl">
        <h3 className="text-3xl font-bold">
          Planning to Visit Mysore for Dussehra 2025?
        </h3>
        <p className="mt-2 text-green-200">
          Hotels, transport & guided palace tours available.
        </p>

        <a
          href="https://wa.me/919636974688"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
        >
          Chat on WhatsApp Now
        </a>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — BharatMile | Royal India Travel
      </footer>
    </main>
  );
}
