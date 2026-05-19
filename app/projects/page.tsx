import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | The Garage Daventry",
  description: "A look at recent work carried out at The Garage Daventry — MOTs, EV servicing, diagnostics and more.",
};

const projects = [
  { title: "Full Engine Rebuild — BMW 3 Series", service: "Engine Rebuild", desc: "Complete engine strip and rebuild following an oil starvation failure. New bearings, piston rings, timing chain and oil pump — test driven and handed back with 12-month warranty on parts.", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=75", tag: "Engine" },
  { title: "EV Battery Inspection — Tesla Model 3", service: "EV Service", desc: "Full high-voltage battery health check, thermal management inspection and software update. Regenerative braking calibration and 12V auxiliary battery replacement.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=75", tag: "Electric Vehicle" },
  { title: "MOT & Full Service — Volkswagen Golf", service: "MOT + Servicing", desc: "MOT with one advisory resolved on the day — rear brake pads at minimum. Full service including oil, filters, brake fluid flush and tyre rotation. Passed first time.", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=75", tag: "MOT" },
  { title: "Gearbox Diagnostics — Ford Transit", service: "Diagnostics", desc: "Intermittent transmission fault code traced to a failing solenoid pack. Replaced with OEM part, live data verified before return to customer.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=75", tag: "Diagnostics" },
  { title: "Clutch Replacement — Vauxhall Astra", service: "Clutch", desc: "Full clutch kit replacement including dual-mass flywheel. Road-tested before collection. Customer reported immediately improved pedal feel and gear engagement.", img: "https://images.unsplash.com/photo-1580983704761-3c51b8e63ef0?w=800&q=75", tag: "Clutch" },
  { title: "Brake Overhaul — Land Rover Discovery", service: "Brakes", desc: "Full four-wheel brake service — discs, pads, and calliper refurbishment. Brake fluid flushed and ABS sensor replaced. Exceeded DVSA standards on re-test.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75", tag: "Brakes" },
  { title: "Exhaust System — Peugeot 308", service: "Exhaust", desc: "Full cat-back exhaust replacement due to severe corrosion on the mid-section. Stainless steel system fitted — quieter, cleaner emissions.", img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=75", tag: "Exhaust" },
  { title: "AC Re-gas & Service — Toyota RAV4 Hybrid", service: "Air Conditioning", desc: "R1234yf refrigerant re-gas following a slow leak at the condenser seal. Leak dye test, condenser seal replaced and system brought back to full performance.", img: "https://images.unsplash.com/photo-1546522571-26c9a37a6b35?w=800&q=75", tag: "Air Conditioning" },
  { title: "Pre-purchase Inspection — Classic Mini", service: "Inspection", desc: "Full pre-purchase mechanical inspection for a buyer from out of area. Detailed written report covering 60+ checkpoints, enabling an informed purchase decision.", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=75", tag: "Inspection" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--brand)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-white" data-anim="slide-left">The Garage in Action</div>
          <h1 data-anim="fade-up" data-delay="0.1" style={{ color: "#fff", marginBottom: "1.25rem" }}>Projects</h1>
          <p data-anim="fade-up" data-delay="0.2" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "52ch", lineHeight: 1.75 }}>
            A selection of recent jobs carried out at The Garage Daventry — from routine servicing to complex diagnostics and specialist EV work.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {projects.map((p, i) => (
              <article key={p.title} data-anim="fade-up" data-delay={`${(i % 3) * 0.1}`}
                style={{ borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <Image src={p.img} alt={p.title} fill unoptimized style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "var(--brand)", color: "#fff", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: "9999px" }}>
                    {p.tag}
                  </div>
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                  <div style={{ fontSize: "0.7rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.service}</div>
                  <h4 style={{ color: "var(--dark)", lineHeight: 1.3 }}>{p.title}</h4>
                  <p style={{ color: "var(--mid)", fontSize: "0.85rem", lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="eyebrow" data-anim="fade-in" style={{ justifyContent: "center" }}>Book In</div>
          <h2 data-anim="fade-up" data-delay="0.1" style={{ color: "var(--dark)", marginBottom: "1rem" }}>Ready to bring your vehicle in?</h2>
          <p data-anim="fade-up" data-delay="0.15" style={{ color: "var(--mid)", maxWidth: "50ch", margin: "0 auto 2.5rem" }}>
            Get a free quote online or give us a call — we&apos;ll get you booked in at a time that suits you.
          </p>
          <div data-anim="fade-up" data-delay="0.25" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote" className="btn btn-accent">Get a Quote</Link>
            <a href="tel:01327349181" className="btn btn-outline">01327 349181</a>
          </div>
        </div>
      </section>
    </>
  );
}
