import React, { useEffect } from "react";

export default function TatkalRailway() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "IRCTC Tatkal Booking Guide 2025: Confirmed Tickets Step-by-Step",
    description:
      "Complete IRCTC Tatkal booking guide with exact AC & Non-AC timings, master list trick, fastest payment method, Premium Tatkal difference and confirmed ticket tips.",
    image: ["https://yourwebsite.com/images/irctc-tatkal-booking.jpg"],
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
      "@id": "https://yourwebsite.com/blog/irctc-tatkal-booking-guide",
    },
  };

  useEffect(() => {
    document.title =
      "IRCTC Tatkal Booking Guide 2025 | Confirmed Tickets Fast";

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
      "Learn how to book IRCTC Tatkal tickets fast with exact timings for AC & Sleeper class. Use master list tricks, fastest payment options & Premium Tatkal tips to get confirmed tickets."
    );

    set(
      "keywords",
      "IRCTC Tatkal booking, Tatkal ticket booking guide, confirmed Tatkal ticket, Premium Tatkal vs Tatkal, Tatkal timing AC sleeper, fastest Tatkal trick"
    );

    set("og:title", document.title, "property");
    set(
      "og:description",
      "Complete IRCTC Tatkal booking guide with exact timings, master list setup, payment tricks & Premium Tatkal options.",
      "property"
    );
    set(
      "og:image",
      "https://yourwebsite.com/images/irctc-tatkal-booking.jpg",
      "property"
    );
    set("og:type", "article", "property");

    set("twitter:card", "summary_large_image");
    set("twitter:title", document.title);
    set(
      "twitter:description",
      "Step-by-step IRCTC Tatkal booking guide for confirmed Indian Railway tickets."
    );
    set(
      "twitter:image",
      "https://yourwebsite.com/images/irctc-tatkal-booking.jpg"
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href =
      "https://yourwebsite.com/blog/irctc-tatkal-booking-guide";

    let script = document.getElementById("tatkal-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "tatkal-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-extrabold text-red-700 mb-4">
        IRCTC Tatkal Booking Guide 2025: How to Get Confirmed Tickets Fast 🚄
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Tatkal tickets sell out in seconds on IRCTC. This complete guide shows
        you the exact booking time, fastest payment method, master list trick,
        Premium Tatkal difference and pro hacks to maximize your chances of
        getting confirmed tickets.
      </p>

      {/* Tatkal Timings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">Tatkal Booking Timings (IST)</h2>
        <ul className="list-disc list-inside mt-3">
          <li>AC Classes (1A, 2A, 3A, 3E, CC): **10:00 AM**</li>
          <li>Non-AC Classes (SL, 2S): **11:00 AM**</li>
          <li>Booking opens **1 day before journey date**</li>
          <li>Maximum **4 passengers per ticket**</li>
        </ul>
      </section>

      {/* Master List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">
          IRCTC Master List — Your Biggest Weapon
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>Save passenger details before booking day</li>
          <li>Avoid typing during Tatkal rush</li>
          <li>Works on both IRCTC app and website</li>
          <li>Gives 3–4 seconds speed advantage</li>
        </ul>
      </section>

      {/* Step-by-step */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">
          Step-by-Step Tatkal Booking Process
        </h2>
        <ol className="list-decimal list-inside mt-3 space-y-2">
          <li>Login by **9:55 AM / 10:55 AM**</li>
          <li>Keep train number & date pre-filled</li>
          <li>Select Tatkal quota exactly at **10:00 / 11:00**</li>
          <li>Select passengers from master list</li>
          <li>Proceed to payment without edits</li>
          <li>Pay instantly using UPI or Netbanking</li>
        </ol>
      </section>

      {/* Pro Tips */}
      <section className="mb-12 bg-yellow-50 p-5 rounded-lg">
        <h2 className="text-2xl font-bold text-yellow-800">
          Pro Tatkal Booking Hacks 💡
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>UPI is the fastest payment option</li>
          <li>Avoid peak mobile network congestion</li>
          <li>Use Premium Tatkal if Tatkal fails</li>
          <li>Never refresh page repeatedly</li>
        </ul>
      </section>

      {/* Premium Tatkal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold">
          Tatkal vs Premium Tatkal
        </h2>
        <ul className="list-disc list-inside mt-3">
          <li>Tatkal: Fixed pricing</li>
          <li>Premium Tatkal: Dynamic pricing</li>
          <li>No refund on cancellation</li>
          <li>No concession allowed</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <p className="mt-3">
          <b>Can Tatkal tickets be cancelled?</b><br />
          Yes, but confirmed Tatkal tickets have **no refund**.
        </p>

        <p className="mt-3">
          <b>Can agent book Tatkal for me?</b><br />
          Yes, but extra commission will apply.
        </p>

        <p className="mt-3">
          <b>What if payment succeeds but ticket is not booked?</b><br />
          IRCTC usually auto-refunds within 3–7 days.
        </p>
      </section>

      <footer className="mt-12 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} — BharatMile IRCTC Travel Guide
      </footer>
    </main>
  );
}
