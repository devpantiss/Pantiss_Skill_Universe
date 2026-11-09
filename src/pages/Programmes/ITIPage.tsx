import DeferredSection from "../../components/common/DeferredSection";
import React from "react";
import ITIHero from "../../components/programmes/ITI/ITIHero";
// import ITIOverview from "../../components/programmes/ITI/ITIOverview";
// import ITIHighlights from "../../components/programmes/ITI/ITIHighlights";
const ITISchoolsCourses = React.lazy(() => import("../../components/programmes/ITI/ITISchoolsCourses"));
const TestimonialSectionITI = React.lazy(() => import("../../components/programmes/ITI/Testimonials"));
import LogoMarquee from "../../components/common/LogoMaequee";
const ITIBenefitsCards = React.lazy(() => import("../../components/programmes/ITI/ITIBenefitsCards"));
import ITIImpact from "../../components/programmes/ITI/ITIImpact";
const ProgramOverviewVideo = React.lazy(() => import("../../components/common/ProgramOverviewVideo"));
const PlacementsShowcaseSection = React.lazy(() => import("../../components/common/PlacementsShowcaseSection"));

const schoolLogos = [
  {
    name: "School for Mines, Steel & Aluminium",
    src: "/Homepage/placements/company/fleetguard.png",
  },
  {
    name: "School for Steel & Aluminium",
    src: "/Homepage/placements/company/vedanta-removebg-preview.png",
  },
  {
    name: "School for Power & Green Energy",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163688/pngegg_4_zq8y0w.png",
  },
  {
    name: "School for Shipping & Logistics",
    src: "/Homepage/placements/company/schneider_electric.png",
  },
  {
    name: "School for Construction Tech & Infra Equipments",
    src: "/Homepage/placements/company/TATA_STEEL-removebg-preview.png",
  },
  {
    name: "School for Water, Sanitation & Facility Management",
    src: "/Homepage/placements/company/Jindal_Steel_and_Power_Logo.svg.png",
  },
];

const ITIPage: React.FC = () => {
  return (
    <div>
      <ITIHero />
      <ITIImpact />
      <DeferredSection><ProgramOverviewVideo videoId="Ky46MN2buqQ" /></DeferredSection>
      {/* <ITIOverview /> */}
      <DeferredSection><ITIBenefitsCards /></DeferredSection>
      <DeferredSection><ITISchoolsCourses /></DeferredSection>
      <DeferredSection><PlacementsShowcaseSection /></DeferredSection>
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
      <DeferredSection><TestimonialSectionITI /></DeferredSection>
    </div>
  );
};

export default ITIPage;
