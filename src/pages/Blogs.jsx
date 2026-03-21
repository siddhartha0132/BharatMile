import React, { useEffect, useState, useRef } from "react";
import { Search, ArrowRight, Clock, MapPin, BookOpen, X } from "lucide-react";
import { Link } from "react-router-dom";

// ── Asset imports ──────────────────────────────────────────────────────────
import id1  from "../assets/Top-Ten.jpg";
import id2  from "../assets/ultimatetwoWeek.jpg";
import id3  from "../assets/Top-Ten.jpg";
import id4  from "../assets/jaipurvsudaipur25.avif";
import id5  from "../assets/jaislamerdesert.jpg";
import id6  from "../assets/bhangarhgort.jpeg";
import id7  from "../assets/manalitoleh.jpeg";
import id8  from "../assets/splitvalley.jpg";
import id9  from "../assets/Top-Ten.jpg";
import id10 from "../assets/rishikesh.jpg";
import id11 from "../assets/keralaBackWater.jpg";
import id12 from "../assets/hampi.jpg";
import id13 from "../assets/Pondicherry.png";
import id14 from "../assets/cooorg.jpg";
import id15 from "../assets/ooty.jpeg";
import id16 from "../assets/Mysore.jpg";
import id17 from "../assets/Howtotravelin500.jpg";
import id18 from "../assets/BestHotels.jpg";
import id19 from "../assets/indianrailways.avif";
import id20 from "../assets/flight.jpg";
import id21 from "../assets/Femaletraveler.jpg";
import id22 from "../assets/street-food.jpg";
import id23 from "../assets/goldentemple.jpg";
import id24 from "../assets/goa.jpg";
import id25 from "../assets/LocalFoodsHyderabad.jpeg";
import id26 from "../assets/meghalayahero.jpeg";
import id27 from "../assets/silk-route.jpeg";
import id28 from "../assets/Andaman-and-Nicobar.jpg";
import id29 from "../assets/rann-of-kutch.jpeg";
import id30 from "../assets/jim-corbett.avif";
import id31 from "../assets/Valleyofflowers.jpg";
import id32 from "../assets/sundarbantours.jpg";
import id33 from "../assets/whatnottobring.jpg";

// ── Category meta ──────────────────────────────────────────────────────────
const CAT_META = {
  Trending:  { color: "#c1644a", bg: "rgba(193,100,74,0.13)" },
  Guides:    { color: "#2d6fa3", bg: "rgba(59,130,186,0.13)" },
  News:      { color: "#9a7218", bg: "rgba(201,151,42,0.13)" },
  Rajasthan: { color: "#a14e38", bg: "rgba(161,78,56,0.12)"  },
  Adventure: { color: "#3d7a43", bg: "rgba(61,122,67,0.13)"  },
  Spiritual: { color: "#7b5ea7", bg: "rgba(123,94,167,0.13)" },
  Heritage:  { color: "#8b6914", bg: "rgba(139,105,20,0.13)" },
  Kerala:    { color: "#3d7a43", bg: "rgba(61,122,67,0.13)"  },
  Leisure:   { color: "#2d6fa3", bg: "rgba(59,130,186,0.13)" },
  Nature:    { color: "#4a7a30", bg: "rgba(74,122,48,0.13)"  },
  Family:    { color: "#c1644a", bg: "rgba(193,100,74,0.13)" },
  Budget:    { color: "#9a7218", bg: "rgba(201,151,42,0.13)" },
  Tips:      { color: "#555",    bg: "rgba(80,80,80,0.10)"   },
  Student:   { color: "#7b5ea7", bg: "rgba(123,94,167,0.13)" },
  Safety:    { color: "#c1644a", bg: "rgba(193,100,74,0.13)" },
  Food:      { color: "#a14e38", bg: "rgba(161,78,56,0.12)"  },
  Culture:   { color: "#8b6914", bg: "rgba(139,105,20,0.13)" },
  Goa:       { color: "#2d6fa3", bg: "rgba(59,130,186,0.13)" },
  Northeast: { color: "#3d7a43", bg: "rgba(61,122,67,0.13)"  },
  Wildlife:  { color: "#4a7a30", bg: "rgba(74,122,48,0.13)"  },
  Trekking:  { color: "#3d7a43", bg: "rgba(61,122,67,0.13)"  },
  Mystery:   { color: "#7b5ea7", bg: "rgba(123,94,167,0.13)" },
};

