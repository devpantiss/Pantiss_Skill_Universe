import DeferredSection from "../components/common/DeferredSection";
import React from 'react'
import HeroSection from '../components/Collaboration/Hero'
const PartnersLogos = React.lazy(() => import("../components/Collaboration/PartnersLogos"));
import CollabImpact from '../components/Collaboration/CollabImpact'
const MouSection = React.lazy(() => import("../components/Collaboration/MouSection"));

const Collaborations: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <DeferredSection><PartnersLogos /></DeferredSection>
      <CollabImpact />
      <DeferredSection><MouSection /></DeferredSection>
    </div>
  )
}

export default Collaborations
