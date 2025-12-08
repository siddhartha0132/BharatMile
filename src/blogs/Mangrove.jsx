// src/blogs/Mangrove.jsx
import React, { useEffect } from "react";

export default function Mangrove() {
  useEffect(() => {
    document.title =
      "Sundarbans Mangrove Boat Safari 2025 | Tiger Trip, Routes, Price & Booking | BharatMile";

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
      "Complete Sundarbans mangrove boat safari guide 2025: tiger spotting chances, best routes, watchtowers, prices, safety tips & WhatsApp tour booking."
    );

    setMeta(
      "keywords",
      "Sundarbans boat safari, Sundarbans tiger tour, mangrove forest India, Sundarbans tour booking, Sundarbans wildlife safari price"
    );

    setMeta(
      "og:title",
      "Sundarbans Mangrove Boat Safari 2025 | Tiger Tour & Booking",
      "property"
    );
    setMeta(
      "og:description",
      "Plan your Sundarbans boat safari with tiger spotting tips, best months & verified tour booking.",
      "property"
    );
    setMeta("og:type", "article", "property");
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1600275669439-14eaad2e4c68",
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
      window.location.origin + "/blog/sundarbans-mangrove-boat-safari"
    );

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Sundarbans Mangrove Boat Safari 2025 | Complete Guide & Booking",
      description:
        "Complete Sundarbans tiger safari & mangrove boat tour guide with routes, prices, wildlife expectations and safety.",
      image: ["https://images.unsplash.com/photo-1600275669439-14eaad2e4c68"],
      author: { "@type": "Organization", name: "BharatMile Editorial" },
      publisher: {
        "@type": "Organization",
        name: "BharatMile",
        logo: {
          "@type": "ImageObject",
          url: "/images/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          typeof window !== "undefined"
            ? window.location.href
            : "https://yourwebsite.com/blog/sundarbans-mangrove-boat-safari",
      },
    };

    let script = document.getElementById("sundarbans-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "sundarbans-schema";
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
          src="https://images.unsplash.com/photo-1600275669439-14eaad2e4c68"
          alt="Sundarbans Mangrove Boat Safari"
          className="w-full h-[480px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Sundarbans Mangrove Boat Safari 2025
            </h1>
            <p className="mt-3 text-lg">
              India’s most mysterious tiger & mangrove forest adventure.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book Sundarbans Safari on WhatsApp
              </a>
              <a
                href="#routes"
                className="border border-white px-6 py-3 rounded-lg"
              >
                View Safari Routes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ INTRO */}
      <section className="mt-16 text-lg">
        <h2 className="text-3xl font-bold mb-4">
          Why the Sundarbans Is the World’s Most Unique Mangrove Forest
        </h2>
        <p>
          The Sundarbans is the largest tidal mangrove forest on Earth and the only place where Royal Bengal Tigers swim between islands. This UNESCO World Heritage Site is a natural maze of rivers, creeks and islands — explored only by boat safaris.
        </p>
      </section>

      {/* ✅ ROUTES */}
      <section id="routes" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Sundarbans Safari Routes & Watchtowers
        </h2>

        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>✅ Sajnekhali Watch Tower (best views)</li>
          <li>✅ Sudhanyakhali Watch Tower (tiger trail)</li>
          <li>✅ Dobanki Canopy Walk</li>
          <li>✅ Panchamukhani River Confluence</li>
        </ul>
      </section>

      {/* ✅ BEST TIME */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Best Time to Visit Sundarbans
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>November–February:</strong> Best weather & wildlife</li>
          <li><strong>March:</strong> Hot but higher tiger movement</li>
          <li><strong>June–September:</strong> Monsoon — safaris mostly closed</li>
        </ul>
      </section>

      {/* ✅ WILDLIFE */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Wildlife You May Spot
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Royal Bengal Tiger (rare but possible)</li>
          <li>Saltwater Crocodiles</li>
          <li>Spotted Deer</li>
          <li>Wild Boar</li>
          <li>Dolphins & Otters</li>
          <li>Kingfishers, Eagles & Herons</li>
        </ul>
      </section>

      {/* ✅ SAFETY */}
      <section className="mt-16 bg-yellow-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-yellow-700">
          Sundarbans Safety Rules
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Do not lean outside the boat</li>
          <li>Never disembark without forest permission</li>
          <li>No plastic or food dumping</li>
          <li>Follow forest guide instructions strictly</li>
        </ul>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Sundarbans Safari FAQs
        </h2>

        {[
          ["Can I definitely see a tiger?", "No, sightings are rare but possible with certified tours."],
          ["Is Sundarbans safe for families?", "Yes, with licensed boat operators."],
          ["Is one day enough?", "One day is basic, 2 days is recommended."],
          ["Do I need permits?", "Yes, forest permits are mandatory."],
        ].map((faq, i) => (
          <details key={i} className="border p-4 rounded-lg mb-4">
            <summary className="font-medium cursor-pointer">
              {faq[0]}
            </summary>
            <p className="mt-2 text-gray-700">{faq[1]}</p>
          </details>
        ))}
      </section>

      {/* ✅ FINAL WHATSAPP CTA */}
      <section className="mt-20 bg-green-700 text-white p-10 rounded-xl text-center shadow-xl">
        <h3 className="text-3xl font-bold">
          Want a Verified Sundarbans Boat Safari Package?
        </h3>
        <p className="mt-2 text-green-200">
          Transport, permits, meals & jungle guide included.
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
        © {new Date().getFullYear()} — BharatMile | Wildlife & Safari Travel
      </footer>
    </main>
  );
}
