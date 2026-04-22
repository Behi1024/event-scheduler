import EventCard from "./EventCard";

export default function EventsSection() {
  return (
    <section className="space-y-6">
      
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          Upcoming Events
        </h2>

        <button className="text-sm text-violet-600 hover:underline">
          View all
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

    </section>
  );
}