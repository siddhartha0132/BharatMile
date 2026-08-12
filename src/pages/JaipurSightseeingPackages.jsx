// src/pages/JaipurSightseeingPackages.jsx
// Route: /jaipur-sightseeing-packages
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, Phone, ArrowRight } from "lucide-react";

const WHATSAPP = "919636974688";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best Jaipur sightseeing packages offered by BharatMile?",
      acceptedAnswer: { "@type": "Answer", text: "BharatMile offers 1-day Jaipur sightseeing packages covering Amber Fort, City Palace, Hawa Mahal and Jantar Mantar; 2-day packages with heritage walks and shopping; and 5-day Rajasthan circuits combining Jaipur + Ranthambore. All include expert heritage guides and private transfers." }
    },
    {
      "@type": "Question",
      name: "What is the entry fee for Amber Fort Jaipur in 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Amber Fort entry fee in 2026: Indian adults ₹100, children (under 12) free; Foreign nationals ₹500. Audio guide ₹150 extra. BharatMile packages include all entry fees and a private guide." }
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Jaipur for sightseeing?",
      acceptedAnswer: { "@type": "Answer", text: "October to March is the best time to visit Jaipur for sightseeing. The weather is cool and pleasant (10–25°C). July–September is monsoon with heavy rains. April–June is extremely hot (40–45°C) and not recommended for heritage walks." }
    },
    {
      "@type": "Question",
      name: "Is Jaipur safe for solo female tourists and families?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Jaipur is generally safe for families and solo female travellers. BharatMile uses verified, licensed drivers and female-friendly accommodations. Always use trusted cabs and avoid isolated areas after dark." }
    },
    {
      "@type": "Question",
      name: "How many days are enough for Jaipur sightseeing?",
      acceptedAnswer: { "@type": "Answer", text: "2 days is ideal for most travellers to cover Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, Nahargarh Fort, and Jaigarh Fort. For a deeper experience including shopping, food tours, and Abhaneri stepwells, 3 days is recommended." }
    },
    {
      "@type": "Question",
      name: "Can I combine a Jaipur sightseeing package with a Ranthambore safari?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely! The Jaipur-Ranthambore combo is one of BharatMile's most popular packages. Jaipur is only 3.5 hours from Ranthambore, making it ideal for a 4–5 day Rajasthan circuit." }
    }
  ]
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Jaipur Sightseeing Tour Packages",
  "description": "Expert Jaipur heritage tours — Amber Fort, City Palace, Hawa Mahal. Private AC transfers and expert guides.",
  "image": "https://bharatmile.com/assets/amber-fort.jpg",
  "url": "https://bharatmile.com/jaipur-sightseeing-packages",
  "touristType": ["Families", "Couples", "History Enthusiasts"],
  "availableLanguage": ["English", "Hindi"],
  "provider": {
    "@type": "TravelAgency",
    "name": "BharatMile",
    "telephone": "+91-9636974688",
    "url": "https://bharatmile.com"
  }
};

