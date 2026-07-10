const projects = [
  {
    title: "Residential Subdivision Plat",
    location: "El Paso, TX",
    type: "Platting & Subdivision",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop",
  },
  {
    title: "Commercial Development Site",
    location: "San Antonio, TX",
    type: "Land Development",
    img: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=600&auto=format&fit=crop",
  },
  {
    title: "Drainage & Grading Design",
    location: "Austin, TX",
    type: "Civil Engineering Design",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
  },
  {
    title: "Municipal Permit Processing",
    location: "Houston, TX",
    type: "Permitting",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop",
  },
  {
    title: "Mixed-Use Land Entitlement",
    location: "Dallas, TX",
    type: "Land Development",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop",
  },
  {
    title: "Utility Layout & Infrastructure",
    location: "Laredo, TX",
    type: "Civil Engineering Design",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-4">Featured Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            A selection of civil engineering and land development projects completed across Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#C9A84C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[#0B1F3A] font-semibold text-base mb-1">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
