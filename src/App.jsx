import { BrowserRouter, Routes, Route } from "react-router-dom";

// Core Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import City from "./pages/City";
import Blogs from "./pages/Blogs";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LeadCapturePopup from './components/LeadCapturePopup';
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
// City Pages
import Udaipur from "./citys/Udaipur";
import Jaipur from "./citys/Jaipur.jsx";
import Ranthambore from "./citys/Ranthambore";
import Jodhpur from "./citys/Jodhpur";
import Bikaner from "./citys/Bikaner";
import Jaisalmer from "./citys/Jaisalmer";
import Jawai from "./citys/Jawai";
import Ranchi from "./citys/Ranchi";

// Blog Files
import Top10places from "./blogs/Top10places";
import Theultimate2week from "./blogs/Theultimate2week";
import Besttimevisit from "./blogs/Besttimevisit";
import Jaipurvsudaipur from "./blogs/Jaipurvsudaipur";
import ManaliToLeh from "./blogs/ManaliToLeh";
import SpitiValley from "./blogs/SpitiValley";
import VaranasiGhats from "./blogs/VaranasiGhats";
import Rishikesh  from "./blogs/Rishikesh.jsx";
import JaisalmerCamping from "./blogs/Jaisalmerdesert.jsx";
import BhangarhFort from "./blogs/BhangarhFort.jsx";
import KeralaBackWater from "./blogs/KeralabackWater.jsx";
import HampiEmpire from "./blogs/Hampiempire.jsx";
import Pondicherry from "./blogs/Pondicherry.jsx";
import Coorg from "./blogs/Coorg.jsx";
import Ooty from "./blogs/Ooty.jsx";
import Mysore from "./blogs/Mysore.jsx";
import India500 from "./blogs/India500.jsx";
import BestHotels from "./blogs/BestHotels.jsx";
import TatkalRailway from "./blogs/TatkalRailway";
import StudentDiscount from "./blogs/StudentDiscount";
import FemaleTrav from "./blogs/FemaleTrav";
import ChandniChowk from "./blogs/ChandniChowk";
import GoldenTemple from "./blogs/GoldenTemple";
import GoaForts from "./blogs/GoaForts"; 
import HyderabadiBiryani from "./blogs/HyderabadiBiryani";
import MeghalayaWalking from "./blogs/MeghalayaWalking";
import SikkimSilk from "./blogs/SikkimSilk";
import AndamanIslands from "./blogs/AndamanIslands";
import RannofKutch from "./blogs/RannofKutch";
import JimCorbett from "./blogs/JimCorbett";
import ValleyFlowers from "./blogs/ValleyFlowers";
import Mangrove from "./blogs/Mangrove";
import PackingList from "./blogs/PackingList";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <ScrollToTop />
        <LeadCapturePopup />

      {/* FIX: Use <main> instead of div — prevents double scroll */}
      <main className="min-h-screen pt-20">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/city" element={<City />} />
          <Route path="/blogs" element={<Blogs />} />
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

          {/* Blog Routes */}
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
      <WhatsAppFloat />

      <Footer />
    </BrowserRouter>
  );
}


