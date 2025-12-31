import { useEffect } from "react";
import {
  Award,
  Briefcase,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

// WEBP / JPG IMAGES  (keeping exactly as you wrote)
import HeroBannerImage from "../assets/HeroBannerImagel.webp";
import jaipur from "../assets/jaipur.jpg";
import udaipur from "../assets/udaipur.jpg";
import delhi from "../assets/delhi.jpg";
import TajMahal from "../assets/taj-mahal.jpg";
import Water from "../assets/keralaBackWaterl.webp";
import temple from "../assets/goldentemple.webp";

const CITIES_PAGE_LINK = "/city";
const WHATSAPP_NUMBER = "919636974688";

export default function Home() {

  useEffect(() => {
    document.title =
      "BharatMile — Explore Incredible India | Travel Guides & Tours";

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Explore India’s top destinations with BharatMile. Detailed guides, itineraries, hidden gems, and curated cultural experiences."
      );
  }, []);

  const features = [
    {
      icon: Award,
      title: "Curated Experiences",
      description: "Handpicked travel experiences with cultural depth.",
    },
    {
      icon: Briefcase,
      title: "Local Expert Guides",
      description: "Trusted local guides who know every hidden gem.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure Booking",
      description: "Protected bookings with complete transparency.",
    },
  ];

  const popularCities = [
    { name: "Jaipur", image: jaipur, description: "The vibrant Pink City.", link: "/city/jaipur" },
    { name: "Udaipur", image: udaipur, description: "The romantic City of Lakes.", link: "/city/udaipur" },
    { name: "Delhi", image: delhi, description: "India’s historical capital.", link: "/city/delhi" },
  ];

  const experiences = [
    { name: "Taj Mahal Sunrise Tour", location: "Agra", image: TajMahal, link: "/top-10-places-to-visit-in-india" },
    { name: "Kerala Backwaters Cruise", location: "Alleppey", image: Water, link: "/blogs/kerala-backwaters" },
    { name: "Golden Temple Visit", location: "Amritsar", image: temple, link: "/blogs/amritsar-golden-temple-langar" },
  ];

  const testimonials = [
    { quote: "“BharatMile made our Rajasthan trip unforgettable.”", name: "Priya & Rohan", location: "Mumbai" },
    { quote: "“The Kerala Backwaters experience was magical!”", name: "Anil Kumar", location: "Bangalore" },
    { quote: "“I felt safe traveling solo in Delhi with BharatMile.”", name: "Sarah J.", location: "New York" },
  ];

  return (
    <div className="w-full bg-gray-50">

      {/* ⭐ HERO SECTION — restored background concept */}
      <section
        className="relative h-[80vh] md:h-[95vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(${HeroBannerImage})`,
        }}
      >
        <div className="text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Explore Incredible India with BharatMile
          </h1>

          <p className="text-lg md:text-xl mb-10 opacity-95">
            Travel guides, curated tours, and cultural experiences — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={CITIES_PAGE_LINK}
              className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg flex items-center text-lg"
            >
              Explore Tours <ArrowRight className="ml-2" size={20} />
            </Link>

            <button
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`)}
              className="bg-white/20 border border-white/30 px-8 py-3 rounded-lg hover:bg-white/30 transition shadow-lg backdrop-blur-sm flex items-center text-lg"
            >
              <Phone className="mr-2" size={20} />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Travel with BharatMile?
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          Experience India with trusted local experts, curated destinations, and seamless travel planning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-block p-5 bg-blue-100 text-blue-600 rounded-full mb-5">
                <f.icon size={34} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR CITIES */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Cities in India
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCities.map((city) => (
              <Link
                key={city.name}
                to={city.link}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                  <p className="text-gray-300">{city.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Unforgettable Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.name} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <img
                src={exp.image}
                alt={exp.name}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover group-hover:scale-110 transition"
              />

              <div className="p-6">
                <p className="text-blue-600 text-sm font-semibold uppercase">
                  {exp.location}
                </p>

                <h3 className="text-xl font-semibold mb-4">{exp.name}</h3>

                <Link
                  to={exp.link}
                  className="text-blue-600 font-semibold flex items-center hover:text-blue-800"
                >
                  Learn More <ArrowRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Travelers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg">
                <div className="flex text-yellow-300 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={20} />)}
                </div>

                <p className="text-lg italic mb-6">{t.quote}</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm opacity-80">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Explore curated guides, premium tours, and unforgettable experiences.
          </p>

          <Link
            to={CITIES_PAGE_LINK}
            className="bg-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-xl"
          >
            Explore All Destinations
          </Link>
        </div>
      </section>
    </div>
  );
}
