import React from 'react';
import EnrollmentPivotSection from '../../components/dashboard/overview/EnrollmentPivotSection';
import ProgrammePivotLayout from '../../components/dashboard/overview/ProgrammePivotLayout';
import CandidateRecordsTable from '../../components/dashboard/overview/CandidateRecordsTable';
import SDCRecordsTableDark from '../../components/dashboard/overview/SDCRecordsTableDark';
import EnrollmentAnalyticsSection from '../../components/dashboard/overview/SkillAnalyticsDashboard';
import OverviewDashboardFilters from '../../components/dashboard/overview/OverviewDashboardFilters';
import AnalyticsSection from '../../components/dashboard/overview/AnalyticsSection';
import BatchKpiSection from '../../components/dashboard/overview/BatchKpiSection';


const DashboardOverviewPage: React.FC = () => {
  return (
    <div>
        <OverviewDashboardFilters />
        <BatchKpiSection />
        <EnrollmentAnalyticsSection />
        <AnalyticsSection />
        <EnrollmentPivotSection />
        <ProgrammePivotLayout />
        <SDCRecordsTableDark />
        <CandidateRecordsTable />
    </div>
  )
}

export default DashboardOverviewPage