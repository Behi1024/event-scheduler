import { useState } from "react";

const INITIAL_FORM_DATA = {
  title: "",
  category: "",
  date: "",
  time: "",
  city: "",
  venue: "",
  about: "",
};

export default function CreateEventPage() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function validateForm() {
    if (!formData.title.trim()) {
      return "Please enter an event title.";
    }

    if (!formData.category) {
      return "Please select a category.";
    }

    if (!formData.date) {
      return "Please select a date.";
    }

    if (!formData.time) {
      return "Please select a time.";
    }

    if (!formData.city.trim()) {
      return "Please enter a city.";
    }

    if (!formData.venue.trim()) {
      return "Please enter a venue.";
    }

    if (!formData.about.trim()) {
      return "Please enter a description.";
    }

    return "";
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setFeedback({
        type: "error",
        message: validationError,
      });
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setFeedback({
        type: "error",
        message: "You need to sign in before creating an event.",
      });
      return;
    }

    const newEvent = {
      title: formData.title,
      category: formData.category,
      date: formData.date,
      time: formData.time,
      city: formData.city,
      venue: formData.venue,
      about: formData.about,
    };

    try {
      setIsSubmitting(true);
      setFeedback({
        type: "",
        message: "",
      });

      const BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${BASE_URL}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error("Failed to create event.");
      }

      setFormData(INITIAL_FORM_DATA);
      setFeedback({
        type: "success",
        message: "Event created successfully.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.message || "Something went wrong while creating the event.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
          Event Creation
        </p>
        <h1 className="text-3xl font-bold text-slate-900">Create New Event</h1>
        <p className="text-slate-600">
          Share your event with the world and bring people together.
        </p>
      </div>

      {feedback.message && (
        <div
          className={`rounded-2xl border px-5 py-4 text-sm font-medium ${
            feedback.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {feedback.message}
        </div>
      )}

      <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.4fr_0.8fr] lg:p-8">
        {/* LEFT → FORM */}
        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              >
                <option value="">Select category</option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
                <option value="Workshop">Workshop</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Venue
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Enter venue"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Description
              </label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Describe your event..."
                className="min-h-[140px] w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>
          </div>
        </div>

        {/* RIGHT → IMAGE PLACEHOLDER */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-700">
            Event Image
          </label>

          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-600">
              🖼️
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Upload an image
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Temporary placeholder for now. Later we can replace this with a
              real image upload component.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
            >
              Choose Image
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-3 font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating..." : "Create Event"}
        </button>
      </div>
    </form>
  );
}
