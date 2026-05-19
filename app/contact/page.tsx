import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | The Garage Daventry",
  description: "Contact The Garage Daventry. Call 01327 349181 or email us. High March, Daventry, NN11.",
};

export default function ContactPage() {
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
                { label: "Phone",   val: "01327 349181",             href: "tel:01327349181",                   sub: "Mon–Fri 8:30–17:00" },
                { label: "Email",   val: "info@thegaragedaventry.com", href: "mailto:info@thegaragedaventry.com", sub: "We aim to reply within 2 hours" },
                { label: "Address", val: "High March, Daventry",     href: null as null,                        sub: "Northamptonshire, NN11" },
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

              <div data-anim="fade-up" data-delay="0.4">
                <Link href="/contact" className="btn btn-accent">Get in Touch</Link>
              </div>
            </div>

            {/* Form column */}
            <div>
              <h3 data-anim="fade-up" style={{ color: "var(--dark)", marginBottom: "2.5rem" }}>Send a Message</h3>
              <form data-anim="fade-up" data-delay="0.1" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="r-names" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {["First Name", "Last Name"].map(f => (
                    <div key={f}>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "0.5rem" }}>{f}</label>
                      <input type="text" placeholder={f === "First Name" ? "John" : "Smith"}
                        style={{ width: "100%", border: "1px solid var(--border)", borderRadius: "0.375rem", padding: "0.75rem 1rem", fontSize: "0.9rem", outline: "none", color: "var(--dark)" }} />
                    </div>
                  ))}
                </div>
                {[
                  { label: "Email",                           type: "email", ph: "john@example.com" },
                  { label: "Phone",                           type: "tel",   ph: "07700 900000" },
                  { label: "Vehicle Registration (optional)", type: "text",  ph: "AB12 CDE" },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "0.5rem" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.ph}
                      style={{ width: "100%", border: "1px solid var(--border)", borderRadius: "0.375rem", padding: "0.75rem 1rem", fontSize: "0.9rem", outline: "none", color: "var(--dark)" }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "0.5rem" }}>Service Required</label>
                  <select style={{ width: "100%", border: "1px solid var(--border)", borderRadius: "0.375rem", padding: "0.75rem 1rem", fontSize: "0.9rem", outline: "none", color: "var(--dark)", background: "#fff" }}>
                    <option value="">Select a service...</option>
                    {["MOT", "Interim Service", "Full Service", "EV / Hybrid Service", "Diagnostics", "Brake Repair", "Clutch Replacement", "Exhaust Replacement", "Air Conditioning", "Other"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "0.5rem" }}>Message</label>
                  <textarea rows={5} placeholder="Tell us about your vehicle and what you need help with..."
                    style={{ width: "100%", border: "1px solid var(--border)", borderRadius: "0.375rem", padding: "0.75rem 1rem", fontSize: "0.9rem", outline: "none", color: "var(--dark)", resize: "none" }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: "0.875rem", borderRadius: "0.375rem", fontSize: "0.9rem" }}>
                  Send Message
                </button>
                <p style={{ color: "var(--mid)", fontSize: "0.75rem", textAlign: "center" }}>
                  We reply to all enquiries within 2 hours during working hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
