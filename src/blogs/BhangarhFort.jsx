import React, { useEffect } from "react";

export default function BhangarhFort() {
  useEffect(() => {
    document.title =
      "The Haunted History of Bhangarh Fort | Bhangarh Fort Stories & Visitor Guide";

    const setOrCreate = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setOrCreate(
      "description",
      "Explore the haunted history and legends of Bhangarh Fort — tales, historical timeline, visitor tips, and essential safety guidance for travellers."
    );

    setOrCreate("keywords", "Bhangarh Fort history, haunted places India, Bhangarh story, Rajasthan travel guide, Alwar tourism");

    setOrCreate("og:title", "The Haunted History of Bhangarh Fort", "property");
    setOrCreate(
      "og:description",
      "A balanced look at Bhangarh Fort: documented history, chilling legends, visiting hours, and practical travel tips.",
      "property"
    );
    setOrCreate("og:image", "https://example.com/images/bhangarh-hero.jpg", "property");
    setOrCreate("og:type", "article", "property");

    setOrCreate("twitter:card", "summary_large_image", "name");
    setOrCreate("twitter:title", "The Haunted History of Bhangarh Fort");
    setOrCreate(
      "twitter:description",
      "Explore the myths, stories, and historical facts about Bhangarh Fort — India's most mysterious ruin."
    );

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);

    // JSON-LD
    let jsonScript = document.getElementById("bhangarh-jsonld");
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "The Haunted History of Bhangarh Fort",
      description:
        "A deep dive into Bhangarh Fort's history, legends, myths, and practical tourist information.",
      image: ["https://example.com/images/bhangarh-hero.jpg"],
      author: {
        "@type": "Person",
        name: "India Travel Insights",
      },
      publisher: {
        "@type": "Organization",
        name: "India Travel Insights",
        logo: {
          "@type": "ImageObject",
          url: "https://example.com/images/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": window.location.href,
      },
    };

    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "bhangarh-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }

    jsonScript.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose lg:prose-xl">
        {/* HERO */}
        <header className="rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/bhangarh-hero.jpg"
            alt="Bhangarh Fort ruins at dusk"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h1 className="text-3xl font-extrabold">
              The Haunted History of Bhangarh Fort
            </h1>
            <p className="mt-2 text-gray-600">
              Between fear and folklore — explore legends, architecture, and
              essential travel tips for visiting India's most mysterious fort.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </header>

        {/* INTRO */}
        <section>
          <h2>Introduction</h2>
          <p>
            Bhangarh Fort, located in the Alwar district of Rajasthan, is
            regarded as one of the most mysterious ruins in India. Surrounded by
            dense forests and the Aravalli hills, the fort’s eerie reputation
            has grown due to countless legends, myths, and chilling stories
            passed down over generations.
          </p>
        </section>

        {/* HISTORY */}
        <section>
          <h2>Historical Timeline</h2>
          <ul>
            <li>
              <strong>16th century:</strong> Built by Raja Man Singh I for his
              son Madho Singh.
            </li>
            <li>
              <strong>17th–18th century:</strong> Functioned as a fortified town
              with markets, temples, and royal residences.
            </li>
            <li>
              <strong>Unknown era:</strong> Abandonment due to possible war,
              famine, or depopulation.
            </li>
          </ul>
        </section>

        {/* LEGENDS */}
        <section>
          <h2>Local Legends & The Curse</h2>
          <p>
            The most famous legend revolves around a tantric who fell in love
            with Princess Ratnavati. After she rejected him, he cursed the fort,
            leading to its supposed downfall. Other tales describe ghosts,
            shadows, unusual sounds, and supernatural events.
          </p>
          <p>
            These stories, while fascinating, are part of oral folklore and are
            not backed by historical evidence.
          </p>
        </section>

        {/* FACTUAL VIEW */}
        <section>
          <h2>What the Evidence Suggests</h2>
          <p>
            Archaeological studies reveal that Bhangarh Fort follows classic
            Rajput architectural style. Many so-called paranormal experiences
            can be explained by natural sounds, wildlife activity, and the
            fort’s deteriorating stone structures.
          </p>
        </section>

        {/* VISITOR INFO */}
        <section>
          <h2>Visitor Information</h2>
          <p>
            <strong>Location:</strong> Bhangarh Village, Alwar District,
            Rajasthan.
          </p>
          <p>
            <strong>Entry Timings:</strong> Sunrise to sunset (entry is strictly
            prohibited after dark as per ASI rules).
          </p>
          <p>
            <strong>Tips for Visitors:</strong> Carry water, wear comfortable
            shoes, avoid isolated corners, and respect local customs.
          </p>
        </section>

        {/* GALLERY */}
        <section>
          <h2>Photo Gallery</h2>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/bhangarh-1.jpg"
              alt="Entrance gate of Bhangarh Fort"
              className="w-full h-40 object-cover rounded"
              loading="lazy"
            />
            <img
              src="/images/bhangarh-2.jpg"
              alt="Inside ruins of Bhangarh Fort"
              className="w-full h-40 object-cover rounded"
              loading="lazy"
            />
          </div>
        </section>

        {/* HOW TO REACH */}
        <section>
          <h2>How to Reach</h2>
          <p>
            Bhangarh Fort is easily accessible from Alwar (90 km) and Jaipur (85
            km). The nearest airport is Jaipur International Airport, and the
            closest railway station is Alwar Junction.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions</h2>
          <dl>
            <dt>Is Bhangarh Fort haunted?</dt>
            <dd>
              There is no scientific evidence of paranormal activity — most
              stories are based on folklore and local belief.
            </dd>

            <dt>Can visitors enter after sunset?</dt>
            <dd>
              No. The ASI has officially banned entry after sunset for safety
              reasons.
            </dd>

            <dt>Are guided tours available?</dt>
            <dd>
              Yes, you can hire local licensed guides who explain both the
              history and the stories around the fort.
            </dd>
          </dl>
        </section>

        <footer className="mt-10 text-sm text-gray-600">
          © {new Date().getFullYear()} — India Travel Insights.
        </footer>
      </article>
    </main>
  );
}

