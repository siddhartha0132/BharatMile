// src/blogs/MeghalayaWalking.jsx
import React, { useEffect } from "react";

export default function MeghalayaWalking() {
  useEffect(() => {
    document.title =
      "Meghalaya Living Root Bridge Trek 2025 | Double Decker Trek & Booking | BharatMile";

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Complete Meghalaya Living Root Bridge trek guide 2025: Double Decker Bridge Nongriat route, difficulty, best time, trek safety & WhatsApp booking."
    );

    setMeta(
      "keywords",
      "Meghalaya root bridge trek, Double Decker Root Bridge trek, Nongriat trek, Living Root Bridge Meghalaya, Meghalaya trekking tour"
    );

    setMeta(
      "og:title",
      "Meghalaya Living Root Bridge Trek 2025 | Double Decker Trek & Booking",
      "property"
    );
    setMeta(
      "og:description",
      "Walk on living bridges grown by nature! Complete Meghalaya trek guide with booking.",
      "property"
    );
    setMeta("og:type", "article", "property");
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1608889176923-3c87f225f53c",
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
      window.location.origin + "/blog/meghalaya-living-root-bridge-trek"
    );

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Meghalaya Living Root Bridge Trek 2025 | Complete Guide & Booking",
      description:
        "Complete guide to Meghalaya Living Root Bridge and Double Decker Bridge trek with routes, safety & travel tips.",
      image: ["https://images.unsplash.com/photo-1608889176923-3c87f225f53c"],
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
            : "https://yourwebsite.com/blog/meghalaya-living-root-bridge-trek",
      },
    };

    let script = document.getElementById("meghalaya-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "meghalaya-schema";
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
          src="https://images.unsplash.com/photo-1608889176923-3c87f225f53c"
          alt="Meghalaya Living Root Bridge Trek"
          className="w-full h-[480px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Meghalaya Living Root Bridge Trek 2025
            </h1>
            <p className="mt-3 text-lg">
              Walk on bridges grown by nature — the legendary Double Decker Root Bridge.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book Meghalaya Trek on WhatsApp
              </a>
              <a
                href="#trek"
                className="border border-white px-6 py-3 rounded-lg"
              >
                View Trek Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ INTRO */}
      <section className="mt-16 text-lg">
        <h2 className="text-3xl font-bold mb-4">
          Why Meghalaya’s Living Root Bridges Are a Natural Wonder
        </h2>
        <p>
          Meghalaya is home to the only bridges on Earth that are grown, not built. Created by the Khasi tribe using the roots of rubber fig trees, these bridges grow stronger every year and survive powerful monsoon floods.
        </p>
      </section>

      {/* ✅ TREK DETAILS */}
      <section id="trek" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Double Decker Root Bridge Trek (Nongriat)
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Location:</strong> Nongriat Village near Cherrapunji</li>
          <li><strong>Steps:</strong> Approx 3,500 stone steps</li>
          <li><strong>Difficulty:</strong> Moderate to Hard</li>
          <li><strong>Time Required:</strong> 4–6 hours round trip</li>
          <li><strong>Best Start Time:</strong> Before 8 AM</li>
        </ul>
      </section>

      {/* ✅ EASY BRIDGES */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Easy Root Bridges for Casual Visitors
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Riwai Root Bridge:</strong> Near Mawlynnong, 5-minute walk</li>
          <li><strong>Mawsaw Bridge:</strong> Less crowded and scenic</li>
        </ul>
      </section>

      {/* ✅ BEST TIME */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Best Time to Visit Living Root Bridges
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>October–March:</strong> Best season for trekking</li>
          <li><strong>April–May:</strong> Warm but manageable</li>
          <li><strong>June–September:</strong> Heavy monsoon, risky treks</li>
        </ul>
      </section>

      {/* ✅ TREK SAFETY */}
      <section className="mt-16 bg-yellow-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-yellow-700">
          Trek Safety & Travel Rules
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Wear proper trekking shoes with grip</li>
          <li>Carry rainwear and flashlight</li>
          <li>Start early to avoid exhaustion</li>
          <li>Never damage Living Root Bridges</li>
        </ul>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Meghalaya Root Bridge Trek FAQs
        </h2>

        {[
          ["Is the Double Decker Root Bridge difficult?", "Yes, it is physically demanding with 3,500 steep steps."],
          ["Is it safe for beginners?", "Yes, with proper fitness and early start."],
          ["Do I need a guide?", "Recommended for first-timers."],
          ["Is it open all year?", "Closed mostly during heavy monsoon."],
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
          Want a Guided Meghalaya Living Root Bridge Trek?
        </h3>
        <p className="mt-2 text-green-200">
          Transport, local guide & village accommodation available.
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
        © {new Date().getFullYear()} — BharatMile | Trekking & Adventure Travel
      </footer>
    </main>
  );
}

