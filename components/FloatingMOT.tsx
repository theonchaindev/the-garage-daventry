"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingMOT() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay so it doesn't compete with the page load
    const t = setTimeout(() => setVisible(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Link
        href="/quote"
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: `translateY(-50%) translateX(${visible ? "0%" : "100%"})`,
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          background: "var(--accent)",
          color: "#fff",
          padding: "1.25rem 0.75rem",
          borderRadius: "0.5rem 0 0 0.5rem",
          textDecoration: "none",
          boxShadow: "-4px 0 24px rgba(242,86,58,0.35)",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), background 0.2s",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-dark)")}
        onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
      >
        {/* Car icon */}
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transform: "rotate(90deg)" }}>
          <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h2l3-4h8l3 4h2a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
          <circle cx="7.5" cy="17.5" r="2.5"/>
          <circle cx="16.5" cy="17.5" r="2.5"/>
        </svg>

        <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Book MOT
        </span>

        <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}>
          From £54
        </span>
      </Link>

      <style>{`
        @media (max-width: 640px) {
          /* Shift to bottom on small screens */
          a[href="/quote"][style*="fixed"] {
            top: auto !important;
            bottom: 1.25rem !important;
            right: 1.25rem !important;
            transform: none !important;
            writing-mode: horizontal-tb !important;
            border-radius: 9999px !important;
            padding: 0.75rem 1.25rem !important;
            flex-direction: row !important;
          }
        }
      `}</style>
    </>
  );
}
