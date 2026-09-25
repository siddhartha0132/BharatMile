import { Link, useLocation } from "react-router-dom";
import { findRoute } from "../routes";

const OFFERS = {
  safari: {
    to: "/ranthambore-safari-tours",
    title: "Ranthambore Safari Tours",
    text: "Gypsy & Canter safaris, naturalist guide, resort stay and Jaipur transfers on request. From ₹4,999.",
  },
  jaipur: {
    to: "/jaipur-sightseeing-packages",
    title: "Jaipur Sightseeing Packages",
    text: "Amber Fort, City Palace, Hawa Mahal & more with a local guide and private car. 1–5 day plans.",
  },
};

const WHATSAPP = `https://wa.me/919636974688?text=${encodeURIComponent(
  "Hi BharatMile, I read your blog and want a quote for a trip."
)}`;

// Shown under every blog post so each article links to a money page.
export default function BlogBookingCta() {
  const { pathname } = useLocation();
  const route = findRoute(pathname);
  if (route?.kind !== "blog") return null;

  const offers = route.cta === "both" ? [OFFERS.safari, OFFERS.jaipur] : [OFFERS[route.cta]];

  return (
    <aside className="max-w-4xl mx-auto px-6 pb-14" aria-label="Plan your trip with BharatMile">
      <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c1644a]">Plan it with BharatMile</p>
        <h2 className="mt-1 text-2xl font-bold text-gray-900">Book with a Jaipur-based local team</h2>
        <div className={`mt-5 grid gap-4 ${offers.length > 1 ? "md:grid-cols-2" : ""}`}>
          {offers.map((o) => (
            <Link
              key={o.to}
              to={o.to}
              className="block rounded-xl bg-white p-5 shadow-sm ring-1 ring-orange-100 transition hover:shadow-md"
            >
              <span className="text-lg font-semibold text-gray-900">{o.title} →</span>
              <span className="mt-1 block text-sm text-gray-600">{o.text}</span>
            </Link>
          ))}
        </div>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center rounded-full bg-green-600 px-5 py-2.5 font-semibold text-white hover:bg-green-700"
        >
          Get a free quote on WhatsApp
        </a>
      </div>
    </aside>
  );
}
