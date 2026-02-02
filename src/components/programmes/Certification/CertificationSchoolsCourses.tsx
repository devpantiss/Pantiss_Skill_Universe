import { memo, useState, useEffect, useCallback } from "react";
import {
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
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
import "leaflet/dist/leaflet.css";

/* =====================================================
   TYPES
===================================================== */

interface Course {
  name: string;
  level: string;
  duration: string;
  enrolled: number;
}

interface School {
  id: string;
  shortName: string;
  description: string;
  image: string;
  gradient: string;
  totalStudents: number;
  successRate: number;
  location: {
    district: string;
    coords: [number, number];
  };
  courses: Course[];
}

/* =====================================================
   SCHOOL DATA + DISTRICTS
===================================================== */

const schools: School[] = [
  {
    id: "mines",
    shortName: "Mines",
    description:
      "Industry-certified programs in mine-site operations, HEMM assistance, and surveying.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451906/dominik-vanyi-Mk2ls9UBO2E-unsplash_1_uk97mb.jpg",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    totalStudents: 2300,
    successRate: 92,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "Mine Operations", level: "Level 4", duration: "6 months", enrolled: 520 },
      { name: "HEMM Assistance", level: "Level 3", duration: "4 months", enrolled: 410 },
    ],
  },
  {
    id: "steel",
    shortName: "Steel & Aluminium",
    description:
      "Certifications focused on furnace operations and metallurgical quality.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451904/ant-rozetsky-_qWeqqmpBpU-unsplash_depnwu.jpg",
    gradient: "from-gray-500/20 via-slate-400/20 to-indigo-500/20",
    totalStudents: 2800,
    successRate: 94,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "Furnace Operations", level: "Level 4", duration: "9 months", enrolled: 650 },
    ],
  },
  {
    id: "power",
    shortName: "Power & Green",
    description:
      "Solar PV, wind technicians and energy auditing programs.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451905/sungrow-emea-VC-m6ULjJ6Y-unsplash_fjglkj.jpg",
    gradient: "from-yellow-400/20 via-green-400/20 to-cyan-400/20",
    totalStudents: 3400,
    successRate: 96,
    location: { district: "Jajapur", coords: [20.85, 86.33] },
    courses: [
      { name: "Solar PV Installer", level: "Level 3", duration: "6 months", enrolled: 900 },
    ],
  },
  {
    id: "shipping",
    shortName: "Shipping & Logistics",
    description:
      "Port, cargo handling and freight certifications.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451912/ozren-cuculic-eBKxooPEU5w-unsplash_jphgdn.jpg",
    gradient: "from-green-400/20 via-cyan-400/20 to-teal-400/20",
    totalStudents: 2000,
    successRate: 91,
    location: { district: "Jagatsinghapur", coords: [20.25, 86.17] },
    courses: [
      { name: "Port & Cargo Handling", level: "Level 3", duration: "5 months", enrolled: 700 },
    ],
  },
  {
    id: "construction",
    shortName: "Construction Tech",
    description:
      "Equipment operations, telematics and preventive maintenance.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200",
    gradient: "from-orange-400/20 via-amber-400/20 to-red-400/20",
    totalStudents: 3700,
    successRate: 90,
    location: { district: "Kendujhar", coords: [21.63, 85.58] },
    courses: [
      { name: "Equipment Operator", level: "Level 4", duration: "8 months", enrolled: 780 },
    ],
  },
];

/* =====================================================
   PULSE ICON
===================================================== */

const pulseIcon = new L.DivIcon({
  className: "",
  html: `<div class="pulse-dot"></div>`,
  iconSize: [16, 16],
});

/* =====================================================
   FLY TO
===================================================== */

const FlyTo = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(coords, 8, { duration: 1.4 });
  }, [coords]);

  return null;
};

/* =====================================================
   COMPONENT
===================================================== */

const CertificationSchoolsWithMap = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((res) => res.json())
      .then(setGeoData);
  }, []);

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
      {/* PREMIUM CSS */}
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
          border-radius:50%;border:2px solid #22c55e;
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
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 px-6">

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
              {school.successRate}% success
            </span>

            <span className="flex items-center gap-2">
              <Users className="text-green-400 w-4" />
              {school.totalStudents}+ students
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {school.courses.map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                {c.name} • {c.level}
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
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="h-[600px] rounded-3xl -z-0 overflow-hidden border border-white/10">
          {geoData && (
            <MapContainer
              center={[20.3, 85.8]}
              zoom={7}
              scrollWheelZoom={false}
              style={{ height: "100%", background: "#020617" }}
            >
              <FlyTo coords={school.location.coords} />

              <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

              <GeoJSON
                key={school.location.district}
                data={geoData}
                style={(feature: any) => {
                  const active =
                    feature.properties.Dist_Name === school.location.district;

                  return {
                    fillColor: active ? "transparent" : "#020617",
                    fillOpacity: active ? 0 : 0.3,
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

export default memo(CertificationSchoolsWithMap);