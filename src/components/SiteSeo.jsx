import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findRoute } from "../routes";
import { normalizeHead } from "../seo/normalizeHead";

// Runs after the page's own head effects (two frames lets Helmet flush) and
// normalises canonical / description / OG tags for the current route.
export default function SiteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    let inner;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        const route = findRoute(pathname);
        normalizeHead(document, pathname, { kind: route?.kind, notFound: !route });
      });
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [pathname]);

  return null;
}
