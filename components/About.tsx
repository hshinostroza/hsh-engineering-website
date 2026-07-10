"use client";

export default function About() {
  return (
    <section id="about" style={{ background: "#0E0D0B" }}>
      <div className="max-w-screen-xl mx-auto px-8" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="md:grid-cols-2 grid-cols-1">

          {/* Left */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A", marginBottom: "20px" }}>About HSH</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(38px, 5vw, 64px)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "40px" }}>
              Your Dedicated<br />Technical Partner.
            </h2>

            {/* Credential grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
              {[
                { label: "License", value: "Texas P.E." },
                { label: "Languages", value: "EN / ES" },
                { label: "Coverage", value: "Statewide TX" },
                { label: "Specialty", value: "Land & Civil" },
              ].map((c) => (
                <div key={c.label} style={{ background: "#0E0D0B", padding: "24px 20px" }}>
                  <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9911A", marginBottom: "8px" }}>{c.label}</p>
                  <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#fff", letterSpacing: "-0.01em", margin: 0 }}>{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <p style={{ fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.9, margin: 0 }}>
              Founded on the principle of providing developers and landowners with a dedicated technical partner, HSH Engineering brings licensed Professional Engineer expertise to every project — no matter the size or complexity.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.9, margin: 0 }}>
              We navigate the complexities of Texas land development from the first feasibility assessment through every permitting hurdle to your final approval. Every project is handled personally — not passed to a junior team.
            </p>
            <p style={{ fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.9, margin: 0 }}>
              Bilingual support in English and Spanish ensures clear communication with every stakeholder involved in your project.
            </p>
            <div style={{ marginTop: "12px" }}>
              <a href="#contact"
                style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E0D0B", background: "#C9911A", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#A07010")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C9911A")}
              >Work With Us →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
