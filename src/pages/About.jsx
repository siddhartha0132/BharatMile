import React from 'react';
import { MapPin, Users, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const CITIES_PAGE_LINK = "/city";
const WHATSAPP_NUMBER = "919636974688";

export default function About() {

  const handleContactClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  return (
    <div className="bg-white font-sans text-slate-800">

      {/* HERO SECTION */}
      <div className="relative bg-slate-50 py-20 md:py-32 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Discover the Soul of India
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
            Every Mile Tells a <span className="text-indigo-600">Story.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            BharatMile is more than a travel platform. We curate authentic Indian experiences by connecting travelers with incredible destinations.
          </p>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* OUR STORY – text only now */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
          We Bridge the Gap Between <br />
          <span className="text-indigo-600">Tourist and Traveler</span>
        </h2>

        <p className="text-slate-600 mb-6 leading-relaxed">
          India is vast, chaotic, and beautiful. BharatMile was created to help travelers find authentic, trusted, and unforgettable experiences with ease.
        </p>

        <p className="text-slate-600 mb-8 leading-relaxed">
          From Rajasthan’s deserts to Kerala’s backwaters, we bring you insights, guides, routes, safety tips, and hidden gems — all verified and updated.
        </p>

        <button className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all mx-auto">
          Read Our Full Story <ArrowRight size={20} />
        </button>
      </div>

      {/* VALUES / WHY CHOOSE US */}
      <div className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Travelers Trust Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Your journey matters — and so does your safety, trust, and experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors group">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Information</h3>
              <p className="text-slate-400 leading-relaxed">
                Updated routes, entry timings, safety information & real reviews.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors group">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Curated for You</h3>
              <p className="text-slate-400 leading-relaxed">
                Travel plans matched to your style — adventure, heritage, food, culture.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors group">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-slate-400 leading-relaxed">
                Trusted by thousands of travelers sharing real tips & experiences.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-slate-900">50+</p>
            <p className="text-slate-500 text-sm mt-1">Cities Covered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">10k+</p>
            <p className="text-slate-500 text-sm mt-1">Monthly Visitors</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">500+</p>
            <p className="text-slate-500 text-sm mt-1">Hidden Gems</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">4.9/5</p>
            <p className="text-slate-500 text-sm mt-1">User Rating</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start your journey?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Explore the unseen. Taste the authentic. Travel with confidence.
        </p>

        <div className="flex justify-center gap-4">
          <Link 
            to={CITIES_PAGE_LINK}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
          >
            Explore Destinations
          </Link>

          <button 
            onClick={handleContactClick}
            className="bg-white text-slate-700 border border-slate-300 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

    </div>
  );
}
