import { Link } from "react-router-dom";

export default function MyEventCard({ id, title, date, location, onDelete }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

      <p className="mt-2 text-sm text-slate-500">{date}</p>
      <p className="text-sm text-slate-500">{location}</p>

      <div className="mt-5 flex items-center gap-3">
        <Link
          to={`/events/${id}`}
          className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          View Details
        </Link>

        <button
          onClick={() => onDelete(id)}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
