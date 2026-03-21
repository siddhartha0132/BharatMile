import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Search, SlidersHorizontal } from "lucide-react";

import jaipur from "../assets/jaipur.webp";
import udaipur from "../assets/udaipur.webp";
import ranthambore from "../assets/Ranthambore.webp";
import jodhpur from "../assets/Jodhpur.webp";
import bikaner from "../assets/Bikaner.webp";
import jaisalmer from "../assets/Jaislamer.webp";
import jawai from "../assets/Jawai.webp";
import ranchi from "../assets/ranchi.webp";

const ALL_CITIES = [
  { name: "Jaipur",       img: jaipur,       desc: "Palaces, bazaars, and the soul of Rajasthan.",    routeSlug: "jaipur",       tag: "Heritage",  region: "Rajasthan" },
  { name: "Udaipur",      img: udaipur,       desc: "Romance above shimmering lakes and white marble.", routeSlug: "udaipur",      tag: "Lakes",     region: "Rajasthan" },
  { name: "Jodhpur",      img: jodhpur,       desc: "The Blue City crowned by Mehrangarh Fort.",        routeSlug: "jodhpur",      tag: "Heritage",  region: "Rajasthan" },
  { name: "Jaisalmer",    img: jaisalmer,     desc: "A golden sandstone city rising from the desert.",  routeSlug: "jaisalmer",    tag: "Desert",    region: "Rajasthan" },
  { name: "Ranthambore",  img: ranthambore,   desc: "Bengal tigers in the wild heart of India.",        routeSlug: "ranthambore",  tag: "Wildlife",  region: "Rajasthan" },
  { name: "Jawai",        img: jawai,         desc: "Leopards on granite hills at golden hour.",         routeSlug: "jawai",        tag: "Wildlife",  region: "Rajasthan" },
  { name: "Bikaner",      img: bikaner,       desc: "Camel culture, forts, and sweet kachori trails.",  routeSlug: "bikaner",      tag: "Desert",    region: "Rajasthan" },
  { name: "Ranchi",       img: ranchi,        desc: "Waterfalls, forests, and Jharkhand's heartbeat.",  routeSlug: "ranchi",       tag: "Nature",    region: "Jharkhand" },
];

const TAGS = ["All", "Heritage", "Wildlife", "Desert", "Lakes", "Nature"];

const TAG_COLORS = {
  Heritage: { bg: "rgba(193,100,74,0.15)", color: "#c1644a" },
  Wildlife: { bg: "rgba(74,130,80,0.15)",  color: "#3d7a43" },
  Desert:   { bg: "rgba(201,151,42,0.15)", color: "#9a7218" },
  Lakes:    { bg: "rgba(59,130,186,0.15)", color: "#2d6fa3" },
  Nature:   { bg: "rgba(100,140,80,0.15)", color: "#4a7a30" },
};

