"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingMOT() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <Link
      href="/quote?service=mot"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        background: "var(--accent)",
        color: "#fff",
        padding: "0.875rem 1.375rem",
        borderRadius: "9999px",
        textDecoration: "none",
        boxShadow: "0 4px 24px rgba(242,86,58,0.45)",
        transform: visible ? "scale(1) translateY(0)" : "scale(0.7) translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease, background 0.2s",
        fontWeight: 700,
        fontSize: "0.875rem",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "var(--accent-dark)";
        e.currentTarget.style.boxShadow = "0 6px 32px rgba(242,86,58,0.55)";
        e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "var(--accent)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(242,86,58,0.45)";
        e.currentTarget.style.transform = "scale(1) translateY(0)";
      }}
    >
      <svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9c0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
      Book an MOT
    </Link>
  );
}
