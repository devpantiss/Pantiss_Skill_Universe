import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable ImpactCard component — only animates when visible
const ImpactCard: React.FC<{
  value: number;
  suffix: string;
  label: string;
  index: number;
  shouldAnimate: boolean;
}> = React.memo(({ value, suffix, label, index, shouldAnimate }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldAnimate || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTimestamp: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      setCount(Math.floor(value * ease));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, shouldAnimate]);

  return (
    <motion.div
      className="group p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
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
});

ImpactCard.displayName = "ImpactCard";

const ImpactSection: React.FC = React.memo(() => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
      ref={ref}
      className="w-full py-8 bg-black text-white"
      aria-label="Impact Statistics at Pantiss Skill University"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              value={impact.value}
              suffix={impact.suffix}
              label={impact.label}
              index={index}
              shouldAnimate={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ImpactSection.displayName = "ImpactSection";

export default ImpactSection;