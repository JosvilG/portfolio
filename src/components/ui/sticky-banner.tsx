import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface StickyBannerProps {
  message: string;
  actionText?: string;
  onAction?: () => void;
  dismissible?: boolean;
  position?: "top" | "bottom";
  className?: string;
}

const StickyBanner: React.FC<StickyBannerProps> = ({
  message,
  actionText,
  onAction,
  dismissible = true,
  position = "top",
  className,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: position === "top" ? -100 : 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: position === "top" ? -100 : 100, opacity: 0 }}
        className={cn(
          "fixed z-50 left-0 right-0 bg-gradient-to-r from-orange-600 to-blue-600 text-white px-4 py-3 shadow-lg",
          position === "top" ? "top-0" : "bottom-0",
          isScrolled && position === "top"
            ? "backdrop-blur-md bg-opacity-90"
            : "",
          className
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-medium">{message}</span>
          </div>

          <div className="flex items-center space-x-3">
            {actionText && onAction && (
              <button
                onClick={onAction}
                className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                {actionText}
              </button>
            )}
            {dismissible && (
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export { StickyBanner };
