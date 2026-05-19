"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const vehicles = [
  { id: "car", label: "Car", sub: "Hatchback, saloon, estate, SUV" },
  { id: "van", label: "Van / MPV", sub: "Light commercial, people carrier" },
  { id: "ev", label: "Electric Vehicle", sub: "Fully electric (BEV)" },
  { id: "hybrid", label: "Hybrid", sub: "PHEV, mild hybrid, HEV" },
];

const serviceList = [
  { id: "mot",          label: "MOT",                   base: { car: 54.85, van: 58.6,  ev: 54.85, hybrid: 54.85 } },
  { id: "interim",      label: "Interim Service",        base: { car: 89,    van: 110,   ev: 120,   hybrid: 120   } },
  { id: "full",         label: "Full Service",           base: { car: 149,   van: 175,   ev: 175,   hybrid: 175   } },
  { id: "mot_interim",  label: "MOT + Interim Service",  base: { car: 129,   van: 155,   ev: 160,   hybrid: 160   } },
  { id: "mot_full",     label: "MOT + Full Service",     base: { car: 185,   van: 215,   ev: 215,   hybrid: 215   } },
  { id: "diagnostics",  label: "Diagnostics",            base: { car: 49,    van: 49,    ev: 59,    hybrid: 59    } },
  { id: "brakes",       label: "Brake Repair",           base: { car: 79,    van: 95,    ev: 89,    hybrid: 89    } },
  { id: "clutch",       label: "Clutch Replacement",     base: { car: 299,   van: 349,   ev: 0,     hybrid: 299   } },
  { id: "exhaust",      label: "Exhaust Replacement",    base: { car: 99,    van: 125,   ev: 0,     hybrid: 99    } },
  { id: "aircon",       label: "Air Conditioning",       base: { car: 49,    van: 59,    ev: 59,    hybrid: 59    } },
];

const ageMult: Record<string, number> = { "0-3": 1, "3-7": 1.1, "7-12": 1.2, "12+": 1.35 };

interface F { vehicle: string; service: string; age: string; name: string; phone: string; email: string; reg: string; notes: string; }

function calcPrice(d: Partial<F>) {
  if (!d.vehicle || !d.service || !d.age) return null;
  const svc = serviceList.find(s => s.id === d.service);
  if (!svc) return null;
  const base = svc.base[d.vehicle as keyof typeof svc.base] ?? 0;
  if (!base) return null;
  const m = ageMult[d.age] ?? 1;
  return { low: Math.round(base * m), high: Math.round(base * m * 1.25) };
}

const cardStyle = (sel: boolean): React.CSSProperties => ({
  padding: "1.25rem 1.5rem",
  border: `2px solid ${sel ? "var(--brand)" : "var(--border)"}`,
  borderRadius: "0.5rem",
  background: sel ? "#eef4ff" : "#fff",
  cursor: "pointer",
  width: "100%",
  textAlign: "left",
  transition: "border-color 0.15s, background 0.15s",
});

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--border)",
  borderRadius: "0.375rem",
  padding: "0.75rem 1rem",
  fontSize: "0.9rem",
  outline: "none",
  color: "var(--dark)",
  background: "#fff",
};

const lbl: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--mid)",
  marginBottom: "0.5rem",
};

