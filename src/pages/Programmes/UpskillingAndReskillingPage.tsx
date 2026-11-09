import DeferredSection from "../../components/common/DeferredSection";
import React from "react";
import UpskillingHero from "../../components/programmes/UpskillingAndReskilling/Hero";
// import UpskillReskillHighlights from "../../components/programmes/UpskillingAndReskilling/UpskillingHighlights";
// import UpskillReskillOverview from "../../components/programmes/UpskillingAndReskilling/UpskillingOverview";
const UpskillingReskillingSchoolsCourses = React.lazy(() => import("../../components/programmes/UpskillingAndReskilling/UpskillingSchoolsCourses"));
const TestimonialSectionUpskilling = React.lazy(() => import("../../components/programmes/UpskillingAndReskilling/Testimonials"));
import LogoMarquee from "../../components/common/LogoMaequee";
import WorkmenUpskillingImpactSection from "../../components/programmes/UpskillingAndReskilling/UpskillingImpact";
const ProgramOverviewVideo = React.lazy(() => import("../../components/common/ProgramOverviewVideo"));
const UpskillingAndReskillingGallery = React.lazy(() => import("../../components/programmes/UpskillingAndReskilling/UpskillingAndReskillingGallery"));
// import PlacementsShowcaseSection from "../../components/common/PlacementsShowcaseSection";

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

const UpskillingAndReskillingPage: React.FC = () => {
  return (
    <div>
      <UpskillingHero />
      <WorkmenUpskillingImpactSection />
      <DeferredSection><ProgramOverviewVideo videoId="Ky46MN2buqQ" /></DeferredSection>
      {/* <UpskillReskillOverview /> */}
      {/* <UpskillReskillHighlights /> */}
      <DeferredSection><UpskillingReskillingSchoolsCourses /></DeferredSection>
      {/* <PlacementsShowcaseSection /> */}
      <LogoMarquee
        heading="Our Candidates are from"
        logos={schoolLogos}
        height="h-16"
        speed="25s"
        gap="mx-8"
        bg="bg-black"
        className="py-3"
      />
      <DeferredSection><UpskillingAndReskillingGallery /></DeferredSection>
      <DeferredSection><TestimonialSectionUpskilling /></DeferredSection>
    </div>
  );
};

export default UpskillingAndReskillingPage;
