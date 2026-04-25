import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEventById } from "../services/api";
import placeholder from "../assets/images/event-placeholder.svg";

export default function EventDetailsPage() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [interestedIds, setInterestedIds] = useState(() => {
    return JSON.parse(localStorage.getItem("interestedEvents")) || [];
  });

  const isInterested = event ? interestedIds.includes(event.id) : false;

  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await getEventById(id);
        setEvent(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [id]);

  function handleInterested() {
    if (!event || isInterested) return;

    const updatedIds = [...interestedIds, event.id];
    setInterestedIds(updatedIds);
    localStorage.setItem("interestedEvents", JSON.stringify(updatedIds));
  }

  if (loading) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-6">
        <p className="text-slate-500">Loading event...</p>
      </div>
    );
  }

  if (error || !event) {
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

  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString("de-DE");
  const formattedTime = date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

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
              src={event.image || placeholder}
              alt={event.title}
              className="h-[380px] w-full object-cover"
            />
          </div>

          <div className="mt-6">
            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              {event.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>{event.location}</span>
              <span>{formattedDate}</span>
              <span>{formattedTime}</span>
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
                <p className="font-medium text-slate-900">Date</p>
                <p>{formattedDate}</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Time</p>
                <p>{formattedTime}</p>
              </div>

              <div>
                <p className="font-medium text-slate-900">Location</p>
                <p>{event.location}</p>
              </div>
            </div>

            <button
              onClick={handleInterested}
              className={`mt-6 w-full rounded-xl px-4 py-3 font-semibold text-white transition ${
                isInterested
                  ? "cursor-default bg-violet-400"
                  : "bg-violet-600 hover:bg-violet-700"
              }`}
            >
              {isInterested ? "Added to My Events ✓" : "I'm Interested"}
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              About This Event
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
