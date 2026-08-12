// src/pages/RanthambhoreSafariTours.jsx
// Route: /ranthambore-safari-tours
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, Phone, ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP = "919636974688";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I book a Ranthambore safari tour with BharatMile?",
      acceptedAnswer: { "@type": "Answer", text: "You can book a Ranthambore safari tour by messaging BharatMile on WhatsApp at +91-9636974688. We arrange Gypsy/Canter permits, zone selection, naturalist guide, and resort stay in one package." }
    },
    {
      "@type": "Question",
      name: "What is the best safari zone in Ranthambore for tiger sightings?",
      acceptedAnswer: { "@type": "Answer", text: "Zones 1–5 are the core zones with the highest tiger density. Zone 3 (Lahpur) and Zone 4 (Kachida) near Rajbagh and Padam Talab lakes are most popular for tiger sightings, especially in October–March." }
    },
    {
      "@type": "Question",
      name: "What is the entry fee for Ranthambore National Park in 2026?",
      acceptedAnswer: { "@type": "Answer", text: "Entry fees in 2026: Indian adults ₹200, children under 12 ₹100. Safari vehicle charges are separate — Gypsy ₹3,000–₹4,500 per vehicle, Canter ₹800–₹1,200 per person. Guide fee (mandatory) ₹300–₹600." }
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Ranthambore for tiger sightings?",
      acceptedAnswer: { "@type": "Answer", text: "October to June is the best time. March to May is peak tiger sighting season when animals visit watering holes frequently. October to February offers comfortable weather (15–28°C) ideal for families." }
    },
    {
      "@type": "Question",
      name: "Is Ranthambore safari safe for children and families?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, Ranthambore is India's most family-friendly tiger reserve. Children of any age can take a Gypsy safari; Canter safari requires children above 5. Our expert guides ensure complete safety." }
    },
    {
      "@type": "Question",
      name: "Gypsy vs Canter — which is better for Ranthambore?",
      acceptedAnswer: { "@type": "Answer", text: "Gypsy (6-seater open jeep) offers more privacy, better photography angles, and can go deeper into core zones. Canter (20-seater) is more budget-friendly for larger groups. Families with young children prefer the Gypsy." }
    }
  ]
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Ranthambore Safari Tour Packages",
  description: "Expert Ranthambore tiger safari tours — Gypsy & Canter bookings, zones 1–10, family & couple packages, resort stays, and Jaipur transfers.",
  image: "https://bharatmile.com/assets/Ranthambore.webp",
  url: "https://bharatmile.com/ranthambore-safari-tours",
  touristType: ["Families", "Couples", "Wildlife Enthusiasts"],
  availableLanguage: ["English", "Hindi"],
  provider: {
    "@type": "TravelAgency",
    name: "BharatMile",
    telephone: "+91-9636974688",
    url: "https://bharatmile.com"
  }
};

const zones = [
  { zone: "Zone 1 — Nalghati", tiger: "⭐⭐⭐⭐⭐", highlight: "Highest tiger density, close sightings near ridgeline", vehicle: "Gypsy only", tip: "Book 45 days in advance — slots fill first" },
  { zone: "Zone 2 — Lahpur", tiger: "⭐⭐⭐⭐⭐", highlight: "Near lake, excellent early morning sightings", vehicle: "Gypsy only", tip: "Best for photography enthusiasts" },
  { zone: "Zone 3 — Bakola", tiger: "⭐⭐⭐⭐", highlight: "Dense forest, leopards and sloth bears", vehicle: "Gypsy only", tip: "Great for birding alongside tiger sightings" },
  { zone: "Zone 4 — Kachida", tiger: "⭐⭐⭐⭐⭐", highlight: "Padam Talab lake, frequent tiger sightings, family favourite", vehicle: "Gypsy + Canter", tip: "Most popular zone — book early" },
  { zone: "Zone 5 — Kundal", tiger: "⭐⭐⭐⭐", highlight: "Rajbagh Talab, great tiger and crocodile sightings", vehicle: "Gypsy + Canter", tip: "Scenic lake views perfect for photography" },
  { zone: "Zones 6–10 — Buffer", tiger: "⭐⭐⭐", highlight: "Quieter safari, birdwatching, sambar herds", vehicle: "Gypsy + Canter", tip: "Ideal if core zones are fully booked" },
];

