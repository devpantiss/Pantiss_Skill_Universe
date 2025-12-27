import { useEffect, useRef, useState } from "react";
import {
  Users,
  TrendingUp,
  Wrench,
  CheckCircle,
  Building2,
  Target,
} from "lucide-react";

const metrics = [
  { label: "Workers Upskilled / Reskilled", value: 5400, suffix: "+", icon: Users },
  { label: "Productivity Improvement", value: 23, suffix: "%", icon: TrendingUp },
  { label: "New Tools & Technologies Covered", value: 18, suffix: "", icon: Wrench },
  { label: "Certification Success Rate", value: 89, suffix: "%", icon: CheckCircle },
  { label: "Industry Units Supported", value: 120, suffix: "+", icon: Building2 },
  { label: "Skill Gap Closure Rate", value: 76, suffix: "%", icon: Target },
];

const useCountUp = (end: number, enabled: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const duration = 1600;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Number((progress * end).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, enabled]);

  return count;
};

export default function WorkmenUpskillingImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-black py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            Workmen Upskilling & Reskilling Impact
          </h2>
          <p className="mt-4 text-gray-300">
            Enhancing workforce productivity through targeted skill upgrades and
            industry-aligned certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            const value = useCountUp(m.value, visible);
            return (
              <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <div className="flex justify-between mb-6">
                  <span className="text-sm text-gray-400">{m.label}</span>
                  <Icon className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-4xl font-semibold">
                  {value}{m.suffix}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
