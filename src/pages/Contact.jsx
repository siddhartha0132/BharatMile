import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc6-tbU7hRQeYUyDlaM2pMaH-5oNemq5A9q7b1nOCKAwGZu2w/formResponse";

const ENTRY_IDS = {
  fullName: "entry.1950094604",
  subject: "entry.1621944053",
  phoneNumber: "entry.781342223",
  message: "entry.1593669309",
};

export default function Contact() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    document.getElementById("real-form").submit();
  };

  const handleIframeLoad = () => {
    if (status === "sending") {
      setStatus("success");
      setFormData({
        fullName: "",
        subject: "",
        phoneNumber: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* HERO HEADER */}
      <div className="bg-slate-900 pb-32 pt-20 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-indigo-400 font-semibold uppercase text-sm mb-4">
            24/7 Support
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Plan Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
              Next Adventure
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Have a question? Want to partner with us? We're here to help.
          </p>
        </div>
      </div>

      {/* FLOATING CARD */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

          {/* LEFT SIDE */}
          <div className="lg:w-5/12 bg-slate-50 p-10 border-r border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Us</p>
                  <p className="text-slate-900 font-semibold">hello@bharatmile.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Call Us</p>
                  <p className="text-slate-900 font-semibold">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Visit HQ</p>
                  <p className="text-slate-900 font-semibold">Jaipur, Rajasthan, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:w-7/12 p-10 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
            <p className="text-slate-500 mb-8">We typically respond within 2 hours.</p>

            <form
              id="real-form"
              action={GOOGLE_FORM_URL}
              method="POST"
              target="hidden-iframe"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name={ENTRY_IDS.fullName}
                    value={formData.fullName}
                    onChange={(e) =>
                      handleChange({
                        target: { name: "fullName", value: e.target.value },
                      })
                    }
                    className="w-full p-3 rounded-lg bg-slate-50 border"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name={ENTRY_IDS.subject}
                    value={formData.subject}
                    onChange={(e) =>
                      handleChange({
                        target: { name: "subject", value: e.target.value },
                      })
                    }
                    className="w-full p-3 rounded-lg bg-slate-50 border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name={ENTRY_IDS.phoneNumber}
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleChange({
                      target: { name: "phoneNumber", value: e.target.value },
                    })
                  }
                  className="w-full p-3 rounded-lg bg-slate-50 border"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  name={ENTRY_IDS.message}
                  value={formData.message}
                  onChange={(e) =>
                    handleChange({
                      target: { name: "message", value: e.target.value },
                    })
                  }
                  className="w-full p-3 rounded-lg bg-slate-50 border"
                ></textarea>
              </div>

              <button className="w-full bg-indigo-600 text-white py-4 rounded-lg flex justify-center items-center gap-2">
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* HIDDEN IFRAME */}
      <iframe
        name="hidden-iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      ></iframe>

      {/* EXTRA INFO */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <MessageSquare size={20} className="text-green-600 mb-4" />
          <h4 className="font-bold text-slate-900 mb-2">Chat Support</h4>
          <p className="text-slate-500 text-sm">
            Available 10 AM – 6 PM IST via WhatsApp.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <Globe size={20} className="text-blue-600 mb-4" />
          <h4 className="font-bold text-slate-900 mb-2">Global Partners</h4>
          <p className="text-slate-500 text-sm">
            Contact our sales team for collaborations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <Clock size={20} className="text-purple-600 mb-4" />
          <h4 className="font-bold text-slate-900 mb-2">Response Time</h4>
          <p className="text-slate-500 text-sm">
            We reply within 2–4 hours usually.
          </p>
        </div>
      </div>
    </div>
  );
}
