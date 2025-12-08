// src/blogs/JimCorbett.jsx
import React, { useEffect } from "react";

export default function JimCorbett() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jim Corbett National Park: Spotting the Bengal Tiger | Complete Safari Guide",
    description:
      "Complete practical guide to Jim Corbett National Park: best zones, safari booking, permits, best months, photography tips, itineraries and conservation notes.",
    image: ["/images/jim-corbett-hero.jpg"],
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
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which zone is best for tiger sighting in Jim Corbett?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dhikala, Bijrani and Jhirna zones offer the highest probability of tiger sightings, especially early mornings and late afternoons.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best time to visit Jim Corbett?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "October to June is ideal. Winter offers clear visibility while summer increases chances near waterholes. Park remains closed during monsoon.",
          },
        },
        {
          "@type": "Question",
          name: "Is prior booking required for Jim Corbett safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, safari permits must be booked in advance through the official Uttarakhand forest portal or authorised operators.",
          },
        },
      ],
    },
  };

  useEffect(() => {
    document.title =
      "Jim Corbett National Park Safari | Tiger Spotting Guide | BharatMile";

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
      "Complete Jim Corbett National Park safari guide — best zones (Dhikala, Bijrani, Jhirna), tiger spotting tips, permits, bookings, photography advice and sample itineraries."
    );

    setMeta(
      "keywords",
      "Jim Corbett safari, tiger spotting Corbett, Dhikala safari, Bijrani safari, Corbett National Park guide, Uttarakhand wildlife safari"
    );

    setMeta(
      "og:title",
      "Jim Corbett National Park: Bengal Tiger Safari Guide",
      "property"
    );
    setMeta(
      "og:description",
      "Plan your perfect Jim Corbett safari with tiger zones, bookings, best seasons and photography tips.",
      "property"
    );
    setMeta("og:type", "article", "property");
    setMeta("og:image", "/images/jim-corbett-hero.jpg", "property");
    setMeta("twitter:card", "summary_large_image");

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute(
      "href",
      window.location.origin + "/blog/jim-corbett-tiger-safari-guide"
    );

    let script = document.getElementById("jimcorbett-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "jimcorbett-schema";
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
          src="/images/jim-corbett-hero.jpg"
          alt="Bengal Tiger in Jim Corbett National Park"
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-8 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Jim Corbett National Park Safari
            </h1>
            <p className="mt-3 text-lg">
              Spot the majestic Bengal Tiger in India’s oldest national park —
              Dhikala, Bijrani & Jhirna safari guide with expert tips.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="https://wa.me/919636974688"
                target="_blank"
                rel="noreferrer"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Book Safari on WhatsApp
              </a>
              <a
                href="#itinerary"
                className="border border-white px-6 py-3 rounded-lg"
              >
                View Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ WHY CORBETT */}
      <section className="mt-16 text-lg">
        <h2 className="text-3xl font-bold mb-4">Why Jim Corbett is India’s Top Tiger Safari</h2>
        <p>
          Jim Corbett National Park is India’s oldest national park and one of the
          world’s most important tiger conservation landscapes. Located in the
          Himalayan foothills of Uttarakhand, Corbett combines grasslands,
          riverine forests and sal jungles — creating the perfect habitat for
          Bengal tigers, elephants, leopards, deer and 650+ bird species.
        </p>
      </section>

      {/* ✅ BEST ZONES */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Best Safari Zones for Tiger Sightings</h2>

        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>
            <strong>Dhikala Zone:</strong> Highest tiger probability + forest stay
            inside core area.
          </li>
          <li>
            <strong>Bijrani Zone:</strong> Most popular and extremely productive.
          </li>
          <li>
            <strong>Jhirna Zone:</strong> Open year-round, fewer crowds.
          </li>
          <li>
            <strong>Dhela & Sonanadi:</strong> Newer zones with elephants & birds.
          </li>
        </ul>
      </section>

      {/* ✅ ITINERARY */}
      <section id="itinerary" className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Perfect 3-Day Jim Corbett Safari Itinerary</h2>

        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li><strong>Day 1:</strong> Arrival → Resort check-in → Evening safari</li>
          <li><strong>Day 2:</strong> Sunrise jeep safari → Rest → Evening safari</li>
          <li><strong>Day 3:</strong> Morning safari → Breakfast → Departure</li>
        </ol>
      </section>

      {/* ✅ SAFARI TYPES */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Safari Types Available</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Forest Department Jeep Safari</li>
          <li>Canter Safari (Budget option)</li>
          <li>Private Authorised Jeep Safari</li>
          <li>Limited Elephant Safari (Seasonal)</li>
        </ul>
      </section>

      {/* ✅ COST */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Expected Safari & Stay Costs</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Safari Permit: ₹1000 – ₹3000</li>
          <li>Private Jeep: ₹1200 – ₹3000 per person</li>
          <li>Budget Stay: ₹800 – ₹2000</li>
          <li>Luxury Resort: ₹7000 – ₹15000+</li>
        </ul>
      </section>

      {/* ✅ PHOTOGRAPHY */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Wildlife Photography Tips</h2>
        <ul className="space-y-3 text-lg list-disc list-inside">
          <li>Use 300mm+ telephoto lens</li>
          <li>Silent shutter mode preferred</li>
          <li>Shoot RAW for better editing</li>
          <li>Morning safaris give best light</li>
        </ul>
      </section>

      {/* ✅ FAQ */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        {[
          ["Is Jim Corbett safe for families?", "Yes, it is fully safe with trained guides and forest protection."],
          ["How early should I book?", "Book 30–60 days in advance during peak season."],
          ["Do I need ID proof?", "Yes, original ID is mandatory for safari permits."],
          ["Is tiger sighting guaranteed?", "No, sightings depend on luck, season and animal movement."],
        ].map((faq, i) => (
          <details key={i} className="border p-4 rounded-lg mb-4">
            <summary className="font-medium cursor-pointer">{faq[0]}</summary>
            <p className="mt-2 text-gray-700">{faq[1]}</p>
          </details>
        ))}
      </section>

      {/* ✅ FINAL CTA */}
      <section className="mt-20 bg-green-600 text-white p-8 rounded-xl text-center shadow-xl">
        <h3 className="text-2xl font-semibold">
          Want Guaranteed Best Safari & Resort Deals?
        </h3>
        <p className="mt-2 text-green-100">
          Get instant pricing, availability & expert planning on WhatsApp.
        </p>

        <a
          href="https://wa.me/919636974688"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition"
        >
          Chat Now on WhatsApp
        </a>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — BharatMile | India Wildlife Safaris
      </footer>
    </main>
  );
}
