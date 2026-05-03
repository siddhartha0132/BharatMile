export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hi, I want to explore India and plan a trip. Please call me once."
  );

  return (
    <a
      href={`https://wa.me/919636974688?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BharatMile on WhatsApp"
      className="fixed right-5 bottom-6 z-[9999] bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      {/* ✅ Inline SVG — eliminates external network request (improves LCP + TBT) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="40"
        height="40"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.737 5.463 2.027 7.754L0 32l8.527-2.004A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.11 22.38c-.34.953-1.676 1.744-2.748 1.974-.733.158-1.69.285-4.91-1.054-4.12-1.694-6.775-5.877-6.982-6.148-.2-.27-1.68-2.237-1.68-4.268 0-2.03 1.063-3.024 1.44-3.44a1.52 1.52 0 011.097-.48c.274 0 .547.005.787.015.252.012.59-.095.923.704.34.82 1.157 2.84 1.26 3.047.103.207.172.448.033.72-.136.27-.205.44-.41.677-.204.236-.43.527-.613.707-.205.2-.418.416-.18.816.238.4 1.06 1.748 2.274 2.831 1.563 1.395 2.88 1.827 3.28 2.032.4.205.633.172.866-.102.233-.275.995-1.16 1.26-1.56.264-.4.527-.332.887-.2.36.133 2.282 1.077 2.675 1.272.39.196.65.295.746.46.095.166.095.96-.245 1.914z"/>
      </svg>
    </a>
  );
}


