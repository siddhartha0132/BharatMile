import React, { useEffect } from "react";

export default function SikkimSilk() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sikkim Silk Route Travel Guide 2025: Zuluk, Nathang Valley, Kupup Lake & Permit Details",
    description:
      "Complete Sikkim Silk Route travel guide with Zuluk, Nathang Valley, Kupup Lake, permits, best season, homestays, itinerary, safety tips and photography spots.",
    image: ["https://yourwebsite.com/images/sikkim-silk-route.jpg"],
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
      "@id": "https://yourwebsite.com/blog/sikkim-silk-route-travel-guide",
    },
  };

  useEffect(() => {
    document.title =
      "Sikkim Silk Route Travel Guide 2025 | Zuluk, Nathang Valley, Kupup Lake & Permits";

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
      "Explore Sikkim Silk Route with Zuluk, Nathang Valley, Kupup Lake, permits, best season, homestays, budget, safety tips & 2–7 day itineraries."
    );

    set(
      "keywords",
      "Sikkim Silk Route, Zuluk, Nathang Valley, Kupup Lake, Sikkim road trip, Silk Route permits, Sikkim travel guide, East Sikkim itinerary"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Plan your Sikkim Silk Route trip with permits, homestays, routes, packing list and photography tips.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/sikkim-silk-route.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "Complete Sikkim Silk Route travel guide with itinerary, best season, permits and budget."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/sikkim-silk-route.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/blog/sikkim-silk-route-travel-guide";

    let script = document.getElementById("sikkim-silk-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "sikkim-silk-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
        Sikkim Silk Route Travel Guide 2025: Zuluk, Nathang Valley & Kupup Lake
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        The Sikkim Silk Route is one of India’s most scenic high altitude road trips featuring
        Zuluk, Nathang Valley, Kupup Lake, ancient monasteries and Himalayan sunrises. This guide
        covers permits, itinerary, homestays, best season, safety and photography tips.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Why Visit the Sikkim Silk Route?</h2>
        <p className="mt-2">
          The Silk Route offers serpentine mountain roads, peaceful villages, icy lakes and
          breathtaking Himalayan views. Unlike crowded hill stations, this region is raw,
          untouched and perfect for slow, immersive travel.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Best Time to Visit Sikkim Silk Route</h2>
        <ul className="list-disc list-inside mt-3">
          <li>April to June – Clear skies, rhododendrons, ideal roads</li>
          <li>September to November – Best Himalayan visibility & photography</li>
          <li>December to February – Snowfall (experienced drivers only)</li>
          <li>July & August – Avoid due to landslides</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Permits Required for Silk Route</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Inner Line Permit (ILP)</li>
          <li>Restricted Area Permit (for Nathang & Kupup)</li>
          <li>Nathu La Pass Permit (if open)</li>
        </ul>
        <p className="mt-2">
          Permits are arranged through registered travel agents or Sikkim Tourism counters.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Top Places on the Silk Route</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Zuluk – Serpentine sunrise viewpoints</li>
          <li>Nathang Valley – High altitude cold desert</li>
          <li>Kupup Lake – Elephant-shaped lake</li>
          <li>Thambi View Point – Panoramic Himalayan views</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Suggested Itinerary (4 Days)</h2>
        <p className="mt-2">
          Day 1: Gangtok → Zuluk  
          Day 2: Zuluk → Nathang  
          Day 3: Nathang → Kupup Lake → Return  
          Day 4: Return to Gangtok
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Homestays & Accommodation</h2>
        <p className="mt-2">
          Zuluk and Nathang offer warm family homestays with local food and mountain views.
          Luxury hotels are very limited — this is a raw travel destination.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">What to Pack</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Heavy jackets & thermals</li>
          <li>Good trekking shoes</li>
          <li>Power bank & flashlight</li>
          <li>Altitude sickness medicines</li>
          <li>ID proofs & permit copies</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Photography Tips</h2>
        <p className="mt-2">
          Best sunrise is at Zuluk loops, best reflections at Kupup Lake, and layered mountains
          at Nathang Valley during golden hour.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <p className="mt-3"><b>Is Sikkim Silk Route safe?</b> Yes, with experienced drivers and proper permits.</p>

        <p className="mt-3"><b>Is it suitable for families?</b> Yes, but children should acclimatize properly.</p>

        <p className="mt-3"><b>Can I self-drive?</b> Not recommended without mountain driving experience.</p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile Travel Guides
      </footer>
    </main>
  );
}