export default function QuoteBuilder() {
  const params = useSearchParams();
  const preService = params.get("service") ?? "";

  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<F>>(
    preService ? { service: preService } : {}
  );
  const [done, setDone] = useState(false);

  // If a service was pre-selected via URL, show a banner on step 0
  const hasPreService = Boolean(preService);

  const set = (k: keyof F, v: string) => setData(p => ({ ...p, [k]: v }));
  const price = calcPrice(data);

  const Bar = () => (
    <div style={{ display: "flex", gap: "0.375rem", marginBottom: "2rem" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i < step ? "var(--brand)" : i === step ? "var(--accent)" : "var(--border)", transition: "background 0.3s" }} />
      ))}
    </div>
  );

  if (done) {
    return (
      <div style={{ background: "#fff", borderRadius: "var(--radius)", padding: "3rem", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <svg width="28" height="28" fill="none" stroke="#fff" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ color: "var(--dark)", marginBottom: "0.75rem" }}>Quote Request Sent!</h3>
        <p style={{ color: "var(--mid)", marginBottom: "0.5rem" }}>
          Thanks, <strong style={{ color: "var(--dark)" }}>{data.name}</strong>. We&apos;ll be in touch within 2 hours.
        </p>
        {price && (
          <div style={{ margin: "2rem 0", padding: "2rem", border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "var(--cream)" }}>
            <div style={{ ...lbl, textAlign: "center", marginBottom: "0.5rem" }}>Your estimate</div>
            <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "3.5rem", letterSpacing: "-0.05em", lineHeight: 1 }}>£{price.low} – £{price.high}</div>
            <div style={{ color: "var(--mid)", fontSize: "0.75rem", marginTop: "0.5rem" }}>Subject to vehicle inspection · No obligation</div>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="tel:01327349181" className="btn btn-primary">Call 01327 349181</a>
          <Link href="/" className="btn btn-outline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", borderRadius: "var(--radius)", padding: "2.5rem" }}>
      <Bar />

      {/* Step 0: Vehicle type */}
      {step === 0 && (
        <div>
          <p style={lbl}>Step 1 of 5</p>
          <h3 style={{ color: "var(--dark)", marginBottom: "0.5rem" }}>What type of vehicle?</h3>
          {hasPreService && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#eef4ff", border: "1px solid #c7d9ff", borderRadius: "0.375rem", padding: "0.6rem 0.875rem", marginBottom: "1rem", fontSize: "0.8rem", color: "var(--brand)", fontWeight: 500 }}>
              ✓ {serviceList.find(s => s.id === preService)?.label ?? preService} already selected — just pick your vehicle type to continue.
            </div>
          )}
          <p style={{ color: "var(--mid)", fontSize: "0.875rem", marginBottom: "1.75rem" }}>This helps us give the most accurate estimate.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {vehicles.map(v => (
              <button key={v.id} onClick={() => {
                set("vehicle", v.id);
                // Skip service step if service already pre-selected
                setStep(hasPreService ? 2 : 1);
              }} style={cardStyle(data.vehicle === v.id)}>
                <div style={{ fontWeight: 600, color: "var(--dark)", fontSize: "0.95rem" }}>{v.label}</div>
                <div style={{ color: "var(--mid)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{v.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Service */}
      {step === 1 && (
        <div>
          <p style={lbl}>Step 2 of 5</p>
          <h3 style={{ color: "var(--dark)", marginBottom: "0.5rem" }}>What service do you need?</h3>
          <p style={{ color: "var(--mid)", fontSize: "0.875rem", marginBottom: "1.75rem" }}>Select the closest to what you need.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {serviceList
              .filter(s => !(data.vehicle === "ev" && (s.id === "clutch" || s.id === "exhaust")))
              .map(s => {
                const base = s.base[data.vehicle as keyof typeof s.base] ?? 0;
                return (
                  <button key={s.id} onClick={() => { set("service", s.id); setStep(2); }}
                    style={{ ...cardStyle(data.service === s.id), display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 500, color: "var(--dark)" }}>{s.label}</span>
                    {base > 0 && <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.875rem" }}>From £{base.toFixed(2)}</span>}
                  </button>
                );
              })}
          </div>
          <button onClick={() => setStep(0)} style={{ marginTop: "1.25rem", background: "none", border: "none", color: "var(--mid)", fontSize: "0.85rem", cursor: "pointer" }}>← Back</button>
        </div>
      )}

      {/* Step 2: Age */}
      {step === 2 && (
        <div>
          <p style={lbl}>Step 3 of 5</p>
          <h3 style={{ color: "var(--dark)", marginBottom: "0.5rem" }}>How old is your vehicle?</h3>
          <p style={{ color: "var(--mid)", fontSize: "0.875rem", marginBottom: "1.75rem" }}>Age affects part availability and labour time.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {[
              { id: "0-3", label: "0–3 years", sub: "Nearly new" },
              { id: "3-7", label: "3–7 years", sub: "Mid-age" },
              { id: "7-12", label: "7–12 years", sub: "Older vehicle" },
              { id: "12+", label: "12+ years", sub: "Classic / high mileage" },
            ].map(a => (
              <button key={a.id} onClick={() => { set("age", a.id); setStep(3); }} style={cardStyle(data.age === a.id)}>
                <div style={{ fontWeight: 600, color: "var(--dark)" }}>{a.label}</div>
                <div style={{ color: "var(--mid)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{a.sub}</div>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(hasPreService ? 0 : 1)} style={{ marginTop: "1.25rem", background: "none", border: "none", color: "var(--mid)", fontSize: "0.85rem", cursor: "pointer" }}>← Back</button>
        </div>
      )}

      {/* Step 3: Details */}
      {step === 3 && (
        <div>
          <p style={lbl}>Step 4 of 5</p>
          <h3 style={{ color: "var(--dark)", marginBottom: "1.75rem" }}>Your details</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={lbl}>Full Name *</label>
                <input type="text" required value={data.name ?? ""} onChange={e => set("name", e.target.value)} style={inputStyle} placeholder="John Smith" />
              </div>
              <div>
                <label style={lbl}>Phone *</label>
                <input type="tel" required value={data.phone ?? ""} onChange={e => set("phone", e.target.value)} style={inputStyle} placeholder="07700 900000" />
              </div>
            </div>
            <div>
              <label style={lbl}>Email *</label>
              <input type="email" required value={data.email ?? ""} onChange={e => set("email", e.target.value)} style={inputStyle} placeholder="john@example.com" />
            </div>
            <div>
              <label style={lbl}>Vehicle Registration (optional)</label>
              <input type="text" value={data.reg ?? ""} onChange={e => set("reg", e.target.value.toUpperCase())} style={{ ...inputStyle, textTransform: "uppercase" }} placeholder="AB12 CDE" />
            </div>
            <div>
              <label style={lbl}>Notes (optional)</label>
              <textarea rows={3} value={data.notes ?? ""} onChange={e => set("notes", e.target.value)} style={{ ...inputStyle, resize: "none" }} placeholder="Warning lights, noises, or any other concerns?" />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.75rem" }}>
            <button onClick={() => setStep(2)} style={{ background: "none", border: "none", color: "var(--mid)", fontSize: "0.85rem", cursor: "pointer" }}>← Back</button>
            <button onClick={() => { if (data.name && data.phone && data.email) setStep(4); }}
              disabled={!data.name || !data.phone || !data.email}
              className="btn btn-primary"
              style={{ opacity: (!data.name || !data.phone || !data.email) ? 0.4 : 1 }}>
              See My Quote →
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Result */}
      {step === 4 && (
        <div>
          <p style={lbl}>Step 5 of 5</p>
          <h3 style={{ color: "var(--dark)", marginBottom: "1.5rem" }}>Your Estimated Quote</h3>

          <div style={{ background: "var(--cream)", borderRadius: "0.5rem", padding: "1.25rem", marginBottom: "1.5rem" }}>
            {[
              { l: "Vehicle", v: vehicles.find(v => v.id === data.vehicle)?.label },
              { l: "Service", v: serviceList.find(s => s.id === data.service)?.label },
              { l: "Vehicle age", v: data.age ? `${data.age} years` : "" },
              { l: "Name", v: data.name },
              ...(data.reg ? [{ l: "Registration", v: data.reg }] : []),
            ].map(r => (
              <div key={r.l} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(0,0,0,0.07)", fontSize: "0.875rem" }}>
                <span style={{ color: "var(--mid)" }}>{r.l}</span>
                <span style={{ color: "var(--dark)", fontWeight: 500 }}>{r.v}</span>
              </div>
            ))}
          </div>

          {price ? (
            <div style={{ border: "2px solid var(--brand)", borderRadius: "0.5rem", padding: "2rem", textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{ ...lbl, textAlign: "center", marginBottom: "0.75rem" }}>Estimated Price Range</div>
              <div style={{ color: "var(--accent)", fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "0.5rem" }}>
                £{price.low} – £{price.high}
              </div>
              <div style={{ color: "var(--mid)", fontSize: "0.75rem" }}>Inc. VAT · Subject to vehicle inspection · No obligation</div>
            </div>
          ) : (
            <div style={{ border: "1px solid var(--border)", borderRadius: "0.5rem", padding: "2rem", textAlign: "center", marginBottom: "1.5rem" }}>
              <p style={{ color: "var(--mid)" }}>This service requires a personal quote. We&apos;ll be in touch shortly.</p>
            </div>
          )}

          <div style={{ background: "#fff4f2", border: "1px solid #ffd0c7", borderRadius: "0.375rem", padding: "1rem", fontSize: "0.8rem", color: "#8c2c1a", marginBottom: "1.5rem" }}>
            <strong>Please note:</strong> This is an estimate only. Final pricing may vary after inspection. We always confirm costs before any work begins.
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button onClick={() => setDone(true)} className="btn btn-accent" style={{ flex: 1 }}>Confirm Quote Request</button>
            <a href="tel:01327349181" className="btn btn-outline" style={{ flex: 1, justifyContent: "center" }}>Call Instead</a>
          </div>
          <button onClick={() => setStep(3)} style={{ marginTop: "1rem", background: "none", border: "none", color: "var(--mid)", fontSize: "0.85rem", cursor: "pointer" }}>← Edit details</button>
        </div>
      )}

      {/* Trust strip */}
      {step < 4 && (
        <div style={{ marginTop: "2rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {["No obligation", "Instant estimate", "Confirmed before work starts", "Trusted by 5,000+ customers"].map(t => (
            <span key={t} style={{ color: "var(--mid)", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <svg style={{ color: "var(--brand)", flexShrink: 0 }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
