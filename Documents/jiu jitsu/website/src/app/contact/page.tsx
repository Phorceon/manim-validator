"use client";

import { useState } from "react";

const hours = [
  { day: "Monday", hours: "[TODO: Enter hours]" },
  { day: "Tuesday", hours: "3:00 PM+ [TODO: Confirm]" },
  { day: "Wednesday", hours: "[TODO: Enter hours]" },
  { day: "Thursday", hours: "3:00 PM+ [TODO: Confirm] (No-Gi 7:30 PM)" },
  { day: "Friday", hours: "[TODO: Enter hours]" },
  { day: "Saturday", hours: "[TODO: Enter hours]" },
  { day: "Sunday", hours: "[TODO: Enter hours]" },
];

const interests = [
  "Adult BJJ",
  "Kids Program (4+)",
  "No-Gi Classes",
  "First Responder Promo",
  "[TODO: Add more]",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to API
    setSubmitted(true);
  };

  return (
    <div>
      {/* Spacer for navbar */}
      <div style={{ height: '100px' }} />

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1>Contact</h1>
          <p className="mt-2 text-lg text-muted">
            Get in touch — we&apos;ll get back to you on the mat or by phone
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="overflow-hidden rounded-md border border-border">
              <iframe
                title="Academy of Jiu Jitsu Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5!2d-121.130182!3d37.729891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090e4c!2s505+Doak+Blvd%2C+Ripon%2C+CA+95366!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </div>

            {/* Address & Phone */}
            <div className="rounded-md border border-border bg-surface p-6">
              <h3>Find Us</h3>
              <address className="mt-3 not-italic space-y-2 text-sm">
                <p>
                  <span className="text-muted">Address: </span>
                  505 Doak Blvd Suite-H, Ripon, CA 95366
                </p>
                <p>
                  <span className="text-muted">Phone: </span>
                  <a
                    href="tel:+12099223558"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    (209) 922-3558
                  </a>
                </p>
                <p>
                  <span className="text-muted">Instagram: </span>
                  <a
                    href="https://www.instagram.com/academyofjiujitsu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    @academyofjiujitsu
                  </a>
                </p>
              </address>
            </div>

            {/* Hours */}
            <div className="rounded-md border border-border bg-surface p-6">
              <h3>Hours</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span className="text-muted">{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="rounded-md border border-border bg-surface p-6">
              <h3>Send Us a Message</h3>
              <p className="mt-1 text-sm text-muted">
                Interested in a free trial? Have questions? Reach out.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-md border border-accent/30 bg-accent/10 p-6 text-center">
                  <p className="text-lg font-semibold">Message Sent!</p>
                  <p className="mt-2 text-sm text-muted">
                    We&apos;ll get back to you soon. See you on the mat!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="(209) 555-0123"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium"
                    >
                      Interested In
                    </label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(e) =>
                        setForm({ ...form, interest: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select...</option>
                      {interests.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
