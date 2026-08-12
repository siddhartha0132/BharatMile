// src/blogs/RanthamborefortGuide.jsx
// Route: /blogs/ranthambore-fort-complete-surroundings-guide
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RanthamborefortGuide() {
  useEffect(() => {
    document.title = "Ranthambore Fort — Complete Guide to the UNESCO Heritage Site & Surroundings | BharatMile";
    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Complete guide to Ranthambore Fort — the UNESCO heritage site inside the national park. History, what to see, best time to visit, how to get there, and the famous Ganesh Temple. By BharatMile.");
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://bharatmile.com/blogs/ranthambore-fort-complete-surroundings-guide";
    const schema = {
      "@context": "https://schema.org", "@type": "Article",
      headline: "Ranthambore Fort — Complete Guide and its Surroundings",
      author: { "@type": "Organization", name: "BharatMile Editorial" },
      publisher: { "@type": "Organization", name: "BharatMile", logo: { "@type": "ImageObject", url: "https://bharatmile.com/assets/BharatMile-Logo.webp" } },
      datePublished: "2026-08-01",
    };
    const s = document.createElement("script"); s.type = "application/ld+json"; s.text = JSON.stringify(schema); document.head.appendChild(s);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-14 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">Home</Link> &rsaquo; <Link to="/blogs" className="hover:underline">Blogs</Link> &rsaquo; Ranthambore Fort Complete Guide
      </nav>

      <h1 className="text-4xl font-bold mb-4 leading-tight">A Complete Guide to Ranthambore Fort and its Surroundings — UNESCO Heritage Inside a Jungle</h1>
      <p className="text-gray-500 text-sm mb-8">Published: August 2026 · 10 min read · BharatMile Editorial</p>

      <section className="prose prose-lg max-w-none">
        <p><strong>Ranthambore Fort</strong> is one of India's most extraordinary heritage sites — a 10th-century UNESCO-listed hill fort that sits not in a city or museum district, but deep inside a living, breathing tiger reserve. It is the only fort in the world where you genuinely might see a Bengal Tiger on your way to visit.</p>
        <p>Most visitors to Ranthambore come for the tigers and overlook the fort entirely. This guide is for those who want to experience both — understanding that the fort and the jungle are inseparable parts of the same history.</p>

        <h2>A Brief History of Ranthambore Fort</h2>
        <p>The fort was built in <strong>944 CE</strong> by the Chahamana (Chauhan) Rajputs on a 700-foot high rocky plateau. The name "Ranthambore" derives from "Rantha Stambha" — literally meaning "a pillar standing alone." For over 500 years, the fort was one of the most strategically important strongholds in northern India.</p>
        <p>Key historical events at Ranthambore Fort include:</p>
        <ul>
          <li><strong>1301 CE — Jauhar of Rani Padmini:</strong> When Alauddin Khilji's Delhi Sultanate forces breached the fort after a siege, the Rajput women performed jauhar (mass self-immolation) rather than face capture. This is one of Rajasthan's most well-known stories of honour and sacrifice.</li>
          <li><strong>1569 CE — Mughal conquest:</strong> Akbar's forces finally captured the fort from the Hada Rajputs. The Mughals used it as a hunting ground — the beginning of its wildlife conservation role.</li>
          <li><strong>1763 CE — Transfer to Jaipur:</strong> The Jaipur royal family took control and maintained it as a private hunting ground until Indian independence.</li>
          <li><strong>1955 CE — Wildlife Sanctuary:</strong> Declared a protected wildlife sanctuary; the fort became an uninhabited monument within nature.</li>
        </ul>

        <h2>Why Ranthambore Fort is a UNESCO World Heritage Site</h2>
        <p>Ranthambore Fort was inscribed as a UNESCO World Heritage Site in 2013 as part of the <strong>"Hill Forts of Rajasthan"</strong> cluster — six forts recognised together for their outstanding universal value in Rajput military architecture, sustainability, and cultural significance. The other five forts in the cluster are Chittorgarh, Kumbhalgarh, Gagron, Amber (Jaipur), and Jaisalmer.</p>
        <p>What makes Ranthambore Fort unique within this group is its <strong>ecological setting</strong> — it is the only UNESCO-listed hill fort in India that sits entirely within a national park, creating an extraordinary intersection of heritage and wildlife conservation.</p>

        <h2>What to See Inside Ranthambore Fort</h2>
        <h3>1. The Trinetra Ganesh Temple</h3>
        <p>The <strong>Trinetra Ganesh Temple</strong> is the most famous and visited attraction inside the fort. This temple houses a unique three-eyed (trinetra) image of Lord Ganesha — one of the rarest such depictions in India. The image shows Ganesha with his complete family: wife Ridhi and Siddhi, and sons Shubh and Labh.</p>
        <p>The temple is believed to be one of the oldest Ganesh temples in Rajasthan, dating to the Chahamana period. It receives massive pilgrimages during Ganesh Chaturthi — thousands visit from across Rajasthan and beyond. Believers write letters to Ganesha and mail them to the temple; the postal address is simply "Trinetra Ganesh, Ranthambore Fort, Sawai Madhopur."</p>

        <h3>2. Hammir's Court and Palace Ruins</h3>
        <p>The remains of the Hammir Court (Hammir ka Kachehri) and the adjacent palace complex give an evocative glimpse of royal life. Hammir Dev Chahamana was the last Hindu ruler of the fort before the Sultanate conquest of 1301. The ruins include audience halls, palace chambers, and administrative buildings.</p>

        <h3>3. The Baolis (Stepwells)</h3>
        <p>Several beautiful step wells are scattered across the fort plateau. These were the fort's primary water source and a remarkable feat of medieval hydraulic engineering. The largest baoli has a capacity sufficient to sustain the fort's garrison through multi-year sieges.</p>

        <h3>4. Jora-Bhora Temples</h3>
        <p>A cluster of Jain temples within the fort complex, featuring intricate marble carvings of Jain tirthankaras. These temples date to the 12th–13th centuries and were maintained by Jain merchants who lived within the fort's walls.</p>

        <h3>5. Panoramic Views of the Reserve</h3>
        <p>From the fort's ramparts, you can see the entire Ranthambore jungle spread below you — the shimmering lakes of Padam Talab, Rajbagh, and Malik Talab, the ridgelines of the Vindhya and Aravalli ranges meeting, and if you're very lucky, a tiger moving through the forest below.</p>

        <h2>How to Visit Ranthambore Fort</h2>
        <h3>Getting to the Fort</h3>
        <ul>
          <li>The fort is located <strong>4 km from the Zone 3 safari gate</strong>, accessible via the main road through the park</li>
          <li>You can drive to the base of the fort and then hike up (30–45 minutes each way on foot)</li>
          <li>Alternatively, share vehicles wait at the base and drive up a steep road (saves energy)</li>
          <li>No additional entry fee — your Ranthambore National Park entry permit covers fort access</li>
        </ul>

        <h3>Best Time to Visit the Fort</h3>
        <ul>
          <li><strong>Between safaris (11:00 AM – 2:30 PM):</strong> Park gates are closed for the midday break — this is the ideal window for a fort visit. No safari traffic, peaceful exploration.</li>
          <li><strong>October–February:</strong> Most comfortable weather for the climb</li>
          <li><strong>Avoid April–June:</strong> Extremely hot — the climb becomes arduous in 42°C+ temperatures</li>
          <li><strong>Early morning light</strong> is beautiful on the fort's golden sandstone</li>
        </ul>

        <h2>The Ganesh Chaturthi Mela at Ranthambore</h2>
        <p>The <strong>Trinetra Ganesh Chaturthi Mela</strong> is one of Rajasthan's largest religious festivals, held annually in August/September during Ganesh Chaturthi. Hundreds of thousands of devotees trek to the fort over several days. The park roads become pilgrimage paths — a rare and extraordinary confluence of wildlife sanctuary and mass religious gathering.</p>
        <p>If you visit during this period, expect significant crowds on the road to the fort. Book accommodation at Sawai Madhopur town well in advance.</p>

        <h2>Wildlife You Might Encounter on the Way to the Fort</h2>
        <p>The road to Ranthambore Fort passes through active tiger territory. It is genuinely possible — and not uncommon — to encounter wildlife on this road:</p>
        <ul>
          <li>Sambar and chital (spotted deer) are almost always visible</li>
          <li>Monkeys (langur and rhesus macaque) are abundant near the fort</li>
          <li>Peacocks display near the fort walls</li>
          <li>The famous tiger T-17 "Sundari" was frequently seen near the fort road in recent seasons</li>
          <li>Sloth bears occasionally visit the fort area at dusk</li>
        </ul>
      </section>

      <div className="mt-14 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Visit Ranthambore Fort with a BharatMile Safari Package</h3>
        <p className="text-gray-600 mb-4">All BharatMile Ranthambore packages include a guided fort visit between safaris. Book your complete Ranthambore safari + fort experience.</p>
        <a href="https://wa.me/919636974688?text=Hi%20BharatMile!%20I%20want%20to%20visit%20Ranthambore%20Fort%20and%20do%20a%20safari" target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">Book Ranthambore Safari + Fort Tour 🐯</a>
      </div>

      <div className="mt-10 border-t pt-6">
        <h3 className="font-semibold mb-3">Related Ranthambore & Jaipur Guides</h3>
        <ul className="space-y-2 text-green-700">
          <li><Link to="/ranthambore-safari-tours" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Book Ranthambore Safari Tours — Complete Packages</Link></li>
          <li><Link to="/blogs/how-to-book-jeep-safari-ranthambore" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />How to Book a Jeep Safari in Ranthambore</Link></li>
          <li><Link to="/blogs/best-time-visit-ranthambore-tiger-sightings" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Best Time to Visit Ranthambore</Link></li>
          <li><Link to="/jaipur-sightseeing-packages" className="hover:underline flex items-center gap-1"><ArrowRight size={14} />Jaipur Sightseeing Packages</Link></li>
        </ul>
      </div>
    </main>
  );
}
