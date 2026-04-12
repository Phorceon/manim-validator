interface ClassInfo {
  time: string;
  name: string;
  duration: string;
  highlight?: boolean;
}

interface DaySchedule {
  day: string;
  hours: string;
  classes: ClassInfo[];
}

const schedule: DaySchedule[] = [
  { day: "Monday", hours: "[TODO: Enter hours or 'Closed']", classes: [] },
  {
    day: "Tuesday",
    hours: "[TODO: Enter hours]",
    classes: [
      // TODO: Replace with actual class times and names
      // { time: "3:00 PM", name: "[Class name]", duration: "[Duration]" },
    ],
  },
  { day: "Wednesday", hours: "[TODO: Enter hours or 'Closed']", classes: [] },
  {
    day: "Thursday",
    hours: "[TODO: Enter hours]",
    classes: [
      // TODO: Replace with actual class times and names
      // Confirmed: No-Gi class runs Thursday 7:30 PM – 8:30 PM
    ],
  },
  {
    day: "Friday",
    hours: "[TODO: Enter hours]",
    classes: [
      // TODO: Replace with actual class times and names
    ],
  },
  { day: "Saturday", hours: "[TODO: Enter hours or 'Closed']", classes: [] },
  { day: "Sunday", hours: "[TODO: Enter hours or 'Closed']", classes: [] },
];

export default function SchedulePage() {
  return (
    <div>
      {/* Spacer for navbar */}
      <div style={{ height: '100px' }} />

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1>Schedule</h1>
          <p className="mt-2 text-lg text-muted">
            505 Doak Blvd Suite-H, Ripon, CA 95366
          </p>
        </div>
      </section>

      {/* Schedule Table */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {schedule.map((day) => (
            <div
              key={day.day}
              className={`rounded-md border border-border bg-surface p-5 ${
                day.hours.startsWith("[TODO") ? "opacity-60" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg">{day.day}</h3>
                  <p className="text-sm text-muted">{day.hours}</p>
                </div>
                {day.hours.includes("Closed") && (
                  <span className="rounded-full bg-border px-3 py-1 text-xs font-medium text-muted">
                    Closed
                  </span>
                )}
              </div>

              {day.classes.length > 0 && (
                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {day.classes.map((cls) => (
                    <div
                      key={cls.time + cls.name}
                      className={`rounded-md border p-3 text-sm ${
                        cls.highlight
                          ? "border-accent/50 bg-accent/10"
                          : "border-border"
                      }`}
                    >
                      <p className="font-mono text-xs text-muted">{cls.time}</p>
                      <p className="mt-1 font-medium">{cls.name}</p>
                      <p className="text-xs text-muted">{cls.duration}</p>
                    </div>
                  ))}
                </div>
              )}

              {day.classes.length === 0 && !day.hours.includes("Closed") && (
                <p className="mt-3 text-xs text-muted italic">
                  [TODO: Add class times for {day.day}]
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 rounded-md border border-border bg-surface p-6">
          <h3>Notes</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              No-Gi class runs every Thursday from 7:30 PM – 8:30 PM
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Free trial classes available for first-timers
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              [TODO: Add any additional schedule notes, founder spots, etc.]
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted">
            Questions about the schedule?{" "}
            <a
              href="tel:+12099223558"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              Call (209) 922-3558
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
