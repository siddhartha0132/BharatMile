// src/blogs/RanthamboreResorts.jsx
import React, { useEffect } from "react";
import rImg from "../assets/Ranthambore.webp";

export default function RanthamboreResorts() {
  useEffect(() => {
    document.title = "Best Couple Resorts in Ranthambore — Romantic Stays Near Tiger Reserve | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Top romantic couple resorts in Ranthambore — from budget jungle lodges to luxury pool villas near the tiger reserve. All verified by BharatMile.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/couple-resorts-ranthambore";
  }, []);

  const resorts = [
    { name: "Khem Villas", type: "Luxury", price: "₹12,000–₹22,000/night", vibe: "Secluded tents in forest. Pool, organic farm. Very romantic.", rating: "4.8★" },
    { name: "Oberoi Vanyavilas", type: "Ultra-Luxury", price: "₹35,000+/night", vibe: "India's most iconic wildlife resort. Luxury tents, butler service.", rating: "4.9★" },
    { name: "Ranthambore Regency", type: "Mid-range", price: "₹4,500–₹8,000/night", vibe: "Garden cottages, pool, bonfire evenings. Great couple packages.", rating: "4.4★" },
    { name: "Aman-i-Khas", type: "Luxury", price: "₹28,000+/night", vibe: "Tented camp adjacent to reserve. Spa, stargazing, gourmet meals.", rating: "4.9★" },
    { name: "Sher Vilas", type: "Budget-Luxury", price: "₹3,500–₹6,500/night", vibe: "Heritage-feel cottages, bonfire, village walks. Best value couple resort.", rating: "4.3★" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Couple Resorts Ranthambore</nav>
      <h1 className="text-4xl font-bold mb-4">Best Couple Resorts in Ranthambore — Romantic Stays Near the Tiger Reserve</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 5 min read · BharatMile Editorial</p>
      <img src={rImg} alt="Romantic couple resorts near Ranthambore National Park — luxury and budget options by BharatMile" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-8">Ranthambore isn't just for wildlife enthusiasts — it's one of Rajasthan's most romantic getaways. Imagine waking up to bird calls, having breakfast in a jungle clearing, and watching the sunset over the ancient fort. Here are the best couple resorts picked by BharatMile.</p>

      <div className="space-y-5 mb-10">
        {resorts.map((r, i) => (
          <div key={r.name} className="border rounded-xl p-5 bg-rose-50">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase">#{i + 1} {r.type}</span>
                <h2 className="text-xl font-bold mt-1">{r.name}</h2>
              </div>
              <div className="text-right">
                <div className="text-green-700 font-bold text-sm">{r.price}</div>
                <div className="text-amber-600 text-sm">{r.rating}</div>
              </div>
            </div>
            <p className="mt-3 text-gray-700">💕 {r.vibe}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-3">Tips for Booking a Couple Resort in Ranthambore</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-8">
        <li>Book 2–3 months in advance for Oct–March peak season</li>
        <li>Ask about <strong>bonfire + stargazing packages</strong> — most resorts offer this at night</li>
        <li>Prefer resorts within 3km of Gate 1 (Ranthambore Road) for quick safari access</li>
        <li>Confirm if safari booking is included or extra</li>
      </ul>

      <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center mt-10">
        <h3 className="text-xl font-bold mb-2">Book Your Romantic Ranthambore Getaway</h3>
        <p className="text-gray-600 mb-4">Resort + 2 safaris + candlelit dinner — couple packages from ₹8,999 for 2 nights. BharatMile handles everything.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-rose-700 transition">Book Couple Package on WhatsApp 🌹</a>
      </div>
    </main>
  );
}
