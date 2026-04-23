import { Link } from "react-router-dom";
import { useState } from "react";
import MyEventCard from "../components/MyEventCard";
import { events as allEvents } from "../data/events";

function getInterestedEvents() {
  const storedIds = JSON.parse(localStorage.getItem("interestedEvents")) || [];
  return allEvents.filter((event) => storedIds.includes(event.id));
}

export default function MyEventsPage() {
  const [events, setEvents] = useState(getInterestedEvents);

  function handleDelete(eventId) {
    const storedIds =
      JSON.parse(localStorage.getItem("interestedEvents")) || [];
    const updatedIds = storedIds.filter((id) => id !== eventId);

    localStorage.setItem("interestedEvents", JSON.stringify(updatedIds));
    setEvents(allEvents.filter((event) => updatedIds.includes(event.id)));
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
          <p className="text-lg text-slate-500">No interested events yet</p>
          <p className="mt-2 text-sm text-slate-400">
            Click “I’m Interested” on an event to see it here.
          </p>

          <Link
            to="/"
            className="mt-6 rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
          >
            Browse Events
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
              location={event.city}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
