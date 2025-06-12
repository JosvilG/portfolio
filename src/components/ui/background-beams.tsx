import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({ className }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "m-373 -197c0 0 69.744 405.929 433.506 532.946 363.762 127.017 431.494 532.054 431.494 532.054",
    "m-373 -197c0 0 69.744 405.929 433.506 532.946 363.762 127.017 431.494 532.054 431.494 532.054",
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        className
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 5,
              delay: index * 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={index}
              id={`linearGradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop stopColor="#ffffff" stopOpacity="0"></stop>
              <stop stopColor="#ffffff"></stop>
              <stop offset="32.5%" stopColor="#ffffff"></stop>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"></stop>
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};

export { BackgroundBeams };
