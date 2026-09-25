/* eslint-disable react-refresh/only-export-components -- route table, not a component module */
import { lazy } from "react";
import Home from "./pages/Home";

// Lazy page that can be preloaded before the first render. Once loaded it
// renders synchronously, so prerendered HTML is never replaced by a
// Suspense fallback on startup.
function page(factory) {
  let Loaded = null;
  const load = () => factory().then((m) => (Loaded = m.default));
  const Lazy = lazy(() => factory().then((m) => ((Loaded = m.default), m)));
  const Page = (props) => (Loaded ? <Loaded {...props} /> : <Lazy {...props} />);
  Page.preload = load;
  return Page;
}

// topic ("safari" | "jaipur" | "rajasthan" | "india") picks the money page a
// blog's booking CTA promotes and which guides appear under "Related guides".
// label is the short link text used for those related links.
const blog = (path, factory, topic, label) => ({ path, Component: page(factory), kind: "blog", topic, label });
const route = (path, factory, topic) => ({ path, Component: page(factory), topic });

export const routes = [
  { path: "/", Component: Home },
  route("/city", () => import("./pages/City")),
  route("/blogs", () => import("./pages/Blogs")),
  route("/about", () => import("./pages/About")),
  route("/contact", () => import("./pages/Contact")),

  // Money pages
  route("/ranthambore-safari-tours", () => import("./pages/RanthambhoreSafariTours"), "safari"),
  route("/jaipur-sightseeing-packages", () => import("./pages/JaipurSightseeingPackages"), "jaipur"),

  // Cities
  route("/city/jaipur", () => import("./citys/Jaipur.jsx")),
  route("/city/udaipur", () => import("./citys/Udaipur")),
  route("/city/ranthambore", () => import("./citys/Ranthambore")),
  route("/city/jodhpur", () => import("./citys/Jodhpur")),
  route("/city/bikaner", () => import("./citys/Bikaner")),
  route("/city/jaisalmer", () => import("./citys/Jaisalmer")),
  route("/city/jawai", () => import("./citys/Jawai")),
  route("/city/ranchi", () => import("./citys/Ranchi")),

  // Ranthambore & Jaipur blogs
  blog("/blogs/ranthambore-safari-guide-2026-family", () => import("./blogs/RanthamboreGuide2026"), "safari", "Ranthambore Safari Guide 2026 for Families"),
  blog("/blogs/jaipur-couple-guide-48-hours", () => import("./blogs/JaipurCoupleGuide"), "jaipur", "48 Hours in Jaipur for Couples"),
  blog("/blogs/gypsy-vs-canter-ranthambore-family", () => import("./blogs/GypsyVsCanter"), "safari", "Gypsy vs Canter: Which Safari Vehicle?"),
  blog("/blogs/family-friendly-hotels-jaipur-under-5000", () => import("./blogs/JaipurFamilyHotels"), "jaipur", "Family Hotels in Jaipur Under ₹5,000"),
  blog("/blogs/rajasthan-weekend-trip-family-delhi", () => import("./blogs/RajasthanWeekend"), "rajasthan", "3-Day Rajasthan Weekend Trip from Delhi"),
  blog("/blogs/ranthambore-safari-safe-for-kids", () => import("./blogs/RanthamboreKidsSafety"), "safari", "Is Ranthambore Safari Safe for Kids?"),
  blog("/blogs/jaipur-local-food-family-guide", () => import("./blogs/JaipurLocalFood"), "jaipur", "Top 10 Foods to Eat in Jaipur"),
  blog("/blogs/couple-resorts-ranthambore", () => import("./blogs/RanthamboreResorts"), "safari", "Best Couple Resorts in Ranthambore"),
  blog("/blogs/jaipur-fort-complete-guide", () => import("./blogs/JaipurFortGuide"), "jaipur", "Amber, Nahargarh & Jaigarh Fort Guide"),
  blog("/blogs/jaipur-to-ranthambore-travel-guide", () => import("./blogs/JaipurToRanthambore"), "rajasthan", "Jaipur to Ranthambore: Cab, Train & Distance"),
  blog("/blogs/how-to-book-jeep-safari-ranthambore", () => import("./blogs/HowToBookJeepSafari"), "safari", "How to Book a Ranthambore Jeep Safari"),
  blog("/blogs/3-day-jaipur-itinerary-history-lovers", () => import("./blogs/JaipurItinerary3Days"), "jaipur", "3-Day Jaipur Itinerary"),
  blog("/blogs/best-time-visit-ranthambore-tiger-sightings", () => import("./blogs/BestTimeRanthambore"), "safari", "Best Time for Tiger Sightings in Ranthambore"),
  blog("/blogs/top-10-monuments-jaipur-2026", () => import("./blogs/Top10JaipurMonuments"), "jaipur", "Top 10 Monuments in Jaipur (Fees & Timings)"),
  blog("/blogs/ranthambore-fort-complete-surroundings-guide", () => import("./blogs/RanthamborefortGuide"), "safari", "Ranthambore Fort Complete Guide"),
  blog("/blogs/where-to-stay-jaipur-best-neighborhoods", () => import("./blogs/WhereToStayJaipur"), "jaipur", "Where to Stay in Jaipur"),
  blog("/blogs/tips-first-ranthambore-safari-what-to-wear", () => import("./blogs/TipsFirstSafari"), "safari", "First Ranthambore Safari: What to Wear & Pack"),
  blog("/blogs/amer-vs-nahargarh-fort-sunset", () => import("./blogs/AmerVsNahargarh"), "jaipur", "Amer vs Nahargarh Fort for Sunset"),
  blog("/blogs/ranthambore-vs-sariska-national-park", () => import("./blogs/RanthamboreVsSariska"), "safari", "Ranthambore vs Sariska"),
  blog("/jaipur-vs-udaipur-which-city-to-visit", () => import("./blogs/Jaipurvsudaipur"), "jaipur", "Jaipur vs Udaipur: Which to Visit?"),
  blog("/bhangarh-fort-haunted-history", () => import("./blogs/BhangarhFort.jsx"), "jaipur", "Bhangarh Fort: Haunted History"),
  blog("/jaisalmer-desert-camping", () => import("./blogs/Jaisalmerdesert.jsx"), "rajasthan", "Jaisalmer Desert Camping"),
  blog("/jim-corbett-bengal-tiger-safari", () => import("./blogs/JimCorbett"), "safari", "Jim Corbett Tiger Safari"),

  // General India blogs
  blog("/top-10-places-to-visit-in-india", () => import("./blogs/Top10places"), "india", "Top 10 Places to Visit in India"),
  blog("/2-week-india-itinerary-for-beginners", () => import("./blogs/Theultimate2week"), "india", "2-Week India Itinerary for Beginners"),
  blog("/why-2025-is-the-best-year-to-visit-bharat", () => import("./blogs/Besttimevisit"), "india", "Why Visit Bharat Now"),
  blog("/manali-to-leh-road-trip-guide", () => import("./blogs/ManaliToLeh"), "india", "Manali to Leh Road Trip"),
  blog("/spiti-valley-middle-land", () => import("./blogs/SpitiValley"), "india", "Spiti Valley Travel Guide"),
  blog("/varanasi-ghats-spiritual-journey", () => import("./blogs/VaranasiGhats"), "india", "Varanasi Ghats Guide"),
  blog("/rishikesh-yoga-rafting-peace", () => import("./blogs/Rishikesh.jsx"), "india", "Rishikesh: Yoga, Rafting & Aarti"),
  blog("/blogs/kerala-backwaters", () => import("./blogs/KeralabackWater.jsx"), "india", "Kerala Backwaters Houseboat Guide"),
  blog("/blogs/hampi-ruins-empire", () => import("./blogs/Hampiempire.jsx"), "india", "Hampi Ruins Guide"),
  blog("/blogs/pondicherry-french-town", () => import("./blogs/Pondicherry.jsx"), "india", "Pondicherry Travel Guide"),
  blog("/blogs/coorg-coffee-guide", () => import("./blogs/Coorg.jsx"), "india", "Coorg Travel & Coffee Guide"),
  blog("/blogs/ooty-toy-train-tickets-timings", () => import("./blogs/Ooty.jsx"), "india", "Ooty Toy Train Tickets & Timings"),
  blog("/blogs/mysore-palace-dussehra-experience", () => import("./blogs/Mysore.jsx"), "india", "Mysore Palace & Dussehra Guide"),
  blog("/blogs/how-to-travel-india-for-500-rupees", () => import("./blogs/India500.jsx"), "india", "Travel India on ₹500 a Day"),
  blog("/blogs/best-hostels-in-india-for-solo-travelers", () => import("./blogs/BestHotels.jsx"), "india", "Best Hostels for Solo Travellers"),
  blog("/blogs/tatkal-railway", () => import("./blogs/TatkalRailway"), "india", "IRCTC Tatkal Booking Guide"),
  blog("/blogs/student-discounts", () => import("./blogs/StudentDiscount"), "india", "Student Travel Discounts in India"),
  blog("/blogs/solo-female-travel-tips", () => import("./blogs/FemaleTrav"), "india", "Solo Female Travel Tips"),
  blog("/blogs/chandni-chowk-street-food-guide", () => import("./blogs/ChandniChowk"), "india", "Chandni Chowk Street Food Guide"),
  blog("/blogs/amritsar-golden-temple-langar", () => import("./blogs/GoldenTemple"), "india", "Golden Temple & Langar Guide"),
  blog("/goa-forts", () => import("./blogs/GoaForts"), "india", "Goa Forts & Spice Farms"),
  blog("/hyderabadi-biryani", () => import("./blogs/HyderabadiBiryani"), "india", "Hyderabadi Biryani Food Trail"),
  blog("/meghalaya-walking-on-living-root-bridges", () => import("./blogs/MeghalayaWalking"), "india", "Meghalaya Living Root Bridges"),
  blog("/sikkim-silk-route-hidden-gem", () => import("./blogs/SikkimSilk"), "india", "Sikkim Silk Route Guide"),
  blog("/andaman-islands-scuba-diving-beginners", () => import("./blogs/AndamanIslands"), "india", "Andaman Scuba Diving for Beginners"),
  blog("/rann-of-kutch-white-desert-festival", () => import("./blogs/RannofKutch"), "india", "Rann of Kutch & Rann Utsav"),
  blog("/valley-of-flowers-monsoon-trekking", () => import("./blogs/ValleyFlowers"), "india", "Valley of Flowers Trek"),
  blog("/blogs/sundarbans-mangrove-safari", () => import("./blogs/Mangrove"), "india", "Sundarbans Mangrove Safari"),
];

