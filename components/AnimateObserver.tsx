"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnimateObserver() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    // First load: wait for preloader to finish. Subsequent navigations: near-instant.
    const delay = isFirst.current ? 1950 : 80;
    isFirst.current = false;

    const timer = setTimeout(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-anim]:not(.anim-visible)")
      );

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.style.setProperty("--anim-delay", `${el.dataset.delay ?? "0"}s`);
            el.classList.add("anim-visible");
            io.unobserve(el);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
      );

      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
