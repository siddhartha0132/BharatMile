// src/blogs/GypsyVsCanter.jsx
import React, { useEffect } from "react";
import ranthamboreImg from "../assets/Ranthambore.webp";

export default function GypsyVsCanter() {
  useEffect(() => {
    document.title = "Gypsy vs Canter: Which is Safer for Kids in Ranthambore? | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Gypsy vs Canter for Ranthambore safari — which is better for families with kids? Full comparison of cost, comfort, safety and tiger sighting probability.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/gypsy-vs-canter-ranthambore-family";
  }, []);

  const rows = [
    ["Seats", "6 (private)", "20 (shared)"],
    ["Cost per person", "₹500–₹800", "₹800–₹1,200"],
    ["Safety for kids", "✅ Excellent", "⚠️ Moderate"],
    ["Tiger sighting", "✅ Higher chance", "❌ Lower (noisy)"],
    ["Flexibility", "✅ Can stop anytime", "❌ Fixed route"],
    ["Photography", "✅ Ideal", "❌ Limited"],
    ["Min. age", "No restriction", "5+ years"],
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Gypsy vs Canter</nav>
      <h1 className="text-4xl font-bold mb-4">Gypsy vs Canter: Which is Safer for Kids in Ranthambore National Park?</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 6 min read · BharatMile Editorial</p>
      <img src={ranthamboreImg} alt="Gypsy vs Canter safari comparison for families with kids in Ranthambore National Park" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-6">One of the most common questions parents ask: <strong>"Gypsy or Canter?"</strong> Short answer: <strong>Gypsy for families, Canter for budget groups.</strong></p>

      <h2 className="text-2xl font-bold mt-8 mb-3">Full Comparison</h2>
      <table className="w-full border text-sm mb-8">
        <thead className="bg-amber-50"><tr><th className="p-3 text-left">Parameter</th><th className="p-3 text-left">Gypsy (Jeep)</th><th className="p-3 text-left">Canter (Truck)</th></tr></thead>
        <tbody>{rows.map(([p, g, c]) => (<tr key={p} className="border-t"><td className="p-3 font-medium">{p}</td><td className="p-3">{g}</td><td className="p-3">{c}</td></tr>))}</tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-3">Why Gypsy Wins for Families</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li>Private vehicle — guide gives full attention to your family</li>
        <li>Can pause 5–10 minutes at a sighting</li>
        <li>Kids can ask questions without disturbing strangers</li>
        <li>Buffer zones (6–10) allow Gypsy only — more exclusive</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">Best Zones to Book a Gypsy</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-8">
        <li><strong>Zones 1–5 (Core):</strong> Both Gypsy &amp; Canter. High tiger density.</li>
        <li><strong>Zones 6–10 (Buffer):</strong> Gypsy ONLY. Quiet, exclusive.</li>
      </ul>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mt-10">
        <h3 className="text-xl font-bold mb-2">Book a Private Gypsy Safari for Your Family</h3>
        <p className="text-gray-600 mb-4">Zone selection + pick-up from Sawai Madhopur + expert guide. Packages from ₹2,500.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">Book on WhatsApp 🐆</a>
      </div>
    </main>
  );
}
