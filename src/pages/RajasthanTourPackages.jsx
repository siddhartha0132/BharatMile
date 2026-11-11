// src/pages/RajasthanTourPackages.jsx
// Route: /rajasthan-tour-packages
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Star,
  Phone,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  ShieldCheck,
  Sparkles,
  Compass,
} from "lucide-react";

const WHATSAPP = "919636974688";

const waUrl = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

const packages = [
  {
    id: "jaipur-2d",
    category: "short",
    tag: "Best Seller • Weekend",
    title: "Jaipur 2-Day Royal Heritage Package",
    duration: "2 Days / 1 Night",
    cities: "Jaipur (Pink City)",
    price: "₹4,999",
    priceSub: "per person (Stay + Cab + Sightseeing)",
    rating: "4.9 (340+ bookings)",
    highlights: [
      "1 Night stay in a verified 3★/4★ Jaipur hotel with breakfast",
      "Private AC Cab for 2 full days (Pickup from Airport / Station / Delhi highway)",
      "Amber Fort sunrise visit, Sheesh Mahal, Panna Meena Ka Kund & Jal Mahal",
      "City Palace, Jantar Mantar, Hawa Mahal & Nahargarh Fort sunset view",
      "Authentic Johari & Bapu Bazaar shopping + local food trail guidance",
    ],
    detailLink: "/jaipur-sightseeing-packages",
    detailLabel: "View Jaipur Sightseeing Guide",
    waMessage:
      "Hi BharatMile! I want to book the *Jaipur 2-Day Royal Heritage Package (₹4,999/person)*. Please share available dates, hotel photos, and itinerary.",
  },
  {
    id: "jaipur-ranthambore-3d",
    category: "wildlife",
    tag: "Peak Winter Favourite",
    title: "Jaipur + Ranthambore Tiger Safari Combo",
    duration: "3 Days / 2 Nights",
    cities: "Jaipur → Ranthambore (Sawai Madhopur)",
    price: "₹7,499",
    priceSub: "per person (Resort + Safari + AC Cab)",
    rating: "4.9 (410+ bookings)",
    highlights: [
      "1 Night in Jaipur + 1 Night at a Ranthambore wildlife resort with pool",
      "Confirmed Ranthambore Jungle Safari (Gypsy / Canter) with naturalist guide",
      "Visit UNESCO Ranthambore Fort & Trinetra Ganesh Temple",
      "Amber Fort, Hawa Mahal & City Palace sightseeing in Jaipur",
      "End-to-end private AC cab from Jaipur Airport/Railway Station",
    ],
    detailLink: "/ranthambore-safari-tours",
    detailLabel: "Explore Ranthambore Safari Zones",
    waMessage:
      "Hi BharatMile! I am interested in the *3-Day Jaipur + Ranthambore Tiger Safari Combo (from ₹7,499/person)*. Please check safari permit availability and share quote.",
  },
  {
    id: "jaisalmer-desert-3d",
    category: "wildlife",
    tag: "Nov–Feb Desert Special",
    title: "Jaisalmer Golden Fort & Sam Sand Dunes Luxury Camp",
    duration: "3 Days / 2 Nights",
    cities: "Jaisalmer → Sam Sand Dunes → Longewala / Tanot",
    price: "₹6,999",
    priceSub: "per person (City Hotel + Swiss Desert Camp)",
    rating: "4.9 (290+ bookings)",
    highlights: [
      "1 Night in Jaisalmer Golden City + 1 Night in Luxury Swiss Tent at Sam Sand Dunes",
      "Sunset Camel Safari & thrilling 4x4 Jeep Dune Bashing in the Thar Desert",
      "Rajasthani Kalbelia folk dance, bonfire & buffet Rajasthani dinner under the stars",
      "Guided tour of living Jaisalmer Fort, Patwon Ki Haveli, Gadisar Lake & Kuldhara",
      "Optional day excursion to Tanot Mata Temple & Longewala War Memorial",
    ],
    detailLink: "/city/jaisalmer",
    detailLabel: "Read Jaisalmer Travel Guide",
    waMessage:
      "Hi BharatMile! I want to book the *3-Day Jaisalmer Golden Fort & Sam Sand Dunes Luxury Camp Package (from ₹6,999/person)*. Please share camp photos & availability.",
  },
  {
    id: "udaipur-kumbhalgarh-4d",
    category: "short",
    tag: "Couples & Families",
    title: "Udaipur City of Lakes & Kumbhalgarh Tour",
    duration: "4 Days / 3 Nights",
    cities: "Udaipur → Kumbhalgarh / Nathdwara / Chittorgarh",
    price: "₹9,999",
    priceSub: "per person (Lakeview Stay + Private Cab)",
    rating: "4.8 (220+ bookings)",
    highlights: [
      "3 Nights in Udaipur with daily breakfast & private AC sightseeing cab",
      "Evening Boat Ride on Lake Pichola with views of Jag Mandir & Taj Lake Palace",
      "Udaipur City Palace, Saheliyon Ki Bari, Bagore Ki Haveli folk show & Sajjangarh",
      "Day trip to UNESCO Kumbhalgarh Fort (world's 2nd longest wall) or Chittorgarh",
      "Optional Shrinathji Temple (Nathdwara) & Eklingji darshan",
    ],
    detailLink: "/city/udaipur",
    detailLabel: "Read Udaipur Travel Guide",
    waMessage:
      "Hi BharatMile! I want to book the *4-Day Udaipur City of Lakes Package (from ₹9,999/person)*. Please share itinerary and hotel options.",
  },
  {
    id: "mewar-marwar-5d",
    category: "circuit",
    tag: "Most Popular 5-Day Circuit",
    title: "Classic Rajasthan: Jaipur – Jodhpur – Udaipur",
    duration: "5 Days / 4 Nights",
    cities: "Jaipur (2N) → Jodhpur (1N) → Udaipur (1N)",
    price: "₹13,999",
    priceSub: "per person (Hotels + Breakfast + Private AC Cab)",
    rating: "4.9 (520+ bookings)",
    highlights: [
      "Covers Rajasthan's 3 iconic cities: Pink City, Blue City & City of Lakes",
      "Jaipur: Amber Fort, Hawa Mahal, City Palace & Jantar Mantar",
      "En-route Pushkar Brahma Temple & Ajmer Sharif visit",
      "Jodhpur: Towering Mehrangarh Fort, Jaswant Thada & Blue City walk",
      "Udaipur: Ranakpur Jain Temples en route, Lake Pichola & City Palace",
    ],
    detailLink: "/city/jodhpur",
    detailLabel: "Explore Jodhpur Guide",
    waMessage:
      "Hi BharatMile! I want a quote for the *5-Day Jaipur – Jodhpur – Udaipur Classic Rajasthan Package (from ₹13,999/person)*. Please share full day-wise plan.",
  },
  {
    id: "grand-rajasthan-7d",
    category: "circuit",
    tag: "Complete Winter Royal Tour",
    title: "Grand Rajasthan: Jaipur – Pushkar – Jodhpur – Jaisalmer – Udaipur",
    duration: "7 Days / 6 Nights",
    cities: "Jaipur → Pushkar → Jodhpur → Jaisalmer (Camp) → Udaipur",
    price: "₹19,999",
    priceSub: "per person (All Stays + Desert Camp + Dedicated Cab)",
    rating: "5.0 (380+ bookings)",
    highlights: [
      "The ultimate November–February Rajasthan itinerary for families, couples & NRI guests",
      "Includes 1 Night Luxury Desert Camp at Sam Sand Dunes with Camel Safari & Folk Night",
      "Covers Amber Fort, Pushkar Lake, Mehrangarh Fort, Jaisalmer Fort & Lake Pichola",
      "Dedicated chauffeur-driven AC Sedan / SUV / Tempo Traveller for all 7 days",
      "100% customizable: add Ranthambore Tiger Safari or Jawai Leopard Safari easily",
    ],
    detailLink: "/city",
    detailLabel: "See All Rajasthan Destinations",
    waMessage:
      "Hi BharatMile! I want to book the *7-Day Grand Rajasthan Tour (Jaipur–Jodhpur–Jaisalmer–Udaipur from ₹19,999/person)*. Please customize it for my dates.",
  },
];

