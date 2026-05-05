import { useEffect, useState, useRef } from "react";
import {
  Award,
  Briefcase,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  ChevronDown,
  Users,
  Globe,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";

// ✅ IMAGES — Using smallest available format for each slot
import HeroBannerImage from "../assets/HeroBannerImagel.webp"; // 90KB vs 184KB jpeg — saves ~94KB on LCP
import jaipurWebp from "../assets/jaipur.webp";
import udaipurWebp from "../assets/udaipur.webp";
import delhiWebp from "../assets/delhi.webp";
import jaipurJpg from "../assets/jaipur.jpg"; // fallback
import udaipurJpg from "../assets/udaipur.jpg"; // fallback
import delhiJpg from "../assets/delhi.jpg"; // fallback
import TajMahal from "../assets/taj-mahal.webp";
import Water from "../assets/keralaBackWaterl.webp";
import temple from "../assets/goldentemple.webp";
import cloudResortVideo from "../assets/CloudResort2.mp4";
import cloudResortPdf from "../assets/cloudResort.pdf";

const CITIES_PAGE_LINK = "/city";
const WHATSAPP_NUMBER = "919636974688";

// ── Animated counter hook ──────────────────────────────────────────────────
function useCounter(target, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startOnMount);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return { count, trigger: () => setStarted(true) };
}

