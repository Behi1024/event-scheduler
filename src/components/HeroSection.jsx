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