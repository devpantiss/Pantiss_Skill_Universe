import DeferredSection from "../components/common/DeferredSection";
import React, { Suspense, lazy, useState } from 'react'
import SkillOnWheelsHero from '../components/futuristicSkillOnWheels/SkillOnWheelsHero'
const AboutSkillOnWheels = React.lazy(() => import("../components/futuristicSkillOnWheels/AboutSkillOnWheels"));
const ActiveRegions = React.lazy(() => import("../components/futuristicSkillOnWheels/ActiveRegions"));
const FleetDetails = React.lazy(() => import("../components/futuristicSkillOnWheels/FleetDetails"));
import ImpactStats from '../components/futuristicSkillOnWheels/ImpactStats'
const GalleryShowcase = React.lazy(() => import("../components/futuristicSkillOnWheels/GalleryShowcase"));
const SkillOnWheelsCTA = React.lazy(() => import("../components/futuristicSkillOnWheels/SkillOnWheelsCTA"));

const ModelViewer = lazy(() => import('../components/futuristicSkillOnWheels/ModelViewer'))

const LazyModelViewer: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(false)
  return <div className="relative min-h-[420px] w-full bg-black md:min-h-[560px]">
    {shouldRender ? <Suspense fallback={<div className="fleet-viewer-preview" role="status">Loading interactive fleet viewer…</div>}><ModelViewer /></Suspense> :
      <div className="fleet-viewer-preview"><p className="site-eyebrow">Explore our fleet</p><h2>Get a closer look.</h2><p>Discover the mobile training unit in an interactive 3D view.</p><button className="site-button" onClick={() => setShouldRender(true)}>Open 3D fleet viewer</button></div>}
  </div>
}

const FuturisticSkillOnWheels : React.FC = () => {
  return (
    <div>
      <SkillOnWheelsHero />
      <DeferredSection><AboutSkillOnWheels /></DeferredSection>
      <DeferredSection><ActiveRegions /></DeferredSection>
      <DeferredSection><FleetDetails /></DeferredSection>
      <ImpactStats />
      <DeferredSection><GalleryShowcase /></DeferredSection>
      <DeferredSection><SkillOnWheelsCTA /></DeferredSection>
      <LazyModelViewer />
    </div>
  )
}

export default FuturisticSkillOnWheels
