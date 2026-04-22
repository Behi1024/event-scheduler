import { Link, useParams } from "react-router-dom";

export default function EventDetailsPage() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-violet-600"
      >
        <span>←</span>
        <span>Back to events</span>
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.65fr_0.75fr]">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            {/* IMAGE */}
            <div className="relative h-[340px] w-full bg-slate-200">
              <div className="absolute left-5 top-5 rounded-2xl bg-violet-600 px-4 py-3 text-center text-white shadow-lg">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-violet-100">
                  May
                </p>
                <p className="text-2xl font-bold leading-none">24</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300" />
            </div>

            {/* MAIN CONTENT */}
            <div className="space-y-6 p-6 md:p-8">
              <div className="space-y-3">
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
                  Technology
                </span>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Tech Conference 2024
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span>📍 Berlin, Germany</span>
                  <span>🕘 10:00 AM – 4:00 PM</span>
                  <span>👥 128 people interested</span>
                </div>
              </div>

              <p className="max-w-4xl leading-7 text-slate-600">
                Join industry leaders and innovators for a full day of insights,
                networking, and the latest trends in technology. Workshops,
                keynotes, and panels will bring together developers, designers,
                and creators in one inspiring space.
              </p>

              {/* SPEAKERS */}
              <div className="space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Speakers
                </h2>

                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-violet-200 text-sm font-semibold text-violet-700 shadow-sm">
                      A
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-violet-300 text-sm font-semibold text-violet-700 shadow-sm">
                      J
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-violet-400 text-sm font-semibold text-white shadow-sm">
                      M
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-violet-500 text-sm font-semibold text-white shadow-sm">
                      S
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-slate-100 text-sm font-semibold text-slate-600 shadow-sm">
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              About This Event
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              This conference brings together developers, designers, and tech
              enthusiasts to explore the future of technology. Expect inspiring
              talks, hands-on workshops, and valuable networking opportunities.
              The current page is still UI-first, which means real event data
              will be connected later by the logic layer.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Event ID for later integration:{" "}
              <span className="font-medium text-violet-600">{id}</span>
            </p>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <aside className="h-fit rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
          <h2 className="text-xl font-semibold text-slate-900">
            Event Details
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Date
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                May 24, 2024
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Time
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                10:00 AM – 4:00 PM
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Location
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                Berlin Convention Center
                <br />
                Messedamm 22, 14055 Berlin
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Category
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                Technology
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
              I’m Interested
            </button>

            <button className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-600">
              Share Event
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}