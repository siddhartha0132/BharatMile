import { useEffect } from "react";

export default function AndamanIslands() {
  useEffect(() => {
    document.title =
      "Andaman Islands: Scuba Diving for Beginners | Travel Guide";

    const set = (n, c, a = "name") => {
      let e = document.querySelector(`meta[${a}="${n}"]`);
      if (!e) {
        e = document.createElement("meta");
        e.setAttribute(a, n);
        document.head.appendChild(e);
      }
      e.setAttribute("content", c);
    };

    // Basic SEO
    set(
      "description",
      "Explore scuba diving for beginners in the Andaman Islands. Learn the best dive spots, prices, safety tips, and everything you need for your first underwater adventure."
    );
    set("keywords", "Andaman scuba diving, scuba diving India, beginners scuba diving, Havelock diving, Nemo Reef");

    // OG Tags (Social Preview)
    set("og:title", "Andaman Islands: Scuba Diving for Beginners", "property");
    set(
      "og:description",
      "Beginner-friendly guide to scuba diving in the Andamans—best dive sites, costs, and everything to expect underwater.",
      "property"
    );
    set("og:type", "article", "property");
    set("og:image", "/andaman-cover.jpg", "property"); // change if you have another image
    set("og:url", window.location.href, "property");

    // Twitter SEO
    set("twitter:card", "summary_large_image", "name");
    set(
      "twitter:title",
      "Andaman Islands: Scuba Diving for Beginners | Travel Guide"
    );
    set(
      "twitter:description",
      "Complete beginner guide to scuba diving in the Andamans—spots, pricing, and safety tips."
    );
    set("twitter:image", "/andaman-cover.jpg");

    // Schema Markup (Google Loves This)
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Andaman Islands: Scuba Diving for Beginners",
      description:
        "Beginner-friendly guide to scuba diving in the Andaman Islands including top spots, pricing, timings, and safety tips.",
      image: "/andaman-cover.jpg",
      author: {
        "@type": "Organization",
        name: "India Travel Insights",
      },
      publisher: {
        "@type": "Organization",
        name: "India Travel Insights",
      },
      datePublished: "2025-01-01",
    };

    let script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <article>
        <header className="mb-6">
          <h1 className="text-3xl font-bold">
            Andaman Islands: Scuba Diving for Beginners
          </h1>
          <p className="text-gray-600 mt-2">
            Your complete beginner-friendly guide to underwater adventures,
            diving schools, and what to expect in the crystal-clear waters of the
            Andamans.
          </p>

          <img
            src="/andaman-cover.jpg"
            alt="Scuba Diving in Andaman Islands"
            className="rounded-lg mt-4 shadow-md"
          />
        </header>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">
            Why the Andamans Are Perfect for First-Time Divers
          </h2>
          <p className="mt-2 leading-relaxed">
            The Andaman Islands are famous for their calm waters, high
            visibility, colourful coral ecosystems, and well-trained instructors.
            These factors make the islands one of the safest and most beautiful
            places for beginner scuba divers in India.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Best Places for Scuba Diving</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Havelock Island — Elephant Beach, Nemo Reef</li>
            <li>Neil Island — Beginners’ clear-water haven</li>
            <li>North Bay Island — Coral-rich shallow spots</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Dive Prices & Sessions</h2>
          <p className="mt-2">
            Beginner dives usually cost between{" "}
            <strong>₹3,000–₹6,000</strong> depending on duration, depth, and
            location. Always choose certified dive centres to ensure safety and
            proper underwater training.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Safety Tips</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Follow every instruction carefully</li>
            <li>Stay calm and remember to breathe slowly underwater</li>
            <li>Skip diving if you have cold, sinus issues, or ear trouble</li>
          </ul>
        </section>

        <footer className="mt-10 text-sm text-gray-600">
          © {new Date().getFullYear()} — India Travel Insights.
        </footer>
      </article>
    </main>
  );
}
