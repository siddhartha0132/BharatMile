// src/blogs/KeralaBackwaters.jsx
import { useEffect } from "react";

export default function KeralaBackwaters() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kerala Backwaters Houseboat Guide 2025 | Prices, Routes & Booking Tips",
    description:
      "Complete Kerala Backwaters houseboat guide with Alleppey routes, 2025 prices, best seasons, luxury boats & booking tips.",
    image: ["https://images.unsplash.com/photo-1524492412937-b28074a5d7da"],
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
      "Kerala Backwaters Houseboat Guide 2025 | Prices, Routes & Booking | BharatMile";

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
      "Ultimate Kerala Backwaters 2025 guide: Alleppey houseboat prices, best routes, luxury boats, food, safety, seasons & expert booking tips."
    );

    setMeta(
      "keywords",
      "Kerala backwaters, Alleppey houseboat, Kerala houseboat prices 2025, luxury houseboat Kerala, Kumarakom backwaters, Kerala travel guide"
    );

    setMeta(
      "og:title",
      "Kerala Backwaters: Houseboat Prices, Best Routes & Travel Guide 2025",
      "property"
    );
    setMeta(
      "og:description",
      "Plan your dream Kerala houseboat experience with updated 2025 prices, Alleppey routes, luxury boats & expert tips.",
      "property"
    );
    setMeta("og:type", "article", "property");
    setMeta(
      "og:image",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      "property"
    );
    setMeta("twitter:card", "summary_large_image");

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute(
      "href",
      window.location.origin + "/blog/kerala-backwaters-houseboat-guide"
    );

    let script = document.getElementById("kerala-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "kerala-schema";
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
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
          alt="Kerala Backwaters Luxury Houseboat"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Kerala Backwaters Houseboat Tour 2025
            </h1>
            <p className="mt-3 text-lg">
              Alleppey luxury houseboats, updated prices, best routes & booking tips — complete planning guide.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book Houseboat on WhatsApp
              </a>
              <a
                href="#pricing"
                className="border border-white px-6 py-3 rounded-lg"
              >
                View Prices
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ INTRO */}
      <section className="mt-16 text-lg">
        <h2 className="text-3xl font-bold mb-4">Why Kerala Backwaters Are World-Famous</h2>
        <p>
          The Kerala Backwaters are a magical network of canals, lakes and rivers where coconut palms reflect on glassy waters and life moves at a peaceful pace. A private houseboat cruise through Alleppey and Kumarakom offers one of India’s most relaxing luxury travel experiences.
        </p>
      </section>

      {/* ✅ PRICING */}
      <section id="pricing" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Kerala Houseboat Prices (2025 Updated)</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li><strong>Standard:</strong> ₹7,000 – ₹10,000</li>
          <li><strong>Deluxe:</strong> ₹10,000 – ₹15,000</li>
          <li><strong>Premium:</strong> ₹15,000 – ₹25,000</li>
          <li><strong>Luxury:</strong> ₹25,000 – ₹60,000+</li>
        </ul>
      </section>

      {/* ✅ ROUTES */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Best Backwater Routes</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Alleppey → Kumarakom (Most Popular)</li>
          <li>Alleppey → Kuttanad (Paddy fields)</li>
          <li>Kollam → Ashtamudi (Larger lakes)</li>
        </ul>
      </section>

      {/* ✅ FOOD */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Houseboat Food Experience</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Karimeen Fry (Pearl Spot Fish)</li>
          <li>Kerala Veg Thali</li>
          <li>Prawn Curry</li>
          <li>Traditional Appam & Dosa Breakfast</li>
        </ul>
      </section>

      {/* ✅ TIPS */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Important Booking Tips</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Always confirm AC timings</li>
          <li>Book at least 10–15 days in advance</li>
          <li>Check safety equipment & sanitation</li>
          <li>Carry mosquito repellent & sunscreen</li>
        </ul>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        {[
          ["Is overnight stay safe on houseboats?", "Yes, boats are professionally managed with trained staff."],
          ["Is one night enough?", "Yes for first-time visitors, but two nights are more relaxing."],
          ["Can couples book private boats?", "Yes, all houseboats are private for couples & families."],
          ["Do prices include food?", "Yes, all main meals are included."],
        ].map((faq, i) => (
          <details key={i} className="border p-4 rounded-lg mb-4">
            <summary className="font-medium cursor-pointer">{faq[0]}</summary>
            <p className="mt-2 text-gray-700">{faq[1]}</p>
          </details>
        ))}
      </section>

      {/* ✅ FINAL CTA */}
      <section className="mt-20 bg-emerald-600 text-white p-8 rounded-xl text-center shadow-xl">
        <h3 className="text-2xl font-semibold">
          Want the Best Kerala Houseboat Deal?
        </h3>
        <p className="mt-2 text-emerald-100">
          Get instant pricing, live availability & custom itineraries.
        </p>

        <a
          href="https://wa.me/919636974688"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
        >
          Chat Now on WhatsApp
        </a>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — BharatMile | Kerala Luxury Travel
      </footer>
    </main>
  );
}

