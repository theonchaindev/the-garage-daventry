"use client";
import { useEffect } from "react";

export default function AnimateObserver() {
  useEffect(() => {
    // Start observing just after the preloader finishes (1.9s)
    const boot = setTimeout(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-anim]"));

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            el.style.setProperty("--anim-delay", `${delay}s`);
            el.classList.add("anim-visible");
            io.unobserve(el);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
      );

      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 1950);

    return () => clearTimeout(boot);
  }, []);

  return null;
}
