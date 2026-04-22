export default function CreateEventPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
          Event Creation
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          Create New Event
        </h1>
        <p className="text-slate-600">
          Share your event with the world and bring people together.
        </p>
      </div>

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
                placeholder="Enter event title"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Category
              </label>
              <select className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500">
                <option>Select category</option>
                <option>Technology</option>
                <option>Design</option>
                <option>Business</option>
                <option>Workshop</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Date
              </label>
              <input
                type="date"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Time
              </label>
              <input
                type="time"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter location"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-violet-500"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">
                Description
              </label>
              <textarea
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
              Temporary placeholder for now. Later we can replace this with a real image upload component.
            </p>

            <button className="mt-5 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
              Choose Image
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-3 font-semibold text-white hover:opacity-90">
          Create Event
        </button>
      </div>
    </div>
  );
}