const monuments = [
  { name: "Amber Fort (Amer Qila)", timing: "8 AM – 6 PM", fee: "₹100 (Indian) / ₹500 (Foreign)", highlight: "UNESCO Heritage hilltop fort with Sheesh Mahal mirror palace and elephant rides", duration: "2–3 hours", tag: "Must Visit" },
  { name: "City Palace", timing: "9:30 AM – 5 PM", fee: "₹200 (Indian) / ₹700 (Foreign)", highlight: "Living royal palace, Maharani's Chamber, Maharaja Sawai Singh II's museum", duration: "1.5–2 hours", tag: "Must Visit" },
  { name: "Hawa Mahal (Palace of Winds)", timing: "9 AM – 4:30 PM", fee: "₹50 (Indian) / ₹200 (Foreign)", highlight: "Iconic 5-storey honeycomb façade with 953 windows. Pink sandstone icon.", duration: "45 mins", tag: "Iconic" },
  { name: "Jantar Mantar", timing: "9 AM – 4:30 PM", fee: "₹50 (Indian) / ₹200 (Foreign)", highlight: "UNESCO-listed astronomical observatory, world's largest Samrat Yantra sundial", duration: "1 hour", tag: "UNESCO" },
  { name: "Nahargarh Fort", timing: "10 AM – 5:30 PM", fee: "₹50 (Indian) / ₹300 (Foreign)", highlight: "Hilltop fort with panoramic Jaipur views. Spectacular sunset spot.", duration: "1.5 hours", tag: "Sunset Spot" },
  { name: "Jaigarh Fort", timing: "9 AM – 4:45 PM", fee: "₹70 (Indian) / ₹300 (Foreign)", highlight: "Home to Jaivana — world's largest cannon on wheels. Palace complex & water tanks.", duration: "1.5–2 hours", tag: "Hidden Gem" },
  { name: "Birla Mandir", timing: "6 AM – 12 PM, 3–9 PM", fee: "Free", highlight: "Stunning white marble Hindu temple dedicated to Laxmi-Narayan.", duration: "30–45 mins", tag: "Spiritual" },
  { name: "Albert Hall Museum", timing: "9 AM – 5 PM, 7–10 PM (evening)", fee: "₹40 (Indian) / ₹300 (Foreign)", highlight: "Oldest museum in Rajasthan, Egyptian mummy, royal armoury, miniature paintings", duration: "1–1.5 hours", tag: "Cultural" },
  { name: "Sisodia Rani Garden", timing: "8 AM – 8 PM", fee: "₹30 (Indian)", highlight: "Mughal-style terraced garden with murals of Radha-Krishna. Peaceful & photogenic.", duration: "45 mins", tag: "Peaceful" },
  { name: "Panna Meena Ka Kund", timing: "Open all day", fee: "Free", highlight: "16th century stepped well (baoli) — geometric, photogenic, off-the-beaten-path", duration: "30 mins", tag: "Hidden Gem" },
];

const neighborhoods = [
  { area: "Old City (Pink City)", for: "Heritage lovers, first-time visitors", pros: "Walking distance to Hawa Mahal, City Palace, Jantar Mantar. Authentic bazaars at doorstep. Heritage havelis.", cons: "Loud, heavy traffic. Early morning noise.", hotels: "Pearl Palace Heritage, Hotel Diggi Palace", price: "₹1,500–₹5,000/night" },
  { area: "Bani Park", for: "Families, couples, repeat visitors", pros: "Quiet residential area, tree-lined streets. Close to Civil Lines restaurants. 15 min to Old City.", cons: "Requires transport to all sights.", hotels: "Hotel Bissau Palace, Vinayak Guest House", price: "₹2,000–₹8,000/night" },
  { area: "C-Scheme / Tonk Road", for: "Business travellers, luxury seekers", pros: "Modern hotels, restaurants, shopping malls. Closest to Jaipur airport/railway station.", cons: "Farthest from most heritage sights.", hotels: "ITC Rajputana, Trident Jaipur", price: "₹5,000–₹20,000/night" },
  { area: "Amber Road", for: "Photography enthusiasts, early risers", pros: "5 minutes from Amber Fort for dawn light. Quieter than Old City. Scenic hills nearby.", cons: "Limited restaurant options. Need own transport.", hotels: "Khas Bagh, Fort Amber hotel", price: "₹3,000–₹12,000/night" },
];

