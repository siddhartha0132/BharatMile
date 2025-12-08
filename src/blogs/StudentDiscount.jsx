import React, { useEffect } from "react";

export default function StudentDiscount() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Student Travel Discounts in India 2025: Flights, Trains, Buses & Monument Entry",
    description:
      "Complete guide to student discounts in India on flights, IRCTC trains, buses and monuments. Eligibility, documents required, airline-wise benefits and insider money-saving tips.",
    image: ["https://yourwebsite.com/images/student-travel-discount.jpg"],
    author: {
      "@type": "Organization",
      name: "BharatMile",
    },
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
      "@id": "https://yourwebsite.com/blog/student-travel-discounts-india",
    },
  };

  useEffect(() => {
    document.title =
      "Student Travel Discounts in India 2025 | Flights, Trains & Monument Entry";

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
      "Complete guide to student discounts in India on flights (IndiGo, Air India, Vistara), IRCTC trains, buses and ASI monuments. Save up to 60% with valid student ID."
    );

    set(
      "keywords",
      "student travel discounts India, student flight discount IndiGo, Air India student fare, IRCTC student concession, monument student discount, bus pass for students"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Save money as a student traveler in India with flight, train, bus and monument discounts. Eligibility, documents and insider tips.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/student-travel-discount.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "Student discount guide for flights, IRCTC trains, buses & monuments across India."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/student-travel-discount.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href =
      "https://yourwebsite.com/blog/student-travel-discounts-india";

    let script = document.getElementById("student-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "student-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
        Student Travel Discounts in India 2025: Flights, Trains & Monuments
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        If you're a college or school student in India, you can save BIG on
        flights, rail tickets, buses and even monument entry fees. This complete
        guide shows how to claim every student discount legally with proper
        documents.
      </p>

      {/* Flights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">
          Student Discounts on Domestic Flights ✈️
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>IndiGo: Up to 6% base fare discount + 10kg extra baggage</li>
          <li>Air India: Youth concession on domestic routes</li>
          <li>Vistara: Discounted student fares with baggage benefits</li>
          <li>Age Limit: Usually 12–26 years</li>
          <li>Booking only via official airline websites</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Mandatory Documents</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Valid Physical College or University ID Card</li>
          <li>Aadhar Card / Passport for age verification</li>
          <li>Sometimes Institute Bonafide Letter</li>
        </ul>
      </section>

      {/* Monument Discounts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">
          Student Discounts at Indian Monuments 🏛️
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>Taj Mahal student ticket: ₹5–₹50</li>
          <li>Red Fort, Qutub Minar, Hampi, Ajanta–Ellora</li>
          <li>Only valid for Indian students</li>
          <li>Foreign students may receive limited ISIC discounts</li>
        </ul>
      </section>

      {/* Rail Discounts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">
          Student Discounts on Indian Railways 🚆
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>Up to 50% concession on Second & Sleeper Class</li>
          <li>Valid for academic travel</li>
          <li>Requires institution-signed concession certificate</li>
          <li>Not available through online IRCTC for most categories</li>
        </ul>
      </section>

      {/* Bus Pass */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">
          State Bus Student Passes 🚌
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>Available in most states (KSRTC, TSRTC, MSRTC)</li>
          <li>Monthly & quarterly student bus passes</li>
          <li>Requires college verification stamp</li>
        </ul>
      </section>

      {/* Pro Tips */}
      <section className="mb-12 bg-yellow-50 p-5 rounded-lg">
        <h2 className="text-2xl font-bold text-yellow-800">
          Pro Student Money-Saving Tips 🎒
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>Book flight tickets 15–25 days early</li>
          <li>Always compare student fare vs normal fare</li>
          <li>Never rely on digital ID screenshots at airport</li>
          <li>Extra baggage benefit saves more than fare discount</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <p className="mt-3">
          <b>Is student discount available on international flights?</b><br />
          Yes, but varies by airline and route. Domestic routes have stronger student benefits.
        </p>

        <p className="mt-3">
          <b>Is student discount valid after graduation?</b><br />
          No. Only valid with active student ID.
        </p>

        <p className="mt-3">
          <b>Can I book student discount through travel apps?</b><br />
          Mostly NO. Always book directly from airline websites.
        </p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile Student Travel Guide
      </footer>
    </main>
  );
}

