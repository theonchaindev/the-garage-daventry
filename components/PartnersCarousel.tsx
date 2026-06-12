const partners = [
  "BOSCH", "CASTROL", "MICHELIN", "SNAP-ON", "NGK", "BREMBO",
  "MOBIL 1", "VALEO", "MANN-FILTER", "LUK", "DENSO", "DVSA APPROVED",
];

export default function PartnersCarousel() {
  const row = [...partners, ...partners]; // duplicated for seamless loop

  return (
    <section style={{ background: "var(--brand-dark)", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", padding: "1.1rem 0" }}>
      <div className="partners-track" style={{ display: "flex", alignItems: "center", gap: "4rem", width: "max-content" }}>
        {row.map((p, i) => (
          <span key={`${p}-${i}`} style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
            fontWeight: 800,
            letterSpacing: "0.22em",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
          }}>
            {p}
          </span>
        ))}
      </div>

      <style>{`
        .partners-track {
          animation: partners-marquee 36s linear infinite;
        }
        @keyframes partners-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
