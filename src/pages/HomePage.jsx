import HeroSection from "../components/HeroSection";
import EventsSection from "../components/EventsSection";
import FeatureStrip from "../components/FeatureStrip";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <EventsSection />
      <FeatureStrip />
    </div>
  );
}