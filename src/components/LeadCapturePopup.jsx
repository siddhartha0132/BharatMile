import React, { useState, useEffect, useRef } from 'react';
import { X, Phone, ArrowRight, CheckCircle } from 'lucide-react';

// --- Pop-up Display Rules ---
const POPUP_DELAY_MS = 30000; // Show pop-up after 30 seconds on first visit

// --- Replace with your Google Form's formResponse URL ---
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZcqYzQTlXqbmoHb8TJrIDFiLkBHnBSDWMLFkGEqE_O5UwRw/formResponse";

// --- entry id for the phone field in your Google Form ---
const PHONE_ENTRY_NAME = "entry.1501689950";

export default function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'
  const iframeRef = useRef(null);
  const formRef = useRef(null);

  // 1. Logic to show the pop-up after a delay on first visit
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('leadPopupSeen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, POPUP_DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, []);

  // 2. Function to close the modal and mark it as seen
  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('leadPopupSeen', 'true');
  };

  // Simple phone validation (strip non-digits, require at least 6 digits)
  const validPhone = (p) => {
    const digitsOnly = p.replace(/[^\d]/g, "");
    return digitsOnly.length >= 6;
  };

  // Called when the hidden iframe loads; after submit iframe will load Google's response page.
  const handleIframeLoad = () => {
    // Only treat as success if we are currently sending
    if (status !== 'sending') return;

    // Google may always load a page (even on error) — treat as success for UX consistency.
    setStatus('success');

    // Close after a short delay so user can see the success UI
    setTimeout(() => {
      handleClose();
      // reset fields for next time
      setPhoneNumber('');
      setStatus(null);
    }, 2000);
  };

  // 3. Form submission — let browser POST to Google Form (no fetch, no CORS)
  const handleSubmit = (e) => {
    // Validate first
    if (!validPhone(phoneNumber)) {
      e.preventDefault();
      alert("Please enter a valid phone number (at least 6 digits).");
      return;
    }

    // If valid, set sending and allow native submit to proceed (don't call preventDefault)
    setStatus('sending');

    // Fallback: if iframe doesn't trigger in X seconds, show error state
    setTimeout(() => {
      if (status === 'sending') {
        // If still sending after 7s, assume success for user experience OR set error if you prefer
        // Here we lean success (Google often returns an opaque page); comment/uncomment to change behavior.
        setStatus('success');
        setTimeout(() => {
          handleClose();
          setPhoneNumber('');
          setStatus(null);
        }, 1500);
      }
    }, 7000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative bg-white rounded-xl shadow-2xl p-6 w-11/12 max-w-sm transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close pop-up"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          // Success State
          <div className="text-center py-6">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600">A travel expert will call you shortly to discuss your trip.</p>
          </div>
        ) : (
          // Initial Form State
          <div>
            <div className="text-center mb-6">
              <Phone size={32} className="text-indigo-600 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-gray-900">
                Want to talk about your India trip?
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Enter your number and get a call back in 5 minutes!
              </p>
            </div>

            {/* Native form posts directly to Google Forms */}
            <form
              ref={formRef}
              action={GOOGLE_FORM_ACTION}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="tel"
                name={PHONE_ENTRY_NAME}
                placeholder="Enter your Phone Number (e.g., +91 98765 43210)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 outline-none transition-all"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calling...
                  </span>
                ) : (
                  <>Get a Call Back <ArrowRight size={18} /></>
                )}
              </button>

              {status === 'error' && <p className="text-sm text-red-500 text-center">Submission failed. Please try later.</p>}
            </form>
          </div>
        )}
      </div>

      {/* hidden iframe to accept the cross-origin form response */}
      <iframe
        name="hidden_iframe"
        title="hidden_iframe"
        ref={iframeRef}
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
