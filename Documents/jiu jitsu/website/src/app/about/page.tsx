import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Spacer for navbar */}
      <div style={{ height: '100px' }} />

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1>About Us</h1>
          <p className="mt-2 text-lg text-muted">
            Meet the team behind Academy of Jiu Jitsu
          </p>
        </div>
      </section>

      {/* Devon */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative h-96 overflow-hidden rounded-md sm:h-[28rem]">
            <Image
              src="/assets/instagram/post_14_martial_arts.jpg"
              alt="Devon Elias Martinez"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <h2>Devon Elias Martinez</h2>
            <p className="mt-1 text-sm text-accent font-medium">Head Instructor</p>
            <p className="mt-6 text-muted">
              [TODO: Add Devon's bio, background, rank, and story]
            </p>
          </div>
        </div>
      </section>

      {/* More team content placeholder */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-muted">
            [TODO: Add more about the academy, philosophy, team members, etc.]
          </p>
        </div>
      </section>
    </div>
  );
}
