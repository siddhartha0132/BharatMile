import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { routes, NotFound } from "./routes";

// 🔹 Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LeadCapturePopup from "./components/LeadCapturePopup";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import SiteSeo from "./components/SiteSeo";
import BlogBookingCta from "./components/BlogBookingCta";

export default function App() {
  return (
    <BrowserRouter>
      <SiteSeo />
      <Navbar />
      <ScrollToTop />
      <LeadCapturePopup />

      {/* fallback prevents blank screens */}
      <Suspense fallback={<div className="pt-24 text-center">Loading…</div>}>

        <main className="min-h-screen pt-20">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.Component />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BlogBookingCta />
        </main>
      </Suspense>

      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  );
}
