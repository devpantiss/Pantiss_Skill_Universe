import DeferredSection from "../../components/common/DeferredSection";
import React from "react";
import DiplomaHero from "../../components/programmes/DiplomaAndAdvancedDiploma/Hero";
// import DiplomaOverview from "../../components/programmes/DiplomaAndAdvancedDiploma/DiplomaOverview";
const DiplomaSchoolsCourses = React.lazy(() => import("../../components/programmes/DiplomaAndAdvancedDiploma/DiplomaSchoolsCourses"));
// import DiplomaHighlights from "../../components/programmes/DiplomaAndAdvancedDiploma/DiplomaHighlights";
const TestimonialSectionDiploma = React.lazy(() => import("../../components/programmes/DiplomaAndAdvancedDiploma/Testimonials"));
import LogoMarquee from "../../components/common/LogoMaequee";
const DiplomaBenefits = React.lazy(() => import("../../components/programmes/DiplomaAndAdvancedDiploma/DiplomaBenefits"));
import DiplomaImpact from "../../components/programmes/DiplomaAndAdvancedDiploma/DiplomaImpact";
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

const DiplomaAndAdvancedDiplomaPage: React.FC = () => {
  return (
    <div>
      <DiplomaHero />
      <DiplomaImpact />
      <DeferredSection><ProgramOverviewVideo videoId="Ky46MN2buqQ" /></DeferredSection>
      {/* <DiplomaOverview /> */}
      <DeferredSection><DiplomaBenefits /></DeferredSection>
      <DeferredSection><DiplomaSchoolsCourses /></DeferredSection>
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
      {/* <DiplomaHighlights /> */}
      <DeferredSection><TestimonialSectionDiploma /></DeferredSection>
    </div>
  );
};

export default DiplomaAndAdvancedDiplomaPage;
