import { useEffect } from "react";

export default function AndamanIslands() {
  useEffect(() => {
    document.title =
      "Scuba Diving in Andaman Islands for Beginners (2025 Complete Guide)";

    const set = (n, c, a = "name") => {
      let e = document.querySelector(`meta[${a}="${n}"]`);
      if (!e) {
        e = document.createElement("meta");
        e.setAttribute(a, n);
        document.head.appendChild(e);
      }
      e.setAttribute("content", c);
    };

    // ✅ CORE SEO
    set(
      "description",
      "Beginner guide to scuba diving in Andaman Islands. Best dive locations, updated prices, safety tips & best season to dive in 2025."
    );
    set(
      "keywords",
      "scuba diving in Andaman, Andaman scuba for beginners, Havelock scuba diving, Neil island diving, Andaman adventure sports"
    );

    // ✅ OPEN GRAPH
    set(
      "og:title",
      "Scuba Diving in Andaman Islands – Beginner Guide 2025",
      "property"
    );
    set(
      "og:description",
      "Complete scuba diving guide in Andaman Islands with prices, best dive locations & safety tips.",
      "property"
    );
    set("og:type", "article", "property");
    set("og:image", "/andaman-cover.jpg", "property");
    set("og:url", window.location.href, "property");

    // ✅ TWITTER
    set("twitter:card", "summary_large_image");
    set("twitter:title", "Scuba Diving in Andaman – 2025 Guide");
    set(
      "twitter:description",
      "Best locations, prices & safety tips for first-time scuba divers in Andaman."
    );
    set("twitter:image", "/andaman-cover.jpg");
  }, []);

  return (
    <main className="bg-[#f7f9fc] text-gray-800">
      <article className="max-w-5xl mx-auto px-4 py-14 grid lg:grid-cols-4 gap-10">
        
        {/* ✅ MAIN BLOG */}
        <div className="lg:col-span-3">
          <header className="mb-10">
            <img
              src="/andaman-cover.jpg"
              alt="Scuba Diving in Andaman Islands for Beginners"
              className="rounded-xl shadow-lg mb-6 w-full"
              loading="lazy"
            />

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Scuba Diving in Andaman Islands for Beginners (2025 Guide)
            </h1>

            <p className="text-gray-600 mt-3">
              Updated guide covering best dive spots, latest prices, safety tips
              and everything you should know before your first scuba dive in the
              Andaman Islands.
            </p>

            <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
              <span>By India Travel Insights</span>
              <span>•</span>
              <span>{new Date().toDateString()}</span>
            </div>
          </header>

          {/* ✅ CONTENT */}
          <section className="space-y-10 leading-relaxed">

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Why Andaman Is Best for Beginner Scuba Diving
              </h2>
              <p>
                The Andaman Islands offer calm seas, crystal-clear water,
                colourful coral reefs, and world-class instructors — making it
                the safest destination in India for first-time scuba divers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Best Places for Scuba Diving in Andaman
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Havelock Island – Elephant Beach & Nemo Reef</li>
                <li>Neil Island – Shallow water training zones</li>
                <li>North Bay Island – Coral-rich beginner reefs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Scuba Diving Price in Andaman (2025)
              </h2>
              <p>
                The average beginner scuba dive in Andaman costs between{" "}
                <strong>₹3,000 – ₹6,000 per person</strong>. This usually includes
                training, instructor fees, diving equipment, boat ride and photos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                What You Will See Underwater
              </h2>
              <p>
                Expect to see clownfish (Nemo), parrotfish, sea turtles, vibrant
                coral gardens, and crystal-clear visibility up to 30–40 meters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Important Safety Tips for Beginners
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Never hold your breath underwater</li>
                <li>Follow instructor hand signals strictly</li>
                <li>Avoid diving with cold, sinus, or ear infections</li>
                <li>Never touch corals or marine animals</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Best Time for Scuba Diving in Andaman
              </h2>
              <p>
                The best season for scuba diving in Andaman is from{" "}
                <strong>October to May</strong>, when ocean visibility is highest
                and sea conditions are calm.
              </p>
            </div>

          </section>

          {/* ✅ INTERNAL BACKLINKS */}
          <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Related Travel Guides</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-blue-600 font-medium">
              <li><a href="/jaipur-tour">→ Jaipur Sightseeing Tour Guide</a></li>
              <li><a href="/udaipur-tour">→ Udaipur Honeymoon Packages</a></li>
              <li><a href="/jaisalmer-safari">→ Jaisalmer Desert Safari Guide</a></li>
              <li><a href="/ranthambore-safari">→ Ranthambore Jungle Safari Booking</a></li>
              <li><a href="/bikaner-tour">→ Bikaner Camel Safari Experience</a></li>
              <li><a href="/jodhpur-tour">→ Jodhpur Heritage Palace Tour</a></li>
            </ul>
          </section>

          {/* ✅ EXTERNAL AUTHORITY LINKS */}
          <section className="mt-12 bg-gray-50 p-6 rounded-xl border">
            <h3 className="text-lg font-semibold mb-3">
              Trusted Tourism Resources
            </h3>
            <ul className="space-y-2 text-blue-600 text-sm font-medium">
              <li>
                <a
                  href="https://www.andamantourism.gov.in"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  → Official Andaman Tourism Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.incredibleindia.org"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  → Incredible India Adventure Tourism
                </a>
              </li>
              <li>
                <a
                  href="https://www.padi.com"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  → PADI Official Scuba Certification Guide
                </a>
              </li>
            </ul>
          </section>

          {/* ✅ FAQ */}
          <section className="mt-16 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions (Scuba Diving in Andaman)
            </h3>

            <div className="space-y-5 text-gray-700">
              <div>
                <strong>Q. Is scuba diving safe in Andaman for beginners?</strong>
                <p>Yes, all dives are conducted under certified instructors with full safety equipment.</p>
              </div>

              <div>
                <strong>Q. Can non-swimmers do scuba diving in Andaman?</strong>
                <p>Yes, non-swimmers can safely do beginner scuba diving.</p>
              </div>

              <div>
                <strong>Q. What is the minimum age for scuba diving?</strong>
                <p>Usually 10 years and above.</p>
              </div>

              <div>
                <strong>Q. How deep is beginner scuba diving?</strong>
                <p>Most beginner dives go between 6 to 12 meters deep.</p>
              </div>

              <div>
                <strong>Q. How long does beginner scuba diving last?</strong>
                <p>The total experience lasts around 2 hours including training.</p>
              </div>
            </div>
          </section>

          {/* ✅ WHATSAPP CTA */}
          <div className="mt-16 bg-green-600 text-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold">
              Want Live Prices & Instant Booking Help?
            </h3>

            <p className="mt-2 text-green-100">
              Chat directly with our Andaman travel expert on WhatsApp for best deals.
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* ✅ SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl p-5 shadow-md">
            <h4 className="font-semibold mb-3">Why Trust Us?</h4>
            <p className="text-sm text-gray-600">
              We help 5,000+ travelers every month with verified bookings,
              honest pricing, and expert travel guidance across India.
            </p>
          </div>
        </aside>

      </article>
    </main>
  );
}
