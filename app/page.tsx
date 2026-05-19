import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Garage Daventry | Expert Car Mechanics",
  description: "55+ years of combined experience. MOTs, servicing, EV & hybrid, diagnostics, brakes, clutch, exhausts and air conditioning in Daventry.",
};

const services = [
  { num: "01", title: "MOTs", desc: "DVSA-approved MOT testing for all vehicle classes.", img: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=70" },
  { num: "02", title: "Servicing", desc: "Interim and full vehicle services, all makes and models.", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=70" },
  { num: "03", title: "EV & Hybrid", desc: "Specialist electric and hybrid vehicle care.", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=70" },
  { num: "04", title: "Diagnostics", desc: "Bosch and Snap-On diagnostic equipment — fast, accurate fault finding.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=70" },
  { num: "05", title: "Brake Repairs", desc: "Pads, discs, callipers and fluid replacement for all vehicles.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70" },
  { num: "06", title: "Air Conditioning", desc: "Re-gas, leak testing and full AC system service.", img: "https://images.unsplash.com/photo-1546522571-26c9a37a6b35?w=600&q=70" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          alt="The Garage Daventry workshop"
          fill
          priority
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,58,115,0.82) 0%, rgba(0,42,85,0.9) 50%, rgba(0,0,0,0.85) 100%)" }} />

        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: "6rem", paddingBottom: "6rem", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-end" }}>

            <div>
              <div className="eyebrow eyebrow-white anim-slide-right delay-2" style={{ marginBottom: "1.5rem" }}>Daventry&apos;s Trusted Garage</div>
              <h1 className="anim-fade-up delay-3" style={{ color: "#fff", marginBottom: "2rem" }}>
                The Garage<br />
                <span style={{ color: "var(--accent)" }}>Daventry</span>
              </h1>
              <div className="anim-fade-up delay-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/quote" className="btn btn-accent">Get a Free Quote</Link>
                <Link href="/services" className="btn btn-outline-white">Our Services</Link>
              </div>
            </div>

            <div className="anim-fade-up delay-4" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "44ch" }}>
                With a combined experience of over 55 years repairing motor cars, we have the technical know-how and correct tooling to service and repair your vehicle right first time.
              </p>
              <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                {[["55+", "Years Experience"], ["5,000+", "Vehicles Serviced"], ["8", "Specialist Services"]].map(([num, label], i) => (
                  <div key={label} className={`anim-fade-up delay-${i + 4}`}>
                    <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.04em", lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "0.25rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="bg-white section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

            <div className="anim-scale-in" style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius)", overflow: "hidden" }}>
              <Image
                src="https://images.unsplash.com/photo-1580983704761-3c51b8e63ef0?w=900&q=75"
                alt="Mechanics at The Garage Daventry"
                fill
                unoptimized
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "var(--brand)", color: "#fff", padding: "1rem 1.5rem", borderRadius: "0.5rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--accent)" }}>55+</div>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.2rem", color: "rgba(255,255,255,0.7)" }}>Years Combined Experience</div>
              </div>
            </div>

            <div>
              <div className="eyebrow">About Us</div>
              <h2 style={{ marginBottom: "1.5rem", color: "var(--dark)" }}>Independent expertise you can trust</h2>
              <p style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "1rem" }}>
                The Garage Daventry is a family-run, independent workshop based at High March. Our team has spent over five decades learning their craft in workshops across Northamptonshire.
              </p>
              <p style={{ color: "var(--mid)", lineHeight: 1.85, marginBottom: "2rem" }}>
                We work on all makes and models — including the latest electric and hybrid vehicles — and always give you a choice of genuine or quality aftermarket parts so you stay in control of costs.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/about" className="btn btn-primary">More About Us</Link>
                <Link href="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-cream section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <div className="eyebrow">What We Do</div>
              <h2 style={{ color: "var(--dark)", maxWidth: "20ch" }}>Full range of automotive services</h2>
            </div>
            <Link href="/services" className="btn btn-outline">View All Services</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {services.map(s => (
              <Link key={s.title} href="/services"
                style={{ position: "relative", aspectRatio: "3/4", borderRadius: "var(--radius)", overflow: "hidden", display: "block" }}>
                <Image src={s.img} alt={s.title} fill unoptimized style={{ objectFit: "cover", transition: "transform 0.4s" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
                <div style={{ position: "absolute", inset: 0, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.num}</div>
                  <div>
                    <h4 style={{ color: "#fff", marginBottom: "0.4rem" }}>{s.title}</h4>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8rem", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ── */}
      <section style={{ background: "var(--brand)", padding: "4rem 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }}>
            {[
              { icon: "✓", title: "DVSA Approved", sub: "Official MOT testing station" },
              { icon: "⚡", title: "EV Specialists", sub: "Trained in electric & hybrid vehicles" },
              { icon: "£", title: "Fair Pricing", sub: "No hidden fees, always confirmed first" },
              { icon: "★", title: "5-Star Rated", sub: "Trusted by thousands of local customers" },
            ].map(t => (
              <div key={t.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", color: "var(--accent)" }}>
                  {t.icon}
                </div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>{t.title}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", lineHeight: 1.5 }}>{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE CTA STRIP ── */}
      <section style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=60"
          alt="Workshop"
          fill
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,58,115,0.95) 0%, rgba(0,58,115,0.7) 60%, rgba(0,0,0,0.3) 100%)" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 2, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>
          <div>
            <div className="eyebrow eyebrow-white">Get in Touch</div>
            <h2 style={{ color: "#fff", maxWidth: "18ch", marginBottom: "0.75rem" }}>Quality parts. Honest pricing. Proper expertise.</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>Serving Daventry, Weedon, Flore, Crick &amp; surrounding areas</p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/quote" className="btn btn-accent">Get a Free Quote</Link>
            <a href="tel:01327349181" className="btn btn-outline-white">01327 349181</a>
          </div>
        </div>
      </section>
    </>
  );
}
