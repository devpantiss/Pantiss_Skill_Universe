import { useEffect, useRef, useState } from "react";
import {
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

/* -----------------------------
   DATA
----------------------------- */

const metrics = [
  {
    label: "Students Trained",
    value: 2500,
    suffix: "+",
    icon: GraduationCap,
  },
  {
    label: "Industry Internship Exposure",
    value: 92,
    suffix: "%",
    icon: Building2,
  },
  {
    label: "Placement / Apprenticeship Rate",
    value: 78,
    suffix: "%",
    icon: Briefcase,
  },
  {
    label: "Industry Partner Companies",
    value: 140,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Average Starting Salary",
    value: 3.2,
    suffix: " LPA",
    icon: IndianRupee,
  },
  {
    label: "Women Participation",
    value: 34,
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

export default function DiplomaImpactSection() {
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
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Our Impact
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Outcomes that reflect employability, industry alignment, and inclusive
            technical education at scale.
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
