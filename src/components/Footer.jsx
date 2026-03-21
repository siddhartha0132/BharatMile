import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const WHATSAPP_NUMBER = "919636974688";

export default function Footer() {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/city", label: "Destinations" },
    { to: "/blogs", label: "Travel Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  const destinations = [
    { to: "/city/jaipur", label: "Jaipur" },
    { to: "/goa-forts", label: "Goa" },
    { to: "/blogs/kerala-backwaters", label: "Kerala" },
    { to: "/top-10-places-to-visit-in-india", label: "Agra & Taj Mahal" },
    { to: "/city/udaipur", label: "Udaipur" },
    { to: "/blogs/amritsar-golden-temple-langar", label: "Amritsar" },
  ];

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --sand: #f5efe6;
          --terracotta: #c1644a;
          --terracotta-dark: #a14e38;
          --charcoal: #1c1c1e;
          --charcoal-soft: #2a2a2c;
          --gold: #c9972a;
          --gold-light: #e8c56b;
        }

        .footer {
          font-family: 'DM Sans', sans-serif;
          background: var(--charcoal);
          color: rgba(255,255,255,0.6);
        }

        /* ── TOP CTA BAND ── */
        .footer-cta-band {
          background: var(--terracotta);
          padding: 36px 32px;
        }
        .footer-cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-cta-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 500;
          color: #fff;
          line-height: 1.3;
        }
        .footer-cta-text em { font-style: italic; opacity: 0.85; }
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: var(--terracotta);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.18s;
        }
        .footer-cta-btn:hover { background: var(--sand); transform: translateY(-2px); }

        /* ── MAIN GRID ── */
        .footer-main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 32px 56px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.5fr;
          gap: 48px;
        }

        /* ── BRAND COL ── */
        .footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #fff;
          line-height: 1;
          margin-bottom: 14px;
        }
        .footer-brand-name span { color: var(--gold-light); }
        .footer-tagline {
          font-size: 0.87rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          margin-bottom: 28px;
          font-weight: 300;
          max-width: 240px;
        }
        .footer-contact-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }
        .footer-contact-icon { color: var(--gold); flex-shrink: 0; margin-top: 2px; }

        .footer-socials { display: flex; gap: 10px; margin-top: 28px; }
        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .footer-social-btn:hover {
          border-color: var(--gold);
          color: var(--gold-light);
          background: rgba(201,151,42,0.08);
        }

        /* ── LINK COLS ── */
        .footer-col-title {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(255,255,255,0.3);
          margin-bottom: 22px;
        }
        .footer-link-list { list-style: none; display: flex; flex-direction: column; gap: 2px; }
        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          padding: 6px 0;
          transition: color 0.2s;
        }
        .footer-link svg { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; flex-shrink: 0; }
        .footer-link:hover { color: #fff; }
        .footer-link:hover svg { opacity: 1; transform: none; }

        /* ── NEWSLETTER ── */
        .footer-newsletter-text {
          font-size: 0.83rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.42);
          margin-bottom: 20px;
          font-weight: 300;
        }
        .newsletter-form { display: flex; flex-direction: column; gap: 10px; }
        .newsletter-input {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 3px;
          padding: 11px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: #fff;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.28); }
        .newsletter-input:focus { border-color: var(--gold); background: rgba(255,255,255,0.09); }
        .newsletter-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          width: 100%;
          background: var(--terracotta);
          color: #fff;
          border: none;
          border-radius: 3px;
          padding: 11px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s;
        }
        .newsletter-btn:hover { background: var(--terracotta-dark); }
        .newsletter-note {
          font-size: 0.71rem;
          color: rgba(255,255,255,0.22);
          margin-top: 4px;
          line-height: 1.5;
        }

        /* ── DIVIDER & BOTTOM ── */
        .footer-divider {
          max-width: 1100px;
          margin: 0 auto;
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .footer-bottom {
          max-width: 1100px;
          margin: 0 auto;
          padding: 22px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy { font-size: 0.75rem; color: rgba(255,255,255,0.25); letter-spacing: 0.04em; }
        .footer-legal { display: flex; gap: 20px; }
        .footer-legal a {
          font-size: 0.73rem;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: rgba(255,255,255,0.6); }

        /* ── RESPONSIVE ── */
        @media (max-width: 980px) {
          .footer-main { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 580px) {
          .footer-main { grid-template-columns: 1fr; padding: 48px 20px 40px; }
          .footer-cta-band { padding: 28px 20px; }
          .footer-cta-inner { flex-direction: column; align-items: flex-start; }
          .footer-bottom { padding: 20px; flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>

      <footer className="footer">

        {/* ── TOP CTA BAND ── */}
        <div className="footer-cta-band">
          <div className="footer-cta-inner">
            <p className="footer-cta-text">
              Ready to explore India? <em>Let's plan your perfect journey.</em>
            </p>
            <button
              className="footer-cta-btn"
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)}
            >
              <Phone size={13} /> Chat with Us
            </button>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="footer-main">

          {/* Brand */}
          <div>
            <div className="footer-brand-name">Bharat<span>Mile</span></div>
            <p className="footer-tagline">
              Discover India's beauty, culture, and hidden gems with trusted local experts. Your journey begins here.
            </p>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={13} className="footer-contact-icon" />
                Jaipur, Rajasthan, India
              </li>
              <li className="footer-contact-item">
                <Phone size={13} className="footer-contact-icon" />
                +91 96369 74688
              </li>
              <li className="footer-contact-item">
                <Mail size={13} className="footer-contact-icon" />
                hello@bharatmile.com
              </li>
            </ul>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="footer-social-btn" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-col-title">Navigate</p>
            <ul className="footer-link-list">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">
                    <ArrowRight size={11} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <p className="footer-col-title">Destinations</p>
            <ul className="footer-link-list">
              {destinations.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">
                    <ArrowRight size={11} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="footer-col-title">Travel Insiders</p>
            <p className="footer-newsletter-text">
              Get handpicked itineraries, hidden gems, and exclusive offers delivered to your inbox.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button className="newsletter-btn">
                Subscribe <ArrowRight size={13} />
              </button>
            </div>
            <p className="newsletter-note">No spam, ever. Unsubscribe anytime.</p>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} BharatMile. All rights reserved.
          </p>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/sitemap">Sitemap</a>
          </nav>
        </div>

      </footer>
    </>
  );
}
