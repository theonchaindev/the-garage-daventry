import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | The Garage Daventry",
  description: "MOTs, servicing, EV & hybrid, diagnostics, brakes, clutch, exhausts, air conditioning — all makes and models.",
};

const services = [
  {
    num: "01",
    title: "MOTs",
    desc: "Our DVSA-approved MOT testing covers all vehicle classes. We clearly explain any failures or advisories and can carry out remedial work the same day where possible.",
    img: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=700&q=75",
    includes: ["Visual safety inspection", "Lights & signalling check", "Steering & suspension", "Emissions testing", "Brakes & tyres", "Same-day remedials available"],
    from: "From £54.85",
  },
  {
    num: "02",
    title: "Servicing",
    desc: "Annual and scheduled servicing for all makes and models. We use quality OEM or approved aftermarket parts to keep your vehicle running at its best and protect your warranty.",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=75",
    includes: ["Oil & filter change", "Air & cabin filter check", "Brake fluid check", "Tyre inspection & pressures", "Battery test", "Full vehicle health check"],
    from: "From £89",
  },
  {
    num: "03",
    title: "Electric & Hybrid Vehicles",
    desc: "Specialist servicing and inspections for electric and hybrid vehicles. Fully trained technicians with the latest diagnostic and charging equipment for domestic drivers and commercial fleets.",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&q=75",
    includes: ["Battery health check", "High-voltage system inspection", "Software & firmware updates", "Regenerative brake service", "Cooling system check", "12V auxiliary battery test"],
    from: "From £120",
  },
  {
    num: "04",
    title: "Diagnostics",
    desc: "We use state-of-the-art Bosch and Snap-On diagnostic equipment to accurately identify any issues. No guesswork — a precise diagnosis and a clear, upfront repair plan.",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&q=75",
    includes: ["Engine management fault codes", "ABS & traction control", "Airbag & SRS systems", "Transmission faults", "Live data stream analysis", "Full written report"],
    from: "From £49",
  },
  {
    num: "05",
    title: "Brake Repairs",
    desc: "Full brake inspection and replacement of pads, discs, callipers and fluid as required. We work with all vehicle types using quality parts to ensure your safety on the road.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75",
    includes: ["Brake pad replacement", "Disc & drum replacement", "Calliper overhaul", "Brake fluid flush", "Handbrake adjustment", "ABS sensor inspection"],
    from: "From £79",
  },
  {
    num: "06",
    title: "Clutch Replacements",
    desc: "Clutch repair and replacement for classic and modern vehicles. Our experienced mechanics will get you back on the road quickly and reliably, with road-tested results.",
    img: "https://images.unsplash.com/photo-1580983704761-3c51b8e63ef0?w=700&q=75",
    includes: ["Clutch plate replacement", "Pressure plate replacement", "Flywheel inspection & skim", "Release bearing replacement", "Dual-mass flywheel", "Road test on completion"],
    from: "From £299",
  },
  {
    num: "07",
    title: "Exhaust Replacements",
    desc: "Professional fitting of replacement exhaust systems for all vehicles — from a single silencer to a full cat-back system. Competitive pricing with lengthy guarantees.",
    img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=700&q=75",
    includes: ["Full system replacement", "Section replacement", "Catalytic converter", "DPF inspection & cleaning", "Exhaust clamps & hangers", "Post-fit emission test"],
    from: "From £99",
  },
  {
    num: "08",
    title: "Air Conditioning",
    desc: "Comprehensive AC services to ensure your system runs efficiently year-round. Re-gas, leak testing and full system service available.",
    img: "https://images.unsplash.com/photo-1546522571-26c9a37a6b35?w=700&q=75",
    includes: ["System pressure test", "Refrigerant re-gas (R134a/R1234yf)", "Leak detection dye test", "Pollen filter replacement", "Compressor inspection", "Odour treatment available"],
    from: "From £49",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--brand)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-white">What We Offer</div>
          <h1 style={{ color: "#fff", marginBottom: "1.25rem" }}>Our Services</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "52ch", lineHeight: 1.75 }}>
            Honest, affordable repairs and servicing for all makes and models — from classic cars to the latest electric vehicles.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white">
        <div className="wrap">
          {services.map((s, i) => (
            <div key={s.title} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 420px" : "420px 1fr", gap: "4rem", alignItems: "center", padding: "5rem 0", borderBottom: "1px solid var(--border)" }}>
              {i % 2 !== 0 && (
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius)", overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill unoptimized style={{ objectFit: "cover" }} />
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="eyebrow">{s.num}</div>
                <h2 style={{ color: "var(--dark)" }}>{s.title}</h2>
                <p style={{ color: "var(--mid)", lineHeight: 1.8 }}>{s.desc}</p>
                <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 2rem", listStyle: "none" }}>
                  {s.includes.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "var(--mid)", fontSize: "0.85rem" }}>
                      <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "0.5rem" }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Starting from</div>
                    <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--brand)", letterSpacing: "-0.04em" }}>{s.from}</div>
                  </div>
                  <Link href="/quote" className="btn btn-accent">Get a Quote</Link>
                </div>
              </div>
              {i % 2 === 0 && (
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius)", overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill unoptimized style={{ objectFit: "cover" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--brand)", padding: "5rem 0" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="eyebrow eyebrow-white">Not Sure?</div>
            <h2 style={{ color: "#fff" }}>We&apos;re happy to advise</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.75rem" }}>Honest advice, no pressure. Call or send us a message.</p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:01327349181" className="btn btn-white">01327 349181</a>
            <Link href="/contact" className="btn btn-outline-white">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}
