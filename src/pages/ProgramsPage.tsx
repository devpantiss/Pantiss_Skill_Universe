import DeferredSection from "../components/common/DeferredSection";
import React from 'react'
import ProgrammesHero from '../components/programmes/ProgrammesHero'
const ProgrammesCategory = React.lazy(() => import("../components/programmes/ProgrammesCategory"));
const JobRolesMarquee = React.lazy(() => import("../components/programmes/JobRolesMarquee"));
// import ProgrammesBanner from '../components/programmes/Banner'
const ProgramTimeline = React.lazy(() => import("../components/programmes/Timeline"));
const WhyProgrammesBanner = React.lazy(() => import("../components/programmes/WhyProgrammes"));
// import FeaturedProgrammes from '../components/programmes/FeaturedProgrammes'

const ProgramsPage: React.FC = () => {
  return (
    <div>
      <ProgrammesHero />
      <DeferredSection><ProgrammesCategory /></DeferredSection>
      {/* <ProgrammesBanner /> */}
      <DeferredSection><JobRolesMarquee /></DeferredSection>
      <DeferredSection><WhyProgrammesBanner /></DeferredSection>
      <DeferredSection><ProgramTimeline /></DeferredSection>
      {/* <FeaturedProgrammes /> */}
    </div>
  )
}

export default ProgramsPage
