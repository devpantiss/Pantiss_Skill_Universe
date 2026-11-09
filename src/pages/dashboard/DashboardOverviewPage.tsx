import DeferredSection from "../../components/common/DeferredSection";
import React from 'react';
const EnrollmentPivotSection = React.lazy(() => import("../../components/dashboard/overview/EnrollmentPivotSection"));
const ProgrammePivotLayout = React.lazy(() => import("../../components/dashboard/overview/ProgrammePivotLayout"));
const CandidateRecordsTable = React.lazy(() => import("../../components/dashboard/overview/CandidateRecordsTable"));
const SDCRecordsTableDark = React.lazy(() => import("../../components/dashboard/overview/SDCRecordsTableDark"));
const EnrollmentAnalyticsSection = React.lazy(() => import("../../components/dashboard/overview/SkillAnalyticsDashboard"));
import OverviewDashboardFilters from '../../components/dashboard/overview/OverviewDashboardFilters';
const AnalyticsSection = React.lazy(() => import("../../components/dashboard/overview/AnalyticsSection"));
const BatchKpiSection = React.lazy(() => import("../../components/dashboard/overview/BatchKpiSection"));


const DashboardOverviewPage: React.FC = () => {
  return (
    <div>
        <OverviewDashboardFilters />
        <DeferredSection><BatchKpiSection /></DeferredSection>
        <DeferredSection><EnrollmentAnalyticsSection /></DeferredSection>
        <DeferredSection><AnalyticsSection /></DeferredSection>
        <DeferredSection><EnrollmentPivotSection /></DeferredSection>
        <DeferredSection><ProgrammePivotLayout /></DeferredSection>
        <DeferredSection><SDCRecordsTableDark /></DeferredSection>
        <DeferredSection><CandidateRecordsTable /></DeferredSection>
    </div>
  )
}

export default React.memo(DashboardOverviewPage)
