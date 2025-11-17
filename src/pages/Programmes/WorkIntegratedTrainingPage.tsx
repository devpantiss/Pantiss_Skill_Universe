import React from 'react'
import WILPHero from '../../components/programmes/WorkIntegratedTraining/WILPHero'
import WILPOverview from '../../components/programmes/WorkIntegratedTraining/WILPOverview'
import WILPHighlights from '../../components/programmes/WorkIntegratedTraining/WILPHighlights'
import WILPSchoolsCourses from '../../components/programmes/WorkIntegratedTraining/WILPSchoolsCourses'
import TestimonialSectionWILP from '../../components/programmes/WorkIntegratedTraining/Testimonials'

const WorkIntegratedTrainingPage: React.FC = () => {
  return (
    <div>
      <WILPHero />
      <WILPOverview />
      <WILPHighlights />
      <WILPSchoolsCourses />
      <TestimonialSectionWILP />
    </div>
  )
}

export default WorkIntegratedTrainingPage