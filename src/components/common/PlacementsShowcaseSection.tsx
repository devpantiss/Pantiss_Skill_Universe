import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Briefcase,
  IndianRupee,
  Building2,
  TrendingUp,
  Users,
  MapPin,
  CheckCircle,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  {
    name: "Amit Singh",
    role: "Plant Operator",
    company: "JSW Steel",
    package: "₹3.4 LPA",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163909/student-5_duxroz.jpg",
  },
  {
    name: "Neha Kumari",
    role: "Quality Technician",
    company: "UltraTech Cement",
    package: "₹3.1 LPA",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163947/student-6_ls3cpe.jpg",
  },
  {
    name: "Suresh Mahto",
    role: "Maintenance Supervisor",
    company: "Tata Projects",
    package: "₹3.8 LPA",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762163909/student-5_duxroz.jpg",
  },
];

/* -----------------------------
   PLACEMENT DATA
----------------------------- */

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
      "Engagement with manufacturing, infrastructure, energy, logistics, and EPC sectors.",
    icon: Building2,
  },
  {
    title: "Career Continuity & Progression",
    description:
      "Focus on sustainable employability through certification, skill depth, and real exposure.",
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

const StatCard = ({ stat }: any) => {
  const Icon = stat.icon;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!stat.rotatingValues) return;
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % stat.rotatingValues.length),
      1800,
    );
    return () => clearInterval(interval);
  }, [stat.rotatingValues]);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
      <Icon className="w-6 h-6 text-green-500 mx-auto mb-3" />
      <div className="text-3xl font-semibold mb-2 h-[40px]">
        {stat.value || stat.rotatingValues[index]}
      </div>
      <p className="text-sm text-gray-300">{stat.label}</p>
    </div>
  );
};

/* -----------------------------
   ACHIEVERS SLIDER (2 CARDS)
----------------------------- */

const achieverSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

/* -----------------------------
   COMPONENT
----------------------------- */

const PlacementsShowcaseSection: React.FC = () => {
  return (
    <section className="bg-black px-4 py-4 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            Placements & Career Outcomes
          </h2>
          <p className="mt-4 text-gray-300">
            A structured university-led placement framework translating skill
            education into real employment outcomes.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-8">
            {placementStats.slice(0, 3).map((s, i) => (
              <StatCard key={i} stat={s} />
            ))}
          </div>

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
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-8">
            {placementStats.slice(3).map((s, i) => (
              <StatCard key={i} stat={s} />
            ))}
          </div>
        </div>

        {/* ACHIEVERS CAROUSEL */}
        <div className="space-y-12">
          <h3 className="text-2xl font-semibold text-center">
            Select Placement Achievers
          </h3>

          <Slider {...achieverSliderSettings}>
            {achievers.map((student, i) => (
              <div key={i} className="px-4">
                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-6">
                    {/* LEFT : Avatar + Name */}
                    <div className="flex flex-col items-center min-w-[120px]">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-green-500/40 mb-3"
                      />
                      <h4 className="text-sm font-semibold text-center">
                        {student.name}
                      </h4>
                    </div>

                    {/* RIGHT : Details */}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-300 mb-4">
                        {student.role}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Building2 className="w-4 h-4 text-green-500" />
                          <span>{student.company}</span>
                        </div>

                        <div className="flex items-center gap-2 font-semibold text-white">
                          <IndianRupee className="w-4 h-4 text-green-500" />
                          <span>{student.package}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-400 text-center max-w-5xl mx-auto">
          * Placement outcomes vary by program, trade, location, and individual
          performance.
        </p>
      </div>
    </section>
  );
};

export default PlacementsShowcaseSection;