// ── Stat Item ─────────────────────────────────────────────────────────────
function StatItem({ target, suffix, label, onVisible }) {
  const { count, trigger } = useCounter(target);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { trigger(); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="stat-item">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = "BharatMile — Explore Incredible India | Travel Guides & Tours";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc)
      metaDesc.setAttribute("content", "Explore India's top destinations with BharatMile. Detailed guides, itineraries, hidden gems, and curated cultural experiences.");

    // ✅ Throttled scroll listener — prevents FID/INP degradation
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const features = [
    { icon: Award, title: "Curated Experiences", description: "Every itinerary is handpicked for cultural depth, authenticity, and memories that last a lifetime." },
    { icon: Briefcase, title: "Local Expert Guides", description: "Trusted local specialists who reveal the stories behind every monument, meal, and moment." },
    { icon: ShieldCheck, title: "Safe & Secure Booking", description: "Transparent pricing, protected payments, and 24/7 on-trip support wherever you are." },
  ];

  const popularCities = [
    { name: "Jaipur", tag: "Rajasthan", image: jaipurWebp, imageFallback: jaipurJpg, description: "The vibrant Pink City of palaces and bazaars.", link: "/city/jaipur", w: 894, h: 720 },
    { name: "Udaipur", tag: "Rajasthan", image: udaipurWebp, imageFallback: udaipurJpg, description: "Romance above shimmering lakes.", link: "/city/udaipur", w: 1136, h: 720 },
    { name: "Delhi", tag: "Capital Territory", image: delhiWebp, imageFallback: delhiJpg, description: "Seven dynasties, one boundless city.", link: "/city/delhi", w: 1136, h: 720 },
  ];

  const experiences = [
    { name: "Taj Mahal Sunrise tour", location: "Agra, UP", image: TajMahal, tag: "Heritage", link: "/top-10-places-to-visit-in-india" },
    { name: "Kerala Backwaters Cruise", location: "Alleppey, Kerala", image: Water, tag: "Nature", link: "/blogs/kerala-backwaters" },
    { name: "Golden Temple Visit", location: "Amritsar, Punjab", image: temple, tag: "Spiritual", link: "/blogs/amritsar-golden-temple-langar" },
  ];

  const testimonials = [
    { quote: "BharatMile turned our Rajasthan honeymoon into something we will talk about for decades. Every detail was perfect.", name: "Priya & Rohan Mehta", location: "Mumbai", rating: 5 },
    { quote: "The Kerala Backwaters houseboat experience was beyond magical. The guide knew every inlet and story.", name: "Anil Kumar", location: "Bangalore", rating: 5 },
    { quote: "As a solo female traveller, I felt genuinely safe and looked after throughout Delhi. Exceptional care.", name: "Sarah J.", location: "New York", rating: 5 },
  ];

  const stats = [
    { target: 12, suffix: "K+", label: "Happy Travellers" },
    { target: 80, suffix: "+", label: "Destinations" },
    { target: 15, suffix: "+", label: "Years of Experience" },
    { target: 98, suffix: "%", label: "Satisfaction Rate" },
  ];

  return (
    <>
      <style>{`
        /* Google Fonts loaded from index.html (non-blocking preload) */

        :root {
          --sand: #f5efe6;
          --sand-dark: #e8ddd0;
          --terracotta: #c1644a;
          --terracotta-dark: #a14e38;
          --charcoal: #1c1c1e;
          --charcoal-soft: #2d2d2f;
          --muted: #6b6b6b;
          --gold: #c9972a;
          --white: #fefefe;
          --radius: 4px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .bm-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          height: 100svh;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 80px;
          overflow: hidden;
        }
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.04);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom { to { transform: scale(1); } }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(18,14,10,0.88) 0%,
            rgba(18,14,10,0.3) 55%,
            rgba(18,14,10,0.05) 100%
          );
        }

        .hero-badge {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,151,42,0.18);
          border: 1px solid rgba(201,151,42,0.45);
          color: #e8c56b;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 22px;
          backdrop-filter: blur(6px);
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          padding: 0 32px;
          margin: 0 auto;
          color: #fff;
          animation: heroFade 1s ease both 0.2s;
        }
        @keyframes heroFade { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 600;
          line-height: 1.08;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        .hero-title em {
          font-style: italic;
          color: #e8c56b;
        }
        .hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.78);
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 36px;
          font-weight: 300;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--terracotta);
          color: #fff;
          padding: 14px 28px;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 0.92rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.22s, transform 0.18s;
        }
        .btn-primary:hover { background: var(--terracotta-dark); transform: translateY(-2px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.5);
          color: #fff;
          padding: 14px 28px;
          border-radius: var(--radius);
          font-weight: 500;
          font-size: 0.92rem;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, background 0.2s, transform 0.18s;
        }
        .btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.1); transform: translateY(-2px); }

        .hero-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: bounce 2s infinite;
        }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }

        /* ── STATS STRIP ── */
        .stats-strip {
          background: var(--charcoal);
          padding: 36px 0;
        }
        .stats-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .stat-item {
          text-align: center;
          padding: 12px 0;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .stat-item:last-child { border-right: none; }
        .stat-number {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 600;
          color: #e8c56b;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* ── SECTION COMMONS ── */
        .section-eyebrow {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--terracotta);
          margin-bottom: 14px;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.15;
          color: var(--charcoal);
          margin-bottom: 16px;
        }
        .section-body {
          color: var(--muted);
          line-height: 1.75;
          font-size: 0.95rem;
          max-width: 520px;
        }

        /* ── WHY US ── */
        .why-section {
          background: var(--sand);
          padding: 100px 32px;
        }
        .why-inner { max-width: 1100px; margin: 0 auto; }
        .why-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 70px;
        }
        .why-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .why-card {
          background: var(--white);
          padding: 40px 32px;
          transition: transform 0.25s;
        }
        .why-card:hover { transform: translateY(-6px); }
        .why-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #f5ebe0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--terracotta);
        }
        .why-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .why-card p { font-size: 0.88rem; color: var(--muted); line-height: 1.7; }

        /* ── CITIES ── */
        .cities-section {
          background: var(--white);
          padding: 100px 32px;
        }
        .cities-inner { max-width: 1100px; margin: 0 auto; }
        .cities-header { margin-bottom: 56px; }
        .cities-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          grid-template-rows: 500px;
          gap: 3px;
        }
        .city-card {
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: block;
        }
        .city-card:first-child { grid-row: span 1; }
        .city-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .city-card:hover .city-img { transform: scale(1.07); }
        .city-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%);
        }
        .city-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 24px;
          color: #fff;
          transform: translateY(8px);
          transition: transform 0.3s;
        }
        .city-card:hover .city-info { transform: none; }
        .city-tag {
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .city-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.9rem;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 6px;
        }
        .city-card:first-child .city-name { font-size: 2.8rem; }
        .city-desc { font-size: 0.8rem; color: rgba(255,255,255,0.75); }

        /* ── EXPERIENCES ── */
        .exp-section {
          background: var(--charcoal);
          padding: 100px 32px;
        }
        .exp-inner { max-width: 1100px; margin: 0 auto; }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 56px;
        }
        .exp-header .section-title { color: #fff; margin-bottom: 0; }
        .exp-header .section-eyebrow { color: #e8c56b; }
        .link-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .link-all:hover { color: #e8c56b; }
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .exp-card {
          background: var(--charcoal-soft);
          border-radius: 2px;
          overflow: hidden;
          display: block;
          text-decoration: none;
          transition: transform 0.25s;
        }
        .exp-card:hover { transform: translateY(-6px); }
        .exp-img-wrap { position: relative; height: 220px; overflow: hidden; }
        .exp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .exp-card:hover .exp-img { transform: scale(1.08); }
        .exp-tag-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(201,151,42,0.88);
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 100px;
        }
        .exp-body { padding: 24px; }
        .exp-loc {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 8px;
          letter-spacing: 0.04em;
        }
        .exp-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 16px;
        }
        .exp-link {
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #e8c56b;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
        }

        /* ── TESTIMONIALS ── */
        .testi-section {
          background: var(--sand);
          padding: 100px 32px;
        }
        .testi-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .testi-slider { position: relative; min-height: 200px; margin-bottom: 48px; }
        .testi-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s, transform 0.6s;
          pointer-events: none;
        }
        .testi-slide.active { opacity: 1; transform: none; pointer-events: auto; }
        .testi-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.3rem, 3vw, 1.85rem);
          font-style: italic;
          color: var(--charcoal);
          line-height: 1.5;
          margin-bottom: 24px;
          max-width: 680px;
        }
        .testi-stars { display: flex; gap: 4px; justify-content: center; color: #c9972a; margin-bottom: 16px; }
        .testi-author { font-weight: 600; font-size: 0.9rem; color: var(--charcoal); }
        .testi-location { font-size: 0.78rem; color: var(--muted); letter-spacing: 0.06em; }
        .testi-dots { display: flex; gap: 10px; justify-content: center; }
        .testi-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--sand-dark);
          border: none; cursor: pointer; padding: 0;
          transition: background 0.3s, transform 0.3s;
        }
        .testi-dot.active { background: var(--terracotta); transform: scale(1.4); }

        /* ── FEATURED STAY: THE CLOUDS RESORT ── */
        .resort-section {
          background: linear-gradient(135deg, #0f1c2e 0%, #1a2d47 50%, #0f1c2e 100%);
          padding: 100px 32px;
          position: relative;
          overflow: hidden;
        }
        .resort-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(201,151,42,0.08) 0%, transparent 45%),
            radial-gradient(circle at 90% 80%, rgba(193,100,74,0.06) 0%, transparent 45%);
          pointer-events: none;
        }
        .resort-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .resort-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: #e8c56b;
          margin-bottom: 12px;
        }
        .resort-eyebrow::before {
          content: '';
          width: 28px;
          height: 1.5px;
          background: #e8c56b;
          display: inline-block;
        }
        .resort-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 48px;
        }
        .resort-heading span { color: #e8c56b; }
        .resort-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: start;
        }
        /* Video container */
        .resort-video-wrap {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.55);
          background: #000;
        }
        .resort-video-wrap::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 11px;
          border: 1px solid rgba(201,151,42,0.25);
          pointer-events: none;
        }
        .resort-video {
          width: 100%;
          display: block;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 10px;
        }
        /* Right content */
        .resort-content {}
        .resort-stars {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 18px;
        }
        .resort-stars-row {
          display: flex;
          gap: 3px;
          color: #e8c56b;
        }
        .resort-star-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.06em;
        }
        .resort-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 6px;
        }
        .resort-location {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 22px;
          letter-spacing: 0.04em;
        }
        .resort-tagline {
          font-style: italic;
          color: #e8c56b;
          font-size: 0.92rem;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        .resort-desc {
          color: rgba(255,255,255,0.68);
          font-size: 0.9rem;
          line-height: 1.78;
          margin-bottom: 28px;
        }
        .resort-amenities {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 20px;
          margin-bottom: 30px;
        }
        .resort-amenity {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.72);
        }
        .resort-amenity::before {
          content: '✦';
          color: #e8c56b;
          font-size: 0.65rem;
          flex-shrink: 0;
        }
        .resort-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 28px 0;
        }
        .resort-testimonials {
          margin-bottom: 30px;
        }
        .resort-testi {
          font-style: italic;
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 10px;
          padding-left: 14px;
          border-left: 2px solid rgba(201,151,42,0.4);
        }
        .resort-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .resort-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: linear-gradient(135deg, #c9972a, #e8c56b);
          color: #0f1c2e;
          padding: 13px 26px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(201,151,42,0.3);
        }
        .resort-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(201,151,42,0.45);
        }
        .resort-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: transparent;
          border: 1.5px solid rgba(201,151,42,0.45);
          color: #e8c56b;
          padding: 13px 26px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .resort-btn-ghost:hover {
          background: rgba(201,151,42,0.1);
          border-color: #e8c56b;
          transform: translateY(-2px);
        }
        @media (max-width: 860px) {
          .resort-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .resort-amenities { grid-template-columns: 1fr; }
        }

        /* ── CTA ── */
        .cta-section {
          position: relative;
          padding: 120px 32px;
          overflow: hidden;
          background: var(--charcoal);
        }
        .cta-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(193,100,74,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 30%, rgba(201,151,42,0.1) 0%, transparent 45%);
        }
        .cta-inner { position: relative; max-width: 700px; margin: 0 auto; text-align: center; }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .cta-title span { color: #e8c56b; }
        .cta-sub { color: rgba(255,255,255,0.55); font-size: 0.97rem; line-height: 1.7; margin-bottom: 40px; }
        .cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .stats-inner { grid-template-columns: repeat(2,1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .why-header { grid-template-columns: 1fr; gap: 24px; }
          .why-cards { grid-template-columns: 1fr; }
          .cities-grid { grid-template-columns: 1fr; grid-template-rows: 280px 220px 220px; }
          .exp-grid { grid-template-columns: 1fr; }
          .exp-header { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
        @media (max-width: 600px) {
          .stats-inner { grid-template-columns: 1fr 1fr; }
          .hero-title { font-size: 2.6rem; }
        }
      `}
        {/* ✅ CORE WEB VITALS ADDITIONS */}
        {`
        /* ── MOBILE TOUCH TARGETS (min 44x44px) ── */
        .btn-primary, .btn-ghost {
          min-height: 48px;
          min-width: 48px;
          touch-action: manipulation;
        }
        .testi-dot {
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        /* ✅ Reduce layout shift for images */
        .hero-img, .city-img, .exp-img {
          aspect-ratio: auto;
        }
        /* ✅ will-change for GPU-composited animations only */
        .hero-img { will-change: transform; }
        .city-img { will-change: transform; }
        .testi-slide { will-change: opacity, transform; }
        /* ✅ content-visibility for below-fold sections — improves LCP */
        .why-section, .exp-section, .testi-section, .cta-section {
          content-visibility: auto;
          contain-intrinsic-size: 0 600px;
        }
        /* ✅ Prevent horizontal scroll on all screens */
        .bm-root { max-width: 100vw; overflow-x: hidden; }
        /* ✅ Better mobile tap highlight */
        a, button { -webkit-tap-highlight-color: transparent; }
        /* ✅ Smooth text rendering on mobile */
        .bm-root { -webkit-font-smoothing: antialiased; text-rendering: optimizeSpeed; }
        /* ✅ Prevent font flash */
        body { font-display: optional; }
        /* ✅ Mobile hero — avoid reflow from 100svh on older browsers */
        @supports not (height: 100svh) {
          .hero { height: 100vh; }
        }
      `}</style>

      <div className="bm-root">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="hero">
          {/* ✅ Hero LCP image: WebP (90KB vs 184KB), eager, sync decode */}
          <picture>
            <img
              src={HeroBannerImage}
              alt="Explore Incredible India — Ranthambore Tiger Safari and Jaipur family tours by BharatMile"
              className="hero-img"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              width="1280"
              height="720"
            />
          </picture>
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">
              <Compass size={12} />
              India's Most Trusted Travel Agency
            </div>
            <h1 className="hero-title">
              Discover<br /><em>Incredible</em> India
            </h1>
            <p className="hero-sub">
              Expertly crafted tours, immersive cultural journeys, and seamless travel planning — from the Himalayas to the backwaters.
            </p>
            <div className="hero-actions">
              <Link to={CITIES_PAGE_LINK} className="btn-primary">
                Explore Tours <ArrowRight size={16} />
              </Link>
              <button
                className="btn-ghost"
                aria-label="Talk to a BharatMile travel expert on WhatsApp"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)}
              >
                <Phone size={16} /> Talk to an Expert
              </button>
            </div>
          </div>
          <div className="hero-scroll">
            <ChevronDown size={18} />
            Scroll
          </div>
        </section>

        {/* ── STATS STRIP ──────────────────────────────────── */}
        <div className="stats-strip">
          <div className="stats-inner">
            {stats.map((s) => (
              <StatItem key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>

        {/* ── WHY CHOOSE US ────────────────────────────────── */}
        <section className="why-section">
          <div className="why-inner">
            <div className="why-header">
              <div>
                <span className="section-eyebrow">Why BharatMile</span>
                <h2 className="section-title">Travel crafted with<br />care & expertise</h2>
              </div>
              <p className="section-body">
                From your first enquiry to your last meal on tour, every element is designed to give you confidence, comfort, and experiences you couldn't plan alone.
              </p>
            </div>
            <div className="why-cards">
              {features.map((f) => (
                <div key={f.title} className="why-card">
                  <div className="why-icon"><f.icon size={22} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED STAY: THE CLOUDS RESORT ─────────────── */}
        <section className="resort-section" aria-label="Featured Partner Stay — The Clouds Resort, Arambol Goa">
          <div className="resort-inner">
            <div className="resort-eyebrow">Featured Stay</div>
            <h2 className="resort-heading">
              Discover <span>The Clouds Resort</span><br />
              <em style={{ fontStyle: 'italic', fontSize: '70%', color: 'rgba(255,255,255,0.6)' }}>Where Understated Luxury Meets the Serenity of Nature</em>
            </h2>
            <div className="resort-layout">

              {/* Left — Video */}
              <div className="resort-video-wrap">
                <video
                  className="resort-video"
                  src={cloudResortVideo}
                  controls
                  preload="metadata"
                  poster=""
                  aria-label="The Clouds Resort — property tour video"
                />
              </div>

              {/* Right — Content */}
              <div className="resort-content">
                <div className="resort-stars">
                  <div className="resort-stars-row">
                    {[1,2,3,4].map(i => <Star key={i} size={15} fill="currentColor" />)}
                  </div>
                  <span className="resort-star-label">4-Star Luxury Resort</span>
                </div>

                <div className="resort-title">The Clouds Resort</div>
                <div className="resort-location">
                  <MapPin size={12} />
                  Arambol, North Goa
                </div>
                <div className="resort-tagline">"An oasis of calm with impeccable hospitality and beautifully designed spaces."</div>

                <p className="resort-desc">
                  An elegant 4-star retreat nestled in the tranquil landscape of Arambol, North Goa — crafted for discerning travellers who value privacy, comfort, and curated experiences. Every detail is thoughtfully designed to deliver a refined stay.
                </p>

                <div className="resort-amenities">
                  {[
                    "Spacious rooms with private balconies",
                    "Scenic swimming pool",
                    "Multi-cuisine curated dining",
                    "Well-equipped fitness centre",
                    "Elegant indoor event venues",
                    "Expansive landscaped lawns",
                    "Dedicated concierge service",
                    "High-speed Wi-Fi & 24/7 support",
                  ].map(a => (
                    <div key={a} className="resort-amenity">{a}</div>
                  ))}
                </div>

                <div className="resort-divider" />

                <div className="resort-testimonials">
                  <div className="resort-testi">"A refined stay experience — thoughtful service, elegant rooms, and excellent cuisine."</div>
                  <div className="resort-testi">"Perfect blend of luxury and tranquility, ideal for both relaxation and celebrations."</div>
                </div>

                <div className="resort-actions">
                  <a
                    href={cloudResortPdf}
                    download="TheCloudsResort_Brochure.pdf"
                    className="resort-btn-primary"
                    aria-label="Download The Clouds Resort brochure PDF"
                  >
                    ⬇ Download Brochure
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resort-btn-ghost"
                    aria-label="Enquire about The Clouds Resort on WhatsApp"
                  >
                    <Phone size={14} /> Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── POPULAR CITIES ───────────────────────────────── */}
        <section className="cities-section">
          <div className="cities-inner">
            <div className="cities-header">
              <span className="section-eyebrow">Top Destinations</span>
              <h2 className="section-title">Cities that stay<br />with you forever</h2>
            </div>
            <div className="cities-grid">
              {popularCities.map((city) => (
                <Link key={city.name} to={city.link} className="city-card">
                  {/* ✅ Responsive images: serve correct size per viewport, use WebP */}
                  <picture>
                    <source srcSet={city.image} type="image/webp" />
                    <img
                      src={city.imageFallback}
                      alt={`${city.name} — ${city.tag} tour destination by BharatMile`}
                      loading="lazy"
                      decoding="async"
                      className="city-img"
                      width={city.w}
                      height={city.h}
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </picture>
                  <div className="city-overlay" />
                  <div className="city-info">
                    <div className="city-tag"><MapPin size={9} />{city.tag}</div>
                    <div className="city-name">{city.name}</div>
                    <div className="city-desc">{city.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCES ──────────────────────────────────── */}
        <section className="exp-section">
          <div className="exp-inner">
            <div className="exp-header">
              <div>
                <span className="section-eyebrow">Signature Journeys</span>
                <h2 className="section-title">Unforgettable<br />Experiences</h2>
              </div>
              <Link to={CITIES_PAGE_LINK} className="link-all">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="exp-grid">
              {experiences.map((exp) => (
                <Link key={exp.name} to={exp.link} className="exp-card">
                  <div className="exp-img-wrap">
                    <img src={exp.image} alt={exp.name} loading="lazy" decoding="async" className="exp-img" />
                    <span className="exp-tag-pill">{exp.tag}</span>
                  </div>
                  <div className="exp-body">
                    <div className="exp-loc"><MapPin size={10} />{exp.location}</div>
                    <div className="exp-name">{exp.name}</div>
                    <span className="exp-link">Explore <ArrowRight size={12} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────── */}
        <section className="testi-section">
          <div className="testi-inner">
            <span className="section-eyebrow">Traveller Stories</span>
            <h2 className="section-title">What our guests say</h2>
            <div className="testi-slider" style={{ minHeight: 220 }}>
              {testimonials.map((t, i) => (
                <div key={i} className={`testi-slide ${i === activeTestimonial ? "active" : ""}`}>
                  <div className="testi-stars">
                    {Array.from({ length: t.rating }).map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="testi-quote">"{t.quote}"</p>
                  <p className="testi-author">{t.name}</p>
                  <p className="testi-location">{t.location}</p>
                </div>
              ))}
            </div>
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`testi-dot ${i === activeTestimonial ? "active" : ""}`} onClick={() => setActiveTestimonial(i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────── */}
        <section className="cta-section">
          <div className="cta-pattern" />
          <div className="cta-inner">
            <span className="section-eyebrow" style={{ color: "#e8c56b" }}>Start Your Journey</span>
            <h2 className="cta-title">
              Your next adventure<br />
              begins <span>right here</span>
            </h2>
            <p className="cta-sub">
              From a weekend escape to a three-week expedition — we handle every detail so you can focus on the wonder.
            </p>
            <div className="cta-actions">
              <Link to={CITIES_PAGE_LINK} className="btn-primary">
                Explore All Destinations <ArrowRight size={16} />
              </Link>
              <button className="btn-ghost" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)}>
                <Phone size={16} /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}