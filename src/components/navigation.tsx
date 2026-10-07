"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navigation } from "@/data/site";
export function Navigation() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!home) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    for (const [, href] of navigation) {
      const section = document.getElementById(href.slice(1));
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [home]);
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  function target(label: string, href: string) {
    if (home) return href;
    return label === "WORK"
      ? "/work"
      : label === "RESEARCH"
        ? "/research"
        : label === "ABOUT"
          ? "/about"
          : `/${href}`;
  }
  function current(label: string, href: string) {
    return home
      ? active === href
      : label === "WORK"
        ? pathname.startsWith("/work")
        : label === "RESEARCH"
          ? pathname === "/research"
          : label === "ABOUT"
            ? pathname === "/about"
            : false;
  }
  function links() {
    return navigation.map(([label, href]) => (
      <Link
        key={href}
        href={target(label, href)}
        onClick={() => setOpen(false)}
        className={current(label, href) ? "nav-current" : ""}
        aria-current={
          current(label, href) ? (home ? "location" : "page") : undefined
        }
      >
        {label}
      </Link>
    ));
  }
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand"
          href={home ? "#identity" : "/"}
          onClick={() => setOpen(false)}
          aria-label="Maissara Selim, home"
        >
          MS<span className="brand-dot">.</span>
          <span className="brand-domain">MAISSARA.TECH</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links()}
        </nav>
        <Link
          className={`contact-link ${pathname === "/contact" ? "nav-current" : ""}`}
          href={home ? "#contact" : "/contact"}
          onClick={() => setOpen(false)}
        >
          CONTACT <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "CLOSE −" : "MENU +"}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links()}
      </nav>
    </header>
  );
}
