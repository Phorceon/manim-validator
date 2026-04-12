import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Brazilian Jiu Jitsu",
    subtitle: "Adults — All Levels",
    description:
      "Structured BJJ program built on technical precision, strong fundamentals, and disciplined training. Designed to provide clear progression for beginners, experienced practitioners, and competitors alike.",
    details: [
      // TODO: Replace with actual class details
      "[TODO: Add specific details about this program]",
      "[TODO: Add specific details about this program]",
    ],
    image: "/assets/instagram/post_14_martial_arts.jpg",
  },
  {
    title: "Kids Program",
    subtitle: "Ages 4 & Up",
    description:
      "Classes for kids 4 years and older. Confirmed: the 4-5 year old class exists and they learn position sparring.",
    details: [
      // TODO: Replace with actual class details
      "[TODO: Add age group breakdowns]",
      "[TODO: Add class times and structure]",
    ],
    image: "/assets/instagram/post_11_kids_spar2.jpg",
  },
  {
    title: "No-Gi Jiu Jitsu",
    subtitle: "Thursdays 7:30 PM – 8:30 PM",
    description:
      "No-Gi training every Thursday night from 7:30 PM to 8:30 PM.",
    details: [
      // Confirmed from Instagram post
      "Every Thursday",
      "7:30 PM – 8:30 PM",
      "[TODO: Add any additional details]",
    ],
    image: "/assets/instagram/post_19_guerrilla.jpg",
  },
  {
    title: "Muay Thai",
    subtitle: "[TODO: Confirm schedule]",
    description:
      "Muay Thai training is offered at the academy based on their social media posts. Details to be confirmed.",
    details: [
      // TODO: Replace with actual confirmed details
      "[TODO: Confirm if this is a regular program or occasional training]",
      "[TODO: Add schedule and details]",
    ],
    image: "/assets/instagram/post_07_muaythai.jpg",
  },
];

export default function ProgramsPage() {
  return (
    <div>
      {/* Spacer for navbar */}
      <div style={{ height: '100px' }} />

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1>Programs</h1>
          <p className="mt-2 text-lg text-muted">
            [TODO: Add a short description of your programs]
          </p>
        </div>
      </section>

      {/* Programs */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden rounded-md sm:h-96">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-medium uppercase tracking-wider text-accent">
                  {program.subtitle}
                </p>
                <h2 className="mt-1">
                  {program.title}
                </h2>
                <p className="mt-4 text-muted">{program.description}</p>
                <ul className="mt-6 space-y-2">
                  {program.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={detail.startsWith("[TODO") ? "text-muted italic" : ""}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted">
            Not sure where to start?{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover transition-colors">
              Get in touch
            </Link>{" "}
            or come to a free trial class.
          </p>
        </div>
      </div>
    </div>
  );
}
