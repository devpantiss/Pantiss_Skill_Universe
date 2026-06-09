import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import SkillOnWheelsHero from '../components/futuristicSkillOnWheels/SkillOnWheelsHero'
import AboutSkillOnWheels from '../components/futuristicSkillOnWheels/AboutSkillOnWheels'
import ActiveRegions from '../components/futuristicSkillOnWheels/ActiveRegions'
import FleetDetails from '../components/futuristicSkillOnWheels/FleetDetails'
import ImpactStats from '../components/futuristicSkillOnWheels/ImpactStats'
import GalleryShowcase from '../components/futuristicSkillOnWheels/GalleryShowcase'
import SkillOnWheelsCTA from '../components/futuristicSkillOnWheels/SkillOnWheelsCTA'

const ModelViewer = lazy(() => import('../components/futuristicSkillOnWheels/ModelViewer'))

const LazyModelViewer: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || shouldRender) return

    if (!('IntersectionObserver' in window)) {
      setShouldRender(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldRender])

  return (
    <div ref={ref} className="relative min-h-[420px] w-full bg-black md:min-h-[560px]">
      {shouldRender ? (
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white/50">Loading 3D Fleet Viewer...</div>}>
          <ModelViewer />
        </Suspense>
      ) : (
        <div className="min-h-[420px] md:min-h-[560px]" aria-hidden="true" />
      )}
    </div>
  )
}

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
      <LazyModelViewer />
    </div>
  )
}

export default FuturisticSkillOnWheels
