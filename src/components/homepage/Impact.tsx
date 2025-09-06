import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

// Reusable ImpactCard component
const ImpactCard: React.FC<{
  value: number;
  suffix: string;
  label: string;
  index: number;
}> = ({ value, suffix, label, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    let startTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Ease in-out
      setCount(Math.floor(start + (end - start) * ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <motion.div
      className="group p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      role="region"
      aria-labelledby={`impact-card-${index}`}
    >
      <div
        className="text-4xl font-bold text-green-600 mb-4 text-center focus:outline-none focus:ring-2 focus:ring-red-600"
        id={`impact-card-${index}`}
      >
        {count}{suffix}
      </div>
      <div className="border-t-2 border-red-600 my-4"></div>
      <p className="text-lg text-gray-300 text-center">{label}</p>
    </motion.div>
  );
};

const ImpactSection: React.FC = () => {
  // Memoized impacts data to prevent unnecessary re-renders
  const impacts = useMemo(
    () => [
      { label: "Students Trained", value: 15000, suffix: "+" },
      { label: "Job Placements", value: 12000, suffix: "+" },
      { label: "Industry Partnerships", value: 50, suffix: "+" },
      { label: "Skill Programs Launched", value: 30, suffix: "+" },
    ],
    []
  );

  return (
    <section
      className="w-full py-8 bg-black text-white"
      aria-label="Impact Statistics at Pantiss Skill University"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with smooth fade-in animation */}
        {/* <motion.h2
          className="text-4xl font-bold text-center mb-12 text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          id="impact-title"
        >
          Our Impact at Pantiss Skill University
        </motion.h2> */}
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              value={impact.value}
              suffix={impact.suffix}
              label={impact.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;