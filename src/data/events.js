import techImage from "../assets/images/event-tech.png";
import designImage from "../assets/images/event-design.png";
import networkingImage from "../assets/images/event-networking.png";
import electronicsImage from "../assets/images/event-electronics.png";

export const events = [
  {
    id: 1,
    slug: "techs-and-bots-summit",
    title: "Techs & Bots Summit",
    category: "Technology",
    city: "Berlin, Germany",
    venue: "Berlin Tech Hub",
    date: "May 10, 2026",
    time: "10:00 AM – 5:00 PM",
    attendees: "230+ Attendees",
    image: techImage,
    about:
      "Explore the future of robotics, AI systems, and intelligent automation. This event brings together engineers, founders, and tech enthusiasts for a full day of talks, demos, and next-generation innovation.",
  },
  {
    id: 2,
    slug: "creative-design-lab",
    title: "Creative Design Lab",
    category: "Design",
    city: "Hamburg, Germany",
    venue: "Hamburg Design Studio",
    date: "May 15, 2026",
    time: "9:30 AM – 4:30 PM",
    attendees: "180+ Attendees",
    image: designImage,
    about:
      "A vibrant event for designers, visual thinkers, and creative professionals. Discover fresh ideas in branding, digital illustration, color systems, and user-centered design through workshops and inspiring sessions.",
  },
  {
    id: 3,
    slug: "global-network-connect",
    title: "Global Network Connect",
    category: "Networking",
    city: "Frankfurt, Germany",
    venue: "Frankfurt Data Exchange Center",
    date: "May 22, 2026",
    time: "6:00 PM – 9:30 PM",
    attendees: "320+ Attendees",
    image: networkingImage,
    about:
      "Dive into the world of modern connectivity, data infrastructure, and global systems. From fiber optics and network architecture to data centers and digital communication, this event connects professionals across the networking ecosystem.",
  },
  {
    id: 4,
    slug: "smart-electronics-expo",
    title: "Smart Electronics Expo",
    category: "Electronics",
    city: "Munich, Germany",
    venue: "Munich Hardware Lab",
    date: "June 3, 2026",
    time: "11:00 AM – 6:00 PM",
    attendees: "210+ Attendees",
    image: electronicsImage,
    about:
      "A hands-on electronics event focused on embedded systems, circuit design, sensors, microcontrollers, and hardware innovation. Perfect for makers, students, and professionals who love building intelligent devices.",
  },
];
