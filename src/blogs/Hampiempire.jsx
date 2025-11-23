import { useEffect } from "react";

export default function Hampiempire() {
  useEffect(() => {
    document.title = "Hampi: Exploring the Ruins of an Empire | Travel Guide";

    const set = (n, c, a = "name") => {
      let e = document.querySelector(`meta[${a}="${n}"]`);
      if (!e) {
        e = document.createElement("meta");
        e.setAttribute(a, n);
        document.head.appendChild(e);
      }
      e.setAttribute("content", c);
    };

    set(
      "description",
      "Explore a complete 2000+ word guide to Hampi: Vijayanagara Empire history, best temples, royal complexes, bouldered landscapes, itinerary, sunrise points, tips, safety, and FAQs."
    );

    set(
      "keywords",
      "Hampi travel guide, Vijayanagara Empire history, Hampi temples, Hampi itinerary, Hampi best places, Hampi tourism, Hampi monuments, stone chariot hampi"
    );

    set("canonical", "https://yourwebsite.com/hampi", "rel");
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 leading-7">
      <header>
        <h1 className="text-4xl font-bold mb-4">Hampi: Exploring the Ruins of an Empire</h1>
        <p className="text-gray-700 text-lg">
          This in-depth Hampi travel guide helps you explore the temples, royal complexes, carved monuments, local stories, and surreal landscapes of the Vijayanagara Empire. Whether you're visiting for history, photography, or adventure, Hampi is an unforgettable mix of mythology and ancient engineering.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">🏛️ The Story of Vijayanagara: India’s Forgotten Superpower</h2>
        <p>
          The Vijayanagara Empire was once one of the richest and most powerful kingdoms in the world. Its capital, Hampi, stretched across massive plains and rocky hills — filled with palaces, temples, bazaars, water tanks, military bases, royal baths, and scientific irrigation systems. Visitors from Persia and Portugal described it as a city full of wealth, gemstones, and unmatched architecture.
        </p>
        <p className="mt-4">
          Today, the ruins cover nearly 30 square kilometers and are protected as a UNESCO World Heritage Site. Every corner of Hampi tells a story — some carved in stone, some passed down through legends, and some hidden in the silence of abandoned structures.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🌄 The Landscape: Nature & History Blended Together</h2>
        <p>
          One thing that makes Hampi instantly unique is its landscape — huge round boulders scattered as far as the eye can see, like nature built them deliberately for dramatic effect. These formations are millions of years old and create surreal viewpoints, beautiful valleys, and ideal trails for trekking and photography.
        </p>
        <p className="mt-3">
          The Tungabhadra River splits the region into two: the temple side (Hampi Bazaar area) and the Hippie Island side (Virupapur Gadde), each offering entirely different experiences.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🏯 Top Places to Visit in Hampi (Detailed)</h2>

        <h3 className="text-xl font-semibold mt-4">1. Virupaksha Temple</h3>
        <p>
          The heart of Hampi and one of the oldest functioning temples in India, Virupaksha Temple is dedicated to Lord Shiva. Its towering gopuram, daily rituals, elephants, and serene courtyards make it a spiritual anchor of the region.
        </p>

        <h3 className="text-xl font-semibold mt-5">2. Vittala Temple & The Stone Chariot</h3>
        <p>
          This iconic complex is the highlight of Hampi tourism. The stone chariot — carved entirely from granite — stands as a symbol of India’s architectural brilliance. The musical pillars inside the hall once produced sounds when tapped (now protected).
        </p>

        <h3 className="text-xl font-semibold mt-5">3. Hampi Bazaar</h3>
        <p>
          Once a lively ancient marketplace, Hampi Bazaar stretches for almost a kilometer with pillared pavilions on both sides. You can walk through history imagining traders selling horses, jewels, spices, and textiles centuries ago.
        </p>

        <h3 className="text-xl font-semibold mt-5">4. Royal Enclosure</h3>
        <p>
          This area once housed palaces, pavilions, and administrative courts. Even in ruins, you can feel the scale of power — especially when standing near the Mahanavami Dibba, a massive platform used for festivals and military parades.
        </p>

        <h3 className="text-xl font-semibold mt-5">5. Lotus Mahal</h3>
        <p>
          A stunning blend of Hindu and Islamic styles, this monument is known for its delicate arches and lotus-shaped design. It was likely used by royal women for recreation.
        </p>

        <h3 className="text-xl font-semibold mt-5">6. Elephant Stables</h3>
        <p>
          A long row of domed chambers built to house the royal elephants, this is one of the most photogenic sites in Hampi. The Indo-Islamic architecture shows the empire’s global influences.
        </p>

        <h3 className="text-xl font-semibold mt-5">7. Queen’s Bath</h3>
        <p>
          An elegant structure where royal women once bathed, surrounded by ornate balconies and corridors. The Indo-Islamic fusion is seen in every arch.
        </p>

        <h3 className="text-xl font-semibold mt-5">8. Matanga Hill</h3>
        <p>
          The best sunrise point in Hampi. The climb is moderate, but the panoramic view of boulders, temples, and the river valley is absolutely worth it.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🚲 How to Explore Hampi Comfortably</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Rent a scooter for fast and flexible movement.</li>
          <li>Bicycles are great for early mornings when the weather is pleasant.</li>
          <li>Tuk-tuks are available for point-to-point travel.</li>
          <li>Wear sunscreen and carry water — the sun is strong.</li>
          <li>Start early to see the major temples before crowds arrive.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">✨ Mythology & Hidden Stories of Hampi</h2>
        <p>
          Many legends connect Hampi to the Ramayana. It is believed to be part of Kishkindha, the kingdom of Sugriva and Hanuman. Anjanadri Hill is considered the birthplace of Hanuman, making Hampi a major site for mythology lovers as well.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🗺️ Suggested 2-Day Hampi Itinerary</h2>

        <h3 className="font-semibold mt-4">Day 1: Temples & Historic Sights</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Virupaksha Temple</li>
          <li>Hampi Bazaar</li>
          <li>Vittala Temple & Stone Chariot</li>
          <li>King’s Balance</li>
          <li>Achyutaraya Temple</li>
          <li>Sunset at Hemakuta Hill</li>
        </ul>

        <h3 className="font-semibold mt-6">Day 2: Royal Enclosure & Natural Views</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Royal Enclosure</li>
          <li>Queen’s Bath</li>
          <li>Lotus Mahal & Elephant Stables</li>
          <li>Pushkarini Stepwell</li>
          <li>Sunset at Matanga Hill</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">📍 Best Time to Visit Hampi</h2>
        <p>
          October to February is the best time with pleasant weather. Summers are extremely hot, and monsoons make some paths slippery but great for photography.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">❓ Frequently Asked Questions</h2>

        <h3 className="font-semibold mt-4">Is Hampi safe for solo travelers?</h3>
        <p>Yes, it is safe. Just avoid isolated areas after dark and travel with basic precautions.</p>

        <h3 className="font-semibold mt-4">Do I need a guide?</h3>
        <p>A guide is helpful for history, but you can explore alone using maps and signboards.</p>

        <h3 className="font-semibold mt-4">How many days are enough?</h3>
        <p>2–3 days are ideal to cover main monuments and viewpoints.</p>
      </section>

      <footer className="mt-12 text-sm text-gray-600 text-center">© {new Date().getFullYear()} — Historic Travel Notes.</footer>
    </main>
  );}
