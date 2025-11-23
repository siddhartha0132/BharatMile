import { Link } from "react-router-dom";
import logo from '../assets/BharatMile-Logo.jpeg';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
      {/* Logo */}
<h1>
  <a href="/" title="BharatMile - Go to Homepage">
    <img
      className="h-18 w-auto"  /* Adjust h-10 (height) to fit your navbar */
      src={logo} /* <-- 1. Change this to your logo path */
      alt="BharatMile"           /* <-- 2. This is your "maintained text" for SEO */
    />
  </a>
</h1>

        {/* Menu */}
        <div className="flex space-x-6 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/city" className="hover:text-blue-600">City</Link>
          <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
