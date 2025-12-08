// src/blogs/Ooty.jsx
import { useEffect } from "react";

export default function Ooty() {
  useEffect(() => {
    document.title =
      "Ooty Toy Train 2025 | Nilgiri Mountain Railway Tickets, Timings & Travel Guide | BharatMile";

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
      "Complete Ooty Toy Train (Nilgiri Mountain Railway) travel guide with latest 2025 timings, ticket booking tips, best seats, scenic routes and WhatsApp booking support."
    );

    setMeta(
      "keywords",
      "Ooty toy train, Nilgiri Mountain Railway tickets, Ooty toy train timings, Ooty travel guide, UNESCO toy train India"
    );

    setMeta(
      "og:title",
      "Ooty Toy Train 2025 | Nilgiri Mountain Railway Complete Guide",
      "property"
    );
    setMeta(
      "og:description",
      "Ride India’s most scenic UNESCO Toy Train through Nilgiri Hills — timings, booking, prices & travel tips.",
      "property"
    );
    setMeta("og:type", "article", "property");
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1600664939236-ea4c17823e0c",
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
      window.location.origin + "/blog/ooty-toy-train"
    );

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Ooty Toy Train 2025 | Nilgiri Mountain Railway Tickets, Timings & Travel Guide",
      description:
        "Complete Ooty Toy Train guide with timings, booking tips, best seats, scenic routes and UNESCO heritage journey details.",
      image: [
        "https://images.unsplash.com/photo-1600664939236-ea4c17823e0c",
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
            : "https://yourwebsite.com/blog/ooty-toy-train",
      },
    };

    let script = document.getElementById("ooty-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "ooty-schema";
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
          src="https://images.unsplash.com/photo-1600664939236-ea4c17823e0c"
          alt="Ooty Toy Train Nilgiri Railway"
          className="w-full h-[480px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Ooty Toy Train 2025
            </h1>
            <p className="mt-3 text-lg">
              India’s most scenic UNESCO mountain railway ride through Nilgiri Hills.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book Ooty Tour on WhatsApp
              </a>
              <a
                href="#details"
                className="border border-white px-6 py-3 rounded-lg"
              >
                View Train Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ INTRO */}
      <section className="mt-16 text-lg">
        <h2 className="text-3xl font-bold mb-4">
          Why Ooty Toy Train is a UNESCO World Heritage Ride
        </h2>
        <p>
          The Nilgiri Mountain Railway (NMR), popularly called the Ooty Toy Train, is one of the most scenic and engineering-marvel railway journeys in the world. Built in 1908, this rack-and-pinion railway climbs steep mountain gradients, passes through misty forests, tea gardens, tunnels, bridges and waterfalls.
        </p>
      </section>

      {/* ✅ TRAIN DETAILS */}
      <section id="details" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Ooty Toy Train Route, Distance & Duration
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Route:</strong> Mettupalayam → Coonoor → Ooty</li>
          <li><strong>Total Distance:</strong> 46 km</li>
          <li><strong>Total Journey Time:</strong> 4.5 – 5 Hours</li>
          <li><strong>Gradient:</strong> Asia’s steepest mountain railway section</li>
          <li><strong>Locomotive:</strong> Steam engine till Coonoor</li>
        </ul>
      </section>

      {/* ✅ TIMINGS */}
      <section className="mt-16 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Ooty Toy Train Timings (2025)
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Mettupalayam → Ooty:</strong> 7:10 AM – 12:00 PM</li>
          <li><strong>Ooty → Mettupalayam:</strong> 2:00 PM – 5:35 PM</li>
          <li><strong>Short Ride:</strong> Coonoor ↔ Ooty (multiple slots daily)</li>
        </ul>
      </section>

      {/* ✅ TICKET PRICES */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Ooty Toy Train Ticket Prices
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>First Class:</strong> ₹500 – ₹700</li>
          <li><strong>Second Class:</strong> ₹150 – ₹250</li>
          <li><strong>Children:</strong> Discounted fares</li>
        </ul>

        <p className="mt-4 text-lg font-semibold">
          ✅ Tickets open 120 days in advance on IRCTC and sell out fast.
        </p>
      </section>

      {/* ✅ BEST TIME */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Best Time to Ride Ooty Toy Train
        </h2>

        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>October – March:</strong> Best weather & visibility</li>
          <li><strong>June – September:</strong> Lush green monsoon views</li>
          <li><strong>April – May:</strong> Crowded but pleasant</li>
        </ul>
      </section>

      {/* ✅ BEST SEATS */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Best Seat for Scenic Views
        </h2>

        <p className="text-lg">
          For the **Mettupalayam → Ooty** journey, the **RIGHT side window seat** gives the best views of valleys, waterfalls, tunnels and tea plantations. For the return journey, choose the left side.
        </p>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Ooty Toy Train FAQs
        </h2>

        {[
          ["Is the Ooty Toy Train worth it?", "Yes, it is India’s most scenic railway journey and a UNESCO World Heritage Site."],
          ["Where to book tickets?", "Only on IRCTC website or app."],
          ["Is it safe for children?", "Yes, very safe and family-friendly."],
          ["Does the steam engine still run?", "Yes, till Coonoor section."],
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
          Planning an Ooty Toy Train Trip?
        </h3>
        <p className="mt-2 text-green-200">
          Hotel, cab & train booking assistance available.
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
        © {new Date().getFullYear()} — BharatMile | Premium Hill Travel Guides
      </footer>
    </main>
  );
}

