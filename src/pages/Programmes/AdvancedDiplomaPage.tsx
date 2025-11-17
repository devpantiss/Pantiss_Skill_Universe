import React from 'react'
import AdvancedDiplomaHero from '../../components/programmes/AdvancedDiploma/AdvancedDiplomaHero'
import AdvancedDiplomaOverview from '../../components/programmes/AdvancedDiploma/AdvancedDiplomaOverview'
import AdvancedDiplomaHighlights from '../../components/programmes/AdvancedDiploma/AdvancedDiplomaHighlights'
import AdvancedDiplomaSchoolsCourses from '../../components/programmes/AdvancedDiploma/AdvancedDiplomaSchoolsCourses'
import TestimonialSectionAdvancedDiploma from '../../components/programmes/AdvancedDiploma/Testimonials'

const AdvancedDiplomaPage: React.FC = () => {
  return (
    <div>
      <AdvancedDiplomaHero />
      <AdvancedDiplomaOverview />
      <AdvancedDiplomaHighlights />
      <AdvancedDiplomaSchoolsCourses />
      <TestimonialSectionAdvancedDiploma />
    </div>
  )
}

export default AdvancedDiplomaPage