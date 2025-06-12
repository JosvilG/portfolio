import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  className?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  className,
}) => {
  return (
    <div className={cn("py-20", className)}>
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-300 max-w-2xl mx-auto mb-16"
        >
          {description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-7 py-6 bg-black rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 text-yellow-400">{feature.icon}</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-white font-bold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-300">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { FeatureSection };
