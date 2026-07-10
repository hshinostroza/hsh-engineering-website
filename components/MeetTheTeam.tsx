"use client";

import { useState } from "react";

export default function MeetTheTeam() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="team" style={{ background: "#0E0D0B" }}>
      <div className="max-w-screen-xl mx-auto px-8" style={{ paddingTop: "110px", paddingBottom: "110px" }}>

        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "clamp(26px, 3vw, 38px)", letterSpacing: "-0.02em", color: "#C9911A", lineHeight: 1.1, marginBottom: "10px" }}>
            Meet The Team
          </p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(26px, 3vw, 38px)", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, margin: 0 }}>
            The Engineer Behind HSH.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20" style={{ alignItems: "start" }}>

          <div>
            <div style={{ position: "relative", maxWidth: "300px" }}>
              {imgFailed ? (
                <div style={{ width: "100%", aspectRatio: "1 / 1.05", background: "#1C1A16", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "56px", color: "#C9911A", letterSpacing: "-0.02em" }}>HH</span>
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/team/hector.jpg" alt="Hector Hinostroza, Principal Engineer and Founder of HSH Engineering"
                  onError={() => setImgFailed(true)}
                  style={{ width: "100%", aspectRatio: "1 / 1.05", objectFit: "cover", display: "block" }} />
              )}
              <span aria-hidden style={{ position: "absolute", inset: "14px -14px -14px 14px", border: "1px solid #C9911A", zIndex: 0, pointerEvents: "none" }} />
            </div>
            <div style={{ marginTop: "36px" }}>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "26px", color: "#fff", letterSpacing: "-0.02em", marginBottom: "6px" }}>
                Hector Hinostroza
              </h3>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9911A", margin: 0 }}>
                Principal Engineer &amp; Founder
              </p>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "clamp(19px, 1.7vw, 23px)", fontWeight: 300, color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: "20px" }}>
              Hector founded HSH Engineering in San Antonio in 2025 with over seven years of civil
              engineering experience. He started on the engineering side of subdivision plats — from
              residential subdivisions to single-lot developments — then spent three years on public
              works design teams for the City of San Antonio and surrounding municipalities, contributing
              to roadway, sidewalk, and trail projects including the Bulverde Road Phase 2 bond project,
              the Huebner Creek Greenway Trail Extension, and the Zarzamora Creek Trail Extension, in
              coordination with TxDOT and the San Antonio River Authority.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
