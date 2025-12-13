// TrainingUSP.tsx
import React from "react";
import { motion } from "framer-motion";
import WomenInMining from "./WomenInMining";
import SkillOnWheelBanner from "./SkillOnWheelBanner";
import GlobalPlacements from "./GlobalPlacements";

const previews = [
  {
    id: "women",
    title: "Women in Mining",
    subtitle: "HEMM vehicle operator tracks",
    Component: WomenInMining,
  },
  {
    id: "skillonwheels",
    title: "Skill on Wheels",
    subtitle: "Mobile units delivering hands-on training",
    Component: SkillOnWheelBanner,
  },
  {
    id: "global",
    title: "Global Placements",
    subtitle: "International placement & employer links",
    Component: GlobalPlacements,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

const TrainingUSP: React.FC = () => {
  return (
    <section
      aria-labelledby="training-usp-heading"
      className="w-full bg-black text-white py-16 px-4"
    >
      <div className="">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="training-usp-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Our Training USP
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Practical, industry-aligned training delivered where it matters — on-site,
            on simulators, and through employer-led placements.
          </p>
        </div>

        {/* Preview Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previews.map((p, i) => {
            const PreviewComp = p.Component;
            return (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="rounded-2xl border border-white/8 overflow-hidden bg-white/2 shadow-lg relative"
              >
                <div className="h-64 md:h-72 lg:h-80 relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-full transform scale-[1.05]">
                      <PreviewComp />
                    </div>
                  </div>

                  <div className="absolute left-4 bottom-4 z-20">
                    <div className="backdrop-blur-sm bg-black/40 px-4 py-2 rounded-md">
                      <h3 className="text-white text-lg font-semibold">{p.title}</h3>
                      <p className="text-xs text-gray-200 mt-1">{p.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-black/30 flex items-center justify-between">
                  <div className="text-sm text-gray-200">Preview</div>
                  <a
                    href={`#${p.id}-section`}
                    className="text-sm inline-flex items-center gap-2 px-3 py-2 bg-green-500 text-black rounded-full font-semibold hover:bg-green-400 transition"
                  >
                    View details
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div> */}

        {/* Optional: full sections rendered below so View details anchors have targets */}
        <div className="space-y-10">
          <div id="women-section" className="rounded-2xl overflow-hidden">
            <WomenInMining />
          </div>

          <div id="skillonwheels-section" className="overflow-hidden">
            <SkillOnWheelBanner />
          </div>

          <div id="global-section" className="rounded-2xl overflow-hidden">
            <GlobalPlacements />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingUSP;