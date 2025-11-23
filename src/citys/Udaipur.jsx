import React from 'react';
import udaipurHero from '../assets/udaipur.jpeg'; // Correct path to your image

export default function Udaipur() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* 1. Hero Section */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg mb-12">
        <img
          src={udaipurHero}
          alt="Lake Pichola Udaipur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <h1 className="text-5xl font-bold text-white p-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Welcome to Udaipur
          </h1>
        </div>
      </div>

      {/* 2. About Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          The City of Lakes
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Udaipur, often called the "Venice of the East," is a stunning city of lakes, palaces, and gardens. 
          Set around artificial lakes and framed by the Aravalli Hills, it is known as one of the most romantic 
          cities in India. Its royal palaces, peaceful lakes, and rich culture make it a captivating destination.
        </p>
      </div>

      {/* 3. Top Attractions Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          Top Attractions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Attraction Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">City Palace</h3>
              <p className="text-gray-600">
                A grand palace complex overlooking Lake Pichola, showcasing a fusion of Mughal and Rajasthani design.
              </p>
            </div>
          </div>

          {/* Attraction Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Lake Pichola</h3>
              <p className="text-gray-600">
                The heart of Udaipur. Enjoy a peaceful boat ride, especially stunning during sunset.
              </p>
            </div>
          </div>

          {/* Attraction Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Jag Mandir</h3>
              <p className="text-gray-600">
                A beautiful island palace on Lake Pichola, often called the "Lake Garden Palace."
              </p>
            </div>
          </div>

          {/* Attraction Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sajjangarh (Monsoon Palace)</h3>
              <p className="text-gray-600">
                A hilltop palace offering extraordinary panoramic views of Udaipur and its lakes.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Best Time to Visit Section */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200">
        <h2 className="text-2xl font-semibold mb-3">Best Time to Visit</h2>
        <p className="text-gray-700">
          The best time to visit Udaipur is from <strong>September to March</strong>.  
          The weather is comfortable and perfect for sightseeing, boat rides, and exploring the city.
        </p>
      </div>

    </div>
  );
}
