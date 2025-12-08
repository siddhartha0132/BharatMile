import React, { useEffect } from "react";

export default function Rishikesh() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rishikesh Travel Guide 2025: Yoga Capital, Rafting, Temples & Best Time to Visit",
    description:
      "Complete Rishikesh travel guide with rafting season, best yoga ashrams, Ganga Aarti, Tapovan cafés, adventure sports, safety tips and best time to visit.",
    image: ["https://yourwebsite.com/images/rishikesh-ram-jhula.jpg"],
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
      "@id": "https://yourwebsite.com/blog/rishikesh-travel-guide",
    },
  };

  useEffect(() => {
    document.title =
      "Rishikesh Travel Guide 2025 | Yoga, Rafting, Ganga Aarti & Adventure";

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
      "Complete Rishikesh travel guide with rafting season, yoga ashrams, temples, Ganga Aarti, best cafes, safety tips and best time to visit."
    );

    set(
      "keywords",
      "Rishikesh travel guide, Rishikesh rafting, Rishikesh yoga ashrams, Ganga Aarti Rishikesh, Tapovan cafes, Rishikesh adventure sports"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Explore Rishikesh with this complete yoga, rafting and spiritual travel guide.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/rishikesh-ram-jhula.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "Best Rishikesh travel guide covering rafting season, yoga retreats, Ganga Aarti and adventure sports."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/rishikesh-ram-jhula.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/blog/rishikesh-travel-guide";

    let script = document.getElementById("rishikesh-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "rishikesh-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-extrabold text-teal-700 mb-4">
        Rishikesh Travel Guide 2025: Yoga, Rafting, Ganga Aarti & Adventure
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Rishikesh is known worldwide as the <b>Yoga Capital of the World</b> and India’s top
        river-rafting destination. This guide covers yoga ashrams, rafting season, temples,
        Tapovan cafés, adventure sports and spiritual experiences by the River Ganga.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Why Visit Rishikesh?</h2>
        <p className="mt-2">
          Rishikesh offers a rare mix of deep spirituality and high-adrenaline adventure.
          One moment you’re meditating in an ashram, the next you’re battling rapids on the Ganga.
          Whether you seek peace, fitness, or thrill — Rishikesh delivers all.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Best Time to Visit Rishikesh</h2>
        <p className="mt-2">
          The best time to visit is from <b>September to May</b>. Spring and autumn are ideal for
          rafting. Summer is great for yoga retreats. July–August rafting is closed due to monsoon.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Top Things to Do in Rishikesh</h2>
        <ul className="list-disc list-inside mt-3">
          <li>White Water Rafting (Shivpuri, Marine Drive)</li>
          <li>Attend Ganga Aarti at Triveni Ghat</li>
          <li>Visit Laxman Jhula & Ram Jhula</li>
          <li>Yoga & Meditation Retreats</li>
          <li>Bungee Jumping & Cliff Jumping</li>
          <li>Tapovan Cafes & Riverside Walks</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Rafting Routes & Difficulty</h2>
        <p className="mt-2">
          Shivpuri to Rishikesh (16 km) is the most popular beginner route. Marine Drive (26 km)
          is recommended only for experienced rafters.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Yoga & Ashrams</h2>
        <p className="mt-2">
          Parmarth Niketan, Sivananda Ashram and Tapovan yoga schools are the most popular.
          Always choose Yoga Alliance certified schools for safety and quality.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">Is Rishikesh Vegetarian?</h2>
        <p className="mt-2">
          Yes, Rishikesh is strictly vegetarian. Alcohol and non-veg food are prohibited
          within city limits due to its religious importance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">How Many Days Are Enough?</h2>
        <p className="mt-2">2–3 days for adventure + spirituality. 5–7 days for yoga courses.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold">What to Pack</h2>
        <p className="mt-2">
          Comfortable clothes, sports shoes, swimwear, sunscreen, yoga mat (if training),
          light jacket for evenings and ID proof.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <p className="mt-3"><b>Is rafting safe in Rishikesh?</b> Yes, when done with licensed operators and safety gear.</p>

        <p className="mt-3"><b>Can beginners do rafting?</b> Yes, Brahmpuri and Shivpuri routes are beginner-friendly.</p>

        <p className="mt-3"><b>Is Rishikesh expensive?</b> No, it suits budget, mid-range and luxury travellers.</p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile Travel Guides
      </footer>

    </main>
  );
}
