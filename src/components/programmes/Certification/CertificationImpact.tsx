import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Briefcase,
  Building2,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";

/* -----------------------------
   DATA
----------------------------- */

const metrics = [
  {
    label: "Candidates Certified (SSC-Aligned)",
    value: 6800,
    suffix: "+",
    icon: CheckCircle,
  },
  {
    label: "Employer Placement Rate",
    value: 82,
    suffix: "%",
    icon: Briefcase,
  },
  {
    label: "Industry Job Roles Covered",
    value: 26,
    suffix: "",
    icon: Target,
  },
  {
    label: "Employer Partners Engaged",
    value: 160,
    suffix: "+",
    icon: Building2,
  },
  {
    label: "Average Time to Placement",
    value: 45,
    suffix: " Days",
    icon: Clock,
  },
  {
    label: "Certification Pass Rate",
    value: 91,
    suffix: "%",
    icon: TrendingUp,
  },
];

/* -----------------------------
   HOOK: Count Up
----------------------------- */

const useCountUp = (end: number, enabled: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Number((progress * end).toFixed(1)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, enabled]);

  return count;
};

/* -----------------------------
   COMPONENT
----------------------------- */

export default function CertificationImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-black py-24 px-4 text-white"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Industry-Aligned Skill Certification Impact
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Measurable outcomes driven by employer demand, sector skill councils,
            and fast-track workforce deployment.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((item, i) => {
            const value = useCountUp(item.value, visible);
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  bg-neutral-900
                  border border-neutral-800
                  rounded-2xl
                  p-8
                  transition
                  hover:border-neutral-700
                "
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-400">
                    {item.label}
                  </span>
                  <Icon className="w-5 h-5 text-green-500" />
                </div>

                <div className="text-4xl font-semibold tracking-tight">
                  {value}
                  {item.suffix}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
