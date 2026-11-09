import DeferredSection from "../../components/common/DeferredSection";
import React from "react";
import AdvancedDiplomaHero from "../../components/programmes/AdvancedDiploma/AdvancedDiplomaHero";
const AdvancedDiplomaOverview = React.lazy(() => import("../../components/programmes/AdvancedDiploma/AdvancedDiplomaOverview"));
const AdvancedDiplomaHighlights = React.lazy(() => import("../../components/programmes/AdvancedDiploma/AdvancedDiplomaHighlights"));
const AdvancedDiplomaSchoolsCourses = React.lazy(() => import("../../components/programmes/AdvancedDiploma/AdvancedDiplomaSchoolsCourses"));
const TestimonialSectionAdvancedDiploma = React.lazy(() => import("../../components/programmes/AdvancedDiploma/Testimonials"));
import LogoMarquee from "../../components/common/LogoMaequee";
const AdvancedDiplomaBenefitsCards = React.lazy(() => import("../../components/programmes/AdvancedDiploma/AdvancedDiplomaBenefitsCards"));

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

const AdvancedDiplomaPage: React.FC = () => {
  return (
    <div>
      <AdvancedDiplomaHero />
      <DeferredSection><AdvancedDiplomaOverview /></DeferredSection>
      <DeferredSection><AdvancedDiplomaSchoolsCourses /></DeferredSection>
      <LogoMarquee
        heading="Our Trusted Placement Partners"
        logos={schoolLogos}
        height="h-16"
        speed="25s"
        gap="mx-8"
        bg="bg-black"
        className="py-3"
      />
      <DeferredSection><AdvancedDiplomaHighlights /></DeferredSection>
      <DeferredSection><AdvancedDiplomaBenefitsCards /></DeferredSection>
      <DeferredSection><TestimonialSectionAdvancedDiploma /></DeferredSection>
    </div>
  );
};

export default AdvancedDiplomaPage;
