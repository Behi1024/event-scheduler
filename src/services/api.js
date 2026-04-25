const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getEvents() {
  const res = await fetch(`${BASE_URL}/api/events`);
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
}

export async function getEventById(id) {
  const res = await fetch(`${BASE_URL}/api/events/${id}`);
  if (!res.ok) throw new Error("Failed to fetch this event");
  return res.json();
}
