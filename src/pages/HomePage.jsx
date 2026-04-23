import HeroSection from "../components/HeroSection";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-6">
      <HeroSection />

      <section className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Upcoming Events</h2>

          <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
            View all
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
