import DeferredSection from "../components/common/DeferredSection";
import React, { lazy } from "react";
const SkillShapeScaleSection = React.lazy(() => import("../components/programs2/SkillShapeScaleSection"));
const OurExpertiseStackSection = React.lazy(() => import("../components/programs2/OurExpertiseStackSection"));
const LearningPartnerSection = React.lazy(() => import("../components/programs2/LearningPartnerSection"));

const IndustriesWeEmpower = lazy(() => import("../components/programs2/IndustriesWeEmpower"));

import ProgrammesHero from "../components/programs2/ProgrammesHero";
const JobRolesMarquee = React.lazy(() => import("../components/programs2/JobRolesMarquee"));

const ProgramPage: React.FC = () => {
  return (
    <div>
      <ProgrammesHero />
      <DeferredSection><SkillShapeScaleSection /></DeferredSection>
      <DeferredSection><OurExpertiseStackSection /></DeferredSection>
      <DeferredSection><JobRolesMarquee /></DeferredSection>
      <DeferredSection><LearningPartnerSection /></DeferredSection>
      <DeferredSection><IndustriesWeEmpower /></DeferredSection>
    </div>
  );
};

export default ProgramPage;
