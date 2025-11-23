import React from "react";
import { Helmet } from "react-helmet";
//import jodhpurHero from '../assets/Jodhpur.jpg'  // uncomment and provide your image

export default function Jodhpur() {
  const company = {
    name: "BharatMile",
    url: "https://bharatmile.example.com",
    logo: "/logo.png",
    contact: "+91-XXXXXXXXXX",
    cityPath: "/city/jodhpur",
  };

  const pageTitle = `Jodhpur Travel Guide — ${company.name} | Blue City Tourism, Attractions, Hotels, Food & Travel Tips`;
  const description = `Complete Jodhpur travel guide by ${company.name}. Discover Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, local bazaars, blue streets, best hotels, food, festivals, travel tips and how to build unforgettable Rajasthan experiences.`;
  const pageUrl = `${company.url}${company.cityPath}`;
  const imageUrl = `${company.url}/assets/jodhpur-hero.jpg`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Jodhpur famous for?",
        "acceptedAnswer": { "@type": "Answer", "text": "Jodhpur is famous for its blue-painted old city, Mehrangarh Fort, palaces, handicrafts, and vibrant desert culture." }
      },
      {
        "@type": "Question",
        "name": "When is the best time to visit Jodhpur?",
        "acceptedAnswer": { "@type": "Answer", "text": "October to March — cool, pleasant days ideal for sightseeing, cultural festivals, and desert safaris." }
      },
      {
        "@type": "Question",
        "name": "How many days should I plan for Jodhpur?",
        "acceptedAnswer": { "@type": "Answer", "text": "A well-paced 2–3 day itinerary covers the major attractions; 4–5 days allows nearby day trips and slower exploration." }
      }
    ]
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "url": company.url,
    "logo": company.logo
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <header className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-10">
        {/* Replace src with your imported image: src={jodhpurHero} */}
        <img src={imageUrl} alt="Mehrangarh Fort, Jodhpur" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Jodhpur — The Blue City</h1>
            <p className="mt-2 text-gray-200 max-w-xl">{description}</p>
          </div>
        </div>
      </header>

      {/* Introduction (rich, SEO-focused) */}
      <article className="prose prose-lg mb-12">
        <h2>Why Jodhpur Belongs on Every Traveller’s Map</h2>
        <p>
          Jodhpur is a living tapestry of India’s royal past and desert present. Often called the "Blue City" because of the wide swathes of vivid indigo-painted houses that climb up the ridge below the Mehrangarh Fort, Jodhpur offers a sensory-rich experience: monumental architecture, sun-baked lanes, bustling bazaars and a culinary culture shaped by centuries of Rajput hospitality.
        </p>

        <h3>Historical & Cultural Significance</h3>
        <p>
          Founded in 1459 by Rao Jodha, Jodhpur rose to prominence as the capital of the Marwar kingdom. Its strategic location and impressive fortifications made it a major center of power. Mehrangarh Fort, towering above the old city, is not just an architectural marvel but also a museum preserving the city’s royal artifacts, paintings, armory and stories. Walk into the palaces and courtyards and you’ll trace the evolution of Rajput aesthetics, patronage and civic life.
        </p>

        <h3>What Makes Jodhpur SEO-Gold for Travel & Business</h3>
        <p>
          For a company like {company.name}, pages about Jodhpur are SEO gold because they combine strong search intent ("things to do in Jodhpur", "Mehrangarh timings", "Jodhpur hotels") with rich, local content opportunities: long-form travel guides, detailed itineraries, local business directories (hotels, guides, restaurants), and experiential articles (food trails, craft workshops). Google rewards pages that fully answer user queries with depth, structure, and trust signals — which this page provides through structured data, FAQs, clear H tags, canonical links and share-ready Open Graph meta.
        </p>

        {/* Long-form sections: Attractions, Itineraries, Food, Stay, Practical tips */}
        <h2>Top Attractions — Don’t Miss</h2>
        <ul>
          <li><strong>Mehrangarh Fort</strong> — One of India’s largest forts, with museum galleries, expansive ramparts and unparalleled views of the blue old city below. Allow 2–3 hours for a full visit and don’t miss the audio tour.</li>
          <li><strong>Jaswant Thada</strong> — A marble cenotaph built in memory of Maharaja Jaswant Singh II; its serene gardens and lake views make it a peaceful stop after the fort.</li>
          <li><strong>Umaid Bhawan Palace</strong> — A portion still houses the royal family and a luxury hotel; the museum showcases classic 20th-century royal life and engineering feats of its era.</li>
          <li><strong>Old City & Clock Tower (Sardar Market)</strong> — Lively bazaars for spices, textiles, antiques and handicrafts; perfect for street photography and shopping.</li>
          <li><strong>Mandore Gardens</strong> — Historical gardens with memorials and pillars set in a pleasant landscape.</li>
        </ul>

        <h2>Suggested Itineraries</h2>
        <h4>2-Day Quick Visit</h4>
        <p>
          Day 1: Mehrangarh Fort (morning), Jaswant Thada (late morning), explore old city and Sardar Market (afternoon), rooftop dinner with fort view.
        </p>
        <h4>4–5 Day Cultural Immersion</h4>
        <p>
          Day 1–2: Explore forts, museums and the blue lanes. Day 3: Day trip to nearby Mandore and Osian (for desert temples & camel safari). Day 4: Craft workshops (block printing, pottery), culinary experiences and curated market tours. Day 5: Relaxed morning and departure.
        </p>

        <h2>Food & Dining — Local Flavors to Try</h2>
        <p>
          Jodhpur cuisine blends bold spices, dairy richness and desert ingenuity. Try the iconic <em>mawa kachori</em> for a sweet breakfast, <em>dal baati churma</em> for a hearty Rajasthani meal, and street snacks like <em>mirchi bada</em> and <em>pyaz kachori</em>. For fine dining, several heritage hotels and rooftop restaurants near the fort serve elevated Rajasthani thalis and fusion menus showcasing local produce.
        </p>

        <h2>Where to Stay — From Heritage to Budget</h2>
        <p>
          Jodhpur offers a spectrum of stays: heritage havelis and converted palaces (for immersive ambiance), boutique hotels with fort views, mid-range guesthouses, and budget hostels for backpackers. Booking rooftop rooms facing Mehrangarh Fort will amplify the experience with sunrise and sunset vistas.
        </p>

        <h2>Shopping & Craft — Authentic Souvenirs</h2>
        <p>
          Look for handcrafted textiles, block-printed fabrics, bandhani, leather goods, lacquer bangles, and silver jewelry. Skilled artisans operate both in formal shops and in smaller workshops—consider booking a short visit to see a craftsman at work and support local makers.
        </p>

        <h2>Practical Travel Tips</h2>
        <ol>
          <li><strong>Getting There:</strong> Jodhpur is well-connected by air, rail and road. The airport has frequent links to major Indian cities.</li>
          <li><strong>Local Transport:</strong> Auto-rickshaws, taxis and app-based cabs are common. For old-city lanes, walking is the best way to soak in the atmosphere.</li>
          <li><strong>Weather & Clothing:</strong> Winters are pleasant (Oct–Mar), summers are hot. Dress respectfully for religious sites and hot weather.</li>
          <li><strong>Health & Safety:</strong> Carry water, wear sunscreen, and prefer bottled water. Use registered guides for desert safaris and excursions.</li>
        </ol>

        <h2>Experiences & Tours That Drive Engagement</h2>
        <p>
          Offerings that convert readers into customers include curated walking tours, heritage hotel bookings, craft workshops, cooking classes, night photography tours, and private Jeep safaris into the Thar Desert. For BharatMile, converting organic search traffic into bookings requires clear calls-to-action, easy booking widgets, verified reviews, and prominent trust signals (payment security, partner hotel logos, contact numbers).
        </p>

        <h2>Local Events & Festivals — Plan Around the Calendar</h2>
        <p>
          Colorful festivals — from Diwali to local mela — bring Jodhpur to life. Check event timing when planning travel; festival visits offer extraordinary photo and cultural experiences but require earlier bookings.
        </p>

        <h2>SEO & Growth Strategy — Why this Page Helps BharatMile Become Big</h2>
        <p>
          This page is intentionally structured to capture high-intent keywords ("Jodhpur travel guide", "Mehrangarh Fort timings", "best rooftop restaurants Jodhpur", "Jodhpur hotels near Mehrangarh"). Long-form content of this depth signals expertise and satisfies multiple user intents: informational (what to see), transactional (where to book), and local (where to eat/shop). Pair this page with:
        </p>
        <ul>
          <li>Internal linking to related city pages, tours and services.</li>
          <li>Schema markup (FAQ, Organization) to surface rich results.</li>
          <li>Local business pages for hotels / restaurants with reviews and NAP (name, address, phone) consistency.</li>
          <li>High-quality images with descriptive alt text and optimized file sizes.</li>
          <li>Engaging media — short videos and 360-degree tours increase dwell-time and social shares.</li>
        </ul>

        <h2>Conversion Elements — Turn Visitors into Customers</h2>
        <p>
          Add these components near the top and throughout the page: sticky booking widget (hotels/tours), short contact form, micro-reviews/testimonials, "best time to visit" quick card, and clear pricing examples. A/B test hero CTAs ("Book a private walking tour", "Reserve a rooftop table") and track via Google Analytics and Search Console.
        </p>

        <h2>How BharatMile Can Scale from Local Guide to National Brand</h2>
        <p>
          Content like this is the foundation. Multiply it: city guides + curated tour products + verified partner hotels + user-generated reviews + a referral program. Use performance marketing (search ads for high-intent queries) combined with content-driven organic growth. Partnerships with local operators and influencers amplify reach — but sustained SEO value comes from consistently updated, authoritative pages like this one.
        </p>

        <h2>Accessibility & Performance — Technical SEO Musts</h2>
        <p>
          Ensure images are lazy-loaded, pages use server-side rendering (or prerender for important pages), and HTML headings follow a logical hierarchy. Add descriptive alt attributes, keyboard navigation, and fast Core Web Vitals (LCP, FID/INP, CLS) to improve rankings and UX.
        </p>

        <h2>Sample Local Links to Add (Replace with live links)</h2>
        <ul>
          <li><a href="#mehrangarh">Mehrangarh Fort — tickets & timings</a></li>
          <li><a href="#hotels">Top hotels in Jodhpur</a></li>
          <li><a href="#food">Local food guide</a></li>
        </ul>

        <h2>Final Notes & Next Steps</h2>
        <p>
          1) Replace placeholder URLs and images with your live assets. 2) Add local partner listings and product booking widgets. 3) Publish and submit the sitemap to Google Search Console. 4) Monitor Search Console for impressions, clicks and top queries — iterate on headings and FAQ to capture more long-tail queries.
        </p>

        <p>
          Jodhpur is a story — the goal of BharatMile should be to tell it in authoritative, actionable, and inspirational ways so users find value, stay longer, and convert. This page is ready to paste into your React project; import your images, wire booking widgets, and watch search traffic build as you replicate the model across other cities.
        </p>
      </article>

      {/* CTA block */}
      <section className="bg-blue-50 p-6 rounded-lg shadow mt-8">
        <h3 className="text-2xl font-semibold">Ready to turn visitors into loyal customers?</h3>
        <p className="mt-2">Add BharatMile booking widgets, partner listings and reviews. Need help integrating booking widgets or JSON-LD for local businesses? I can generate ready-to-paste snippets.</p>
        <div className="mt-4">
          <a href="#contact" className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg">Contact BharatMile Team</a>
        </div>
      </section>

    </main>
  );
}
