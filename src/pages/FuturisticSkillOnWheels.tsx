import React, { Suspense, lazy } from 'react'
import SkillOnWheelsHero from '../components/futuristicSkillOnWheels/SkillOnWheelsHero'
import AboutSkillOnWheels from '../components/futuristicSkillOnWheels/AboutSkillOnWheels'
import ActiveRegions from '../components/futuristicSkillOnWheels/ActiveRegions'
import FleetDetails from '../components/futuristicSkillOnWheels/FleetDetails'
import ImpactStats from '../components/futuristicSkillOnWheels/ImpactStats'
import GalleryShowcase from '../components/futuristicSkillOnWheels/GalleryShowcase'
import SkillOnWheelsCTA from '../components/futuristicSkillOnWheels/SkillOnWheelsCTA'

const ModelViewer = lazy(() => import('../components/futuristicSkillOnWheels/ModelViewer'))


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
      <div className="relative min-h-[500px] w-full bg-black">
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white/50">Loading 3D Fleet Viewer...</div>}>
          <ModelViewer />
        </Suspense>
      </div>
    </div>
  )
}

export default FuturisticSkillOnWheels