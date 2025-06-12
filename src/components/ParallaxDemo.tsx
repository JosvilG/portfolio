import React from "react";
import { HeroParallax } from "./ui";

const ParallaxDemo: React.FC = () => {
  const products = [
    {
      title: "E-commerce Platform",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Dashboard Analytics",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Social Media App",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Task Management",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Portfolio Website",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Blog Platform",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Chat Application",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Learning Management",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Real Estate App",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Food Delivery",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Fitness Tracker",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Music Streaming",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Weather App",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Travel Planner",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
    {
      title: "Cryptocurrency Tracker",
      link: "#",
      thumbnail: "/api/placeholder/600/400",
    },
  ];

  return (
    <div className="bg-black">
      <HeroParallax products={products} />
    </div>
  );
};

export { ParallaxDemo };
export default ParallaxDemo;
