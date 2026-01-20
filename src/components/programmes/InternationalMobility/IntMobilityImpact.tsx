import { useEffect, useRef, useState } from "react";
import {
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Building2,
  Globe,
} from "lucide-react";

const metrics = [
  { label: "Candidates Prepared for Overseas Roles", value: 1800, suffix: "+", icon: CheckCircle },
  { label: "Countries / Regions Supported", value: 12, suffix: "+", icon: Globe },
  { label: "Employer Readiness Rate", value: 86, suffix: "%", icon: TrendingUp },
  { label: "International Interview Success Rate", value: 73, suffix: "%", icon: Briefcase },
  { label: "Partner Employers & Agencies", value: 65, suffix: "+", icon: Building2 },
  { label: "Learners with Language Support", value: 2400, suffix: "+", icon: Users },
];

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

export default function IntMobilityImpact() {
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
    <section ref={ref} className="relative bg-black py-24 px-4 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            International Mobility Impact
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Structured global readiness through skill validation, communication
            support, compliance preparation, and employer connect.
          </p>
        </div>

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
                  <span className="text-sm text-gray-400">{item.label}</span>
                  <Icon className="w-5 h-5 text-blue-400" />
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
