"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

// Formspree form ID — find it in the Formspree dashboard under your form's
// Integration tab; the endpoint looks like https://formspree.io/f/xyzabcde
const FORMSPREE_ID = "xdawpgro";

export default function Contact() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      router.push(`/thank-you?name=${encodeURIComponent(firstName)}`);
    } catch {
      setError(true);
      setSubmitting(false);
    }
  };

  const field: React.CSSProperties = {
    width: "100%", padding: "13px 16px", fontSize: "14px", fontFamily: "inherit",
    background: "#fff", border: "1px solid #DDD9D0", color: "#1C1A16", outline: "none", display: "block",
  };

  return (
    <section id="contact" style={{ background: "#F4F1EC" }}>
      <div className="max-w-screen-xl mx-auto px-8" style={{ paddingTop: "120px", paddingBottom: "120px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "72px", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9911A", marginBottom: "16px" }}>Get In Touch</p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(38px, 5vw, 64px)", color: "#0E0D0B", letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>
              Start Your<br />Project Today.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="tel:9153020242" className="flex items-center gap-3 transition-colors group" style={{ fontSize: "14px", fontWeight: 500, color: "#1C1A16", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9911A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1C1A16")}>
              <Phone size={14} style={{ color: "#C9911A" }} /> (915) 302-0242
            </a>
            <a href="mailto:hector@hshrei.com" className="flex items-center gap-3 transition-colors" style={{ fontSize: "14px", fontWeight: 500, color: "#1C1A16", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9911A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1C1A16")}>
              <Mail size={14} style={{ color: "#C9911A" }} /> hector@hshrei.com
            </a>
            <div className="flex items-center gap-3" style={{ fontSize: "14px", fontWeight: 500, color: "#6B6355" }}>
              <MapPin size={14} style={{ color: "#C9911A" }} /> Statewide — Texas
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }} className="md:grid-cols-[1fr_2fr] grid-cols-1">

          <div>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "#6B6355", lineHeight: 1.9, marginBottom: "40px" }}>
              Send us a message and Hector will get back to you directly. All inquiries are answered personally — no automated replies, no junior staff.
            </p>
            <div style={{ borderTop: "1px solid #DDD9D0", paddingTop: "32px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9080", marginBottom: "10px" }}>Response Time</p>
              <p style={{ fontSize: "14px", fontWeight: 300, color: "#6B6355", lineHeight: 1.7 }}>Every inquiry is answered personally. Urgent? Call directly.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input type="hidden" name="_subject" value="New project inquiry — HSH Engineering website" />
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9080", marginBottom: "8px" }}>First Name</label>
                <input required type="text" name="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" style={field}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C9911A")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD9D0")} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9080", marginBottom: "8px" }}>Last Name</label>
                <input required type="text" name="Last Name" placeholder="Doe" style={field}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#C9911A")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD9D0")} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9080", marginBottom: "8px" }}>Email Address</label>
              <input required type="email" name="email" placeholder="john@example.com" style={field}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C9911A")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD9D0")} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9080", marginBottom: "8px" }}>Phone Number</label>
              <input type="tel" name="Phone" placeholder="(915) 000-0000" style={field}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C9911A")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD9D0")} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9080", marginBottom: "8px" }}>Service Needed</label>
              <select required name="Service Needed" style={{ ...field, appearance: "none" } as React.CSSProperties}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C9911A")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD9D0")}>
                <option value="">Select a service…</option>
                <option>Land Development</option>
                <option>Platting & Subdivision</option>
                <option>Permitting</option>
                <option>Civil Engineering Design</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9080", marginBottom: "8px" }}>Project Description</label>
              <textarea rows={4} name="Project Description" placeholder="Tell us about your project, location, and timeline…" style={{ ...field, resize: "none" } as React.CSSProperties}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C9911A")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#DDD9D0")} />
            </div>
            <button type="submit" disabled={submitting}
              style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", background: submitting ? "#A07010" : "#C9911A", padding: "18px", border: "none", cursor: submitting ? "not-allowed" : "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
              onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = "#A07010"; }}
              onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = "#C9911A"; }}
            >{submitting ? "Sending…" : "Send Message →"}</button>
            {error && (
              <p style={{ fontSize: "14px", color: "#B3401F", margin: 0 }}>
                Something went wrong sending your message. Please try again, or call us directly at (915) 302-0242.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
