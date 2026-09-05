import React, { Suspense } from "react";
import HeroSection from "../components/homepage/Hero";
import Impact from "../components/homepage/Impact";
import LazyMount from "../components/common/LazyMount";

const WhyPantissSkillUniversity = React.lazy(
  () => import("../components/homepage/WhyPantissSkillUniversity")
);
const SchoolLogoStrip = React.lazy(() => import("../components/homepage/SchoolLogoStrip"));
const Ranking = React.lazy(() => import("../components/homepage/Ranking"));
const OverLappingCards2 = React.lazy(() => import("../components/homepage/OverLappingCards2"));
const OurProjects = React.lazy(() => import("../components/homepage/OurProjects"));
const Campuses = React.lazy(() => import("../components/homepage/Campuses"));
const SectorsAccordion = React.lazy(() => import("../components/homepage/SectorsAccordion"));
const PlacementsSection = React.lazy(() => import("../components/homepage/PlacementsSection"));
const TrainingUSP = React.lazy(() => import("../components/homepage/TrainingUSP"));
const OurPartners = React.lazy(() => import("../components/homepage/OurPartners"));
const SocialGalleryCalendarSection = React.lazy(
  () => import("../components/homepage/SocialGalleryCalenderSection")
);

const SectionFallback = ({ className = "min-h-[360px]" }: { className?: string }) => (
  <div className={`${className} bg-black`} aria-hidden="true" />
);

const LazySection = ({
  children,
  fallbackHeight,
  rootMargin,
}: {
  children: React.ReactNode;
  fallbackHeight?: string;
  rootMargin?: string;
}) => (
  <LazyMount fallbackHeight={fallbackHeight} rootMargin={rootMargin}>
    <Suspense fallback={<SectionFallback className={fallbackHeight} />}>
      {children}
    </Suspense>
  </LazyMount>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#FF3366] to-black">
      <HeroSection />
      <Impact />

      <div>
        <LazySection>
          <WhyPantissSkillUniversity />
        </LazySection>
        <LazySection fallbackHeight="min-h-[160px]">
          <SchoolLogoStrip />
        </LazySection>
        <LazySection>
          <Ranking />
        </LazySection>
        <LazySection>
          <OverLappingCards2 />
        </LazySection>
        <LazySection>
          <Campuses />
        </LazySection>
        <LazySection>
          <OurProjects />
        </LazySection>
        <LazySection>
          <SectorsAccordion />
        </LazySection>
        <LazySection>
          <PlacementsSection />
        </LazySection>
        <LazySection rootMargin="900px 0px">
          <TrainingUSP />
        </LazySection>
        <LazySection>
          <OurPartners />
        </LazySection>
        <LazySection rootMargin="900px 0px">
          <SocialGalleryCalendarSection />
        </LazySection>
      </div>
    </div>
  );
};

export default HomePage;
