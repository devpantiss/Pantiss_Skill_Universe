import { useEffect, useMemo, useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FaUsers,
  FaTruckMoving,
  FaTractor,
  FaCogs,
  FaBolt,
  FaTools,
} from "react-icons/fa";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

/* ===================== TYPES ===================== */

type RoleOnly =
  | "dumperOperator"
  | "excavatorOperator"
  | "loaderOperator"
  | "hemmMechanic"
  | "electrician"
  | "welder";

type JobRole = "total" | RoleOnly;
type MetricType = "candidates" | "batches";
type BatchStage = "Enrolled" | "Ongoing" | "Trained" | "Assessed" | "Certified";

type DistrictMiningData = {
  name: string;
  total: number;
  batches: number;
} & Record<RoleOnly, number>;

/* ===================== ICONS ===================== */

const roleIcons: Record<JobRole, any> = {
  total: FaUsers,
  dumperOperator: FaTruckMoving,
  excavatorOperator: FaTractor,
  loaderOperator: FaTruckMoving,
  hemmMechanic: FaCogs,
  electrician: FaBolt,
  welder: FaTools,
};

/* ===================== DATA ===================== */

const miningData: DistrictMiningData[] = [
  { name: "Angul", dumperOperator: 42, excavatorOperator: 38, loaderOperator: 30, hemmMechanic: 18, electrician: 22, welder: 15, total: 165, batches: 28 },
  { name: "Sundargarh", dumperOperator: 55, excavatorOperator: 48, loaderOperator: 40, hemmMechanic: 25, electrician: 28, welder: 20, total: 216, batches: 36 },
  { name: "Kendujhar", dumperOperator: 60, excavatorOperator: 52, loaderOperator: 46, hemmMechanic: 30, electrician: 34, welder: 22, total: 244, batches: 41 },
  { name: "Jharsuguda", dumperOperator: 28, excavatorOperator: 22, loaderOperator: 18, hemmMechanic: 12, electrician: 14, welder: 9, total: 103, batches: 17 },
  { name: "Koraput", dumperOperator: 20, excavatorOperator: 18, loaderOperator: 16, hemmMechanic: 10, electrician: 12, welder: 8, total: 84, batches: 14 },
];

/* ===================== COMPONENT ===================== */

