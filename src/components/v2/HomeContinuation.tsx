"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
export function HomeContinuation({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let started = false;
    const media = window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)");
    let cleanup: (() => void) | undefined;
    // Cinematic logic is scoped to the homepage and loaded after the critical hero.
    const initialize = () => {
      if (started || disposed || !media.matches) return;
      started = true;
      void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (disposed || !root.current) return;
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        mm.add(
          {
            desktop: "(min-width: 769px)",
            motion: "(prefers-reduced-motion: no-preference)",
          },
          (ctx) => {
            if (!ctx.conditions?.motion || !ctx.conditions?.desktop) return;
            const scope = gsap.context(() => {
              root.current
                ?.querySelectorAll(".chapter-reveal")
                .forEach((element) => {
                  gsap.fromTo(
                    element,
                    { y: ctx.conditions?.desktop ? 24 : 10 },
                    {
                      y: 0,
                      duration: 0.7,
                      ease: "power2.out",
                      scrollTrigger: {
                        trigger: element,
                        start: "top 92%",
                        once: true,
                      },
                    },
                  );
                });
              if (ctx.conditions?.desktop)
                root.current
                  ?.querySelectorAll(".project-media-clip img")
                  .forEach((element) => {
                    gsap.fromTo(
                      element,
                      { scale: 1.035 },
                      {
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                          trigger: element,
                          start: "top bottom",
                          end: "center center",
                          scrub: 0.6,
                        },
                      },
                    );
                  });
              const path = root.current?.querySelector(".professional-path");
              if (path)
                gsap.fromTo(
                  path,
                  { "--path-progress": 0 },
                  {
                    "--path-progress": 1,
                    ease: "none",
                    scrollTrigger: {
                      trigger: path,
                      start: "top 85%",
                      end: "bottom 70%",
                      scrub: 0.5,
                    },
                  },
                );
            }, root);
            return () => scope.revert();
          },
        );
        cleanup = () => mm.revert();
      },
      );
    };
    initialize();
    media.addEventListener("change", initialize);
    return () => {
      disposed = true;
      media.removeEventListener("change", initialize);
      cleanup?.();
    };
  }, []);
  return (
    <div ref={root} className="home-continuation">
      {children}
    </div>
  );
}
