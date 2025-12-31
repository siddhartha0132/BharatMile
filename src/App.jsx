import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// 🔹 Critical pages (keep eager)
import Home from "./pages/Home";
import City from "./pages/City";
import Blogs from "./pages/Blogs";

// 🔹 Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LeadCapturePopup from "./components/LeadCapturePopup";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

// 🔹 Lazy loaded pages (performance boost)
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// 🔹 Cities
const Udaipur = lazy(() => import("./citys/Udaipur"));
const Jaipur = lazy(() => import("./citys/Jaipur.jsx"));
const Ranthambore = lazy(() => import("./citys/Ranthambore"));
const Jodhpur = lazy(() => import("./citys/Jodhpur"));
const Bikaner = lazy(() => import("./citys/Bikaner"));
const Jaisalmer = lazy(() => import("./citys/Jaisalmer"));
const Jawai = lazy(() => import("./citys/Jawai"));
const Ranchi = lazy(() => import("./citys/Ranchi"));

// 🔹 Blogs
const Top10places = lazy(() => import("./blogs/Top10places"));
const Theultimate2week = lazy(() => import("./blogs/Theultimate2week"));
const Besttimevisit = lazy(() => import("./blogs/Besttimevisit"));
const Jaipurvsudaipur = lazy(() => import("./blogs/Jaipurvsudaipur"));
const ManaliToLeh = lazy(() => import("./blogs/ManaliToLeh"));
const SpitiValley = lazy(() => import("./blogs/SpitiValley"));
const VaranasiGhats = lazy(() => import("./blogs/VaranasiGhats"));
const Rishikesh = lazy(() => import("./blogs/Rishikesh.jsx"));
const JaisalmerCamping = lazy(() => import("./blogs/Jaisalmerdesert.jsx"));
const BhangarhFort = lazy(() => import("./blogs/BhangarhFort.jsx"));
const KeralaBackWater = lazy(() => import("./blogs/KeralabackWater.jsx"));
const HampiEmpire = lazy(() => import("./blogs/Hampiempire.jsx"));
const Pondicherry = lazy(() => import("./blogs/Pondicherry.jsx"));
const Coorg = lazy(() => import("./blogs/Coorg.jsx"));
const Ooty = lazy(() => import("./blogs/Ooty.jsx"));
const Mysore = lazy(() => import("./blogs/Mysore.jsx"));
const India500 = lazy(() => import("./blogs/India500.jsx"));
const BestHotels = lazy(() => import("./blogs/BestHotels.jsx"));
const TatkalRailway = lazy(() => import("./blogs/TatkalRailway"));
const StudentDiscount = lazy(() => import("./blogs/StudentDiscount"));
const FemaleTrav = lazy(() => import("./blogs/FemaleTrav"));
const ChandniChowk = lazy(() => import("./blogs/ChandniChowk"));
const GoldenTemple = lazy(() => import("./blogs/GoldenTemple"));
const GoaForts = lazy(() => import("./blogs/GoaForts"));
const HyderabadiBiryani = lazy(() => import("./blogs/HyderabadiBiryani"));
const MeghalayaWalking = lazy(() => import("./blogs/MeghalayaWalking"));
const SikkimSilk = lazy(() => import("./blogs/SikkimSilk"));
const AndamanIslands = lazy(() => import("./blogs/AndamanIslands"));
const RannofKutch = lazy(() => import("./blogs/RannofKutch"));
const JimCorbett = lazy(() => import("./blogs/JimCorbett"));
const ValleyFlowers = lazy(() => import("./blogs/ValleyFlowers"));
const Mangrove = lazy(() => import("./blogs/Mangrove"));
const PackingList = lazy(() => import("./blogs/PackingList"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <LeadCapturePopup />

      {/* fallback prevents blank screens */}
      <Suspense fallback={<div className="pt-24 text-center">Loading…</div>}>

        <main className="min-h-screen pt-20">
          <Routes>

            {/* Eager loaded important routes */}
            <Route path="/" element={<Home />} />
            <Route path="/city" element={<City />} />
            <Route path="/blogs" element={<Blogs />} />

            {/* Lazy basic pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* City Routes */}
            <Route path="/city/jaipur" element={<Jaipur />} />
            <Route path="/city/udaipur" element={<Udaipur />} />
            <Route path="/city/ranthambore" element={<Ranthambore />} />
            <Route path="/city/jodhpur" element={<Jodhpur />} />
            <Route path="/city/bikaner" element={<Bikaner />} />
            <Route path="/city/jaisalmer" element={<Jaisalmer />} />
            <Route path="/city/jawai" element={<Jawai />} />
            <Route path="/city/ranchi" element={<Ranchi />} />

            {/* Blogs */}
            <Route path="/top-10-places-to-visit-in-india" element={<Top10places />} />
            <Route path="/2-week-india-itinerary-for-beginners" element={<Theultimate2week />} />
            <Route path="/why-2025-is-the-best-year-to-visit-bharat" element={<Besttimevisit />} />
            <Route path="/jaipur-vs-udaipur-which-city-to-visit" element={<Jaipurvsudaipur />} />
            <Route path="/manali-to-leh-road-trip-guide" element={<ManaliToLeh />} />
            <Route path="/spiti-valley-middle-land" element={<SpitiValley />} />
            <Route path="/varanasi-ghats-spiritual-journey" element={<VaranasiGhats />} />
            <Route path="/rishikesh-yoga-rafting-peace" element={<Rishikesh />} />
            <Route path="/jaisalmer-desert-camping" element={<JaisalmerCamping />} />
            <Route path="/bhangarh-fort-haunted-history" element={<BhangarhFort />} />
            <Route path="/blogs/kerala-backwaters" element={<KeralaBackWater />} />
            <Route path="/blogs/hampi-ruins-empire" element={<HampiEmpire />} />
            <Route path="/blogs/pondicherry-french-town" element={<Pondicherry />} />
            <Route path="/blogs/coorg-coffee-guide" element={<Coorg />} />
            <Route path="/blogs/ooty-toy-train-tickets-timings" element={<Ooty />} />
            <Route path="/blogs/mysore-palace-dussehra-experience" element={<Mysore />} />
            <Route path="/blogs/how-to-travel-india-for-500-rupees" element={<India500 />} />
            <Route path="/blogs/best-hostels-in-india-for-solo-travelers" element={<BestHotels />} />
            <Route path="/blogs/tatkal-railway" element={<TatkalRailway />} />
            <Route path="/blogs/student-discounts" element={<StudentDiscount />} />
            <Route path="/blogs/solo-female-travel-tips" element={<FemaleTrav />} />
            <Route path="/blogs/chandni-chowk-street-food-guide" element={<ChandniChowk />} />
            <Route path="/blogs/amritsar-golden-temple-langar" element={<GoldenTemple />} />
            <Route path="/goa-forts" element={<GoaForts />} />
            <Route path="/hyderabadi-biryani" element={<HyderabadiBiryani />} />
            <Route path="/meghalaya-walking-on-living-root-bridges" element={<MeghalayaWalking />} />
            <Route path="/sikkim-silk-route-hidden-gem" element={<SikkimSilk />} />
            <Route path="/andaman-islands-scuba-diving-beginners" element={<AndamanIslands />} />
            <Route path="/rann-of-kutch-white-desert-festival" element={<RannofKutch />} />
            <Route path="/jim-corbett-bengal-tiger-safari" element={<JimCorbett />} />
            <Route path="/valley-of-flowers-monsoon-trekking" element={<ValleyFlowers />} />
            <Route path="/blogs/sundarbans-mangrove-safari" element={<Mangrove />} />
            <Route path="/blogs/packing-list-india" element={<PackingList />} />

          </Routes>
        </main>
      </Suspense>

      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  );
}