export default function JaipurSightseeingPackages() {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Jaipur Sightseeing Packages 2026 — Forts, Palaces & Heritage Tours | BharatMile</title>
        <meta name="description" content="Book Jaipur sightseeing packages with BharatMile. Expert-guided Amber Fort tours, City Palace visits, 1-day/2-day/5-day itineraries, entry fees guide 2026, best neighborhoods & food tips. Starting ₹2,999!" />
        <link rel="canonical" href="https://bharatmile.com/jaipur-sightseeing-packages" />
        <meta property="og:title" content="Jaipur Sightseeing Packages 2026 — Forts, Palaces & Heritage | BharatMile" />
        <meta property="og:description" content="Expert-guided Jaipur heritage tours — Amber Fort, City Palace, Hawa Mahal. 1-day/2-day/5-day packages from ₹2,999. Book with BharatMile!" />
        <meta property="og:image" content="https://bharatmile.com/assets/amber-fort.jpg" />
        <meta property="og:url" content="https://bharatmile.com/jaipur-sightseeing-packages" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(tourSchema)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d1400 50%, #1a0a0a 100%)", padding: "100px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139,69,19,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(201,151,42,0.12) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <nav style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#e8c56b" }}>Jaipur Sightseeing Packages</span>
          </nav>
          <div style={{ display: "inline-block", background: "rgba(139,69,19,0.25)", border: "1px solid rgba(201,151,42,0.5)", color: "#e8c56b", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 100, marginBottom: 24 }}>
            🏯 Jaipur's Most Trusted Heritage Tour Operator
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
            Jaipur Sightseeing Packages 2026<br />
            <span style={{ color: "#e8c56b", fontStyle: "italic" }}>Forts, Palaces & Heritage Tours</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Discover Jaipur's royal forts, ancient observatories, and pink sandstone palaces with BharatMile's expert heritage guides. From Amber Fort sunrise tours to Hawa Mahal photography walks — we make every moment memorable.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/${WHATSAPP}?text=Hi%20BharatMile!%20I%20want%20to%20book%20a%20Jaipur%20Sightseeing%20Package`} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: 4, fontWeight: 700, fontSize: "0.92rem", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              <Phone size={16} /> WhatsApp to Book Instantly
            </a>
            <a href="#itineraries" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 28px", borderRadius: 4, fontWeight: 500, fontSize: "0.92rem", textDecoration: "none" }}>
              View Itineraries <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, textAlign: "center" }}>
          {[
            { label: "Best Season", value: "Oct – Mar" },
            { label: "Top Monuments", value: "10+" },
            { label: "Nearest Airport", value: "Jaipur (JAI)" },
            { label: "From Delhi", value: "~270 km (5 hrs)" },
            { label: "UNESCO Sites", value: "2 (Fort & Jantar Mantar)" },
            { label: "Starting Price", value: "₹2,999 / person" },
          ].map(f => (
            <div key={f.label} style={{ padding: "12px 8px" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#8b4513" }}>{f.value}</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px", lineHeight: 1.75 }}>

        {/* ── ABOUT JAIPUR ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>About Jaipur — The Pink City of India</h2>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 16 }}>
            <strong>Jaipur</strong>, the capital of Rajasthan, is one of India's most spectacular heritage cities and the crown jewel of the famous <strong>Golden Triangle (Delhi – Agra – Jaipur)</strong>. Popularly known as <strong>"The Pink City"</strong> for its distinctively rose-hued sandstone architecture, Jaipur was founded in <strong>1727 by Maharaja Sawai Jai Singh II</strong> — India's first planned city, designed according to ancient Vastu Shastra principles.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 16 }}>
            With <strong>three UNESCO World Heritage Sites</strong> (Amber Fort, Jaipur's walled city, and Jantar Mantar), the city is a living museum of Rajput and Mughal architectural genius. Towering hill forts, opulent palaces, ancient observatories, step wells, royal cenotaphs, and colourful bazaars — Jaipur delivers an unparalleled tapestry of history, art, and culture.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#444" }}>
            BharatMile's Jaipur sightseeing packages are led by <strong>trained heritage guides</strong> who bring each monument alive with stories of the Kachwaha Rajput kings, Mughal alliances, and the city's living royal tradition. Every monument visit is paired with practical tips on timing, photography, and local insights you won't find in any guidebook.
          </p>
        </section>

        {/* ── MONUMENTS ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8, color: "#1c1c1e" }}>Top 10 Must-Visit Monuments & Places in Jaipur 2026</h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: 32 }}>Complete guide with entry fees, timings, and BharatMile tips for each site:</p>
          <div style={{ display: "grid", gap: 16 }}>
            {monuments.map((m, i) => (
              <div key={m.name} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.05)", display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, alignItems: "start" }}>
                <div style={{ width: 48, height: 48, background: "#fff8f0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: "#8b4513", border: "1px solid #f0d9cc", flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1c1c1e", margin: 0 }}>{m.name}</h3>
                    <span style={{ background: "#fff8f0", color: "#8b4513", fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 100, border: "1px solid #f0d9cc" }}>{m.tag}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#555", marginBottom: 10, lineHeight: 1.6 }}>{m.highlight}</p>
                  <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#888", flexWrap: "wrap" }}>
                    <span>🕐 {m.timing}</span>
                    <span>💰 {m.fee}</span>
                    <span>⏱ {m.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ITINERARIES ── */}
        <section id="itineraries" style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8, color: "#1c1c1e" }}>Jaipur Sightseeing Itineraries</h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: 40 }}>Expertly planned itineraries for every type of Jaipur visitor:</p>

          {/* 1-Day */}
          <div style={{ background: "#fff", border: "2px solid #8b4513", borderRadius: 16, padding: 36, marginBottom: 32, boxShadow: "0 4px 20px rgba(139,69,19,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#8b4513", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>1-Day Itinerary</div>
              <span style={{ fontSize: 14, color: "#888" }}>Golden Triangle stopover or quick Jaipur escape</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Jaipur Best of 1 Day — Highlights & Icons</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {[
                { time: "6:00 AM", act: "Amber Fort sunrise visit — Beat the heat and crowds. Expert guide explains Rajput-Mughal history. Sheesh Mahal interior tour." },
                { time: "9:00 AM", act: "Visit Jaigarh Fort (adjacent to Amber). See the Jaivana cannon. Panoramic valley views." },
                { time: "10:30 AM", act: "Drive to Hawa Mahal. Photography from the street (sunrise light is perfect) and interior balcony viewing." },
                { time: "11:30 AM", act: "Jantar Mantar (UNESCO) — world's largest stone astronomical observatory. Fascinating for all ages." },
                { time: "1:00 PM", act: "Traditional Rajasthani thali lunch at MI Road or Bapu Bazaar area." },
                { time: "2:30 PM", act: "City Palace visit — royal museum, Maharani's Chamber, courtyards, and spectacular gates." },
                { time: "5:00 PM", act: "Johari Bazaar and Bapu Bazaar shopping — gemstones, Mojri shoes, block-print textiles, bangles." },
                { time: "7:00 PM", act: "Nahargarh Fort sunset visit (optional). Or evening meal at a rooftop restaurant with Old City views." },
              ].map(s => (
                <div key={s.time} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ background: "#fff8f0", color: "#8b4513", fontWeight: 700, fontSize: 12, padding: "4px 8px", borderRadius: 6, whiteSpace: "nowrap", marginTop: 2 }}>{s.time}</span>
                  <span style={{ fontSize: 14, color: "#555" }}>{s.act}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, background: "#fff8f0", borderRadius: 8, padding: 16, fontSize: 14, color: "#666" }}>
              <strong>Includes:</strong> Private AC car, heritage guide, all monument entry fees, Amber Fort audio guide, lunch (optional add-on) &nbsp;|&nbsp; <strong>From ₹2,999 per person</strong>
            </div>
          </div>

          {/* 2-Day */}
          <div style={{ background: "#fff", border: "2px solid #c1644a", borderRadius: 16, padding: 36, marginBottom: 32, boxShadow: "0 4px 20px rgba(193,100,74,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#c1644a", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>2-Day Itinerary</div>
              <span style={{ fontSize: 14, color: "#888" }}>Most popular package — complete Jaipur experience</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Jaipur Heritage Deep Dive — 2 Days / 1 Night</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <h4 style={{ fontWeight: 700, color: "#8b4513", marginBottom: 12 }}>Day 1 — Royal Forts & Palaces</h4>
                {[
                  { time: "Morning", act: "Amber Fort + Jaigarh Fort (UNESCO heritage complex)" },
                  { time: "Noon", act: "City Palace + Jantar Mantar (UNESCO) + Hawa Mahal photo stop" },
                  { time: "Evening", act: "Old City heritage walk. Bapu Bazaar shopping." },
                  { time: "Night", act: "Dinner at rooftop restaurant — Old City views. Check-in heritage haveli." },
                ].map(s => (
                  <div key={s.time} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: "#8b4513", fontWeight: 700, fontSize: 12, minWidth: 65 }}>{s.time}</span>
                    <span style={{ fontSize: 14, color: "#555" }}>{s.act}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "#8b4513", marginBottom: 12 }}>Day 2 — Culture, Markets & Hidden Gems</h4>
                {[
                  { time: "Morning", act: "Nahargarh Fort sunrise. Albert Hall Museum. Sisodia Rani Garden." },
                  { time: "Noon", act: "Panna Meena Ka Kund stepwell (photogenic hidden gem). Chand Baori at Abhaneri (1-hr drive, optional)." },
                  { time: "Afternoon", act: "Johari Bazaar gemstones & jewellery. Tripolia Bazaar bangles. Local block-print textile workshop." },
                  { time: "Evening", act: "Traditional Rajasthani cultural show. Farewell dinner. Departure." },
                ].map(s => (
                  <div key={s.time} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: "#8b4513", fontWeight: 700, fontSize: 12, minWidth: 65 }}>{s.time}</span>
                    <span style={{ fontSize: 14, color: "#555" }}>{s.act}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 20, background: "#fff8f4", borderRadius: 8, padding: 16, fontSize: 14, color: "#666" }}>
              <strong>Includes:</strong> 1 night heritage hotel, private AC car (2 days), expert guide, all entry fees, cultural show, select meals &nbsp;|&nbsp; <strong>From ₹5,999 per person (twin sharing)</strong>
            </div>
          </div>

          {/* 5-Day */}
          <div style={{ background: "#fff", border: "2px solid #2d5a27", borderRadius: 16, padding: 36, boxShadow: "0 4px 20px rgba(45,90,39,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#2d5a27", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>5-Day Itinerary</div>
              <span style={{ fontSize: 14, color: "#888" }}>Complete Rajasthan circuit — Jaipur + Ranthambore</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Royal Rajasthan — Jaipur & Ranthambore Grand Tour (5 Days / 4 Nights)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {[
                { day: "Day 1", title: "Arrive Jaipur", desc: "Airport/station pickup. Heritage hotel check-in. Orientation walk in Old City. Dinner." },
                { day: "Day 2", title: "Jaipur Forts & Palaces", desc: "Amber Fort sunrise → Jaigarh Fort → City Palace → Jantar Mantar → Hawa Mahal. Shopping at Johari Bazaar." },
                { day: "Day 3", title: "Jaipur Hidden Gems + Departure", desc: "Nahargarh Fort sunrise. Panna Meena Ka Kund. Albert Hall Museum. Afternoon drive to Ranthambore (3.5 hrs). Evening Gypsy safari." },
                { day: "Day 4", title: "Full Ranthambore Safari Day", desc: "Dawn safari (Zone 1/2/3). Ranthambore Fort + Ganesh Temple. Afternoon safari (Zone 4/5). Naturalist wildlife talk." },
                { day: "Day 5", title: "Departure", desc: "Optional morning safari. Resort checkout. Transfer to Sawai Madhopur station or Jaipur airport." },
              ].map(d => (
                <div key={d.day} style={{ background: "#f8fdf8", border: "1px solid #d4edd4", borderRadius: 10, padding: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#2d5a27", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{d.day}</div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8, color: "#1c1c1e" }}>{d.title}</h4>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, background: "#f8fdf8", borderRadius: 8, padding: 16, fontSize: 14, color: "#666", border: "1px solid #d4edd4" }}>
              <strong>Includes:</strong> 4 nights (2 Jaipur heritage hotel + 2 Ranthambore jungle resort), private AC car throughout, expert heritage + naturalist guides, 2 Ranthambore safari slots, all entry fees &nbsp;|&nbsp; <strong>From ₹16,999 per person (twin sharing)</strong>
            </div>
          </div>
        </section>

        {/* ── BEST NEIGHBORHOODS ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8, color: "#1c1c1e" }}>Where to Stay in Jaipur: Best Neighborhoods for Tourists</h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: 32 }}>Choosing the right area can make a huge difference to your Jaipur experience:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {neighborhoods.map(n => (
              <div key={n.area} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#8b4513", marginBottom: 4 }}>{n.area}</h3>
                <p style={{ fontSize: 13, color: "#888", marginBottom: 12, fontStyle: "italic" }}>Best for: {n.for}</p>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "#2d5a27", fontWeight: 600 }}>✅ Pros: </span>
                  <span style={{ fontSize: 13, color: "#555" }}>{n.pros}</span>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 13, color: "#c1644a", fontWeight: 600 }}>⚠️ Cons: </span>
                  <span style={{ fontSize: 13, color: "#555" }}>{n.cons}</span>
                </div>
                <div style={{ fontSize: 13, color: "#555", marginBottom: 8 }}><strong>Popular Hotels:</strong> {n.hotels}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#8b4513" }}>{n.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── JAIPUR FOOD ── */}
        <section style={{ marginBottom: 80, background: "#fff8f0", borderRadius: 16, padding: 40, border: "1px solid #f0d9cc" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Must-Try Jaipur Food & Cuisine</h2>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 24 }}>
            Jaipur's food is as rich as its architecture. Here are the dishes and places our guides always recommend:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { dish: "Dal Baati Churma", note: "Rajasthan's signature dish — baked wheat balls in ghee, lentil dal, and sweet churma powder", where: "Chokhi Dhani, LMB Restaurant" },
              { dish: "Laal Maas", note: "Fiery Rajasthani mutton curry with mathania red chillies — a royal delicacy", where: "Niros Restaurant, 1135 AD" },
              { dish: "Pyaaz Kachori", note: "Jaipur's iconic street breakfast — crisp pastry filled with spiced onion. Try at Rawat's.", where: "Rawat Mishthan Bhandar (MI Road)" },
              { dish: "Gatte ki Sabzi", note: "Gram flour dumplings in spiced yoghurt gravy — comforting vegetarian Rajasthani classic", where: "Suvarna Mahal, Rambagh Palace" },
              { dish: "Ker Sangri", note: "Wild berries and beans from the Rajasthani desert — earthy, tangy, utterly unique", where: "Local thali restaurants in Old City" },
              { dish: "Ghewar & Malpua", note: "Jaipur's sweet obsession — honeycomb-shaped fried dessert soaked in sugar syrup", where: "Rawat Sweets, Old City halwai shops" },
            ].map(f => (
              <div key={f.dish} style={{ background: "#fff", borderRadius: 10, padding: 20, border: "1px solid #f0d9cc" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#8b4513", marginBottom: 6 }}>{f.dish}</h3>
                <p style={{ fontSize: 13, color: "#555", marginBottom: 8, lineHeight: 1.6 }}>{f.note}</p>
                <p style={{ fontSize: 12, color: "#888" }}>📍 {f.where}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section style={{ marginBottom: 80, background: "#fff", borderRadius: 16, padding: 40, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 24, color: "#1c1c1e" }}>Further Reading — Jaipur & Ranthambore Guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {[
              { title: "The Ultimate 3-Day Jaipur Itinerary for History Lovers", href: "/blogs/3-day-jaipur-itinerary-history-lovers" },
              { title: "Top 10 Must-Visit Monuments in Jaipur 2026", href: "/blogs/top-10-monuments-jaipur-2026" },
              { title: "Where to Stay in Jaipur: Best Neighborhoods", href: "/blogs/where-to-stay-jaipur-best-neighborhoods" },
              { title: "Jaipur Fort Complete Guide", href: "/blogs/jaipur-fort-complete-guide" },
              { title: "Jaipur vs Udaipur: Which City to Visit?", href: "/jaipur-vs-udaipur-which-city-to-visit" },
              { title: "Jaipur Local Food Family Guide", href: "/blogs/jaipur-local-food-family-guide" },
              { title: "Family-Friendly Hotels in Jaipur Under ₹5,000", href: "/blogs/family-friendly-hotels-jaipur-under-5000" },
              { title: "A Couple's Guide to 48 Hours in Jaipur", href: "/blogs/jaipur-couple-guide-48-hours" },
              { title: "Ranthambore Safari Tours (Combine with Jaipur) →", href: "/ranthambore-safari-tours" },
              { title: "Jaipur Complete City Guide →", href: "/city/jaipur" },
            ].map(l => (
              <Link key={l.href} to={l.href} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 0", color: "#8b4513", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500, borderBottom: "1px dashed #f0d9cc" }}>
                <ArrowRight size={14} style={{ flexShrink: 0 }} />{l.title}
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 32, color: "#1c1c1e" }}>Frequently Asked Questions — Jaipur Sightseeing</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {faqSchema.mainEntity.map(faq => (
              <div key={faq.name} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "#1c1c1e" }}>{faq.name}</h3>
                <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.65 }}>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d1400 100%)", borderRadius: 20, padding: 60, textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139,69,19,0.25) 0%, transparent 50%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
              Ready to Explore<br /><span style={{ color: "#e8c56b" }}>Royal Jaipur with BharatMile?</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7 }}>
              Tell us your dates, group size, and interests on WhatsApp. We'll craft a personalised Jaipur itinerary — with or without a Ranthambore safari add-on.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`https://wa.me/${WHATSAPP}?text=Hi%20BharatMile!%20I%20want%20to%20book%20a%20Jaipur%20Sightseeing%20Package.%20Please%20share%20package%20details.`} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "16px 32px", borderRadius: 6, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                🏯 Book Now on WhatsApp
              </a>
              <Link to="/ranthambore-safari-tours" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", padding: "16px 32px", borderRadius: 6, fontWeight: 500, fontSize: "1rem", textDecoration: "none" }}>
                🐯 Also See Ranthambore Safaris
              </Link>
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>📞 +91-9636974688 &nbsp;|&nbsp; Starting ₹2,999 per person &nbsp;|&nbsp; Free itinerary consultation</p>
          </div>
        </section>

      </main>
    </div>
  );
}
