import React, { useEffect, useRef, useState } from "react";
import { MapPin, Users, Heart, ShieldCheck, ArrowRight, Phone, Star, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const CITIES_PAGE_LINK = "/city";
const WHATSAPP_NUMBER = "919636974688";

// ── Animated counter ───────────────────────────────────────────────────────
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

function StatItem({ target, suffix, label }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="ab-stat-item">
      <span className="ab-stat-num">{count}{suffix}</span>
      <span className="ab-stat-label">{label}</span>
    </div>
  );
}

const values = [
  {
    icon: ShieldCheck,
    title: "Verified Information",
    body: "Every route, entry timing, and safety tip is checked and updated by our on-ground team — so you travel with confidence.",
  },
  {
    icon: Heart,
    title: "Curated for You",
    body: "Whether you seek heritage, adventure, cuisine, or solitude, every itinerary is shaped around what truly moves you.",
  },
  {
    icon: Users,
    title: "Community First",
    body: "Thousands of travellers share real experiences, tips, and stories — making every recommendation genuinely human.",
  },
];

const stats = [
  { target: 80, suffix: "+", label: "Cities Covered" },
  { target: 12, suffix: "K+", label: "Happy Travellers" },
  { target: 500, suffix: "+", label: "Hidden Gems" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
];

const team = [
  { name: "Akshat Gupta", role: "Founder" },
  { name: "Rishi Goyal", role: "Co-Founder & CEO"},
  { name: "Siddhartha Singhal", role: "Co-Founder & CTO" },
];

export default function About() {
  useEffect(() => {
    document.title = "About BharatMile — India's Trusted Travel Experts";
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --sand: #f5efe6;
          --sand-dark: #ede3d6;
          --terracotta: #c1644a;
          --terracotta-dark: #a14e38;
          --charcoal: #1c1c1e;
          --charcoal-soft: #232325;
          --muted: #6b6b6b;
          --gold: #c9972a;
          --gold-light: #e8c56b;
          --white: #fefefe;
        }

        .ab-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .ab-hero {
          background: var(--charcoal);
          padding: 160px 32px 100px;
          position: relative;
          overflow: hidden;
        }
        .ab-hero-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 15% 60%, rgba(193,100,74,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(201,151,42,0.12) 0%, transparent 50%);
          pointer-events: none;
        }
        .ab-hero-inner {
          position: relative;
          max-width: 780px;
          margin: 0 auto;
          text-align: center;
        }
        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--gold-light);
          margin-bottom: 24px;
          opacity: 0.85;
        }
        .ab-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.08;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .ab-hero-title em {
          font-style: italic;
          color: var(--gold-light);
        }
        .ab-hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 40px;
          font-weight: 300;
        }
        .ab-hero-line {
          width: 48px;
          height: 2px;
          background: var(--terracotta);
          margin: 0 auto;
        }

        /* ── STORY ── */
        .ab-story {
          background: var(--sand);
          padding: 100px 32px;
        }
        .ab-story-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .ab-story-label {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--terracotta);
          margin-bottom: 16px;
        }
        .ab-story-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: var(--charcoal);
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .ab-story-body {
          font-size: 0.93rem;
          color: var(--muted);
          line-height: 1.85;
          margin-bottom: 18px;
        }
        .ab-story-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terracotta);
          text-decoration: none;
          margin-top: 8px;
          transition: gap 0.2s;
        }
        .ab-story-link:hover { gap: 13px; }

        /* Decorative quote block */
        .ab-story-quote-block {
          background: var(--white);
          border-left: 3px solid var(--gold);
          padding: 40px 36px;
          border-radius: 2px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.06);
        }
        .ab-story-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.65rem;
          font-style: italic;
          color: var(--charcoal);
          line-height: 1.45;
          margin-bottom: 24px;
        }
        .ab-story-quote-meta {
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .ab-story-quote-meta strong {
          color: var(--charcoal);
          font-weight: 600;
        }

        /* decorative dots */
        .ab-story-dots {
          display: grid;
          grid-template-columns: repeat(6, 10px);
          grid-template-rows: repeat(4, 10px);
          gap: 8px;
          margin-top: 32px;
        }
        .ab-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--sand-dark); }

        /* ── VALUES ── */
        .ab-values {
          background: var(--charcoal);
          padding: 100px 32px;
        }
        .ab-values-inner { max-width: 1100px; margin: 0 auto; }
        .ab-values-head { text-align: center; margin-bottom: 64px; }
        .ab-values-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 14px;
        }
        .ab-values-sub { font-size: 0.9rem; color: rgba(255,255,255,0.4); max-width: 480px; margin: 0 auto; line-height: 1.7; }
        .ab-values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .ab-value-card {
          background: var(--charcoal-soft);
          padding: 44px 36px;
          position: relative;
          overflow: hidden;
          transition: background 0.25s;
        }
        .ab-value-card::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--terracotta);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .ab-value-card:hover::before { transform: scaleX(1); }
        .ab-value-card:hover { background: #2a2a2c; }
        .ab-value-icon {
          width: 52px;
          height: 52px;
          background: rgba(193,100,74,0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--terracotta);
          margin-bottom: 28px;
          transition: background 0.25s, color 0.25s;
        }
        .ab-value-card:hover .ab-value-icon { background: var(--terracotta); color: #fff; }
        .ab-value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 14px;
        }
        .ab-value-body { font-size: 0.86rem; color: rgba(255,255,255,0.45); line-height: 1.75; }

        /* ── STATS ── */
        .ab-stats {
          background: var(--sand);
          padding: 80px 32px;
          border-top: 1px solid var(--sand-dark);
          border-bottom: 1px solid var(--sand-dark);
        }
        .ab-stats-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .ab-stat-item {
          text-align: center;
          padding: 16px 0;
          border-right: 1px solid var(--sand-dark);
        }
        .ab-stat-item:last-child { border-right: none; }
        .ab-stat-num {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 600;
          color: var(--terracotta);
          line-height: 1;
          margin-bottom: 8px;
        }
        .ab-stat-label {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* ── TEAM ── */
        .ab-team {
          background: var(--white);
          padding: 100px 32px;
        }
        .ab-team-inner { max-width: 1100px; margin: 0 auto; }
        .ab-team-head { margin-bottom: 56px; }
        .ab-team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .ab-team-card {
          background: var(--sand);
          padding: 40px 32px;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s;
        }
        .ab-team-card:hover { transform: translateY(-6px); }
        .ab-team-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--gold-light);
          margin-bottom: 20px;
          flex-shrink: 0;
        }
        .ab-team-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .ab-team-role { font-size: 0.78rem; color: var(--terracotta); font-weight: 600; letter-spacing: 0.06em; margin-bottom: 10px; }
        .ab-team-loc {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: var(--muted);
        }
        .ab-team-stars { display: flex; gap: 3px; color: var(--gold); margin-top: 16px; }

        /* ── CTA ── */
        .ab-cta {
          background: var(--charcoal);
          padding: 120px 32px;
          position: relative;
          overflow: hidden;
        }
        .ab-cta-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(193,100,74,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(201,151,42,0.10) 0%, transparent 45%);
          pointer-events: none;
        }
        .ab-cta-inner { position: relative; max-width: 680px; margin: 0 auto; text-align: center; }
        .ab-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.12;
          margin-bottom: 18px;
        }
        .ab-cta-title span { color: var(--gold-light); font-style: italic; }
        .ab-cta-sub { color: rgba(255,255,255,0.5); font-size: 0.95rem; line-height: 1.75; margin-bottom: 44px; }
        .ab-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--terracotta);
          color: #fff;
          padding: 14px 28px;
          border-radius: 3px;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.18s;
        }
        .btn-primary:hover { background: var(--terracotta-dark); transform: translateY(-2px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.25);
          color: #fff;
          padding: 14px 28px;
          border-radius: 3px;
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.06em;
          transition: border-color 0.2s, background 0.2s, transform 0.18s;
        }
        .btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ab-story-inner { grid-template-columns: 1fr; gap: 48px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .ab-stat-item:nth-child(2) { border-right: none; }
          .ab-team-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .ab-hero { padding: 130px 20px 80px; }
          .ab-stats-inner { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="ab-root">

        {/* ── HERO ── */}
        <section className="ab-hero">
          <div className="ab-hero-glow" />
          <div className="ab-hero-inner">
            <div className="ab-eyebrow">
              <Compass size={12} /> Our Story
            </div>
            <h1 className="ab-hero-title">
              Every Mile<br />Tells a <em>Story</em>
            </h1>
            <p className="ab-hero-sub">
              BharatMile was born from a simple belief — that India deserves to be experienced, not just visited. We're the bridge between curiosity and the extraordinary.
            </p>
            <div className="ab-hero-line" />
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="ab-story">
          <div className="ab-story-inner">
            <div>
              <div className="ab-story-label">Who We Are</div>
              <h2 className="ab-story-title">
                We bridge the gap between<br />tourist and traveller
              </h2>
              <p className="ab-story-body">
                India is vast, layered, and endlessly beautiful. BharatMile was built to help people move beyond the obvious — to find the chai stall behind the monument, the festival the guidebooks missed, the village that changes everything.
              </p>
              <p className="ab-story-body">
                From Rajasthan's golden deserts to Kerala's silent backwaters, our team of local experts crafts journeys that are verified, culturally rich, and deeply personal.
              </p>
              <Link to={CITIES_PAGE_LINK} className="ab-story-link">
                Explore our destinations <ArrowRight size={14} />
              </Link>
              <div className="ab-story-dots">
                {Array.from({ length: 24 }).map((_, i) => <div key={i} className="ab-dot" />)}
              </div>
            </div>

            <div>
              <div className="ab-story-quote-block">
                <p className="ab-story-quote">
                  "India doesn't reveal itself at a glance. It rewards the ones who slow down, look closer, and travel with intent."
                </p>
                <p className="ab-story-quote-meta">
                  <strong>Akshat Gupta</strong> — Founder, BharatMile
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="ab-values">
          <div className="ab-values-inner">
            <div className="ab-values-head">
              <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-light)', display: 'block', marginBottom: 14 }}>
                Why Travellers Trust Us
              </span>
              <h2 className="ab-values-title">Crafted with care,<br />built on trust</h2>
              <p className="ab-values-sub">Your journey matters — and so does every detail, every safety check, and every story behind each destination.</p>
            </div>
            <div className="ab-values-grid">
              {values.map((v) => (
                <div key={v.title} className="ab-value-card">
                  <div className="ab-value-icon"><v.icon size={22} /></div>
                  <h3 className="ab-value-title">{v.title}</h3>
                  <p className="ab-value-body">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="ab-stats">
          <div className="ab-stats-inner">
            {stats.map((s) => (
              <StatItem key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="ab-team">
          <div className="ab-team-inner">
            <div className="ab-team-head">
              <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--terracotta)', display: 'block', marginBottom: 14 }}>
                The People Behind the Miles
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 600, color: 'var(--charcoal)', lineHeight: 1.2 }}>
                Meet our team
              </h2>
            </div>
            <div className="ab-team-grid">
              {team.map((member) => (
                <div key={member.name} className="ab-team-card">
                  <div className="ab-team-avatar">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="ab-team-name">{member.name}</div>
                  <div className="ab-team-role">{member.role}</div>
                  <div className="ab-team-loc">
                    <MapPin size={11} /> {member.location}
                  </div>
                  <div className="ab-team-stars">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ab-cta">
          <div className="ab-cta-glow" />
          <div className="ab-cta-inner">
            <span style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-light)', display: 'block', marginBottom: 16, opacity: 0.8 }}>
              Start Your Journey
            </span>
            <h2 className="ab-cta-title">
              Travel India the way<br />it <span>deserves to be seen</span>
            </h2>
            <p className="ab-cta-sub">
              Explore curated guides, connect with local experts, and plan a journey that goes beyond the surface — with BharatMile.
            </p>
            <div className="ab-cta-btns">
              <Link to={CITIES_PAGE_LINK} className="btn-primary">
                Explore Destinations <ArrowRight size={15} />
              </Link>
              <button className="btn-ghost" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}>
                <Phone size={14} /> Talk to an Expert
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}