// src/blogs/RajasthanWeekend.jsx
import React, { useEffect } from "react";
import jaipurImg from "../assets/jaipur.webp";

export default function RajasthanWeekend() {
  useEffect(() => {
    document.title = "Best 3-Day Rajasthan Weekend Trip for Families from Delhi | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Plan the perfect 3-day weekend family trip from Delhi to Rajasthan — Jaipur forts, Ranthambore tiger safari, and affordable packages from ₹7,999.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/rajasthan-weekend-trip-family-delhi";
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Rajasthan Weekend Trip</nav>
      <h1 className="text-4xl font-bold mb-4">Best 3-Day Rajasthan Weekend Trip for Families from Delhi</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 7 min read · BharatMile Editorial</p>
      <img src={jaipurImg} alt="3-day Rajasthan weekend family trip from Delhi — Jaipur and Ranthambore itinerary by BharatMile" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-6">Long weekend coming up? A <strong>Jaipur + Ranthambore 3-day family trip</strong> from Delhi is one of India's best value travel combos. Here's the exact plan BharatMile uses for hundreds of Delhi families every year.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">Day 1: Delhi → Jaipur</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>7AM:</strong> Depart Delhi by private cab (5 hrs, NH48)</li>
        <li><strong>1PM:</strong> Arrive Jaipur, check-in to family hotel</li>
        <li><strong>3PM:</strong> Amber Fort + Sheesh Mahal</li>
        <li><strong>7PM:</strong> Dinner at rooftop restaurant, Jaipur old city</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">Day 2: Jaipur → Ranthambore</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>7AM:</strong> City Palace + Hawa Mahal (quick visit)</li>
        <li><strong>11AM:</strong> Drive to Ranthambore (3.5 hrs)</li>
        <li><strong>3:30PM:</strong> Afternoon jungle safari (Gypsy, Zone 2–5)</li>
        <li><strong>Evening:</strong> Resort stay near park</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">Day 3: Ranthambore → Delhi</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>6AM:</strong> Morning jungle safari (golden hour = best tiger sightings)</li>
        <li><strong>9AM:</strong> Breakfast, Ranthambore Fort visit</li>
        <li><strong>12PM:</strong> Drive back to Delhi (5 hrs)</li>
        <li><strong>6PM:</strong> Home with wildlife photos and Rajasthani memories!</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">Approx Budget (Family of 4)</h2>
      <table className="w-full border text-sm mb-8">
        <thead className="bg-gray-100"><tr><th className="p-3 text-left">Item</th><th className="p-3 text-left">Cost</th></tr></thead>
        <tbody>
          {[["Private Cab (Delhi–Jaipur–Ranthambore–Delhi)", "₹9,000–₹12,000"], ["Jaipur Hotel (1 night, family room)", "₹2,500–₹4,000"], ["Ranthambore Resort (1 night)", "₹3,000–₹6,000"], ["2 Gypsy Safaris", "₹4,000–₹6,000"], ["Entry fees + guide", "₹1,500"], ["Food (3 days)", "₹3,000–₹5,000"], ["Total estimate", "₹23,000–₹35,000"]].map(([i, c]) => <tr key={i} className="border-t"><td className="p-3">{i}</td><td className="p-3 font-medium">{c}</td></tr>)}
        </tbody>
      </table>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center mt-10">
        <h3 className="text-xl font-bold mb-2">Book This Exact Trip with BharatMile</h3>
        <p className="text-gray-600 mb-4">All-inclusive 3-day Jaipur + Ranthambore family packages from ₹7,999/person. Cab, hotel, safari — all arranged.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition">Plan with BharatMile 🗺️</a>
      </div>
    </main>
  );
}
