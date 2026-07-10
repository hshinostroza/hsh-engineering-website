"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Phone, Mail } from "lucide-react";

export default function ThankYouContent() {
  const params = useSearchParams();
  const name = params.get("name") || "there";

  return (
    <main style={{ minHeight: "100vh", background: "#0E0D0B", display: "flex", flexDirection: "column" }}>
      <header style={{ borderBottom: "1px solid #1A1814", padding: "0 32px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "25px", color: "#fff", letterSpacing: "-0.02em" }}>HSH</span>
          <span style={{ width: "1px", height: "22px", background: "#C9911A", opacity: 0.5 }} />
          <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9911A" }}>Engineering</span>
        </Link>
        <Link href="/"
          style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9911A")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
        >← Back to Home</Link>
      </header>

      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <div className="max-w-screen-xl mx-auto px-8 w-full" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div style={{ maxWidth: "640px" }}>

            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
              <div style={{ width: "40px", height: "1px", background: "#C9911A" }} />
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A" }}>Message Received</span>
            </div>

            <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(52px, 8vw, 96px)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: "32px" }}>
              Thank you,<br />
              <em className="not-italic" style={{ color: "#C9911A" }}>{name}.</em>
            </h1>

            <p style={{ fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: 1.9, marginBottom: "56px" }}>
              Your message has been received. Hector will personally review your details and reach out to you shortly.
            </p>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "48px", marginBottom: "48px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B6355", marginBottom: "28px" }}>What Happens Next</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { n: "01", t: "Review", d: "Hector reviews your project details and service request." },
                  { n: "02", t: "Contact", d: "You'll hear back from HSH." },
                  { n: "03", t: "Consultation", d: "We align on scope, timeline, and next steps together." },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9911A", paddingTop: "3px", minWidth: "24px" }}>{item.n}</span>
                    <div>
                      <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "18px", color: "#fff", letterSpacing: "-0.01em", marginBottom: "4px" }}>{item.t}</p>
                      <p style={{ fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
              <a href="tel:9153020242" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
                <Phone size={12} style={{ color: "#C9911A" }} /> (915) 302-0242
              </a>
              <a href="mailto:hector@hshrei.com" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
                <Mail size={12} style={{ color: "#C9911A" }} /> hector@hshrei.com
              </a>
              <Link href="/"
                style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E0D0B", background: "#C9911A", padding: "14px 28px", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#A07010")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#C9911A")}
              >Back to Home →</Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
