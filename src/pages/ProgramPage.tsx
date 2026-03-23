import React, { Suspense, lazy } from "react";
import SkillShapeScaleSection from "../components/programs2/SkillShapeScaleSection";
import OurExpertiseStackSection from "../components/programs2/OurExpertiseStackSection";
import LearningPartnerSection from "../components/programs2/LearningPartnerSection";

const IndustriesWeEmpower = lazy(() => import("../components/programs2/IndustriesWeEmpower"));

import ProgrammesHero from "../components/programs2/ProgrammesHero";
import JobRolesMarquee from "../components/programs2/JobRolesMarquee";

const ProgramPage: React.FC = () => {
  return (
    <div>
      <ProgrammesHero />
      <SkillShapeScaleSection />
      <OurExpertiseStackSection />
      <JobRolesMarquee />
      <LearningPartnerSection />
      <Suspense fallback={<div className="h-96 flex items-center justify-center text-white/50">Loading 3D Experience...</div>}>
        <IndustriesWeEmpower />
      </Suspense>
    </div>
  );
};

export default ProgramPage;
