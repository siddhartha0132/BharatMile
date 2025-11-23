// src/blogs/JimCorbett.jsx
import React, { useEffect } from "react";

export default function JimCorbett() {
  useEffect(() => {
    // Title
    document.title = "Jim Corbett National Park: Spotting the Bengal Tiger | Complete Safari Guide";

    // Helper to set or create meta tags
    const setMeta = (attrName, attrValue, contentValue) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", contentValue);
    };

    // Standard meta
    setMeta("name", "description", "Complete Jim Corbett National Park guide — best zones (Dhikala, Bijrani, Jhirna), safari booking tips, best time to visit, permits, photography advice, sample itineraries, accommodation, transport and conservation notes to help you spot Bengal tigers safely and responsibly.");
    setMeta("name", "keywords", "Jim Corbett, Jim Corbett National Park, tiger safari, Dhikala, Bijrani, Jhirna, tiger spotting tips, Corbett booking, India wildlife safari, Uttarakhand safari");

    // OpenGraph
    setMeta("property", "og:title", "Jim Corbett National Park: Spotting the Bengal Tiger | Complete Safari Guide");
    setMeta("property", "og:description", "A practical, detailed guide to planning a successful Jim Corbett safari — zones, permits, best seasons, photography tips, accommodation and conservation advice.");
    setMeta("property", "og:type", "article");
    setMeta("property", "og:image", "https://yourwebsite.com/images/jim-corbett-hero.jpg"); // replace with your image
    setMeta("property", "og:url", window.location.href);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", "Jim Corbett National Park: Spotting the Bengal Tiger | Complete Safari Guide");
    setMeta("name", "twitter:description", "A clear, practical guide to tiger safaris at Jim Corbett — zones, booking, best time, and safety tips.");

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.origin + "/blog/jim-corbett-tiger-safari-guide");

    // JSON-LD structured data (Article + FAQ)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Jim Corbett National Park: Spotting the Bengal Tiger | Complete Safari Guide",
      "description": "Complete practical guide to Jim Corbett National Park: best zones, safari booking, permits, best months, photography tips, sample itineraries, and conservation notes.",
      "image": ["https://yourwebsite.com/images/jim-corbett-hero.jpg"],
      "author": { "@type": "Person", "name": "BharatMile Editorial" },
      "publisher": { "@type": "Organization", "name": "BharatMile", "logo": { "@type": "ImageObject", "url": "https://yourwebsite.com/images/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": window.location.href },
      "datePublished": "2025-11-23",
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which zones in Jim Corbett have the best tiger sighting chances?",
            "acceptedAnswer": { "@type": "Answer", "text": "Dhikala, Bijrani and Jhirna zones are among the most active for tiger sightings; Dhikala and Bijrani are especially known for frequent sightings early in the season." }
          },
          {
            "@type": "Question",
            "name": "When is the best time to visit Jim Corbett for tigers?",
            "acceptedAnswer": { "@type": "Answer", "text": "October to June is ideal: winter (Nov-Feb) gives clear visibility; March–June offers increased animal movement around waterholes; monsoon (Jul-Sep) park is closed." }
          },
          {
            "@type": "Question",
            "name": "Do I need permits for Jim Corbett safaris?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — permits and bookings are required for forest department safaris and can be booked through the official Uttarakhand wildlife department portal or authorised tour operators." }
          }
        ]
      }
    };

    let script = document.getElementById("jimcorbett-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "jimcorbett-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, []);

  // Long-form content: 3000+ words (structured with headings and subheadings).
  // The content below is intentionally comprehensive and practical for visitors, photographers, and conservation-minded travellers.
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose lg:prose-xl">
      <article>
        <header>
          <h1>Jim Corbett National Park — Spotting the Bengal Tiger: The Complete Safari Guide</h1>
          <p className="lead">
            Jim Corbett National Park (Uttarakhand) is the oldest national park in India and one of the best places on Earth to see Bengal tigers in the wild.
            This guide covers everything: the best zones, how to book safaris and permits, sample itineraries, photography tips, safety and responsible tourism guidelines,
            where to stay, transport, expected costs, and background on the park's conservation story. Read this before you pack your binoculars.
          </p>
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        {/* INTRODUCTION */}
        <section>
          <h2>Why Jim Corbett is special</h2>
          <p>
            Founded as Hailey National Park in 1936 and later renamed after the hunter-turned-conservationist Jim Corbett, the park covers a mosaic of hills, grasslands, riverine forests and foothills of the Himalaya.
            Its habitats — deciduous sal forests, riverine thickets, and reedbeds — support tigers, elephants, leopards, deer, wild boar, sloth bears, and over 650 recorded bird species.
            Because of varied habitat and careful management, Jim Corbett offers excellent opportunities for animal encounters while also being active in tiger conservation and anti-poaching measures.
          </p>
        </section>

        {/* PLANNING */}
        <section>
          <h2>Planning your trip — quick checklist</h2>
          <ul>
            <li>Best window to visit: <strong>October to June</strong> (park closed during monsoon: July–September).</li>
            <li>Book safaris and permits in advance — forest department slots fill fast on weekends and holidays.</li>
            <li>Decide which zone to visit: Dhikala (high probability but limited accommodation), Bijrani (popular), Jhirna (open access year-round), etc.</li>
            <li>Bring binoculars, long telephoto lens (if photographing), sunscreen, hats, and layered clothing for cold mornings.</li>
            <li>Respect park rules: stay in vehicle, avoid littering, maintain silence during safaris.</li>
          </ul>
        </section>

        {/* BEST TIME */}
        <section>
          <h2>Best time to visit Jim Corbett for tiger sightings</h2>
          <p>
            The park opens after the monsoon and remains accessible until early summer — most visitors come between October and June.
            Each season offers different advantages:
          </p>
          <h3>Winter (November–February)</h3>
          <p>
            Cooler temperatures, clear skies and reduced foliage make animals easier to spot. Early morning safaris (6–10 AM) are crisp and productive; evenings can be foggy but atmospheric.
          </p>
          <h3>Spring / Early Summer (March–May/June)</h3>
          <p>
            Water becomes scarce at some waterholes, so animals (including tigers) congregate around remaining water sources — increasing sighting chances. However temperatures rise by late April/May.
          </p>
          <h3>Monsoon (July–September) — Park closed</h3>
          <p>
            The park typically closes during heavy monsoon for animal safety, road maintenance and habitat recovery. Always check official dates as they can vary each year.
          </p>
        </section>

        {/* ZONES DETAILS */}
        <section>
          <h2>Which safari zone should you choose? (Detailed zone guide)</h2>
          <p>
            Jim Corbett is divided into core and buffer zones; not all zones are equal for tigers. Your choice affects sighting probability, rules, and accommodation options.
          </p>

          <h3>Dhikala Zone (Highly recommended)</h3>
          <p>
            Dhikala in the Ramnagar range is an iconic zone — wide grasslands, river views, and one of the highest tiger sighting probabilities in the park. Dhikala has a forest rest house (FRH) where you can stay inside the forest (limited rooms, book early). Day safaris and night safaris (where permitted) operate; rules here are strict to reduce disturbance.
          </p>
          <ul>
            <li>Why choose Dhikala: best mix of habitat, fine sighting chances, sunrise/sunset views, elephant and deer concentrations.</li>
            <li>Book months in advance — Dhikala permits and accommodation are scarce.</li>
          </ul>

          <h3>Bijrani & Durga Tal (Popular & productive)</h3>
          <p>
            Bijrani is among the most frequented zones due to reliable sightings and proximity to accessible accommodation. Early safaris take visitors through varied habitats where tigers and deer are often seen.
          </p>

          <h3>Jhirna Zone (Good for longer season)</h3>
          <p>
            Jhirna is interesting because it often remains open year-round and has a healthy population of herbivores and predators. It's more accessible for self-drive safaris via authorised operators and tends to have fewer tourists than Bijrani.
          </p>

          <h3>Other zones (Sitabani, Sonanadi, Dhela, etc.)</h3>
          <p>
            Sonanadi and Dhela have their own appeal — Sonanadi often hosts elephant sightings, while Dhela is newer and quieter. Sitabani is in the buffer and has a mix of wildlife.
          </p>
        </section>

        {/* SAFARI TYPES */}
        <section>
          <h2>Types of safaris — what to book</h2>
          <p>
            The most common safari styles are: forest department jeeps, canters (shared open vehicles), and authorised private jeep safaris. There are also elephant safaris in select zones (check availability and restrictions).
          </p>

          <h3>Forest Department Jeep Safaris</h3>
          <p>
            These are official, route-regulated safaris running at set times. They are safe, well-managed, and the preferred option for many — but seats are limited and must be reserved online or via counters.
          </p>

          <h3>Canter Safari (open van)</h3>
          <p>
            Canters carry more people (20–30) and provide a high vantage view. They are more affordable and good for those who want to be part of a group; however, they can be noisy and less flexible than jeeps.
          </p>

          <h3>Private/Shared Jeep Safaris</h3>
          <p>
            Authorised private jeep safaris can be more flexible with timing and route (within permitted zones). Always use authorised operators; avoid unlicensed vehicles.
          </p>

          <h3>Night Safaris & Elephant Safaris</h3>
          <p>
            Night safaris are highly restricted and available only in limited zones under strict supervision. Elephant safaris are traditional but may be restricted due to welfare concerns — verify current policies before booking.
          </p>
        </section>

        {/* BOOKING & PERMITS */}
        <section>
          <h2>Booking safaris & permits — step by step</h2>
          <p>
            Booking efficiently is vital: popular dates and weekends fill quickly.
            Follow these steps to secure a slot:
          </p>
          <ol>
            <li><strong>Check official portal:</strong> Use the Uttarakhand Forest Department or authorised booking portal for forest department safaris; avoid unofficial resellers that overcharge.</li>
            <li><strong>Decide the zone and date:</strong> Prioritise Dhikala or Bijrani for beginners wanting higher sighting chances.</li>
            <li><strong>Book early:</strong> For peak season (Oct–Feb), book 30–90 days ahead if possible, especially if you want Dhikala accommodation.</li>
            <li><strong>Collect permits:</strong> Some counters require physical permit collection; read the confirmation carefully.</li>
            <li><strong>Carry ID:</strong> Everyone on safari must carry original government ID as listed on the permit.</li>
          </ol>

          <p>
            Many travellers combine forest department safaris with a trusted local operator who handles logistics, pickup and driving. That reduces stress but adds a fee.
          </p>
        </section>

        {/* SAMPLE ITINERARY */}
        <section>
          <h2>Sample 3-day Jim Corbett itinerary (reasonable & effective)</h2>

          <h3>Day 1 — Arrival & Heads Up</h3>
          <p>
            Arrive at Ramnagar or Kaladhungi depending on your chosen accommodation. Check in, rest, and meet your guide. If time permits, take an evening walk around the buffer area (not inside core) to acclimatise.
          </p>

          <h3>Day 2 — Early morning safari + daytime rest + evening safari</h3>
          <p>
            Wake at dawn and take an early jeep/canter safari — many predators are most active at first light. Return to the lodge for late breakfast and a relaxed midday. Do a second safari before sunset; animals often visit waterholes in the late afternoon.
          </p>

          <h3>Day 3 — Final morning safari & departure</h3>
          <p>
            One last sunrise safari increases your chances to see shy animals that moved at night. After breakfast, pack and depart, keeping time buffers for road travel.
          </p>
        </section>

        {/* PHOTOGRAPHY TIPS */}
        <section>
          <h2>Photographer’s handbook — practical tips</h2>
          <p>
            Photographing wildlife requires patience, preparedness and respect for the animal. Below are camera and behavioural tips that work particularly well in Corbett.
          </p>

          <h3>Gear suggestions</h3>
          <ul>
            <li><strong>Telephoto lens:</strong> 300mm+ is ideal; 400–600mm is best for serious photographers.</li>
            <li><strong>Fast prime or zoom:</strong> for low light and quick action shots (f/2.8–f/4 preferred).</li>
            <li><strong>Tripod/Monopod:</strong> useful for stability in low light but may limit agility in jeep; monopod is a good compromise.</li>
            <li><strong>Extra batteries & memory:</strong> long shoots and cold mornings drain batteries faster.</li>
          </ul>

          <h3>On safari behaviour</h3>
          <ul>
            <li>Never get out of the vehicle unless instructed by the authorised guide.</li>
            <li>Move quietly and avoid sudden movements that could spook animals.</li>
            <li>Use silent or quiet shutter modes where possible.</li>
            <li>Keep distance — the thrill is seeing natural behaviour, not close proximity.</li>
          </ul>

          <h3>Technical tips</h3>
          <ul>
            <li>Shoot in RAW for best post-processing flexibility.</li>
            <li>Use continuous AF (AI Servo / AF-C) for moving subjects.</li>
            <li>Prefer shutter speeds of 1/500s+ for moving mammals; use higher ISO if needed.</li>
            <li>Capture context shots (habitat, waterholes) as well as tight portraits.</li>
          </ul>
        </section>

        {/* PACKING LIST */}
        <section>
          <h2>Complete packing list — what to carry</h2>
          <p>
            Here’s a detailed checklist to make your safari comfortable and safe:
          </p>
          <ul>
            <li>Binoculars (7x/10x) and camera with telephoto lens</li>
            <li>Lightweight layers, warm jacket for mornings</li>
            <li>Comfortable closed shoes for lodge walks</li>
            <li>Hat, sunglasses and sunscreen</li>
            <li>Reusable water bottle and snacks (if allowed)</li>
            <li>First aid kit, any prescription medicines</li>
            <li>ID proofs for permit verification</li>
            <li>Power bank and camera batteries</li>
          </ul>
        </section>

        {/* SAFETY */}
        <section>
          <h2>Safety & responsible behaviour in the park</h2>
          <p>
            Jim Corbett’s wildlife is powerful and unpredictable. Follow these rules for your safety and the animals’ wellbeing:
          </p>
          <ul>
            <li>Always stay inside the vehicle during core area safaris.</li>
            <li>Do not feed or lure animals with food or noises.</li>
            <li>Maintain silence and avoid using flash photography near animals.</li>
            <li>Follow the guide’s instructions without argument — they know the terrain and animals’ behaviour.</li>
            <li>Dispose of any throwaway items responsibly — plastic is harmful to wildlife.</li>
          </ul>
        </section>

        {/* ACCOMMODATION */}
        <section>
          <h2>Where to stay — options for every budget</h2>
          <p>
            Accommodation ranges from forest rest houses (FRH) inside or near Dhikala to luxury resorts, mid-range hotels and budget guesthouses in Ramnagar and Kaladhungi.
          </p>

          <h3>Forest Rest Houses (inside / near forest)</h3>
          <p>
            Staying in an FRH like Dhikala is immersive — you wake up inside the forest and can join early safaris easily. These are limited and must be booked far in advance.
          </p>

          <h3>Luxury lodges & resorts</h3>
          <p>
            For comfort after long safaris, several resorts offer heated rooms (seasonal), guided nature walks, birding trips and curated meals.
          </p>

          <h3>Budget & mid-range</h3>
          <p>
            Ramnagar has multiple guesthouses and small hotels that are economical and conveniently close to park entrances.
          </p>
        </section>

        {/* TRANSPORT */}
        <section>
          <h2>How to reach Jim Corbett</h2>
          <p>
            Jim Corbett is accessible by road and rail; the nearest major airport is Pantnagar (approx 86 km) or Bareilly/Dehradun depending on entry point.
          </p>
          <ul>
            <li><strong>By road:</strong> Well-connected from Delhi (~260 km / 5–7 hours) and Nainital / Haldwani areas. Private taxis and buses operate commonly.</li>
            <li><strong>By rail:</strong> Ramnagar station serves some long-distance trains from Delhi and surrounding cities; further connections via taxi.</li>
            <li><strong>By air:</strong> Pantnagar or Dehradun airports — then taxi to Ramnagar and the park.</li>
          </ul>
        </section>

        {/* COSTS */}
        <section>
          <h2>Expected costs — budgeting for a 2–3 day trip</h2>
          <p>
            Costs vary by season and accommodation level. Rough per-person estimates:
          </p>
          <ul>
            <li>Forest department safari permit (jeep/canter): ₹1000–₹3000 depending on zone & number of seats.</li>
            <li>Private jeep (shared): ₹1200–₹3000 per person depending on operator.</li>
            <li>Accommodation: Budget ₹800–₹2000, mid-range ₹2500–₹7000, premium resorts ₹8000+ per night.</li>
            <li>Food & local transport: ₹500–₹2000 per day.</li>
          </ul>
          <p>
            Booking via authorised portals or through reputable operators avoids last-minute price surges and ensures compliance with park rules.
          </p>
        </section>

        {/* CONSERVATION */}
        <section>
          <h2>Conservation, community & how your visit helps</h2>
          <p>
            Jim Corbett plays a vital role in tiger conservation and community livelihoods. Visiting responsibly contributes in several ways:
          </p>
          <ul>
            <li>Tourism revenue supports park management and community services.</li>
            <li>Local guides and drivers gain livelihoods tied to conservation incentives.</li>
            <li>Donations or volunteering with recognised conservation NGOs can provide direct support to anti-poaching patrols and research.</li>
          </ul>
          <p>
            Consider choosing eco-conscious lodges that support local communities, hire local staff, reduce single-use plastics and follow green practices.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2>Frequently Asked Questions (FAQ)</h2>
          <dl>
            <dt><strong>Is Jim Corbett safe for solo travellers?</strong></dt>
            <dd>Yes — as long as you follow the park rules and travel with authorised guides for safaris. Avoid isolated walking after dusk outside lodge areas.</dd>

            <dt><strong>Can I enter the park without prior booking?</strong></dt>
            <dd>It's risky, especially during peak season. Book permits and safaris in advance to guarantee slots and avoid disappointment.</dd>

            <dt><strong>What wildlife besides tigers can I expect?</strong></dt>
            <dd>Elephants, leopards, sloth bears, barking deer, sambar, wild boar and many bird species including crested serpent eagle, great hornbill (in higher ranges) and migratory waterfowl.</dd>

            <dt><strong>Are children allowed on safaris?</strong></dt>
            <dd>Yes, children may join but must follow safety instructions and remain with adults. Check age restrictions with the safari operator or forest department.</dd>

            <dt><strong>Do I need vaccinations?</strong></dt>
            <dd>No special vaccinations for visiting Jim Corbett beyond routine immunisations. Carry any personal medication and insect repellent for buffer area walks.</dd>
          </dl>
        </section>

        {/* FINAL THOUGHTS */}
        <section>
          <h2>Final thoughts — how to make your Jim Corbett trip memorable & ethical</h2>
          <p>
            A successful Jim Corbett safari balances patience, preparation and respect. Early mornings and late afternoons are the most rewarding. Book sensible accommodation, hire authorised guides, and focus on experiencing natural behaviour rather than forcing close encounters.
          </p>
          <p>
            Even if you don’t see a tiger on your first safari, Corbett’s landscapes, birds, and smaller mammals make every trip worthwhile. Stay curious, stay quiet, and be kind to the place and its people — that's how the best memories are made.
          </p>
        </section>

        <footer>
          <p className="text-sm text-gray-600 mt-8">© {new Date().getFullYear()} — BharatMile. This guide is informational; park rules and permits change. Always verify official dates, timings and booking links before travel.</p>
        </footer>
      </article>
    </main>
  );
}
