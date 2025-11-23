import React from 'react';
import { MapPin, Users, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
// Import Link for internal routing
import { Link } from "react-router-dom"; 

/* -------------------- CONFIGURATION CONSTANTS -------------------- */
const CITIES_PAGE_LINK = "/city";
const WHATSAPP_NUMBER = "919636974688";
const accentColor = "indigo"; 
const secondaryAccentColor = "teal"; 

export default function About() {

  // Function to open WhatsApp link
  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-50 py-20 md:py-32 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className={`text-${accentColor}-600 font-semibold tracking-wider uppercase text-sm mb-2 block`}>
            Discover the Soul of India
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
            Every Mile Tells a <span className={`text-${accentColor}-600`}>Story.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            BharatMile is more than a travel platform. We are curators of experiences, 
            bridging the gap between the wanderer and the hidden gems of India.
          </p>
        </div>
        
        {/* Decorative Background Elements */}
        <div className={`absolute top-0 left-0 w-64 h-64 bg-${accentColor}-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 bg-${secondaryAccentColor}-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3`}></div>
      </div>

      {/* --- OUR STORY SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder 1 */}
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center group">
              {/* Replace src with your actual image */}
              <img 
                src="/path-to-your-team-or-scenery-photo.jpg" 
                alt="Traveling in India" 
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 absolute z-10" 
              />
              <span className="text-slate-400 font-medium z-0">Add Photo: Team or Landscape (600x800)</span>
            </div>
            {/* Floating Card Effect */}
            <div className={`absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block border border-${accentColor}-100`}>
              <p className={`text-4xl font-bold text-${accentColor}-600`}>100+</p>
              <p className="text-sm text-slate-500 font-medium">Curated Destinations</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              We Bridge the Gap Between <br/> <span className={`text-${accentColor}-600`}>Tourist and Traveler</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              India is vast, chaotic, and beautiful. But finding authentic experiences can be overwhelming. 
              BharatMile was born out of a simple desire: to make the rich heritage of India accessible to everyone without the hassle.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We don't just show you where to go; we guide you on how to feel the place. From the snowy peaks of the Himalayas 
              to the backwaters of Kerala, we provide the trusted information you need to travel with confidence.
            </p>
            
            <button className={`flex items-center gap-2 text-${accentColor}-600 font-bold hover:gap-4 transition-all`}>
              Read Our Full Story <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MEET OUR VISIONARIES BANNER PANEL --- */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Meet Our <span className={`text-${secondaryAccentColor}-400`}>Visionaries</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Founder 1: Rishi Goyal */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700 shadow-lg mb-4 flex items-center justify-center bg-slate-700">
                {/* Image Placeholder 2: Rishi Goyal */}
                <img 
                  src="/path-to-rishi-goyal-photo.jpg" 
                  alt="Rishi Goyal" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 absolute" 
                />
                <span className="text-slate-400 font-medium text-center">Add Photo: Rishi Goyal (400x400)</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Rishi Goyal</h3>
              <p className={`text-${secondaryAccentColor}-300 text-sm`}>Co-Founder & CEO</p>
            </div>

            {/* Founder 2: Akshat Gupta */}
            <div className="flex flex-col items-center mt-8 md:mt-0"> 
              <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-slate-600 shadow-xl mb-4 flex items-center justify-center bg-slate-600">
                {/* Image Placeholder 3: Akshat Gupta */}
                <img 
                  src="/path-to-akshat-gupta-photo.jpg" 
                  alt="Akshat Gupta" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 absolute"
                />
                <span className="text-slate-400 font-medium text-center">Add Photo: Akshat Gupta (400x400)</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Akshat Gupta</h3>
              <p className={`text-${secondaryAccentColor}-400`}>Founder</p>
            </div>

            {/* Founder 3: Siddhartha Singhal */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700 shadow-lg mb-4 flex items-center justify-center bg-slate-700">
                {/* Image Placeholder 4: Siddhartha Singhal */}
                <img 
                  src="/path-to-siddhartha-singhal-photo.jpg" 
                  alt="Siddhartha Singhal" 
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 absolute"
                />
                <span className="text-slate-400 font-medium text-center">Add Photo: Siddhartha Singhal (400x400)</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Siddhartha Singhal</h3>
              <p className={`text-${secondaryAccentColor}-300 text-sm`}>Co-Founder & CTO</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- VALUES / WHY CHOOSE US --- */}
      <div className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Travelers Trust Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We prioritize your experience above all else. Here is what makes BharatMile the preferred choice for modern explorers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className={`p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-${accentColor}-500 transition-colors group`}>
              <div className={`w-12 h-12 bg-${accentColor}-600/20 rounded-lg flex items-center justify-center text-${accentColor}-400 mb-6 group-hover:bg-${accentColor}-600 group-hover:text-white transition-all`}>
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Information</h3>
              <p className="text-slate-400 leading-relaxed">
                No outdated blogs. We constantly update routes, ticket prices, and entry timings so you never face a surprise.
              </p>
            </div>

            {/* Card 2 */}
            <div className={`p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-${accentColor}-500 transition-colors group`}>
              <div className={`w-12 h-12 bg-${accentColor}-600/20 rounded-lg flex items-center justify-center text-${accentColor}-400 mb-6 group-hover:bg-${accentColor}-600 group-hover:text-white transition-all`}>
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Curated for You</h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you are a backpacker on a budget or looking for luxury, our AI-driven recommendations fit your style.
              </p>
            </div>

            {/* Card 3 */}
            <div className={`p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-${accentColor}-500 transition-colors group`}>
              <div className={`w-12 h-12 bg-${accentColor}-600/20 rounded-lg flex items-center justify-center text-${accentColor}-400 mb-6 group-hover:bg-${accentColor}-600 group-hover:text-white transition-all`}>
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-slate-400 leading-relaxed">
                Join thousands of travelers sharing real-time reviews, hidden spots, and travel hacks on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- STATS SECTION --- */}
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

      {/* --- CTA SECTION (The Closing) --- */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start your journey?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Explore the unseen. Taste the authentic. Experience the real India with BharatMile.
        </p>
        <div className="flex justify-center gap-4">
          
          {/* EXPLORE DESTINATIONS BUTTON (Linked to /city) */}
          <Link 
            to={CITIES_PAGE_LINK}
            className={`bg-${accentColor}-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-${accentColor}-700 transition-colors shadow-lg hover:shadow-${accentColor}-200`}
          >
            Explore Destinations
          </Link>
          
          {/* CONTACT US BUTTON (Linked to WhatsApp) */}
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