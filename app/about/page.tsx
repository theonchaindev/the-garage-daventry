import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | The Garage Daventry",
  description: "Over 55 years of combined experience. Meet the team behind The Garage Daventry.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--brand)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-white">Our Story</div>
          <h1 style={{ color: "#fff", marginBottom: "1.25rem" }}>About Us</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "50ch", lineHeight: 1.75 }}>
            Family-run, independently owned, and committed to doing things the right way since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="eyebrow">Who We Are</div>
              <h2 style={{ color: "var(--dark)", marginBottom: "1.5rem" }}>55+ years of combined experience</h2>
              <p style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "1rem" }}>
                The Garage Daventry was founded by two master mechanics who between them had spent over five decades learning the craft in workshops across Northamptonshire.
              </p>
              <p style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "1rem" }}>
                In 2022 we relocated to our current home at High March, Daventry — a fully equipped, modern workshop capable of handling everything from historic classics to the latest electric vehicles.
              </p>
              <p style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "2rem" }}>
                We serve customers across Daventry, Weedon, Flore, Crick and the wider area. Whether you need a quick MOT or a complex engine rebuild, you&apos;ll always speak to someone who knows their trade.
              </p>
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius)", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=75" alt="Inside The Garage Daventry" fill unoptimized style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { num: "55+", label: "Years combined experience" },
              { num: "5,000+", label: "Vehicles serviced" },
              { num: "2022", label: "Relocated to High March" },
              { num: "DVSA", label: "Approved MOT station" },
            ].map(s => (
              <div key={s.label} style={{ padding: "2rem", background: "#fff", borderRadius: "var(--radius)", borderTop: "3px solid var(--accent)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--brand)", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "0.5rem" }}>{s.num}</div>
                <div style={{ color: "var(--mid)", fontSize: "0.875rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section">
        <div className="wrap">
          <div style={{ marginBottom: "3rem" }}>
            <div className="eyebrow">What We Stand For</div>
            <h2 style={{ color: "var(--dark)" }}>Our values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { title: "Transparency", desc: "We always explain what needs doing and why before any work starts. No surprise bills, no hidden charges." },
              { title: "Quality", desc: "We use genuine OEM or quality-approved parts. You choose — we give you the options and honest advice." },
              { title: "Experience", desc: "55+ years of combined hands-on experience means we&apos;ve seen it all and can handle any vehicle, any problem." },
              { title: "Fair Pricing", desc: "Independent garage pricing without the main dealer markup. Competitive rates with no compromise on quality." },
            ].map(v => (
              <div key={v.title} style={{ padding: "2rem", background: "var(--cream)", borderRadius: "var(--radius)" }}>
                <div style={{ width: "2.5rem", height: "3px", background: "var(--accent)", marginBottom: "1.5rem" }} />
                <h5 style={{ color: "var(--dark)", marginBottom: "0.75rem" }}>{v.title}</h5>
                <p style={{ color: "var(--mid)", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--brand)", padding: "5rem 0" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="eyebrow eyebrow-white">Ready to Book?</div>
            <h2 style={{ color: "#fff" }}>Get a free quote today</h2>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/quote" className="btn btn-accent">Get a Quote</Link>
            <a href="tel:01327349181" className="btn btn-outline-white">01327 349181</a>
          </div>
        </div>
      </section>
    </>
  );
}
