import { memo, useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Award,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import type { Feature, GeoJsonObject, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";

/* =====================================================
   TYPES
===================================================== */

interface Course {
  name: string;
  skillLevel: string;
  duration: string;
  participants: number;
}

interface School {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  gradient: string;
  totalParticipants: number;
  successRate: number;
  location: {
    district: string;
    coords: [number, number];
  };
  courses: Course[];
}

type DistrictFeature = Feature<Geometry, { Dist_Name?: string }>;

/* =====================================================
   DATA WITH DISTRICTS
===================================================== */

const schools: School[] = [
  {
    id: "mines",
    name: "ITI Mines",
    shortName: "Mines",
    description:
      "Safe mining ops, HEMM machinery and maintenance training for rapid workforce entry.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451906/dominik-vanyi-Mk2ls9UBO2E-unsplash_1_uk97mb.jpg",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    totalParticipants: 1620,
    successRate: 92,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "HEMM Operator", skillLevel: "Basic", duration: "6 months", participants: 420 },
      { name: "Mine Safety", skillLevel: "Basic", duration: "4 months", participants: 320 },
    ],
  },
  {
    id: "steel",
    name: "ITI Steel",
    shortName: "Steel & Al",
    description:
      "Fabrication, welding and furnace practices aligned to industrial shop floors.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451904/ant-rozetsky-_qWeqqmpBpU-unsplash_depnwu.jpg",
    gradient: "from-gray-600/20 via-slate-500/20 to-red-500/20",
    totalParticipants: 1840,
    successRate: 90,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "Welder", skillLevel: "Basic", duration: "6 months", participants: 600 },
    ],
  },
  {
    id: "power",
    name: "ITI Power",
    shortName: "Power & Green",
    description:
      "Electrical, solar PV and power plant assistant trades.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451905/sungrow-emea-VC-m6ULjJ6Y-unsplash_fjglkj.jpg",
    gradient: "from-yellow-400/20 via-green-400/20 to-cyan-400/20",
    totalParticipants: 2060,
    successRate: 94,
    location: { district: "Jajapur", coords: [20.85, 86.33] },
    courses: [
      { name: "Electrician", skillLevel: "Basic", duration: "6 months", participants: 680 },
    ],
  },
  {
    id: "shipping",
    name: "ITI Shipping",
    shortName: "Shipping",
    description:
      "Port logistics, cargo handling and warehouse training.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451912/ozren-cuculic-eBKxooPEU5w-unsplash_jphgdn.jpg",
    gradient: "from-blue-400/20 via-cyan-400/20 to-teal-400/20",
    totalParticipants: 1380,
    successRate: 91,
    location: { district: "Jagatsinghapur", coords: [20.25, 86.17] },
    courses: [
      { name: "Cargo Handler", skillLevel: "Basic", duration: "5 months", participants: 540 },
    ],
  },
];

/* =====================================================
   MAP HELPERS
===================================================== */

const pulseIcon = new L.DivIcon({
  className: "",
  html: `<div class="pulse-dot"></div>`,
  iconSize: [16, 16],
});

const FlyTo = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(coords, 8, { duration: 1.5 });
  }, [coords, map]);

  return null;
};

/* =====================================================
   COMPONENT
===================================================== */

const ITISchoolsCourses = () => {
  const [geoData, setGeoData] = useState<GeoJsonObject | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((res) => res.json())
      .then(setGeoData);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const i = setInterval(
      () => setIndex((p) => (p + 1) % schools.length),
      4500
    );
    return () => clearInterval(i);
  }, [playing]);

  const school = schools[index];

  const next = useCallback(
    () => setIndex((p) => (p + 1) % schools.length),
    []
  );

  const prev = useCallback(
    () => setIndex((p) => (p === 0 ? schools.length - 1 : p - 1)),
    []
  );

  return (
    <section className="bg-black py-24 text-white relative overflow-hidden">
      {/* PREMIUM MAP CSS */}
      <style>{`
        .district-glow{
          filter: drop-shadow(0 0 6px rgba(34,197,94,.9))
                  drop-shadow(0 0 14px rgba(34,197,94,.6));
        }

        .pulse-dot{
          width:14px;height:14px;border-radius:50%;
          background:#22c55e;position:relative;
        }

        .pulse-dot::after{
          content:"";position:absolute;inset:0;
          border-radius:50%;
          border:2px solid #22c55e;
          animation:pulseRing 1.8s infinite;
        }

        @keyframes pulseRing{
          from{transform:scale(1);opacity:.8}
          to{transform:scale(3);opacity:0}
        }

        .leaflet-tooltip{
          background:rgba(2,6,23,.95);
          border:1px solid rgba(34,197,94,.6);
          color:#22c55e;
          font-weight:600;
          border-radius:8px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 px-6">

        {/* LEFT */}
        <div>
          <img
            src={school.image}
            className="rounded-3xl h-[400px] w-full object-cover"
          />

          <h3 className="text-3xl font-bold mt-6">
            {school.shortName}
          </h3>

          <p className="text-gray-300 mt-3">
            {school.description}
          </p>

          <div className="flex gap-4 mt-4">
            <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <Award className="w-4 text-green-400"/>
              {school.successRate}% success
            </span>

            <span className="bg-white/10 px-4 py-2 rounded-full">
              {school.totalParticipants}+ trained
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {school.courses.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex justify-between">
                <span>{c.name}</span>
                <span className="text-gray-400 text-sm">
                  {c.duration}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={prev} className="p-3 bg-white/10 rounded-full">
              <ChevronLeft />
            </button>

            <button onClick={next} className="p-3 bg-white/10 rounded-full">
              <ChevronRight />
            </button>

            <button
              onClick={() => setPlaying(!playing)}
              className="p-3 bg-white/10 rounded-full"
            >
              {playing ? <Pause/> : <Play/>}
            </button>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="h-[640px] rounded-3xl overflow-hidden border border-white/10">
          {geoData && (
            <MapContainer
              center={[20.3, 85.8]}
              zoom={7}
              style={{ height: "100%" }}
            >
              <FlyTo coords={school.location.coords} />

              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

              <GeoJSON
                key={school.location.district}
                data={geoData}
                style={(feature) => {
                  const districtFeature = feature as DistrictFeature | undefined;
                  const active =
                    districtFeature?.properties?.Dist_Name === school.location.district;

                  return {
                    fillOpacity: active ? 0 : 0.25,
                    fillColor: "#020617",
                    color: active ? "#22c55e" : "#334155",
                    weight: active ? 3 : 1,
                    className: active ? "district-glow" : "",
                  };
                }}
              />

              <Marker position={school.location.coords} icon={pulseIcon}>
                <Tooltip permanent direction="top">
                  {school.location.district}
                </Tooltip>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(ITISchoolsCourses);
