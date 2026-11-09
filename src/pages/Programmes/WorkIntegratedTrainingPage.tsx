import DeferredSection from "../../components/common/DeferredSection";
import React from "react";
import WILPHero from "../../components/programmes/WorkIntegratedTraining/WILPHero";
const WILPOverview = React.lazy(() => import("../../components/programmes/WorkIntegratedTraining/WILPOverview"));
const WILPHighlights = React.lazy(() => import("../../components/programmes/WorkIntegratedTraining/WILPHighlights"));
const WILPSchoolsCourses = React.lazy(() => import("../../components/programmes/WorkIntegratedTraining/WILPSchoolsCourses"));
const TestimonialSectionWILP = React.lazy(() => import("../../components/programmes/WorkIntegratedTraining/Testimonials"));
import LogoMarquee from "../../components/common/LogoMaequee";

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

const WorkIntegratedTrainingPage: React.FC = () => {
  return (
    <div>
      <WILPHero />
      <DeferredSection><WILPOverview /></DeferredSection>
      <DeferredSection><WILPHighlights /></DeferredSection>
      <DeferredSection><WILPSchoolsCourses /></DeferredSection>
      <LogoMarquee
        heading="Our Trusted Placement Partners"
        logos={schoolLogos}
        height="h-16"
        speed="25s"
        gap="mx-8"
        bg="bg-black"
        className="py-3"
      />
      <DeferredSection><TestimonialSectionWILP /></DeferredSection>
    </div>
  );
};

export default WorkIntegratedTrainingPage;
