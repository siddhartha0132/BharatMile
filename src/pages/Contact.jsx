import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Globe, ArrowRight, CheckCircle } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc6-tbU7hRQeYUyDlaM2pMaH-5oNemq5A9q7b1nOCKAwGZu2w/formResponse";

const ENTRY_IDS = {
  fullName:    "entry.1950094604",
  subject:     "entry.1621944053",
  phoneNumber: "entry.781342223",
  message:     "entry.1593669309",
};

const WHATSAPP_NUMBER = "919636974688";

const CONTACT_ITEMS = [
  { icon: Mail,   label: "Email Us",  value: "info@bharatmile.com",    href: "mailto:info@bharatmile.com"   },
  { icon: Phone,  label: "Call Us",   value: "+91 96369 74688",        href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { icon: MapPin, label: "Visit HQ",  value: "Jaipur, Rajasthan, India", href: null                         },
];

const INFO_CARDS = [
  { icon: MessageCircle, color: "#3d7a43", label: "WhatsApp Support",  body: "Chat with our travel experts daily, 10 AM – 7 PM IST." },
  { icon: Globe,         color: "#2d6fa3", label: "Global Partners",   body: "Reach our partnerships team for collaborations & B2B." },
  { icon: Clock,         color: "#c9972a", label: "Response Time",     body: "We reply within 2 hours on business days." },
];

export default function Contact() {
  const [status, setStatus]   = useState("idle"); // idle | sending | success
  const [formData, setFormData] = useState({ fullName: "", subject: "", phoneNumber: "", message: "" });

  useEffect(() => {
    document.title = "Contact BharatMile — Plan Your India Journey";
  }, []);

  const handleChange = (field, value) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    document.getElementById("bm-real-form").submit();
  };

  const handleIframeLoad = () => {
    if (status === "sending") {
      setStatus("success");
      setFormData({ fullName: "", subject: "", phoneNumber: "", message: "" });
    }
  };

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
          --charcoal-soft: #232325;
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

        /* ── HERO ── */
        .ct-hero {
          background: var(--charcoal);
          padding: 140px 32px 120px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .ct-hero-glow {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 15% 70%, rgba(193,100,74,0.17) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(201,151,42,0.11) 0%, transparent 50%);
          pointer-events: none;
        }
        .ct-hero-inner { position: relative; max-width: 620px; margin: 0 auto; }
        .ct-eyebrow {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 700; color: var(--gold-light); opacity: 0.85;
          display: block; margin-bottom: 18px;
        }
        .ct-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 600; color: #fff; line-height: 1.08;
          margin-bottom: 18px; letter-spacing: -0.01em;
        }
        .ct-hero-title em { font-style: italic; color: var(--gold-light); }
        .ct-hero-sub {
          font-size: 0.95rem; color: rgba(255,255,255,0.5);
          line-height: 1.75; font-weight: 300;
        }

        /* ── MAIN CARD ── */
        .ct-card-wrap {
          max-width: 1060px;
          margin: -56px auto 0;
          padding: 0 32px;
          position: relative;
          z-index: 20;
        }
        .ct-card {
          display: grid;
          grid-template-columns: 2fr 3fr;
          background: var(--white);
          box-shadow: 0 24px 80px rgba(0,0,0,0.12);
          border-radius: 2px;
          overflow: hidden;
        }

        /* Left panel */
        .ct-left {
          background: var(--charcoal);
          padding: 52px 44px;
          position: relative;
          overflow: hidden;
        }
        .ct-left-glow {
          position: absolute;
          bottom: -40px; left: -40px;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(193,100,74,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-left-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem; font-weight: 600; color: #fff;
          margin-bottom: 8px;
        }
        .ct-left-sub { font-size: 0.83rem; color: rgba(255,255,255,0.4); line-height: 1.6; margin-bottom: 44px; }

        .ct-contact-list { display: flex; flex-direction: column; gap: 28px; margin-bottom: 48px; }
        .ct-contact-item { display: flex; align-items: flex-start; gap: 14px; text-decoration: none; }
        .ct-contact-icon {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold-light); flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .ct-contact-item:hover .ct-contact-icon { background: rgba(201,151,42,0.15); border-color: rgba(201,151,42,0.35); }
        .ct-contact-label { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 4px; }
        .ct-contact-value { font-size: 0.88rem; font-weight: 500; color: rgba(255,255,255,0.82); }
        .ct-contact-item:hover .ct-contact-value { color: #fff; }

        /* WhatsApp CTA */
        .ct-wa-btn {
          display: flex; align-items: center; gap: 9px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 3px; padding: 13px 18px;
          color: rgba(255,255,255,0.75); font-size: 0.8rem;
          font-weight: 600; letter-spacing: 0.07em;
          text-transform: uppercase; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          width: 100%;
        }
        .ct-wa-btn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); color: #fff; }

        /* Right panel — form */
        .ct-right { padding: 52px 48px; background: var(--white); }
        .ct-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem; font-weight: 600; color: var(--charcoal);
          margin-bottom: 6px;
        }
        .ct-form-sub { font-size: 0.84rem; color: var(--muted); margin-bottom: 36px; }

        .ct-form { display: flex; flex-direction: column; gap: 22px; }
        .ct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .ct-field { display: flex; flex-direction: column; gap: 7px; }
        .ct-label {
          font-size: 0.73rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }
        .ct-input, .ct-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem; color: var(--charcoal);
          background: var(--sand);
          border: 1.5px solid transparent;
          border-radius: 3px; padding: 12px 15px;
          outline: none; width: 100%;
          transition: border-color 0.2s, background 0.2s;
        }
        .ct-input::placeholder, .ct-textarea::placeholder { color: rgba(107,107,107,0.5); }
        .ct-input:focus, .ct-textarea:focus {
          border-color: var(--terracotta);
          background: #fdf8f4;
        }
        .ct-textarea { resize: vertical; min-height: 120px; }

        /* Submit */
        .ct-submit {
          display: flex; align-items: center; justify-content: center; gap: 9px;
          width: 100%; background: var(--terracotta);
          color: #fff; border: none; border-radius: 3px;
          padding: 15px; font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; transition: background 0.2s, transform 0.18s;
        }
        .ct-submit:hover:not(:disabled) { background: var(--terracotta-dark); transform: translateY(-2px); }
        .ct-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        /* Success */
        .ct-success {
          display: flex; align-items: center; gap: 10px;
          background: rgba(61,122,67,0.08); border: 1px solid rgba(61,122,67,0.25);
          border-radius: 3px; padding: 14px 18px;
          color: #3d7a43; font-size: 0.86rem; font-weight: 500;
        }

        /* ── INFO CARDS ── */
        .ct-info-wrap {
          max-width: 1060px;
          margin: 48px auto 100px;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .ct-info-card {
          background: var(--sand);
          padding: 32px 28px;
          border-radius: 2px;
          transition: transform 0.22s;
        }
        .ct-info-card:hover { transform: translateY(-5px); }
        .ct-info-icon {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px; flex-shrink: 0;
        }
        .ct-info-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 600; color: var(--charcoal);
          margin-bottom: 8px;
        }
        .ct-info-body { font-size: 0.83rem; color: var(--muted); line-height: 1.65; }

        /* ── RESPONSIVE ── */
        @media (max-width: 820px) {
          .ct-card { grid-template-columns: 1fr; }
          .ct-form-row { grid-template-columns: 1fr; }
          .ct-info-wrap { grid-template-columns: 1fr; }
          .ct-card-wrap { margin-top: -28px; padding: 0 20px; }
          .ct-hero { padding: 120px 20px 80px; }
          .ct-left, .ct-right { padding: 40px 28px; }
        }
      `}</style>

      <div className="ct-root">

        {/* ── HERO ── */}
        <section className="ct-hero">
          <div className="ct-hero-glow" />
          <div className="ct-hero-inner">
            <span className="ct-eyebrow">We're Here to Help</span>
            <h1 className="ct-hero-title">
              Let's plan your<br /><em>next adventure</em>
            </h1>
            <p className="ct-hero-sub">
              Whether it's a question, a custom itinerary, or a partnership — our team is ready to help you explore India.
            </p>
          </div>
        </section>

        {/* ── FLOATING CARD ── */}
        <div className="ct-card-wrap">
          <div className="ct-card">

            {/* ── LEFT ── */}
            <div className="ct-left">
              <div className="ct-left-glow" />
              <h2 className="ct-left-title">Contact Details</h2>
              <p className="ct-left-sub">Reach us through any of these channels and we'll get back to you promptly.</p>

              <div className="ct-contact-list">
                {CONTACT_ITEMS.map((item) => (
                  item.href ? (
                    <a key={item.label} href={item.href} className="ct-contact-item" target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      <div className="ct-contact-icon"><item.icon size={16} /></div>
                      <div>
                        <div className="ct-contact-label">{item.label}</div>
                        <div className="ct-contact-value">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div key={item.label} className="ct-contact-item">
                      <div className="ct-contact-icon"><item.icon size={16} /></div>
                      <div>
                        <div className="ct-contact-label">{item.label}</div>
                        <div className="ct-contact-value">{item.value}</div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              <button
                className="ct-wa-btn"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
              >
                <MessageCircle size={15} /> Chat on WhatsApp <ArrowRight size={13} style={{ marginLeft: "auto" }} />
              </button>
            </div>

            {/* ── RIGHT ── */}
            <div className="ct-right">
              <h2 className="ct-form-title">Send a Message</h2>
              <p className="ct-form-sub">We typically respond within 2 hours during business hours.</p>

              {status === "success" ? (
                <div className="ct-success">
                  <CheckCircle size={18} />
                  Message sent! We'll be in touch very soon.
                </div>
              ) : (
                <form
                  id="bm-real-form"
                  className="ct-form"
                  action={GOOGLE_FORM_URL}
                  method="POST"
                  target="bm-hidden-iframe"
                  onSubmit={handleSubmit}
                >
                  <div className="ct-form-row">
                    <div className="ct-field">
                      <label className="ct-label" htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        className="ct-input"
                        type="text"
                        name={ENTRY_IDS.fullName}
                        value={formData.fullName}
                        onChange={e => handleChange("fullName", e.target.value)}
                        placeholder="Aarav Sharma"
                        required
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-label" htmlFor="phoneNumber">Phone Number</label>
                      <input
                        id="phoneNumber"
                        className="ct-input"
                        type="tel"
                        name={ENTRY_IDS.phoneNumber}
                        value={formData.phoneNumber}
                        onChange={e => handleChange("phoneNumber", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="ct-field">
                    <label className="ct-label" htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      className="ct-input"
                      type="text"
                      name={ENTRY_IDS.subject}
                      value={formData.subject}
                      onChange={e => handleChange("subject", e.target.value)}
                      placeholder="Custom Rajasthan itinerary…"
                      required
                    />
                  </div>

                  <div className="ct-field">
                    <label className="ct-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className="ct-textarea"
                      name={ENTRY_IDS.message}
                      value={formData.message}
                      onChange={e => handleChange("message", e.target.value)}
                      placeholder="Tell us about your travel plans, dates, budget, or any questions…"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="ct-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      "Sending…"
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* ── INFO CARDS ── */}
        <div className="ct-info-wrap">
          {INFO_CARDS.map((card) => (
            <div key={card.label} className="ct-info-card">
              <div className="ct-info-icon" style={{ background: `${card.color}18` }}>
                <card.icon size={20} style={{ color: card.color }} />
              </div>
              <div className="ct-info-label">{card.label}</div>
              <p className="ct-info-body">{card.body}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Hidden iframe for Google Form */}
      <iframe
        name="bm-hidden-iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
        title="Form submission handler"
      />
    </>
  );
}