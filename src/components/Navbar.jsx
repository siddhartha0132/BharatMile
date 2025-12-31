import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../assets/BharatMile-Logo.jpg';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { to: "/", label: "Home", title: "Go to BharatMile Home Page" },
    { to: "/about", label: "About", title: "Learn more About Us" },
    { to: "/city", label: "City", title: "Explore Cities" },
    { to: "/blogs", label: "Blogs", title: "Read our Travel Blogs" },
    { to: "/contact", label: "Contact", title: "Contact BharatMile Team" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-xl z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* PROFESSIONAL LOGO ONLY */}
        <Link 
          to="/" 
          aria-label="BharatMile Home"
          title="BharatMile - Explore Travel Destinations"
          className="flex items-center"
        >
          <img 
            src={logo}
            alt="BharatMile Logo" 
            width="42"
            height="42"
            loading="lazy"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-base font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                title={link.title}
                className="hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 
        ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-2 pt-2 pb-3 flex flex-col border-t border-gray-100">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              onClick={toggleMobileMenu}
              to={link.to}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

