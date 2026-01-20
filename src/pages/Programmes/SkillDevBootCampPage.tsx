import React from 'react'
import SkillDevHero from '../../components/programmes/SkillDevBootCamp/SkillDevHero'
import SkillDevImpact from '../../components/programmes/SkillDevBootCamp/SkillDevImpact'
import ProgramOverviewVideo from '../../components/common/ProgramOverviewVideo'
import SkillDevBenefitsCards from '../../components/programmes/SkillDevBootCamp/SkillDevBenefitsCards'
import SkillDevSchoolsCourses from '../../components/programmes/SkillDevBootCamp/SkillDevSchoolsCourses'
import PlacementsShowcaseSection from '../../components/common/PlacementsShowcaseSection'
import LogoMarquee from '../../components/common/LogoMaequee'
import SkillDevTestimonials from '../../components/programmes/SkillDevBootCamp/SkillDevTestimonials'

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

const SkillDevBootCampPage: React.FC = () => {
  return (
    <div>
        <SkillDevHero />
        <SkillDevImpact />
        <ProgramOverviewVideo videoId="Ky46MN2buqQ" />
        <SkillDevBenefitsCards />
        <SkillDevSchoolsCourses />
        <PlacementsShowcaseSection />
        <LogoMarquee
        heading="Our Trusted Placement Partners"
        logos={schoolLogos}
        height="h-16"
        speed="25s"
        gap="mx-8"
        bg="bg-black"
        className="py-3"
      />
      <SkillDevTestimonials />
    </div>
  )
}

export default SkillDevBootCampPage