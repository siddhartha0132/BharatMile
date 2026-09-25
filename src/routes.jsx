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

// kind: "blog" routes get the booking CTA; "safari" / "jaipur" / "both"
// picks which money page it promotes.
const blog = (path, factory, cta = "both") => ({ path, Component: page(factory), kind: "blog", cta });
const route = (path, factory) => ({ path, Component: page(factory) });

export const routes = [
  { path: "/", Component: Home },
  route("/city", () => import("./pages/City")),
  route("/blogs", () => import("./pages/Blogs")),
  route("/about", () => import("./pages/About")),
  route("/contact", () => import("./pages/Contact")),

  // Money pages
  route("/ranthambore-safari-tours", () => import("./pages/RanthambhoreSafariTours")),
  route("/jaipur-sightseeing-packages", () => import("./pages/JaipurSightseeingPackages")),

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
  blog("/blogs/ranthambore-safari-guide-2026-family", () => import("./blogs/RanthamboreGuide2026"), "safari"),
  blog("/blogs/jaipur-couple-guide-48-hours", () => import("./blogs/JaipurCoupleGuide"), "jaipur"),
  blog("/blogs/gypsy-vs-canter-ranthambore-family", () => import("./blogs/GypsyVsCanter"), "safari"),
  blog("/blogs/family-friendly-hotels-jaipur-under-5000", () => import("./blogs/JaipurFamilyHotels"), "jaipur"),
  blog("/blogs/rajasthan-weekend-trip-family-delhi", () => import("./blogs/RajasthanWeekend")),
  blog("/blogs/ranthambore-safari-safe-for-kids", () => import("./blogs/RanthamboreKidsSafety"), "safari"),
  blog("/blogs/jaipur-local-food-family-guide", () => import("./blogs/JaipurLocalFood"), "jaipur"),
  blog("/blogs/couple-resorts-ranthambore", () => import("./blogs/RanthamboreResorts"), "safari"),
  blog("/blogs/jaipur-fort-complete-guide", () => import("./blogs/JaipurFortGuide"), "jaipur"),
  blog("/blogs/jaipur-to-ranthambore-travel-guide", () => import("./blogs/JaipurToRanthambore")),
  blog("/blogs/how-to-book-jeep-safari-ranthambore", () => import("./blogs/HowToBookJeepSafari"), "safari"),
  blog("/blogs/3-day-jaipur-itinerary-history-lovers", () => import("./blogs/JaipurItinerary3Days"), "jaipur"),
  blog("/blogs/best-time-visit-ranthambore-tiger-sightings", () => import("./blogs/BestTimeRanthambore"), "safari"),
  blog("/blogs/top-10-monuments-jaipur-2026", () => import("./blogs/Top10JaipurMonuments"), "jaipur"),
  blog("/blogs/ranthambore-fort-complete-surroundings-guide", () => import("./blogs/RanthamborefortGuide"), "safari"),
  blog("/blogs/where-to-stay-jaipur-best-neighborhoods", () => import("./blogs/WhereToStayJaipur"), "jaipur"),
  blog("/blogs/tips-first-ranthambore-safari-what-to-wear", () => import("./blogs/TipsFirstSafari"), "safari"),
  blog("/blogs/amer-vs-nahargarh-fort-sunset", () => import("./blogs/AmerVsNahargarh"), "jaipur"),
  blog("/blogs/ranthambore-vs-sariska-national-park", () => import("./blogs/RanthamboreVsSariska"), "safari"),
  blog("/jaipur-vs-udaipur-which-city-to-visit", () => import("./blogs/Jaipurvsudaipur"), "jaipur"),
  blog("/bhangarh-fort-haunted-history", () => import("./blogs/BhangarhFort.jsx"), "jaipur"),
  blog("/jaisalmer-desert-camping", () => import("./blogs/Jaisalmerdesert.jsx")),
  blog("/jim-corbett-bengal-tiger-safari", () => import("./blogs/JimCorbett"), "safari"),

  // General India blogs
  blog("/top-10-places-to-visit-in-india", () => import("./blogs/Top10places")),
  blog("/2-week-india-itinerary-for-beginners", () => import("./blogs/Theultimate2week")),
  blog("/why-2025-is-the-best-year-to-visit-bharat", () => import("./blogs/Besttimevisit")),
  blog("/manali-to-leh-road-trip-guide", () => import("./blogs/ManaliToLeh")),
  blog("/spiti-valley-middle-land", () => import("./blogs/SpitiValley")),
  blog("/varanasi-ghats-spiritual-journey", () => import("./blogs/VaranasiGhats")),
  blog("/rishikesh-yoga-rafting-peace", () => import("./blogs/Rishikesh.jsx")),
  blog("/blogs/kerala-backwaters", () => import("./blogs/KeralabackWater.jsx")),
  blog("/blogs/hampi-ruins-empire", () => import("./blogs/Hampiempire.jsx")),
  blog("/blogs/pondicherry-french-town", () => import("./blogs/Pondicherry.jsx")),
  blog("/blogs/coorg-coffee-guide", () => import("./blogs/Coorg.jsx")),
  blog("/blogs/ooty-toy-train-tickets-timings", () => import("./blogs/Ooty.jsx")),
  blog("/blogs/mysore-palace-dussehra-experience", () => import("./blogs/Mysore.jsx")),
  blog("/blogs/how-to-travel-india-for-500-rupees", () => import("./blogs/India500.jsx")),
  blog("/blogs/best-hostels-in-india-for-solo-travelers", () => import("./blogs/BestHotels.jsx")),
  blog("/blogs/tatkal-railway", () => import("./blogs/TatkalRailway")),
  blog("/blogs/student-discounts", () => import("./blogs/StudentDiscount")),
  blog("/blogs/solo-female-travel-tips", () => import("./blogs/FemaleTrav")),
  blog("/blogs/chandni-chowk-street-food-guide", () => import("./blogs/ChandniChowk")),
  blog("/blogs/amritsar-golden-temple-langar", () => import("./blogs/GoldenTemple")),
  blog("/goa-forts", () => import("./blogs/GoaForts")),
  blog("/hyderabadi-biryani", () => import("./blogs/HyderabadiBiryani")),
  blog("/meghalaya-walking-on-living-root-bridges", () => import("./blogs/MeghalayaWalking")),
  blog("/sikkim-silk-route-hidden-gem", () => import("./blogs/SikkimSilk")),
  blog("/andaman-islands-scuba-diving-beginners", () => import("./blogs/AndamanIslands")),
  blog("/rann-of-kutch-white-desert-festival", () => import("./blogs/RannofKutch")),
  blog("/valley-of-flowers-monsoon-trekking", () => import("./blogs/ValleyFlowers")),
  blog("/blogs/sundarbans-mangrove-safari", () => import("./blogs/Mangrove")),
  blog("/blogs/packing-list-india", () => import("./blogs/PackingList")),
];

export const NotFound = page(() => import("./pages/NotFound"));

export const findRoute = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routes.find((r) => r.path === clean);
};
