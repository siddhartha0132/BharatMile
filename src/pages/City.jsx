import { Link } from "react-router-dom";

import jaipur from "../assets/jaipur.jpeg";
import udaipur from "../assets/udaipur.jpeg";
import ranthambore from "../assets/Ranthambore.jpg";
import jodhpur from "../assets/Jodhpur.jpg";
import bikaner from "../assets/Bikaner.jpeg";
import jaisalmer from "../assets/Jaislamer.jpg"; 
import jawai from "../assets/Jawai.avif";
import ranchi from "../assets/ranchi.jpeg";

export default function City() {

  const cities = [
    { name: "Jaipur", img: jaipur, desc: "The vibrant Pink City.", routeSlug: "jaipur" },
    { name: "Ranthambore", img: ranthambore, desc: "Land of Bengal tigers.", routeSlug: "ranthambore" },
    { name: "Udaipur", img: udaipur, desc: "The romantic City of Lakes.", routeSlug: "udaipur" },
    { name: "Jodhpur", img: jodhpur, desc: "Famous for its blue houses.", routeSlug: "jodhpur" },
    { name: "Bikaner", img: bikaner, desc: "Camel country & culture.", routeSlug: "bikaner" },
    { name: "Jaisalmer", img: jaisalmer, desc: "Golden city of India.", routeSlug: "jaisalmer" },
    { name: "Jawai", img: jawai, desc: "Land of leopards.", routeSlug: "jawai" },
    { name: "Ranchi", img: ranchi, desc: "City of waterfalls.", routeSlug: "ranchi" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Explore Destinations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {cities.map((city) => (
          <Link
            key={city.name}
            to={`/city/${city.routeSlug}`}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={city.img}
              className="h-48 w-full object-cover"
              alt={city.name}
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{city.name}</h2>
              <p className="text-gray-600 mt-2">{city.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



