"use client";
import Link from "next/link";
import Image from "next/image";

const LOGO = "https://cdn.prod.website-files.com/6688ffba727076417daf7a96/668903eb40456e66e929f36a_TheDaventryGarage%20Logo%20White.png";

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", color: "#fff" }}>
      <div className="wrap" style={{ paddingTop: "4rem", paddingBottom: "2.5rem" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand col */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <Image src={LOGO} alt="The Garage Daventry" width={120} height={60} style={{ objectFit: "contain", height: 50, width: "auto" }} unoptimized />
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "28ch" }}>
              Expert mechanics with 55+ years of combined experience. Serving Daventry and the surrounding area.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="tel:01327349181" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>01327 349181</a>
              <a href="mailto:info@thegaragedaventry.com" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>info@thegaragedaventry.com</a>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>High March, Daventry, NN11</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>Services</h6>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["MOTs", "Servicing", "EV & Hybrid", "Diagnostics", "Brake Repairs", "Clutch", "Exhausts", "Air Conditioning"].map(s => (
                <Link key={s} href="/services" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h6 style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>Company</h6>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
                { href: "/quote", label: "Get a Quote" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h6 style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>Opening Hours</h6>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { day: "Mon – Fri", hrs: "8:00 – 17:30" },
                { day: "Saturday", hrs: "8:00 – 13:00" },
                { day: "Sunday", hrs: "Closed" },
              ].map(h => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>{h.day}</span>
                  <span style={{ color: h.hrs === "Closed" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 500 }}>{h.hrs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} The Garage Daventry. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>
            Serving Daventry · Weedon · Flore · Crick &amp; surrounding areas
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .wrap > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          footer .wrap > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
