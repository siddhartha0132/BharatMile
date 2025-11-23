import React from "react";
import { Helmet } from "react-helmet";

export default function ChandniChowk() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
        <title>The Street Food of Delhi: Chandni Chowk Guide</title>

        <meta
          name="description"
          content="Ultimate Chandni Chowk street food guide: parathas, jalebi, chole bhature, kebabs, lassi, Dariba Kalan lanes, best stalls, safety tips, and how to explore Old Delhi like a pro."
        />
        <meta
          name="keywords"
          content="Chandni Chowk food guide, Delhi street food, Old Delhi food tour, paratha wali gali, jama masjid kebabs, chole bhature Delhi, Chandni Chowk snacks"
        />

        {/* Open Graph */}
        <meta property="og:title" content="The Street Food of Delhi: Chandni Chowk Guide" />
        <meta
          property="og:description"
          content="Explore the best street food of Chandni Chowk — parathas, jalebi, kebabs, lassi, and hidden food lanes of Old Delhi."
        />
        <meta
          property="og:image"
          content="https://example.com/images/chandni-chowk-food.jpg"
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chandni Chowk Street Food Guide" />
        <meta
          name="twitter:description"
          content="Your ultimate guide to Old Delhi’s most iconic street foods and hidden lanes."
        />
        <meta
          name="twitter:image"
          content="https://example.com/images/chandni-chowk-food.jpg"
        />

        {/* Canonical */}
        <link rel="canonical" href={window.location.href} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Street Food of Delhi: Chandni Chowk Guide",
            description:
              "A complete guide to Chandni Chowk's street food — famous lanes, must-try snacks, hygiene tips, and travel advice.",
            image: "https://example.com/images/chandni-chowk-food.jpg",
            author: {
              "@type": "Person",
              name: "India Travel Insights",
            },
            publisher: {
              "@type": "Organization",
              name: "India Travel Insights",
              logo: {
                "@type": "ImageObject",
                url: "https://example.com/images/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": window.location.href,
            },
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">
        The Street Food of Delhi: Chandni Chowk Guide
      </h1>

      <p className="mb-4">
        Chandni Chowk is the beating heart of Old Delhi — chaotic, aromatic, and
        absolutely unforgettable. For food lovers, this centuries-old market is a
        full-blown treasure hunt of parathas, chaat, jalebi, kebabs, lassi, and
        flavours that hit different. Here’s everything you need to explore it
        confidently and deliciously.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">🔥 Must-Try Street Foods</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <b>Paratha Wali Gali</b> — stuffed parathas with aam pickle & thick
          lassi
        </li>
        <li>
          <b>Old Famous Jalebi Wala</b> — giant jalebis fried in pure desi ghee
        </li>
        <li>
          <b>Natraj Dahi Bhalle</b> — creamy, chilled, tangy perfection
        </li>
        <li>
          <b>Karim’s</b> — kebabs, biryani & mutton delicacies near Jama Masjid
        </li>
        <li>
          <b>Chole Kulche & Chole Bhature</b> — iconic roadside flavours
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">📍 Best Lanes to Explore</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Paratha Wali Gali — breakfast heaven</li>
        <li>Dariba Kalan — silver shops + refreshing lassi</li>
        <li>Chawri Bazaar — snacks, chaat, thandai & street drinks</li>
        <li>Jama Masjid Area — kebabs, nihari & Mughlai food hotspots</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">🛡️ Hygiene & Safety Tips</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Choose busy food stalls — high turnover = fresh food</li>
        <li>Avoid tap water; carry your own bottle</li>
        <li>Cash helps — UPI is available but not everywhere</li>
        <li>Wear comfortable shoes — long, crowded lanes ahead</li>
        <li>Pick vendors cooking food in front of you</li>
      </ul>

      <p className="mt-4">
        Chandni Chowk hits you with noise, colour, history, and irresistible 
        food smells — all at once. Go with curiosity, patience, and an empty 
        stomach. You’ll walk out full, happy, and with stories worth telling.
      </p>
    </div>
  );
}
