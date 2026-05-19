"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnimateObserver() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    const delay = isFirst.current ? 1950 : 60;
    isFirst.current = false;

    let io: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-anim]:not(.anim-visible)")
      );

      // Immediately reveal anything already in the viewport
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.style.setProperty("--anim-delay", `${el.dataset.delay ?? "0"}s`);
            el.classList.add("anim-visible");
            io!.unobserve(el);
          });
        },
        // rootMargin top is negative so above-fold elements still fire
        { threshold: 0.08, rootMargin: "120px 0px -32px 0px" }
      );

      els.forEach((el) => io!.observe(el));
    }, delay);

    return () => {
      clearTimeout(timer);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
