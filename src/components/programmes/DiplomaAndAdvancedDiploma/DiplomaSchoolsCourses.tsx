import { memo, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
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

/* ===============================
   TYPES
================================= */

interface Course {
  name: string;
  nsqfLevel: number;
  duration: string;
  enrolled: number;
}

interface School {
  shortName: string;
  description: string;
  image: string;
  successRate: number;
  totalStudents: number;
  location: {
    district: string;
    coords: [number, number];
  };
  courses: Course[];
}

type DistrictFeature = Feature<Geometry, { Dist_Name?: string }>;

/* ===============================
   DATA
================================= */

const schools: School[] = [
  {
    shortName: "School for Mines",
    description:
      "Hands-on diploma programs for mining technicians covering drilling, blasting, underground safety and operations.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451906/dominik-vanyi-Mk2ls9UBO2E-unsplash_1_uk97mb.jpg",
    successRate: 93,
    totalStudents: 3200,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "Underground Mining", nsqfLevel: 5, duration: "2 yrs", enrolled: 680 },
      { name: "Mine Safety", nsqfLevel: 4, duration: "1.5 yrs", enrolled: 420 },
    ],
  },
  {
    shortName: "Steel & Aluminium",
    description:
      "Plant-floor training in smelting, rolling and furnace operations.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451904/ant-rozetsky-_qWeqqmpBpU-unsplash_depnwu.jpg",
    successRate: 95,
    totalStudents: 2900,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "Steel Plant Ops", nsqfLevel: 5, duration: "2 yrs", enrolled: 720 },
    ],
  },
  {
    shortName: "Shipping & Logistics",
    description:
      "Crane operation, cargo handling and maritime logistics careers.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451912/ozren-cuculic-eBKxooPEU5w-unsplash_jphgdn.jpg",
    successRate: 91,
    totalStudents: 2600,
    location: { district: "Jagatsinghapur", coords: [20.25, 86.17] },
    courses: [
      { name: "Crane Operations", nsqfLevel: 4, duration: "1.5 yrs", enrolled: 820 },
    ],
  },
  {
    shortName: "Power & Green Energy",
    description:
      "Solar, wind and power plant maintenance training.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451905/sungrow-emea-VC-m6ULjJ6Y-unsplash_fjglkj.jpg",
    successRate: 96,
    totalStudents: 3400,
    location: { district: "Jajapur", coords: [20.85, 86.33] },
    courses: [
      { name: "Solar PV", nsqfLevel: 4, duration: "1.5 yrs", enrolled: 980 },
    ],
  },
  {
    shortName: "Construction Tech",
    description:
      "Heavy equipment training including excavators and cranes.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451909/luan-fonseca-azH6gVcRmBE-unsplash_otmxaa.jpg",
    successRate: 94,
    totalStudents: 3800,
    location: { district: "Kendujhar", coords: [21.63, 85.58] },
    courses: [
      { name: "Excavator Ops", nsqfLevel: 4, duration: "1.5 yrs", enrolled: 980 },
    ],
  },
];

/* ===============================
   PULSE ICON
================================= */

const pulseIcon = new L.DivIcon({
  className: "",
  html: `<div class="pulse-dot"></div>`,
  iconSize: [16, 16],
});

/* ===============================
   AUTO FLY MAP
================================= */

const FlyToDistrict = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(coords, 8, {
      duration: 1.4,
    });
  }, [coords, map]);

  return null;
};

/* ===============================
   COMPONENT
================================= */

const DiplomaSchoolsCourses = () => {
  const [geoData, setGeoData] = useState<GeoJsonObject | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((res) => res.json())
      .then(setGeoData);
  }, []);

  const school = schools[index];

  return (
    <section className="bg-black py-20 text-white relative overflow-hidden">
      {/* INLINE PREMIUM CSS */}
      <style>{`

        .district-glow{
          filter: drop-shadow(0 0 6px rgba(34,197,94,0.9))
                  drop-shadow(0 0 14px rgba(34,197,94,0.6));
        }

        .pulse-dot{
          width:14px;
          height:14px;
          border-radius:50%;
          background:#22c55e;
          position:relative;
        }

        .pulse-dot::after{
          content:"";
          position:absolute;
          inset:0;
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
          border:1px solid rgba(34,197,94,.5);
          color:#22c55e;
          font-weight:600;
          border-radius:8px;
          backdrop-filter:blur(6px);
        }

      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT */}
        <div>
          <img
            src={school.image}
            className="rounded-3xl h-[380px] w-full object-cover"
          />

          <h3 className="text-3xl font-bold mt-6">
            {school.shortName}
          </h3>

          <p className="text-gray-300 mt-3">
            {school.description}
          </p>

          <div className="flex gap-6 mt-4 text-sm">
            <span className="flex items-center gap-2">
              <Award className="text-green-400 w-4" />
              {school.successRate}% placement
            </span>

            <span className="flex items-center gap-2">
              <Users className="text-green-400 w-4" />
              {school.totalStudents}+ trained
            </span>
          </div>

          {/* COURSES */}
          <div className="mt-6 grid gap-3">
            {school.courses.map((c, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                {c.name} • Level {c.nsqfLevel}
              </div>
            ))}
          </div>

          {/* NAV */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() =>
                setIndex(prev =>
                  prev === 0 ? schools.length - 1 : prev - 1
                )
              }
              className="p-3 bg-white/10 rounded-full"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setIndex(prev => (prev + 1) % schools.length)
              }
              className="p-3 bg-white/10 rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="h-[600px] -z-0 rounded-3xl overflow-hidden border border-white/10">
          {geoData && (
            <MapContainer
              center={[20.3, 85.8]}
              zoom={7}
              scrollWheelZoom={false}
              style={{ height: "100%", background: "#020617" }}
            >
              <FlyToDistrict coords={school.location.coords} />

              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

              <GeoJSON
                key={school.location.district}
                data={geoData}
                style={(feature) => {
                  const districtFeature = feature as DistrictFeature | undefined;
                  const active =
                    districtFeature?.properties?.Dist_Name ===
                    school.location.district;

                  return {
                    fillColor: active ? "transparent" : "#020617",
                    fillOpacity: active ? 0 : 0.25,
                    color: active ? "#22c55e" : "#334155",
                    weight: active ? 3 : 1,
                    className: active ? "district-glow" : "",
                  };
                }}
              />

              <Marker
                position={school.location.coords}
                icon={pulseIcon}
              >
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

export default memo(DiplomaSchoolsCourses);
