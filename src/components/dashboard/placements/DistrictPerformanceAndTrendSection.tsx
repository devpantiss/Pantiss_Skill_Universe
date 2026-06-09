import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import type { Feature, GeoJsonObject, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ===================== TYPES ===================== */

type DistrictRow = {
  district: string;
  engaged: number;
};

type DistrictFeature = Feature<Geometry, { Dist_Name?: string }>;

type TrendRow = {
  fy: string;
  engaged: number;
  completed: number;
  dropouts: number;
};

/* ===================== DATA ===================== */

const districtData: DistrictRow[] = [
  { district: "Khordha", engaged: 110500 },
  { district: "Cuttack", engaged: 90500 },
  { district: "Ganjam", engaged: 99000 },
  { district: "Sundargarh", engaged: 80000 },
  { district: "Mayurbhanj", engaged: 64000 },
  { district: "Koraput", engaged: 39000 },
];

const trendData: TrendRow[] = [
  { fy: "FY-18-19", engaged: 40000, completed: 12000, dropouts: 3000 },
  { fy: "FY-19-20", engaged: 210000, completed: 50000, dropouts: 12000 },
  { fy: "FY-20-21", engaged: 310000, completed: 220000, dropouts: 25000 },
  { fy: "FY-21-22", engaged: 590000, completed: 230000, dropouts: 100000 },
  { fy: "FY-22-23", engaged: 740000, completed: 350000, dropouts: 240000 },
  { fy: "FY-23-24", engaged: 930000, completed: 500000, dropouts: 330000 },
  { fy: "FY-24-25", engaged: 990000, completed: 580000, dropouts: 340000 },
  { fy: "FY-25-26", engaged: 1050000, completed: 540000, dropouts: 360000 },
];

/* ===================== HELPERS ===================== */

const colorByValue = (v: number, max: number) => {
  const p = v / max;
  if (p < 0.25) return "#7f1d1d";
  if (p < 0.5) return "#991b1b";
  if (p < 0.75) return "#dc2626";
  return "#ef4444";
};

/* ===================== COMPONENT ===================== */

export default function DistrictPerformanceAndTrendSection() {
  const [geoJson, setGeoJson] = useState<GeoJsonObject | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((r) => r.json())
      .then(setGeoJson);
  }, []);

  const maxEngaged = Math.max(...districtData.map((d) => d.engaged));

  /* ===================== MAP STYLE ===================== */

  const geoStyle = (f?: DistrictFeature) => {
    const row = districtData.find(
      (d) => d.district === f?.properties?.Dist_Name
    );
    if (!row) return {};

    return {
      fillColor: colorByValue(row.engaged, maxEngaged),
      weight: hoveredDistrict === row.district ? 2 : 1,
      color: "#020617",
      fillOpacity: 0.9,
    };
  };

  /* ===================== RENDER ===================== */

  return (
    <section className="bg-black text-white p-8 rounded-2xl border border-red-600 mt-4 space-y-6">

      {/* ===================== HEADER ===================== */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">
          Districts Performance & Engagement Trend
        </h2>
        <div className="h-[2px] w-40 bg-red-600" />
      </div>

      {/* ===================== MAP + TREND ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===================== MAP ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-2">
            Districts Performance (Based on Apprentices Engaged)
          </h4>

          <MapContainer
            bounds={[[17.8, 81.3], [22.6, 87.5]]}
            style={{ height: 420 }}
            zoomControl={false}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

            {geoJson && (
              <GeoJSON
                data={geoJson}
                style={geoStyle}
                onEachFeature={(f, l) => {
                  const row = districtData.find(
                    (d) => d.district === f.properties.Dist_Name
                  );
                  if (!row) return;

                  l.bindTooltip(
                    `<strong>${row.district}</strong><br/>
                     Apprentices Engaged: ${row.engaged.toLocaleString()}`,
                    { sticky: true }
                  );

                  l.on({
                    mouseover: () => setHoveredDistrict(row.district),
                    mouseout: () => setHoveredDistrict(null),
                  });
                }}
              />
            )}
          </MapContainer>
        </div>

        {/* ===================== TREND CHART ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-2">
            Apprentices Engagement Trend
          </h4>

          <div className="h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <XAxis dataKey="fy" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    border: "1px solid #1f2937",
                    color: "#f9fafb",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="engaged"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.4}
                  name="Engaged"
                />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.35}
                  name="Completed Training"
                />
                <Area
                  type="monotone"
                  dataKey="dropouts"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.35}
                  name="Dropouts"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