const ALL_BLOGS = [
  { id: 1,  title: "Top 10 Places to Visit in India Before You Die",       category: "Trending",  img: id1,  slug: "/top-10-places-to-visit-in-india",             read: 6  },
  { id: 2,  title: "The Ultimate 2-Week India Itinerary for Beginners",    category: "Guides",    img: id2,  slug: "/2-week-india-itinerary-for-beginners",         read: 10 },
  { id: 3,  title: "Why 2025 is the Best Year to Visit Bharat",            category: "News",      img: id3,  slug: "/why-2025-is-the-best-year-to-visit-bharat",    read: 4  },
  { id: 4,  title: "Jaipur vs Udaipur: Which City Should You Visit?",      category: "Rajasthan", img: id4,  slug: "/jaipur-vs-udaipur-which-city-to-visit",        read: 7  },
  { id: 5,  title: "Jaisalmer Desert Camping: A Night Under the Stars",    category: "Rajasthan", img: id5,  slug: "/jaisalmer-desert-camping",                     read: 5  },
  { id: 6,  title: "The Haunted History of Bhangarh Fort",                 category: "Mystery",   img: id6,  slug: "/bhangarh-fort-haunted-history",                read: 5  },
  { id: 7,  title: "Manali to Leh: The Ultimate Road Trip Guide",          category: "Adventure", img: id7,  slug: "/manali-to-leh-road-trip-guide",                read: 12 },
  { id: 8,  title: "Spiti Valley: India's Middle Land Explained",          category: "Adventure", img: id8,  slug: "/spiti-valley-middle-land",                     read: 8  },
  { id: 9,  title: "A Spiritual Journey Through Varanasi's Ghats",         category: "Spiritual", img: id9,  slug: "/varanasi-ghats-spiritual-journey",             read: 6  },
  { id: 10, title: "Rishikesh: Yoga, Rafting, and Peace",                  category: "Spiritual", img: id10, slug: "/rishikesh-yoga-rafting-peace",                 read: 5  },
  { id: 11, title: "Kerala Backwaters: Houseboat Prices & Tips",           category: "Kerala",    img: id11, slug: "/blogs/kerala-backwaters",                      read: 7  },
  { id: 12, title: "Hampi: Exploring the Ruins of an Empire",              category: "Heritage",  img: id12, slug: "/blogs/hampi-ruins-empire",                    read: 8  },
  { id: 13, title: "Pondicherry: A Slice of France in India",              category: "Leisure",   img: id13, slug: "/blogs/pondicherry-french-town",               read: 5  },
  { id: 14, title: "Coorg: The Scotland of India Coffee Guide",            category: "Nature",    img: id14, slug: "/blogs/coorg-coffee-guide",                    read: 6  },
  { id: 15, title: "Ooty Toy Train: Tickets and Timings",                  category: "Family",    img: id15, slug: "/blogs/ooty-toy-train-tickets-timings",        read: 4  },
  { id: 16, title: "Mysore Palace: The Royal Dussehra Experience",         category: "Heritage",  img: id16, slug: "/blogs/mysore-palace-dussehra-experience",     read: 6  },
  { id: 17, title: "How to Travel India on ₹500 a Day",                   category: "Budget",    img: id17, slug: "/blogs/how-to-travel-india-for-500-rupees",    read: 7  },
  { id: 18, title: "Best Hostels in India for Solo Travelers",             category: "Budget",    img: id18, slug: "/blogs/best-hostels-in-india-for-solo-travelers", read: 5 },
  { id: 19, title: "Indian Railways Guide: How to Book Tatkal",            category: "Tips",      img: id19, slug: "/blogs/tatkal-railway",                        read: 5  },
  { id: 20, title: "Student Discounts on Flights and Monuments",           category: "Student",   img: id20, slug: "/blogs/student-discounts",                     read: 4  },
  { id: 21, title: "Safe Travel Tips for Solo Female Travelers",           category: "Safety",    img: id21, slug: "/blogs/solo-female-travel-tips",               read: 8  },
  { id: 22, title: "The Street Food of Delhi: Chandni Chowk Guide",       category: "Food",      img: id22, slug: "/blogs/chandni-chowk-street-food-guide",       read: 6  },
  { id: 23, title: "Amritsar: Golden Temple and Langar Experience",        category: "Culture",   img: id23, slug: "/blogs/amritsar-golden-temple-langar",         read: 6  },
  { id: 24, title: "Goa Beyond Beaches: Forts and Spice Farms",           category: "Goa",       img: id24, slug: "/goa-forts",                                   read: 5  },
  { id: 25, title: "Hyderabadi Biryani: The Authentic Food Trail",         category: "Food",      img: id25, slug: "/hyderabadi-biryani",                          read: 5  },
  { id: 26, title: "Meghalaya: Walking on Living Root Bridges",            category: "Northeast", img: id26, slug: "/meghalaya-walking-on-living-root-bridges",    read: 7  },
  { id: 27, title: "Sikkim Silk Route: A Hidden Gem",                      category: "Northeast", img: id27, slug: "/sikkim-silk-route-hidden-gem",                read: 6  },
  { id: 28, title: "Andaman Islands: Scuba Diving for Beginners",         category: "Adventure", img: id28, slug: "/andaman-islands-scuba-diving-beginners",      read: 6  },
  { id: 29, title: "Rann of Kutch: The White Desert Festival",             category: "Culture",   img: id29, slug: "/rann-of-kutch-white-desert-festival",         read: 5  },
  { id: 30, title: "Jim Corbett: Spotting the Bengal Tiger",               category: "Wildlife",  img: id30, slug: "/jim-corbett-bengal-tiger-safari",             read: 7  },
  { id: 31, title: "Valley of Flowers: Trekking in Monsoon",              category: "Trekking",  img: id31, slug: "/valley-of-flowers-monsoon-trekking",          read: 6  },
  { id: 32, title: "Sundarbans: The Mangrove Forest Boat Safari",         category: "Wildlife",  img: id32, slug: "/blogs/sundarbans-mangrove-safari",             read: 6  },
  { id: 33, title: "Packing List for India: What Not to Bring",           category: "Tips",      img: id33, slug: "/blogs/packing-list-india",                    read: 5  },
];

