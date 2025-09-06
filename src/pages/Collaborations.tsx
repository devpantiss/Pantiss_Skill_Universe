import React from 'react'
import HeroSection from '../components/Collaboration/Hero'
import PartnersLogos from '../components/Collaboration/PartnersLogos'
import CollabImpact from '../components/Collaboration/CollabImpact'
import MouSection from '../components/Collaboration/MouSection'

const Collaborations: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <PartnersLogos />
      <CollabImpact />
      <MouSection />
    </div>
  )
}

export default Collaborations