import React from "react";
import UpskillingHero from "../../components/programmes/UpskillingAndReskilling/Hero";
// import UpskillReskillHighlights from "../../components/programmes/UpskillingAndReskilling/UpskillingHighlights";
// import UpskillReskillOverview from "../../components/programmes/UpskillingAndReskilling/UpskillingOverview";
import UpskillingReskillingSchoolsCourses from "../../components/programmes/UpskillingAndReskilling/UpskillingSchoolsCourses";
import TestimonialSectionUpskilling from "../../components/programmes/UpskillingAndReskilling/Testimonials";
import LogoMarquee from "../../components/common/LogoMaequee";
import WorkmenUpskillingImpactSection from "../../components/programmes/UpskillingAndReskilling/UpskillingImpact";
import ProgramOverviewVideo from "../../components/common/ProgramOverviewVideo";
import UpskillingAndReskillingGallery from "../../components/programmes/UpskillingAndReskilling/UpskillingAndReskillingGallery";
// import PlacementsShowcaseSection from "../../components/common/PlacementsShowcaseSection";

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

const UpskillingAndReskillingPage: React.FC = () => {
  return (
    <div>
      <UpskillingHero />
      <WorkmenUpskillingImpactSection />
      <ProgramOverviewVideo videoId="Ky46MN2buqQ" />
      {/* <UpskillReskillOverview /> */}
      {/* <UpskillReskillHighlights /> */}
      <UpskillingReskillingSchoolsCourses />
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
      <UpskillingAndReskillingGallery />
      <TestimonialSectionUpskilling />
    </div>
  );
};

export default UpskillingAndReskillingPage;
