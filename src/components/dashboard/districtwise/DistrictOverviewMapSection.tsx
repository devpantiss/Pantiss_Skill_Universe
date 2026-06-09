import { useEffect, useMemo, useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import type { Feature, GeoJsonObject, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";

/* ===================== TYPES ===================== */

type DistrictRow = {
  district: string;
  registered: number;
  enrolled: number;
  trained: number;
  certified: number;
  batches: number;
};

type DistrictFeature = Feature<Geometry, { Dist_Name?: string }>;

/* ===================== DATA ===================== */

const districtData: DistrictRow[] = [
  {
    district: "Khordha",
    registered: 120000,
    enrolled: 110500,
    trained: 90000,
    certified: 76000,
    batches: 520,
  },
  {
    district: "Cuttack",
    registered: 98000,
    enrolled: 90500,
    trained: 74000,
    certified: 64000,
    batches: 460,
  },
  {
    district: "Ganjam",
    registered: 105000,
    enrolled: 99000,
    trained: 78000,
    certified: 67000,
    batches: 480,
  },
  {
    district: "Sundargarh",
    registered: 87000,
    enrolled: 80000,
    trained: 65000,
    certified: 56000,
    batches: 410,
  },
  {
    district: "Koraput",
    registered: 42000,
    enrolled: 39000,
    trained: 31000,
    certified: 26000,
    batches: 230,
  },
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

export default function DistrictOverviewMapSection() {
  const [geoJson, setGeoJson] = useState<GeoJsonObject | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  /* ===================== LOAD MAP ===================== */

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((r) => r.json())
      .then(setGeoJson);
  }, []);

  /* ===================== TOTALS ===================== */

  const totals = useMemo(() => {
    return districtData.reduce(
      (a, r) => {
        a.registered += r.registered;
        a.enrolled += r.enrolled;
        a.trained += r.trained;
        a.certified += r.certified;
        a.batches += r.batches;
        return a;
      },
      {
        registered: 0,
        enrolled: 0,
        trained: 0,
        certified: 0,
        batches: 0,
      }
    );
  }, []);

  const maxEnrolled = Math.max(...districtData.map((d) => d.enrolled));

  /* ===================== MAP STYLE ===================== */

  const geoStyle = (f?: DistrictFeature) => {
    const row = districtData.find(
      (d) => d.district === f?.properties?.Dist_Name
    );
    if (!row) return {};

    const isHover = hoveredDistrict === row.district;

    return {
      fillColor: colorByValue(row.enrolled, maxEnrolled),
      weight: isHover ? 2 : 1,
      color: "#000000",
      fillOpacity: 0.85,
    };
  };

  /* ===================== RENDER ===================== */

  return (
    <section className="bg-black text-white p-8 rounded-xl space-y-10 border border-white/10">

      {/* ===================== HEADER ===================== */}
      <div>
        <h2 className="text-2xl font-semibold tracking-wide">
          District Overview — Odisha
        </h2>
        <div className="h-[2px] w-32 bg-red-600 mt-2" />
      </div>

      {/* ===================== SUMMARY CARDS ===================== */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Gauge title="Registered" value={totals.registered} />
        <Gauge title="Enrolled" value={totals.enrolled} accent />
        <Gauge title="Trained" value={totals.trained} />
        <Gauge title="Certified" value={totals.certified} />
        <Gauge title="Total Batches" value={totals.batches} accent />
      </div>

      {/* ===================== MAP + TABLE ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* MAP */}
        <div className="lg:col-span-2 border border-red-600/40 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-2">
            District-wise Enrolment Heatmap
          </h4>

          <MapContainer
            bounds={[[17.8, 81.3], [22.6, 87.5]]}
            style={{ height: 520 }}
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
                     Registered: ${row.registered}<br/>
                     Enrolled: ${row.enrolled}<br/>
                     Trained: ${row.trained}<br/>
                     Certified: ${row.certified}<br/>
                     Batches: ${row.batches}`,
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

        {/* TABLE */}
        <div className="border border-white/10 rounded-lg p-4 overflow-auto">
          <h4 className="text-sm text-white/70 mb-3">
            District-wise Summary
          </h4>

          <table className="w-full text-xs">
            <thead className="border-b border-white/10 text-white/50">
              <tr>
                <th className="p-2 text-left">District</th>
                <th className="p-2 text-right">Enrolled</th>
                <th className="p-2 text-right">Trained</th>
                <th className="p-2 text-right">Certified</th>
                <th className="p-2 text-right">Batches</th>
              </tr>
            </thead>
            <tbody>
              {districtData.map((r) => (
                <tr
                  key={r.district}
                  className={`border-b border-white/5 ${
                    hoveredDistrict === r.district
                      ? "bg-red-600/10"
                      : ""
                  }`}
                >
                  <td className="p-2">{r.district}</td>
                  <td className="p-2 text-right text-red-400">
                    {r.enrolled}
                  </td>
                  <td className="p-2 text-right">{r.trained}</td>
                  <td className="p-2 text-right">{r.certified}</td>
                  <td className="p-2 text-right">{r.batches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

/* ===================== GAUGE ===================== */

function Gauge({
  title,
  value,
  accent,
}: {
  title: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-4 border ${
        accent ? "border-red-600" : "border-white/10"
      }`}
    >
      <p className="text-xs text-white/50">{title}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
