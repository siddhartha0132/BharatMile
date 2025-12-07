import { useEffect } from "react";
import { Link } from "react-router-dom";

import jaipur from "../assets/jaipur.webp";
import udaipur from "../assets/udaipur.webp";
import ranthambore from "../assets/Ranthambore.webp";
import jodhpur from "../assets/Jodhpur.webp";
import bikaner from "../assets/Bikaner.webp";
import jaisalmer from "../assets/Jaislamer.webp";
import jawai from "../assets/Jawai.webp";
import ranchi from "../assets/ranchi.webp";

export default function City() {

  /* -------------------------------------------- */
  /* SEO (React 19 Safe - No react-head needed)   */
  /* -------------------------------------------- */
  useEffect(() => {
    document.title = "Explore Indian Cities | BharatMile Travel Destinations";
    
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Explore top travel destinations in India with BharatMile. Browse Jaipur, Udaipur, Jodhpur, Ranthambore, Jaisalmer, Ranchi, and more."
      );
  }, []);

  /* -------------------------------------------- */

  const cities = [
    { name: "Jaipur", img: jaipur, desc: "The vibrant Pink City.", routeSlug: "jaipur" },
    { name: "Ranthambore", img: ranthambore, desc: "Land of Bengal tigers.", routeSlug: "ranthambore" },
    { name: "Udaipur", img: udaipur, desc: "The romantic City of Lakes.", routeSlug: "udaipur" },
    { name: "Jodhpur", img: jodhpur, desc: "The Blue City of Rajasthan.", routeSlug: "jodhpur" },
    { name: "Bikaner", img: bikaner, desc: "Camel country & culture.", routeSlug: "bikaner" },
    { name: "Jaisalmer", img: jaisalmer, desc: "The Golden City of India.", routeSlug: "jaisalmer" },
    { name: "Jawai", img: jawai, desc: "Leopard spotting paradise.", routeSlug: "jawai" },
    { name: "Ranchi", img: ranchi, desc: "City of waterfalls.", routeSlug: "ranchi" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* PAGE TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-900">
          Explore Incredible Destinations
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover India's most iconic and hidden travel gems — from royal cities to wildlife hotspots.
        </p>
      </div>

      {/* CITY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {cities.map((city) => (
          <Link
            key={city.name}
            to={`/city/${city.routeSlug}`}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={city.img}
                loading="lazy"
                alt={`${city.name} tourism`}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Image gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-90 transition duration-300"></div>

              {/* City name on image (Premium UI) */}
              <h2 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow-md">
                {city.name}
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="p-5">
              <p className="text-gray-600 text-sm">{city.desc}</p>

              <p className="mt-3 text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-all flex items-center">
                Explore →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

