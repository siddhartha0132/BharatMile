// Build-time only: rendered inside jsdom by scripts/prerender.mjs.
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { findRoute, NotFound } from "./routes";

export { routes } from "./routes";
export { normalizeHead } from "./seo/normalizeHead";

export async function renderPage(pathname) {
  const route = findRoute(pathname);
  await (route?.Component ?? NotFound).preload?.();
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
  return { route, root };
}
