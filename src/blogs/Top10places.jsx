import React, { useEffect } from "react";

export default function Top10places() {

  const places = [
    { rank: 1, title: "Varanasi – The Spiritual Capital of India", region: "North India", bestFor: "Spirituality, Culture, Photography", highlight: "Witness the magical Ganga Aarti, walk through timeless alleys, or take a sunrise boat ride on the sacred Ganges." },
    { rank: 2, title: "Jaipur – The Royal Pink City", region: "Rajasthan", bestFor: "History, Architecture, Shopping", highlight: "A vibrant mix of history and culture. Visit Hawa Mahal, Amber Fort, and the bustling bazaars for royal charm." },
    { rank: 3, title: "Ladakh – Heaven for Adventure Lovers", region: "Himalayas", bestFor: "Adventure, Scenery, Monasteries", highlight: "Explore Pangong Lake, Nubra Valley, and ancient monasteries surrounded by the mighty Himalayas." },
    { rank: 4, title: "Goa – Beaches, Nightlife & Serenity", region: "West Coast", bestFor: "Relaxation, Beaches, Nightlife", highlight: "The perfect escape. Whether you want peaceful beaches or buzzing nightlife, Goa has something for everyone." },
    { rank: 5, title: "Kerala Backwaters – God’s Own Country", region: "South India", bestFor: "Houseboats, Slow Travel, Nature", highlight: "Take a houseboat ride through palm-fringed canals and peaceful villages." },
    { rank: 6, title: "Agra – Home of the Taj Mahal", region: "North India", bestFor: "World Heritage, Architecture, History", highlight: "The Taj Mahal is a world wonder for a reason—seeing it in real life is unforgettable." },
    { rank: 7, title: "Meghalaya – The Abode of Clouds", region: "Northeast India", bestFor: "Nature, Trekking, Root Bridges", highlight: "Living root bridges, waterfalls, and rain-rich forests make it magical." },
    { rank: 8, title: "Rishikesh – Yoga, Adventure & Peace", region: "Himalayas", bestFor: "Yoga, Rafting, Meditation", highlight: "The yoga capital of the world with holy Ganga and adventure sports." },
    { rank: 9, title: "Udaipur – The City of Lakes", region: "Rajasthan", bestFor: "Romance, Palaces, Lakes", highlight: "Serene lakes, royal palaces and rooftop dining define its beauty." },
    { rank: 10, title: "Andaman Islands – Tropical Paradise", region: "Bay of Bengal", bestFor: "Diving, Beaches, Water Sports", highlight: "Turquoise waters, coral reefs, and white sand beaches." },
  ];

  /* ================= SEO META + JSON-LD ================= */
  useEffect(() => {
    document.title = "Top 10 Places to Visit in India Before You Die (2025)";

    const set = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    set(
      "description",
      "Top 10 places to visit in India before you die (2025 guide). Covers Varanasi, Jaipur, Ladakh, Goa, Kerala, Taj Mahal, Meghalaya and more."
    );

    set(
      "keywords",
      "Top 10 places to visit in India, India travel bucket list, best places in India 2025, Varanasi, Jaipur, Goa, Kerala, Ladakh"
    );

    // Open Graph
    set("og:title", document.title, "property");
    set(
      "og:description",
      "The definitive 2025 list of India’s top 10 travel destinations covering culture, beaches, mountains, heritage and spirituality.",
      "property"
    );
    set("og:type", "article", "property");
    set("og:image", "https://yourwebsite.com/images/b1.jpg", "property");

    // Twitter
    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "India bucket list: Top 10 must-visit places for every traveler."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/b1.jpg"
    );

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/india-top-10-places";

    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Top 10 Places to Visit in India",
      "itemListElement": places.map((p) => ({
        "@type": "ListItem",
        position: p.rank,
        name: p.title,
        description: `${p.highlight} (Best for: ${p.bestFor})`,
      })),
    };

    let script = document.getElementById("top10-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "top10-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">

      <img
        src="/images/b1.jpg"
        alt="Top 10 Places to Visit in India"
        className="rounded-xl w-full mb-8 shadow-lg"
      />

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        Top 10 Places to Visit in India Before You Die 🌍
      </h1>

      <p className="text-lg bg-indigo-50 p-4 rounded border-l-4 border-indigo-600 mb-8">
        This hand-picked **India travel bucket list** covers spirituality, royal cities, beaches, adventure zones and hidden nature destinations — updated for 2025.
      </p>

      {/* SUMMARY TABLE */}
      <div className="overflow-x-auto shadow-md rounded-lg mb-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-3 py-2">Rank</th>
              <th className="px-3 py-2">Destination</th>
              <th className="px-3 py-2">Best For</th>
              <th className="px-3 py-2">Region</th>
            </tr>
          </thead>
          <tbody>
            {places.map((p) => (
              <tr key={p.rank} className="border-b">
                <td className="px-3 py-2 font-bold text-indigo-600">{p.rank}</td>
                <td className="px-3 py-2 font-medium">{p.title}</td>
                <td className="px-3 py-2">{p.bestFor}</td>
                <td className="px-3 py-2">{p.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DETAILED LIST */}
      <div className="space-y-10">
        {places.map((p) => (
          <section key={p.rank}>
            <h2 className="text-2xl font-bold">
              {p.rank}. {p.title}
            </h2>
            <p className="text-indigo-600 text-sm mt-1">
              Region: {p.region} • Best for: {p.bestFor}
            </p>
            <p className="mt-3 leading-relaxed">{p.highlight}</p>
          </section>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-4">
        Final Thoughts
      </h2>
      <p>
        These ten destinations together represent the soul of India. Start with
        any one — and your love for India will only grow deeper.
      </p>

      <p className="mt-4">
        Read more guides on{" "}
        <a
          href="/blogs"
          className="text-indigo-600 underline font-medium"
        >
          BharatMile Blogs
        </a>
        .
      </p>

    </main>
  );
}
