import DeferredSection from "../components/common/DeferredSection";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Careers/Hero";
const LifeAtPantiss = React.lazy(() => import("../components/Careers/LifeAtPantiss"));
const CareersCategory = React.lazy(() => import("../components/Careers/CareersCategory"));
const BenefitsPantiss = React.lazy(() => import("../components/Careers/BenefitsPantiss"));
const TestimonialSlider = React.lazy(() => import("../components/Careers/TestimonialSlider"));


const CareersPage: React.FC = () => {
  const lifeRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToLifeAtPantiss && lifeRef.current) {
      lifeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div className="bg-[#070707] text-white">
      <Hero />
      <div ref={lifeRef}>
        <DeferredSection><LifeAtPantiss /></DeferredSection>
      </div>
      <DeferredSection><CareersCategory /></DeferredSection>
      <DeferredSection><BenefitsPantiss /></DeferredSection>
      <DeferredSection><TestimonialSlider /></DeferredSection>
    </div>
  );
};

export default CareersPage;
