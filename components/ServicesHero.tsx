"use client";

export default function ServicesHero() {
  return (
    <section style={{
      background: `linear-gradient(rgba(14,13,11,0.82), rgba(14,13,11,0.82)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=70') center / cover no-repeat`,
      paddingTop: "200px", paddingBottom: "140px",
    }}>
      <div className="max-w-screen-xl mx-auto px-8" style={{ textAlign: "center" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A", marginBottom: "20px" }}>
          What We Do
        </p>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(42px, 6vw, 76px)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>
          Our Services
        </h1>
        <p style={{ fontSize: "clamp(18px, 1.7vw, 23px)", fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: "820px", margin: "28px auto 0" }}>
          At <strong style={{ fontWeight: 600, color: "#fff" }}>HSH Engineering</strong>, we provide{" "}
          <em style={{ color: "#F0C55A" }}>full civil engineering support</em>{" "}
          to land owners and developers —
          from raw land to recorded plat. Services include Land Development, Platting &amp; Subdivision,
          Permitting, and Civil Engineering Design.
        </p>
      </div>
    </section>
  );
}
