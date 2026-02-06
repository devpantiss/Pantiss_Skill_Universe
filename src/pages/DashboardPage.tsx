import React from 'react'
import DashboardFilters from '../components/dashboard/DashboardFilters'
// import SkillsAnalyticsDashboard from '../components/dashboard/SkillAnalyticsDashboard'
// import EnrollmentPivotSection from '../components/dashboard/EnrollmentPivotSection'
// import ProgrammePivotLayout from '../components/dashboard/ProgrammePivotLayout'
// import SDCRecordsTableDark from '../components/dashboard/SDCRecordsTableDark'
// import CandidateRecordsTable from '../components/dashboard/CandidateRecordsTable'

const DashboardPage: React.FC = () => {
  return (
    <div className='pt-36 lg:pt-48 px-4 bg-black'>
        <DashboardFilters />
        {/* <SkillsAnalyticsDashboard />
        <EnrollmentPivotSection />
        <ProgrammePivotLayout />
        <SDCRecordsTableDark />
        <CandidateRecordsTable /> */}
    </div>
  )
}

export default DashboardPage