export const NotFound = page(() => import("./pages/NotFound"));

export const findRoute = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routes.find((r) => r.path === clean);
};

// Topic mix for "Related guides": same-topic first, then neighbours. General
// India posts also feed the Ranthambore/Jaipur guides that lead to bookings.
const RELATED_MIX = {
  safari: [["safari", 3], ["jaipur", 1]],
  jaipur: [["jaipur", 3], ["safari", 1]],
  rajasthan: [["rajasthan", 1], ["safari", 2], ["jaipur", 1]],
  india: [["india", 2], ["safari", 1], ["jaipur", 1]],
};

// Deterministic (same on prerender and client). Each page starts just after
// itself in its topic group, so links spread across all guides.
export function relatedGuides(pathname, count = 4) {
  const self = findRoute(pathname);
  if (!self?.topic) return [];
  const blogs = routes.filter((r) => r.kind === "blog" && r.path !== self.path);
  const mix = self.kind === "blog" ? RELATED_MIX[self.topic] : [[self.topic, count]];
  const picked = [];
  for (const [topic, n] of mix) {
    const group = routes.filter((r) => r.kind === "blog" && r.topic === topic);
    const start = group.indexOf(self) + 1;
    const rotated = [...group.slice(start), ...group.slice(0, start)].filter((r) => r !== self);
    picked.push(...rotated.slice(0, n));
  }
  for (const r of blogs) if (picked.length < count && !picked.includes(r)) picked.push(r);
  return picked.slice(0, count);
}
