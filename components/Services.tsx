"use client";

const services = [
  { num: "01", title: "Land Development", desc: "Full civil engineering support for residential, commercial, and mixed-use projects across all Texas jurisdictions — from feasibility through construction documents." },
  { num: "02", title: "Platting & Subdivision", desc: "Preparation and processing of subdivision plats, replats, and amending plats in full compliance with local and state requirements." },
  { num: "03", title: "Permitting", desc: "Expert navigation of municipal, county, and state permitting processes — from preliminary approvals to final permits." },
  { num: "04", title: "Civil Engineering Design", desc: "Drainage, grading, utility layouts, and infrastructure design — sealed and stamped by a licensed Professional Engineer." },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#F4F1EC" }}>
      <div className="max-w-screen-xl mx-auto px-8" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "72px" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A", marginBottom: "16px" }}>What We Do</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(38px, 5vw, 64px)", color: "#0E0D0B", letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>Our Services</h2>
          </div>
          <a href="#contact" className="hidden md:block"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", background: "#0E0D0B", padding: "14px 26px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#C9911A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0E0D0B")}
          >Start a Project →</a>
        </div>

        <div style={{ borderTop: "1px solid #DDD9D0" }}>
          {services.map((s) => (
            <div key={s.num}
              className="group"
              style={{ display: "flex", gap: "40px", padding: "48px 0", borderBottom: "1px solid #DDD9D0", alignItems: "flex-start", cursor: "default" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#C9911A", paddingTop: "6px", minWidth: "30px", flexShrink: 0 }}>{s.num}</span>
              <div style={{ flex: 1 }}>
                <h3 className="group-hover:text-[#C9911A] transition-colors"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 30px)", color: "#0E0D0B", letterSpacing: "-0.02em", marginBottom: "14px", lineHeight: 1.1 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "#6B6355", lineHeight: 1.85, maxWidth: "600px", margin: 0 }}>{s.desc}</p>
              </div>
              <a href="#contact" className="hidden md:inline-block"
                style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C9080", textDecoration: "none", paddingTop: "6px", flexShrink: 0, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9911A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9C9080")}
              >Inquire →</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
