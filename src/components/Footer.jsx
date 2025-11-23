import { Link } from 'react-router-dom'; // Import Link for internal routing

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">BharatMile</h2>
          <p className="mt-3 text-sm">
            Discover India’s beauty, culture, and hidden gems with us.  
            Your journey begins here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {/* Mapped to your App.jsx routes */}
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/city" className="hover:text-blue-400">Cities</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Destinations (Using the City Routes provided) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Places</h3>
          <ul className="space-y-2">
            {/* Mapped to specific city routes */}
            <li><Link to="/city/jaipur" className="hover:text-blue-400">Jaipur</Link></li>
            {/* Since 'Goa' is not a dedicated city route in your list, I'm linking it to a relevant blog/city page if possible, otherwise keeping the generic city page link for now. */}
            <li><Link to="/goa-forts" className="hover:text-blue-400">Goa</Link></li> 
            {/* Linking Kerala to a popular Kerala blog post */}
            <li><Link to="/blogs/kerala-backwaters" className="hover:text-blue-400">Kerala</Link></li>
            {/* Linking Agra to the Taj Mahal blog post, as it's the main attraction */}
            <li><Link to="/top-10-places-to-visit-in-india" className="hover:text-blue-400">Agra (Taj Mahal)</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Join Newsletter</h3>
          <p className="text-sm">Get travel updates & amazing offers.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none"
            />
            <button className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} BharatMile. All Rights Reserved.
      </div>
    </footer>
  );
}

