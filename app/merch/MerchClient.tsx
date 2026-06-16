"use client";
import { useState } from "react";
import Link from "next/link";

const images = [
  "/images/merch-1.jpg",
  "/images/merch-2.jpg",
  "/images/merch-3.jpg",
  "/images/merch-4.jpg",
  "/images/merch-5.jpg",
  "/images/merch-6.jpg",
  "/images/merch-7.jpg",
  "/images/merch-8.jpg",
];

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export default function MerchClient() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--brand)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="wrap">
          <div className="eyebrow eyebrow-white" data-anim="slide-left">Official Merchandise</div>
          <h1 data-anim="fade-up" data-delay="0.1" style={{ color: "#fff", marginBottom: "1.25rem" }}>The Garage Daventry Merch</h1>
          <p data-anim="fade-up" data-delay="0.2" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "52ch", lineHeight: 1.75 }}>
            Represent Daventry&apos;s favourite garage. Call us to place your order — available in sizes XS to 3XL.
          </p>
        </div>
      </section>

      {/* Product section */}
      <section className="bg-white section">
        <div className="wrap">

          {/* Product card */}
          <div className="r-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "flex-start", marginBottom: "5rem" }}>

            {/* Gallery */}
            <div data-anim="fade-up">
              <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "var(--radius)", overflow: "hidden", marginBottom: "1rem", background: "#f5f5f5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[active]}
                  alt="The Garage Daventry merchandise"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 0.2s" }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
                {images.map((src, i) => (
                  <div key={i}
                    onClick={() => setActive(i)}
                    style={{
                      aspectRatio: "1/1",
                      borderRadius: "0.5rem",
                      overflow: "hidden",
                      border: `2px solid ${i === active ? "var(--accent)" : "transparent"}`,
                      cursor: "pointer",
                      background: "#f5f5f5",
                      transition: "border-color 0.15s",
                    }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`View ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div data-anim="fade-up" data-delay="0.15">
              <div className="eyebrow" style={{ marginBottom: "1rem" }}>The Garage Daventry</div>
              <h2 style={{ color: "var(--dark)", marginBottom: "0.5rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Official Workshop Tee</h2>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.25rem", letterSpacing: "-0.03em" }}>£19.99</div>
              <div style={{ fontSize: "0.8rem", color: "var(--mid)", marginBottom: "2rem" }}>Inc. VAT · Free collection from the garage</div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--mid)", marginBottom: "0.75rem" }}>Available Sizes</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {sizes.map(size => (
                    <div key={size} style={{
                      padding: "0.5rem 0.875rem",
                      border: "1.5px solid var(--border)",
                      borderRadius: "0.375rem",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--dark)",
                    }}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "var(--cream)", borderRadius: "var(--radius)", padding: "1.5rem", marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--mid)", marginBottom: "0.75rem" }}>How to Order</div>
                <p style={{ color: "var(--dark)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  Give us a call or drop us a WhatsApp with your size — we&apos;ll sort the rest.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <a href="tel:01327349181" style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "var(--brand)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    01327 349181
                  </a>
                  <a href="https://wa.me/441327349181?text=Hi%2C%20I%27d%20like%20to%20order%20a%20garage%20tee." target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#25D366", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:01327349181" className="btn btn-accent">Call to Order</a>
                <Link href="/contact" className="btn btn-outline">Send a Message</Link>
              </div>
            </div>
          </div>

          {/* All photos grid */}
          <div>
            <h3 data-anim="fade-up" style={{ color: "var(--dark)", marginBottom: "2rem" }}>All Photos</h3>
            <div className="r-4col" data-anim="fade-up" data-delay="0.1" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
              {images.map((src, i) => (
                <div key={i}
                  onClick={() => { setActive(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  style={{ aspectRatio: "1/1", borderRadius: "0.75rem", overflow: "hidden", background: "#f5f5f5", cursor: "pointer" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Merch photo ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--brand)", padding: "5rem 0" }}>
        <div className="wrap r-cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="eyebrow eyebrow-white" data-anim="slide-left">Order Today</div>
            <h2 data-anim="fade-up" data-delay="0.1" style={{ color: "#fff" }}>£19.99 inc VAT — Sizes XS to 3XL</h2>
            <p data-anim="fade-up" data-delay="0.15" style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.75rem" }}>Call or WhatsApp us to place your order.</p>
          </div>
          <div data-anim="fade-up" data-delay="0.2" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:01327349181" className="btn btn-white">01327 349181</a>
            <a href="https://wa.me/441327349181?text=Hi%2C%20I%27d%20like%20to%20order%20a%20garage%20tee." target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
