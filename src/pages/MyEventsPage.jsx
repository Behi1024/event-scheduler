import { Link } from "react-router-dom";
import { useState } from "react";
import MyEventCard from "../components/MyEventCard";

export default function MyEventsPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Meetup",
      date: "2026-05-10",
      location: "Berlin",
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "2026-05-15",
      location: "Hamburg",
    },
  ]);

  function handleDelete(eventId) {
    setEvents(events.filter((event) => event.id !== eventId));
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">My Events</h1>

        <Link
          to="/create"
          className="rounded-lg bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          Create Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-lg text-slate-500">No events yet</p>
          <p className="mt-2 text-sm text-slate-400">
            Create your first event and start organizing 🚀
          </p>

          <Link
            to="/create"
            className="mt-6 rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
          >
            Create Event
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <MyEventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
