"use client";
import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactClient() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", reg: "", service: "", message: "",
  });

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", reg: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", border: "1px solid var(--border)", borderRadius: "0.375rem",
    padding: "0.75rem 1rem", fontSize: "0.9rem", outline: "none", color: "var(--dark)",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "var(--mid)", marginBottom: "0.5rem",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--brand)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-white" data-anim="slide-left">Get in Touch</div>
          <h1 data-anim="fade-up" data-delay="0.1" style={{ color: "#fff", marginBottom: "1.25rem" }}>Contact Us</h1>
          <p data-anim="fade-up" data-delay="0.2" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "50ch", lineHeight: 1.75 }}>
            Got a question or ready to book? Give us a call, send an email, or fill in the form below.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white section">
        <div className="wrap">
          <div className="r-contact" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "5rem" }}>

            {/* Info column */}
            <div>
              <h3 data-anim="fade-up" style={{ color: "var(--dark)", marginBottom: "2.5rem" }}>Contact Information</h3>

              {[
                { label: "Phone",    val: "01327 349181",             href: "tel:01327349181",                   sub: "Mon–Fri 8:30–17:00" },
                { label: "WhatsApp", val: "Message us on WhatsApp",   href: "https://wa.me/441327349181",        sub: "Quick replies during opening hours" },
                { label: "Email",   val: "info@thegaragedav.com",     href: "mailto:info@thegaragedav.com",      sub: "We aim to reply within 2 hours" },
                { label: "Address", val: "30 High March, Daventry",   href: null as null,                        sub: "NN11 4HB" },
              ].map((item, i) => (
                <div key={item.label} data-anim="fade-up" data-delay={`${0.05 + i * 0.1}`}
                  style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "0.4rem" }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ color: "var(--dark)", fontWeight: 600, fontSize: "1.1rem", display: "block", marginBottom: "0.25rem" }}>{item.val}</a>
                  ) : (
                    <div style={{ color: "var(--dark)", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.25rem" }}>{item.val}</div>
                  )}
                  <div style={{ color: "var(--mid)", fontSize: "0.875rem" }}>{item.sub}</div>
                </div>
              ))}

              <div data-anim="fade-up" data-delay="0.35" style={{ background: "var(--cream)", borderRadius: "var(--radius)", padding: "1.75rem", marginBottom: "2rem" }}>
                <h6 style={{ color: "var(--dark)", marginBottom: "1.25rem" }}>Opening Hours</h6>
                {[
                  { day: "Monday – Friday", hours: "8:30 – 17:00" },
                  { day: "Saturday",        hours: "Closed" },
                  { day: "Sunday",          hours: "Closed" },
                ].map(h => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "0.625rem 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <span style={{ color: "var(--mid)", fontSize: "0.875rem" }}>{h.day}</span>
                    <span style={{ color: h.hours === "Closed" ? "var(--mid)" : "var(--dark)", fontSize: "0.875rem", fontWeight: 600 }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form column */}
            <div>
              <h3 data-anim="fade-up" style={{ color: "var(--dark)", marginBottom: "2.5rem" }}>Send a Message</h3>

              {status === "success" ? (
                <div data-anim="fade-up" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "var(--radius)", padding: "2.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                  <h4 style={{ color: "#15803d", marginBottom: "0.5rem" }}>Message sent!</h4>
                  <p style={{ color: "#166534", fontSize: "0.9rem" }}>We&apos;ll be in touch within 2 hours during working hours.</p>
                  <button onClick={() => setStatus("idle")} className="btn btn-primary" style={{ marginTop: "1.5rem" }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div className="r-names" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>First Name</label>
                      <input type="text" placeholder="John" required value={form.firstName} onChange={e => set("firstName", e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name</label>
                      <input type="text" placeholder="Smith" value={form.lastName} onChange={e => set("lastName", e.target.value)} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" placeholder="john@example.com" required value={form.email} onChange={e => set("email", e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" placeholder="07700 900000" value={form.phone} onChange={e => set("phone", e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Vehicle Registration (optional)</label>
                    <input type="text" placeholder="AB12 CDE" value={form.reg} onChange={e => set("reg", e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Service Required</label>
                    <select value={form.service} onChange={e => set("service", e.target.value)} style={{ ...inputStyle, background: "#fff" }}>
                      <option value="">Select a service...</option>
                      {["MOT", "Interim Service", "Full Service", "EV / Hybrid Service", "Diagnostics", "Brake Repair", "Clutch Replacement", "Exhaust Replacement", "Air Conditioning", "Other"].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea rows={5} placeholder="Tell us about your vehicle and what you need help with..." required value={form.message} onChange={e => set("message", e.target.value)}
                      style={{ ...inputStyle, resize: "none" }} />
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#dc2626", fontSize: "0.85rem", background: "#fef2f2", padding: "0.75rem 1rem", borderRadius: "0.375rem", border: "1px solid #fecaca" }}>
                      Something went wrong — please try again or call us on 01327 349181.
                    </p>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn btn-primary"
                    style={{ padding: "0.875rem", borderRadius: "0.375rem", fontSize: "0.9rem", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}>
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                  <p style={{ color: "var(--mid)", fontSize: "0.75rem", textAlign: "center" }}>
                    We reply to all enquiries within 2 hours during working hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
