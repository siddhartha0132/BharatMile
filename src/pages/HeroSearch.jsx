// import React, { useState } from 'react';
// import { Plane, Hotel, MapPin, Calendar, Search } from 'lucide-react';

// // Replace with your high-quality background image
// const heroBgImage = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop';

// const HeroSearch = () => {
//   const [activeTab, setActiveTab] = useState('flights');

//   // Helper component for tab buttons
//   const TabButton = ({ id, icon, label }) => (
//     <button
//       onClick={() => setActiveTab(id)}
//       className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-semibold transition-all duration-300
//         ${activeTab === id 
//           ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
//           : 'bg-gray-100/20 text-white/80 hover:bg-white/30'
//         }
//       `}
//     >
//       {icon}
//       <span>{label}</span>
//     </button>
//   );

//   // Reusable input field
//   const SearchInput = ({ icon, label, placeholder }) => (
//     <div className="flex-1 min-w-[200px]">
//       <label className="text-xs font-light text-gray-500">{label}</label>
//       <div className="flex items-center space-x-2">
//         {icon}
//         <input 
//           type="text" 
//           placeholder={placeholder}
//           className="w-full text-lg font-medium text-gray-800 focus:outline-none"
//         />
//       </div>
//     </div>
//   );

//   return (
//     <section 
//       className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${heroBgImage})` }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 w-full max-w-6xl mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
//           Book Your Next Journey
//         </h1>
        
//         {/* Search Widget Container */}
//         <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
          
//           {/* Tab Navigation */}
//           <nav className="flex flex-wrap space-x-1 md:space-x-2 mb-4">
//             <TabButton id="flights" icon={<Plane size={20} />} label="Flights" />
//             <TabButton id="hotels" icon={<Hotel size={20} />} label="Hotels" />
//             <TabButton id="holidays" icon={<MapPin size={20} />} label="Holidays" />
//           </nav>

//           {/* Search Form Area */}
//           <div className="bg-white p-4 rounded-b-lg">
            
//             {/* --- Flights Form --- */}
//             {activeTab === 'flights' && (
//               <div className="flex flex-wrap gap-4 items-center">
//                 <SearchInput icon={<MapPin size={24} />} label="From" placeholder="New Delhi" />
//                 <SearchInput icon={<MapPin size={24} />} label="To" placeholder="Mumbai" />
//                 <SearchInput icon={<Calendar size={24} />} label="Depart" placeholder="Select Date" />
//                 <SearchInput icon={<Calendar size={24} />} label="Return" placeholder="Select Date" />
//                 <button className="flex-shrink-0 w-full md:w-auto bg-blue-600 text-white rounded-lg px-8 py-4 text-lg font-bold hover:bg-blue-700 transition duration-300">
//                   <Search size={24} className="inline-block md:hidden" />
//                   <span className="hidden md:inline-block">Search Flights</span>
//                 </button>
//               </div>
//             )}
            
//             {/* --- Hotels Form --- */}
//             {activeTab === 'hotels' && (
//               <div className="flex flex-wrap gap-4 items-center">
//                 <SearchInput icon={<MapPin size={24} />} label="City or Hotel" placeholder="e.g., Goa" />
//                 <SearchInput icon={<Calendar size={24} />} label="Check-in" placeholder="Select Date" />
//                 <SearchInput icon={<Calendar size={24} />} label="Check-out" placeholder="Select Date" />
//                 <button className="flex-shrink-0 w-full md:w-auto bg-blue-600 text-white rounded-lg px-8 py-4 text-lg font-bold hover:bg-blue-700 transition duration-300">
//                   <Search size={24} className="inline-block md:hidden" />
//                   <span className="hidden md:inline-block">Search Hotels</span>
//                 </button>
//               </div>
//             )}
            
//             {/* --- Holidays Form --- */}
//             {activeTab === 'holidays' && (
//               <div className="flex flex-wrap gap-4 items-center">
//                 <SearchInput icon={<MapPin size={24} />} label="Destination" placeholder="e.g., Manali" />
//                 <SearchInput icon={<Calendar size={24} />} label="Start Date" placeholder="Select Date" />
//                 <button className="flex-shrink-0 w-full md:w-auto bg-blue-600 text-white rounded-lg px-8 py-4 text-lg font-bold hover:bg-blue-700 transition duration-300">
//                   <Search size={24} className="inline-block md:hidden" />
//                   <span className="hidden md:inline-block">Search Holidays</span>
//                 </button>
//               </div>
//             )}
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSearch;