// src/blogs/JaipurFamilyHotels.jsx
import React, { useEffect } from "react";
import jaipurImg from "../assets/jaipur.webp";

export default function JaipurFamilyHotels() {
  useEffect(() => {
    document.title = "Top 5 Family-Friendly Hotels in Jaipur Under ₹5,000 | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Best family hotels in Jaipur under ₹5,000 per night — safe, spacious, well-reviewed stays near Amber Fort and City Palace. Perfect for families with kids.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/family-friendly-hotels-jaipur-under-5000";
  }, []);

  const hotels = [
    { name: "Hotel Pearl Palace", area: "Hathroi", price: "₹1,800–₹2,800", rating: "4.6★", highlights: "Rooftop café, family rooms, great reviews, safe locality" },
    { name: "Dera Rawatsar", area: "Civil Lines", price: "₹2,500–₹4,500", rating: "4.5★", highlights: "Heritage haveli, pool, heritage walk nearby, kids loved" },
    { name: "Umaid Mahal Heritage", area: "Bani Park", price: "₹2,200–₹3,800", rating: "4.4★", highlights: "Authentic Rajasthani décor, friendly staff, good veg food" },
    { name: "Megh Niwas", area: "C Scheme", price: "₹1,500–₹2,500", rating: "4.3★", highlights: "Garden, clean rooms, safe area, budget-friendly" },
    { name: "Jaipur Inn", area: "Bani Park", price: "₹1,200–₹2,200", rating: "4.2★", highlights: "Backpacker-friendly, family rooms available, walkable area" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Jaipur Family Hotels</nav>
      <h1 className="text-4xl font-bold mb-4">Top 5 Family-Friendly Hotels in Jaipur Under ₹5,000</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 5 min read · BharatMile Editorial</p>
      <img src={jaipurImg} alt="Top family-friendly budget hotels in Jaipur under 5000 rupees — BharatMile recommendations" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-8">Travelling to Jaipur with family but worried about budget? Good news — Jaipur has excellent mid-range options that are spacious, safe and family-friendly. All picks below are verified by BharatMile travellers.</p>

      <div className="space-y-6">
        {hotels.map((h, i) => (
          <div key={h.name} className="border rounded-xl p-6 bg-amber-50">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">#{i + 1}</span>
                <h2 className="text-xl font-bold mt-1">{h.name}</h2>
                <p className="text-gray-500 text-sm">{h.area}, Jaipur</p>
              </div>
              <div className="text-right">
                <div className="text-green-700 font-bold">{h.price}</div>
                <div className="text-amber-600 text-sm">{h.rating} Google</div>
              </div>
            </div>
            <p className="mt-3 text-gray-700">✅ {h.highlights}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Tips for Booking a Family Hotel in Jaipur</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-8">
        <li>Always check if the hotel has an <strong>extra bed / cot for kids</strong> — many heritage hotels charge extra</li>
        <li>Bani Park area is the safest and most family-friendly locality</li>
        <li>Book <strong>2+ months ahead</strong> for Oct–Feb peak season (prices double)</li>
        <li>Ask about <strong>rooftop dining</strong> — Jaipur evenings are magical from a terrace</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center mt-10">
        <h3 className="text-xl font-bold mb-2">Let BharatMile Book Your Family Stay</h3>
        <p className="text-gray-600 mb-4">We negotiate best rates + include breakfast + fort tour in one package. Starting at ₹3,999/night for a family of 4.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition">Get Hotel Deals on WhatsApp 🏰</a>
      </div>
    </main>
  );
}
