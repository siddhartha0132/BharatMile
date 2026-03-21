import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/BharatMile-Logo.jpg";

const WHATSAPP_NUMBER = "919636974688";

const navLinks = [
  { to: "/",        label: "Home",         title: "Go to BharatMile Home Page" },
  { to: "/about",   label: "About",        title: "Learn more About Us"         },
  { to: "/city",    label: "Destinations", title: "Explore Cities"              },
  { to: "/blogs",   label: "Blogs",        title: "Read our Travel Blogs"       },
  { to: "/contact", label: "Contact",      title: "Contact BharatMile Team"     },
];

// Only these exact routes start with a full-bleed dark hero —
// the navbar can be transparent here until the user scrolls.
const DARK_HERO_ROUTES = ["/", "/about", "/city", "/blogs", "/contact"];

function routeHasDarkHero(pathname) {
  return DARK_HERO_ROUTES.some((r) =>
    r === "/" ? pathname === "/" : pathname === r || pathname.startsWith(r + "/")
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const location = useLocation();

  const hasDarkHero = routeHasDarkHero(location.pathname);

  // Navbar is "solid" when scrolled past 40px OR when the page has no dark hero
  const isSolid = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check immediately on mount / route change (page could be at top)
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Close drawer on navigation
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --sand: #f5efe6;
          --terracotta: #c1644a;
          --terracotta-dark: #a14e38;
          --charcoal: #1c1c1e;
          --muted: #6b6b6b;
          --gold: #c9972a;
          --white: #fefefe;
        }

        /* ── BASE ── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        /* Transparent — floating over dark hero */
        .navbar.top {
          background: transparent;
          box-shadow: none;
        }

        /* Solid — scrolled or non-dark-hero page */
        .navbar.solid {
          background: rgba(252, 250, 248, 0.97);
          box-shadow: 0 1px 0 rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* ── INNER ── */
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: height 0.3s ease;
        }
        .navbar.solid .navbar-inner { height: 62px; }

        /* ── LOGO ── */
        .nav-logo {
          display: flex; align-items: center; gap: 11px;
          text-decoration: none; flex-shrink: 0;
        }
        .nav-logo-img {
          height: 38px; width: auto;
          object-fit: contain; border-radius: 4px;
          transition: height 0.3s;
        }
        .navbar.solid .nav-logo-img { height: 34px; }

        .nav-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem; font-weight: 600;
          letter-spacing: 0.01em; line-height: 1;
          transition: color 0.3s;
        }
        /* White on transparent navbar; charcoal on solid */
        .navbar.top  .nav-logo-text { color: #fff; }
        .navbar.solid .nav-logo-text { color: var(--charcoal); }

        /* ── DESKTOP LINKS ── */
        .nav-links {
          display: flex; align-items: center;
          gap: 4px; list-style: none; padding: 0; margin: 0;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-size: 0.82rem; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 8px 13px; border-radius: 3px;
          transition: color 0.2s;
        }
        /* Colour by state */
        .navbar.top  .nav-link         { color: rgba(255,255,255,0.78); }
        .navbar.solid .nav-link        { color: var(--muted);           }
        .navbar.top  .nav-link:hover   { color: #fff;                   }
        .navbar.solid .nav-link:hover  { color: var(--charcoal);        }
        .navbar.top  .nav-link.active  { color: #fff;                   }
        .navbar.solid .nav-link.active { color: var(--charcoal);        }

        /* Gold underline */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 13px; right: 13px;
          height: 1.5px; background: var(--gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover::after,
        .nav-link.active::after { transform: scaleX(1); }

        /* ── CTA ── */
        .nav-cta {
          display: inline-flex; align-items: center; gap: 7px;
          background: var(--terracotta); color: #fff;
          font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 9px 18px; border-radius: 3px;
          border: none; cursor: pointer;
          text-decoration: none; margin-left: 8px;
          white-space: nowrap;
          transition: background 0.2s, transform 0.18s;
        }
        .nav-cta:hover { background: var(--terracotta-dark); transform: translateY(-1px); }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: none;
          align-items: center; justify-content: center;
          width: 40px; height: 40px;
          background: transparent; cursor: pointer;
          border-radius: 4px;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .navbar.top   .nav-hamburger { border: 1.5px solid rgba(255,255,255,0.35); color: #fff; }
        .navbar.solid .nav-hamburger { border: 1.5px solid rgba(28,28,30,0.2);     color: var(--charcoal); }
        .navbar.top   .nav-hamburger:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }
        .navbar.solid .nav-hamburger:hover { background: var(--sand); border-color: rgba(28,28,30,0.35); }

        /* ── MOBILE DRAWER ── */
        .mobile-drawer {
          position: fixed; inset: 0; z-index: 99; pointer-events: none;
        }
        .mobile-drawer.open { pointer-events: auto; }

        .mobile-backdrop {
          position: absolute; inset: 0;
          background: rgba(18,14,10,0.5);
          opacity: 0; transition: opacity 0.35s;
          backdrop-filter: blur(4px);
        }
        .mobile-drawer.open .mobile-backdrop { opacity: 1; }

        .mobile-panel {
          position: absolute; top: 0; right: 0; bottom: 0;
          width: min(340px, 88vw);
          background: var(--white);
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
          display: flex; flex-direction: column;
          box-shadow: -8px 0 40px rgba(0,0,0,0.12);
        }
        .mobile-drawer.open .mobile-panel { transform: none; }

        .mobile-panel-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 24px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .mobile-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 600; color: var(--charcoal);
        }
        .mobile-close {
          width: 36px; height: 36px;
          border: 1.5px solid rgba(28,28,30,0.15);
          border-radius: 4px; background: transparent;
          color: var(--charcoal);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s;
        }
        .mobile-close:hover { background: var(--sand); }

        .mobile-links {
          flex: 1; padding: 16px 0;
          list-style: none; overflow-y: auto;
        }
        .mobile-link {
          display: block; text-decoration: none;
          font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted);
          padding: 14px 24px;
          border-left: 3px solid transparent;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .mobile-link:hover {
          color: var(--charcoal); background: var(--sand);
          border-left-color: var(--gold);
        }
        .mobile-link.active {
          color: var(--terracotta);
          border-left-color: var(--terracotta);
          background: rgba(193,100,74,0.04);
        }

        .mobile-panel-foot {
          padding: 20px 24px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .mobile-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; background: var(--terracotta); color: #fff;
          border: none; border-radius: 4px; padding: 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          cursor: pointer; transition: background 0.2s;
        }
        .mobile-cta:hover { background: var(--terracotta-dark); }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-hamburger { display: flex; }
          .navbar-inner { padding: 0 20px; }
        }
      `}</style>

      <nav
        className={`navbar ${isSolid ? "solid" : "top"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">

          <Link to="/" className="nav-logo" aria-label="BharatMile — Home">
            <img src={logo} alt="BharatMile Logo" className="nav-logo-img" width="42" height="42" loading="eager" />
            <span className="nav-logo-text">BharatMile</span>
          </Link>

          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  title={link.title}
                  className={`nav-link ${isActive(link.to) ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="nav-cta"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)}
            aria-label="Contact us on WhatsApp"
          >
            <Phone size={13} /> Plan My Trip
          </button>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-panel" role="dialog" aria-label="Navigation menu">
          <div className="mobile-panel-head">
            <span className="mobile-logo-text">BharatMile</span>
            <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={16} />
            </button>
          </div>

          <ul className="mobile-links" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  title={link.title}
                  className={`mobile-link ${isActive(link.to) ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-panel-foot">
            <button
              className="mobile-cta"
              onClick={() => { setMenuOpen(false); window.open(`https://wa.me/${WHATSAPP_NUMBER}`); }}
            >
              <Phone size={14} /> Plan My Trip on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}