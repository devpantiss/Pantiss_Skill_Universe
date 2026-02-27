// TrainingUSP.tsx
import React from "react";
// import WomenInMining from "./WomenInMining";
import SkillOnWheelBanner from "./SkillOnWheelBanner";
import GlobalPlacements from "./GlobalPlacements";
import OurFuturisticApproach from "./OurFuturisticApproach";

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
            Our Exclusive Initiatives
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Practical, industry-aligned training delivered where it matters — on-site,
            on simulators, and through employer-led placements.
          </p>
        </div>


        {/* Optional: full sections rendered below so View details anchors have targets */}
        <div className="space-y-10">
          {/* <div id="women-section" className="rounded-2xl overflow-hidden">
            <WomenInMining />
          </div> */}

          <div id="women-section" className="rounded-2xl overflow-hidden">
            <OurFuturisticApproach />
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

export default React.memo(TrainingUSP);