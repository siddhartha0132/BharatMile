// src/blogs/RanthamboreKidsSafety.jsx
import React, { useEffect } from "react";
import rImg from "../assets/Ranthambore.webp";

export default function RanthamboreKidsSafety() {
  useEffect(() => {
    document.title = "Is Ranthambore Safari Safe for Kids? Complete Parent's Guide | BharatMile";
    const setMeta = (n, c, a = "name") => { let el = document.querySelector(`meta[${a}='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute(a, n); document.head.appendChild(el); } el.setAttribute("content", c); };
    setMeta("description", "Can you take kids on a Ranthambore safari? Yes! This parent's guide covers age rules, safety tips, best zones for children, and what to pack for the jungle.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/ranthambore-safari-safe-for-kids";
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6"><a href="/" className="hover:underline">Home</a> › <a href="/blogs" className="hover:underline">Blogs</a> › Kids Safety Guide</nav>
      <h1 className="text-4xl font-bold mb-4">Is Ranthambore Safari Safe for Kids? A Complete Parent's Guide</h1>
      <p className="text-gray-500 text-sm mb-8">May 2026 · 6 min read · BharatMile Editorial</p>
      <img src={rImg} alt="Ranthambore safari safety guide for kids and families — BharatMile parent's guide" className="w-full rounded-xl mb-10 object-cover h-72" loading="eager" width="800" height="450" />

      <p className="text-lg mb-6"><strong>Short answer: Yes, Ranthambore safari is completely safe for children.</strong> The safari happens on maintained jeep tracks inside a protected reserve — kids are never exposed to animals on foot. Here's everything you need to know.</p>

      <h2 className="text-2xl font-bold mt-8 mb-3">Minimum Age for Ranthambore Safari</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>Gypsy (Private Jeep):</strong> No minimum age restriction. Toddlers allowed.</li>
        <li><strong>Canter (Shared Truck):</strong> Children 5+ recommended. Under 5 can be uncomfortable on long bumpy rides.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">Safety Rules Inside the Park</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li>All visitors must remain seated inside the vehicle at all times</li>
        <li>No loud noise or sudden movements near animals</li>
        <li>Phones must be on silent mode</li>
        <li>Forest guides (mandatory) enforce all rules</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">Best Zones for Families with Young Kids</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li><strong>Zone 3 &amp; 4:</strong> Flat terrain, lake views (Rajbagh), high chances. Kids love the deer and crocodiles too — not just tigers.</li>
        <li><strong>Zone 5:</strong> Scenic lakeside zone. Excellent for family photography.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">What to Pack for Safari with Kids</h2>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-6">
        <li>Warm layer (mornings are cold Oct–Feb)</li>
        <li>Sun hat + sunscreen (afternoon safaris)</li>
        <li>Water bottle + light snacks (no food stops inside park)</li>
        <li>Binoculars for kids — they love spotting birds and deer</li>
        <li>Dull-coloured clothes (avoid bright white or red — animals react)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-3">What Will Kids See (Besides Tigers)?</h2>
      <p className="text-lg mb-4">Even if you don't spot a tiger (sightings depend on luck), kids will enjoy:</p>
      <ul className="list-disc pl-6 text-lg space-y-2 mb-8">
        <li>Sambar deer, chital, nilgai (very common)</li>
        <li>Mugger crocodiles sunbathing near lakes</li>
        <li>Indian Roller, Painted Stork, Eagles (300+ bird species)</li>
        <li>Ranthambore Fort ruins visible from safari tracks</li>
        <li>Wild boar and mongoose (kids find these hilarious)</li>
      </ul>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mt-10">
        <h3 className="text-xl font-bold mb-2">Book a Kid-Friendly Ranthambore Safari</h3>
        <p className="text-gray-600 mb-4">We select child-safe zones, book private gypsies, and arrange family-friendly resorts with kids' meals. Packages from ₹3,499.</p>
        <a href="https://wa.me/919636974688" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">Book Kids Safari on WhatsApp 🦁</a>
      </div>
    </main>
  );
}
