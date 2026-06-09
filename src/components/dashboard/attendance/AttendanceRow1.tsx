import { useEffect, useMemo, useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import type { Feature, GeoJsonObject, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";

/* ===================== TYPES ===================== */

type AttendanceRow = {
  district: string;
  batches: number;
  candidates: number;
  present: number;
  absent: number;
};

type DistrictFeature = Feature<Geometry, { Dist_Name?: string }>;

/* ===================== DATA ===================== */

const attendanceData: AttendanceRow[] = [
  { district: "Kendujhar", batches: 1, candidates: 506, present: 391, absent: 115 },
  { district: "Angul", batches: 4, candidates: 673, present: 558, absent: 115 },
  { district: "Sundargarh", batches: 3, candidates: 960, present: 697, absent: 263 },
  { district: "Jharsuguda", batches: 1, candidates: 260, present: 193, absent: 67 },
  { district: "Koraput", batches: 2, candidates: 404, present: 305, absent: 99 },
];

/* ===================== HELPERS ===================== */

const pct = (n: number, d: number) =>
  d === 0 ? 0 : Math.round((n / d) * 100);

const colorByPct = (p: number) => {
  if (p < 30) return "#7f1d1d";
  if (p < 50) return "#991b1b";
  if (p < 70) return "#dc2626";
  return "#ef4444";
};

/* ===================== COMPONENT ===================== */

export default function AttendanceAnalyticsSection() {
  const [geoJson, setGeoJson] = useState<GeoJsonObject | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((r) => r.json())
      .then(setGeoJson);
  }, []);

  /* ===================== TOTALS ===================== */

  const totals = useMemo(() => {
    return attendanceData.reduce(
      (a, r) => {
        a.batches += r.batches;
        a.candidates += r.candidates;
        a.present += r.present;
        a.absent += r.absent;
        return a;
      },
      { batches: 0, candidates: 0, present: 0, absent: 0 }
    );
  }, []);

  const presentPct = pct(totals.present, totals.candidates);
  const absentPct = pct(totals.absent, totals.candidates);

  /* ===================== MAP STYLE ===================== */

  const geoStyle = (f?: DistrictFeature) => {
    const row = attendanceData.find(
      (d) => d.district === f?.properties?.Dist_Name
    );
    if (!row) return {};

    const p = pct(row.present, row.candidates);
    const isHover = hoveredDistrict === row.district;

    return {
      fillColor: colorByPct(p),
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
          Attendance Analytics — Odisha
        </h2>
        <div className="h-[2px] w-32 bg-red-600 mt-2" />
      </div>

      {/* ===================== GAUGE CARDS ===================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Gauge title="Total Batches" value={totals.batches} />
        <Gauge title="Candidates" value={totals.candidates} />
        <Gauge title="Present" value={totals.present} accent />
        <Gauge title="Absent" value={totals.absent} accent />
        <Gauge title="% Present" value={`${presentPct}%`} />
        <Gauge title="% Absent" value={`${absentPct}%`} accent />
      </div>

      {/* ===================== MAP + TABLE ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* MAP */}
        <div className="lg:col-span-2 border border-red-600/40 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-2">
            District-wise Attendance (%)
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
                  const row = attendanceData.find(
                    (d) => d.district === f.properties.Dist_Name
                  );
                  if (!row) return;

                  l.bindTooltip(
                    `<strong>${row.district}</strong><br/>
                     Candidates: ${row.candidates}<br/>
                     Present: ${row.present}<br/>
                     Absent: ${row.absent}<br/>
                     Attendance: ${pct(row.present, row.candidates)}%`,
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
            District Attendance Details
          </h4>

          <table className="w-full text-xs">
            <thead className="border-b border-white/10 text-white/50">
              <tr>
                <th className="p-2 text-left">District</th>
                <th className="p-2 text-right">Batches</th>
                <th className="p-2 text-right">Candidates</th>
                <th className="p-2 text-right">Present</th>
                <th className="p-2 text-right">Absent</th>
                <th className="p-2 text-right">% Present</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((r) => {
                const p = pct(r.present, r.candidates);
                return (
                  <tr
                    key={r.district}
                    className={`border-b border-white/5 ${
                      hoveredDistrict === r.district
                        ? "bg-red-600/10"
                        : ""
                    }`}
                  >
                    <td className="p-2">{r.district}</td>
                    <td className="p-2 text-right">{r.batches}</td>
                    <td className="p-2 text-right">{r.candidates}</td>
                    <td className="p-2 text-right text-red-400">{r.present}</td>
                    <td className="p-2 text-right">{r.absent}</td>
                    <td
                      className="p-2 text-right font-semibold"
                      style={{ color: colorByPct(p) }}
                    >
                      {p}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

/* ===================== GAUGE CARD ===================== */

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
