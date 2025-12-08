import React, { useEffect } from "react";

export default function Pondicherry() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pondicherry Travel Guide 2025: Best Places, Beaches, Cafes & Auroville",
    description: "Complete Pondicherry travel guide with best places to visit, beaches, White Town walk, Auroville trip, food, cafes, hotels and best time to visit.",
    image: ["https://yourwebsite.com/images/pondicherry-white-town.jpg"],
    author: { "@type": "Organization", name: "BharatMile" },
    publisher: {
      "@type": "Organization",
      name: "BharatMile",
      logo: {
        "@type": "ImageObject",
        url: "https://yourwebsite.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://yourwebsite.com/blog/pondicherry-travel-guide",
    },
  };

  useEffect(() => {
    document.title =
      "Pondicherry Travel Guide 2025 | Best Places, Beaches, Cafes & Auroville";

    const set = (n, c, a = "name") => {
      let e = document.querySelector(`meta[${a}="${n}"]`);
      if (!e) {
        e = document.createElement("meta");
        e.setAttribute(a, n);
        document.head.appendChild(e);
      }
      e.setAttribute("content", c);
    };

    set(
      "description",
      "Complete Pondicherry travel guide 2025 with best beaches, White Town walk, French cafes, Auroville trip, hotels, shopping and travel tips."
    );

    set(
      "keywords",
      "Pondicherry travel guide, Pondicherry places to visit, Pondicherry beaches, Auroville guide, White Town Pondicherry, Pondicherry cafes, Puducherry tourism"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Explore Pondicherry with this complete guide covering beaches, Auroville, food, hotels and sightseeing.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/pondicherry-white-town.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "Best Pondicherry travel guide with beaches, cafes, White Town and Auroville trip.",
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/pondicherry-white-town.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/blog/pondicherry-travel-guide";

    let script = document.getElementById("pondicherry-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "pondicherry-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-extrabold text-red-700 mb-4">
        Pondicherry Travel Guide 2025: French Colony, Beaches & Auroville
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Pondicherry (Puducherry) is India’s most beautiful French-style coastal town.
        This guide covers White Town walks, beaches, cafes, Auroville, shopping,
        hotels and budget travel tips.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Why Pondicherry is Special</h2>
        <p className="mt-2">
          Pondicherry was a French colony till 1954. Even today you’ll see pastel
          streets, European cafés, churches, cycle lanes and peaceful sea views.
          It’s one of India’s best weekend destinations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Top Places to Visit in Pondicherry</h2>
        <ul className="list-disc list-inside mt-3">
          <li>White Town & Promenade</li>
          <li>Rock Beach</li>
          <li>Aurobindo Ashram</li>
          <li>Auroville & Matrimandir</li>
          <li>Paradise Beach</li>
          <li>Serenity Beach</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Best Time to Visit</h2>
        <p className="mt-2">
          October to March is the best season. Summers are hot while monsoon
          is scenic with fewer tourists.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Best Cafes & Food Spots</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Baker Street</li>
          <li>Le Café (Sea Facing)</li>
          <li>Zuka Chocolates</li>
          <li>Coromandel Cafe</li>
          <li>Indian Coffee House</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">How Many Days Needed?</h2>
        <p className="mt-2">Minimum 2 days, ideal 3 days for full experience.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Best Way to Explore</h2>
        <p className="mt-2">
          Rent a scooty or bicycle for White Town. Autos are also easily available.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <p className="mt-3"><b>Is Pondicherry good for couples?</b> Yes, it is one of the most romantic coastal cities in India.</p>

        <p className="mt-3"><b>Is Auroville entry free?</b> Yes, Matrimandir viewing is free but inner chamber needs booking.</p>

        <p className="mt-3"><b>Is alcohol cheap in Pondicherry?</b> Yes, alcohol is cheaper due to low tax.</p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile Travel Guides
      </footer>

    </main>
  );
}
