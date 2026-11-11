import { Link, useLocation } from "react-router-dom";
import { findRoute } from "../routes";

const OFFERS = {
  safari: {
    to: "/ranthambore-safari-tours",
    title: "Ranthambore Safari Tours (₹1,400/seat)",
    text: "Confirmed Core & Buffer Zone permits — seats ₹1,400/person, private Gypsy ₹25,000, or our 3-Day Jaipur + Ranthambore Combo from ₹7,499.",
  },
  jaipur: {
    to: "/jaipur-sightseeing-packages",
    title: "Jaipur Sightseeing Package (₹4,999)",
    text: "2-day Jaipur package at ₹4,999 — hotel stay, private AC cab and full-day sightseeing: Amber Fort, City Palace, Hawa Mahal & Nahargarh.",
  },
  rajasthan: {
    to: "/rajasthan-tour-packages",
    title: "Rajasthan Winter Tour Packages (2D–7D)",
    text: "Jaisalmer Luxury Desert Camp from ₹6,999, Udaipur Lake Tours from ₹9,999, and 5–7 Day Jaipur–Jodhpur–Jaisalmer–Udaipur Royal Circuits.",
  },
};

const CITY_NAMES = {
  "/city/jaipur": "Jaipur",
  "/city/udaipur": "Udaipur",
  "/city/jaisalmer": "Jaisalmer & Sam Sand Dunes",
  "/city/jodhpur": "Jodhpur",
  "/city/ranthambore": "Ranthambore Tiger Safari",
  "/city/bikaner": "Bikaner",
  "/city/jawai": "Jawai Leopard Safari",
};

// Shown under every blog post AND every /city/* guide so every informational page converts to a booking.
export default function BlogBookingCta() {
  const { pathname } = useLocation();
  const cleanPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const route = findRoute(cleanPath);
  const isCityPage = cleanPath.startsWith("/city/");

  if (route?.kind !== "blog" && !isCityPage) return null;

  const cityName = CITY_NAMES[cleanPath];
  const offers =
    route?.topic === "safari"
      ? [OFFERS.safari, OFFERS.rajasthan]
      : route?.topic === "jaipur"
        ? [OFFERS.jaipur, OFFERS.rajasthan]
        : [OFFERS.rajasthan, OFFERS.safari, OFFERS.jaipur];

  const waMessage = cityName
    ? `Hi BharatMile! I was reading your ${cityName} travel guide and want a custom package & cab quote for ${cityName}.`
    : `Hi BharatMile! I read your guide (${cleanPath}) and want a quote for a Rajasthan trip.`;

  const whatsappUrl = `https://wa.me/919636974688?text=${encodeURIComponent(waMessage)}`;

  return (
    <aside className="max-w-4xl mx-auto px-6 pb-14" aria-label="Plan your trip with BharatMile">
      <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 md:p-8 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-[#a8523b]">
          Nov – Feb Peak Rajasthan Season • Direct Jaipur Operator
        </p>
        <h2 className="mt-1 text-2xl font-bold text-gray-900">
          {cityName
            ? `Book Your ${cityName} Tour, Hotel & Private Cab with BharatMile`
            : "Book with a Jaipur-based local Rajasthan team"}
        </h2>
        <p className="mt-1.5 text-sm text-gray-600">
          Verified stays, confirmed safari &amp; desert camp bookings, and private AC cabs — customized on WhatsApp in minutes.
        </p>
        <div className={`mt-5 grid gap-4 ${offers.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {offers.map((o) => (
            <Link
              key={o.to}
              to={o.to}
              className="block rounded-xl bg-white p-5 shadow-sm ring-1 ring-orange-100 transition hover:shadow-md hover:ring-[#a8523b]"
            >
              <span className="text-base font-bold text-gray-900">{o.title} →</span>
              <span className="mt-1.5 block text-sm text-gray-600 leading-relaxed">{o.text}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-green-700 px-6 py-3 font-bold text-white shadow hover:bg-green-800 transition"
          >
            <span>💬 Get Instant Quote on WhatsApp</span>
          </a>
          <Link
            to="/rajasthan-tour-packages"
            className="inline-flex min-h-11 items-center rounded-full border border-[#a8523b] bg-white px-5 py-2.5 text-sm font-semibold text-[#a8523b] hover:bg-orange-100 transition"
          >
            Compare All 6 Rajasthan Packages →
          </Link>
        </div>
      </div>
    </aside>
  );
}
