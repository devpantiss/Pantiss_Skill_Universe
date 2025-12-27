import React, { useEffect, useState } from "react";
import {
  Briefcase,
  IndianRupee,
  Building2,
  TrendingUp,
  Users,
  MapPin,
  CheckCircle,
} from "lucide-react";

/* -----------------------------
   DATA
----------------------------- */

const achievers = [
  {
    name: "Rahul Kumar",
    role: "Junior Mechanical Technician",
    company: "Larsen & Toubro (L&T)",
    package: "₹3.6 LPA",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163909/student-5_duxroz.jpg",
  },
  {
    name: "Sunita Devi",
    role: "Electrical Maintenance Technician",
    company: "Tata Power",
    package: "₹3.2 LPA",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163947/student-6_ls3cpe.jpg",
  },
];

const placementHighlights = [
  {
    title: "University-Led Placement Model",
    description:
      "A structured ecosystem integrating industry partnerships, apprenticeships, and on-the-job training pathways.",
    icon: Briefcase,
  },
  {
    title: "Industry & Sector Partnerships",
    description:
      "Engagement with manufacturing, infrastructure, energy, logistics, and EPC sectors for workforce deployment.",
    icon: Building2,
  },
  {
    title: "Career Continuity & Progression",
    description:
      "Focus on sustainable employability through certification, skill depth, and real-world exposure.",
    icon: TrendingUp,
  },
];

const placementStats = [
  {
    label: "Placement / Apprenticeship Rate",
    value: "70–85%",
    icon: CheckCircle,
  },
  {
    label: "Female Candidates Placed",
    value: "38%",
    icon: Users,
  },
  {
    label: "Average Package",
    value: "₹3.2 LPA",
    icon: IndianRupee,
  },
  {
    label: "Active Hiring Partners",
    value: "100+",
    icon: Building2,
  },
  {
    label: "Top Job Roles",
    rotatingValues: ["Technicians", "Operators", "Supervisors"],
    icon: Briefcase,
  },
  {
    label: "Placement Coverage",
    rotatingValues: ["Local", "Regional", "National"],
    icon: MapPin,
  },
];

/* -----------------------------
   STAT CARD
----------------------------- */

const StatCard = ({
  stat,
  delay,
}: {
  stat: {
    label: string;
    value?: string;
    rotatingValues?: string[];
    icon: any;
  };
  delay: number;
}) => {
  const Icon = stat.icon;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!stat.rotatingValues) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stat.rotatingValues!.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [stat.rotatingValues]);

  return (
    <div
      className="
        bg-neutral-900
        border border-neutral-800
        rounded-2xl
        p-8
        min-h-[180px]
        flex
        flex-col
        justify-center
        items-center
        text-center
      "
    >
      <Icon className="w-6 h-6 text-green-500 mb-3" />

      {/* VALUE / ROTATING TEXT */}
      <div className="text-3xl font-semibold mb-2 h-[40px] flex items-center justify-center">
        {stat.value ? (
          stat.value
        ) : (
          <span key={index} className="animate-fadeUp">
            {stat.rotatingValues![index]}
          </span>
        )}
      </div>

      {/* LABEL (STAGGERED) */}
      <div
        className="text-sm text-gray-300 opacity-0"
        style={{
          animation: "fadeUp 600ms ease forwards",
          animationDelay: `${delay}ms`,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
};

/* -----------------------------
   COMPONENT
----------------------------- */

const PlacementsShowcaseSection: React.FC = () => {
  return (
    <section className="bg-black px-4 text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Placements & Career Outcomes
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            A structured university-led placement framework translating skill
            education into sustainable employment outcomes.
          </p>
        </div>

        {/* SYMMETRICAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* LEFT STATS */}
          <div className="space-y-8">
            {placementStats.slice(0, 3).map((stat, i) => (
              <StatCard key={i} stat={stat} delay={i * 200} />
            ))}
          </div>

          {/* CENTER NARRATIVE */}
          <div className="space-y-6">
            {placementHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT STATS */}
          <div className="space-y-8">
            {placementStats.slice(3).map((stat, i) => (
              <StatCard key={i} stat={stat} delay={(i + 3) * 200} />
            ))}
          </div>
        </div>

        {/* ACHIEVERS */}
        {/* =====================
    ACHIEVERS (Modern)
===================== */}
        <div className="space-y-12">
          <h3 className="text-2xl font-semibold text-center">
            Select Placement Achievers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {achievers.map((student, i) => (
              <div
                key={i}
                className="
          relative
          bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800
          border border-neutral-800
          rounded-3xl
          p-8
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl hover:shadow-black/40
        "
              >
                {/* Badge */}
                <span
                  className="
          absolute top-5 right-5
          text-xs font-semibold
          px-3 py-1 rounded-full
          bg-green-500/10 text-green-400
          border border-green-500/20
        "
                >
                  Top Achiever
                </span>

                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="
                w-24 h-24
                object-cover
                rounded-full
                border-2 border-green-500/40
              "
                    />
                    <div
                      className="
              absolute inset-0 rounded-full
              ring-2 ring-green-500/20
            "
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold tracking-tight">
                      {student.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">{student.role}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Building2 className="w-4 h-4 text-green-500" />
                        {student.company}
                      </div>
                      <div className="flex items-center gap-2 font-medium text-white">
                        <IndianRupee className="w-4 h-4 text-green-500" />
                        {student.package}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-400 max-w-5xl mx-auto text-center leading-relaxed">
          * Placement outcomes vary by program, trade, location, and individual
          performance. The university facilitates placements, apprenticeships,
          and employer linkages in line with applicable government and industry
          frameworks.
        </p>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 500ms ease;
        }
      `}</style>
    </section>
  );
};

export default PlacementsShowcaseSection;
