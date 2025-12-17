export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hi, I want to explore India and plan a trip. Please call me once."
  );

  return (
    <a
      href={`https://wa.me/919257143175?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-6 z-[9999] bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
}

