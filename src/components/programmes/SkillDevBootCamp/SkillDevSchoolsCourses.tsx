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

/* =====================================================
   DATA WITH LOCATIONS
===================================================== */

const schools: School[] = [
  {
    id: "mining",
    shortName: "Mining Ops",
    description:
      "Safety-first mine operations bootcamp focused on equipment basics and rapid job readiness.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451906/dominik-vanyi-Mk2ls9UBO2E-unsplash_1_uk97mb.jpg",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    totalParticipants: 1620,
    successRate: 92,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "Mine Safety Essentials", skillLevel: "Basic", duration: "2 weeks", participants: 420 },
      { name: "HEMM Worksite Protocol", skillLevel: "Basic", duration: "3 weeks", participants: 320 },
    ],
  },
  {
    id: "steel",
    shortName: "Steel & Aluminium",
    description:
      "Shop-floor welding, fabrication and safety bootcamps for industrial roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451904/ant-rozetsky-_qWeqqmpBpU-unsplash_depnwu.jpg",
    gradient: "from-gray-600/20 via-slate-500/20 to-red-500/20",
    totalParticipants: 1840,
    successRate: 90,
    location: { district: "Angul", coords: [20.84, 85.15] },
    courses: [
      { name: "Welding Foundations", skillLevel: "Basic", duration: "3 weeks", participants: 600 },
    ],
  },
  {
    id: "power",
    shortName: "Power & Green",
    description:
      "Electrical and solar PV bootcamps bridging conventional and renewable power.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451905/sungrow-emea-VC-m6ULjJ6Y-unsplash_fjglkj.jpg",
    gradient: "from-yellow-400/20 via-green-400/20 to-cyan-400/20",
    totalParticipants: 2060,
    successRate: 94,
    location: { district: "Jajapur", coords: [20.85, 86.33] },
    courses: [
      { name: "Electrical Wiring Basics", skillLevel: "Basic", duration: "3 weeks", participants: 680 },
    ],
  },
  {
    id: "shipping",
    shortName: "Logistics",
    description:
      "Rapid placement bootcamps for ports, cargo and warehouse roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451912/ozren-cuculic-eBKxooPEU5w-unsplash_jphgdn.jpg",
    gradient: "from-blue-400/20 via-cyan-400/20 to-teal-400/20",
    totalParticipants: 1380,
    successRate: 91,
    location: { district: "Jagatsinghapur", coords: [20.25, 86.17] },
    courses: [
      { name: "Port Cargo Handling", skillLevel: "Basic", duration: "2 weeks", participants: 540 },
    ],
  },
  {
    id: "ev",
    shortName: "Electric Vehicles",
    description:
      "EV servicing and battery safety bootcamps for e-mobility careers.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451903/chuttersnap-xJLsHl0hIik-unsplash_1_pmlvht.jpg",
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-400/20",
    totalParticipants: 1260,
    successRate: 95,
    location: { district: "Cuttack", coords: [20.46, 85.88] },
    courses: [
      { name: "EV Technician Foundations", skillLevel: "Basic", duration: "3 weeks", participants: 540 },
    ],
  },
  {
    id: "construction",
    shortName: "Construction",
    description:
      "Site-ready bootcamps covering formwork, machinery awareness and safety.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451909/luan-fonseca-azH6gVcRmBE-unsplash_otmxaa.jpg",
    gradient: "from-amber-300/20 via-rose-300/20 to-slate-400/20",
    totalParticipants: 1720,
    successRate: 89,
    location: { district: "Kendujhar", coords: [21.63, 85.58] },
    courses: [
      { name: "Site Safety", skillLevel: "Basic", duration: "2 weeks", participants: 560 },
    ],
  },
  {
    id: "water",
    shortName: "Water & FM",
    description:
      "Facility support and pump operations bootcamps for institutional environments.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451908/gallery-ds-X_tEarX6svc-unsplash_sy31wa.jpg",
    gradient: "from-teal-400/20 via-emerald-400/20 to-blue-400/20",
    totalParticipants: 1480,
    successRate: 90,
    location: { district: "Baleshwar", coords: [21.49, 86.94] },
    courses: [
      { name: "Pump Operator Basics", skillLevel: "Basic", duration: "3 weeks", participants: 520 },
    ],
  },
];

/* =====================================================
   MAP HELPERS
===================================================== */

const pulseIcon = new L.DivIcon({
  className: "",
  html: `<div class="pulse-dot"></div>`,
  iconSize: [14, 14],
});

const FlyTo = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(coords, 8, { duration: 1.5 });
  }, [coords]);

  return null;
};

/* =====================================================
   COMPONENT
===================================================== */

const SkillDevSchoolsCourses = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    fetch("/map/Orissa.geojson")
      .then((res) => res.json())
      .then(setGeoData);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % schools.length);
    }, 4500);
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
    <section className="bg-black py-24 text-white">
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
        <div className="h-[640px] -z-0 rounded-3xl overflow-hidden border border-white/10">
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
                style={(f: any) => {
                  const active =
                    f.properties.Dist_Name === school.location.district;

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

export default memo(SkillDevSchoolsCourses);