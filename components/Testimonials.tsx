const testimonials = [
  {
    quote:
      "HSH Engineering handled our subdivision plat from start to finish. Hector navigated the city approval process faster than we expected and kept us informed the whole way.",
    name: "Carlos M.",
    role: "Real Estate Developer, El Paso TX",
  },
  {
    quote:
      "We needed a bilingual engineer who understood both the technical side and could communicate with our Spanish-speaking partners. HSH was the perfect fit.",
    name: "Maria R.",
    role: "Land Investor, San Antonio TX",
  },
  {
    quote:
      "Professional, responsive, and thorough. Our permitting process was seamless thanks to HSH Engineering. I'd recommend them to any developer in Texas.",
    name: "James T.",
    role: "Commercial Developer, Austin TX",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">
            Client Feedback
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-[#C9A84C] text-4xl leading-none mb-4">&ldquo;</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-[#0B1F3A] text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
