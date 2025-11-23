import { useEffect } from "react";

export default function Mysore() {
  useEffect(() => {
    document.title = "Mysore Palace: The Royal Dussehra Experience | Travel Guide";

    const setMeta = (name, content, attr = "name") => {
      let m = document.querySelector(`meta[${attr}="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute(attr, name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };

    setMeta(
      "description",
      "A complete travel guide to Mysore Palace and the world-famous Dussehra celebrations — timings, history, light show and travel tips."
    );
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <header>
        <h1 className="text-3xl font-bold">Mysore Palace: The Royal Dussehra Experience</h1>
        <p className="text-gray-600 mt-2">
          Discover the grandeur of Mysore Palace and what makes its Dussehra celebration 
          one of India’s biggest royal festivals.
        </p>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">A Glimpse Into Royal Heritage</h2>
        <p className="mt-2">
          Mysore Palace, home to the Wadiyar dynasty, stands as one of India’s most 
          majestic architectural wonders. With its Indo-Saracenic style, intricate 
          carvings, and vibrant halls, the palace draws millions of visitors every year.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Why Dussehra Here is Special</h2>
        <p className="mt-2">
          Mysore’s Dussehra is a 400-year-old tradition celebrated with processions, 
          decorated elephants, cultural performances, and royal ceremonies. The palace 
          illuminates with nearly 1 lakh bulbs — a breathtaking sight you shouldn’t miss.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Timings & Visitor Tips</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Palace hours: 10 AM – 5:30 PM (closed on some holidays)</li>
          <li>Light Show: Daily in the evening (excluding Sundays & festival days)</li>
          <li>Reach early during Dussehra to avoid heavy crowds</li>
          <li>Photography allowed outside, restricted inside the palace</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Best Time to Visit</h2>
        <p className="mt-2">
          Dussehra season (September–October) is the most spectacular, but winter months 
          offer pleasant weather and quieter palace tours.
        </p>
      </section>

      <footer className="mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()} — Wander Guides.
      </footer>
    </main>
  );
}
