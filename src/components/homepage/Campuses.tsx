import React from "react";
import { MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const campuses = [
  {
    campus: "Angul Campus",
    name: "Pantiss Skill Resort",
    district: "Angul, Odisha",
    focus: "Mining",
  },
  {
    campus: "Kalahandi Campus",
    name: "Pantiss Skill Resort",
    district: "Kalahandi, Odisha",
    focus: "Aviation",
  },
  {
    campus: "Paradip Campus",
    name: "Pantiss Skill Resort",
    district: "Jagatsinghpur, Odisha",
    focus: "Shipping & Logistics",
  },
  {
    campus: "Jharsuguda Campus",
    name: "Pantiss Skill Resort",
    district: "Jharsuguda, Odisha",
    focus: "Construction Tech & Infra Equipment",
  },
  {
    campus: "Sukinda Campus",
    name: "Pantiss Skill Resort",
    district: "Jajpur, Odisha",
    focus: "Power & Green Energy",
  },
  {
    campus: "Joda Campus",
    name: "Pantiss Skill Resort",
    district: "Keonjhar, Odisha",
    focus: "Green Jobs",
  },
];

const Campuses: React.FC = () => {
  return (
    <section className="relative py-6 px-6 overflow-hidden bg-black text-neutral-100">
      {/* 🌌 Scattered Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[8%] left-[12%] w-80 h-80 bg-red-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[18%] right-[8%] w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute top-[32%] right-[22%] w-96 h-96 bg-green-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[28%] w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute top-[55%] left-[4%] w-64 h-64 bg-amber-500/20 rounded-full blur-2xl" />
        <div className="absolute top-[6%] right-[4%] w-56 h-56 bg-blue-500/20 rounded-full blur-2xl" />
      </div>

      {/* 🧊 Content */}
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our Campuses
          </h1>
          <p className="mt-6 text-neutral-300 max-w-3xl mx-auto text-base leading-relaxed">
            Pantiss Skill Resorts are specialised training campuses designed as
            immersive learning ecosystems, aligned with high-growth and
            future-ready sectors.
          </p>
        </div>

        {/* Campuses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-8
                         backdrop-blur-md bg-white/10 border border-white/15
                         transition-all duration-300
                         hover:bg-white/15 hover:border-white/30 hover:-translate-y-1"
            >
              {/* Accent */}
              <span className="absolute top-0 left-8 h-1 w-16 bg-red-500 rounded-full" />

              {/* Campus */}
              <p className="text-xs uppercase tracking-wide text-neutral-400 mt-4">
                {campus.campus}
              </p>

              <h3 className="text-xl font-semibold mt-1">
                {campus.name}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-neutral-300 mt-2">
                <MapPin className="w-4 h-4" />
                {campus.district}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/20 my-5" />

              {/* Focus */}
              <div className="flex gap-3 text-sm text-neutral-200 leading-relaxed">
                <Briefcase className="w-4 h-4 mt-1 text-neutral-300" />
                <p>
                  <span className="font-medium text-white">
                    Sector focus:
                  </span>{" "}
                  {campus.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 flex flex-col lg:flex-row items-center justify-center gap-6">
          <img
            src="/Homepage/dash_image_1.png"
            alt=""
            className="w-36 lg:w-44 h-36 lg:h-44 object-contain drop-shadow-xl animate-bounce"
            aria-hidden="true"
          />

          <Link
            to="/dashboard"
            className="px-8 py-4 bg-green-600
                       text-white font-semibold rounded-xl
                       shadow-lg shadow-green-600/30
                       hover:scale-[1.03] transition-all duration-300"
          >
            Explore Skill & Jobs Dashboard
          </Link>

          <img
            src="/Homepage/dash_image_2.png"
            alt=""
            className="w-36 lg:w-44 h-36 lg:h-44 object-contain drop-shadow-xl animate-bounce"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Campuses;
