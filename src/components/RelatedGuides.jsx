import { Link, useLocation } from "react-router-dom";
import { findRoute, relatedGuides } from "../routes";

// Internal links under every blog (4) and money page (6).
export default function RelatedGuides() {
  const { pathname } = useLocation();
  const route = findRoute(pathname);
  if (!route?.topic) return null;
  const guides = relatedGuides(pathname, route.kind === "blog" ? 4 : 6);
  if (!guides.length) return null;

  return (
    <nav className="max-w-4xl mx-auto px-6 pb-16" aria-label="Related guides">
      <h2 className="text-xl font-bold text-gray-900">
        {route.kind === "blog" ? "Related guides" : "Plan with our free guides"}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {guides.map((g) => (
          <li key={g.path}>
            <Link
              to={g.path}
              className="flex min-h-11 items-center rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 transition hover:border-[#a8523b] hover:text-[#a8523b]"
            >
              {g.label} →
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
