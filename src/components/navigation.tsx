"use client";
import { useState, useEffect, useRef } from "react";
import { navigation } from "@/data/site";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#identity" aria-label="Maissara Selim, home">
          MS<span className="brand-dot">.</span>
          <span className="brand-domain">MAISSARA.TECH</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="contact-link" href="#contact">
          CONTACT <span aria-hidden="true">↗</span>
        </a>
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
        {navigation.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
