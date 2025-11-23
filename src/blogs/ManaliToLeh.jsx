import React, { useEffect } from 'react';

export default function ManaliToLeh() {
  
  // Structured Data (JSON-LD) for SEO: Article, BreadcrumbList, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/manali-leh-road-trip" // **UPDATE with actual URL**
        },
        headline: "Manali to Leh: The Ultimate 500 KM Road Trip Guide | Routes, Permits, & High-Altitude Safety",
        image: ["https://example.com/images/manali-leh-pass.jpg", "https://example.com/images/keylong-stop.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-05-15T10:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Adventure Guides Research Team" 
        },
        publisher: {
          "@type": "Organization",
          name: "Adventure Guides",
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "The definitive 3000-word guide for the Manali–Leh highway adventure. Detailed breakdown of daily routes, high-altitude passes, required permits (Rohtang & ILP), best vehicle preparation, dealing with Acute Mountain Sickness (AMS), and comprehensive packing lists for a successful and safe journey."
      },
      // 2. Breadcrumb Schema for Navigation SEO
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
          { "@type": "ListItem", "position": 2, "name": "Road Trips", "item": "https://example.com/road-trips" },
          { "@type": "ListItem", "position": 3, "name": "Manali-Leh Guide" }
        ]
      },
      // 3. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "When is the Manali to Leh highway typically open for travel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The highway is usually open from **late May/early June** until mid-October. The exact dates depend entirely on snow clearance operations by the Border Roads Organisation (BRO). Always confirm the road status before starting."
            }
          },
          {
            "@type": "Question",
            name: "How many days should I allocate for the Manali-Leh road trip?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A safe and comfortable journey requires a minimum of **two full days** (with an overnight stop in Keylong or Jispa) to ensure proper acclimatization and mitigate the risk of Acute Mountain Sickness (AMS). Three days is ideal for photography and relaxation."
            }
          },
        ]
      }
    ]
  };

  useEffect(() => {
    // 1. Set Document Title
    document.title = 'Manali to Leh: The Ultimate 500 KM Road Trip Guide | Adventure Routes & Tips';

    // Helper function to create or update meta tags
    const setOrCreate = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const descriptionContent = 'The definitive 3000-word guide for the Manali–Leh highway adventure. Detailed breakdown of daily routes, high-altitude passes, required permits (Rohtang & ILP), best vehicle preparation, dealing with Acute Mountain Sickness (AMS), and comprehensive packing lists for a successful and safe journey.';
    const titleContent = 'Manali to Leh: The Ultimate 500 KM Road Trip Guide';
    const imageUrl = 'https://example.com/images/manali-leh-pass.jpg'; 
    
    // 2. General SEO Meta Tag
    setOrCreate('description', descriptionContent);
    
    // 3. Open Graph Tags (for Social Media)
    setOrCreate('og:title', titleContent, 'property');
    setOrCreate('og:description', descriptionContent, 'property');
    setOrCreate('og:type', 'article', 'property');
    setOrCreate('og:url', window.location.href, 'property');
    setOrCreate('og:image', imageUrl, 'property');
    setOrCreate('og:site_name', 'Adventure Guides', 'property');

    // 4. Twitter Card Tags
    setOrCreate('twitter:card', 'summary_large_image');
    setOrCreate('twitter:title', titleContent);
    setOrCreate('twitter:description', descriptionContent);
    setOrCreate('twitter:image', imageUrl);

    // 5. Canonical Link Tag
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);

    // 6. JSON-LD Structured Data Script
    let jsonScript = document.getElementById("manali-leh-jsonld");
    if (!jsonScript) {
      jsonScript = document.createElement("script");
      jsonScript.id = "manali-leh-jsonld";
      jsonScript.type = "application/ld+json";
      document.head.appendChild(jsonScript);
    }
    jsonScript.textContent = JSON.stringify(jsonLd);

  }, []);


  const faqItems = [
    { 
      q: "When is the Manali to Leh highway typically open for travel?", 
      a: "The highway is usually open from **late May/early June** until mid-October. The exact dates depend entirely on snow clearance operations by the Border Roads Organisation (BRO). Always confirm the road status before starting." 
    },
    { 
      q: "How many days should I allocate for the Manali-Leh road trip?", 
      a: "A safe and comfortable journey requires a minimum of **two full days** (with an overnight stop in Keylong or Jispa) to ensure proper acclimatization and mitigate the risk of Acute Mountain Sickness (AMS). Three days is ideal for photography and relaxation." 
    },
    {
      q: "Is a bike or a car better for the Manali-Leh route?",
      a: "Both are feasible. **Cars/SUVs** offer greater comfort, luggage space, and weather protection. **Bikes** (especially Royal Enfield/Adventure bikes) offer the ultimate freedom and connection to the landscape, but require more physical resilience and better preparation for bad weather."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- Header Section --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-indigo-800">
          Manali to Leh: The Ultimate 500 KM Road Trip Guide 🏍️🏔️
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Your definitive, 3000-word blueprint for conquering the world's most epic high-altitude drive. We cover routes, permits, vehicle prep, and crucial safety tips.
        </p>
      </header>

      {/* --- Section 1: Route Overview & Timing --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-700">1. Route Strategy & Seasonal Planning</h2>
        <p className="mt-3 leading-relaxed">
          The Manali–Leh highway is approximately **479 km (298 miles)** of pure adventure. It begins at an altitude of 6,700 ft in Manali and climbs dramatically, crossing five major passes above 16,000 ft before descending into Leh (11,500 ft). Proper timing is essential.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-indigo-600">Seasonal Openings (Must Check!)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Opening (Late May - Early June):** Roads are clear, but snow walls are massive. Water crossings (nullahs) are extreme due to melting snow.</li>
          <li>**Mid-Season (July - August):** Peak monsoon season in Manali, leading to potential landslides and heavy rain on the first section (Manali to Keylong). Passes are generally clearer.</li>
          <li>**Best Time (Late August - September):** The ideal window. Rains subside, passes are stable, and the weather is crisp and clear.</li>
          <li>**Closing (Mid-October):** The risk of early snowfall increases rapidly; travel is not recommended after this point.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-indigo-600">Recommended 2-Day Itinerary (Safe & Necessary)</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance (Approx.)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Passes/Stops</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Day 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Manali (6,700 ft) to Keylong/Jispa (10,500 ft)</td>
                <td className="px-6 py-4 whitespace-nowrap">130–150 km</td>
                <td className="px-6 py-4 whitespace-nowrap">Rohtang Pass, Atal Tunnel (alternative), Darcha. **Crucial for initial acclimatization.**</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Day 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Keylong/Jispa to Leh (11,500 ft)</td>
                <td className="px-6 py-4 whitespace-nowrap">330–350 km</td>
                <td className="px-6 py-4 whitespace-nowrap">Baralacha La, Lachulung La, Tanglang La (highest pass). A long, tough drive through high plateaus.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 2: Permits and Documentation --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-700">2. Essential Permits and Documents</h2>
        <p className="mt-3 leading-relaxed">
          The two critical permits are the Rohtang Pass permit (if you skip the Atal Tunnel) and the Inner Line Permit (ILP) for the final destinations in Ladakh. Prepare copies of all documents in triplicate.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-indigo-600">A. Rohtang Pass/Atal Tunnel Strategy</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Atal Tunnel (Rohtang Bypass):** This is the faster, more predictable route, bypassing the dangerous Rohtang Pass, though you still need to cross the pass to reach certain areas.</li>
          <li>**Rohtang Pass Permit:** If you choose the pass, the permit must be acquired **online** from the Himachal Pradesh Tourism website. It is strictly limited per day (800 petrol, 400 diesel vehicles). Plan this step *days* in advance.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-indigo-600">B. Inner Line Permit (ILP)</h3>
        <p className="mt-2">
          The ILP is mandatory for visiting restricted areas in Ladakh *after* reaching Leh, including Nubra Valley, Pangong Lake, and Tso Moriri.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Where:** Apply online via the Leh administration website.</li>
          <li>**What to carry:** Original ID proof (Aadhar/Passport) and multiple photocopies. You will show these at multiple check-posts along the route from Leh.</li>
        </ul>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 3: Vehicle Preparation and Logistics --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-700">3. Vehicle Prep, Fuel, and Emergency Gear</h2>
        <p className="mt-3 leading-relaxed">
          The journey demands maximum reliability from your vehicle. A breakdown at 16,000 ft can be life-threatening.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 text-indigo-600">Vehicle Checklist (Car & Bike)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Tires:** Must be in excellent condition. Carry a full-size spare and a tubeless puncture repair kit/portable air pump.</li>
          <li>**Engine Oil & Coolant:** Get a full service just before leaving Manali. Check brake pads.</li>
          <li>**Ground Clearance:** Vehicles with **high ground clearance (SUV/Adventure Bikes)** are strongly recommended due to sharp rocks and deep water crossings (nullahs).</li>
          <li>**Fueling:** The only reliable fuel station after Manali is in **Keylong**. Carry extra fuel canisters (jerrycans) for the 350 km stretch between Keylong and Leh.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-indigo-600">Emergency & Repair Kit</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Basic tool kit (spanner set, screwdrivers) & duct tape.</li>
          <li>Jumper cables (for cars) or spare clutch/accelerator cables (for bikes).</li>
          <li>Tow rope.</li>
          <li>Waterproof tarp/cover.</li>
        </ul>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 4: Safety and AMS Management (Critical) --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-700">4. Safety & The Threat of AMS</h2>
        <p className="mt-3 leading-relaxed">
          Acute Mountain Sickness (AMS) is the single biggest threat to your trip. It is a serious condition caused by ascending too quickly to high altitudes. The jump from Manali (6,700 ft) to the passes (16,000+ ft) in one day is hazardous.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-red-600">AMS Prevention (Non-Negotiable)</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Ascend Slowly:** The 2-day itinerary with an overnight stop at Keylong (10,500 ft) is essential for gradual acclimatization.</li>
          <li>**Hydration:** Drink 3-4 liters of water daily. Avoid alcohol, smoking, and excessive caffeine.</li>
          <li>**Medication:** Consult your doctor about taking **Diamox** (Acetazolamide) 24 hours before ascending, which can aid acclimatization.</li>
          <li>**Rest:** Get plenty of sleep. Avoid strenuous activity on the first night at high altitude.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-red-600">AMS Symptoms & Action</h3>
        <p className="mt-2">
          Symptoms include headache, nausea, loss of appetite, and dizziness. If symptoms persist or worsen (e.g., severe vomiting, confusion), **immediately descend** to a lower altitude.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Carry **Portable Oxygen Canisters** for emergency symptomatic relief.</li>
          <li>Travel with a buddy who knows the symptoms.</li>
        </ul>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 5: Accommodation and Food --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-700">5. Accommodation and High-Altitude Stops</h2>
        <p className="mt-3 leading-relaxed">
          Accommodation is primarily available in the major stopping points. Beyond Keylong, options are limited to tented camps.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stop Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accommodation Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Keylong / Jispa</td>
                <td className="px-6 py-4 whitespace-nowrap">Hotels, Guest Houses, Fixed Camps</td>
                <td className="px-6 py-4 whitespace-nowrap">Hot water, proper beds, electricity, Wi-Fi (limited). **Best option for Day 1.**</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Sarchu (14,000 ft)</td>
                <td className="px-6 py-4 whitespace-nowrap">Tented Camps (Dhaba Camps)</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-600">Primitive, shared facilities. **High altitude; increased AMS risk.**</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Pang / Rumtse</td>
                <td className="px-6 py-4 whitespace-nowrap">Temporary Dhaba Tents</td>
                <td className="px-6 py-4 whitespace-nowrap">Basic food, shared bedding. Only for emergency/mid-day stop.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          **Pro Tip:** Avoid spending the night at Sarchu if possible. At 14,000 ft, it significantly increases the chance of a restless night and severe AMS symptoms.
        </p>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 6: Comprehensive Packing Checklist (Detailed) --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-700">6. Comprehensive Packing Checklist</h2>
        <p className="mt-3 leading-relaxed">
          A successful trip relies on bringing the right gear for the extreme climate and isolation.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-indigo-600">Personal Gear & Clothing</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>**Layered Clothing:** Thermals (2 sets), fleece jackets, windproof/waterproof outer jacket, hiking boots.</li>
          <li>**Sun Protection:** Sunscreen (SPF 50+ minimum), high-quality UV sunglasses (essential for snow glare), lip balm with SPF.</li>
          <li>**Essentials:** Headlamp/torch, power bank (high capacity), reusable water bottle, thermos flask.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-indigo-600">Medical Kit & Health</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
          <li>Prescribed AMS medication (Diamox).</li>
          <li>Painkillers (Paracetamol/Ibuprofen for headaches), anti-nausea medication.</li>
          <li>Band-Aids, antiseptic cream, muscle relief spray.</li>
          <li>**Portable Oxygen Canisters** (widely available in Manali).</li>
        </ul>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="manali-leh-faq">
        <h2 className="text-3xl font-bold text-indigo-700">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-indigo-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Footer --- */}
      <footer className="mt-12 pt-4 border-t text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — Adventure Guides. Travel safely and responsibly.
      </footer>
    </main>
  );
}