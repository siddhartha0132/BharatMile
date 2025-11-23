import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
// 1. Import the emailjs library
import emailjs from '@emailjs/browser'; 

// 2. Define your EmailJS credentials (!!! REPLACE THESE WITH YOUR ACTUAL IDs !!!)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // e.g., 'service_1234abc'
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g., 'template_xxxxx'
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g., 'public_xxxxxxxxxx'


export default function Contact() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    phoneNumber: '', 
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Update handleSubmit to use emailjs.send
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any critical field is empty before attempting to send
    if (!formData.fullName || !formData.phoneNumber || !formData.message) {
      alert("Please fill out your Name, Phone Number, and Message before sending.");
      return;
    }
    
    setStatus('sending');
    
    // The formData fields are the variables passed to your EmailJS template.
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        // Clear form after success
        setFormData({ fullName: '', subject: '', phoneNumber: '', message: '' }); 
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('error');
      });
  };
  
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* === 1. HERO HEADER (The "Banner" Look) === */}
      <div className="bg-slate-900 pb-32 pt-20 px-6 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500 rounded-full blur-3xl mix-blend-screen"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-4">
            24/7 Support
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Next Adventure</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Have a question about a trip? Want to partner with us? Or just want to say hi?
            We are always here to help you navigate the world.
          </p>
        </div>
      </div>

      {/* === 2. FLOATING CARD SECTION === */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* LEFT SIDE: Contact Info & Map */}
          <div className="lg:w-5/12 bg-slate-50 p-10 border-r border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h3>
              
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-500 transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email Us</p>
                    <p className="text-slate-900 font-semibold">hello@bharatmile.com</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-500 transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Call Us</p>
                    <p className="text-slate-900 font-semibold">+91 98765 43210</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:border-indigo-500 group-hover:text-indigo-500 transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Visit HQ</p>
                    <p className="text-slate-900 font-semibold">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map (Styled) */}
            <div className="mt-10 h-64 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 grayscale hover:grayscale-0 transition-all duration-500">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy">
                </iframe>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="lg:w-7/12 p-10 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
            <p className="text-slate-500 mb-8">We typically respond within 2 hours during business days.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rishi Goyal" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject (Trip Inquiry)</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Trip Inquiry" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input 
                  type="tel" 
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="e.g. +91 96369 74688" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  rows="4" 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans..." 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button disabled={status === 'sending'} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all transform active:scale-95">
                {status === 'sending' ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
              
              {/* Display status message */}
              {status === 'success' && <p className="text-sm text-green-600 text-center font-medium mt-3">Message sent successfully! We'll be in touch soon.</p>}
              {status === 'error' && <p className="text-sm text-red-600 text-center font-medium mt-3">There was an error sending your message. Please check the console or try our phone/WhatsApp support.</p>}
            </form>
          </div>

        </div>
      </div>

      {/* === 3. FAQ / EXTRA INFO SECTION === */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <MessageSquare size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Chat Support</h4>
          <p className="text-slate-500 text-sm">Our team is available from 10 AM to 6 PM IST via WhatsApp.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <Globe size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Global Partners</h4>
          <p className="text-slate-500 text-sm">Looking for B2B partnership? Reach out to our sales team directly.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
            <Clock size={20} />
          </div>
          <h4 className="font-bold text-slate-900 mb-2">Response Time</h4>
          <p className="text-slate-500 text-sm">We usually respond to all travel inquiries within 2-4 hours.</p>
        </div>
      </div>

    </div>
  );
}