import Link from "next/link";

const hours = [
  { day: "Mon", hours: "[TODO]" },
  { day: "Tue", hours: "3:00 PM+" },
  { day: "Wed", hours: "[TODO]" },
  { day: "Thu", hours: "3:00 PM+ (No-Gi 7:30 PM)" },
  { day: "Fri", hours: "[TODO]" },
  { day: "Sat", hours: "[TODO]" },
  { day: "Sun", hours: "[TODO]" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
              ACADEMY OF <span className="text-accent">JIU JITSU</span>
            </h3>
            <p className="mt-2 text-sm text-muted">
              Brazilian Jiu Jitsu for all ages & levels.
              <br />
              Head Instructor: Devon Elias Martinez
            </p>
            <a
              href="https://www.instagram.com/academyofjiujitsu/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-muted hover:text-foreground transition-colors"
            >
              @academyofjiujitsu
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Hours
            </h4>
            <ul className="mt-3 space-y-1.5 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span className="shrink-0 text-muted">{h.day}</span>
                  <span className="text-right">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Contact
            </h4>
            <address className="mt-3 not-italic text-sm space-y-1">
              <p>505 Doak Blvd Suite-H</p>
              <p>Ripon, CA 95366</p>
              <p className="mt-2">
                <a
                  href="tel:+12099223558"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  (209) 922-3558
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/programs"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Follow Us
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/academyofjiujitsu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} Academy of Jiu Jitsu. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