const cabOptions = [
  {
    vehicle: "AC Sedan (Dzire / Etios)",
    seats: "Up to 4 Passengers",
    rate: "₹11 – ₹12 / km",
    ideal: "Couples & small families (Jaipur local ₹2,200/day)",
  },
  {
    vehicle: "AC SUV (Ertiga / Rumion)",
    seats: "Up to 6 Passengers",
    rate: "₹14 – ₹15 / km",
    ideal: "Family trips to Ranthambore, Udaipur & Jaisalmer",
  },
  {
    vehicle: "Toyota Innova Crysta",
    seats: "6–7 Passengers (Luxury)",
    rate: "₹18 – ₹20 / km",
    ideal: "Long 5–7 day Rajasthan circuits in maximum comfort",
  },
  {
    vehicle: "Maharaja Tempo Traveller",
    seats: "12 / 17 / 20 Seater",
    rate: "₹24 – ₹28 / km",
    ideal: "Group tours, family weddings & corporate outings",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are November, December, January and February the best months to visit Rajasthan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "November to February is peak winter season in Rajasthan with sunny 20°C–27°C daytime weather. It is ideal for exploring hill forts in Jaipur and Jodhpur, spotting Bengal tigers in Ranthambore, and enjoying overnight desert camping at Sam Sand Dunes in Jaisalmer.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a 5-day or 7-day Rajasthan tour package cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With BharatMile, a 2-day Jaipur package starts at ₹4,999 per person, a 3-day Jaisalmer desert camp or Ranthambore combo starts at ₹6,999–₹7,499 per person, a 5-day Jaipur–Jodhpur–Udaipur package starts at ₹13,999 per person, and a 7-day Grand Rajasthan package starts at ₹19,999 per person including verified hotels, breakfast, and private AC cab.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a Rajasthan tour or safari with BharatMile on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply tap any 'Book on WhatsApp' button on our website or message +91-9636974688 with your travel month, number of guests, and preferred cities. Our Jaipur-based experts reply within minutes with a custom itinerary and transparent quote.",
      },
    },
    {
      "@type": "Question",
      name: "Can we customize our Rajasthan itinerary to combine Ranthambore Safari and Jaisalmer Desert Camp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Every BharatMile itinerary is 100% private and customizable. We frequently combine Ranthambore Tiger Safari, Jaipur, Jodhpur, Jaisalmer Sam Sand Dunes, and Udaipur into a custom 6 to 9 day winter trip.",
      },
    },
    {
      "@type": "Question",
      name: "Should we book Ranthambore safari permits and Jaisalmer desert camps in advance for November–January?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because November through January sees the highest tourist footfall (especially around Diwali, Pushkar Fair, Christmas, and New Year), core Ranthambore zones (Zones 1–5) and top Swiss luxury camps in Jaisalmer sell out weeks in advance. Message us on WhatsApp to lock in live availability.",
      },
    },
  ],
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "BharatMile",
  url: "https://bharatmile.com/rajasthan-tour-packages",
  telephone: "+91-9636974688",
  areaServed: "Rajasthan",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rajasthan Winter Tour Packages 2026–27",
    itemListElement: packages.map((p) => ({
      "@type": "Offer",
      name: p.title,
      price: p.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      description: `${p.duration} covering ${p.cities}. ${p.highlights[0]}`,
      url: `https://bharatmile.com/rajasthan-tour-packages#${p.id}`,
    })),
  },
};

