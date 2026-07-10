"use client";

import { Check } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Land Development",
    desc: "End-to-end engineering support for residential, commercial, and mixed-use projects — turning raw land into buildable, permitted sites.",
    items: [
      "Residential, Commercial & Mixed-Use Projects",
      "Engineering Due Diligence & Feasibility",
      "Concept Layouts & Site Planning",
      "Utility & Infrastructure Coordination",
      "Developer & Land Owner Consulting",
    ],
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=70",
    alt: "Raw Texas land being prepared for development",
  },
  {
    num: "02",
    title: "Platting & Subdivision",
    desc: "Preparation and processing of subdivision plats — managed start to finish, from preliminary layout to a recorded plat.",
    items: [
      "Preliminary & Final Plats",
      "Replats & Amending Plats",
      "Subdivision Layout & Lot Design",
      "Easements & Right-of-Way Exhibits",
      "City & County Plat Recording",
    ],
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=70",
    alt: "Subdivision plat drawings and survey plans",
  },
  {
    num: "03",
    title: "Permitting",
    desc: "We navigate municipal, county, and state processes on your behalf — keeping your project moving and your approvals on schedule.",
    items: [
      "Municipal & County Permits",
      "State Agency Coordination",
      "Zoning Applications & Exhibits",
      "Floodplain & Drainage Permits",
      "Agency Review & Comment Response",
    ],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=70",
    alt: "Permit documents and project paperwork",
  },
  {
    num: "04",
    title: "Civil Engineering Design",
    desc: "Sealed, construction-ready civil design by a licensed Texas Professional Engineer — precision engineering and clear communication.",
    items: [
      "Drainage Studies & Stormwater Design",
      "Grading Design",
      "Water & Wastewater Utility Layouts",
      "Paving & Infrastructure Design",
      "Construction Plan Sets",
    ],
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=70",
    alt: "Civil engineer reviewing infrastructure design plans",
  },
];

export default function ServiceSections() {
  return (
    <div id="services">
      {services.map((s, i) => (
        <section key={s.num} style={{ background: i % 2 === 0 ? "#F7F5F0" : "#F4F1EC" }}>
          <div className="max-w-screen-xl mx-auto px-8" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20`}>

              <div className={i % 2 === 1 ? "md:order-2" : ""} style={{ position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.alt}
                  style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block", boxShadow: "0 24px 48px rgba(14,13,11,0.18)" }} />
                <span aria-hidden style={{
                  position: "absolute", inset: i % 2 === 1 ? "-16px -16px 16px 16px" : "-16px 16px 16px -16px",
                  border: "1px solid #C9911A", zIndex: -1,
                }} />
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A", marginBottom: "16px" }}>
                  {s.num} — Service
                </p>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(30px, 3.5vw, 44px)", color: "#0E0D0B", letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: "18px" }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "#6B6355", lineHeight: 1.85, marginBottom: "28px", maxWidth: "520px" }}>
                  {s.desc}
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid #DDD9D0" }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "13px 0", borderBottom: "1px solid #DDD9D0", fontSize: "14.5px", fontWeight: 400, color: "#1C1A16" }}>
                      <Check size={15} style={{ color: "#C9911A", flexShrink: 0 }} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                  style={{ display: "inline-block", marginTop: "30px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", background: "#0E0D0B", padding: "14px 26px", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#C9911A")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0E0D0B")}
                >Inquire About {s.title} →</a>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