const FEATURED_IDS = [1, 7, 22];
const ALL_CATS = ["All", ...Array.from(new Set(ALL_BLOGS.map(b => b.category)))];

export default function Blogs() {
  const [query, setQuery]       = useState("");
  const [activeCat, setActiveCat] = useState("All");
  const searchRef               = useRef(null);

  useEffect(() => {
    document.title = "Travel Blogs — BharatMile | India Travel Stories & Guides";
  }, []);

  const featured  = ALL_BLOGS.filter(b => FEATURED_IDS.includes(b.id));
  const remaining = ALL_BLOGS.filter(b => !FEATURED_IDS.includes(b.id));

  const filtered = remaining.filter(b => {
    const matchCat = activeCat === "All" || b.category === activeCat;
    const matchQ   = b.title.toLowerCase().includes(query.toLowerCase()) ||
                     b.category.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  const clearSearch = () => { setQuery(""); setActiveCat("All"); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

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

        .bl-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--charcoal);
          min-height: 100vh;
        }

        /* ── HERO ── */
        .bl-hero {
          background: var(--charcoal);
          padding: 140px 32px 72px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .bl-hero-glow {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 60%, rgba(193,100,74,0.16) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(201,151,42,0.10) 0%, transparent 50%);
          pointer-events: none;
        }
        .bl-hero-inner { position: relative; max-width: 680px; margin: 0 auto; }
        .bl-eyebrow {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 700; color: var(--gold-light); opacity: 0.85;
          display: block; margin-bottom: 18px;
        }
        .bl-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 600; color: #fff; line-height: 1.08;
          margin-bottom: 18px; letter-spacing: -0.01em;
        }
        .bl-hero-title em { font-style: italic; color: var(--gold-light); }
        .bl-hero-sub {
          font-size: 0.95rem; color: rgba(255,255,255,0.5);
          line-height: 1.75; font-weight: 300; margin-bottom: 36px;
        }

        /* Search */
        .bl-search-wrap {
          max-width: 500px; margin: 0 auto;
          display: flex; align-items: center;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 3px; overflow: hidden;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s;
        }
        .bl-search-wrap:focus-within { border-color: rgba(201,151,42,0.5); }
        .bl-search-icon { color: rgba(255,255,255,0.4); padding: 0 14px; flex-shrink: 0; }
        .bl-search-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-family: 'DM Sans', sans-serif; font-size: 0.88rem;
          color: #fff; padding: 13px 0;
        }
        .bl-search-input::placeholder { color: rgba(255,255,255,0.3); }
        .bl-search-clear {
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.35); padding: 0 14px;
          display: flex; align-items: center;
          transition: color 0.2s;
        }
        .bl-search-clear:hover { color: rgba(255,255,255,0.7); }

        /* ── FEATURED ── */
        .bl-featured { background: var(--sand); padding: 80px 32px; }
        .bl-featured-inner { max-width: 1100px; margin: 0 auto; }
        .bl-section-label {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 700; color: var(--terracotta); display: block; margin-bottom: 32px;
        }
        .bl-featured-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-template-rows: auto;
          gap: 3px;
        }

        /* Featured card */
        .bl-feat-card {
          position: relative; overflow: hidden; display: block;
          text-decoration: none; background: var(--charcoal);
        }
        .bl-feat-card:first-child { grid-row: span 2; }
        .bl-feat-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
          min-height: 240px;
        }
        .bl-feat-card:first-child .bl-feat-img { min-height: 500px; }
        .bl-feat-card:hover .bl-feat-img { transform: scale(1.06); }
        .bl-feat-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(18,14,10,0.85) 0%, rgba(18,14,10,0.1) 60%);
        }
        .bl-feat-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 24px 24px 26px; color: #fff;
        }
        .bl-feat-tag {
          display: inline-block; font-size: 9px; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px;
          margin-bottom: 10px;
        }
        .bl-feat-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600; line-height: 1.25; color: #fff;
        }
        .bl-feat-card:first-child .bl-feat-title { font-size: 1.9rem; }
        .bl-feat-card:not(:first-child) .bl-feat-title { font-size: 1.25rem; }
        .bl-feat-meta {
          display: flex; align-items: center; gap: 12px;
          font-size: 0.72rem; color: rgba(255,255,255,0.5);
          margin-top: 10px;
        }
        .bl-feat-read-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--gold-light);
          opacity: 0; transform: translateY(4px);
          transition: opacity 0.25s, transform 0.25s;
        }
        .bl-feat-card:hover .bl-feat-read-link { opacity: 1; transform: none; }

        /* ── CONTROLS ── */
        .bl-controls {
          background: var(--white);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding: 20px 32px;
          position: sticky; top: 62px; z-index: 40;
        }
        .bl-controls-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        }
        .bl-cat-scroll {
          display: flex; gap: 8px; flex: 1;
          overflow-x: auto; padding-bottom: 2px;
          scrollbar-width: none;
        }
        .bl-cat-scroll::-webkit-scrollbar { display: none; }
        .bl-cat-pill {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.07em;
          text-transform: uppercase; padding: 6px 14px; border-radius: 100px;
          border: 1.5px solid rgba(0,0,0,0.1); background: transparent;
          color: var(--muted); cursor: pointer; white-space: nowrap;
          transition: all 0.2s; font-family: 'DM Sans', sans-serif;
          flex-shrink: 0;
        }
        .bl-cat-pill:hover { border-color: var(--terracotta); color: var(--terracotta); }
        .bl-cat-pill.active { background: var(--terracotta); border-color: var(--terracotta); color: #fff; }
        .bl-count {
          font-size: 0.75rem; color: var(--muted);
          white-space: nowrap; margin-left: auto; flex-shrink: 0;
        }

        /* ── ARTICLE GRID ── */
        .bl-grid-wrap { max-width: 1100px; margin: 0 auto; padding: 64px 32px 100px; }
        .bl-grid-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem; font-weight: 600; color: var(--charcoal);
          margin-bottom: 40px;
        }
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Article card */
        .bl-card {
          display: flex; flex-direction: column;
          background: var(--white); border: 1px solid rgba(0,0,0,0.07);
          border-radius: 2px; overflow: hidden; text-decoration: none;
          transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.28s;
        }
        .bl-card:hover { transform: translateY(-7px); box-shadow: 0 18px 44px rgba(0,0,0,0.09); }
        .bl-card-img-wrap { position: relative; height: 200px; overflow: hidden; flex-shrink: 0; }
        .bl-card-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .bl-card:hover .bl-card-img { transform: scale(1.07); }
        .bl-card-tag {
          position: absolute; top: 12px; left: 12px;
          font-size: 9px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; padding: 4px 10px; border-radius: 100px;
        }
        .bl-card-body { padding: 22px; flex: 1; display: flex; flex-direction: column; gap: 12px; }
        .bl-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.18rem; font-weight: 600; color: var(--charcoal);
          line-height: 1.35;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bl-card:hover .bl-card-title { color: var(--terracotta); }
        .bl-card-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(0,0,0,0.06);
          display: flex; align-items: center; justify-content: space-between;
        }
        .bl-card-meta { display: flex; align-items: center; gap: 5px; font-size: 0.74rem; color: var(--muted); }
        .bl-card-link {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--terracotta);
          opacity: 0; transform: translateX(-4px);
          transition: opacity 0.25s, transform 0.25s, gap 0.2s;
        }
        .bl-card:hover .bl-card-link { opacity: 1; transform: none; }
        .bl-card-link:hover { gap: 8px; }

        /* Empty */
        .bl-empty {
          grid-column: 1 / -1; text-align: center; padding: 80px 0;
        }
        .bl-empty-icon { color: var(--sand-dark); margin: 0 auto 16px; }
        .bl-empty-title { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; color: var(--charcoal); margin-bottom: 8px; }
        .bl-empty-sub { font-size: 0.88rem; color: var(--muted); margin-bottom: 20px; }
        .bl-empty-reset {
          background: none; border: 1.5px solid var(--terracotta); color: var(--terracotta);
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 9px 20px; border-radius: 3px;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: background 0.2s, color 0.2s;
        }
        .bl-empty-reset:hover { background: var(--terracotta); color: #fff; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .bl-featured-grid { grid-template-columns: 1fr; }
          .bl-feat-card:first-child { grid-row: auto; }
          .bl-feat-card:first-child .bl-feat-img { min-height: 320px; }
          .bl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .bl-grid { grid-template-columns: 1fr; }
          .bl-hero { padding: 120px 20px 60px; }
          .bl-controls { top: 0; padding: 16px 20px; }
          .bl-grid-wrap { padding: 40px 20px 80px; }
          .bl-featured { padding: 60px 20px; }
        }
      `}</style>

      <div className="bl-root">

        {/* ── HERO ── */}
        <section className="bl-hero">
          <div className="bl-hero-glow" />
          <div className="bl-hero-inner">
            <span className="bl-eyebrow">BharatMile Journal</span>
            <h1 className="bl-hero-title">
              Stories of<br /><em>Incredible</em> India
            </h1>
            <p className="bl-hero-sub">
              {ALL_BLOGS.length} handpicked guides, itineraries, and travel stories to help you discover India on your own terms.
            </p>
            <div className="bl-search-wrap">
              <Search size={15} className="bl-search-icon" />
              <input
                ref={searchRef}
                type="text"
                className="bl-search-input"
                placeholder="Search 'Goa', 'Budget', 'Food'…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                aria-label="Search blog articles"
              />
              {query && (
                <button className="bl-search-clear" onClick={() => setQuery("")} aria-label="Clear search">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ── FEATURED ── */}
        {!query && activeCat === "All" && (
          <section className="bl-featured">
            <div className="bl-featured-inner">
              <span className="bl-section-label">Editor's Picks</span>
              <div className="bl-featured-grid">
                {featured.map((blog, i) => {
                  const tc = CAT_META[blog.category] || { bg: "rgba(0,0,0,0.1)", color: "#555" };
                  return (
                    <Link key={blog.id} to={blog.slug} className="bl-feat-card">
                      <img src={blog.img} alt={blog.title} loading={i === 0 ? "eager" : "lazy"} decoding="async" className="bl-feat-img" />
                      <div className="bl-feat-overlay" />
                      <div className="bl-feat-content">
                        <span className="bl-feat-tag" style={{ background: tc.bg, color: tc.color, backdropFilter: "blur(6px)" }}>
                          {blog.category}
                        </span>
                        <div className="bl-feat-title">{blog.title}</div>
                        <div className="bl-feat-meta">
                          <Clock size={11} /> {blog.read} min read
                          <span className="bl-feat-read-link">
                            Read <ArrowRight size={11} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── FILTER BAR ── */}
        <div className="bl-controls">
          <div className="bl-controls-inner">
            <div className="bl-cat-scroll" role="group" aria-label="Filter by category">
              {ALL_CATS.map(cat => (
                <button
                  key={cat}
                  className={`bl-cat-pill ${activeCat === cat ? "active" : ""}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="bl-count">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* ── ARTICLE GRID ── */}
        <div className="bl-grid-wrap">
          {!query && activeCat === "All" ? (
            <p className="bl-grid-title">All Articles</p>
          ) : (
            <p className="bl-grid-title">
              {activeCat !== "All" ? activeCat : "Search"} — {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </p>
          )}

          <div className="bl-grid">
            {filtered.length > 0 ? filtered.map(blog => {
              const tc = CAT_META[blog.category] || { bg: "rgba(0,0,0,0.08)", color: "#555" };
              return (
                <Link key={blog.id} to={blog.slug} className="bl-card">
                  <div className="bl-card-img-wrap">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      loading="lazy"
                      decoding="async"
                      className="bl-card-img"
                      onError={e => { e.target.style.background = "#e5ddd4"; e.target.style.opacity = 0; }}
                    />
                    <span className="bl-card-tag" style={{ background: tc.bg, color: tc.color, backdropFilter: "blur(6px)" }}>
                      {blog.category}
                    </span>
                  </div>
                  <div className="bl-card-body">
                    <div className="bl-card-title">{blog.title}</div>
                    <div className="bl-card-footer">
                      <span className="bl-card-meta"><Clock size={12} /> {blog.read} min read</span>
                      <span className="bl-card-link">Read <ArrowRight size={11} /></span>
                    </div>
                  </div>
                </Link>
              );
            }) : (
              <div className="bl-empty">
                <BookOpen size={40} className="bl-empty-icon" />
                <p className="bl-empty-title">No articles found</p>
                <p className="bl-empty-sub">Try a different category or search term</p>
                <button className="bl-empty-reset" onClick={clearSearch}>Clear filters</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}