import DeferredSection from "../../components/common/DeferredSection";
import React from "react";
import HeroCertification from "../../components/programmes/Certification/HeroCertification";
// import CertificationOverview from "../../components/programmes/Certification/CertificationOverview";
// import CertificationHighlights from "../../components/programmes/Certification/CertificationHighlights";
const CertificationSchoolsCourses = React.lazy(() => import("../../components/programmes/Certification/CertificationSchoolsCourses"));
const TestimonialSectionCertification = React.lazy(() => import("../../components/programmes/Certification/Testimonials"));
import LogoMarquee from "../../components/common/LogoMaequee";
import CertificationImpact from "../../components/programmes/Certification/CertificationImpact";
const ProgramOverviewVideo = React.lazy(() => import("../../components/common/ProgramOverviewVideo"));
const PlacementsShowcaseSection = React.lazy(() => import("../../components/common/PlacementsShowcaseSection"));
const IndustryCertificationBenefitsCards = React.lazy(() => import("../../components/programmes/Certification/IndustryCertificationBenefitsCards"));

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

const IndustryAllignedCertificationPage: React.FC = () => {
  return (
    <div>
      <HeroCertification />
      <CertificationImpact />
      <DeferredSection><ProgramOverviewVideo videoId="Ky46MN2buqQ" /></DeferredSection>
      {/* <CertificationOverview /> */}
      {/* <CertificationHighlights /> */}
      <DeferredSection><CertificationSchoolsCourses /></DeferredSection>
      <DeferredSection><IndustryCertificationBenefitsCards /></DeferredSection>
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
      <DeferredSection><TestimonialSectionCertification /></DeferredSection>
    </div>
  );
};

export default IndustryAllignedCertificationPage;
