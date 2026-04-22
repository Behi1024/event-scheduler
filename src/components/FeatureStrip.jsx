export default function FeatureStrip() {
  const items = [
    {
      title: "Create Events",
      description: "Share your ideas and bring people together.",
      icon: "✏️",
    },
    {
      title: "Find Events",
      description: "Discover events that match your interests.",
      icon: "🔎",
    },
    {
      title: "Connect",
      description: "Meet new people and expand your network.",
      icon: "👥",
    },
  ];

  return (
    <section className="grid gap-4 rounded-[28px] bg-violet-50 p-5 md:grid-cols-3 md:p-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="flex items-start gap-4 rounded-2xl bg-white/60 p-4"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
            {item.icon}
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}