import { Link } from "react-router-dom";
import placeholder from "../assets/images/event-placeholder.svg";

export default function EventCard({ event }) {
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString("de-DE");
  const formattedTime = date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Link
      to={`/events/${event.id}`}
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="h-48 w-full overflow-hidden bg-violet-50">
        <img
          src={event.image || placeholder}
          alt={event.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="rounded-md bg-violet-100 px-2 py-1 font-medium text-violet-600">
            {formattedDate}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-slate-900">{event.title}</h3>

        <p className="text-xs text-slate-500">{event.location}</p>

        <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
          <span>{formattedTime}</span>
          {/*TODO: fix missing option<span className="font-medium text-violet-600">{event.attendees}</span>*/}
        </div>
      </div>
    </Link>
  );
}
