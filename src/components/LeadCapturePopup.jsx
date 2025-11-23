import React, { useState, useEffect } from 'react';
import { X, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser'; 

// !!! REPLACE THESE WITH YOUR ACTUAL EMAILJS IDs !!!
// NOTE: Use the SAME Service ID and Public Key as your contact form.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; 
const EMAILJS_TEMPLATE_ID_LEAD = "YOUR_LEAD_TEMPLATE_ID"; // Use your NEW template ID here!
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; 

// --- Pop-up Display Rules ---
const POPUP_DELAY_MS = 30000; // Show pop-up after 3 seconds on first visit

export default function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  // 1. Logic to show the pop-up after a delay on first visit
  useEffect(() => {
    // Check if the user has already seen/closed the popup in this session
    const hasSeenPopup = sessionStorage.getItem('leadPopupSeen');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, POPUP_DELAY_MS);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timer);
    }
  }, []);

  // 2. Function to close the modal and mark it as seen
  const handleClose = () => {
    setIsOpen(false);
    // Use sessionStorage so the popup doesn't reappear if the user navigates around
    sessionStorage.setItem('leadPopupSeen', 'true');
  };

  // 3. Form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    
    setStatus('sending');
    
    const templateParams = {
      phoneNumber: phoneNumber, // Matches the {{phoneNumber}} variable in your EmailJS template
      // You can add other tracking data here if needed, like page URL
      sourcePage: window.location.href, 
    };
    
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_LEAD, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('Lead SUCCESS!', response.status, response.text);
        setStatus('success');
        // The modal will stay open briefly on success, then close after 2s
        setTimeout(handleClose, 2000); 
      }, (error) => {
        console.error('Lead FAILED...', error);
        setStatus('error');
      });
  };

  if (!isOpen) {
    return null;
  }

  // Tailwind CSS Modal Structure
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="tel"
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
    </div>
  );
}