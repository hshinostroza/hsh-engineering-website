"use client";

import { UserCheck, Landmark } from "lucide-react";

const pillars = [
  {
    icon: UserCheck,
    title: "You Work Directly With the Engineer",
    desc: "No hand-offs, no layers of junior staff. The principal engineer is on your project from the first site conversation to the final submittal.",
  },
  {
    icon: Landmark,
    title: "Private Development, Public-Works Depth",
    desc: "From subdivision plats and single-lot developments to City of San Antonio bond projects coordinated with TxDOT and the San Antonio River Authority.",
  },
];

export default function ServicesAbout() {
  return (
    <section id="about" style={{ background: "#F7F5F0" }}>
      <div className="max-w-screen-xl mx-auto px-8" style={{ paddingTop: "110px", paddingBottom: "110px" }}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20" style={{ alignItems: "start", marginBottom: "72px" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A", marginBottom: "16px" }}>
              Who You&apos;ll Work With
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(34px, 4.5vw, 56px)", color: "#0E0D0B", letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0 }}>
              An Engineer Who<br />Knows Both Sides<br />of the Table.
            </h2>
          </div>
          <div className="about-text-shift">
            <p style={{ fontSize: "clamp(18px, 1.6vw, 21px)", fontWeight: 300, color: "#1C1A16", lineHeight: 1.8, marginBottom: "24px" }}>
              HSH Engineering is a San Antonio–based civil engineering firm serving property owners,
              private developers, and municipalities across Bexar County and the surrounding region.
              Founded in 2025, the firm is young by design — built so that every client works directly
              with a principal engineer who brings over seven years of civil engineering experience
              to each project.
            </p>
            <p style={{ fontSize: "clamp(17px, 1.4vw, 19px)", fontWeight: 300, color: "#6B6355", lineHeight: 1.8, margin: 0 }}>
              That experience spans private land development, public infrastructure design, and years
              spent performing development review on behalf of area municipalities. It means your plans
              aren&apos;t just drawn to code — they&apos;re prepared by someone who has{" "}
              <em style={{ color: "#A07010" }}>sat on the reviewer&apos;s side of the desk</em> and knows
              how to move a project through approval without surprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ borderTop: "1px solid #DDD9D0", paddingTop: "56px" }}>
          {pillars.map((p) => (
            <div key={p.title}>
              <p.icon size={20} style={{ color: "#C9911A", marginBottom: "18px" }} strokeWidth={1.75} />
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "28px", color: "#0E0D0B", letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: "16px" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "20px", fontWeight: 300, color: "#6B6355", lineHeight: 1.7, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
