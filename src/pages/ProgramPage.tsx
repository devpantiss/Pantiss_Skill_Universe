import React from "react";
import SkillShapeScaleSection from "../components/programs2/SkillShapeScaleSection";
import OurExpertiseStackSection from "../components/programs2/OurExpertiseStackSection";
import LearningPartnerSection from "../components/programs2/LearningPartnerSection";
import IndustriesWeEmpower from "../components/programs2/IndustriesWeEmpower";
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
      <IndustriesWeEmpower />
    </div>
  );
};

export default ProgramPage;
