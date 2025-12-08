// src/blogs/ManaliToLeh.jsx
import React, { useEffect } from "react";

export default function ManaliToLeh() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Manali to Leh Road Trip Guide 2025 | Routes, Permits & Bike Tour Booking",
    description:
      "Complete Manali to Leh road trip guide with updated routes, bike & car tips, permits, AMS safety, best time and tour booking.",
    image: ["https://images.unsplash.com/photo-1548013146-72479768bada"],
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
      "@id": typeof window !== "undefined" ? window.location.href : "",
    },
  };

  useEffect(() => {
    document.title =
      "Manali to Leh Road Trip 2025 | Bike Tour, Routes, Permits & Safety | BharatMile";

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
      "Ultimate Manali to Leh road trip guide (2025): bike & car routes, Rohtang permits, fuel stops, AMS safety, packing list & tour booking."
    );

    setMeta(
      "keywords",
      "Manali to Leh road trip, Manali Leh bike tour, Manali Leh route map, Leh Ladakh bike trip, Rohtang permit, Leh bike package"
    );

    setMeta(
      "og:title",
      "Manali to Leh Road Trip Guide 2025 | Bike & SUV Routes",
      "property"
    );
    setMeta(
      "og:description",
      "Plan your Manali to Leh bike or car trip with permits, safety tips & real route planning.",
      "property"
    );
    setMeta("og:type", "article", "property");
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1548013146-72479768bada",
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
      window.location.origin + "/blog/manali-to-leh-road-trip-guide"
    );

    let script = document.getElementById("manali-leh-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "manali-leh-schema";
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
          src="https://images.unsplash.com/photo-1548013146-72479768bada"
          alt="Manali to Leh Bike Trip"
          className="w-full h-[480px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Manali to Leh Road Trip 2025
            </h1>
            <p className="mt-3 text-lg">
              India’s most legendary bike & SUV adventure — routes, permits, safety & booking.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book Leh Bike Trip on WhatsApp
              </a>
              <a
                href="#routes"
                className="border border-white px-6 py-3 rounded-lg"
              >
                View Route
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ INTRO */}
      <section className="mt-16 text-lg">
        <h2 className="text-3xl font-bold mb-4">
          Why the Manali to Leh Road Trip Is Legendary
        </h2>
        <p>
          The Manali–Leh highway is one of the world’s highest motorable adventure routes, crossing snow deserts, river crossings, glaciers and three 17,000+ ft mountain passes. It is the ultimate test of endurance, planning and spirit for bikers and road trippers.
        </p>
      </section>

      {/* ✅ ROUTES */}
      <section id="routes" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Manali to Leh Route Breakdown (2-Day Safe Plan)
        </h2>

        <ul className="space-y-4 text-lg list-disc list-inside">
          <li><strong>Day 1:</strong> Manali → Atal Tunnel → Keylong/Jispa (140 km)</li>
          <li><strong>Day 2:</strong> Keylong → Baralacha La → Tanglang La → Leh (330 km)</li>
        </ul>
      </section>

      {/* ✅ PERMITS */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Important Permits Required
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Rohtang Pass Permit</strong> (if bypass not used)</li>
          <li><strong>Inner Line Permit (ILP)</strong> for Nubra, Pangong & Tso Moriri</li>
        </ul>
      </section>

      {/* ✅ AMS SAFETY */}
      <section className="mt-16 bg-red-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-red-600">
          AMS & Altitude Safety (Very Important)
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Always stay overnight at Keylong/Jispa</li>
          <li>Drink 4–5 liters of water daily</li>
          <li>Avoid alcohol & smoking</li>
          <li>Use Diamox only on doctor advice</li>
          <li>Carry portable oxygen canisters</li>
        </ul>
      </section>

      {/* ✅ BEST VEHICLES */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Best Vehicles for Manali to Leh
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Royal Enfield Himalayan / Classic 350</li>
          <li>Adventure Bikes (KTM ADV, BMW GS)</li>
          <li>4x4 SUVs – Thar, Scorpio, Fortuner</li>
        </ul>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        {[
          ["Best month for Manali Leh trip?", "Late August to September is the safest & most scenic."],
          ["Is bike better than car?", "Bike gives adventure, car gives comfort & safety."],
          ["Is oxygen required?", "Not mandatory but strongly recommended."],
          ["Is solo travel safe?", "Yes, but beginners should go with a group."],
        ].map((faq, i) => (
          <details key={i} className="border p-4 rounded-lg mb-4">
            <summary className="font-medium cursor-pointer">
              {faq[0]}
            </summary>
            <p className="mt-2 text-gray-700">{faq[1]}</p>
          </details>
        ))}
      </section>

      {/* ✅ WHATSAPP FINAL CTA */}
      <section className="mt-20 bg-indigo-700 text-white p-10 rounded-xl text-center shadow-xl">
        <h3 className="text-3xl font-bold">
          Want a Complete Leh Bike Trip Package?
        </h3>
        <p className="mt-2 text-indigo-200">
          Hotels, permits, bikes, backup vehicle & guide included.
        </p>

        <a
          href="https://wa.me/919636974688"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
        >
          Chat on WhatsApp Now
        </a>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — BharatMile | Leh Ladakh Adventure Travel
      </footer>
    </main>
  );
}
