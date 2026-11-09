import DeferredSection from "../../components/common/DeferredSection";
import React, { useState } from "react";
import PlacementsFilterSection from "../../components/dashboard/placements/PlacementsFilterSection";
const PlacementsOverviewSection = React.lazy(() => import("../../components/dashboard/placements/PlacementsOverviewSection"));
const DistrictPerformanceAndTrendSection = React.lazy(() => import("../../components/dashboard/placements/DistrictPerformanceAndTrendSection"));
const PlacementsDiversityAnalyticsSection = React.lazy(() => import("../../components/dashboard/placements/PlacementsDiversityAnalyticsSection"));
const PlacementsGeographicalRankingSection = React.lazy(() => import("../../components/dashboard/placements/PlacementsGeographicalRankingSection"));
const EstablishmentProfileAnalyticsSection = React.lazy(() => import("../../components/dashboard/placements/EstablishmentProfileAnalyticsSection"));
const TrainingAndQualificationAnalyticsSection = React.lazy(() => import("../../components/dashboard/placements/TrainingAndQualificationAnalyticsSection"));
const TopEnrolledCoursesSection = React.lazy(() => import("../../components/dashboard/placements/TopEnrolledCoursesSection"));

const PlacementsDashboard: React.FC = () => {
  const [fy, setFy] = useState("All");
  const [state, setState] = useState("All");
  const [district, setDistrict] = useState("All");
  const [gender, setGender] = useState("All");
  const [specialCategory, setSpecialCategory] = useState("All");
  const [contractType, setContractType] = useState("All");

  return (
    <div className="p-6 bg-black min-h-screen">
      <PlacementsFilterSection
        fy={fy}
        setFy={setFy}
        state={state}
        setState={setState}
        district={district}
        setDistrict={setDistrict}
        gender={gender}
        setGender={setGender}
        specialCategory={specialCategory}
        setSpecialCategory={setSpecialCategory}
        contractType={contractType}
        setContractType={setContractType}
      />

      <DeferredSection><PlacementsOverviewSection /></DeferredSection>
      <DeferredSection><DistrictPerformanceAndTrendSection /></DeferredSection>
      <DeferredSection><PlacementsDiversityAnalyticsSection /></DeferredSection>
      <DeferredSection><PlacementsGeographicalRankingSection /></DeferredSection>
      <DeferredSection><EstablishmentProfileAnalyticsSection /></DeferredSection>
      <DeferredSection><TrainingAndQualificationAnalyticsSection /></DeferredSection>
      <DeferredSection><TopEnrolledCoursesSection /></DeferredSection>
    </div>
  );
};

export default React.memo(PlacementsDashboard);
