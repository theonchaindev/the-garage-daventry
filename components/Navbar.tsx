"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const LOGO = "https://cdn.prod.website-files.com/6688ffba727076417daf7a96/668903eb40456e66e929f36a_TheDaventryGarage%20Logo%20White.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      background: "var(--brand)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      transition: "box-shadow 0.3s",
      boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.25)" : "none",
    }}>
      <div className="wrap nav-wrap" style={{ height: scrolled ? 72 : 120, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", transition: "height 0.35s cubic-bezier(0.22,1,0.36,1)" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src={LOGO}
            alt="The Garage Daventry"
            width={200}
            height={100}
            className="nav-logo-img"
            style={{ objectFit: "contain", height: scrolled ? 46 : 100, width: "auto", transition: "height 0.35s cubic-bezier(0.22,1,0.36,1)" }}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav links — centred */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.25rem", flex: 1, justifyContent: "center" }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0 }} className="nav-desktop">
          <a href="tel:01327349181" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.85)", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            01327 349181
          </a>
          <Link href="/quote" className="btn btn-accent" style={{ padding: "0.5rem 1.25rem", fontSize: "0.82rem" }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(o => !o)} className="nav-mobile-toggle" aria-label="Toggle menu"
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "0.25rem", flexShrink: 0 }}>
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--brand-dark)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "1rem 1.25rem", color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {l.label}
            </Link>
          ))}
          <div style={{ padding: "0.75rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <a href="tel:01327349181" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 500 }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              01327 349181
            </a>
          </div>
          <div style={{ padding: "1rem 1.25rem" }}>
            <Link href="/quote" className="btn btn-accent" style={{ display: "block", textAlign: "center" }} onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          color: rgba(255,255,255,0.75);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
