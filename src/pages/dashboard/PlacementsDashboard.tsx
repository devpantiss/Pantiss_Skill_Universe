import React, { useState } from "react";
import PlacementsFilterSection from "../../components/dashboard/placements/PlacementsFilterSection";
import PlacementsOverviewSection from "../../components/dashboard/placements/PlacementsOverviewSection";
import DistrictPerformanceAndTrendSection from "../../components/dashboard/placements/DistrictPerformanceAndTrendSection";
import PlacementsDiversityAnalyticsSection from "../../components/dashboard/placements/PlacementsDiversityAnalyticsSection";
import PlacementsGeographicalRankingSection from "../../components/dashboard/placements/PlacementsGeographicalRankingSection";
import EstablishmentProfileAnalyticsSection from "../../components/dashboard/placements/EstablishmentProfileAnalyticsSection";
import TrainingAndQualificationAnalyticsSection from "../../components/dashboard/placements/TrainingAndQualificationAnalyticsSection";
import TopEnrolledCoursesSection from "../../components/dashboard/placements/TopEnrolledCoursesSection";

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

      <PlacementsOverviewSection />
      <DistrictPerformanceAndTrendSection />
      <PlacementsDiversityAnalyticsSection />
      <PlacementsGeographicalRankingSection />
      <EstablishmentProfileAnalyticsSection />
      <TrainingAndQualificationAnalyticsSection />
      <TopEnrolledCoursesSection />
    </div>
  );
};

export default PlacementsDashboard;