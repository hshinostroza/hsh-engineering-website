"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "#0E0D0B" : "transparent", borderBottom: scrolled ? "1px solid #1E1C18" : "none" }}>
      <div className="w-full flex items-center justify-between h-[72px]" style={{ paddingLeft: "32px", paddingRight: "32px" }}>

        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "25px", color: "#fff", letterSpacing: "-0.02em" }}>HSH</span>
          <span style={{ width: "1px", height: "22px", background: "#C9911A", opacity: 0.6 }} />
          <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9911A" }}>Engineering</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[{ l: "Services", h: "#services" }, { l: "About", h: "#about" }, { l: "Contact", h: "#contact" }].map(({ l, h }) => (
            <a key={l} href={h}
              style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >{l}</a>
          ))}
          <a href="#contact"
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E0D0B", background: "#C9911A", padding: "10px 22px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A07010")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C9911A")}
          >Get a Quote</a>
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)}>
          <span style={{ width: "22px", height: "1.5px", background: "#fff", display: "block", transition: "0.2s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ width: "22px", height: "1.5px", background: "#fff", display: "block", opacity: open ? 0 : 1 }} />
          <span style={{ width: "22px", height: "1.5px", background: "#fff", display: "block", transition: "0.2s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </div>

      {open && (
        <div style={{ background: "#0E0D0B", padding: "24px 32px 32px", borderTop: "1px solid #1E1C18" }} className="md:hidden flex flex-col gap-5">
          {[{ l: "Services", h: "#services" }, { l: "About", h: "#about" }, { l: "Contact", h: "#contact" }].map(({ l, h }) => (
            <a key={l} href={h} onClick={() => setOpen(false)}
              style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E0D0B", background: "#C9911A", padding: "13px 22px", textAlign: "center", textDecoration: "none" }}>
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
