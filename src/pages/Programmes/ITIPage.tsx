import React from "react";
import ITIHero from "../../components/programmes/ITI/ITIHero";
// import ITIOverview from "../../components/programmes/ITI/ITIOverview";
// import ITIHighlights from "../../components/programmes/ITI/ITIHighlights";
import ITISchoolsCourses from "../../components/programmes/ITI/ITISchoolsCourses";
import TestimonialSectionITI from "../../components/programmes/ITI/Testimonials";
import LogoMarquee from "../../components/common/LogoMaequee";
import ITIBenefitsCards from "../../components/programmes/ITI/ITIBenefitsCards";
import ITIImpact from "../../components/programmes/ITI/ITIImpact";
import ProgramOverviewVideo from "../../components/common/ProgramOverviewVideo";
import PlacementsShowcaseSection from "../../components/common/PlacementsShowcaseSection";

const schoolLogos = [
  {
    name: "School for Mines, Steel & Aluminium",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163669/fleetguard_fxp8wb.png",
  },
  {
    name: "School for Steel & Aluminium",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163698/vedanta-removebg-preview_oxywkl.png",
  },
  {
    name: "School for Power & Green Energy",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163688/pngegg_4_zq8y0w.png",
  },
  {
    name: "School for Shipping & Logistics",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163645/schneider_electric_if28pt.png",
  },
  {
    name: "School for Construction Tech & Infra Equipments",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163686/TATA_STEEL-removebg-preview_nkf1kz.png",
  },
  {
    name: "School for Water, Sanitation & Facility Management",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163608/Jindal_Steel_and_Power_Logo.svg_oiahk4.png",
  },
];

const ITIPage: React.FC = () => {
  return (
    <div>
      <ITIHero />
      <ITIImpact />
      <ProgramOverviewVideo videoId="Ky46MN2buqQ" />
      {/* <ITIOverview /> */}
      <ITIBenefitsCards />
      <ITISchoolsCourses />
      <PlacementsShowcaseSection />
      <LogoMarquee
        heading="Our Trusted Placement Partners"
        logos={schoolLogos}
        height="h-16"
        speed="25s"
        gap="mx-8"
        bg="bg-black"
        className="py-3"
      />
      {/* <ITIHighlights /> */}
      <TestimonialSectionITI />
    </div>
  );
};

export default ITIPage;
