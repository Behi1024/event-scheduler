import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Event not found</h1>
          <p className="mt-2 text-slate-500">
            The event you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-violet-600 px-5 py-2 text-white hover:bg-violet-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <Link
        to="/"
        className="mb-6 inline-block text-sm font-medium text-slate-500 hover:text-violet-600"
      >
        ← Back to events
      </Link>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={event.image}
              alt={event.title}
              className="h-[380px] w-full object-cover"
            />
          </div>

          <div className="mt-6">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-600">
              {event.category}
            </span>

            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              {event.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>{event.city}</span>
              <span>{event.date}</span>
              <span>{event.time}</span>
              <span>{event.attendees}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Event Details
            </h2>

            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-900">Venue</p>
                <p>{event.venue}</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Date</p>
                <p>{event.date}</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Time</p>
                <p>{event.time}</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Location</p>
                <p>{event.city}</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Category</p>
                <p>{event.category}</p>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white hover:bg-violet-700">
              I’m Interested
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              About This Event
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {event.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
