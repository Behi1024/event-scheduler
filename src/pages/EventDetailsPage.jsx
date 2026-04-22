export default function EventDetailsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      
      {/* Image */}
      <div className="h-64 w-full rounded-3xl bg-slate-200" />

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">
          Tech Conference 2024
        </h1>

        <p className="text-slate-600">
          Berlin, Germany • May 24 • 10:00 AM
        </p>
      </div>

      {/* Description */}
      <p className="leading-7 text-slate-600">
        Join us for an exciting tech conference where developers, designers,
        and entrepreneurs come together to share ideas and build the future.
      </p>

      {/* Action */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-500">
          128 people interested
        </span>

        <button className="rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-700">
          Join Event
        </button>
      </div>

    </div>
  );
}