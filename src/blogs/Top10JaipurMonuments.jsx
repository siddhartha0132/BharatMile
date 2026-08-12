// src/blogs/Top10JaipurMonuments.jsx
// Route: /blogs/top-10-monuments-jaipur-2026
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Top10JaipurMonuments() {
  useEffect(() => {
    document.title = "Top 10 Must-Visit Monuments in Jaipur in 2026 — With Entry Fees & Timings | BharatMile";
    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Top 10 must-visit monuments in Jaipur in 2026 with entry fees, opening timings, insider tips, and BharatMile guide recommendations. Plan the perfect Jaipur heritage tour.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/top-10-monuments-jaipur-2026";

    const schema = {
      "@context": "https://schema.org", "@type": "Article",
      headline: "Top 10 Must-Visit Monuments in Jaipur in 2026",
      author: { "@type": "Organization", name: "BharatMile Editorial" },
      publisher: { "@type": "Organization", name: "BharatMile", logo: { "@type": "ImageObject", url: "https://bharatmile.com/assets/BharatMile-Logo.webp" } },
      datePublished: "2026-08-01",
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(schema); document.head.appendChild(s);
  }, []);

  const monuments = [
    { rank: 1, name: "Amber Fort (Amer Qila)", built: "1592–1727", dynasty: "Kachwaha Rajput", timing: "8:00 AM – 6:00 PM", fee: "₹100 Indians / ₹500 Foreign", duration: "2–3 hours", tag: "UNESCO Heritage", highlight: "India's most spectacular hilltop fort. Sheesh Mahal (Hall of Mirrors) — 2 million mirror tiles that create a starlight effect with a single candle. Also features Diwan-e-Aam, Sukh Niwas with natural air conditioning, and the imposing Ganesh Pol gateway.", tip: "Visit at 6:00 AM sharp when gates open. The palace glows golden in morning light and crowds are absent. The elephant ride (book via official website) starts at 8 AM.", img_alt: "Amber Fort Jaipur — UNESCO World Heritage hilltop fort at sunrise" },
    { rank: 2, name: "City Palace", built: "1727–1732", dynasty: "Kachwaha Rajput", timing: "9:30 AM – 5:00 PM", fee: "₹200 Indians / ₹700 Foreign + Museum ₹300", duration: "1.5–2 hours", tag: "Living Royal Palace", highlight: "The royal family of Jaipur still resides in part of this sprawling palace complex. Key highlights: Two enormous silver urns (1,800 kg each, listed in Guinness World Records) used to carry Ganga water to England; the seven-storey Chandra Mahal; the Mubarak Mahal textile museum.", tip: "Buy the Maharaja Suite access ticket (₹2,000) if budget allows — you see otherwise restricted chambers of breathtaking opulence.", img_alt: "City Palace Jaipur — royal residence with seven-storey Chandra Mahal" },
    { rank: 3, name: "Jantar Mantar", built: "1724–1734", dynasty: "Kachwaha Rajput", timing: "9:00 AM – 4:30 PM", fee: "₹50 Indians / ₹200 Foreign", duration: "1 hour", tag: "UNESCO Heritage", highlight: "The world's largest stone astronomical observatory, built by astronomer-king Maharaja Sawai Jai Singh II. 19 instruments including the Samrat Yantra — the world's largest sundial, accurate to 2 seconds. Fascinating for science lovers and history buffs equally.", tip: "You MUST hire a guide here (₹150–₹200). Without explanation, the instruments look like abstract sculptures. A good guide makes them come alive.", img_alt: "Jantar Mantar Jaipur — UNESCO World Heritage astronomical observatory with Samrat Yantra sundial" },
    { rank: 4, name: "Hawa Mahal (Palace of Winds)", built: "1799", dynasty: "Kachwaha Rajput", timing: "9:00 AM – 4:30 PM", fee: "₹50 Indians / ₹200 Foreign", duration: "45 minutes", tag: "Jaipur Icon", highlight: "The most photographed building in Jaipur — a 5-storey pink sandstone façade with 953 latticed windows (jharokhas) designed to allow royal women to observe street life while remaining unseen. The interior reveals a honeycomb of tiny chambers with ceiling paintings.", tip: "The famous exterior photo is best taken from the street at 8–9 AM (morning light). For the interior and rooftop view, enter from the rear lane.", img_alt: "Hawa Mahal Palace of Winds Jaipur — iconic 953-window pink sandstone facade" },
    { rank: 5, name: "Nahargarh Fort", built: "1734", dynasty: "Kachwaha Rajput", timing: "10:00 AM – 5:30 PM", fee: "₹50 Indians / ₹300 Foreign", duration: "1.5 hours", tag: "Sunset Viewpoint", highlight: "Perched on the Aravalli ridgeline, Nahargarh offers the most panoramic view of Jaipur — the entire pink city spreads below you like a map. The fort's Madhavendra Bhawan contains 12 identical suites for the king's 12 wives, each connected to a central corridor.", tip: "Come for sunset (5:00–6:00 PM). The fort has a restaurant/cafe on the ramparts with stunning views. After dark, the illuminated city is breathtaking.", img_alt: "Nahargarh Fort Jaipur — hilltop fort with panoramic Pink City sunset views" },
    { rank: 6, name: "Jaigarh Fort", built: "1726", dynasty: "Kachwaha Rajput", timing: "9:00 AM – 4:45 PM", fee: "₹70 Indians / ₹300 Foreign", duration: "1.5 hours", tag: "Military Fort", highlight: "The military garrison fort for Amber, Jaigarh houses Jaivana — the world's largest cannon on wheels (calibre 11 inches, range 35 km). Also features a cannon foundry, massive underground water storage system, puppet museum, and superb valley views.", tip: "Jaigarh and Amber Fort are connected by an underground tunnel and a covered walkway — your Amber Fort ticket gets you into Jaigarh on the same day.", img_alt: "Jaigarh Fort Jaipur — home of Jaivana cannon, world's largest wheeled cannon" },
    { rank: 7, name: "Albert Hall Museum", built: "1876–1887", dynasty: "British Colonial", timing: "9:00 AM – 5:00 PM (closed Mon)", fee: "₹40 Indians / ₹300 Foreign", duration: "1–1.5 hours", tag: "Museum", highlight: "Rajasthan's oldest museum in a stunning Indo-Saracenic building. Collections include: an Egyptian mummy (2,500 years old), Rajput and Mughal arms, miniature paintings, marble statues, tribal jewellery, and decorative tiles from around the world. Excellent night illumination.", tip: "Visit at 9:00 AM when it opens — quiet and cool. The Egyptian mummy is the centrepiece; join a guided group for context.", img_alt: "Albert Hall Museum Jaipur — oldest museum in Rajasthan with Egyptian mummy collection" },
    { rank: 8, name: "Panna Meena Ka Kund", built: "16th century", dynasty: "Kachwaha Rajput", timing: "Open all day", fee: "Free", duration: "30–45 minutes", tag: "Hidden Gem", highlight: "An extraordinary 16th-century stepped well (baoli) near Amber Fort. Geometric zigzag staircases cascade symmetrically down to the water in a perfect visual pattern. Largely unknown to international tourists — you'll often have it entirely to yourself. One of Jaipur's most photogenic spots.", tip: "Visit in morning light (8–10 AM) for the best photography. The geometric steps create dramatic shadows in low-angle sunlight.", img_alt: "Panna Meena Ka Kund Jaipur — ancient geometric stepped well near Amber Fort" },
    { rank: 9, name: "Sisodia Rani Garden", built: "1728", dynasty: "Kachwaha Rajput", timing: "8:00 AM – 8:00 PM", fee: "₹30 Indians", duration: "45 minutes", tag: "Royal Garden", highlight: "A serene Mughal-style terraced garden built by Maharaja Sawai Jai Singh II for his queen from the Sisodia clan of Udaipur. Cascading fountains, painted pavilions with Radha-Krishna murals, and carefully landscaped terraces. A peaceful retreat from the busy city.", tip: "Visit on a weekday morning for solitude. The garden is 8 km from Old City — take an auto-rickshaw.", img_alt: "Sisodia Rani Garden Jaipur — Mughal terraced garden with Radha-Krishna murals" },
    { rank: 10, name: "Birla Mandir (Laxmi Narayan Temple)", built: "1988", dynasty: "Modern", timing: "6:00 AM – 12:00 PM, 3:00–9:00 PM", fee: "Free", duration: "30–45 minutes", tag: "Spiritual", highlight: "A stunning modern white marble temple dedicated to Laxmi-Narayan, built by the Birla family. The marble is imported from Makrana (same quarry that supplied the Taj Mahal). Intricate carvings of Hindu mythology alongside stained glass and biblical illustrations from world religions.", tip: "Visit at dusk (7–8 PM) when the temple is illuminated — the white marble glows spectacularly. Photography is permitted in the outer area.", img_alt: "Birla Mandir Jaipur — white Makrana marble temple at dusk illumination" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">Home</Link> &rsaquo; <Link to="/blogs" className="hover:underline">Blogs</Link> &rsaquo; Top 10 Monuments in Jaipur 2026
      </nav>

      <h1 className="text-4xl font-bold mb-4 leading-tight">Top 10 Must-Visit Monuments in Jaipur in 2026 — Entry Fees, Timings & Insider Tips</h1>
      <p className="text-gray-500 text-sm mb-8">Published: August 2026 · 11 min read · BharatMile Editorial</p>

      <section className="prose prose-lg max-w-none">
        <p>Jaipur is a city where history is not confined to museums — it lives and breathes in every fort, palace, garden, and stepping stone around you. With over 300 years of Kachwaha Rajput legacy, three UNESCO World Heritage Sites, and a royal family that still resides in its palace, Jaipur is one of the most densely layered heritage cities in the world.</p>
        <p>This guide covers the <strong>top 10 must-visit monuments in Jaipur in 2026</strong>, complete with entry fees, timing, how long to spend, and insider tips from BharatMile's heritage guides who have been leading tours here for over a decade.</p>

        {monuments.map((m) => (
          <div key={m.rank} style={{ marginBottom: 40, borderBottom: "1px dashed #e8e8e8", paddingBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ background: "#8b4513", color: "#fff", width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, flexShrink: 0 }}>
                {m.rank}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                  <h2 style={{ margin: 0, fontSize: "1.4rem" }}>{m.name}</h2>
                  <span style={{ background: "#fff8f0", color: "#8b4513", fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 100, border: "1px solid #f0d9cc" }}>{m.tag}</span>
                </div>
                <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#888", marginBottom: 16, flexWrap: "wrap" }}>
                  <span>🏗️ Built: {m.built} · {m.dynasty}</span>
                  <span>🕐 {m.timing}</span>
                  <span>💰 {m.fee}</span>
                  <span>⏱ Spend: {m.duration}</span>
                </div>
                <p style={{ color: "#444", marginBottom: 12 }}>{m.highlight}</p>
                <div style={{ background: "#f0f8f0", borderLeft: "3px solid #2d5a27", padding: "10px 16px", borderRadius: 6, fontSize: 14, color: "#444" }}>
                  <strong>💡 BharatMile Tip:</strong> {m.tip}
                </div>
              </div>
            </div>
          </div>
        ))}

        <h2>Composite Ticket — Best Value for Monument Lovers</h2>
        <p>The <strong>Rajasthan Tourism Composite Ticket</strong> covers 6 major monuments in one ticket:</p>
        <ul>
          <li>Amber Fort, Nahargarh Fort, Jaigarh Fort</li>
          <li>City Palace, Jantar Mantar, Hawa Mahal, Albert Hall Museum</li>
          <li>Price: <strong>₹300 (Indian nationals) / ₹1,000 (Foreign nationals)</strong> — valid for 2 days</li>
          <li>Available at any of the monuments and online via Rajasthan Tourism website</li>
        </ul>
        <p>This ticket saves you significant money versus paying individually at each monument, and the 2-day validity means you don't need to rush.</p>
      </section>

      <div className="mt-14 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Book a Guided Jaipur Monument Tour</h3>
        <p className="text-gray-600 mb-4">BharatMile's expert heritage guides bring each monument alive with stories and historical context. Private tours starting ₹2,999.</p>
        <a href="https://wa.me/919636974688?text=Hi%20BharatMile!%20I%20want%20to%20book%20a%20Jaipur%20monument%20tour" target="_blank" rel="noreferrer" className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-800 transition">Book Jaipur Tour 🏯</a>
      </div>

      <div className="mt-10 border-t pt-6">
        <h3 className="font-semibold mb-3">Related Jaipur & Ranthambore Guides</h3>
        <ul className="space-y-2 text-green-700">
          <li><Link to="/jaipur-sightseeing-packages" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Jaipur Sightseeing Packages — 1, 2 & 5-Day Options</Link></li>
          <li><Link to="/blogs/3-day-jaipur-itinerary-history-lovers" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />3-Day Jaipur Itinerary for History Lovers</Link></li>
          <li><Link to="/blogs/where-to-stay-jaipur-best-neighborhoods" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Where to Stay in Jaipur: Best Neighborhoods</Link></li>
          <li><Link to="/ranthambore-safari-tours" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Ranthambore Safari Tours — Combine with Jaipur</Link></li>
        </ul>
      </div>
    </main>
  );
}
