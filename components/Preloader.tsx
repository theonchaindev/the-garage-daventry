"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const LOGO = "https://cdn.prod.website-files.com/6688ffba727076417daf7a96/668903eb40456e66e929f36a_TheDaventryGarage%20Logo%20White.png";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      const remove = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(remove);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--brand)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        opacity: hiding ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: hiding ? "none" : "all",
      }}>
        {/* Logo */}
        <div style={{ animation: "preloader-logo 0.7s cubic-bezier(0.34,1.56,0.64,1) both" }}>
          <Image
            src={LOGO}
            alt="The Garage Daventry"
            width={120}
            height={120}
            style={{ objectFit: "contain", width: 110, height: "auto" }}
            priority
            unoptimized
          />
        </div>

        {/* Progress bar */}
        <div style={{ width: 160, height: 2, background: "rgba(255,255,255,0.15)", borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", background: "var(--accent)", borderRadius: 2, animation: "preloader-bar 1.5s ease-in-out forwards" }} />
        </div>
      </div>

      <style>{`
        @keyframes preloader-logo {
          from { opacity: 0; transform: scale(0.7) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes preloader-bar {
          0%   { width: 0%; }
          60%  { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </>
  );
}
