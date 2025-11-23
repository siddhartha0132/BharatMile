import React from "react";
import { Helmet } from "react-helmet";

export default function TatkalRailway() {
  
  // Structured Data (JSON-LD) for SEO: Article and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/irctc-tatkal-booking-guide" // **UPDATE with actual URL**
        },
        headline: "IRCTC Tatkal Booking: The Definitive Step-by-Step Guide for Confirmed Tickets",
        image: ["https://example.com/images/irctc-tatkal-booking.jpg", "https://example.com/images/train-journey-tatkal.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Rail Travel Insights" // **UPDATE with actual author**
        },
        publisher: {
          "@type": "Organization",
          name: "IRCTC Travel Guides", // **UPDATE Publisher Name**
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "A definitive guide on how to book IRCTC Tatkal tickets fast. Covers precise timings for AC and Non-AC classes, step-by-step instructions, use of the Master List, and technical tips to ensure confirmed bookings for urgent travel."
      },
      // 2. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the key difference between Tatkal and Premium Tatkal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tatkal has a fixed price, while **Premium Tatkal** uses dynamic pricing (prices increase as demand rises). Both schemes operate under the same timings, but Premium Tatkal does not allow concession or RAC/Waiting List tickets."
            }
          },
          {
            "@type": "Question",
            name: "How many passengers can be booked on one Tatkal ticket?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A maximum of **four passengers** can be booked on a single Tatkal ticket, unlike the six allowed in General quota booking."
            }
          },
        ]
      }
    ]
  };

  const faqItems = [
    { 
      q: "What is the key difference between Tatkal and Premium Tatkal?", 
      a: "Tatkal has a fixed price, while **Premium Tatkal** uses dynamic pricing (prices increase as demand rises). Both schemes operate under the same timings, but Premium Tatkal does not allow concession or RAC/Waiting List tickets." 
    },
    { 
      q: "How many passengers can be booked on one Tatkal ticket?", 
      a: "A maximum of **four passengers** can be booked on a single Tatkal ticket, unlike the six allowed in General quota booking." 
    },
    {
      q: "When can I book a Tatkal ticket?",
      a: "Tatkal booking opens exactly **one day** prior to the date of journey from the originating station. For example, for a train on the 25th, booking opens on the 24th."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- SEO Helmet --- */}
      <Helmet>
        <title>IRCTC Tatkal Booking: The Definitive Step-by-Step Guide for Confirmed Tickets</title>
        <meta
          name="description"
          content="A definitive guide on how to book IRCTC Tatkal tickets fast. Covers precise timings for AC and Non-AC classes, step-by-step instructions, use of the Master List, and technical tips to ensure confirmed bookings for urgent travel."
        />
        <meta
          name="keywords"
          content="Tatkal booking, IRCTC tatkal, Indian Railways tatkal, book tatkal fast, tatkal tips, tatkal timings, confirmed tatkal tickets"
        />
        <meta property="og:title" content="IRCTC Tatkal Booking: Step-by-Step Guide for Confirmed Tickets" />
        <meta property="og:description" content="Master the art of Tatkal booking! Complete guide to timings, preparation, and pro tips to secure confirmed tickets on IRCTC fast." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://example.com/irctc-tatkal-booking-guide" />
        <meta property="og:image" content="https://example.com/images/irctc-tatkal-booking.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* --- Header --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-red-700">
          IRCTC Tatkal Booking: The Definitive Step-by-Step Guide 🚄💨
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Booking Tatkal tickets on IRCTC is a race against the clock! Seats
          get filled in seconds for popular routes. Here’s a simple, clear guide to help you increase your chances of getting a confirmed ticket.
        </p>
      </header>

      {/* --- Section 1: Tatkal Timings & Quota --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-red-600">
          1. Tatkal Quota Timings and Rules
        </h2>
        <p className="mt-3 leading-relaxed">
          The Tatkal quota opens exactly **one day in advance** of the journey date from the train's originating station. Missing the exact second can mean losing your ticket.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-red-500">Official Opening Times (IST)</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quota/Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking Starts At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Example Classes</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">AC Classes</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-700 font-bold">10:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap">1A, 2A, 3A, CC, 3E</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Non-AC Classes</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-700 font-bold">11:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap">SL (Sleeper), 2S (Second Seating)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-4 text-red-500">Key Tatkal Rules</h3>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>**Max Passengers:** Limited to **4** passengers per PNR.</li>
          <li>**Cancellation/Refund:** No refund on confirmed Tatkal tickets upon cancellation.</li>
          <li>**ID Proof:** At least one passenger must carry a valid photo ID (Aadhaar, PAN, Voter ID).</li>
        </ul>
      </section>
      
      <hr className="my-8 border-red-200" />

      {/* --- Section 2: Preparation: The Master List Advantage --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-red-600">
          2. Master Preparation: Use the IRCTC Master List
        </h2>
        <p className="mt-3 leading-relaxed">
          The biggest time-saver is the **Master List** feature on the IRCTC website/app. This allows you to pre-save all passenger details, eliminating manual data entry when the booking window opens.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-red-500">Master List & Payment Setup</h3>
        <ol className="list-decimal ml-6 space-y-2 mt-2">
          <li>**Create Master List:** Go to **My Profile > Master List** on the IRCTC dashboard. Add the full name, age, gender, berth preference, and ID card number for *all* travelers.</li>
          <li>**Pre-Login:** Log into the IRCTC website/app **5 minutes before** the window opens (9:55 AM for AC, 10:55 AM for Non-AC).</li>
          <li>**Pre-Fill Route:** Have the train number, journey date, and destination stations pre-selected.</li>
          <li>**Payment:** Ensure your UPI app is open on your mobile or your Netbanking credentials are ready for the quickest payment.</li>
        </ol>
      </section>

      <hr className="my-8 border-red-200" />

      {/* --- Section 3: Step-by-Step Execution (The Race) --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-red-600">
          3. Step-by-Step Booking Execution
        </h2>
        <p className="mt-3 leading-relaxed">
          Follow these steps exactly between 10:00 AM and 10:01 AM (or 11:00 AM and 11:01 AM):
        </p>

        <h3 className="text-xl font-semibold mt-4 text-red-500">The 60-Second Drill</h3>
        <ol className="list-decimal ml-6 space-y-3 mt-2 font-semibold">
          <li>
            **09:59 AM:** Refresh the page once and enter the captcha/security code **before** 10:00 AM.
          </li>
          <li>
            **10:00:00 AM (Sharp):** Click on the **Tatkal quota** option and select the desired train and class immediately.
          </li>
          <li>
            **Passenger Details:** Select passengers instantly from your **Master List**. Do not make any edits.
          </li>
          <li>
            **Review:** Skip any optional services (travel insurance) and enter the payment captcha/code.
          </li>
          <li>
            **Payment:** Choose **UPI** (fastest) or **Netbanking**. Complete the transaction in the bank/payment gateway screen **within 30 seconds**.
          </li>
          <li>
            **Confirmation:** Do not close the payment window until you are redirected back to the IRCTC confirmation page.
          </li>
        </ol>
      </section>

      <hr className="my-8 border-red-200" />

      {/* --- Section 4: Pro Tips --- */}
      <section className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
        <h2 className="text-3xl font-bold text-yellow-800">
          4. 💡 Pro Tips for a Confirmed Ticket
        </h2>
        <ul className="list-disc ml-6 space-y-3 mt-4">
          <li>
            **Use App/Desktop:** Some users find the IRCTC app slightly faster; others prefer the desktop interface. Practice your sequence on both before the day.
          </li>
          <li>
            **Fastest Payment:** UPI is generally the fastest payment gateway as it requires minimal data entry. Netbanking can be slow due to multiple authentications.
          </li>
          <li>
            **Avoid Peak Internet:** Use a stable internet connection (4G/5G or fiber broadband). Avoid public Wi-Fi.
          </li>
          <li>
            **Alternative Quota:** If Tatkal seats are gone, immediately check the **Premium Tatkal** quota, although the price will be significantly higher.
          </li>
        </ul>
      </section>

      <hr className="my-8 border-red-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="tatkal-faq">
        <h2 className="text-3xl font-bold text-red-600">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-red-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — IRCTC Travel Guides. Book fast and travel safely!
      </footer>
    </div>
  );
}