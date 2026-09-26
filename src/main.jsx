import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { findRoute, NotFound } from './routes'

// Load the current page's chunk before hydrating so the first client render
// matches the prerendered HTML instead of suspending.
const current = findRoute(window.location.pathname)?.Component ?? NotFound

// Let the browser paint the prerendered HTML before hydration takes the main
// thread (rAF fires before the next paint, the timeout runs after it).
const afterPaint = () => new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)))

Promise.all([Promise.resolve(current.preload?.()).catch(() => {}), afterPaint()])
  .then(() => {
    const container = document.getElementById('root')
    const app = (
      <StrictMode>
        <App />
      </StrictMode>
    )
    // Prerendered pages are hydrated (DOM reused, no repaint); dev server renders fresh.
    if (container.hasChildNodes()) hydrateRoot(container, app)
    else createRoot(container).render(app)
  })
