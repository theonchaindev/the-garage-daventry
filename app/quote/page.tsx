import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import QuoteBuilder from "@/components/QuoteBuilder";

export const metadata: Metadata = {
  title: "Get a Quote | The Garage Daventry",
  description: "Get an instant price estimate for MOT, servicing, EV service, diagnostics, brakes, clutch or air conditioning.",
};

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--brand)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-white" data-anim="slide-left">Instant Estimate</div>
          <h1 data-anim="fade-up" data-delay="0.1" style={{ color: "#fff", marginBottom: "1.25rem" }}>Get a Free Quote</h1>
          <p data-anim="fade-up" data-delay="0.2" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "52ch", lineHeight: 1.75 }}>
            Answer a few quick questions about your vehicle and we&apos;ll give you a transparent price estimate — no hidden fees, no obligation.
          </p>
        </div>
      </section>

      {/* Builder */}
      <section className="bg-cream section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "3.5rem", alignItems: "start" }}>

            <div data-anim="fade-up" data-delay="0.05">
              <Suspense fallback={<div style={{ background: "#fff", borderRadius: "var(--radius)", padding: "2.5rem", minHeight: 400 }} />}>
                <QuoteBuilder />
              </Suspense>
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div data-anim="fade-up" data-delay="0.15" style={{ background: "#fff", borderRadius: "var(--radius)", padding: "2rem" }}>
                <h5 style={{ color: "var(--dark)", marginBottom: "1rem" }}>Why get a quote?</h5>
                {[
                  "No obligation — just an honest estimate",
                  "We confirm exact pricing before any work starts",
                  "Transparent, fair, independent garage prices",
                  "We reply within 2 hours during working hours",
                ].map(p => (
                  <div key={p} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.875rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: "var(--mid)", fontSize: "0.875rem", lineHeight: 1.6 }}>{p}</span>
                  </div>
                ))}
              </div>

              <div data-anim="fade-up" data-delay="0.25" style={{ background: "var(--brand)", borderRadius: "var(--radius)", padding: "2rem", color: "#fff" }}>
                <h6 style={{ marginBottom: "0.75rem", color: "#fff" }}>Prefer to call?</h6>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                  Speak directly to one of our mechanics — Mon–Fri 8:00–17:30 · Sat 8:00–13:00.
                </p>
                <a href="tel:01327349181" className="btn btn-white">01327 349181</a>
              </div>

              <div data-anim="fade-up" data-delay="0.35" style={{ background: "#fff", borderRadius: "var(--radius)", padding: "2rem" }}>
                <h6 style={{ color: "var(--dark)", marginBottom: "1rem" }}>Opening Hours</h6>
                {[
                  { day: "Mon – Fri", hrs: "8:00 – 17:30" },
                  { day: "Saturday",  hrs: "8:00 – 13:00" },
                  { day: "Sunday",    hrs: "Closed" },
                ].map(h => (
                  <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid var(--border)", fontSize: "0.875rem" }}>
                    <span style={{ color: "var(--mid)" }}>{h.day}</span>
                    <span style={{ color: h.hrs === "Closed" ? "var(--mid)" : "var(--dark)", fontWeight: 600 }}>{h.hrs}</span>
                  </div>
                ))}
              </div>

              <div data-anim="fade-in" data-delay="0.4" style={{ background: "var(--cream)", borderRadius: "var(--radius)", padding: "1.5rem" }}>
                <p style={{ color: "var(--mid)", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  Need something not listed? <Link href="/contact" style={{ color: "var(--brand)", fontWeight: 600 }}>Send us a message</Link> and we&apos;ll get back to you quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