export default function MiningAnalyticsSection() {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  const [selectedRole, setSelectedRole] = useState<JobRole>("total");
  const [metric, setMetric] = useState<MetricType>("candidates");
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const [batchStage, setBatchStage] =
    useState<BatchStage>("Certified");

  /* ===================== LOAD MAP ===================== */

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((r) => r.json())
      .then(setGeoJsonData);
  }, []);

  /* ===================== HELPERS ===================== */

  const getDistrict = (name: string) =>
    miningData.find((d) => d.name === name);

  const getValue = (name: string) => {
    const d = getDistrict(name);
    if (!d) return 0;

    if (metric === "batches") return d.batches;
    return selectedRole === "total" ? d.total : d[selectedRole];
  };

  const mapStyleGreen = (f: any) => {
    const name = f.properties.Dist_Name;
    const v = getValue(name);
    const isHover = hoveredDistrict === name;

    return {
      fillColor:
        v > 200 ? "#16a34a" : v > 100 ? "#4ade80" : "#14532d",
      weight: isHover ? 3 : 1,
      color: isHover ? "#fff" : "#0B0E11",
      fillOpacity: isHover ? 0.9 : 0.7,
    };
  };

  const mapStyleRed = (f: any) => {
    const name = f.properties.Dist_Name;
    const isHover = hoveredDistrict === name;

    return {
      fillColor: "#dc2626", // red-600
      weight: isHover ? 3 : 1,
      color: isHover ? "#fff" : "#0B0E11",
      fillOpacity: isHover ? 0.9 : 0.6,
    };
  };

  /* ===================== CHARTS ===================== */

  const districtChart = {
    labels: miningData.map((d) => d.name),
    datasets: [
      {
        label: metric === "batches" ? "Batches" : "Candidates",
        data:
          metric === "batches"
            ? miningData.map((d) => d.batches)
            : miningData.map((d) => d.total),
        backgroundColor: "#22c55e",
      },
    ],
  };

  const roleTotals = useMemo(() => {
    return miningData.reduce(
      (acc, d) => {
        acc.dumperOperator += d.dumperOperator;
        acc.excavatorOperator += d.excavatorOperator;
        acc.loaderOperator += d.loaderOperator;
        acc.hemmMechanic += d.hemmMechanic;
        acc.electrician += d.electrician;
        acc.welder += d.welder;
        return acc;
      },
      {
        dumperOperator: 0,
        excavatorOperator: 0,
        loaderOperator: 0,
        hemmMechanic: 0,
        electrician: 0,
        welder: 0,
      }
    );
  }, []);

  const roleChart = {
    labels: Object.keys(roleTotals),
    datasets: [
      {
        label: "Candidates by Role",
        data: Object.values(roleTotals),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  /* ===================== RENDER ===================== */

  return (
    <section className="bg-[#0B0E11] text-white p-6 space-y-10 rounded-xl">

      {/* ===================== HEADER ===================== */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Mining Workforce Analytics — Odisha
        </h2>

        <div className="flex bg-white/10 rounded-md overflow-hidden text-xs">
          {(["candidates", "batches"] as MetricType[]).map((m) => (
            <button
              key={m}
              onClick={() => setMetric(m)}
              className={`px-4 py-2 ${
                metric === m
                  ? "bg-emerald-400 text-black"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {m === "candidates" ? "Candidates" : "Batches"}
            </button>
          ))}
        </div>
      </div>

      {/* ===================== ROLE TABS ===================== */}
      <div className="flex gap-2 overflow-x-auto">
        {(Object.keys(roleIcons) as JobRole[]).map((r) => {
          const Icon = roleIcons[r];
          return (
            <button
              key={r}
              onClick={() => setSelectedRole(r)}
              className={`flex items-center gap-2 px-4 py-2 text-xs rounded ${
                selectedRole === r
                  ? "bg-emerald-400 text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <Icon /> {r.replace(/([A-Z])/g, " $1")}
            </button>
          );
        })}
      </div>

      {/* ===================== MAP + TABLE ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#11161C] p-4 rounded-lg">
          <MapContainer
            bounds={[[17.8, 81.3], [22.6, 87.5]]}
            style={{ height: "460px" }}
            zoomControl={false}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            {geoJsonData && (
              <GeoJSON
                data={geoJsonData}
                style={mapStyleGreen}
                onEachFeature={(f, l) => {
                  const name = f.properties.Dist_Name;
                  l.bindTooltip(`${name}: ${getValue(name)}`, {
                    sticky: true,
                  });
                  l.on({
                    mouseover: () => setHoveredDistrict(name),
                    mouseout: () => setHoveredDistrict(null),
                  });
                }}
              />
            )}
          </MapContainer>
        </div>

        <div className="bg-[#11161C] p-4 rounded-lg overflow-auto">
          <table className="w-full text-xs">
            <thead className="text-white/60">
              <tr>
                <th className="text-left">District</th>
                <th className="text-right">Total</th>
                <th className="text-right capitalize">{metric}</th>
              </tr>
            </thead>
            <tbody>
              {miningData.map((d) => (
                <tr
                  key={d.name}
                  className={`border-t border-white/10 ${
                    hoveredDistrict === d.name ? "bg-white/5" : ""
                  }`}
                >
                  <td>{d.name}</td>
                  <td className="text-right">{d.total}</td>
                  <td className="text-right">
                    {metric === "batches"
                      ? d.batches
                      : selectedRole === "total"
                      ? d.total
                      : d[selectedRole]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===================== BAR CHARTS ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#11161C] p-4 rounded-lg">
          <Bar data={districtChart} />
        </div>
        <div className="bg-[#11161C] p-4 rounded-lg">
          <Bar data={roleChart} />
        </div>
      </div>

      {/* ===================== SECOND MAP + TABLE (RED) ===================== */}
      <div className="space-y-4">
        <div className="flex gap-2">
          {(["Enrolled", "Ongoing", "Trained", "Assessed", "Certified"] as BatchStage[]).map(
            (s) => (
              <button
                key={s}
                onClick={() => setBatchStage(s)}
                className={`px-6 py-2 text-xs border ${
                  batchStage === s
                    ? "bg-white text-black"
                    : "border-white/30 text-white/70"
                }`}
              >
                {s}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-[#11161C] p-4 rounded-lg overflow-auto">
            <table className="w-full text-xs">
              <thead className="text-white/60">
                <tr>
                  <th className="text-left">District</th>
                  <th className="text-right">Count</th>
                </tr>
              </thead>
              <tbody>
                {miningData.map((d) => (
                  <tr key={d.name} className="border-t border-white/10">
                    <td>{d.name}</td>
                    <td className="text-right">
                      {Math.floor(d.batches * 1.2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-2 bg-[#11161C] p-4 rounded-lg">
            <MapContainer
              bounds={[[17.8, 81.3], [22.6, 87.5]]}
              style={{ height: "420px" }}
              zoomControl={false}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
              {geoJsonData && (
                <GeoJSON
                  data={geoJsonData}
                  style={mapStyleRed}
                />
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
