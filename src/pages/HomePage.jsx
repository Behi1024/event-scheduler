function HomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">
          Discover Events Happening Around You
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          A clean starting point for our Event Scheduler project.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-violet-600">Apr 28</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            Product Design Meetup
          </h3>
          <p className="mt-2 text-slate-600">Stuttgart • 18:00</p>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-violet-600">May 03</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            Frontend Workshop
          </h3>
          <p className="mt-2 text-slate-600">Berlin • 10:00</p>
        </article>

        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-violet-600">May 09</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            Networking Night
          </h3>
          <p className="mt-2 text-slate-600">Hamburg • 19:30</p>
        </article>
      </div>
    </section>
  )
}

export default HomePage