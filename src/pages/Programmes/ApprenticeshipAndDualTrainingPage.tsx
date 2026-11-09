import DeferredSection from "../../components/common/DeferredSection";
import React from "react";
import DualTrainingHero from "../../components/programmes/DualTraining/Hero";
const DualTrainingHighlight = React.lazy(() => import("../../components/programmes/DualTraining/Highlights"));
const DualTrainingOverview = React.lazy(() => import("../../components/programmes/DualTraining/DualTrainingOverview"));
const DualTrainingSchoolsCarousel = React.lazy(() => import("../../components/programmes/DualTraining/SchoolsCourses"));
const TestimonialSectionDualTraining = React.lazy(() => import("../../components/programmes/DualTraining/Testimonials"));
import LogoMarquee from "../../components/common/LogoMaequee";
const ApprenticeshipBenefitsCards = React.lazy(() => import("../../components/programmes/DualTraining/ApprenticeshipBenefitsCards"));

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

const ApprenticeshipAndDualTrainingPage: React.FC = () => {
  return (
    <div>
      <DualTrainingHero />
      <DeferredSection><DualTrainingOverview /></DeferredSection>
      <DeferredSection><DualTrainingSchoolsCarousel /></DeferredSection>
      <LogoMarquee
        heading="Our Trusted Placement Partners"
        logos={schoolLogos}
        height="h-16"
        speed="25s"
        gap="mx-8"
        bg="bg-black"
        className="py-3"
      />
      <DeferredSection><DualTrainingHighlight /></DeferredSection>
      <DeferredSection><ApprenticeshipBenefitsCards /></DeferredSection>
      <DeferredSection><TestimonialSectionDualTraining /></DeferredSection>
    </div>
  );
};

export default ApprenticeshipAndDualTrainingPage;
