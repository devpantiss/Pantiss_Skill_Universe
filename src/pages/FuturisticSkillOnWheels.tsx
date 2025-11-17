import React from 'react'
import SkillOnWheelsHero from '../components/futuristicSkillOnWheels/SkillOnWheelsHero'
import AboutSkillOnWheels from '../components/futuristicSkillOnWheels/AboutSkillOnWheels'
import ActiveRegions from '../components/futuristicSkillOnWheels/ActiveRegions'
import FleetDetails from '../components/futuristicSkillOnWheels/FleetDetails'
import ImpactStats from '../components/futuristicSkillOnWheels/ImpactStats'
import GalleryShowcase from '../components/futuristicSkillOnWheels/GalleryShowcase'
import SkillOnWheelsCTA from '../components/futuristicSkillOnWheels/SkillOnWheelsCTA'
import ModelViewer from '../components/futuristicSkillOnWheels/ModelViewer'

const FuturisticSkillOnWheels : React.FC = () => {
  return (
    <div>
      <SkillOnWheelsHero />
      <AboutSkillOnWheels />
      <ActiveRegions />
      <FleetDetails />
      <ImpactStats />
      <GalleryShowcase />
      <SkillOnWheelsCTA />
      <ModelViewer />
    </div>
  )
}

export default FuturisticSkillOnWheels