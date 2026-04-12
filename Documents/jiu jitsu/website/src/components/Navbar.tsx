"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full px-2 py-1.5">
        {/* Logo */}
        <Link href="/" className="shrink-0 px-3 py-1">
          <span className="text-lg text-white" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            AO<span className="text-accent">JJ</span>
          </span>
        </Link>

        {/* Divider */}
        <div className="h-6 w-px bg-border/60 hidden md:block" />

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-black/40 text-white"
                  : "text-gray-300 hover:bg-black/30 hover:text-white"
              }`}
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="mt-2 rounded-2xl border border-border/60 bg-background/90 px-3 py-3 backdrop-blur-xl shadow-lg shadow-black/20 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-surface text-foreground"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
