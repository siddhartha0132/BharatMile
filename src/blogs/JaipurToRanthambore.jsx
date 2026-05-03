// src/blogs/JaipurToRanthambore.jsx
import React, { useEffect } from "react";
import rImg from "../assets/Ranthambore.webp";

export default function JaipurToRanthambore() {
  useEffect(() => {
    document.title = "Jaipur to Ranthambore: Distance, Cab, Train & Travel Guide | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "How to travel from Jaipur to Ranthambore — by private cab, train or bus. Distance, cost, time, and best options for families travelling with kids.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/jaipur-to-ranthambore-travel-guide";
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Jaipur to Ranthambore</nav>
      <h1 className="text-4xl font-bold mb-4">Jaipur to Ranthambore: Distance, Cab, Train &amp; Travel Guide for Families</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 5 min read · BharatMile Editorial</p>
      <img src={rImg} alt="Jaipur to Ranthambore travel guide — distance, cab, train options for family trips by BharatMile" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-6">The distance from Jaipur to Ranthambore is approximately <strong>180 km</strong>, and it takes <strong>3–4 hours</strong> depending on route and traffic. Here are all your travel options compared.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Option 1: Private Cab (Best for Families)</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>Duration:</strong> 3–3.5 hours</li>
        <li><strong>Cost:</strong> ₹2,500–₹4,000 (one-way, AC sedan/SUV)</li>
        <li><strong>Why it's best:</strong> Door-to-door, no transfers, driver waits during safari, kids can sleep</li>
        <li><strong>BharatMile rate:</strong> ₹2,800 one-way (AC, 4-seater)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Option 2: Train</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>Route:</strong> Jaipur Junction → Sawai Madhopur Junction</li>
        <li><strong>Duration:</strong> 2–2.5 hours</li>
        <li><strong>Cost:</strong> ₹100–₹600 (sleeper to 3AC)</li>
        <li><strong>Best trains:</strong> Kota Express, Chetak Express, Double Decker</li>
        <li><strong>Note:</strong> Book IRCTC 30 days ahead. Require cab from Sawai Madhopur station to resort (₹300–₹500).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Option 3: Bus (Budget)</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>Duration:</strong> 4–5 hours</li>
        <li><strong>Cost:</strong> ₹150–₹350 (RSRTC Volvo)</li>
        <li><strong>Note:</strong> Buses stop at Sawai Madhopur town. Not recommended for families with young kids (no flexibility on stops).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Route by Road (Via NH 11C)</h2>
      <p className="text-lg mb-2">Jaipur → Dausa → Bandikui → Hindaun → Karauli → Sawai Madhopur → Ranthambore</p>
      <p className="text-gray-600 mb-6">The road is well-maintained NH highway. Stop at Bandikui for tea and local snacks (40 min from Jaipur).</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">BharatMile Recommendation</h2>
      <p className="text-lg mb-8">For families, always choose a <strong>private cab + driver</strong>. The driver can wait at the park during your safari, and you avoid the hassle of coordinating transfers from the station. BharatMile's drivers know all the resorts and gate timings.</p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mt-10">
        <h3 className="text-xl font-bold mb-2">Book Jaipur to Ranthambore Private Cab</h3>
        <p className="text-gray-600 mb-4">AC cab, experienced driver, pick-up from hotel. ₹2,800 one-way for family of 4. Add return for ₹5,200.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">Book Cab on WhatsApp 🚗</a>
      </div>
    </main>
  );
}
