import DeferredSection from "../../components/common/DeferredSection";
import React from 'react'
import IntMobilityHero from '../../components/programmes/InternationalMobility/IntMobilityHero'
import IntMobilityImpact from '../../components/programmes/InternationalMobility/IntMobilityImpact'
const ProgramOverviewVideo = React.lazy(() => import("../../components/common/ProgramOverviewVideo"));
const IntMobilityBenefitsCards = React.lazy(() => import("../../components/programmes/InternationalMobility/IntMobilityBenefitCards"));
const IntMobilitySchoolsCourses = React.lazy(() => import("../../components/programmes/InternationalMobility/IntMobilitySchoolsCourses"));
const PlacementsShowcaseSection = React.lazy(() => import("../../components/common/PlacementsShowcaseSection"));
import LogoMarquee from '../../components/common/LogoMaequee'
const IntMobilityTestimonials = React.lazy(() => import("../../components/programmes/InternationalMobility/IntMobilityTestimonials"));

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

const InternationalMobilityPage: React.FC = () => {
  return (
    <div>
      <IntMobilityHero />
      <IntMobilityImpact />
      <DeferredSection><ProgramOverviewVideo videoId="Ky46MN2buqQ" /></DeferredSection>
      <DeferredSection><IntMobilityBenefitsCards /></DeferredSection>
      <DeferredSection><IntMobilitySchoolsCourses /></DeferredSection>
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
      <DeferredSection><IntMobilityTestimonials /></DeferredSection>
    </div>
  )
}

export default InternationalMobilityPage