const CITY_OPTIONS = [
  "Jaipur",
  "Ranthambore Safari",
  "Udaipur",
  "Jaisalmer Desert Camp",
  "Jodhpur",
  "Pushkar",
  "Jawai Leopard Safari",
  "Bikaner",
];

export default function RajasthanTourPackages() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCities, setSelectedCities] = useState([
    "Jaipur",
    "Ranthambore Safari",
    "Udaipur",
  ]);
  const [travelMonth, setTravelMonth] = useState("November 2026 (Peak Winter)");
  const [duration, setDuration] = useState("5–6 Days");
  const [guests, setGuests] = useState("Family (3–5 Guests)");
  const [stayTier, setStayTier] = useState("4★ Heritage & Luxury Camp");

  const toggleCity = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handleCustomQuote = () => {
    const citiesList =
      selectedCities.length > 0 ? selectedCities.join(", ") : "All Rajasthan";
    const msg = `Hi BharatMile! 🐪 I want a custom Rajasthan Tour Quote:\n• *Cities:* ${citiesList}\n• *Travel Month:* ${travelMonth}\n• *Duration:* ${duration}\n• *Travellers:* ${guests}\n• *Hotel Preference:* ${stayTier}\n\nPlease share the best itinerary and package price!`;
    window.open(waUrl(msg), "_blank", "noopener,noreferrer");
  };

  const visiblePackages =
    activeFilter === "all"
      ? packages
      : packages.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#fcfaf7] text-[#1c1c1e]">
      <Helmet>
        <title>
          Rajasthan Tour Packages 2026–27 — Jaipur, Ranthambore, Jaisalmer & Udaipur | BharatMile
        </title>
        <meta
          name="description"
          content="Book Rajasthan tour packages for November–February peak winter season. Jaipur 2D at ₹4,999, Jaisalmer Desert Camp ₹6,999, Ranthambore Safari ₹1,400, 5D/7D Royal Circuits. Instant WhatsApp quotes!"
        />
        <link
          rel="canonical"
          href="https://bharatmile.com/rajasthan-tour-packages"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(offerCatalogSchema)}
        </script>
      </Helmet>

      {/* ── HERO ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1b0f0a 0%, #33190e 52%, #18130d 100%)",
          padding: "96px 24px 76px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 40%, rgba(193,100,74,0.22) 0%, transparent 52%), radial-gradient(circle at 78% 28%, rgba(201,151,42,0.16) 0%, transparent 48%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 20,
            }}
          >
            <Link
              to="/"
              style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
            >
              Home
            </Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#e8c56b" }}>Rajasthan Tour Packages</span>
          </nav>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(201,151,42,0.2)",
              border: "1px solid rgba(232,197,107,0.5)",
              color: "#e8c56b",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: "7px 16px",
              borderRadius: 100,
              marginBottom: 22,
            }}
          >
            <Sparkles size={13} /> Nov – Feb Peak Rajasthan Season Live • Direct
            Jaipur Operator
          </div>

          <h1
            style={{
              fontFamily:
                "'Cormorant Garamond', 'CG Fallback', 'CG Fallback Android', serif",
              fontSize: "clamp(2.3rem, 5vw, 3.9rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 18,
            }}
          >
            Rajasthan Tour Packages 2026–27
            <br />
            <span style={{ color: "#e8c56b", fontStyle: "italic" }}>
              Forts, Tiger Safaris, Desert Camps &amp; Royal Lakes
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.08rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 670,
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            November to February is the best time to experience Rajasthan. Book
            curated family, couple &amp; group tours covering{" "}
            <strong>
              Jaipur, Ranthambore, Jaisalmer, Udaipur, Jodhpur &amp; Pushkar
            </strong>{" "}
            with a local Jaipur team — verified stays, private AC cabs, and
            instant WhatsApp support.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={waUrl(
                "Hi BharatMile! I am planning a Rajasthan trip this winter and want your best tour packages & quote."
              )}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#15803d",
                color: "#fff",
                padding: "15px 28px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: "0.94rem",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                boxShadow: "0 10px 28px rgba(22,163,74,0.35)",
              }}
            >
              <Phone size={16} /> Chat on WhatsApp (2-Min Quote)
            </a>
            <a
              href="#packages-grid"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.4)",
                color: "#fff",
                padding: "15px 26px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: "0.92rem",
                textDecoration: "none",
              }}
            >
              Compare 6 Winter Packages <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK TRUST STRIP ── */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #ece5dc",
          padding: "22px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
            gap: 16,
            textAlign: "center",
          }}
        >
          {[
            { label: "Peak Weather", value: "20°C – 27°C (Nov–Feb)" },
            { label: "Starting Package", value: "₹4,999 / Person" },
            { label: "Ranthambore Safari", value: "₹1,400 / Seat" },
            { label: "Jaisalmer Camp", value: "Swiss Tent + Safari" },
            { label: "Local Office", value: "C-Scheme, Jaipur" },
            { label: "WhatsApp Support", value: "24×7 Live Help" },
          ].map((item) => (
            <div key={item.label} style={{ padding: "8px 6px" }}>
              <div
                style={{ fontSize: 18, fontWeight: 700, color: "#a8523b" }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#666",
                  marginTop: 4,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <main style={{ maxWidth: 1140, margin: "0 auto", padding: "56px 24px" }}>
        {/* ── PACKAGES GRID ── */}
        <section id="packages-grid" style={{ marginBottom: 72 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#a8523b",
              }}
            >
              Most Booked in November, December &amp; January
            </span>
            <h2
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'CG Fallback', 'CG Fallback Android', serif",
                fontSize: "clamp(2rem, 4vw, 2.9rem)",
                fontWeight: 700,
                marginTop: 6,
                marginBottom: 10,
              }}
            >
              Best-Selling Rajasthan Winter Tour Packages
            </h2>
            <p
              style={{
                color: "#555",
                maxWidth: 640,
                margin: "0 auto 24px",
                fontSize: "0.98rem",
              }}
            >
              Transparent pricing with zero hidden fees. Click any package to
              customize dates, hotel category, or pickup city directly on
              WhatsApp.
            </p>

            {/* Filter Pills */}
            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { id: "all", label: "All Rajasthan Packages (6)" },
                { id: "short", label: "2–4 Days Short Getaways" },
                { id: "wildlife", label: "Tiger Safari & Desert Camp" },
                { id: "circuit", label: "5–7 Days Royal Circuits" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 100,
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border:
                      activeFilter === tab.id
                        ? "1.5px solid #a8523b"
                        : "1.5px solid #e2d7c8",
                    background: activeFilter === tab.id ? "#a8523b" : "#fff",
                    color: activeFilter === tab.id ? "#fff" : "#333",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {visiblePackages.map((pkg) => (
              <article
                key={pkg.id}
                id={pkg.id}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  border: "1px solid #eadfce",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 30px rgba(28,20,12,0.05)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        background: "#fdf3eb",
                        color: "#a8523b",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "5px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {pkg.tag}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#85580a",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <Star size={13} fill="currentColor" /> {pkg.rating}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', 'CG Fallback', 'CG Fallback Android', serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      marginBottom: 8,
                    }}
                  >
                    {pkg.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 14,
                      fontSize: "0.83rem",
                      color: "#666",
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Clock size={14} color="#a8523b" /> {pkg.duration}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <MapPin size={14} color="#a8523b" /> {pkg.cities}
                    </span>
                  </div>

                  <div
                    style={{
                      background: "#faf6f0",
                      borderRadius: 10,
                      padding: "12px 16px",
                      marginBottom: 18,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.65rem",
                        fontWeight: 800,
                        color: "#1c1c1e",
                      }}
                    >
                      {pkg.price}
                    </span>{" "}
                    <span style={{ fontSize: "0.82rem", color: "#555" }}>
                      {pkg.priceSub}
                    </span>
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 22px 0",
                      display: "grid",
                      gap: 9,
                    }}
                  >
                    {pkg.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: "0.88rem",
                          color: "#333",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle
                          size={15}
                          color="#16a34a"
                          style={{ flexShrink: 0, marginTop: 3 }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "grid", gap: 10 }}>
                  <a
                    href={waUrl(pkg.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "#15803d",
                      color: "#fff",
                      padding: "13px 18px",
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <Phone size={15} /> Book / Customize on WhatsApp
                  </a>
                  <Link
                    to={pkg.detailLink}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid #e5d9c8",
                      color: "#a8523b",
                      fontWeight: 600,
                      fontSize: "0.84rem",
                      textDecoration: "none",
                    }}
                  >
                    {pkg.detailLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── INTERACTIVE CUSTOM TRIP BUILDER ── */}
        <section
          id="custom-trip-builder"
          style={{
            background: "linear-gradient(135deg, #1c1c1e 0%, #2b2118 100%)",
            borderRadius: 18,
            padding: "40px 28px",
            color: "#fff",
            marginBottom: 72,
            border: "1px solid rgba(232,197,107,0.3)",
          }}
        >
          <div style={{ maxWidth: 920, margin: "0 auto" }}>
            <span
              style={{
                color: "#e8c56b",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Build Your Own Rajasthan Itinerary in 30 Seconds
            </span>
            <h2
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'CG Fallback', 'CG Fallback Android', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                marginTop: 6,
                marginBottom: 10,
              }}
            >
              Get a Custom WhatsApp Quote From Our Jaipur Team
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.94rem",
                marginBottom: 24,
              }}
            >
              Select the Rajasthan cities you want to visit, your travel month,
              and group size — we will send you a tailored route map, hotel
              options, and best winter rates directly on WhatsApp.
            </p>

            {/* Step 1: Multi-select Cities */}
            <div style={{ marginBottom: 22 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#e8c56b",
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                1. Tap Cities / Experiences to Include:
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {CITY_OPTIONS.map((city) => {
                  const active = selectedCities.includes(city);
                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() => toggleCity(city)}
                      style={{
                        padding: "9px 15px",
                        borderRadius: 100,
                        fontSize: "0.84rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        border: active
                          ? "1.5px solid #e8c56b"
                          : "1.5px solid rgba(255,255,255,0.22)",
                        background: active
                          ? "rgba(232,197,107,0.22)"
                          : "rgba(255,255,255,0.06)",
                        color: active ? "#e8c56b" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {active ? "✓ " : "+ "}
                      {city}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dropdowns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 14,
                marginBottom: 24,
              }}
            >
              <div>
                <label
                  htmlFor="builder-month"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 6,
                  }}
                >
                  Travel Month
                </label>
                <select
                  id="builder-month"
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    borderRadius: 8,
                    background: "#fff",
                    color: "#1c1c1e",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    border: "none",
                  }}
                >
                  <option>November 2026 (Peak Winter)</option>
                  <option>December 2026 (Christmas / New Year)</option>
                  <option>January 2027 (Winter Peak)</option>
                  <option>February – March 2027</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="builder-duration"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 6,
                  }}
                >
                  Trip Duration
                </label>
                <select
                  id="builder-duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    borderRadius: 8,
                    background: "#fff",
                    color: "#1c1c1e",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    border: "none",
                  }}
                >
                  <option>2–3 Days (Weekend Escape)</option>
                  <option>4–5 Days (Short Circuit)</option>
                  <option>5–6 Days</option>
                  <option>7–9 Days (Complete Rajasthan)</option>
                  <option>10+ Days (Royal Grand Tour)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="builder-guests"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 6,
                  }}
                >
                  Travellers
                </label>
                <select
                  id="builder-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    borderRadius: 8,
                    background: "#fff",
                    color: "#1c1c1e",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    border: "none",
                  }}
                >
                  <option>Couple (2 Guests)</option>
                  <option>Family (3–5 Guests)</option>
                  <option>Group (6–12 Guests)</option>
                  <option>Large Group (12+ Guests)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="builder-tier"
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 6,
                  }}
                >
                  Stay Category
                </label>
                <select
                  id="builder-tier"
                  value={stayTier}
                  onChange={(e) => setStayTier(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px 12px",
                    borderRadius: 8,
                    background: "#fff",
                    color: "#1c1c1e",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    border: "none",
                  }}
                >
                  <option>3★ Verified Family Hotels</option>
                  <option>4★ Heritage &amp; Luxury Camp</option>
                  <option>5★ Luxury Palace Stays</option>
                  <option>Only Cab + Safari Permits</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCustomQuote}
              style={{
                width: "100%",
                padding: "15px 24px",
                borderRadius: 8,
                background: "#15803d",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.96rem",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <Phone size={17} /> Get My Custom Rajasthan Quote on WhatsApp
            </button>
          </div>
        </section>

        {/* ── PRIVATE CAB & TEMPO TRAVELLER RATES ── */}
        <section style={{ marginBottom: 72 }}>
          <h2
            style={{
              fontFamily:
                "'Cormorant Garamond', 'CG Fallback', 'CG Fallback Android', serif",
              fontSize: "2.1rem",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Rajasthan Private Sightseeing Cab &amp; Tempo Traveller Rates
          </h2>
          <p style={{ color: "#555", marginBottom: 24, fontSize: "0.96rem" }}>
            Already booked your hotels? Hire a clean, GPS-verified AC cab with
            an experienced Rajasthan heritage driver from Jaipur, Udaipur,
            Jodhpur, or Delhi.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {cabOptions.map((c) => (
              <div
                key={c.vehicle}
                style={{
                  background: "#fff",
                  border: "1px solid #eadfce",
                  borderRadius: 12,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    fontSize: "1.12rem",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {c.vehicle}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#a8523b",
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  {c.seats} • {c.rate}
                </div>
                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "#555",
                    marginBottom: 16,
                    lineHeight: 1.5,
                  }}
                >
                  {c.ideal}
                </p>
                <a
                  href={waUrl(
                    `Hi BharatMile! I want to inquire about hiring an *${c.vehicle}* for my Rajasthan trip.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#15803d",
                    textDecoration: "none",
                  }}
                >
                  Check Cab Availability on WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── NOVEMBER TO FEBRUARY RAJASTHAN SEASON GUIDE ── */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #eadfce",
            borderRadius: 14,
            padding: "36px 28px",
            marginBottom: 72,
          }}
        >
          <h2
            style={{
              fontFamily:
                "'Cormorant Garamond', 'CG Fallback', 'CG Fallback Android', serif",
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Why November to February is Peak Tourist Season in Rajasthan
          </h2>
          <p style={{ color: "#444", lineHeight: 1.75, marginBottom: 16 }}>
            From <strong>November through February</strong>, Rajasthan
            experiences crisp, sunny winter days (20°C to 27°C) and cool starry
            nights (8°C to 14°C). Whether you are climbing{" "}
            <Link
              to="/jaipur-sightseeing-packages"
              style={{ color: "#a8523b", fontWeight: 600 }}
            >
              Amber Fort in Jaipur
            </Link>
            , tracking royal Bengal tigers in{" "}
            <Link
              to="/ranthambore-safari-tours"
              style={{ color: "#a8523b", fontWeight: 600 }}
            >
              Ranthambore National Park
            </Link>
            , or staying at a luxury Swiss tent in{" "}
            <Link
              to="/city/jaisalmer"
              style={{ color: "#a8523b", fontWeight: 600 }}
            >
              Jaisalmer's Sam Sand Dunes
            </Link>
            , winter offers the most comfortable weather of the year.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginTop: 22,
            }}
          >
            {[
              {
                month: "November",
                focus: "Pushkar Fair, Diwali & Ranthambore Opening",
                desc: "Lush post-monsoon lakes in Ranthambore, Pushkar Camel Fair cultural festivities, and pleasant fort walks in Jaipur & Jodhpur.",
              },
              {
                month: "December",
                focus: "Jaisalmer Desert Camping, Christmas & New Year",
                desc: "Peak demand for Sam Sand Dunes luxury camps, Udaipur lakefront palaces, and family winter-vacation circuits.",
              },
              {
                month: "January",
                focus: "Jaipur Literature Fest, Bikaner Camel Fest & Wildlife",
                desc: "Crisp mornings for Jawai leopard safaris, Ranthambore morning Gypsies, and heritage haveli stays.",
              },
              {
                month: "February",
                focus: "Jaisalmer Desert Festival & Romantic Udaipur",
                desc: "Golden sunshine across Udaipur, Jodhpur, and Jaisalmer before summer warmth begins in late March.",
              },
            ].map((m) => (
              <div
                key={m.month}
                style={{
                  background: "#faf6f0",
                  padding: 18,
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    color: "#a8523b",
                    fontSize: "1rem",
                  }}
                >
                  {m.month}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    margin: "4px 0 8px",
                  }}
                >
                  {m.focus}
                </div>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "#555",
                    lineHeight: 1.55,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily:
                "'Cormorant Garamond', 'CG Fallback', 'CG Fallback Android', serif",
              fontSize: "2.1rem",
              fontWeight: 700,
              marginBottom: 22,
            }}
          >
            Frequently Asked Questions — Rajasthan Winter Tours
          </h2>
          <div style={{ display: "grid", gap: 14 }}>
            {faqSchema.mainEntity.map((q) => (
              <div
                key={q.name}
                style={{
                  background: "#fff",
                  border: "1px solid #eadfce",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "#1c1c1e",
                  }}
                >
                  {q.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#555",
                    lineHeight: 1.65,
                  }}
                >
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

