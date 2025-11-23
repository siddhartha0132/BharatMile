import {
  MapPin,
  Calendar,
  Users,
  Search,
  Award,
  ShieldCheck,
  Star,
  ArrowRight,
  Briefcase,
  Phone,
} from 'lucide-react';

import { Link } from "react-router-dom"; 

import HeroBannerImage from "../assets/HeroBannerImage1.jpg";
import jaipur from "../assets/jaipur.jpeg";
import udaipur from "../assets/udaipur.jpeg";
import delhi from "../assets/delhi.jpeg";
import TajMahal from "../assets/taj-mahal.jpeg";
import Water from "../assets/keralaBackWater.jpg";
import temple from "../assets/goldentemple.jpg";

/* -------------------- CONFIGURATION CONSTANTS -------------------- */
// Using the path you provided for the main City/Destinations page
const CITIES_PAGE_LINK = "/city";    

// Using the number you provided (removing the '+') for the WhatsApp link
const WHATSAPP_NUMBER = "919636974688"; 

/* -------------------- POPULAR CITIES -------------------- */
const popularCities = [
  {
    name: 'Jaipur',
    description: 'The vibrant "Pink City" of Rajasthan.',
    image: jaipur,
    link: '/city/jaipur'
  },
  {
    name: 'Udaipur',
    description: 'The romantic "City of Lakes".',
    image: udaipur,
    link: '/city/udaipur'
  },
  {
    name: 'Delhi',
    description: 'The heart of India, where history meets modern.',
    image: delhi,
    link: '/city/delhi'
  },
];

/* -------------------- FEATURES -------------------- */
const features = [
  {
    icon: Award,
    title: 'Curated Experiences',
    description: 'Handpicked tours and activities that you won\'t find anywhere else.',
  },
  {
    icon: Briefcase,
    title: 'Local Expert Guides',
    description: 'Travel with knowledgeable locals who bring each destination to life.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Booking',
    description: 'Your peace of mind is our top priority. Book with confidence.',
  },
];

/* -------------------- EXPERIENCES (LINKED) -------------------- */
const experiences = [
  {
    name: 'Taj Mahal Sunrise Tour',
    location: 'Agra',
    image: TajMahal,
    link: '/top-10-places-to-visit-in-india'
  },
  {
    name: 'Kerala Backwaters',
    location: 'Alleppey',
    image: Water,
    link: '/blogs/kerala-backwaters'
  },
  {
    name: 'Golden Temple Visit',
    location: 'Amritsar',
    image: temple,
    link: '/blogs/amritsar-golden-temple-langar'
  },
];

/* -------------------- TESTIMONIALS -------------------- */
const testimonials = [
  {
    quote: '"BharatMile made our trip to Rajasthan unforgettable. Every detail was perfect!"',
    name: 'Priya & Rohan',
    location: 'Mumbai',
    avatar: 'https://placehold.co/100x100/E2E8F0/475569?text=P+R'
  },
  {
    name: 'Anil Kumar',
    location: 'Bengaluru',
    quote: '"The Kerala backwaters tour was magical. The expert guide was fantastic. Highly recommend!"',
    avatar: 'https://placehold.co/100x100/E2E8F0/475569?text=A+K'
  },
  {
    name: 'Sarah J.',
    location: 'New York',
    quote: '"I felt safe and supported traveling solo in Delhi. The secure booking was a big plus."',
    avatar: 'https://placehold.co/100x100/E2E8F0/475569?text=S+J'
  },
];


/* -------------------- HOME COMPONENT -------------------- */
export default function Home() {

  // Function to open WhatsApp link
  const handleContactClick = () => {
    // The wa.me link directly opens WhatsApp chat for the provided number.
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-gray-50">

      {/* HERO SECTION */}
      <section
        className="h-[80vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${HeroBannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Your Gateway to Incredible India
          </h1>
          <p className="text-lg md:text-xl mb-8 md:mb-12 drop-shadow-md">
            Discover, plan, and book your perfect trip with BharatMile.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* EXPLORE TOURS BUTTON (Linked to /city) */}
            <Link 
              to={CITIES_PAGE_LINK}
              className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 text-white font-semibold flex items-center justify-center shadow-md hover:shadow-lg transition-all text-lg w-full sm:w-auto"
            >
              Explore Tours
              <ArrowRight className="ml-2" size={20} />
            </Link>

            {/* CONTACT US BUTTON (Linked to WhatsApp) */}
            <button 
              onClick={handleContactClick}
              className="bg-white/10 backdrop-blur-sm border border-white/50 px-8 py-3 rounded-lg hover:bg-white/20 text-white font-semibold flex items-center justify-center shadow-md hover:shadow-lg transition-all text-lg w-full sm:w-auto"
            >
              <Phone className="mr-2" size={20} />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* WHY BOOK WITH US */}
      <section className="max-w-6xl mx-auto py-16 md:py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
          Why Book with BharatMile?
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We provide more than just bookings. We offer complete, safe, and unforgettable travel experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="inline-block p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR CITIES */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Popular Cities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCities.map((city) => (
              <Link
                to={city.link}
                key={city.name}
                className="group relative h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                  <p className="text-gray-200 mb-2">{city.description}</p>
                  <div className="flex items-center font-semibold text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="max-w-6xl mx-auto py-16 md:py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
          Unforgettable Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <div key={exp.name} className="group rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 uppercase mb-1">{exp.location}</p>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{exp.name}</h3>

                <Link
                  to={exp.link}
                  className="font-semibold text-blue-600 inline-flex items-center group-hover:text-blue-800"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  <Star size={20} /><Star size={20} /><Star size={20} /><Star size={20} /><Star size={20} />
                </div>

                <p className="text-lg italic mb-6">{testimonial.quote}</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4 border-2 border-white/50"
                  />
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm opacity-80">{testimonial.location}</p>
                  </div>
                </div>
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
          <p className="text-lg text-gray-300 mb-8">
            Let BharatMile help you plan the trip of a lifetime. Explore all destinations or get in touch with our experts.
          </p>

          {/* EXPLORE ALL DESTINATIONS BUTTON (Linked to /city) */}
          <Link 
            to={CITIES_PAGE_LINK}
            className="bg-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Explore All Destinations
          </Link>
        </div>
      </section>

    </div>
  );
}