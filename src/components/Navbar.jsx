import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../assets/BharatMile-Logo.jpeg';

// ----------------------------------------------------------------
// Icon Helpers: Using basic SVGs for simplicity and performance
// ----------------------------------------------------------------

// A simple Globe icon to represent the travel brand logo visually
const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25c-1.577 0-3.155 1.125-3.155 2.5s1.578 2.5 3.155 2.5 3.155-1.125 3.155-2.5-1.578-2.5-3.155-2.5zM12 11.25V9a2.25 2.25 0 00-2.25-2.25h-1.5a2.25 2.25 0 00-2.25 2.25v2.25m8.25-2.25h1.5a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25h-1.5a2.25 2.25 0 00-2.25 2.25v2.25" />
  </svg>
);

const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ----------------------------------------------------------------
// The Main Navbar Component
// ----------------------------------------------------------------

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Reverting link text back to original provided structure
  const navLinks = [
    { to: "/", label: "Home", title: "Go to the BharatMile Home Page" },
    { to: "/about", label: "About", title: "Learn more About Us" },
    { to: "/city", label: "City", title: "Explore Cities" },
    { to: "/blogs", label: "Blogs", title: "Read our Blogs" },
    { to: "/contact", label: "Contact", title: "Contact Us" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-xl z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* 1. Logo (SEO H1 Tag and Link) - Using inline icon and text */}
        <h1 className="flex-shrink-0">
  <Link 
    to="/" 
    title="BharatMile - Go to Homepage, Start Your Adventure" 
    className="flex items-center space-x-2"
  >
    <img 
      src={logo} 
      alt="BharatMile Logo" 
      className="h-10 w-auto object-contain rounded-md"
    />

    <span className="text-xl font-bold text-gray-800">BharatMile</span>
  </Link>
</h1>

        {/* 2. Desktop Menu Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Main Navigation Links */}
          <div className="flex space-x-6 text-base font-semibold text-gray-700">
            {navLinks.map((link) => (
                <Link 
                    key={link.to}
                    to={link.to} 
                    className="hover:text-blue-600 transition duration-150 ease-in-out" 
                    title={link.title}
                >
                    {link.label}
                </Link>
            ))}
          </div>
          
          {/* Removed the "Book Now" CTA as requested */}
        </div>

        {/* 4. Mobile Menu Button (Visible only on Mobile) */}
        <div className="flex items-center md:hidden space-x-4">
            {/* Hamburger Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="h-7 w-7" />
              ) : (
                <MenuIcon className="h-7 w-7" />
              )}
            </button>
        </div>

      </div>

      {/* 5. Mobile Menu Drawer (Toggled using max-height for smooth animation) */}
      <div 
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col border-t border-gray-100">
          {/* Mobile Links */}
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