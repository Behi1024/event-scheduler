import heroPeople from "../assets/images/hero-people.png";

export default function HeroSection() {
  return (
    <section className="grid gap-10 rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-sm lg:grid-cols-2 lg:items-center lg:px-12 lg:py-14">
      <div className="max-w-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
          Event Discovery
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Discover Events
          <br />
          Happening <span className="text-violet-600">Around You</span>
        </h1>

        <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
          Find and join amazing events or create your own. A clean and modern
          place to explore workshops, meetups, conferences, and more.
        </p>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Search events..."
            className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-violet-400"
          />

          <select className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:border-violet-400">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Design</option>
            <option>Business</option>
          </select>

          <button className="h-12 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-700">
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={heroPeople}
          alt="People celebrating events"
          className="max-h-[420px] w-auto object-contain lg:max-h-[500px]"
        />
      </div>
    </section>
  );
}