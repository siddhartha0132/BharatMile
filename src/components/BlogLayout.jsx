import { useEffect } from "react";
import { Link } from "react-router-dom";

const SITE = "https://bharatmile.com";

function addJsonLd(id, data) {
  document.getElementById(id)?.remove();
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = id;
  s.text = JSON.stringify(data);
  document.head.appendChild(s);
  return () => s.remove();
}

const formatDate = (iso, lang) =>
  new Date(iso).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { month: "long", year: "numeric" });

// Shared shell for new blog posts: meta, Article + FAQPage schema, visible
// FAQs and a WhatsApp CTA. Canonical/OG tags are handled by SiteSeo.
export default function BlogLayout({
  path, title, description, h1, published, updated = published, readMins,
  faqs = [], whatsappText, lang = "en", children,
}) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    const removeArticle = addJsonLd("ld-article", {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: h1,
      description,
      inLanguage: lang === "hi" ? "hi-IN" : "en-IN",
      datePublished: published,
      dateModified: updated,
      mainEntityOfPage: `${SITE}${path}`,
      image: `${SITE}/preview.jpg`,
      author: { "@type": "Organization", name: "BharatMile", url: SITE },
      publisher: { "@type": "Organization", name: "BharatMile", logo: { "@type": "ImageObject", url: `${SITE}/favicon-512.png` } },
    });
    const removeFaq = faqs.length
      ? addJsonLd("ld-faq", {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })
      : () => {};
    return () => {
      removeArticle();
      removeFaq();
    };
  }, [path, title, description, h1, published, updated, lang, faqs]);

  const hi = lang === "hi";
  const wa = `https://wa.me/919636974688?text=${encodeURIComponent(whatsappText)}`;

  return (
    <article lang={lang} className="max-w-3xl mx-auto px-5 sm:px-6 py-12 text-gray-800">
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link to="/" className="hover:underline">{hi ? "होम" : "Home"}</Link> ›{" "}
        <Link to="/blogs" className="hover:underline">{hi ? "ब्लॉग" : "Blogs"}</Link>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">{h1}</h1>
      <p className="mt-3 text-sm text-gray-500">
        {hi ? "अपडेट" : "Updated"} {formatDate(updated, lang)} · {readMins} {hi ? "मिनट" : "min read"} · {hi ? "BharatMile टीम, जयपुर" : "BharatMile team, Jaipur"}
      </p>

      <div className="prose mt-8">{children}</div>

      <div className="mt-12 rounded-2xl bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-lg font-bold text-gray-900">{hi ? "सफारी बुक करनी है? WhatsApp करें" : "Ready to book? Message us on WhatsApp"}</p>
        <p className="mt-1 text-gray-600">{hi ? "तारीख़ और लोगों की संख्या भेजें — हम कुछ ही मिनटों में जवाब देते हैं।" : "Send your dates and group size — we reply within minutes."}</p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
        >
          WhatsApp +91-9636974688
        </a>
      </div>

      {faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">{hi ? "अक्सर पूछे जाने वाले सवाल" : "Frequently asked questions"}</h2>
          <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none font-semibold text-gray-900 flex justify-between gap-4">
                  {f.q}
                  <span className="text-[#a8523b] group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-2 text-gray-700 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
