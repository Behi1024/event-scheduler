import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link
      to={`/events/${event.id}`}
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="h-48 w-full overflow-hidden bg-slate-200">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="rounded-md bg-violet-100 px-2 py-1 font-medium text-violet-600">
            {event.date}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-slate-900">{event.title}</h3>

        <p className="text-xs font-medium text-violet-600">{event.category}</p>

        <p className="text-xs text-slate-500">{event.city}</p>

        <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
          <span>{event.time}</span>
          <span className="font-medium text-violet-600">{event.attendees}</span>
        </div>
      </div>
    </Link>
  );
}
