// src/blogs/JaipurItinerary3Days.jsx
// Route: /blogs/3-day-jaipur-itinerary-history-lovers
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function JaipurItinerary3Days() {
  useEffect(() => {
    document.title = "The Ultimate 3-Day Jaipur Itinerary for History Lovers 2026 | BharatMile";
    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "The perfect 3-day Jaipur itinerary for history lovers. Hour-by-hour schedule covering Amber Fort, City Palace, Hawa Mahal, hidden gems, food, and shopping. Expert guide by BharatMile.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/3-day-jaipur-itinerary-history-lovers";
    const schema = {
      "@context": "https://schema.org", "@type": "Article",
      headline: "The Ultimate 3-Day Jaipur Itinerary for History Lovers",
      author: { "@type": "Organization", name: "BharatMile Editorial" },
      publisher: { "@type": "Organization", name: "BharatMile", logo: { "@type": "ImageObject", url: "https://bharatmile.com/assets/BharatMile-Logo.webp" } },
      datePublished: "2026-08-01",
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(schema); document.head.appendChild(s);
  }, []);

  const days = [
    {
      day: "Day 1",
      title: "Royal Forts & Ancient Astronomy",
      theme: "UNESCO Heritage Circuit",
      schedule: [
        { time: "5:30 AM", act: "Wake up. Early hotel breakfast or pack a light snack." },
        { time: "6:00 AM", act: "Amber Fort (Amer Qila) — Arrive at sunrise before crowds. Hire an official guide (₹200) at the gate. Explore Sheesh Mahal (mirror palace), Sukh Niwas, Ganesh Pol gateway, and Diwan-e-Aam. Elephant ride optional (book in advance)." },
        { time: "9:00 AM", act: "Walk up to Jaigarh Fort (15-min walk from Amber via a covered passageway). See the Jaivana cannon — the world's largest wheeled cannon, built in 1720. Explore palace ruins and massive water tanks." },
        { time: "11:00 AM", act: "Drive to Nahargarh Fort. Panoramic views of the city. Visit the eerie 'Nahargarh Biological Park' paintings inside Madhavendra Bhawan — 12 themed suites of the royal wives, each identical." },
        { time: "1:00 PM", act: "Lunch at Padao Restaurant inside Nahargarh (on the ramparts — spectacular view). Or drive down to MI Road for authentic thali." },
        { time: "3:00 PM", act: "Jantar Mantar — UNESCO World Heritage Site. The world's largest stone astronomical observatory, built by Maharaja Jai Singh II in 1724. Hire a guide (essential here — the instruments are meaningless without explanation). Must-sees: Samrat Yantra (world's largest sundial), Rashivalaya Yantra, Unnathamsha Yantra." },
        { time: "5:00 PM", act: "Walk to Hawa Mahal (Palace of Winds, 5-min walk from Jantar Mantar). The iconic 5-storey honeycomb façade has 953 windows. Go inside — the view from the top looking down on the street is extraordinary." },
        { time: "6:30 PM", act: "Evening walk through Old City bazaars — Johari Bazaar (gems), Tripolia Bazaar (bangles), Chandpole Bazaar (handicrafts)." },
        { time: "8:00 PM", act: "Dinner at LMB Restaurant (Laxmi Misthan Bhandar) — Jaipur's oldest mithai and restaurant, est. 1727. Try Dal Baati Churma and Ghewar." },
      ],
      historicNote: "The Amber Fort was built over 150 years from 1592–1727 by the Kachwaha Rajput kings. The name 'Amber' comes from Amba Mata, the mother goddess of the region — not from the colour amber."
    },
    {
      day: "Day 2",
      title: "City Palace, Living Royalty & Hidden Stepwells",
      theme: "Royal Palaces & Forgotten Architecture",
      schedule: [
        { time: "8:30 AM", act: "City Palace — Start at Mubarak Mahal (textile museum), Sileh Khana (armoury), Maharani's Chamber. The royal family still lives in part of the palace. The Diwan-e-Khas houses two giant silver urns (1,800 kg each) used by Maharaja Sawai Madho Singh II to carry Ganga water to England." },
        { time: "11:00 AM", act: "Albert Hall Museum — Rajasthan's oldest museum (1876), Gothic-Mughal architecture. Egyptian mummy, arms collection, Rajput miniature paintings, tribal jewellery. Excellent for context before seeing live forts." },
        { time: "1:00 PM", act: "Lunch at Peacock Rooftop Restaurant near City Palace — traditional Rajasthani thali with a view." },
        { time: "2:30 PM", act: "Panna Meena Ka Kund — Jaipur's most photogenic hidden gem. A 16th-century stepwell near Amber with geometric zigzag stairways cascading into the water. Almost no tourists. Perfect for photography." },
        { time: "4:00 PM", act: "Abhaneri Village (1 hour drive from Jaipur) — Chand Baori stepwell, one of India's largest and most architecturally stunning. 3,500 steps, 13 storeys deep. Also features the Harshat Mata temple ruins. Worth the detour for serious history lovers." },
        { time: "7:00 PM", act: "Return to Jaipur. Freshen up." },
        { time: "8:00 PM", act: "Dinner at Suvarna Mahal at Rambagh Palace (splurge) or Niros Restaurant (heritage restaurant since 1949) on MI Road." },
      ],
      historicNote: "City Palace was designed by Maharaja Sawai Jai Singh II — working with architects Vidyadhar Bhattacharya and Samuel Swinton Jacob to blend Rajput, Mughal, and European styles into a single cohesive complex."
    },
    {
      day: "Day 3",
      title: "Markets, Craft Heritage & Departure",
      theme: "Living Culture & Artisan Traditions",
      schedule: [
        { time: "8:00 AM", act: "Sisodia Rani Garden — Mughal-style terraced garden built for Maharaja Sawai Jai Singh II's second queen. Beautiful murals of the Radha-Krishna legend painted along the pathways. Peaceful morning visit." },
        { time: "9:30 AM", act: "Birla Mandir (Laxmi Narayan Temple) — Stunning white marble Vaishnava temple built in 1988. The precision of the marble carving and the devotional ambience are extraordinary. Free entry." },
        { time: "10:30 AM", act: "Anokhi Museum of Hand Printing — Dedicated to Rajasthan's block-print textile tradition. See live demonstrations of hand block printing on fabric. Buy authentic prints directly. Located in Amber road." },
        { time: "12:30 PM", act: "Final Old City market immersion — Johari Bazaar for certified gemstones (get a certification for purchases above ₹5,000), Bapu Bazaar for Mojri shoes and tie-dye fabrics, Nehru Bazaar for blue pottery (Jaipur's unique craft)." },
        { time: "2:00 PM", act: "Lunch at Rawat Mishthan Bhandar — Jaipur's most famous street-food spot. Pyaaz Kachori (₹20 each), Samosa, and Chai. Queue is always long but moves fast." },
        { time: "3:30 PM", act: "Optional: Galtaji Monkey Temple (6 km east) — ancient temple complex built into a natural mountain gorge. Pink monkeys (rhesus macaques) swim in the sacred kund. Atmospheric, off-the-beaten-path." },
        { time: "5:00 PM", act: "Return to hotel. Pack. Departure." },
      ],
      historicNote: "Jaipur's block-print textile tradition dates to the Mughal era. The city's artisans used natural dyes (indigo, turmeric, pomegranate rind) to create intricate patterns on cotton and silk. Anokhi's museum preserves this endangered craft form."
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">Home</Link> &rsaquo; <Link to="/blogs" className="hover:underline">Blogs</Link> &rsaquo; 3-Day Jaipur Itinerary for History Lovers
      </nav>

      <h1 className="text-4xl font-bold mb-4 leading-tight">The Ultimate 3-Day Jaipur Itinerary for History Lovers — Hour-by-Hour Guide 2026</h1>
      <p className="text-gray-500 text-sm mb-8">Published: August 2026 · 12 min read · BharatMile Editorial</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <p className="text-sm text-gray-700"><strong>Quick Summary:</strong> This itinerary covers all 3 UNESCO heritage sites, 2 major fort complexes, 3 hidden gems, and authentic food experiences — without a single rushed moment. It's designed for slow, deep exploration of Jaipur's extraordinary 300-year history.</p>
      </div>

      <section className="prose prose-lg max-w-none">
        <p>Jaipur has been called India's most photogenic city, its most royal city, and its most planned city. All three descriptions are true. Founded in 1727 by astronomer-king Maharaja Sawai Jai Singh II, Jaipur is the only city in India where you can spend three full days exploring its monuments and still feel like you've only scratched the surface.</p>
        <p>This 3-day itinerary is crafted specifically for <strong>history lovers</strong> — visitors who want to understand the <em>story</em> behind each monument, not just take a selfie in front of it. We've built in time for proper exploration, hidden gems most tourists miss, and space for the kind of slow wandering that reveals a city's real character.</p>

        {days.map((d, i) => (
          <div key={d.day} style={{ marginTop: 48, marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ background: "#8b4513", color: "#fff", padding: "4px 16px", borderRadius: 100, fontSize: 12, fontWeight: 700 }}>{d.day}</span>
              <span style={{ background: "#fff8f0", color: "#8b4513", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600, border: "1px solid #f0d9cc" }}>{d.theme}</span>
            </div>
            <h2>{d.day}: {d.title}</h2>
            <div style={{ display: "grid", gap: 14 }}>
              {d.schedule.map(s => (
                <div key={s.time} style={{ display: "flex", gap: 14, borderLeft: "3px solid #f0d9cc", paddingLeft: 16 }}>
                  <span style={{ fontWeight: 700, color: "#8b4513", fontSize: 13, minWidth: 70, paddingTop: 2 }}>{s.time}</span>
                  <span style={{ fontSize: "0.95rem", color: "#444" }}>{s.act}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, background: "#f0f8f0", borderLeft: "4px solid #2d5a27", borderRadius: 8, padding: 16, fontSize: 14, color: "#444" }}>
              <strong>📚 History Note:</strong> {d.historicNote}
            </div>
          </div>
        ))}

        <h2>Practical Tips for History-Focused Jaipur Travel</h2>
        <ul>
          <li><strong>Hire a licensed guide at every monument.</strong> Amber Fort and City Palace without a guide is like reading a book in a language you don't know. Expect to pay ₹200–₹500 per site.</li>
          <li><strong>Buy a composite ticket.</strong> The Rajasthan Tourism composite ticket (₹300 Indians / ₹1,000 foreign) covers Amber Fort, Nahargarh, Jaigarh, City Palace, Jantar Mantar, Hawa Mahal, and Albert Hall — excellent value.</li>
          <li><strong>Visit forts early.</strong> Amber Fort gets extremely crowded after 10 AM. Dawn visits are magical.</li>
          <li><strong>Carry cash.</strong> Many small vendors, stepwells, and local guides only take cash.</li>
          <li><strong>Best months:</strong> October–February. Avoid April–June (extreme heat makes heritage walks brutal).</li>
        </ul>
      </section>

      <div className="mt-14 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Want a Guided Jaipur History Tour?</h3>
        <p className="text-gray-600 mb-4">BharatMile's expert heritage guides bring every monument alive. Book a personalised Jaipur sightseeing package starting ₹2,999.</p>
        <a href="https://wa.me/919636974688?text=Hi%20BharatMile!%20I%20want%20a%203-day%20Jaipur%20history%20tour" target="_blank" rel="noreferrer" className="inline-block bg-amber-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-800 transition">Book Jaipur Heritage Tour 🏯</a>
      </div>

      <div className="mt-10 border-t pt-6">
        <h3 className="font-semibold mb-3">Related Jaipur & Ranthambore Guides</h3>
        <ul className="space-y-2 text-green-700">
          <li><Link to="/jaipur-sightseeing-packages" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Jaipur Sightseeing Packages — All Options</Link></li>
          <li><Link to="/blogs/top-10-monuments-jaipur-2026" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Top 10 Must-Visit Monuments in Jaipur 2026</Link></li>
          <li><Link to="/blogs/where-to-stay-jaipur-best-neighborhoods" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Where to Stay in Jaipur: Best Neighborhoods</Link></li>
          <li><Link to="/ranthambore-safari-tours" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Book Ranthambore Safari Tours (Combine with Jaipur)</Link></li>
        </ul>
      </div>
    </main>
  );
}
