import React from "react";
import { Helmet } from "react-helmet";

export default function StudentDiscount() {
  
  // Structured Data (JSON-LD) for SEO: Article and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Article Schema for SEO Authority
      {
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://example.com/student-travel-discounts-india" // **UPDATE with actual URL**
        },
        headline: "The Ultimate Guide to Student Discounts on Flights, Trains, and Monuments in India",
        image: ["https://example.com/images/student-flight-discount.jpg", "https://example.com/images/taj-mahal-student-ticket.jpg"], // **UPDATE with actual image URLS**
        datePublished: "2025-11-23T08:00:00+05:30", 
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Person",
          name: "Student Travel Insights" 
        },
        publisher: {
          "@type": "Organization",
          name: "Campus Travel Guides", // **UPDATE Publisher Name**
          logo: {
            "@type": "ImageObject",
            url: "https://example.com/logo.png" // **UPDATE with actual logo URL**
          }
        },
        description: "A complete guide to student discounts on flights (IndiGo, Air India, Vistara), trains (rail passes), and Indian monuments (ASI). Learn eligibility, mandatory documents, and insider tips to save up to 50% on travel expenses while studying."
      },
      // 2. FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What documents are mandatory to avail a flight student discount?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You must carry a valid, physical college/university Photo ID card, a document for age proof (Aadhar/Passport), and often a printed copy of the discount authorization letter if required by the airline."
            }
          },
          {
            "@type": "Question",
            name: "Is the student discount available for foreign students at Indian monuments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, the highly discounted monument entry fee is typically reserved for Indian students. Foreign students still pay the foreign tourist rate, but often receive a smaller discount (sometimes 10-20%) upon showing a valid International Student Identity Card (ISIC)."
            }
          },
        ]
      }
    ]
  };

  const faqItems = [
    { 
      q: "What documents are mandatory to avail a flight student discount?", 
      a: "You must carry a valid, physical college/university Photo ID card, a document for age proof (Aadhar/Passport), and often a printed copy of the discount authorization letter if required by the airline." 
    },
    { 
      q: "Is the student discount available for foreign students at Indian monuments?", 
      a: "No, the highly discounted monument entry fee is typically reserved for Indian students. Foreign students still pay the foreign tourist rate, but often receive a smaller discount (sometimes 10-20%) upon showing a valid International Student Identity Card (ISIC)." 
    },
    {
      q: "Can I get a student discount for Indian Railway tickets?",
      a: "Yes. Indian Railways offers major concessions (up to 50% for Second/Sleeper Class for general students) for certain journeys, but this usually requires submitting a physical application form validated by your school/college."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      {/* --- SEO Helmet --- */}
      <Helmet>
        <title>The Ultimate Guide to Student Discounts on Flights, Trains, and Monuments in India</title>
        <meta
          name="description"
          content="A complete guide to student discounts on flights (IndiGo, Air India, Vistara), trains (rail passes), and Indian monuments (ASI). Learn eligibility, mandatory documents, and insider tips to save up to 50% on travel expenses while studying."
        />
        <meta
          name="keywords"
          content="student discount flights, student travel discounts India, monument student discounts, student ticket offers, IRCTC student concession, IndiGo Vistara student discount"
        />
        <meta property="og:title" content="Student Travel Discounts in India: Flights, Monuments, and More" />
        <meta property="og:description" content="Save money while travelling! Complete guide to student discounts on flights (IndiGo, Air India, Vistara), trains, and monuments. Learn eligibility and essential tips." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://example.com/student-travel-discounts-india" />
        <meta property="og:image" content="https://example.com/images/student-flight-discount.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* --- Header --- */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          Student Discounts on Flights, Trains, and Monuments in India 🎓💰
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Travelling as a student in India can be surprisingly affordable! Use this complete guide to access exclusive offers and save money while planning your next trip.
        </p>
      </header>

      {/* --- Section 1: Flight Discounts --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-600">
          1. ✈️ Student Discounts on Domestic Flights
        </h2>
        <p className="mt-3 leading-relaxed">
          Major Indian airlines offer concessions that include discounted base fares, allowance for heavier baggage, or complimentary seat selection for students aged **12 to 26**.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-indigo-500">Popular Student Flight Offers</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Airline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Benefit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligibility (Age/Documents)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">IndiGo</td>
                <td className="px-6 py-4 whitespace-nowrap">Up to **6% off** base fare + **10kg extra baggage**.</td>
                <td className="px-6 py-4 whitespace-nowrap">12 to 26 years, valid student ID.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Air India</td>
                <td className="px-6 py-4 whitespace-nowrap">Special **Youth Concession** on domestic routes.</td>
                <td className="px-6 py-4 whitespace-nowrap">12 to 25 years (varies), academic documents required.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">Vistara</td>
                <td className="px-6 py-4 whitespace-nowrap">Discounted base fares + additional baggage benefits.</td>
                <td className="px-6 py-4 whitespace-nowrap">18 to 25 years, valid student ID.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-xl font-semibold mt-4 text-red-600">Mandatory Requirements for Airport Check-in</h3>
        <p className="mt-2">
          **Always book through the airline's official website.** You **MUST** present the following at the check-in counter:
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>**Valid College/University Photo ID Card** (must be physical, unexpired).</li>
          <li>**Age Proof** (Aadhar Card, Passport, or Driving License).</li>
          <li>Sometimes, proof of current enrollment or a letter from the institution.</li>
        </ul>
      </section>
      
      <hr className="my-8 border-indigo-200" />

      {/* --- Section 2: Monument Discounts --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-600">
          2. 🏛️ Student Discounts at Historical Monuments
        </h2>
        <p className="mt-3 leading-relaxed">
          The Archaeological Survey of India (ASI) manages over 3,600 monuments, offering a massive **discount on entry fees** for Indian students, and sometimes a 100% discount.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-indigo-500">Major Monuments with Student Concessions</h3>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>**Taj Mahal, Agra:** Significant discount for Indian students (typically ₹50 instead of ₹250).</li>
          <li>**Red Fort, Delhi:** Highly discounted entry fee.</li>
          <li>**Qutub Minar, Delhi**</li>
          <li>**Ajanta & Ellora Caves, Maharashtra**</li>
          <li>**Group of Monuments at Hampi, Karnataka**</li>
        </ul>

        <p className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-800">
          **Insider Tip:** For most ASI sites, the Indian student fee is minimal, often **₹5 to ₹10**, compared to the general public rate of ₹30 to ₹50. Always carry your ID and ask before purchasing a ticket.
        </p>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 3: Train and Other Discounts --- */}
      <section className="mt-8">
        <h2 className="text-3xl font-bold text-indigo-600">
          3. 🚂 Train, Bus, and Other Student Offers
        </h2>

        <h3 className="text-xl font-semibold mt-4 text-indigo-500">Indian Railways Concessions</h3>
        <p className="mt-2">
          IRCTC provides substantial concessions for students, particularly for travel between home and educational institutions.
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>**General Education:** Up to **50% off** for general students in Second and Sleeper Class.</li>
          <li>**Research Students:** Concessions for certain research journeys.</li>
          <li>**Process:** This usually requires a **physical concession certificate** signed and stamped by the Head of your Institution, submitted to the railway booking counter *before* ticket purchase.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-indigo-500">Bus and Local Transport</h3>
        <p className="mt-2">
          Many State Road Transport Corporations (like KSRTC, TSRTC, etc.) offer bus passes or discounted fares for local travel, requiring a college-issued pass or ID.
        </p>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Section 4: Tips to Save More --- */}
      <section className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
        <h2 className="text-3xl font-bold text-yellow-800">
          4. 🎒 Pro Tips to Maximize Your Savings
        </h2>
        <ul className="list-disc ml-6 space-y-3 mt-4">
          <li>
            **Book Flight Discounts Early:** Student quotas are limited. Book flight tickets at least **15–20 days in advance** for the best chance of securing the offer.
          </li>
          <li>
            **The Physical ID is King:** Never rely on a screenshot or a digital copy of your student ID at an airport or ticket counter—they will almost always **require the physical, valid card.**
          </li>
          <li>
            **Combine Discounts:** If you get a discounted flight base fare, you still benefit from the **extra baggage allowance**, which is a huge money saver.
          </li>
          <li>
            **Explore Non-Concessions:** Sometimes, regular fares booked weeks in advance can be cheaper than the discounted student fare. **Always check both prices!**
          </li>
        </ul>
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- FAQ Section --- */}
      <section className="mt-12" id="student-discount-faq">
        <h2 className="text-3xl font-bold text-indigo-600">Frequently Asked Questions</h2>
        {faqItems.map((item, i) => (
          <details key={i} className="mt-3 p-4 border rounded-lg bg-gray-50">
            <summary className="cursor-pointer font-medium text-lg text-indigo-600">{item.q}</summary>
            <p className="mt-2 text-gray-700">{item.a}</p>
          </details>
        ))}
      </section>

      <hr className="my-8 border-indigo-200" />

      {/* --- Footer --- */}
      <footer className="mt-10 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} — Campus Travel Guides. Happy savings and safe travels!
      </footer>
    </div>
  );
}
