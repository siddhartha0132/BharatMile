// src/blogs/JaipurLocalFood.jsx
import React, { useEffect } from "react";
import jaipurImg from "../assets/jaipur.webp";

export default function JaipurLocalFood() {
  useEffect(() => {
    document.title = "Top 10 Foods to Eat in Jaipur: A Family Food Tour Guide | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "The ultimate Jaipur food guide for families — Dal Baati Churma, Pyaaz Kachori, Ghewar, and where to find the best local Rajasthani street food in 2026.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/jaipur-local-food-family-guide";
  }, []);

  const foods = [
    { name: "Dal Baati Churma", where: "LMB Restaurant, Old City", cost: "₹200–₹350/plate", note: "Rajasthan's signature dish. Baked wheat balls with lentil gravy and sweet churma." },
    { name: "Pyaaz Kachori", where: "Rawat Mishthan Bhandar", cost: "₹25–₹35/piece", note: "Crispy pastry stuffed with spiced onions. Best breakfast in Jaipur." },
    { name: "Laal Maas", where: "Handi Restaurant, MI Road", cost: "₹400–₹600", note: "Fiery mutton curry — not for kids! A must-try for adults." },
    { name: "Ghewar", where: "Any sweet shop in walled city", cost: "₹40–₹150", note: "Disc-shaped sweet soaked in sugar syrup. Kids love it." },
    { name: "Mawa Kachori", where: "Rawat Mishthan Bhandar", cost: "₹30–₹50/piece", note: "Sweet kachori stuffed with mawa (milk solids). Unique to Jaipur." },
    { name: "Ker Sangri", where: "Heritage hotel thalis", cost: "₹150–₹250", note: "Desert beans and berries stir-fried in spices. Authentic Rajasthani." },
    { name: "Masala Chai", where: "Any roadside stall", cost: "₹10–₹20", note: "Thick, spiced milk tea. Drink with kachori for the full experience." },
    { name: "Rajasthani Thali", where: "Chokhi Dhani village", cost: "₹600–₹900/adult", note: "15+ dishes, unlimited refills — best full-meal experience for families." },
    { name: "Kulfi Faluda", where: "Pandit Kulfi, Johari Bazaar", cost: "₹60–₹120", note: "Rose-flavoured ice cream with vermicelli. Children's favourite." },
    { name: "Mirchi Bada", where: "Street stalls, old city", cost: "₹15–₹30", note: "Giant green chilli stuffed with potato, deep fried. Brave snack!" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Jaipur Food Guide</nav>
      <h1 className="text-4xl font-bold mb-4">Top 10 Foods to Eat in Jaipur: A Family Food Tour Guide</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 6 min read · BharatMile Editorial</p>
      <img src={jaipurImg} alt="Jaipur local food tour for families — top 10 Rajasthani dishes to try in the Pink City" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-8">A trip to Jaipur isn't complete without eating your way through the Pink City. From flaky kachoris at dawn to a full Rajasthani thali at Chokhi Dhani — here are the 10 foods every visiting family must eat.</p>

      <div className="space-y-4 mb-10">
        {foods.map((f, i) => (
          <div key={f.name} className="border rounded-lg p-5 bg-orange-50">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold">#{i + 1} {f.name}</h2>
              <span className="text-green-700 font-semibold text-sm">{f.cost}</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">📍 Try at: {f.where}</p>
            <p className="text-gray-700">{f.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Book a Guided Jaipur Food Walk with BharatMile</h3>
        <p className="text-gray-600 mb-4">3-hour guided walk through old city markets + 8 food tastings. ₹799/person. Perfect for families.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition">Book Food Tour on WhatsApp 🍛</a>
      </div>
    </main>
  );
}
