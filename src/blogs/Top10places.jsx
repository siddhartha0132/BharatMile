import React, { useEffect } from "react";

export default function Top10places() {

  const places = [
    {
      rank: 1,
      title: "Varanasi – The Spiritual Capital of India",
      region: "North India",
      bestFor: "Spirituality, Culture, Photography",
      bestTime: "October to March",
      highlight:
        "Witness the magical Ganga Aarti, walk through timeless alleys, or take a sunrise boat ride on the sacred Ganges."
    },
    {
      rank: 2,
      title: "Jaipur – The Royal Pink City",
      region: "Rajasthan",
      bestFor: "History, Architecture, Shopping",
      bestTime: "October to March",
      highlight:
        "Explore royal forts, palaces, and vibrant bazaars that reflect India’s regal past."
    },
    {
      rank: 3,
      title: "Ladakh – Heaven for Adventure Lovers",
      region: "Himalayas",
      bestFor: "Adventure, Scenery, Monasteries",
      bestTime: "June to September",
      highlight:
        "High-altitude lakes, ancient monasteries, and dramatic Himalayan landscapes."
    },
    {
      rank: 4,
      title: "Goa – Beaches, Nightlife & Serenity",
      region: "West Coast",
      bestFor: "Beaches, Nightlife, Relaxation",
      bestTime: "November to February",
      highlight:
        "From peaceful beaches to vibrant nightlife, Goa offers the perfect escape."
    },
    {
      rank: 5,
      title: "Kerala Backwaters – God’s Own Country",
      region: "South India",
      bestFor: "Nature, Houseboats, Slow Travel",
      bestTime: "September to March",
      highlight:
        "Cruise through palm-lined canals and experience unmatched tranquility."
    },
    {
      rank: 6,
      title: "Agra – Home of the Taj Mahal",
      region: "North India",
      bestFor: "History, Architecture, World Heritage",
      bestTime: "October to March",
      highlight:
        "The Taj Mahal stands as the ultimate symbol of love and architectural brilliance."
    },
    {
      rank: 7,
      title: "Meghalaya – The Abode of Clouds",
      region: "Northeast India",
      bestFor: "Nature, Trekking, Waterfalls",
      bestTime: "October to April",
      highlight:
        "Living root bridges, misty hills, and lush rainforests."
    },
    {
      rank: 8,
      title: "Rishikesh – Yoga, Adventure & Peace",
      region: "Himalayas",
      bestFor: "Yoga, Meditation, Rafting",
      bestTime: "September to April",
      highlight:
        "The yoga capital of the world with spiritual energy and adventure sports."
    },
    {
      rank: 9,
      title: "Udaipur – The City of Lakes",
      region: "Rajasthan",
      bestFor: "Romance, Palaces, Lakes",
      bestTime: "October to March",
      highlight:
        "Romantic sunsets, royal palaces, and serene lakes define Udaipur."
    },
    {
      rank: 10,
      title: "Andaman Islands – Tropical Paradise",
      region: "Bay of Bengal",
      bestFor: "Beaches, Diving, Water Sports",
      bestTime: "October to May",
      highlight:
        "Turquoise waters, coral reefs, and pristine white-sand beaches."
    }
  ];

  useEffect(() => {
    document.title = "Top 10 Places to Visit in India Before You Die (2025)";
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HERO / AD SECTION */}
      <section className="relative overflow-hidden">
        <img
          src="/images/b1.jpg"
          alt="Luxury India Travel"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <span className="inline-block mb-6 px-6 py-2 rounded-full border border-white/30 text-sm tracking-widest uppercase">
            Curated Travel Experience
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            India Isn’t a Destination. <br />
            <span className="text-indigo-400">It’s a Lifetime Experience.</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Discover the <strong>Top 10 Places in India</strong> that redefine
            spirituality, luxury, adventure, and timeless beauty — curated for
            travelers who don’t settle for ordinary.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#list"
              className="px-10 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition"
            >
              Explore the Collection
            </a>
            <a
              href="/contact"
              className="px-10 py-4 rounded-full border border-white/40 text-white font-semibold text-lg hover:bg-white hover:text-black transition"
            >
              Get Free Travel Plan
            </a>
          </div>
        </div>
      </section>

      {/* PLACES LIST */}
      <section
        id="list"
        className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-10">
          {places.map(p => (
            <div
              key={p.rank}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 border-l-8 border-indigo-600"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="text-3xl font-bold">
                  #{p.rank} {p.title}
                </h2>
                <span className="mt-2 md:mt-0 bg-indigo-600 text-white text-sm px-4 py-1 rounded-full">
                  {p.region}
                </span>
              </div>

              <p className="mt-3 text-indigo-600 font-medium">
                Best for: {p.bestFor}
              </p>

              <p className="text-sm text-gray-500">
                Best time to visit: {p.bestTime}
              </p>

              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                {p.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-24 text-center">
        <h3 className="text-4xl font-extrabold mb-4">
          Travel Isn’t About Places. It’s About Perspective.
        </h3>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
          We curate journeys that inspire, transform, and stay with you forever.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Start Your Journey
        </a>
      </section>

    </main>
  );
}
