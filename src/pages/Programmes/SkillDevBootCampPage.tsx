import DeferredSection from "../../components/common/DeferredSection";
import React from 'react'
import SkillDevHero from '../../components/programmes/SkillDevBootCamp/SkillDevHero'
import SkillDevImpact from '../../components/programmes/SkillDevBootCamp/SkillDevImpact'
const ProgramOverviewVideo = React.lazy(() => import("../../components/common/ProgramOverviewVideo"));
const SkillDevBenefitsCards = React.lazy(() => import("../../components/programmes/SkillDevBootCamp/SkillDevBenefitsCards"));
const SkillDevSchoolsCourses = React.lazy(() => import("../../components/programmes/SkillDevBootCamp/SkillDevSchoolsCourses"));
const PlacementsShowcaseSection = React.lazy(() => import("../../components/common/PlacementsShowcaseSection"));
import LogoMarquee from '../../components/common/LogoMaequee'
const SkillDevTestimonials = React.lazy(() => import("../../components/programmes/SkillDevBootCamp/SkillDevTestimonials"));

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

const SkillDevBootCampPage: React.FC = () => {
  return (
    <div>
        <SkillDevHero />
        <SkillDevImpact />
        <DeferredSection><ProgramOverviewVideo videoId="Ky46MN2buqQ" /></DeferredSection>
        <DeferredSection><SkillDevBenefitsCards /></DeferredSection>
        <DeferredSection><SkillDevSchoolsCourses /></DeferredSection>
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
      <DeferredSection><SkillDevTestimonials /></DeferredSection>
    </div>
  )
}

export default SkillDevBootCampPage
