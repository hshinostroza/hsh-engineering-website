"use client";

export default function Hero() {
  return (
    <section style={{ background: "#0E0D0B", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", overflow: "hidden" }}>

      {/* Gold vertical accent */}
      <div style={{ position: "absolute", top: 0, right: "12%", width: "1px", height: "100%", background: "linear-gradient(to bottom, transparent, rgba(201,145,26,0.3) 40%, transparent)" }} />

      {/* Large background number */}
      <div style={{ position: "absolute", right: "-2%", bottom: "-4%", fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(220px, 30vw, 420px)", color: "rgba(255,255,255,0.025)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
        PE
      </div>

      <div className="max-w-screen-xl mx-auto px-8 w-full" style={{ paddingBottom: "100px", paddingTop: "140px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "36px" }}>
          <div style={{ width: "40px", height: "1px", background: "#C9911A" }} />
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A" }}>
            Licensed P.E. · Civil Engineering · Texas
          </span>
        </div>

        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(56px, 8.5vw, 120px)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: "48px" }}>
          Building<br />
          Texas{" "}
          <em className="not-italic" style={{ color: "#C9911A" }}>From</em><br />
          the Ground Up.
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-end" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px", fontWeight: 300, lineHeight: 1.85, maxWidth: "440px", margin: 0 }}>
            Trusted civil engineering, land development, and permitting across all Texas jurisdictions — handled personally by a licensed Professional Engineer.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#contact"
              style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E0D0B", background: "#C9911A", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#A07010")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C9911A")}
            >Get a Quote</a>
            <a href="#services"
              style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.15)", padding: "16px 32px", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
            >View Services</a>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", marginTop: "80px", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "40px" }}>
          {[
            { v: "P.E.", l: "Licensed Engineer" },
            { v: "TX", l: "Statewide" },
            { v: "EN/ES", l: "Bilingual" },
            { v: "4", l: "Core Services" },
          ].map((s, i) => (
            <div key={s.l} style={{ paddingRight: "24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none", paddingLeft: i > 0 ? "24px" : "0" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(28px, 3vw, 42px)", color: "#C9911A", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.v}</div>
              <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "6px" }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
