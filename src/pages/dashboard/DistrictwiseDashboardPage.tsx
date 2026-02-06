import React, { useMemo, useState } from "react";

import DistrictFilterBar from "../../components/dashboard/districtwise/DistrictFilterBar";
import DistrictEnrollmentChart from "../../components/dashboard/districtwise/DistrictEnrollmentChart";
import DistrictBatchRankTable from "../../components/dashboard/districtwise/DistrictBatchRankTable";
import DistrictEnrolledRanking from "../../components/dashboard/districtwise/DistrictEnrolledRanking";
import DistrictOverviewMapSection from "../../components/dashboard/districtwise/DistrictOverviewMapSection";

// -------------------- MOCK DATA (ODISHA DISTRICTS) --------------------
const districtData = [
  {
    district: "Khordha",
    registered: 120000,
    enrolled: 110500,
    trained: 90000,
    assessed: 82000,
    certified: 76000,
    batches: 520,
  },
  {
    district: "Cuttack",
    registered: 98000,
    enrolled: 90500,
    trained: 74000,
    assessed: 69000,
    certified: 64000,
    batches: 460,
  },
  {
    district: "Ganjam",
    registered: 105000,
    enrolled: 99000,
    trained: 78000,
    assessed: 72000,
    certified: 67000,
    batches: 480,
  },
  {
    district: "Sundargarh",
    registered: 87000,
    enrolled: 80000,
    trained: 65000,
    assessed: 60000,
    certified: 56000,
    batches: 410,
  },
  {
    district: "Balasore",
    registered: 76000,
    enrolled: 71000,
    trained: 58000,
    assessed: 54000,
    certified: 50000,
    batches: 360,
  },
  {
    district: "Mayurbhanj",
    registered: 69000,
    enrolled: 64000,
    trained: 52000,
    assessed: 48000,
    certified: 45000,
    batches: 330,
  },
  {
    district: "Puri",
    registered: 54000,
    enrolled: 50000,
    trained: 42000,
    assessed: 39000,
    certified: 36000,
    batches: 290,
  },
  {
    district: "Kalahandi",
    registered: 48000,
    enrolled: 45000,
    trained: 37000,
    assessed: 34000,
    certified: 31000,
    batches: 260,
  },
  {
    district: "Koraput",
    registered: 42000,
    enrolled: 39000,
    trained: 31000,
    assessed: 28000,
    certified: 26000,
    batches: 230,
  },
  {
    district: "Keonjhar",
    registered: 51000,
    enrolled: 47000,
    trained: 39000,
    assessed: 36000,
    certified: 33000,
    batches: 270,
  },
];

// -------------------- PAGE COMPONENT --------------------
const DistrictwiseDashboardPage: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");

  // Filter data based on district selection
  const filteredData = useMemo(() => {
    if (selectedDistrict === "All") return districtData;
    return districtData.filter(
      (d) => d.district === selectedDistrict
    );
  }, [selectedDistrict]);

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      {/* Filter */}
      <DistrictFilterBar
        district={selectedDistrict}
        setDistrict={setSelectedDistrict}
      />

      <DistrictOverviewMapSection />

      {/* Charts */}
      <DistrictEnrollmentChart
        data={filteredData.map((d) => ({
          district: d.district,
          enrolled: d.enrolled,
        }))}
      />

      {/* Tables */}
      <div className="grid md:grid-cols-2 gap-6">
        <DistrictBatchRankTable
          data={filteredData.map((d) => ({
            district: d.district,
            batches: d.batches,
          }))}
        />

        <DistrictEnrolledRanking
          data={filteredData.map((d) => ({
            district: d.district,
            enrolled: d.enrolled,
          }))}
        />
      </div>
    </div>
  );
};

export default DistrictwiseDashboardPage;
