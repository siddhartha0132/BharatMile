import { useEffect } from "react";
import { Link } from "react-router-dom";

// Describes what the site actually collects: the lead popup and contact form
// (both submit to Google Forms), WhatsApp chats, Google Analytics, and the
// sessionStorage flag used by the popup. Update if any of these change.
const UPDATED = "26 September 2026";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | BharatMile";
    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "How BharatMile collects and uses your information when you enquire about Ranthambore safaris and Jaipur tours — what we collect, why, who we share it with, and your choices.";
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-6 py-12 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-3 text-sm text-gray-500">Last updated {UPDATED}</p>

      <div className="prose mt-8">
        <p>
          BharatMile ("we", "us") is a Jaipur-based travel company offering Ranthambore safaris and Jaipur tours
          through bharatmile.com. This policy explains what information we collect when you use this website or
          contact us, and how we use it.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Enquiry details you give us.</strong> When you use the pop-up form or the contact form, we
            receive what you enter — your phone number, and on the contact form your name, subject and message.
          </li>
          <li>
            <strong>WhatsApp and phone conversations.</strong> If you message or call us, we receive your number and
            whatever you share, such as travel dates, group size and pickup city.
          </li>
          <li>
            <strong>Booking details.</strong> To book a safari we ask for each traveller's name and ID details
            (for example Aadhaar or passport), because Ranthambore safaris are booked against ID.
          </li>
          <li>
            <strong>Usage data.</strong> We use Google Analytics to understand which pages are visited and how the
            site is used. It uses cookies and collects information such as your device, browser, approximate
            location and pages viewed.
          </li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>To reply to your enquiry and send quotes and itineraries</li>
          <li>To book safaris, stays, cabs and sightseeing you ask us to arrange</li>
          <li>To improve the website and our services</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>Who we share it with</h2>
        <ul>
          <li>
            <strong>Google</strong> — our website forms are submitted through Google Forms, and site usage is
            measured with Google Analytics.
          </li>
          <li>
            <strong>WhatsApp (Meta)</strong> — if you choose to chat with us on WhatsApp.
          </li>
          <li>
            <strong>Booking partners</strong> — only what is needed for your booking: traveller names and ID details
            for safari permits, and names and dates for hotels, cabs and guides.
          </li>
          <li>
            <strong>Our website host</strong>, which processes technical data such as IP addresses to serve the site.
          </li>
        </ul>

        <h2>Cookies and browser storage</h2>
        <p>
          Google Analytics sets cookies to measure visits. The site also stores a small flag in your browser for the
          current session so the enquiry pop-up is not shown again after you close it. You can block or delete
          cookies in your browser settings; the site will still work.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep enquiry and booking information for as long as we need it to serve you and to keep proper business
          records, and then delete it.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us to see, correct or delete the personal information we hold about you, or to stop contacting
          you, by emailing <a href="mailto:hello@bharatmile.com">hello@bharatmile.com</a> or messaging us on WhatsApp
          at +91-9636974688.
        </p>

        <h2>Changes</h2>
        <p>
          If we change how we handle your information, we will update this page and the date at the top.
        </p>

        <h2>Contact</h2>
        <p>
          BharatMile, Jaipur, Rajasthan, India
          <br />
          Email: <a href="mailto:hello@bharatmile.com">hello@bharatmile.com</a>
          <br />
          Phone / WhatsApp: +91-9636974688
        </p>
        <p>
          <Link to="/contact">Contact us</Link> · <Link to="/">Back to home</Link>
        </p>
      </div>
    </article>
  );
}
