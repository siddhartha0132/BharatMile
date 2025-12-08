import React, { useEffect } from "react";

export default function BhangarhFort() {
  useEffect(() => {
    const title =
      "The Haunted History of Bhangarh Fort | Legends, Timings & Travel Guide";

    document.title = title;

    const setOrCreate = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // ✅ BASIC SEO
    setOrCreate(
      "description",
      "Explore the real history & haunted legends of Bhangarh Fort. Complete visitor guide with timings, location, myths, safety tips & how to reach."
    );

    setOrCreate(
      "keywords",
      "Bhangarh Fort history, Bhangarh haunted place, haunted fort in India, Bhangarh story, Alwar tourism, Rajasthan haunted place"
    );

    // ✅ OPEN GRAPH
    setOrCreate("og:title", title, "property");
    setOrCreate(
      "og:description",
      "A balanced guide to Bhangarh Fort — real history, haunted legends, visiting hours, safety rules & travel tips.",
      "property"
    );
    setOrCreate(
      "og:image",
      window.location.origin + "/images/bhangarh-hero.jpg",
      "property"
    );
    setOrCreate("og:type", "article", "property");
    setOrCreate("og:url", window.location.href, "property");

    // ✅ TWITTER
    setOrCreate("twitter:card", "summary_large_image");
    setOrCreate("twitter:title", title);
    setOrCreate(
      "twitter:description",
      "Is Bhangarh Fort really haunted? Discover the truth, myths, history & visitor tips.",
    );
    setOrCreate(
      "twitter:image",
      window.location.origin + "/images/bhangarh-hero.jpg"
    );

    // ✅ CANONICAL
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);

    // ✅ ARTICLE SCHEMA
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "The Haunted History of Bhangarh Fort",
      description:
        "An in-depth guide covering the haunted legends, real history, visitor rules, safety tips & travel guide for Bhangarh Fort.",
      image: [window.location.origin + "/images/bhangarh-hero.jpg"],
      author: {
        "@type": "Organization",
        name: "India Travel Insights",
      },
      publisher: {
        "@type": "Organization",
        name: "India Travel Insights",
        logo: {
          "@type": "ImageObject",
          url: window.location.origin + "/images/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": window.location.href,
      },
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString(),
    };

    let jsonScript = document.getElementById("bhangarh-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "bhangarh-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="bg-[#f7f9fc] text-gray-800">
      <article className="max-w-5xl mx-auto px-4 py-12">

        {/* ✅ HERO */}
        <header className="mb-10">
          <img
            src="/images/bhangarh-hero.jpg"
            alt="Bhangarh Fort ruins at dusk"
            className="w-full h-72 object-cover rounded-xl shadow-lg"
            loading="lazy"
          />

          <h1 className="text-3xl md:text-4xl font-bold mt-6">
            The Haunted History of Bhangarh Fort
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Real history vs haunted legends — complete travel guide, visiting
            rules, safety tips & myths explained.
          </p>

          <aside className="mt-4 p-4 bg-yellow-50 border rounded-lg text-sm">
            <strong>Quick Answer:</strong> There is no scientific proof that
            Bhangarh Fort is haunted. Its reputation comes from folklore,
            abandoned ruins & ASI night entry restrictions.
          </aside>
        </header>

        {/* ✅ CONTENT */}
        <section className="space-y-10 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              Bhangarh Fort, located in Rajasthan’s Alwar district, is widely
              known as India’s most haunted place. Surrounded by the Aravalli
              hills, the fort attracts thrill-seekers, photographers and
              curious travelers from across the country.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Historical Timeline</h2>
            <ul className="list-disc list-inside">
              <li><strong>16th century:</strong> Built by Raja Man Singh I</li>
              <li><strong>17th–18th century:</strong> Flourishing town with temples & markets</li>
              <li><strong>Later period:</strong> Mysteriously abandoned</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">The Haunted Legend</h2>
            <p>
              The most famous legend is of a tantric who cursed Princess
              Ratnavati. It is believed the entire city fell into ruin after the
              curse. However, these stories are folklore — not backed by
              archaeological proof.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Scientific View</h2>
            <p>
              Experts believe strange sounds come from wildlife, wind, bats and
              collapsing stone structures. The darkness & isolation fuel fear.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Visitor Information</h2>
            <p><strong>Location:</strong> Alwar District, Rajasthan</p>
            <p><strong>Timings:</strong> Sunrise to Sunset (No night entry)</p>
            <p><strong>Entry Fee:</strong> Free</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">How to Reach</h2>
            <ul className="list-disc list-inside">
              <li>From Jaipur: 85 km by road</li>
              <li>From Alwar: 90 km by taxi</li>
              <li>Nearest Airport: Jaipur International Airport</li>
            </ul>
          </div>

        </section>

        {/* ✅ INTERNAL BACKLINKS */}
        <section className="mt-14 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Popular Rajasthan Travel Guides</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
            <li><a href="/jaipur-tour">→ Jaipur Travel Guide</a></li>
            <li><a href="/udaipur-tour">→ Udaipur Travel Guide</a></li>
            <li><a href="/jaisalmer-safari">→ Jaisalmer Desert Safari</a></li>
            <li><a href="/ranthambore-safari">→ Ranthambore Jungle Safari</a></li>
            <li><a href="/bikaner-tour">→ Bikaner Travel Guide</a></li>
            <li><a href="/jodhpur-tour">→ Jodhpur Forts & Palaces</a></li>
          </ul>
        </section>

        {/* ✅ EXTERNAL AUTHORITY BACKLINKS */}
        <section className="mt-10 bg-gray-50 p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-3">Official Tourism Resources</h3>
          <ul className="space-y-2 text-blue-600 text-sm">
            <li>
              <a href="https://asi.nic.in" target="_blank" rel="nofollow noreferrer">
                → Archaeological Survey of India (ASI)
              </a>
            </li>
            <li>
              <a href="https://www.tourism.rajasthan.gov.in" target="_blank" rel="nofollow noreferrer">
                → Rajasthan Tourism Official Website
              </a>
            </li>
            <li>
              <a href="https://www.incredibleindia.org" target="_blank" rel="nofollow noreferrer">
                → Incredible India Tourism
              </a>
            </li>
          </ul>
        </section>

        {/* ✅ FAQ */}
        <section className="mt-14 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>

          <div className="space-y-4">
            <div>
              <strong>Q. Is Bhangarh Fort really haunted?</strong>
              <p>No scientific evidence supports paranormal activity here.</p>
            </div>

            <div>
              <strong>Q. Is entry allowed at night?</strong>
              <p>No, ASI strictly prohibits night entry for safety reasons.</p>
            </div>

            <div>
              <strong>Q. Is Bhangarh safe for solo travelers?</strong>
              <p>Yes, during daytime with proper precautions.</p>
            </div>
          </div>
        </section>

        {/* ✅ WHATSAPP CTA */}
        <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">
            Planning a Rajasthan Trip?
          </h3>
          <p className="mt-2 text-green-100">
            Get custom itineraries, hotel suggestions & instant travel help.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        <footer className="mt-12 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} — India Travel Insights.
        </footer>

      </article>
    </main>
  );
}

