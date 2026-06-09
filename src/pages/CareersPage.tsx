import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Careers/Hero";
import LifeAtPantiss from "../components/Careers/LifeAtPantiss";
import CareersCategory from "../components/Careers/CareersCategory";
import BenefitsPantiss from "../components/Careers/BenefitsPantiss";
import TestimonialSlider from "../components/Careers/TestimonialSlider";


const CareersPage: React.FC = () => {
  const lifeRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToLifeAtPantiss && lifeRef.current) {
      lifeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div className="bg-[#070707] pb-8 text-white">
      <Hero />
      <div ref={lifeRef}>
        <LifeAtPantiss />
      </div>
      <CareersCategory />
      <BenefitsPantiss />
      <TestimonialSlider />
    </div>
  );
};

export default CareersPage;
