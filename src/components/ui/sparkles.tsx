import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SparklesProps {
  className?: string;
  size?: number;
  minSize?: number;
  density?: number;
  speed?: number;
  color?: string;
}

const Sparkles: React.FC<SparklesProps> = ({
  className = "",
  size = 1.2,
  minSize = 0.6,
  density = 800,
  speed = 1.2,
  color = "#FFC700",
}) => {
  const sparkles = Array.from({ length: Math.floor(density) }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (size - minSize) + minSize,
    duration: Math.random() * 2 + 1,
  }));

  return (
    <div className={cn("relative w-full h-full", className)}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export { Sparkles };
