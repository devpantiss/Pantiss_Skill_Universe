import React from "react";
import HeroSection from "../components/homepage/Hero";
import OverLappingCards2 from "../components/homepage/OverLappingCards2";
// import SolutionCards from "../components/homepage/SolutionCards";
import SectorsAccordion from "../components/homepage/SectorsAccordion";
// import FleetSection from "../components/homepage/FleetSection";
import PlacementsSection from "../components/homepage/PlacementsSection";
// import CampusExperienceSection from "../components/homepage/CampusExperienceSection";
// import Ranking from "../components/homepage/Ranking";
// import ExplorePrograms from "../components/homepage/ExplorePrograms";
// import OurFuturisticApproach from "../components/homepage/OurFuturisticApproach";
// import Why from "../components/Academics/Why";
// import SkillDevelopmentSection from "../components/homepage/SkillDevelopmentSection";
import TestimonialSection from "../components/homepage/TestimonialSection";
// import Welcome from "../components/homepage/Welcome";
import WhyPantissSkillUniversity from "../components/homepage/WhyPantissSkillUniversity";
// import ParallaxSection from "../components/homepage/ParallaxSection";
// import ProgrammesSection from "../components/homepage/ProgrammesSection";
import SocialGalleryCalendarSection from "../components/homepage/SocialGalleryCalenderSection";
// import HorizontalScrollComponent from "../components/homepage/HorizontalComponent";
// import Notices from "../components/homepage/Notices";
import SchoolLogoStrip from "../components/homepage/SchoolLogoStrip";
import OurFuturisticApproach from "../components/homepage/OurFuturisticApproach";
import Ranking from "../components/homepage/Ranking";
import Impact from "../components/homepage/Impact";
// import BentoGrid from "../components/homepage/BentoGrid";
import SchoolSection from "../components/homepage/SchoolSection";
import OurPartners from "../components/homepage/OurPartners";
import ActivityAndEvents from "../components/homepage/Events";
import Highlights from "../components/homepage/Highlights";
import SkillOnWheelsBanner from "../components/homepage/SkillOnWheelBanner";
import WomenInMining from "../components/homepage/WomenInMining";
import GlobalPlacements from "../components/homepage/GlobalPlacements";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#FF3366] to-black">
      <HeroSection />
      <Impact />
      <WhyPantissSkillUniversity />
      <SchoolLogoStrip />
      <SchoolSection />
      <Ranking />
      <OurFuturisticApproach />
      <OverLappingCards2 />
      <ActivityAndEvents />
      <SectorsAccordion />
      <WomenInMining />
      <PlacementsSection />
      <SkillOnWheelsBanner />
      <GlobalPlacements />
      <OurPartners />
      <SocialGalleryCalendarSection />
      <Highlights />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
