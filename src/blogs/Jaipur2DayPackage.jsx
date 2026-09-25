// Route: /blogs/jaipur-2-day-tour-package
import { Link } from "react-router-dom";
import BlogLayout from "../components/BlogLayout";

const FAQS = [
  {
    q: "What is included in the ₹4,999 Jaipur 2-day package?",
    a: "Your stay, a cab for both days and full-day sightseeing on both days covering Jaipur's main forts, palaces and markets.",
  },
  {
    q: "Are monument entry tickets and meals included?",
    a: "The package covers stay, cab and sightseeing. Ask us on WhatsApp about tickets and meals for your dates and we will include them in your final quote.",
  },
  {
    q: "Can we change the itinerary?",
    a: "Yes. The plan below is our suggested order; we can swap places, add a shopping stop or a sunset point, and adjust timings for kids or elderly parents.",
  },
  {
    q: "Can I add a Ranthambore safari?",
    a: "Yes. Ranthambore is about 3.5–4 hours from Jaipur. Safari seats are ₹1,400 per person and a full private Gypsy is ₹25,000 — we can plan both together.",
  },
];

export default function Jaipur2DayPackage() {
  return (
    <BlogLayout
      path="/blogs/jaipur-2-day-tour-package"
      title="Jaipur 2-Day Tour Package ₹4,999: Stay, Cab & Full-Day Sightseeing | BharatMile"
      description="Jaipur 2-day tour package at ₹4,999 with stay, cab and full-day sightseeing — Amber Fort, City Palace, Hawa Mahal, Nahargarh and more. Day-by-day plan and how to book."
      h1="Jaipur 2-Day Tour Package at ₹4,999: Stay, Cab and Full-Day Sightseeing"
      published="2026-09-25"
      readMins={6}
      faqs={FAQS}
      whatsappText="Hi BharatMile, I want the Jaipur 2-day package (₹4,999). Dates: __, People: __"
    >
      <p>
        Two days is the right amount of time for a first visit to Jaipur — enough for the big forts and palaces
        without rushing. Our <strong>2-day Jaipur package is ₹4,999</strong> and takes care of the three things that
        usually cause the most hassle:
      </p>
      <ul>
        <li><strong>Stay</strong> — your night in Jaipur is booked for you</li>
        <li><strong>Cab</strong> — a car and driver for both days, from pickup to drop</li>
        <li><strong>Full-day sightseeing</strong> — a planned route on both days so you see more and wait less</li>
      </ul>

      <h2>Day 1: Amber and the hill forts</h2>
      <ul>
        <li><strong>Morning — Amber Fort:</strong> start early, before the crowds and the heat. Sheesh Mahal and the ramparts are the highlights.</li>
        <li><strong>Panna Meena ka Kund:</strong> the famous criss-cross stepwell, a few minutes from Amber.</li>
        <li><strong>Jal Mahal:</strong> photo stop at the "water palace" on Man Sagar Lake on the way back towards the city.</li>
        <li><strong>Evening — Nahargarh Fort:</strong> the best sunset view over Jaipur's pink city.</li>
      </ul>
      <p>
        Choosing between the two forts for sunset? See{" "}
        <Link to="/blogs/amer-vs-nahargarh-fort-sunset">Amer vs Nahargarh</Link>.
      </p>

      <h2>Day 2: The Pink City</h2>
      <ul>
        <li><strong>City Palace:</strong> still home to Jaipur's royal family, with museums and courtyards.</li>
        <li><strong>Jantar Mantar:</strong> the UNESCO-listed astronomical observatory next door.</li>
        <li><strong>Hawa Mahal:</strong> Jaipur's most photographed facade — the view from the cafés opposite is worth it.</li>
        <li><strong>Albert Hall Museum</strong> and an evening in <strong>Johari and Bapu Bazaar</strong> for jewellery, textiles and mojris.</li>
      </ul>
      <p>
        More detail on each monument, with timings, is in our{" "}
        <Link to="/blogs/top-10-monuments-jaipur-2026">top 10 Jaipur monuments guide</Link>.
      </p>

      <h2>Who this package suits</h2>
      <ul>
        <li>Families and couples on a first trip to Jaipur</li>
        <li>Weekend travellers from Delhi, Agra or nearby cities</li>
        <li>Anyone heading on to Ranthambore — Jaipur is the natural starting point</li>
      </ul>

      <h2>Add a Ranthambore tiger safari</h2>
      <p>
        Ranthambore is about 3.5–4 hours from Jaipur, which makes a Jaipur + Ranthambore trip easy to plan together.
        Safari seats are <strong>₹1,400 per person</strong> and a full private Gypsy is <strong>₹25,000</strong> —
        see the <Link to="/blogs/ranthambore-safari-price-2026">Ranthambore safari price guide</Link>.
      </p>

      <h2>How to book</h2>
      <ol>
        <li>WhatsApp <strong>+91-9636974688</strong> with your travel dates and number of people.</li>
        <li>Tell us your arrival point in Jaipur (railway station, airport, bus stand or hotel).</li>
        <li>We send the confirmed plan and final price.</li>
      </ol>
      <p>
        Looking for a different length of trip? See all{" "}
        <Link to="/jaipur-sightseeing-packages">Jaipur sightseeing packages</Link>.
      </p>
    </BlogLayout>
  );
}
