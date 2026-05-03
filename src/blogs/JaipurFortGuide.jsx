// src/blogs/JaipurFortGuide.jsx
import React, { useEffect } from "react";
import amberImg from "../assets/amber-fort.jpg";

export default function JaipurFortGuide() {
  useEffect(() => {
    document.title = "Complete Jaipur Fort Guide: Amber, Nahargarh & Jaigarh for Families | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "A complete guide to Jaipur's 3 forts — Amber Fort, Nahargarh Fort & Jaigarh Fort — with timings, ticket prices, and tips for visiting with family or as a couple.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/jaipur-fort-complete-guide";
  }, []);

  const forts = [
    { name: "Amber Fort", distance: "11 km from city", timing: "8AM–5:30PM", ticket: "₹100 (Indian), ₹500 (Foreign)", highlight: "Sheesh Mahal, Ganesh Gate, elephant ride", time: "2–3 hours" },
    { name: "Nahargarh Fort", distance: "19 km from city", timing: "10AM–5:30PM", ticket: "₹50 (Indian), ₹200 (Foreign)", highlight: "Best city view, sunset, Wax Museum inside", time: "1–2 hours" },
    { name: "Jaigarh Fort", distance: "15 km from city", timing: "9AM–4:45PM", ticket: "₹70 (Indian), ₹200 (Foreign)", highlight: "World's largest cannon on wheels, armoury museum", time: "1–2 hours" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Jaipur Fort Guide</nav>
      <h1 className="text-4xl font-bold mb-4">Complete Jaipur Fort Guide: Amber, Nahargarh &amp; Jaigarh for Families</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 7 min read · BharatMile Editorial</p>
      <img src={amberImg} alt="Amber Fort Jaipur — complete guide to Jaipur forts for families and couples by BharatMile" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-8">Jaipur's three hilltop forts are among India's most impressive heritage sites. Each one tells a different story — Amber is about royal grandeur, Nahargarh is about sunsets, and Jaigarh is about military power. Here's how to visit all three in one day.</p>

      <div className="space-y-6 mb-10">
        {forts.map((f, i) => (
          <div key={f.name} className="border rounded-xl p-6 bg-amber-50">
            <h2 className="text-xl font-bold mb-3">#{i + 1} {f.name}</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div><strong>Distance:</strong> {f.distance}</div>
              <div><strong>Timing:</strong> {f.timing}</div>
              <div><strong>Ticket:</strong> {f.ticket}</div>
              <div><strong>Time needed:</strong> {f.time}</div>
            </div>
            <p className="mt-3 text-gray-700">✨ <strong>Must-see:</strong> {f.highlight}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-3">One-Day Fort Circuit Itinerary</h2>
      <ol className="list-decimal pl-6 text-lg space-y-2 mb-8">
        <li><strong>8AM:</strong> Start at Amber Fort (coolest time, fewer crowds)</li>
        <li><strong>11AM:</strong> Walk up to Jaigarh Fort (connected by a path)</li>
        <li><strong>1PM:</strong> Lunch at café inside Nahargarh area</li>
        <li><strong>3PM:</strong> Nahargarh Fort + sunset view of Jaipur city</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-3">Tips for Families</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-8">
        <li>Amber Fort has <strong>elephant rides</strong> — book in advance (₹1,100 per elephant)</li>
        <li>Carry water — all three forts are on hills and can get hot</li>
        <li>Hire a <strong>licensed guide at Amber Fort</strong> (₹300–₹500) — essential for kids to understand the history</li>
        <li>All forts are accessible by car/taxi — no trekking required</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center mt-10">
        <h3 className="text-xl font-bold mb-2">Book a Guided Jaipur Fort Tour with BharatMile</h3>
        <p className="text-gray-600 mb-4">AC cab + licensed guide + all fort entries included. Family fort tour from ₹2,499 for up to 5 people.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition">Book Fort Tour on WhatsApp 🏰</a>
      </div>
    </main>
  );
}