export default function RanthambhoreSafariTours() {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Book Ranthambore Safari Tours 2026 — Zones, Packages & Itineraries | BharatMile</title>
        <meta name="description" content="Book Ranthambore safari tours with BharatMile. Expert guide to Zones 1–10, Gypsy vs Canter, 1-day/2-day/5-day itineraries, safari fees 2026, and best time to visit. WhatsApp for instant booking!" />
        <link rel="canonical" href="https://bharatmile.com/ranthambore-safari-tours" />
        <meta property="og:title" content="Book Ranthambore Safari Tours 2026 | BharatMile" />
        <meta property="og:description" content="Expert Ranthambore tiger safari tours — Zones 1–10 guide, Gypsy/Canter booking, 1-day/2-day/5-day itineraries. Starting ₹4,999." />
        <meta property="og:image" content="https://bharatmile.com/assets/Ranthambore.webp" />
        <meta property="og:url" content="https://bharatmile.com/ranthambore-safari-tours" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(tourSchema)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #1a1a0a 0%, #2d1b00 50%, #1a1a0a 100%)", padding: "100px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(193,100,74,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(201,151,42,0.1) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <nav style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#e8c56b" }}>Ranthambore Safari Tours</span>
          </nav>
          <div style={{ display: "inline-block", background: "rgba(193,100,74,0.2)", border: "1px solid rgba(193,100,74,0.5)", color: "#e8c56b", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 100, marginBottom: 24 }}>
            🐯 Rajasthan's #1 Safari Tour Specialist
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
            Book Ranthambore Safari Tours 2026<br />
            <span style={{ color: "#e8c56b", fontStyle: "italic" }}>Tiger Zones, Packages & Itineraries</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            From Zone 1 tiger sightings to the ancient Ranthambore Fort — BharatMile plans your complete Ranthambore experience with verified permits, expert naturalist guides, and seamless resort stays.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/${WHATSAPP}?text=Hi%20BharatMile!%20I%20want%20to%20book%20a%20Ranthambore%20Safari%20Tour`} target="_blank" rel="noopener noreferrer"
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
            { label: "Best Season", value: "Oct – Jun" },
            { label: "Safari Zones", value: "1 – 10" },
            { label: "Safari Types", value: "Gypsy / Canter" },
            { label: "Nearest Station", value: "Sawai Madhopur" },
            { label: "Distance from Jaipur", value: "~180 km (3.5 hrs)" },
            { label: "Starting Price", value: "₹4,999 / person" },
          ].map(f => (
            <div key={f.label} style={{ padding: "12px 8px" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#c1644a" }}>{f.value}</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px", lineHeight: 1.75 }}>

        {/* ── ABOUT RANTHAMBORE ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>About Ranthambore National Park</h2>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 16 }}>
            <strong>Ranthambore National Park</strong> is India's most celebrated tiger reserve, located in the <strong>Sawai Madhopur district of Rajasthan</strong>, approximately 180 km from Jaipur. Spanning over 1,334 square kilometres, this UNESCO World Heritage-adjacent park is part of <strong>Project Tiger</strong> and is home to one of India's largest Bengal tiger populations.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 16 }}>
            Once the exclusive hunting grounds of the Jaipur royal family, Ranthambore was declared a wildlife sanctuary in 1955 and a national park in 1980. Today, it is celebrated for its dramatic landscapes — ancient ruins, shimmering lakes, rocky hillsides, and dense dry deciduous forests — that make every safari an extraordinary visual experience, whether or not you spot a tiger.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#444" }}>
            The park is divided into <strong>10 safari zones</strong>: Zones 1–5 are the core zones with the highest tiger density, while Zones 6–10 are the buffer zones offering quieter wildlife encounters. Safaris operate in two daily slots — <strong>morning (6:00–10:00 AM)</strong> and <strong>afternoon (2:30–6:30 PM)</strong> — aboard open-top Gypsy jeeps or larger Canter vehicles.
          </p>
        </section>

        {/* ── ZONE GUIDE ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8, color: "#1c1c1e" }}>Ranthambore Safari Zones 1–10: Complete Guide</h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: 32 }}>
            Choosing the right zone is critical to your <strong>Ranthambore safari experience</strong>. Here is BharatMile's expert breakdown of all 10 zones:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {zones.map((z) => (
              <div key={z.zone} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#c1644a", marginBottom: 8 }}>{z.zone}</h3>
                <div style={{ fontSize: "1rem", marginBottom: 6 }}>{z.tiger} Tiger Probability</div>
                <p style={{ fontSize: 14, color: "#555", marginBottom: 8 }}><strong>Highlight:</strong> {z.highlight}</p>
                <p style={{ fontSize: 14, color: "#555", marginBottom: 8 }}><strong>Vehicle:</strong> {z.vehicle}</p>
                <p style={{ fontSize: 13, color: "#888", fontStyle: "italic" }}>💡 {z.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GYPSY VS CANTER ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Gypsy vs Canter Safari: Which Should You Book?</h2>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 24 }}>
            One of the most common questions we get at BharatMile is: <strong>"Is a Gypsy or Canter better for Ranthambore?"</strong> The answer depends on your group size, budget, and photography goals. Here's our expert comparison:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem", background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <thead>
                <tr style={{ background: "#c1644a", color: "#fff" }}>
                  <th style={{ padding: "14px 16px", textAlign: "left" }}>Feature</th>
                  <th style={{ padding: "14px 16px", textAlign: "left" }}>🚙 Gypsy (6-seater Jeep)</th>
                  <th style={{ padding: "14px 16px", textAlign: "left" }}>🚌 Canter (20-seater)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Best For", "Small families, couples, photographers", "Budget groups, school trips"],
                  ["Privacy", "✅ High — your private vehicle", "❌ Shared with 19 others"],
                  ["Zone Access", "✅ All 10 zones", "⚠️ Zones 4–10 only"],
                  ["Cost (2026)", "₹3,000–₹4,500 per vehicle", "₹800–₹1,200 per person"],
                  ["Children Allowed", "✅ Any age", "⚠️ Above 5 years only"],
                  ["Photography", "✅ Excellent — open sides, low profile", "❌ Limited angles, height disadvantage"],
                  ["Advance Booking", "60 days recommended", "30 days recommended"],
                  ["Tiger Sighting Chance", "⭐⭐⭐⭐⭐ Higher (private, quieter)", "⭐⭐⭐ Lower (larger, louder)"],
                ].map(([feat, gyp, can], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{feat}</td>
                    <td style={{ padding: "12px 16px", color: "#333" }}>{gyp}</td>
                    <td style={{ padding: "12px 16px", color: "#333" }}>{can}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 16, fontSize: 14, color: "#888", fontStyle: "italic" }}>
            💡 <strong>BharatMile Recommendation:</strong> Families with children and photography enthusiasts should always choose the Gypsy. For groups of 8+ on a budget, the Canter offers good value.
          </p>
        </section>

        {/* ── SAFARI FEES 2026 ── */}
        <section style={{ marginBottom: 80, background: "#fff8f4", border: "1px solid #f0d9cc", borderRadius: 16, padding: 40 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Ranthambore Safari Entry Fees & Costs 2026</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { item: "Entry Fee — Indian Adult", price: "₹200" },
              { item: "Entry Fee — Child (under 12)", price: "₹100" },
              { item: "Entry Fee — Foreign National", price: "₹1,500" },
              { item: "Gypsy Safari (6 pax)", price: "₹3,000–₹4,500" },
              { item: "Canter Safari (per person)", price: "₹800–₹1,200" },
              { item: "Naturalist Guide (mandatory)", price: "₹300–₹600" },
              { item: "Camera Fee (still)", price: "₹200" },
              { item: "Video Camera Fee", price: "₹5,000" },
            ].map(f => (
              <div key={f.item} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#fff", borderRadius: 8, border: "1px solid #eee" }}>
                <span style={{ fontSize: 14, color: "#444", fontWeight: 500 }}>{f.item}</span>
                <span style={{ fontSize: 15, color: "#c1644a", fontWeight: 700, marginLeft: 8, whiteSpace: "nowrap" }}>{f.price}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: "#888" }}>* Fees are indicative for 2026 season. Government fees subject to change. BharatMile packages include all forest fees, guide, and vehicle.</p>
        </section>

        {/* ── BEST TIME ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Best Time to Visit Ranthambore for Tiger Sightings</h2>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 24 }}>
            The park is open from <strong>October 1 to June 30</strong> each year. It closes during the monsoon season (July–September). Here is our month-by-month guide:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { period: "October – November", rating: "⭐⭐⭐⭐", temp: "22–32°C", crowd: "Low", tiger: "Good", note: "Post-monsoon greenery, lush forests, comfortable weather. Excellent for birding and photography." },
              { period: "December – February", rating: "⭐⭐⭐⭐", temp: "10–25°C", crowd: "Medium–High", tiger: "Very Good", note: "Peak family season. Cool weather (can get cold at dawn). Tigers frequently spotted near lakes." },
              { period: "March – May", rating: "⭐⭐⭐⭐⭐", temp: "28–44°C", crowd: "High", tiger: "Highest", note: "Best tiger sighting probability. Animals cluster near watering holes. Hot afternoons — dress accordingly." },
              { period: "June", rating: "⭐⭐⭐", temp: "35–45°C", crowd: "Very Low", tiger: "Good (closing soon)", note: "Park closes June 30. Extreme heat. Not recommended for families with children." },
            ].map(m => (
              <div key={m.period} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#c1644a", marginBottom: 8 }}>{m.period}</h3>
                <div style={{ fontSize: "1rem", marginBottom: 8 }}>{m.rating}</div>
                <div style={{ display: "flex", gap: 12, fontSize: 13, marginBottom: 10 }}>
                  <span>🌡️ {m.temp}</span>
                  <span>👥 {m.crowd} crowd</span>
                  <span>🐯 Tiger: {m.tiger}</span>
                </div>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{m.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ITINERARIES ── */}
        <section id="itineraries" style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8, color: "#1c1c1e" }}>Ranthambore Safari Itineraries</h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: 40 }}>Choose your perfect Ranthambore tour duration. All itineraries include safari permits, naturalist guide, and BharatMile support.</p>

          {/* 1-Day */}
          <div style={{ background: "#fff", border: "2px solid #c1644a", borderRadius: 16, padding: 36, marginBottom: 32, boxShadow: "0 4px 20px rgba(193,100,74,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#c1644a", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>1-Day Itinerary</div>
              <span style={{ fontSize: 14, color: "#888" }}>Quick wildlife escape from Jaipur/Sawai Madhopur</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Ranthambore Day Safari — 1 Day / 0 Nights</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {[
                { time: "05:30 AM", act: "Depart from Sawai Madhopur hotel / railway station pickup" },
                { time: "06:00 AM", act: "Morning Gypsy Safari — Core Zone 4 or 5 (3.5 hours, expert naturalist guide)" },
                { time: "09:30 AM", act: "Return to hotel. Hot breakfast. Rest & refresh." },
                { time: "11:00 AM", act: "Visit Ranthambore Fort (UNESCO heritage site, 1.5 hrs). Ganesh Temple, ancient step wells." },
                { time: "01:00 PM", act: "Rajasthani lunch at a local heritage restaurant" },
                { time: "02:30 PM", act: "Afternoon Canter Safari — Zone 6 or 7 (3.5 hours, different terrain, birdwatching)" },
                { time: "06:00 PM", act: "Return. Evening at leisure. Wildlife photography review session." },
                { time: "07:30 PM", act: "Depart back to Jaipur or Sawai Madhopur station for onward journey" },
              ].map(s => (
                <div key={s.time} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ background: "#fff8f4", color: "#c1644a", fontWeight: 700, fontSize: 12, padding: "4px 8px", borderRadius: 6, whiteSpace: "nowrap", marginTop: 2 }}>{s.time}</span>
                  <span style={{ fontSize: 14, color: "#555" }}>{s.act}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, background: "#fff8f4", borderRadius: 8, padding: 16, fontSize: 14, color: "#666" }}>
              <strong>Includes:</strong> 2 safari permits (morning Gypsy + afternoon Canter), naturalist guide, Fort entry, transfer (optional) &nbsp;|&nbsp; <strong>From ₹4,999 per person</strong>
            </div>
          </div>

          {/* 2-Day */}
          <div style={{ background: "#fff", border: "2px solid #8b4513", borderRadius: 16, padding: 36, marginBottom: 32, boxShadow: "0 4px 20px rgba(139,69,19,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#8b4513", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>2-Day Itinerary</div>
              <span style={{ fontSize: 14, color: "#888" }}>Most popular weekend package</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Ranthambore Classic Safari — 2 Days / 1 Night</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <h4 style={{ fontWeight: 700, color: "#c1644a", marginBottom: 12 }}>Day 1</h4>
                {[
                  { time: "Afternoon", act: "Arrive at Sawai Madhopur. Check in at safari resort. Orientation briefing by naturalist." },
                  { time: "3:00 PM", act: "Afternoon Gypsy Safari — Zone 1, 2 or 3 (core zones, tiger hotspots)" },
                  { time: "6:30 PM", act: "Return. Evening sundowner at resort." },
                  { time: "7:30 PM", act: "Dinner. Naturalist slideshow on Ranthambore tigers and wildlife." },
                ].map(s => (
                  <div key={s.time} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: "#c1644a", fontWeight: 700, fontSize: 12, minWidth: 70 }}>{s.time}</span>
                    <span style={{ fontSize: 14, color: "#555" }}>{s.act}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "#c1644a", marginBottom: 12 }}>Day 2</h4>
                {[
                  { time: "5:30 AM", act: "Early morning Gypsy Safari — Zone 4 or 5 (Padam Talab/Rajbagh lake)" },
                  { time: "9:30 AM", act: "Return. Buffet breakfast at resort." },
                  { time: "11:00 AM", act: "Ranthambore Fort visit + Ganesh Temple. Local market shopping." },
                  { time: "1:00 PM", act: "Lunch & checkout. Transfer to Sawai Madhopur station / Jaipur." },
                ].map(s => (
                  <div key={s.time} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: "#c1644a", fontWeight: 700, fontSize: 12, minWidth: 70 }}>{s.time}</span>
                    <span style={{ fontSize: 14, color: "#555" }}>{s.act}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 20, background: "#fff8f4", borderRadius: 8, padding: 16, fontSize: 14, color: "#666" }}>
              <strong>Includes:</strong> 1 night resort accommodation, 3 safari slots (2 Gypsy + 1 optional Canter), all forest fees, naturalist guide, meals, Fort entry &nbsp;|&nbsp; <strong>From ₹8,999 per person</strong>
            </div>
          </div>

          {/* 5-Day */}
          <div style={{ background: "#fff", border: "2px solid #2d5a27", borderRadius: 16, padding: 36, boxShadow: "0 4px 20px rgba(45,90,39,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#2d5a27", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>5-Day Itinerary</div>
              <span style={{ fontSize: 14, color: "#888" }}>Complete Rajasthan wildlife + heritage circuit</span>
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Ranthambore & Jaipur Grand Tour — 5 Days / 4 Nights</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {[
                { day: "Day 1", title: "Arrive Jaipur", desc: "Flight/train arrival in Jaipur. Check in. Orientation. Evening at Amber Fort light & sound show." },
                { day: "Day 2", title: "Jaipur Heritage Tour", desc: "Amber Fort, City Palace, Jantar Mantar, Hawa Mahal. Shopping at Johari Bazaar. Overnight Jaipur." },
                { day: "Day 3", title: "Jaipur → Ranthambore", desc: "Morning drive to Ranthambore (3.5 hrs). Check in at jungle resort. Afternoon Gypsy safari (Zone 3/4). Naturalist briefing." },
                { day: "Day 4", title: "Full Safari Day", desc: "Dawn Gypsy safari Zone 1/2 (highest tiger probability). Afternoon: Ranthambore Fort + Ganesh temple. Evening Canter safari Zone 5." },
                { day: "Day 5", title: "Departure", desc: "Final morning Gypsy safari at sunrise (optional). Checkout. Transfer to Sawai Madhopur / Jaipur airport." },
              ].map(d => (
                <div key={d.day} style={{ background: "#f8fdf8", border: "1px solid #d4edd4", borderRadius: 10, padding: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#2d5a27", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{d.day}</div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8, color: "#1c1c1e" }}>{d.title}</h4>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, background: "#f8fdf8", borderRadius: 8, padding: 16, fontSize: 14, color: "#666", border: "1px solid #d4edd4" }}>
              <strong>Includes:</strong> 4 nights accommodation (2 Jaipur + 2 Ranthambore), 4–5 safari slots across multiple zones, all forest fees, expert guides, Fort entry, transfers, select meals &nbsp;|&nbsp; <strong>From ₹18,999 per person (twin sharing)</strong>
            </div>
          </div>
        </section>

        {/* ── WILDLIFE ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Wildlife in Ranthambore National Park</h2>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 20 }}>
            While the <strong>Bengal Tiger</strong> is Ranthambore's star attraction, the park's rich biodiversity makes every safari rewarding regardless of tiger sightings. Ranthambore is home to:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { animal: "🐯 Bengal Tiger", note: "70+ tigers estimated, one of India's highest densities" },
              { animal: "🐆 Indian Leopard", note: "Frequently spotted in rocky buffer zones" },
              { animal: "🐻 Sloth Bear", note: "Common sighting, especially at dusk" },
              { animal: "🦌 Sambar & Chital", note: "Thousands across all zones — primary tiger prey" },
              { animal: "🐊 Marsh Crocodile", note: "Abundant near lakes — fascinating to watch" },
              { animal: "🦉 300+ Bird Species", note: "Including painted stork, crested serpent eagle, kingfishers" },
            ].map(w => (
              <div key={w.animal} style={{ display: "flex", gap: 12, background: "#fff", padding: 16, borderRadius: 10, border: "1px solid #eee", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{w.animal}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>{w.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RANTHAMBORE FORT ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>Ranthambore Fort — UNESCO World Heritage Site</h2>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 16 }}>
            <strong>Ranthambore Fort</strong> is a UNESCO World Heritage Site (part of the Rajasthan Hill Forts group) located inside the national park itself — one of the rare forts in the world that sits within an active wildlife sanctuary. Built in the 10th century, it towers over the forest canopy and offers spectacular panoramic views of the lakes and jungle below.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#444", marginBottom: 16 }}>
            The fort complex includes the famous <strong>Ganesh Temple</strong> (one of Rajasthan's most revered temples), ancient step wells (baolis), Hammir's Hall of Justice, the Hamir Court palace ruins, and centuries-old temples. The fort was once the site of the legendary Jauhar of Rani Padmini's era.
          </p>
          <div style={{ background: "#fff8f4", borderLeft: "4px solid #c1644a", borderRadius: 8, padding: 20, fontSize: 14, color: "#555" }}>
            <strong>BharatMile Tip:</strong> Visit the fort between safaris (11 AM–2 PM) when the park gates are closed for the midday break. Entry to the fort is free. The climb takes 30–45 minutes each way — wear comfortable shoes.
          </div>
        </section>

        {/* ── HOW TO REACH ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 20, color: "#1c1c1e" }}>How to Reach Ranthambore National Park</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { mode: "🚂 By Train (Recommended)", detail: "Sawai Madhopur Junction is on the Delhi–Mumbai Rajdhani line. Direct trains from Delhi (3.5 hrs), Jaipur (2 hrs), Kota (1 hr). Station is 4 km from park gate." },
              { mode: "✈️ By Air", detail: "Jaipur International Airport (JAI) is the nearest major airport (~180 km, 3.5 hrs). Kota Airport is smaller but closer (~120 km). BharatMile arranges airport transfers." },
              { mode: "🚗 By Road", detail: "NH21 from Jaipur (180 km, 3.5 hrs), NH44 from Delhi (400 km, 6 hrs). Private cabs recommended — BharatMile arranges comfortable AC transfers." },
            ].map(r => (
              <div key={r.mode} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#c1644a", marginBottom: 12 }}>{r.mode}</h3>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.65 }}>{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINKS ── */}
        <section style={{ marginBottom: 80, background: "#fff", borderRadius: 16, padding: 40, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 24, color: "#1c1c1e" }}>Further Reading — Ranthambore & Jaipur Guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {[
              { title: "How to Book a Jeep Safari in Ranthambore", href: "/blogs/how-to-book-jeep-safari-ranthambore" },
              { title: "Best Time to Visit Ranthambore for Tiger Sightings", href: "/blogs/best-time-visit-ranthambore-tiger-sightings" },
              { title: "Gypsy vs Canter: Which is Best for Families?", href: "/blogs/gypsy-vs-canter-ranthambore-family" },
              { title: "Ranthambore Fort — Complete Guide & Surroundings", href: "/blogs/ranthambore-fort-complete-surroundings-guide" },
              { title: "Tips for Your First Ranthambore Safari", href: "/blogs/tips-first-ranthambore-safari-what-to-wear" },
              { title: "Is Ranthambore Safari Safe for Kids?", href: "/blogs/ranthambore-safari-safe-for-kids" },
              { title: "Ranthambore Resorts — Best Couple Stays", href: "/blogs/couple-resorts-ranthambore" },
              { title: "Ranthambore Safari Guide 2026 (Families)", href: "/blogs/ranthambore-safari-guide-2026-family" },
              { title: "Jaipur Sightseeing Packages →", href: "/jaipur-sightseeing-packages" },
              { title: "Ranthambore Complete City Guide →", href: "/city/ranthambore" },
            ].map(l => (
              <Link key={l.href} to={l.href} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 0", color: "#c1644a", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500, borderBottom: "1px dashed #f0d9cc" }}>
                <ArrowRight size={14} style={{ flexShrink: 0 }} />{l.title}
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginBottom: 80 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 32, color: "#1c1c1e" }}>Frequently Asked Questions — Ranthambore Safari</h2>
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
        <section style={{ background: "linear-gradient(135deg, #1a1a0a 0%, #2d1b00 100%)", borderRadius: 20, padding: 60, textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(193,100,74,0.2) 0%, transparent 50%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
              Ready to Book Your<br /><span style={{ color: "#e8c56b" }}>Ranthambore Safari Tour?</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
              Message BharatMile on WhatsApp — tell us your dates, group size, and budget. We'll handle permits, zones, resort, and transfers in one call.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`https://wa.me/${WHATSAPP}?text=Hi%20BharatMile!%20I%20want%20to%20book%20a%20Ranthambore%20Safari%20Tour.%20Please%20share%20package%20details.`} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "16px 32px", borderRadius: 6, fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                🐯 Book Now on WhatsApp
              </a>
              <Link to="/jaipur-sightseeing-packages" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", padding: "16px 32px", borderRadius: 6, fontWeight: 500, fontSize: "1rem", textDecoration: "none" }}>
                🏯 Also See Jaipur Packages
              </Link>
            </div>
            <p style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>📞 +91-9636974688 &nbsp;|&nbsp; Starting ₹4,999 per person &nbsp;|&nbsp; Free itinerary consultation</p>
          </div>
        </section>

      </main>
    </div>
  );
}
