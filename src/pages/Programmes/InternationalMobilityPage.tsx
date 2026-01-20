import React from 'react'
import IntMobilityHero from '../../components/programmes/InternationalMobility/IntMobilityHero'
import IntMobilityImpact from '../../components/programmes/InternationalMobility/IntMobilityImpact'
import ProgramOverviewVideo from '../../components/common/ProgramOverviewVideo'
import IntMobilityBenefitsCards from '../../components/programmes/InternationalMobility/IntMobilityBenefitCards'
import IntMobilitySchoolsCourses from '../../components/programmes/InternationalMobility/IntMobilitySchoolsCourses'
import PlacementsShowcaseSection from '../../components/common/PlacementsShowcaseSection'
import LogoMarquee from '../../components/common/LogoMaequee'
import IntMobilityTestimonials from '../../components/programmes/InternationalMobility/IntMobilityTestimonials'

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

const InternationalMobilityPage: React.FC = () => {
  return (
    <div>
      <IntMobilityHero />
      <IntMobilityImpact />
      <ProgramOverviewVideo videoId="Ky46MN2buqQ" />
      <IntMobilityBenefitsCards />
      <IntMobilitySchoolsCourses />
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
      <IntMobilityTestimonials />
    </div>
  )
}

export default InternationalMobilityPage