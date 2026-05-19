import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | The Garage Daventry",
  description: "Over 55 years of combined experience. Meet the team behind The Garage Daventry.",
};

const team = [
  {
    name: "Hayley",
    role: "Service Manager",
    bio: "Hayley keeps the workshop running smoothly, coordinating bookings, liaising with customers, and making sure every job is delivered on time and to the highest standard.",
    img: "/images/hayley.jpg",
  },
  {
    name: "Bex",
    role: "Service Receptionist",
    bio: "Bex is usually the first voice you hear when you call. She handles bookings, keeps customers informed throughout, and ensures your visit is as straightforward as possible.",
    img: "/images/bex.jpg",
  },
  {
    name: "Connor",
    role: "Vehicle Technician",
    bio: "Connor is a fully qualified technician with hands-on experience across all makes and models — from routine servicing and MOTs to complex diagnostics and repairs.",
    img: "/images/connor.jpg",
  },
  {
    name: "Harvey",
    role: "Apprentice Vehicle Technician",
    bio: "Harvey is working his way through his apprenticeship alongside our senior technicians, building solid foundations in vehicle servicing, diagnostics and repair.",
    img: "/images/harvey.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--brand)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-white" data-anim="slide-left">Our Story</div>
          <h1 data-anim="fade-up" data-delay="0.1" style={{ color: "#fff", marginBottom: "1.25rem" }}>About Us</h1>
          <p data-anim="fade-up" data-delay="0.2" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "50ch", lineHeight: 1.75 }}>
            Family-run, independently owned, and committed to doing things the right way since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white section">
        <div className="wrap">
          <div className="r-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="eyebrow" data-anim="slide-left">Who We Are</div>
              <h2 data-anim="fade-up" data-delay="0.1" style={{ color: "var(--dark)", marginBottom: "1.5rem" }}>55+ years of combined experience</h2>
              <p data-anim="fade-up" data-delay="0.15" style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "1rem" }}>
                The Garage Daventry was founded by two master mechanics who between them had spent over five decades learning the craft in workshops across Northamptonshire.
              </p>
              <p data-anim="fade-up" data-delay="0.2" style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "1rem" }}>
                In 2022 we relocated to our current home at High March, Daventry — a fully equipped, modern workshop capable of handling everything from historic classics to the latest electric vehicles.
              </p>
              <p data-anim="fade-up" data-delay="0.25" style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "2rem" }}>
                We serve customers across Daventry, Weedon, Flore, Crick and the wider area. Whether you need a quick MOT or a complex engine rebuild, you&apos;ll always speak to someone who knows their trade.
              </p>
              <div data-anim="fade-up" data-delay="0.35">
                <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
              </div>
            </div>
            <div data-anim="scale-in" data-delay="0.1" style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius)", overflow: "hidden" }}>
              <Image
                src="/images/site-img3.jpg"
                alt="Inside The Garage Daventry"
                fill unoptimized style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream section">
        <div className="wrap">
          <div className="r-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { num: "55+",    label: "Years combined experience" },
              { num: "5,000+", label: "Vehicles serviced" },
              { num: "2022",   label: "Relocated to High March" },
              { num: "DVSA",   label: "Approved MOT station" },
            ].map((s, i) => (
              <div key={s.label} data-anim="fade-up" data-delay={`${i * 0.1}`}
                style={{ padding: "2rem", background: "#fff", borderRadius: "var(--radius)", borderTop: "3px solid var(--accent)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--brand)", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "0.5rem" }}>{s.num}</div>
                <div style={{ color: "var(--mid)", fontSize: "0.875rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white section">
        <div className="wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="eyebrow" data-anim="slide-left">The People Behind The Work</div>
            <h2 data-anim="fade-up" data-delay="0.1" style={{ color: "var(--dark)" }}>Meet the team</h2>
          </div>
          <div className="r-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {team.map((member, i) => (
              <div key={member.name} data-anim="fade-up" data-delay={`${i * 0.12}`}
                style={{ borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border)" }}>
                <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill unoptimized
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,58,115,0.6) 0%, transparent 55%)" }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{member.role}</div>
                  <h4 style={{ color: "var(--dark)", marginBottom: "0.75rem" }}>{member.name}</h4>
                  <p style={{ color: "var(--mid)", fontSize: "0.875rem", lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream section">
        <div className="wrap">
          <div style={{ marginBottom: "3rem" }}>
            <div className="eyebrow" data-anim="slide-left">What We Stand For</div>
            <h2 data-anim="fade-up" data-delay="0.1" style={{ color: "var(--dark)" }}>Our values</h2>
          </div>
          <div className="r-4col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { title: "Transparency", desc: "We always explain what needs doing and why before any work starts. No surprise bills, no hidden charges." },
              { title: "Quality",      desc: "We use genuine OEM or quality-approved parts. You choose — we give you the options and honest advice." },
              { title: "Experience",   desc: "55+ years of combined hands-on experience means we've seen it all and can handle any vehicle, any problem." },
              { title: "Fair Pricing", desc: "Independent garage pricing without the main dealer markup. Competitive rates with no compromise on quality." },
            ].map((v, i) => (
              <div key={v.title} data-anim="fade-up" data-delay={`${i * 0.1}`}
                style={{ padding: "2rem", background: "#fff", borderRadius: "var(--radius)" }}>
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
        <div className="wrap r-cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="eyebrow eyebrow-white" data-anim="slide-left">Ready to Book?</div>
            <h2 data-anim="fade-up" data-delay="0.1" style={{ color: "#fff" }}>Get a free quote today</h2>
          </div>
          <div data-anim="fade-up" data-delay="0.2" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/quote" className="btn btn-accent">Get a Quote</Link>
            <a href="tel:01327349181" className="btn btn-outline-white">01327 349181</a>
          </div>
        </div>
      </section>
    </>
  );
}
