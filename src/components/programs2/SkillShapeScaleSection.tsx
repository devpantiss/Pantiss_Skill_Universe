import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ===================== TYPES ===================== */

type PanelId = "01" | "02" | "03";

type AccordionPanel = {
  id: PanelId;
  image: string;
  caption: string;
};

/* ===================== DATA ===================== */

const panels: AccordionPanel[] = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1697281679321-a9ce55ce0a8f?w=500&auto=format&fit=crop&q=60",
    caption:
      "CORE INDUSTRIAL SKILLING\n\nFrom entry-level technicians to shop-floor supervisors,\nPSMSA delivers hands-on skilling across Mining, Steel,\nAluminium, Power and Shipping — aligned to NSQF and\nindustry deployment needs.",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1587919968590-fbc98cea6c9a?w=500&auto=format&fit=crop&q=60",
    caption:
      "ADVANCED & OPERATOR CERTIFICATION\n\nSpecialised licensing and certification programs for\nHEMM operators, plant equipment handlers and safety-\ncritical roles — built for compliance, productivity\nand zero-incident environments.",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?w=500&auto=format&fit=crop&q=60",
    caption:
      "GLOBAL & FUTURE WORKFORCE PATHWAYS\n\nInternational mobility, women-in-mining initiatives and\nfuture-ready upskilling programs designed for global\nstandards, evolving technologies and long-term workforce\nresilience.",
  },
];

/* ===================== COUNT UP ===================== */

const useCountUp = (end: number, enabled: boolean, duration = 1600) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, enabled, duration]);

  return count;
};

function ImpactStatCard({
  stat,
  visible,
  showDivider,
}: {
  stat: { number: number; suffix: string; label: string };
  visible: boolean;
  showDivider: boolean;
}) {
  const animatedValue = useCountUp(stat.number, visible);

  return (
    <div className="relative">
      <div className="text-5xl md:text-6xl font-light text-green-400">
        {animatedValue}
        {stat.suffix}
      </div>

      <div className="mt-3 text-[11px] leading-relaxed tracking-widest text-white/55 whitespace-pre-line">
        {stat.label}
      </div>

      {showDivider && (
        <div className="hidden md:block absolute top-2 right-0 h-16 w-px bg-white/15" />
      )}
    </div>
  );
}

/* ===================== COMPONENT ===================== */

export default function PSMSAOurProgrammesHero() {
  const [active, setActive] = useState<PanelId>("01");

  const impactRef = useRef<HTMLDivElement>(null);
  const [impactVisible, setImpactVisible] = useState(false);

  useEffect(() => {
    const el = impactRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImpactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 10, suffix: "+", label: "YEARS OF\nINDUSTRIAL SKILLING" },
    { number: 120, suffix: "+", label: "PARTNER\nINDUSTRIES & SITES" },
    { number: 50, suffix: "+", label: "CERTIFIED\nPROGRAMMES" },
    { number: 1, suffix: "M+", label: "LEARNERS\nIMPACTED" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0505] text-white mt-28">

      {/* ===================== RED + GREEN ENTERPRISE BACKGROUND ===================== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0505]" />

        {/* Red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(220,38,38,0.55),transparent_50%)]" />

        {/* Green glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(34,197,94,0.35),transparent_55%)]" />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12">

        {/* ===================== TOP LAYOUT ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT COPY */}
          <div className="lg:col-span-5">
            <h2 className="text-[52px] leading-[0.95] font-light tracking-tight text-white/95">
              OUR
              <br />
              SPECIALITY
            </h2>

            <p className="mt-8 max-w-md text-white/70 text-sm leading-relaxed">
              Structured skilling pathways designed to{" "}
              <span className="text-white font-semibold">build</span>,{" "}
              <span className="text-white font-semibold">certify</span> and{" "}
              <span className="text-white font-semibold">deploy</span>{" "}
              industry-ready talent across core and emerging sectors.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {/* Primary */}
              <button className="group inline-flex items-center gap-3 bg-red-600 px-8 py-4 text-xs font-semibold tracking-widest text-white transition hover:bg-red-700 shadow-lg">
                EXPLORE PROGRAMMES
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>

              {/* Secondary */}
              <button className="group inline-flex items-center gap-3 border border-green-500/40 px-10 py-4 text-xs font-semibold tracking-widest text-green-400 transition hover:bg-green-500/10 hover:text-green-300">
                TALK TO US
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>

            </div>
          </div>

          {/* ===================== RIGHT ACCORDION ===================== */}
          <div className="lg:col-span-7">
            <div className="relative flex h-[420px] w-full items-stretch overflow-hidden">

              <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-white/15" />

              {panels.map((panel) => {
                const isActive = panel.id === active;

                return (
                  <button
                    key={panel.id}
                    onClick={() => setActive(panel.id)}
                    className={[
                      "relative h-full text-left transition-all duration-500 ease-out",
                      "border-l border-white/15 focus:outline-none",
                      isActive ? "flex-[8]" : "flex-[1.3] hover:flex-[1.6]",
                    ].join(" ")}
                  >
                    {/* Plus */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-green-400 text-2xl">
                      +
                    </div>

                    {/* Active Panel */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.35 }}
                          className="h-full w-full px-6 py-6"
                        >
                          <div className="relative h-[260px] w-full overflow-hidden border border-white/10 bg-black/20">
                            <img
                              src={panel.image}
                              alt={panel.id}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          </div>

                          <p className="mt-6 text-sm text-white/85 leading-relaxed whitespace-pre-line max-w-[520px]">
                            {panel.caption}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Panel ID */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
                      {panel.id}
                    </div>

                    <div className="absolute top-0 bottom-0 right-0 w-px bg-white/15" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================== IMPACT STATS ===================== */}
        <div
          ref={impactRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 items-end"
        >
          {stats.map((stat, idx) => (
            <ImpactStatCard
              key={stat.label}
              stat={stat}
              visible={impactVisible}
              showDivider={idx !== stats.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
