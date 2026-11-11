import { useLocation } from "react-router-dom";

function getContextualWhatsAppMessage(pathname) {
  const p = pathname.toLowerCase();
  if (p.includes("ranthambore") || p.includes("safari") || p.includes("gypsy")) {
    return "Hi BharatMile! 🐯 I'm on your website checking Ranthambore Tiger Safari availability & packages. Please share zone options and price.";
  }
  if (p.includes("jaisalmer") || p.includes("desert")) {
    return "Hi BharatMile! 🐪 I'm interested in Jaisalmer Desert Safari & Sam Sand Dunes Luxury Camp. Please share package details.";
  }
  if (p.includes("udaipur")) {
    return "Hi BharatMile! 🛶 I'm planning an Udaipur trip and want package & private cab details.";
  }
  if (p.includes("jodhpur")) {
    return "Hi BharatMile! 🏰 I'm planning a Jodhpur trip and want itinerary & tour package details.";
  }
  if (p.includes("jawai")) {
    return "Hi BharatMile! 🐆 I want to book a Jawai Leopard Safari & luxury camp stay. Please share details.";
  }
  if (p.includes("bikaner")) {
    return "Hi BharatMile! I'm planning a Bikaner & Rajasthan desert trip. Please share package details.";
  }
  if (p.includes("jaipur") || p.includes("amber") || p.includes("amer")) {
    return "Hi BharatMile! 🏯 I'm interested in your Jaipur Sightseeing Package (₹4,999 / custom tour). Please share details.";
  }
  if (p.includes("rajasthan")) {
    return "Hi BharatMile! 👑 I'm looking at your Rajasthan Winter Tour Packages and want a customized quote.";
  }
  return "Hi BharatMile! 👋 I want to plan a Rajasthan / Ranthambore / Jaipur trip this season. Please share your best packages!";
}

export default function WhatsAppFloat() {
  const { pathname } = useLocation();
  const message = encodeURIComponent(getContextualWhatsAppMessage(pathname));

  return (
    <a
      href={`https://wa.me/919636974688?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BharatMile Rajasthan Travel Expert on WhatsApp"
      className="fixed right-3 bottom-4 sm:right-4 sm:bottom-5 z-[9999] flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white pl-3 pr-3.5 py-2.5 rounded-full shadow-xl hover:scale-105 transition"
    >
      {/* ✅ Inline SVG — eliminates external network request (improves LCP + TBT) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.737 5.463 2.027 7.754L0 32l8.527-2.004A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.11 22.38c-.34.953-1.676 1.744-2.748 1.974-.733.158-1.69.285-4.91-1.054-4.12-1.694-6.775-5.877-6.982-6.148-.2-.27-1.68-2.237-1.68-4.268 0-2.03 1.063-3.024 1.44-3.44a1.52 1.52 0 011.097-.48c.274 0 .547.005.787.015.252.012.59-.095.923.704.34.82 1.157 2.84 1.26 3.047.103.207.172.448.033.72-.136.27-.205.44-.41.677-.204.236-.43.527-.613.707-.205.2-.418.416-.18.816.238.4 1.06 1.748 2.274 2.831 1.563 1.395 2.88 1.827 3.28 2.032.4.205.633.172.866-.102.233-.275.995-1.16 1.26-1.56.264-.4.527-.332.887-.2.36.133 2.282 1.077 2.675 1.272.39.196.65.295.746.46.095.166.095.96-.245 1.914z" />
      </svg>
      <span className="text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap">
        WhatsApp Expert
      </span>
    </a>
  );
}
