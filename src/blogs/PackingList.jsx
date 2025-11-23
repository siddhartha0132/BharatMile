// src/blogs/MysoreFull.jsx
import React, { useEffect } from "react";

export default function MysoreFull() {
  useEffect(() => {
    // Title + meta tags
    document.title =
      "Mysore Palace: The Royal Dussehra Experience — Complete Visitor Guide (2025)";

    const setMeta = (attrName, value, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${attrName}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrName);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta(
      "description",
      "Ultimate Mysore Palace & Dussehra guide (2025): history, timings, ticketing, light show, cultural events, where to stay, photography tips, accessibility and practical travel advice to plan your royal visit."
    );

    setMeta(
      "keywords",
      "Mysore Palace, Mysore Dussehra, Mysore Palace timings, Mysore Dussehra 2025, Mysore travel guide, Mysore light show, Karnataka tourism"
    );

    // Open Graph
    setMeta("og:title", "Mysore Palace: The Royal Dussehra Experience — Visitor Guide", "property");
    setMeta(
      "og:description",
      "Plan your visit to Mysore Palace and witness the Royal Dussehra: timings, history, light show, cultural events and practical visitor tips.",
      "property"
    );
    setMeta("og:image", "https://yourwebsite.com/images/mysore-palace-hero.jpg", "property");
    setMeta("og:type", "article", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", "Mysore Palace: The Royal Dussehra Experience", "name");
    setMeta("twitter:description", "A complete guide to visiting Mysore Palace and the Dussehra celebrations.", "name");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.href = "https://yourwebsite.com/blog/mysore-palace-dussehra-guide";

    // JSON-LD structured data (Article + FAQ)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Mysore Palace: The Royal Dussehra Experience — Complete Visitor Guide (2025)",
      "description":
        "Everything you need to know to plan an unforgettable visit to Mysore Palace and attend the Royal Dussehra celebrations — history, schedules, tickets, tips and FAQs.",
      "image": ["https://yourwebsite.com/images/mysore-palace-hero.jpg"],
      "author": {
        "@type": "Person",
        "name": "BharatMile Editorial"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BharatMile",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourwebsite.com/images/logo.png"
        }
      },
      "datePublished": "2025-11-23",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": link.href
      },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When is Mysore Dussehra celebrated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mysore Dussehra runs for ten days, typically in September–October. Exact dates follow the Hindu lunar calendar—check the Karnataka tourism site for current year dates."
            }
          },
          {
            "@type": "Question",
            "name": "What are the palace visiting hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mysore Palace is generally open from 10:00 AM to 5:30 PM; light shows and special Dussehra events occur in the evening—verify timings before visiting."
            }
          },
          {
            "@type": "Question",
            "name": "Is photography allowed inside Mysore Palace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Photography is permitted in certain areas; inside palace halls it may be restricted—observe signs and staff instructions."
            }
          }
        ]
      }
    };

    let script = document.getElementById("mysore-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "mysore-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    // cleanup function optional
    return () => {
      // if you want to remove injected tags on unmount, implement here
    };
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose lg:prose-xl">
      <header>
        <h1>Mysore Palace: The Royal Dussehra Experience — Complete Visitor Guide (2025)</h1>
        <p className="lead">
          Mysore Palace is one of India’s most iconic royal monuments. Every year it becomes the centrepiece of an elaborate Dussehra celebration — a festival of music, pageantry, decorated elephants, and a palace lit with thousands of bulbs. This guide covers history, planning, tickets, light shows, festivals, travel tips, photography pointers and everything you need to make your royal visit unforgettable.
        </p>
        <figure>
          <img
            src="/images/mysore-palace-hero.jpg"
            alt="Mysore Palace illuminated during Dussehra"
            loading="lazy"
          />
          <figcaption>Night view: Mysore Palace lit up during the Dussehra celebration. Replace with a high-res hero image.</figcaption>
        </figure>
      </header>

      <section>
        <h2>Why Mysore Palace Matters</h2>
        <p>
          Mysore Palace (Amba Vilas Palace) is the former royal residence of the Wadiyar dynasty and a classic example of Indo-Saracenic architecture — melding Hindu, Muslim, Rajput and Gothic elements into one majestic complex. Beyond architecture, the palace is a living cultural symbol: the Dussehra festival here is a 400+ year royal tradition that turned Mysore into the cultural capital of Karnataka. The experience blends art, history, religion, and pageantry — and draws visitors from across India and the world.
        </p>
      </section>

      <section>
        <h2>Short History & Architectural Highlights</h2>
        <p>
          The present palace was rebuilt between 1897–1912 after a fire destroyed an earlier structure. The architects combined Indo-Saracenic, Dravidian and neoclassical styles to create the palace as you see it today. The complex contains:
        </p>
        <ul>
          <li><strong>Durbar Hall:</strong> Grand ceremonial hall with chandeliers and painted ceilings.</li>
          <li><strong>Amba Vilas exterior:</strong> Multi-domed facade with carved balconies and archways.</li>
          <li><strong>Royal galleries:</strong> A museum showcasing royal costumes, weapons, paintings, and the famous golden howdah used in processions.</li>
          <li><strong>Light displays:</strong> Tens of thousands of bulbs light up the palace façade in the evenings during festivals and daily light shows in peak season.</li>
        </ul>
        <p>
          Tip: Allow 90–120 minutes to explore the museum and palace interiors comfortably.
        </p>
      </section>

      <section>
        <h2>Planning Your Visit — Timings, Tickets & Entry</h2>
        <h3>Palace Timings</h3>
        <p>
          Standard visiting hours for the palace are generally 10:00 AM to 5:30 PM. During festival days and Dussehra the palace opens earlier and stays open late for special events. Always verify the current season schedule on official Karnataka tourism or palace websites before travel.
        </p>

        <h3>Ticket Prices & Types</h3>
        <p>
          Ticket types often include: general entry (palace interior + galleries), camera/photography permit, and separate fees for special exhibitions. Foreign tourists may see different pricing. Online booking is available via official portals and helps you skip long lines — highly recommended during Dussehra or holidays.
        </p>

        <h3>Best Time to Arrive</h3>
        <p>
          Arrive early in the morning to avoid peak crowds and midday heat. If you want evening lights and the atmosphere, plan for an afternoon tour and return for the light show after sunset (timings vary with season).
        </p>

        <h3>Accessibility</h3>
        <p>
          Parts of the palace are wheelchair-accessible; some older sections contain stairs and uneven flooring. If accessibility is essential, contact the palace administration ahead of time for the most accurate assistance options.
        </p>
      </section>

      <section>
        <h2>The Royal Dussehra Festival — What to Expect</h2>
        <p>
          Dussehra in Mysore is extraordinary. The festival traditionally lasts nine days with the tenth day (Vijaya Dashami) being the grand finale. Highlights:
        </p>
        <ul>
          <li><strong>Procession of caparisoned elephants:</strong> The golden howdah (a ceremonial seat) is mounted on the lead elephant and paraded through town.</li>
          <li><strong>Illumination of Mysore Palace:</strong> The palace is decorated and lit up — the spectacle rivals any night-light show.</li>
          <li><strong>Music & cultural performances:</strong> Classical music, folk dance, and traditional recitals occur over the festival days.</li>
          <li><strong>Decorative tableaux:</strong> Artistic floats and tableaux depict mythological themes and local crafts.</li>
        </ul>
        <p>
          Booking for Dussehra events requires planning: tickets, transport and accommodations sell out quickly. Book months ahead for peak comfort.
        </p>
      </section>

      <section>
        <h2>How to Experience Dussehra Like a Local</h2>
        <ol>
          <li><strong>Reserve a good vantage point:</strong> Procession routes fill early — find civic seating zones, VIP stands or rooftop cafes well in advance.</li>
          <li><strong>Attend a rehearsal event:</strong> Short cultural events and rehearsals occur in the days prior — they’re less crowded and give a sense of the full festival.</li>
          <li><strong>Try local cuisine:</strong> Dussehra coincides with seasonal sweets and local favourites — sample Mysore pak, fresh dosas, and local street snacks.</li>
          <li><strong>Respect traditions:</strong> Procession areas are sacred to many — maintain decorum, avoid loud music, and follow local guidance.</li>
        </ol>
      </section>

      <section>
        <h2>Practical Travel Tips — Stay, Eat & Move Around</h2>
        <h3>Where to Stay</h3>
        <p>
          Mysore has options from budget guesthouses to heritage hotels. For Dussehra, stay central (near the palace) to reduce travel time and catch evening shows with less commuting. Heritage hotels offer a royal ambience and sometimes host cultural programs during the festival.
        </p>

        <h3>Getting Around</h3>
        <p>
          Auto-rickshaws and app-cabs are abundant. During festival days, many roads close and public transport options change. Use official local updates for road closures and plan walking routes for short distances.
        </p>

        <h3>Where to Eat</h3>
        <p>
          From local South Indian breakfasts (idli, dosa) to royal Karnataka thalis, Mysore’s food scene is welcoming. Try traditional Mysore Pak sweets, filter coffee, and regional curries in family restaurants for authentic flavours.
        </p>
      </section>

      <section>
        <h2>Photography & Visitor Etiquette</h2>
        <p>
          Photography is a core part of the visitor experience, but remember:
        </p>
        <ul>
          <li>Look for “no photography” signs inside palace halls — obey staff directions.</li>
          <li>For night lights, use a tripod and higher ISO settings for long exposures (respect crowd flow and avoid blocking paths).</li>
          <li>When photographing ceremonies or religious rituals, maintain distance and avoid disturbing participants.</li>
        </ul>
      </section>

      <section>
        <h2>Safety & Responsible Tourism</h2>
        <p>
          Mysore is generally safe for tourists. During Dussehra, crowds can become dense — keep valuables secure, carry ID, and use official police help points if needed. Respect heritage rules: do not touch or climb on monuments, and dispose of waste responsibly. Consider offsetting your trip impact by supporting local crafts and socially-responsible tourism initiatives.
        </p>
      </section>

      <section>
        <h2>Suggested 2–3 Day Itinerary</h2>
        <p>
          If you have a weekend, here’s a sample plan to combine palace time with nearby gems:
        </p>
        <h3>Day 1 — Palace & Old City</h3>
        <ul>
          <li>Mysore Palace (interior tour)</li>
          <li>St. Philomena’s Cathedral</li>
          <li>Devaraja Market (spices & sandalwood)</li>
          <li>Evening light show at the palace (if scheduled)</li>
        </ul>

        <h3>Day 2 — Culture & Gardens</h3>
        <ul>
          <li>Chamundi Hill & Chamundeshwari Temple</li>
          <li>Tipu Sultan’s Summer Palace</li>
          <li>Brindavan Gardens (evening musical fountain show)</li>
        </ul>

        <h3>Day 3 — Day Trips</h3>
        <ul>
          <li>Srirangapatna (historic island fort)</li>
          <li>Ranganathittu Bird Sanctuary (seasonal, great for birds)</li>
        </ul>
      </section>

      <section>
        <h2>Local Crafts & Souvenirs</h2>
        <p>
          Mysore is famous for silk sarees, sandalwood carvings, rosewood inlay, and Mysore paintings. Purchase from authorized emporiums or trusted shops to avoid fakes. Devaraja Market is a great place to feel the local market vibe and find authentic items.
        </p>
      </section>

      <section>
        <h2>Frequently Asked Questions (FAQ)</h2>

        <h3>When does Mysore Dussehra happen in 2025?</h3>
        <p>
          Dussehra dates follow the Hindu lunar calendar — for exact 2025 dates check official Karnataka tourism pages. Festival typically spans nine nights with the main procession on Vijaya Dashami.
        </p>

        <h3>Is the palace open on festival days?</h3>
        <p>
          The palace remains accessible, but timings change during festival events — check official notices and book tickets early.
        </p>

        <h3>Are there guided tours available?</h3>
        <p>
          Yes — licensed guides provide insightful tours of the palace, its art, and historical context. Guided tours can considerably enhance the experience.
        </p>

        <h3>Is Mysore suitable for families?</h3>
        <p>
          Absolutely. Mysore is family-friendly with museums, parks and cultural shows — but during Dussehra, expect crowds and plan accordingly for children and elders.
        </p>
      </section>

      <footer>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} — BharatMile. Replace image placeholders and canonical URL with your site-specific values before publishing. For the most accurate Dussehra dates, ticketing and palace notices, always refer to official Karnataka tourism channels.
        </p>

        <p className="mt-2">
          Related reading:{" "}
          <a href="/blog/top-10-places-to-visit-in-india">Top 10 Places to Visit in India</a> ·{" "}
          <a href="/blog/jaipur-vs-udaipur-which-city-should-you-visit">Jaipur vs Udaipur</a>
        </p>
      </footer>
    </main>
  );
}
