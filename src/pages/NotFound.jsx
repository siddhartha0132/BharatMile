import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | BharatMile";
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-sm font-semibold text-[#c1644a]">404</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">This page took a wrong turn</h1>
      <p className="mt-4 text-gray-600">
        The page you're looking for doesn't exist or has moved. Try one of these instead:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/ranthambore-safari-tours" className="rounded-full bg-[#c1644a] px-5 py-2.5 font-semibold text-white">
          Ranthambore Safari Tours
        </Link>
        <Link to="/jaipur-sightseeing-packages" className="rounded-full bg-gray-900 px-5 py-2.5 font-semibold text-white">
          Jaipur Sightseeing
        </Link>
        <Link to="/blogs" className="rounded-full border border-gray-300 px-5 py-2.5 font-semibold text-gray-800">
          Travel Blog
        </Link>
      </div>
    </section>
  );
}
