// src/blogs/JaisalmerDesert.jsx
import React, { useEffect } from "react";

export default function JaisalmerDesert() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristAttraction",
        name: "Jaisalmer Desert Camping",
        description:
          "Luxury desert camping near Jaisalmer with private tents, camel safaris, folk performances, stargazing and gourmet Rajasthani dinners.",
        image: ["/images/jaisalmer-hero.jpg"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaisalmer",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Jaisalmer desert camping safe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, luxury desert camps in Jaisalmer are fully secured with trained staff, fenced areas, family-friendly tents and medical assistance.",
            },
          },
          {
            "@type": "Question",
            name: "Best time for Jaisalmer desert camping?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "October to March is the best season. Summers are extremely hot and monsoons are unpredictable.",
            },
          },
          {
            "@type": "Question",
            name: "Are veg meals available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — veg, Jain, vegan and gluten-free meals are available on request.",
            },
          },
        ],
      },
    ],
  };

  useEffect(() => {
    document.title =
      "Jaisalmer Desert Camping: Luxury Night Under The Stars | BharatMile";

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
      "Experience luxury Jaisalmer desert camping with private tents, camel safaris, cultural performances, stargazing and gourmet Rajasthani dinners."
    );

    setMeta(
      "og:title",
      "Jaisalmer Desert Camping: Luxury Night Under the Stars",
      "property"
    );

    setMeta(
      "og:description",
      "Book a luxury desert camp in Jaisalmer with camel safari, folk music, bonfire dinner and star gazing."
    );

    setMeta("og:type", "article", "property");
    setMeta("og:image", "/images/jaisalmer-hero.jpg", "property");
    setMeta("twitter:card", "summary_large_image");

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);

    let script = document.getElementById("jaisalmer-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "jaisalmer-schema";
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
          src="/images/jaisalmer-hero.jpg"
          alt="Luxury desert camping in Jaisalmer"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-8 text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Jaisalmer Desert Camping
            </h1>
            <p className="mt-3 text-lg">
              Spend a Million-Star Night under the Thar Desert sky with luxury
              tents, camel safari, folk music, bonfire dinner & stargazing.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book on WhatsApp
              </a>
              <a
                href="#itinerary"
                className="border border-white px-6 py-3 rounded-lg"
              >
                See Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ HIGHLIGHTS */}
      <section className="mt-14 grid md:grid-cols-3 gap-6">
        {[
          ["Luxury Swiss Tents", "Private verandas, king-size beds & attached washrooms"],
          ["Camel Safari", "Sunset rides across golden Thar dunes"],
          ["Cultural Evening", "Folk dance, music & royal bonfire dinner"],
        ].map((item, i) => (
          <div key={i} className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold">{item[0]}</h3>
            <p className="text-gray-600 mt-2">{item[1]}</p>
          </div>
        ))}
      </section>

      {/* ✅ ITINERARY */}
      <section id="itinerary" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">24-Hour Desert Experience Itinerary</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>Pickup from Jaisalmer city → Welcome drinks at camp</li>
          <li>Sunset camel safari across Sam Sand Dunes</li>
          <li>Folk dance, live music & candle-lit dinner</li>
          <li>Stargazing & overnight luxury tent stay</li>
          <li>Sunrise tea & breakfast → drop back to city</li>
        </ol>
      </section>

      {/* ✅ GALLERY */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Desert Camp Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src={`/images/gallery-${i + 1}.jpg`}
              alt={`Jaisalmer desert camp ${i + 1}`}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

        {[
          ["Is camping safe?", "Yes, fully secured with trained staff & medical support."],
          ["Best season?", "October to March is ideal."],
          ["Veg food available?", "Yes, all veg & Jain meals available."],
          ["Is electricity provided?", "Limited eco-friendly power supply."],
        ].map((faq, i) => (
          <details key={i} className="border p-4 rounded-lg mb-3">
            <summary className="font-medium cursor-pointer">{faq[0]}</summary>
            <p className="mt-2 text-gray-700">{faq[1]}</p>
          </details>
        ))}
      </section>

      {/* ✅ WHATSAPP FINAL CTA */}
      <section className="mt-20 bg-green-600 text-white p-8 rounded-xl text-center shadow-xl">
        <h3 className="text-2xl font-semibold">
          Ready for the Ultimate Desert Experience?
        </h3>
        <p className="mt-2 text-green-100">
          Get instant price, availability & packages directly on WhatsApp.
        </p>

        <a
          href="https://wa.me/919636974688"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
        >
          Book Now on WhatsApp
        </a>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — BharatMile | Rajasthan Luxury Experiences
      </footer>
    </main>
  );
}
