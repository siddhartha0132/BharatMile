import { useEffect } from "react";

export default function KeralaBackwaters() {
  useEffect(() => {
    // Meta Title
    document.title = "Kerala Backwaters: 2025 Houseboat Guide, Prices, Routes, Tips | BharatMile";

    // Helper function
    const set = (n, c, a = "name") => {
      let e = document.querySelector(`meta[${a}="${n}"]`);
      if (!e) {
        e = document.createElement("meta");
        e.setAttribute(a, n);
        document.head.appendChild(e);
      }
      e.setAttribute("content", c);
    };

    // Description
    set(
      "description",
      "Ultimate Kerala Backwaters guide (2025): houseboat prices, best routes, Alleppey itineraries, food, safety, booking tips, seasons, FAQs, and full travel planning.",
    );

    // Keywords
    set(
      "keywords",
      "Kerala backwaters, Alleppey houseboat, houseboat prices 2025, Kumarakom backwaters, Kerala travel guide, Kerala itinerary, premium houseboat, luxury houseboat, best time to visit Kerala, backwater routes",
    );

    // Canonical URL
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + "/blog/kerala-backwaters-houseboat-guide";

    // Open Graph Tags
    set("og:title", "Kerala Backwaters: Houseboat Prices, Best Routes, Travel Guide 2025", "property");
    set(
      "og:description",
      "Complete Kerala Backwaters and Alleppey houseboat guide with pricing, routes, experiences, tips, and FAQs.",
      "property"
    );
    set("og:type", "article", "property");
    set("og:image", "https://images.unsplash.com/photo-1524492412937-b28074a5d7da", "property");
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 leading-relaxed">
      {/* HERO */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Kerala Backwaters: Complete 2025 Houseboat Guide, Prices, Routes & Travel Tips</h1>
        <p className="text-gray-600 text-lg">
          Planning a Kerala backwater trip? This in-depth guide covers houseboat pricing, popular routes, best seasons, booking mistakes to avoid, food experience, photography tips, and everything you need for a perfect backwater escape.
        </p>
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
          alt="Kerala Backwaters Houseboat"
          className="rounded-lg mt-6 shadow"
        />
      </header>

      {/* SECTION 1 */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">What Makes the Kerala Backwaters Special?</h2>
        <p>
          The Kerala Backwaters are a network of canals, lagoons, lakes, and rivers stretching across the state’s coastline. What makes this place magical is the incredibly slow rhythm of life — coconut trees reflecting on still blue waters, traditional kettuvallam houseboats drifting quietly, fishermen casting their nets at sunrise, and small villages appearing like postcards on both sides of the canal. The experience is not just about sightseeing; it’s about letting go of speed and slipping into a peaceful world that moves at its own pace.
        </p>
        <p className="mt-3">
          Alleppey (Alappuzha) is the heart of the backwaters and the most popular destination for houseboats. Kumarakom, Kollam, Kuttanad, and Ashtamudi are other important routes. Each area has its own character — from bird sanctuaries and lush paddy fields to wide lakes that glow gold during sunset.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Houseboat Pricing in 2025 (Updated)</h2>
        <p>
          Kerala houseboat prices change based on season, boat type, build quality, amenities, and route length. Below is a clear, updated cost breakdown for 2025:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Standard Houseboat:</strong> ₹7,000 – ₹10,000 per night (Basic facilities, good for budget travel)</li>
          <li><strong>Deluxe Houseboat:</strong> ₹10,000 – ₹15,000 per night (AC during night, better interiors)</li>
          <li><strong>Premium Houseboat:</strong> ₹15,000 – ₹25,000 per night (AC throughout, superior quality)</li>
          <li><strong>Luxury Houseboat:</strong> ₹25,000 – ₹60,000+ per night (Glass windows, gourmet food, private deck)</li>
        </ul>
        <p className="mt-4">Prices usually include:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Lunch, evening snacks, dinner, breakfast</li>
          <li>Private cruising for 4–5 hours</li>
          <li>Overnight stay</li>
          <li>Tea/coffee</li>
        </ul>
        <p className="mt-4">
          <strong>Tip:</strong> Peak tourist season (November to February) sees a 15–25% increase in prices, especially for luxury boats.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Best Backwater Routes</h2>
        <p>These are the most scenic and traveller‑friendly backwater routes:</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Alleppey → Kumarakom:</strong> Most popular, balanced mix of canals and lake views.</li>
          <li><strong>Alleppey → Kuttanad:</strong> Famous for paddy fields below sea level.</li>
          <li><strong>Kollam → Ashtamudi:</strong> Wide lakes, peaceful routes, fewer tourists.</li>
          <li><strong>Full‑day Alleppey round trip:</strong> Ideal for short 1‑night stays.</li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
          alt="Kerala Backwater Routes"
          className="rounded-lg mt-6 shadow"
        />
      </section>

      {/* SECTION 4 */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Best Time to Visit the Backwaters</h2>
        <p>
          The ideal time to visit the Kerala Backwaters is from <strong>September to March</strong>, when the weather is pleasant, humidity is lower, and the landscapes look fresh after the monsoon.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li><strong>Winter (Nov–Feb):</strong> Best season, premium pricing.</li>
          <li><strong>Monsoon (Jun–Aug):</strong> Cheaper, extremely scenic, romantic but with occasional rain.</li>
          <li><strong>Summer (Apr–May):</strong> Hot and humid; choose AC boats.</li>
        </ul>
      </section>

      {/* SECTION 5 */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">What to Expect Inside a Houseboat</h2>
        <p>
          Modern houseboats are incredibly comfortable, with bedrooms, attached washrooms, upper decks, dining areas, and even luxury bathrooms in premium boats. Most come with a personal chef who cooks Kerala meals on board.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Typical Food Menu</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Karimeen (Pearl Spot fish fry)</li>
          <li>Vegetable thali with sambar, rice, and avial</li>
          <li>Prawn curry (on premium/luxury boats)</li>
          <li>Homemade Kerala breakfast: appam, dosa, puttu</li>
        </ul>
      </section>

      {/* SECTION 6 */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Travel Tips for a Smooth Trip</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Book through verified operators only.</li>
          <li>Confirm AC timing (many boats run AC only at night).</li>
          <li>Check if the boat has proper sanitation and life jackets.</li>
          <li>Carry mosquito repellent.</li>
          <li>Keep cash for small purchases along the canals.</li>
        </ul>
      </section>

      {/* SECTION 7 – FAQ */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>

        <h3 className="text-xl font-bold mt-6">1. How many hours does a houseboat cruise?</h3>
        <p>Most cruises run 4–5 hours during the day. After sunset, boats anchor for the night.</p>

        <h3 className="text-xl font-bold mt-6">2. Are houseboats safe for families?</h3>
        <p>Yes. Modern boats follow safety norms and have trained staff.</p>

        <h3 className="text-xl font-bold mt-6">3. Is one night enough?</h3>
        <p>
          One night is enough for sightseeing, but two nights give you a much calmer, immersive experience.
        </p>

        <h3 className="text-xl font-bold mt-6">4. Can I book last-minute?</h3>
        <p>During peak season, last-minute bookings are risky. Pre-book at least 2 weeks earlier.</p>
      </section>

      <footer className="mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} BharatMile — Kerala Backwater Travel Guides
      </footer>
    </main>
  );
}

