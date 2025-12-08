import React, { useEffect } from "react";

export default function RannofKutch() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rann of Kutch Travel Guide 2025: White Desert, Rann Utsav, Tent City & Permit",
    description:
      "Complete Rann of Kutch travel guide with Rann Utsav dates, full moon visit, Tent City stay, permit process, best time, Bhuj travel and sightseeing.",
    image: ["https://yourwebsite.com/images/kutch-white-desert-full-moon.jpg"],
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
      "@id": "https://yourwebsite.com/blog/rann-of-kutch-travel-guide",
    },
  };

  useEffect(() => {
    document.title =
      "Rann of Kutch Travel Guide 2025 | Rann Utsav, White Desert & Tent City";

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
      "Complete Rann of Kutch travel guide with Rann Utsav dates, Tent City stay, White Desert visit, permit process, Bhuj sightseeing and best time to travel."
    );

    set(
      "keywords",
      "Rann of Kutch travel guide, Rann Utsav 2025, White Rann Gujarat, Rann of Kutch tent city, Bhuj sightseeing, Gujarat desert festival"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Explore the White Desert of Gujarat with this complete Rann of Kutch travel guide including Rann Utsav, tent stay and permits.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/kutch-white-desert-full-moon.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "Best Rann of Kutch travel guide with Rann Utsav, Tent City, full moon visit and permit steps."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/kutch-white-desert-full-moon.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/blog/rann-of-kutch-travel-guide";

    let script = document.getElementById("rann-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "rann-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-extrabold text-orange-700 mb-4">
        Rann of Kutch Travel Guide 2025: White Desert, Rann Utsav & Tent City
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Rann of Kutch is India’s largest white salt desert located in Gujarat. This guide covers
        Rann Utsav festival, best time to visit, Tent City stay, permit rules, Bhuj tourism
        and full moon visit tips.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Why Visit Rann of Kutch?</h2>
        <p className="mt-2">
          During winter, the Rann transforms into a massive white salt desert stretching endlessly.
          The famous <b>Rann Utsav</b> festival turns it into a cultural celebration with music,
          dance, handicrafts, adventure sports and luxury Tent City stays.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Best Time to Visit Rann of Kutch</h2>
        <p className="mt-2">
          October to February is the best travel period. Full moon nights are the most spectacular
          when the white desert glows under moonlight.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Top Attractions</h2>
        <ul className="list-disc list-inside mt-3">
          <li>White Rann Salt Desert</li>
          <li>Rann Utsav Cultural Festival</li>
          <li>Dhordo Tent City</li>
          <li>Kalo Dungar (Black Hill)</li>
          <li>India Bridge</li>
          <li>Bhuj City & Aina Mahal</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Rann of Kutch Permit Process</h2>
        <p className="mt-2">
          Since the White Rann is near the India–Pakistan border, every visitor must carry a permit.
          This can be obtained online or at the Bhirandiyara checkpoint near Bhuj. A valid photo ID
          is mandatory for all visitors.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Where to Stay</h2>
        <p className="mt-2">
          Most tourists stay at the official Tent City in Dhordo which includes food, cultural
          programs and White Rann visits. Budget travellers can stay in Bhuj hotels and homestays.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">How Many Days Needed?</h2>
        <p className="mt-2">Minimum 2 days, ideal 3 days for full festival and sightseeing.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">What to Pack</h2>
        <p className="mt-2">
          Heavy winter jackets, warm socks, sunglasses, sunscreen, comfortable shoes and scarf
          are must-carry items due to cold nights and bright salt reflection.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <p className="mt-3"><b>Is full moon visit necessary?</b> Not mandatory, but highly recommended for best experience.</p>

        <p className="mt-3"><b>Is Rann Utsav expensive?</b> Tent City is premium but Bhuj hotels offer budget options.</p>

        <p className="mt-3"><b>Is Rann of Kutch safe?</b> Yes, very safe with controlled tourism and permits.</p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile Travel Guides
      </footer>

    </main>
  );
}
