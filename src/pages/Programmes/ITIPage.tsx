import React from 'react'
import ITIHero from '../../components/programmes/ITI/ITIHero'
import ITIOverview from '../../components/programmes/ITI/ITIOverview'
import ITIHighlights from '../../components/programmes/ITI/ITIHighlights'
import ITISchoolsCourses from '../../components/programmes/ITI/ITISchoolsCourses'
import TestimonialSectionITI from '../../components/programmes/ITI/Testimonials'

const ITIPage: React.FC = () => {
  return (
    <div>
      <ITIHero />
      <ITIOverview />
      <ITIHighlights />
      <ITISchoolsCourses />
      <TestimonialSectionITI />
    </div>
  )
}

export default ITIPage