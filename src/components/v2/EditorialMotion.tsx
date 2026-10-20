"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, revealFrames } from "@/lib/motion";

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
        const kind = media ? (target.hasAttribute("data-artwork") ? "artwork" : "media") : "text";
        const animation = element.animate(revealFrames(kind), {
          duration: media ? motion.editorial : motion.reveal,
          easing: motion.ease,
        });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    root.current?.querySelectorAll(
      ".chapter-reveal, .editorial-intro, .case-study-chapter > .label, .case-study-chapter > div > h2, .case-study-chapter > div > p, .project-exhibit-heading, .project-exhibit-copy, .about-editorial > h2, .public-outputs article, [data-editorial-media]",
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