export default function City() {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery]         = useState("");

  useEffect(() => {
    document.title = "Explore Indian Cities | BharatMile Travel Destinations";
    const m = document.querySelector("meta[name='description']");
    if (m) m.setAttribute("content", "Explore top travel destinations in India with BharatMile. Browse Jaipur, Udaipur, Jodhpur, Ranthambore, Jaisalmer, Ranchi, and more.");
  }, []);

  const filtered = ALL_CITIES.filter((c) => {
    const matchTag = activeTag === "All" || c.tag === activeTag;
    const matchQ   = c.name.toLowerCase().includes(query.toLowerCase()) ||
                     c.region.toLowerCase().includes(query.toLowerCase());
    return matchTag && matchQ;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --sand: #f5efe6;
          --sand-dark: #ede3d6;
          --terracotta: #c1644a;
          --terracotta-dark: #a14e38;
          --charcoal: #1c1c1e;
          --muted: #6b6b6b;
          --gold: #c9972a;
          --gold-light: #e8c56b;
          --white: #fefefe;
        }

        .ct-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--charcoal);
          min-height: 100vh;
        }

        /* ── PAGE HEADER ── */
        .ct-header {
          background: var(--charcoal);
          padding: 140px 32px 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .ct-header-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 70%, rgba(193,100,74,0.16) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(201,151,42,0.10) 0%, transparent 50%);
          pointer-events: none;
        }
        .ct-header-inner { position: relative; max-width: 680px; margin: 0 auto; }
        .ct-eyebrow {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--gold-light);
          opacity: 0.85;
          display: block;
          margin-bottom: 18px;
        }
        .ct-header-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }
        .ct-header-title em { font-style: italic; color: var(--gold-light); }
        .ct-header-sub {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          font-weight: 300;
          max-width: 480px;
          margin: 0 auto;
        }

        /* ── CONTROLS ── */
        .ct-controls {
          background: var(--sand);
          border-bottom: 1px solid var(--sand-dark);
          padding: 28px 32px;
          position: sticky;
          top: 62px;
          z-index: 40;
        }
        .ct-controls-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* Search */
        .ct-search {
          position: relative;
          flex: 1;
          min-width: 200px;
          max-width: 320px;
        }
        .ct-search-icon {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted);
          pointer-events: none;
        }
        .ct-search input {
          width: 100%;
          background: var(--white);
          border: 1px solid var(--sand-dark);
          border-radius: 3px;
          padding: 10px 14px 10px 38px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem;
          color: var(--charcoal);
          outline: none;
          transition: border-color 0.2s;
        }
        .ct-search input::placeholder { color: rgba(107,107,107,0.6); }
        .ct-search input:focus { border-color: var(--terracotta); }

        /* Filter pills */
        .ct-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          flex: 1;
        }
        .ct-pill {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1.5px solid var(--sand-dark);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
        }
        .ct-pill:hover { border-color: var(--terracotta); color: var(--terracotta); }
        .ct-pill.active {
          background: var(--terracotta);
          border-color: var(--terracotta);
          color: #fff;
        }

        /* Result count */
        .ct-count {
          font-size: 0.78rem;
          color: var(--muted);
          white-space: nowrap;
          margin-left: auto;
        }

        /* ── GRID ── */
        .ct-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 32px 100px;
        }
        .ct-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── CARD ── */
        .ct-card {
          display: block;
          text-decoration: none;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 2px;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94),
                      box-shadow 0.28s;
        }
        .ct-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.10);
        }

        .ct-card-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .ct-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .ct-card:hover .ct-card-img { transform: scale(1.08); }

        .ct-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(18,14,10,0.72) 0%, transparent 55%);
        }

        .ct-card-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .ct-card-city-name {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px 18px;
          color: #fff;
        }
        .ct-card-region {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 4px;
        }
        .ct-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 1.1;
        }

        .ct-card-body {
          padding: 18px 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .ct-card-desc {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.65;
        }
        .ct-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terracotta);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s, transform 0.25s, gap 0.2s;
        }
        .ct-card:hover .ct-card-link { opacity: 1; transform: none; }
        .ct-card-link:hover { gap: 10px; }

        /* ── EMPTY STATE ── */
        .ct-empty {
          text-align: center;
          padding: 80px 0;
          grid-column: 1 / -1;
        }
        .ct-empty-icon { color: var(--sand-dark); margin-bottom: 16px; }
        .ct-empty-title { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; color: var(--charcoal); margin-bottom: 8px; }
        .ct-empty-sub { font-size: 0.88rem; color: var(--muted); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1000px) { .ct-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 720px)  { .ct-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  {
          .ct-grid { grid-template-columns: 1fr; }
          .ct-controls { top: 0; padding: 20px; }
          .ct-body { padding: 40px 20px 80px; }
          .ct-header { padding: 120px 20px 60px; }
        }
      `}</style>

      <div className="ct-root">

        {/* ── HEADER ── */}
        <section className="ct-header">
          <div className="ct-header-glow" />
          <div className="ct-header-inner">
            <span className="ct-eyebrow">India Awaits</span>
            <h1 className="ct-header-title">
              Explore <em>Incredible</em><br />Destinations
            </h1>
            <p className="ct-header-sub">
              From Rajasthan's royal forts to jungle wildlife reserves — find the journey that calls to you.
            </p>
          </div>
        </section>

        {/* ── CONTROLS ── */}
        <div className="ct-controls">
          <div className="ct-controls-inner">
            <div className="ct-search">
              <Search size={14} className="ct-search-icon" />
              <input
                type="text"
                placeholder="Search city or region…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search destinations"
              />
            </div>
            <div className="ct-filters" role="group" aria-label="Filter by type">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  className={`ct-pill ${activeTag === tag ? "active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <span className="ct-count">{filtered.length} destination{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="ct-body">
          <div className="ct-grid">
            {filtered.length > 0 ? filtered.map((city) => {
              const tc = TAG_COLORS[city.tag] || { bg: "rgba(0,0,0,0.1)", color: "#555" };
              return (
                <Link key={city.routeSlug} to={`/city/${city.routeSlug}`} className="ct-card">
                  <div className="ct-card-img-wrap">
                    <img
                      src={city.img}
                      alt={`${city.name} travel destination`}
                      loading="lazy"
                      decoding="async"
                      className="ct-card-img"
                    />
                    <div className="ct-card-overlay" />
                    <span
                      className="ct-card-tag"
                      style={{ background: tc.bg, color: tc.color, backdropFilter: "blur(6px)" }}
                    >
                      {city.tag}
                    </span>
                    <div className="ct-card-city-name">
                      <div className="ct-card-region">
                        <MapPin size={9} /> {city.region}
                      </div>
                      <div className="ct-card-name">{city.name}</div>
                    </div>
                  </div>
                  <div className="ct-card-body">
                    <p className="ct-card-desc">{city.desc}</p>
                    <span className="ct-card-link">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            }) : (
              <div className="ct-empty">
                <SlidersHorizontal size={40} className="ct-empty-icon" style={{ margin: "0 auto 16px" }} />
                <p className="ct-empty-title">No destinations found</p>
                <p className="ct-empty-sub">Try a different filter or search term</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}