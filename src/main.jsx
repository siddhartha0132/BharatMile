import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { findRoute, NotFound } from './routes'

// Load the current page's chunk before mounting so the prerendered HTML is
// replaced by an identical render instead of the "Loading…" fallback.
const current = findRoute(window.location.pathname)?.Component ?? NotFound
Promise.resolve(current.preload?.())
  .catch(() => {})
  .then(() => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
