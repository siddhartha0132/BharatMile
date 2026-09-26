// Build-time only: rendered inside jsdom by scripts/prerender.mjs.
import { createRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App, { AppShell } from "./App.jsx";
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

// Server-rendered body markup (with Suspense markers) that the browser
// hydrates instead of re-creating the DOM.
export async function renderBody(pathname) {
  await (findRoute(pathname)?.Component ?? NotFound).preload?.();
  return renderToString(
    <StaticRouter location={pathname}>
      <AppShell />
    </StaticRouter>
  );
}
