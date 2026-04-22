import HeroSection from "../components/HeroSection";
import EventsSection from "../components/EventsSection";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <EventsSection />
    </div>
  );
}