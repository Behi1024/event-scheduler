import { Link } from "react-router-dom";

export default function EventCard() {
  return (
    <Link to="/events/1">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
        
        {/* Image */}
        <div className="h-40 w-full bg-slate-200" />

        {/* Content */}
        <div className="space-y-3 p-4">
          
          {/* Date */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="rounded-md bg-violet-100 px-2 py-1 font-medium text-violet-600">
              May 24
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-slate-900">
            Tech Conference 2024
          </h3>

          {/* Location */}
          <p className="text-xs text-slate-500">
            Berlin, Germany
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
            <span>10:00 AM</span>
            <span className="font-medium text-violet-600">
              128 interested
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}