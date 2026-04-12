import Link from "next/link";

export default function PricingPage() {
  return (
    <div>
      {/* Spacer for navbar */}
      <div style={{ height: '100px' }} />

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1>Pricing</h1>
          <p className="mt-2 text-lg text-muted">
            [TODO: Add a short description]
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main pricing */}
        <div className="rounded-md border border-border bg-surface p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2>Monthly Membership</h2>
              <p className="mt-2 text-muted">
                [TODO: Confirm what&apos;s included — unlimited classes, open mat, etc.]
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black">$75</span>
              <span className="text-xl text-muted">/month</span>
            </div>
          </div>

          <div className="mt-6 rounded-md border border-border bg-background p-4 text-sm text-muted">
            <p>No contract. [TODO: Add details about what&apos;s included, family discounts, founder spots, etc.]</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Get Started
            </Link>
            <a
              href="tel:+12099223558"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-surface-hover"
            >
              Call (209) 922-3558
            </a>
          </div>
        </div>

        {/* Free trial */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-surface p-6">
            <h3>Free Trial</h3>
            <p className="mt-1 text-2xl font-bold text-accent">Free</p>
            <p className="mt-2 text-sm text-muted">
              [TODO: Confirm — one class? One week? Any restrictions?]
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              Book a trial →
            </Link>
          </div>

          <div className="rounded-md border border-border bg-surface p-6">
            <h3>First Responders</h3>
            <p className="mt-1 text-2xl font-bold text-blue-400">Free in April</p>
            <p className="mt-2 text-sm text-muted">
              Free training for first responders for the month of April. Text or call to sign up.
            </p>
            <a
              href="tel:+12099223558"
              className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Call (209) 922-3558 →
            </a>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6 rounded-md border border-border bg-surface p-6">
          <h3>Additional Information</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium">Founder Spots</h4>
              <p className="mt-1 text-sm text-muted">
                [TODO: Add details about founder pricing and benefits]
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium">[TODO]</h4>
              <p className="mt-1 text-sm text-muted">
                [TODO: Family discounts? Gear requirements?]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
