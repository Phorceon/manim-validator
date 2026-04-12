import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Brazilian Jiu Jitsu",
    subtitle: "Adults — All Levels",
    description:
      "Structured BJJ program built on technical precision, strong fundamentals, and disciplined training.",
    image: "/assets/instagram/post_14_martial_arts.jpg",
    href: "/programs",
  },
  {
    title: "Kids Program",
    subtitle: "Ages 4 & Up",
    description:
      "Classes for kids ages 4 and up. See Programs page for details.",
    image: "/assets/instagram/post_11_kids_spar2.jpg",
    href: "/programs",
  },
  {
    title: "No-Gi Classes",
    subtitle: "Thursdays 7:30–8:30 PM",
    description:
      "No-Gi training every Thursday night. All skill levels welcome.",
    image: "/assets/instagram/post_19_guerrilla.jpg",
    href: "/programs",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero — Image Collage */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Collage Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 bg-background p-1">
          {/* Row 1 */}
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_06_gi.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_14_martial_arts.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_19_guerrilla.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_01_pinned_reel.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>

          {/* Row 2 */}
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_10_gi2.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_03_brothers.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_22_classes.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_17_youth.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>

          {/* Row 3 */}
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_16_training.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_02_sweep.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_09_belt.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src="/assets/instagram/post_08_nogi.jpg" alt="" fill className="object-cover" sizes="25vw" />
          </div>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1>
            ACADEMY OF{" "}
            <span className="text-accent">JIU JITSU</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Brazilian Jiu Jitsu for all ages & levels
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-md border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gray-400 hover:bg-white/5"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Location
              </p>
              <p className="mt-1 text-sm">
                505 Doak Blvd Suite-H, Ripon, CA
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Phone
              </p>
              <a
                href="tel:+12099223558"
                className="mt-1 text-sm text-accent hover:text-accent-hover transition-colors"
              >
                (209) 922-3558
              </a>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Hours
              </p>
              <p className="mt-1 text-sm">[TODO: Confirm schedule]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2>Programs</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group overflow-hidden rounded-md border border-border bg-surface transition-all hover:border-accent/30"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {program.subtitle}
                  </p>
                  <h3 className="mt-0.5 text-lg text-white" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>{program.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted">{program.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <p className="text-4xl font-semibold sm:text-5xl">
            <span className="text-accent">[TODO]</span> Students Taught
          </p>
          <p className="mt-2 text-muted">
            [TODO: Add a real number or a short line — e.g., "Training the Ripon community since 2024"]
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-md bg-surface p-8 text-center sm:p-12">
          <h2>Ready to Step on the Mat?</h2>
          <p className="mt-3 max-w-xl mx-auto text-muted">
            Free trial available. [TODO: Add a short real sentence — e.g., &quot;Message us to book your first class&quot;]
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
