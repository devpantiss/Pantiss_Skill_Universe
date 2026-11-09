import DeferredSection from "../../components/common/DeferredSection";
import React from 'react'
import RplHero from '../../components/programmes/RPL/Hero'
const RplHighlights = React.lazy(() => import("../../components/programmes/RPL/Highlights"));
const SchoolsCourses = React.lazy(() => import("../../components/programmes/RPL/SchoolsCourses"));
const RplOverview = React.lazy(() => import("../../components/programmes/RPL/RplOverview"));
const TestimonialSectionRpl = React.lazy(() => import("../../components/programmes/RPL/Testimonials"));

const RecognitionofPriorLearningPage: React.FC = () => {
  return (
    <div>
        <RplHero />
        <DeferredSection><RplOverview /></DeferredSection>
        <DeferredSection><SchoolsCourses /></DeferredSection>
        <DeferredSection><RplHighlights /></DeferredSection>
        <DeferredSection><TestimonialSectionRpl /></DeferredSection>
    </div>
  )
}

export default RecognitionofPriorLearningPage
