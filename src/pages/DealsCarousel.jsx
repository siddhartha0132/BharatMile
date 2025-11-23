import React from 'react';

// Dummy data - in a real app, this would come from an API
const dealsData = [
  {
    id: 1,
    title: 'Flat 20% Off',
    subtitle: 'On domestic flights',
    img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1770&auto=format&fit=crop',
    code: 'FLYINDIA'
  },
  {
    id: 2,
    title: 'Goa Getaway',
    subtitle: 'Hotels starting at ₹1,999',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1674&auto=format&fit=crop',
    code: 'GOA'
  },
  {
    id: 3,
    title: 'International Deals',
    subtitle: 'Up to 30% off on hotels',
    img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1887&auto=format&fit=crop',
    code: 'GLOBAL'
  },
  {
    id: 4,
    title: 'Holiday Packages',
    subtitle: 'Manali trips from ₹8,999',
    img: 'https://images.unsplash.com/photo-1586524226162-4f2b1d03d3ce?q=80&w=1770&auto=format&fit=crop',
    code: 'HIMACHAL'
  },
  {
    id: 5,
    title: 'Bus Bookings',
    subtitle: 'Save ₹150 with code',
    img: 'https://images.unsplash.com/photo-1570125904224-908c81110533?q=80&w=1770&auto=format&fit=crop',
    code: 'BUS150'
  }
];

const DealsCarousel = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Offers & Deals
        </h2>
        
        {/* Horizontal Scroll Container */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          
          {dealsData.map((deal) => (
            // Card
            <div 
              key={deal.id}
              className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img 
                src={deal.img} 
                alt={deal.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{deal.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{deal.subtitle}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-500">Use Code:</span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                    {deal.code}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default DealsCarousel;