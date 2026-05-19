"use client";
import { useState, useEffect } from "react";

export default function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="tel:01327349181"
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
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
      01327 349181
    </a>
  );
}
