"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "@/lib/motion";

/** A single reveal language across all nine routes, with visible server-rendered content. */
export function EditorialMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting || seen.has(target)) return;
        seen.add(target);
        observer.unobserve(target);
        if (preference.matches) return;
        const media = target.hasAttribute("data-editorial-media");
        const element = media ? target.querySelector("img") : target;
        if (!element) return;
        const animation = element.animate(
          media
            ? [{ opacity: 0.86, transform: "scale(1.018)" }, { opacity: 1, transform: "scale(1)" }]
            : [{ opacity: 0.7, transform: `translateY(${motion.distance}px)` }, { opacity: 1, transform: "translateY(0)" }],
          { duration: media ? motion.editorial : motion.reveal, easing: motion.ease },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    root.current?.querySelectorAll(
      ".chapter-reveal, .editorial-intro, .case-study-chapter, .work-index-copy, .about-editorial, .public-outputs article, [data-editorial-media]",
    ).forEach((element) => observer.observe(element));
    const settle = () => {
      if (preference.matches) animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener("change", settle);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", settle);
    };
  }, [pathname]);

  return <div ref={root} className="editorial-flow">{children}</div>;
}
