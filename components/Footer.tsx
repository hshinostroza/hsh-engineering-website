"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0E0D0B", borderTop: "1px solid #1A1814" }}>
      <div className="max-w-screen-xl mx-auto px-8" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
        <div className="footer-grid" style={{ display: "grid", gap: "32px", marginBottom: "56px" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "20px", color: "#fff", letterSpacing: "-0.02em" }}>HSH</span>
              <span style={{ width: "1px", height: "16px", background: "#C9911A", opacity: 0.5 }} />
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9911A" }}>Engineering</span>
            </div>
            <p style={{ fontSize: "13px", fontWeight: 300, color: "#4A4640", lineHeight: 1.85 }}>
              Licensed P.E. services for land development across Texas.
            </p>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,145,26,0.4)", marginTop: "14px" }}>
              Servicios en Español
            </p>
          </div>

          <div>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A3630", marginBottom: "20px" }}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Land Development", "Platting & Subdivision", "Permitting", "Civil Engineering Design"].map((s) => (
                <a key={s} href="#services" style={{ fontSize: "13px", fontWeight: 300, color: "#3A3630", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3630")}>{s}</a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A3630", marginBottom: "20px" }}>Company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[{ l: "About", h: "#about" }, { l: "Contact", h: "#contact" }, { l: "Get a Quote", h: "#contact" }].map((i) => (
                <a key={i.l} href={i.h} style={{ fontSize: "13px", fontWeight: 300, color: "#3A3630", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3630")}>{i.l}</a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A3630", marginBottom: "20px" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:9153020242" style={{ fontSize: "13px", fontWeight: 300, color: "#3A3630", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3630")}>
                <Phone size={11} style={{ color: "#C9911A", flexShrink: 0 }} /> (915) 302-0242
              </a>
              <a href="mailto:hector@hshrei.com" style={{ fontSize: "13px", fontWeight: 300, color: "#3A3630", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3630")}>
                <Mail size={11} style={{ color: "#C9911A", flexShrink: 0 }} /> hector@hshrei.com
              </a>
              <div style={{ fontSize: "13px", fontWeight: 300, color: "#3A3630", display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={11} style={{ color: "#C9911A", flexShrink: 0 }} /> Texas — Statewide
              </div>
            </div>
          </div>

        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #1A1814", paddingTop: "28px", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "#2A2620" }}>© {new Date().getFullYear()} HSH Engineering. All rights reserved.</p>
          <p style={{ fontSize: "12px", color: "#2A2620" }}>Texas P.E. · TBPE Registered</p>
        </div>
      </div>
    </footer>
  );
}
