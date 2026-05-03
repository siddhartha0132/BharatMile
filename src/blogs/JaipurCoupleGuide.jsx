// src/blogs/JaipurCoupleGuide.jsx
import React, { useEffect } from "react";
import jaipurImg from "../assets/jaipur.webp";

export default function JaipurCoupleGuide() {
  useEffect(() => {
    document.title = "A Couple's Guide to 48 Hours in Jaipur: Forts, Cafes & Culture | BharatMile";
    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Perfect 48-hour romantic Jaipur itinerary for couples — sunrise at Amber Fort, rooftop cafes, heritage hotels, and a magical evening at Nahargarh Fort.");
    setMeta("og:title", "48-Hour Jaipur Couple Itinerary | BharatMile", "property");
    setMeta("og:image", "https://bharatmile.com/assets/jaipur.webp", "property");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/jaipur-couple-guide-48-hours";
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline">Home</a> &rsaquo; <a href="/blogs" className="hover:underline">Blogs</a> &rsaquo; Jaipur Couple Guide
      </nav>

      <h1 className="text-4xl font-bold mb-4 leading-tight">A Couple's Guide to 48 Hours in Jaipur: Forts, Cafes &amp; Culture</h1>
      <p className="text-gray-500 text-sm mb-8">Published: May 2026 · 7 min read · BharatMile Editorial</p>

      <img
        src={jaipurImg}
        alt="Romantic couple trip to Jaipur — Pink City itinerary for 48 hours by BharatMile"
        className="w-full rounded-xl mb-10 object-cover h-72"
        loading="eager"
        width="800"
        height="450"
      />

      <section className="prose prose-lg max-w-none">
        <p>Jaipur is one of India's most romantic cities. Royal forts, candlelit rooftop restaurants, camel rides at sunset — the Pink City delivers. Here is BharatMile's curated 48-hour couple itinerary.</p>

        <h2>Day 1: The Regal Pink City</h2>
        <h3>Morning (7AM – 12PM)</h3>
        <ul>
          <li><strong>Amber Fort Sunrise:</strong> Arrive by 7:30AM to beat crowds. The golden light on the fort walls at dawn is unforgettable.</li>
          <li><strong>Sheesh Mahal:</strong> The mirror palace inside Amber Fort — magical for photos.</li>
        </ul>
        <h3>Afternoon (1PM – 6PM)</h3>
        <ul>
          <li><strong>Lunch at 1135 AD:</strong> Rajasthani thali with fort views. Budget ₹1,200 per couple.</li>
          <li><strong>Hawa Mahal &amp; City Palace:</strong> Walk the old city lanes, try Pyaaz Kachori from Rawat Mishthan Bhandar (₹30).</li>
          <li><strong>Johari Bazaar:</strong> Pick up a silver ring or lac bangles together.</li>
        </ul>
        <h3>Evening (7PM – 10PM)</h3>
        <ul>
          <li><strong>Nahargarh Fort Sunset:</strong> Iconic view of Jaipur city glowing below. Most romantic spot in Rajasthan.</li>
          <li><strong>Dinner at Padao Restaurant (inside Nahargarh):</strong> Candle-lit, heritage ambience.</li>
        </ul>

        <h2>Day 2: Hidden Gems &amp; Leisure</h2>
        <h3>Morning</h3>
        <ul>
          <li><strong>Jal Mahal:</strong> The floating palace at dawn — quiet and surreal.</li>
          <li><strong>Breakfast at Café Palladio:</strong> Italian-Rajasthani fusion in a blue courtyard. Insta-worthy and delicious.</li>
        </ul>
        <h3>Afternoon</h3>
        <ul>
          <li><strong>Jantar Mantar:</strong> Fascinating astronomical instruments — great conversation starter.</li>
          <li><strong>Albert Hall Museum:</strong> Egyptian mummy, Rajasthani art, cool interiors.</li>
        </ul>
        <h3>Evening</h3>
        <ul>
          <li><strong>Elefantastic / Chokhi Dhani:</strong> Rajasthani cultural evening with folk dance, puppet show, and village food. Budget ₹800/person.</li>
        </ul>

        <h2>Where to Stay in Jaipur for Couples</h2>
        <ul>
          <li><strong>Budget (₹1,500–₹3,000):</strong> Zostel Jaipur, Hotel Pearl Palace</li>
          <li><strong>Mid-range (₹3,500–₹7,000):</strong> Samode Haveli, Bissau Palace</li>
          <li><strong>Luxury (₹12,000+):</strong> Rambagh Palace, Taj Jai Mahal</li>
        </ul>

        <h2>How to Reach Jaipur from Delhi</h2>
        <p>By road it's a 5-hour drive via NH48. Trains (Shatabdi, Ajmer Express) take 4.5 hours and cost ₹400–₹1,200. BharatMile offers private cabs from Delhi with AC comfort starting at ₹4,500.</p>
      </section>

      <div className="mt-14 bg-pink-50 border border-pink-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Plan Your Romantic Jaipur Trip with BharatMile</h3>
        <p className="text-gray-600 mb-4">Hotel + Fort tour + Private cab from Delhi — customised couple packages starting at ₹6,999.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-rose-700 transition">Book on WhatsApp 💑</a>
      </div>
    </main>
  );
}
