// src/blogs/WhereToStayJaipur.jsx
// Route: /blogs/where-to-stay-jaipur-best-neighborhoods
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WhereToStayJaipur() {
  useEffect(() => {
    document.title = "Where to Stay in Jaipur: A Guide to the Best Neighborhoods for Tourists 2026 | BharatMile";
    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Where to stay in Jaipur 2026? Complete guide to Jaipur's best neighborhoods for tourists — Old City, Bani Park, C-Scheme, Amber Road. Hotels, pros/cons, and BharatMile recommendations.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/where-to-stay-jaipur-best-neighborhoods";
    const schema = {
      "@context": "https://schema.org", "@type": "Article",
      headline: "Where to Stay in Jaipur: A Guide to the Best Neighborhoods for Tourists",
      author: { "@type": "Organization", name: "BharatMile Editorial" },
      publisher: { "@type": "Organization", name: "BharatMile", logo: { "@type": "ImageObject", url: "https://bharatmile.com/assets/BharatMile-Logo.webp" } },
      datePublished: "2026-08-01",
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(schema); document.head.appendChild(s);
  }, []);

  const areas = [
    {
      name: "Old City (Walled City / Pink City)", rating: "⭐⭐⭐⭐⭐ for first-timers",
      bestFor: "Heritage lovers, photographers, first-time visitors, solo travellers",
      vibe: "Immersive, colourful, noisy, authentic Royal Jaipur",
      pros: ["Walking distance to Hawa Mahal, City Palace, Jantar Mantar", "Authentic bazaar experience at your doorstep", "Heritage havelis converted to boutique hotels", "Great street food — Pyaaz Kachori, chai, sweets", "Perfect for photographers — every lane is a shot"],
      cons: ["Can be noisy — especially during festival season", "Heavy traffic and congestion", "Some areas have power cuts", "Not ideal for those who prefer quiet"],
      hotels: [
        { name: "Pearl Palace Heritage", type: "Boutique", price: "₹2,000–₹5,000", note: "Iconic backpacker-to-luxury heritage hotel. Rooftop restaurant is legendary." },
        { name: "Hotel Diggi Palace", type: "Heritage", price: "₹3,500–₹8,000", note: "Converted Rajput mansion with gardens. Hosted literary festivals." },
        { name: "Moustache Jaipur", type: "Hostel/Budget", price: "₹600–₹2,500", note: "Best social hostel in Jaipur. Rooftop pool, great vibe." },
      ],
      tip: "Stay on the northern edge of Old City (near Badi Chaupar) — closest to heritage monuments and slightly quieter than the commercial areas."
    },
    {
      name: "Bani Park", rating: "⭐⭐⭐⭐ for families & couples",
      bestFor: "Families, couples, repeat visitors who want comfort without chaos",
      vibe: "Quiet, tree-lined, residential — Jaipur's most charming neighbourhood",
      pros: ["Wide, leafy streets — extremely peaceful", "15 minutes to Old City by auto-rickshaw", "Good selection of mid-range and boutique hotels", "Proximity to Civil Lines for restaurants", "No tourist-area crowds or touts"],
      cons: ["Must use transport for every heritage site", "Some streets poorly lit at night"],
      hotels: [
        { name: "Hotel Bissau Palace", type: "Heritage", price: "₹4,000–₹12,000", note: "Spectacular converted royal palace with museum, gardens, and original Rajput architecture." },
        { name: "Vinayak Guest House", type: "Budget-Heritage", price: "₹1,200–₹3,000", note: "Family-run, authentic Jaipur hospitality. Garden courtyard, home-cooked meals." },
        { name: "Alsisar Haveli", type: "Boutique Heritage", price: "₹5,000–₹15,000", note: "Stunning 200-year-old haveli with pool, restaurant, and original murals." },
      ],
      tip: "Bani Park is BharatMile's top recommendation for families and couples who want the balance of comfort, authenticity, and proximity to sights."
    },
    {
      name: "C-Scheme & Tonk Road", rating: "⭐⭐⭐ for business & luxury",
      bestFor: "Business travellers, luxury seekers, people flying in/out",
      vibe: "Modern, upscale, cosmopolitan — Jaipur's business district",
      pros: ["Best international-standard hotels", "Close to Jaipur airport and railway station", "Wide selection of restaurants and cafes", "Shopping malls and modern amenities"],
      cons: ["Farthest from most heritage sights (30–45 min drives)", "Feels less like Jaipur, more like any Indian city", "Higher prices without proportional heritage value"],
      hotels: [
        { name: "ITC Rajputana", type: "Luxury 5-star", price: "₹10,000–₹25,000", note: "Award-winning Rajput-style luxury hotel with excellent Rajasthani cuisine." },
        { name: "Trident Jaipur", type: "Luxury 5-star", price: "₹8,000–₹20,000", note: "Beautiful pool and gardens. Excellent service. 10 min to Old City." },
        { name: "Marriott Jaipur", type: "Business 5-star", price: "₹7,000–₹18,000", note: "International business hotel with full conference facilities." },
      ],
      tip: "Only choose C-Scheme if you're on a business trip, have an early flight, or prioritise luxury hotel facilities over cultural immersion."
    },
    {
      name: "Amber Road (Near Amber Fort)", rating: "⭐⭐⭐⭐ for photographers & wildlife lovers",
      bestFor: "Photography enthusiasts, early morning fort visitors, nature lovers",
      vibe: "Scenic, semi-rural, peaceful — between city and countryside",
      pros: ["5 minutes from Amber Fort for 6 AM opening", "Closest to Jaigarh Fort and Nahargarh", "Scenic Aravalli hills setting", "Luxury heritage hotels with stunning fort views"],
      cons: ["15–20 min drive to Old City", "Limited restaurant options in the immediate area", "Requires own transport for every outing"],
      hotels: [
        { name: "Khas Bagh", type: "Boutique Luxury", price: "₹8,000–₹20,000", note: "6 rooms, personalised service, Amber village setting. Outstanding." },
        { name: "Fort Amber Hotel", type: "Mid-range Heritage", price: "₹3,500–₹8,000", note: "Clean, comfortable, family-run hotel with Amber Fort views from the rooftop." },
        { name: "Samode Haveli", type: "Heritage Luxury", price: "₹12,000–₹35,000", note: "Stunning 475-year-old haveli with original frescoes and a spectacular pool." },
      ],
      tip: "If Amber Fort at sunrise is your #1 priority, stay on Amber Road. The golden light on the fort at 6 AM is extraordinary — and you'll be there before the tourist buses arrive."
    },
    {
      name: "Rambagh Area", rating: "⭐⭐⭐⭐⭐ for ultra-luxury",
      bestFor: "Luxury travellers, honeymooners, special occasion stays",
      vibe: "Royal, majestic, old-world grandeur",
      pros: ["Home to Rambagh Palace — Jaipur's most iconic luxury hotel", "Central location — 15 min to Old City", "Spacious grounds, polo grounds, spa", "The ultimate Maharaja experience"],
      cons: ["Very expensive — starting ₹30,000/night at Rambagh Palace", "Feels slightly removed from Jaipur's street life"],
      hotels: [
        { name: "Rambagh Palace (IHCL/Taj)", type: "Palace Luxury", price: "₹30,000–₹1,00,000", note: "Former royal residence of the Maharaja. India's most celebrated palace hotel. World-class in every dimension." },
        { name: "Samode Palace (Samode Village)", type: "Palace Luxury", price: "₹25,000–₹60,000", note: "45 min from Jaipur. Spectacular 400-year-old royal palace with extraordinary frescoes and pool." },
      ],
      tip: "Even if you can't stay at Rambagh Palace, book dinner at Suvarna Mahal restaurant inside — it's a world-class culinary and heritage experience that all visitors can access."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">Home</Link> &rsaquo; <Link to="/blogs" className="hover:underline">Blogs</Link> &rsaquo; Where to Stay in Jaipur
      </nav>

      <h1 className="text-4xl font-bold mb-4 leading-tight">Where to Stay in Jaipur: A Complete Guide to the Best Neighborhoods for Tourists 2026</h1>
      <p className="text-gray-500 text-sm mb-8">Published: August 2026 · 12 min read · BharatMile Editorial</p>

      <section className="prose prose-lg max-w-none">
        <p>Choosing where to stay in Jaipur can make or break your trip. Unlike many Indian cities, Jaipur's different neighbourhoods offer dramatically different experiences — from immersive chaos of the Pink City's ancient lanes to the serenity of Amber Road's Aravalli foothills. The right neighbourhood depends entirely on your travel style, budget, and priorities.</p>
        <p>This guide breaks down Jaipur's five main tourist neighbourhoods — with honest pros and cons, hotel recommendations at every budget level, and BharatMile's expert picks based on thousands of traveller experiences.</p>

        {areas.map((area, i) => (
          <div key={area.name} style={{ marginBottom: 48, paddingBottom: 40, borderBottom: "1px dashed #e8e8e8" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ background: "#8b4513", color: "#fff", padding: "6px 18px", borderRadius: 100, fontSize: 13, fontWeight: 700 }}>#{i + 1}</span>
              <h2 style={{ margin: 0, fontSize: "1.4rem" }}>{area.name}</h2>
            </div>
            <p style={{ color: "#8b4513", fontWeight: 600, marginBottom: 8 }}>{area.rating}</p>
            <p style={{ color: "#666", fontStyle: "italic", marginBottom: 16 }}>🎯 Best for: {area.bestFor}</p>
            <p style={{ color: "#555", marginBottom: 16 }}>🏙️ <strong>Vibe:</strong> {area.vibe}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div style={{ background: "#f0f8f0", borderRadius: 10, padding: 16 }}>
                <h4 style={{ color: "#2d5a27", fontSize: "0.9rem", marginBottom: 10, fontWeight: 700 }}>✅ Pros</h4>
                <ul style={{ fontSize: 14, color: "#444", paddingLeft: 16, margin: 0 }}>
                  {area.pros.map(p => <li key={p} style={{ marginBottom: 6 }}>{p}</li>)}
                </ul>
              </div>
              <div style={{ background: "#fff8f4", borderRadius: 10, padding: 16 }}>
                <h4 style={{ color: "#c1644a", fontSize: "0.9rem", marginBottom: 10, fontWeight: 700 }}>⚠️ Cons</h4>
                <ul style={{ fontSize: 14, color: "#444", paddingLeft: 16, margin: 0 }}>
                  {area.cons.map(c => <li key={c} style={{ marginBottom: 6 }}>{c}</li>)}
                </ul>
              </div>
            </div>

            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12 }}>🏨 Recommended Hotels</h4>
            <div style={{ display: "grid", gap: 10, marginBottom: 20 }}>
              {area.hotels.map(h => (
                <div key={h.name} style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 8, padding: 14, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{h.name}</span>
                    <span style={{ background: "#e8f4e8", color: "#2d5a27", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 100, marginLeft: 8 }}>{h.type}</span>
                    <p style={{ fontSize: 13, color: "#666", margin: "6px 0 0" }}>{h.note}</p>
                  </div>
                  <span style={{ fontWeight: 700, color: "#8b4513", whiteSpace: "nowrap", fontSize: 14 }}>{h.price}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#f0f8f0", borderLeft: "4px solid #2d5a27", borderRadius: 8, padding: "12px 16px", fontSize: 14, color: "#444" }}>
              <strong>💡 BharatMile Tip:</strong> {area.tip}
            </div>
          </div>
        ))}

        <h2>BharatMile's Quick Recommendation Guide</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ background: "#8b4513", color: "#fff" }}>
                <th style={{ padding: "12px 14px", textAlign: "left" }}>Traveller Type</th>
                <th style={{ padding: "12px 14px", textAlign: "left" }}>Best Neighborhood</th>
                <th style={{ padding: "12px 14px", textAlign: "left" }}>Top Hotel Pick</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["First-time visitor", "Old City", "Pearl Palace Heritage"],
                ["Family with children", "Bani Park", "Alsisar Haveli"],
                ["Honeymoon couple", "Amber Road or Rambagh", "Samode Haveli / Rambagh Palace"],
                ["Solo backpacker", "Old City", "Moustache Jaipur"],
                ["Photography enthusiast", "Amber Road", "Khas Bagh"],
                ["Business traveller", "C-Scheme", "Trident Jaipur"],
                ["Budget traveller", "Old City or Bani Park", "Vinayak Guest House"],
                ["Luxury traveller", "Rambagh Area", "Rambagh Palace (Taj)"],
              ].map(([type, area, hotel], i) => (
                <tr key={type} style={{ borderBottom: "1px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "11px 14px", fontWeight: 600 }}>{type}</td>
                  <td style={{ padding: "11px 14px" }}>{area}</td>
                  <td style={{ padding: "11px 14px", color: "#8b4513", fontWeight: 500 }}>{hotel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-14 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Need Help Choosing Your Jaipur Hotel?</h3>
        <p className="text-gray-600 mb-4">BharatMile's team knows every hotel and neighbourhood in Jaipur intimately. Tell us your budget and travel style — we'll recommend the perfect stay.</p>
        <a href="https://wa.me/919636974688?text=Hi%20BharatMile!%20Can%20you%20recommend%20where%20to%20stay%20in%20Jaipur%20for%20my%20trip?" target="_blank" rel="noreferrer" className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-800 transition">Get Hotel Recommendations 🏯</a>
      </div>

      <div className="mt-10 border-t pt-6">
        <h3 className="font-semibold mb-3">Related Jaipur & Ranthambore Guides</h3>
        <ul className="space-y-2 text-green-700">
          <li><Link to="/jaipur-sightseeing-packages" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Jaipur Sightseeing Packages — Book a Guided Tour</Link></li>
          <li><Link to="/blogs/3-day-jaipur-itinerary-history-lovers" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />3-Day Jaipur Itinerary for History Lovers</Link></li>
          <li><Link to="/blogs/top-10-monuments-jaipur-2026" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Top 10 Monuments in Jaipur 2026</Link></li>
          <li><Link to="/ranthambore-safari-tours" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Ranthambore Safari Tours — Combine with Jaipur</Link></li>
        </ul>
      </div>
    </main>
  );
}
