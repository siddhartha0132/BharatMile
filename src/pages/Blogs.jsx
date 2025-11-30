import React from 'react';
import { Search, Tag, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// ✅ IMPORTS (Your Local Assets)
import id1 from "../assets/Top-Ten.jpg"
import id2 from "../assets/ultimatetwoWeek.jpg"
import id3 from "../assets/Top-Ten.jpg"
import id4 from "../assets/jaipurvsudaipur25.avif"
import id5 from "../assets/jaislamerdesert.jpg"
import id6 from "../assets/bhangarhgort.jpeg"
import id7 from "../assets/manalitoleh.jpeg"
import id8 from "../assets/splitvalley.jpg"
import id9 from "../assets/Top-Ten.jpg"
import id12 from "../assets/hampi.jpg"
import id13 from "../assets/Pondicherry.png"
import id10 from "../assets/rishikesh.jpg"
import id11 from "../assets/keralaBackWater.jpg"
import id14 from "../assets/cooorg.jpg"
import id16 from "../assets/Mysore.jpg"
import id15 from "../assets/ooty.jpeg"
import id17 from "../assets/Howtotravelin500.jpg"
import id18 from "../assets/BestHotels.jpg"
import id19 from "../assets/indianrailways.avif"
import id20 from "../assets/flight.jpg"
import id21 from "../assets/Femaletraveler.jpg"
import id22 from "../assets/street-food.jpg"
import id23 from "../assets/goldentemple.jpg"
import id24 from "../assets/goa.jpg"
import id25 from "../assets/LocalFoodsHyderabad.jpeg"
import id26 from "../assets/meghalayahero.jpeg"
import id27 from "../assets/silk-route.jpeg"
import id28 from "../assets/Andaman-and-Nicobar.jpg"
import id29 from "../assets/rann-of-kutch.jpeg"
import id30 from "../assets/jim-corbett.avif"
import id31 from "../assets/Valleyofflowers.jpg"
import id32 from "../assets/sundarbantours.jpg"
import id33 from "../assets/whatnottobring.jpg"


export default function Blogs() {

  const accentColor = "indigo";

  // ✅ UPDATED — ALL 33 BLOGS WITH CORRECT IMAGE IMPORTS  
  const allBlogs = [
    { id: 1,  title: "Top 10 Places to Visit in India Before You Die", category: "Trending", img: id1, slug: "/top-10-places-to-visit-in-india" },
    { id: 2,  title: "The Ultimate 2-Week India Itinerary for Beginners", category: "Guides", img: id2, slug: "/2-week-india-itinerary-for-beginners" },
    { id: 3,  title: "Why 2025 is the Best Year to Visit Bharat", category: "News", img: id3, slug: "/why-2025-is-the-best-year-to-visit-bharat" },

    { id: 4,  title: "Jaipur vs Udaipur: Which City Should You Visit?", category: "Rajasthan", img: id4, slug: "/jaipur-vs-udaipur-which-city-to-visit" },
    { id: 5,  title: "Jaisalmer Desert Camping: A Night Under the Stars", category: "Rajasthan", img: id5, slug: "/jaisalmer-desert-camping" },
    { id: 6,  title: "The Haunted History of Bhangarh Fort", category: "Mystery", img: id6, slug: "/bhangarh-fort-haunted-history" },

    { id: 7,  title: "Manali to Leh: The Ultimate Road Trip Guide", category: "Adventure", img: id7, slug: "/manali-to-leh-road-trip-guide" },
    { id: 8,  title: "Spiti Valley: India's Middle Land Explained", category: "Adventure", img: id8, slug: "/spiti-valley-middle-land" },
    { id: 9,  title: "A Spiritual Journey Through Varanasi's Ghats", category: "Spiritual", img: id9, slug: "/varanasi-ghats-spiritual-journey" },
    { id: 10, title: "Rishikesh: Yoga, Rafting, and Peace", category: "Spiritual", img: id10, slug: "/rishikesh-yoga-rafting-peace" },

    { id: 11, title: "Kerala Backwaters: Houseboat Prices & Tips", category: "Kerala", img: id11, slug: "/blogs/kerala-backwaters" },
    { id: 12, title: "Hampi: Exploring the Ruins of an Empire", category: "Heritage", img: id12, slug: "/blogs/hampi-ruins-empire" },
    { id: 13, title: "Pondicherry: A Slice of France in India", category: "Leisure", img: id13, slug: "/blogs/pondicherry-french-town" },
    { id: 14, title: "Coorg: The Scotland of India Coffee Guide", category: "Nature", img: id14, slug: "/blogs/coorg-coffee-guide" },
    { id: 15, title: "Ooty Toy Train: Tickets and Timings", category: "Family", img: id15, slug: "/blogs/ooty-toy-train-tickets-timings" },
    { id: 16, title: "Mysore Palace: The Royal Dussehra Experience", category: "Heritage", img: id16, slug: "/blogs/mysore-palace-dussehra-experience" },

    { id: 17, title: "How to Travel India on ₹500 a Day", category: "Budget", img: id17, slug: "/blogs/how-to-travel-india-for-500-rupees" },
    { id: 18, title: "Best Hostels in India for Solo Travelers", category: "Budget", img: id18, slug: "/blogs/best-hostels-in-india-for-solo-travelers" },
    { id: 19, title: "Indian Railways Guide: How to Book Tatkal", category: "Tips", img: id19, slug: "/blogs/tatkal-railway" },
    { id: 20, title: "Student Discounts on Flights and Monuments", category: "Student", img: id20, slug: "/blogs/student-discounts" },
    { id: 21, title: "Safe Travel Tips for Solo Female Travelers", category: "Safety", img: id21, slug: "/blogs/solo-female-travel-tips" },

    { id: 22, title: "The Street Food of Delhi: Chandni Chowk Guide", category: "Food", img: id22, slug: "/blogs/chandni-chowk-street-food-guide" },
    { id: 23, title: "Amritsar: Golden Temple and Langar Experience", category: "Culture", img: id23, slug: "/blogs/amritsar-golden-temple-langar" },
    { id: 24, title: "Goa Beyond Beaches: Forts and Spice Farms", category: "Goa", img: id24, slug: "/goa-forts" },
    { id: 25, title: "Hyderabadi Biryani: The Authentic Food Trail", category: "Food", img: id25, slug: "/hyderabadi-biryani" },

    { id: 26, title: "Meghalaya: Walking on Living Root Bridges", category: "Northeast", img: id26, slug: "/meghalaya-walking-on-living-root-bridges" },
    { id: 27, title: "Sikkim Silk Route: A Hidden Gem", category: "Northeast", img: id27, slug: "/sikkim-silk-route-hidden-gem" },
    { id: 28, title: "Andaman Islands: Scuba Diving for Beginners", category: "Adventure", img: id28, slug: "/andaman-islands-scuba-diving-beginners" },
    { id: 29, title: "Rann of Kutch: The White Desert Festival", category: "Culture", img: id29, slug: "/rann-of-kutch-white-desert-festival" },

    { id: 30, title: "Jim Corbett: Spotting the Bengal Tiger", category: "Wildlife", img: id30, slug: "/jim-corbett-bengal-tiger-safari" },
    { id: 31, title: "Valley of Flowers: Trekking in Monsoon", category: "Trekking", img: id31, slug: "/valley-of-flowers-monsoon-trekking" },
    { id: 32, title: "Sundarbans: The Mangrove Forest Boat Safari", category: "Wildlife", img: id32, slug: "/blogs/sundarbans-mangrove-safari" },
    { id: 33, title: "Packing List for India: What Not to Bring", category: "Tips", img: id33, slug: "/blogs/packing-list-india" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* HEADER */}
      <div className="bg-slate-900 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Explore the <span className={`text-${accentColor}-400`}>Unseen</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            33 Handpicked stories, guides, and itineraries to help you explore India.
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-xl mx-auto bg-white rounded-full flex items-center px-4 py-2 shadow-lg">
            <Search className="text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for 'Goa', 'Budget', or 'Food'..." 
              className="flex-1 px-4 py-2 text-slate-800 outline-none rounded-full"
            />
            <button className={`bg-${accentColor}-600 hover:bg-${accentColor}-700 text-white px-6 py-2 rounded-full text-sm font-bold`}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center gap-3 mb-10">
          <div className={`h-8 w-1 bg-${accentColor}-600 rounded-full`}></div>
          <h2 className="text-2xl font-bold text-slate-800">
            Latest Articles ({allBlogs.length})
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              
              {/* IMAGE WITH LINK */}
              <Link to={blog.slug}>
                <div className="relative h-48 bg-slate-200 overflow-hidden group">
                  <img 
                    src={blog.img}
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/600x400?text=BharatMile+Image';}}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-md text-xs font-bold text-slate-800 flex items-center gap-1">
                    <Tag size={12} className={`text-${accentColor}-600`} />
                    {blog.category}
                  </div>
                </div>
              </Link>

              {/* CONTENT */}
              <div className="p-6 flex-1 flex flex-col">

                {/* TITLE */}
                <Link to={blog.slug}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-indigo-600 cursor-pointer">
                    {blog.title}
                  </h3>
                </Link>

                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Clock size={14}/>5 min</span>
                    <span className="flex items-center gap-1"><Calendar size={14}/>2025</span>
                  </div>

                  {/* READ BUTTON */}
                  <Link 
                    to={blog.slug}
                    className={`text-${accentColor}-600 hover:text-${accentColor}-800 font-semibold flex items-center gap-1 group`}
                  >
                    Read <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
