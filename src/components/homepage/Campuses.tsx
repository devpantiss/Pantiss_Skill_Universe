import React from "react";
import { MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const campuses = [
  {
    campus: "Angul Campus",
    name: "Pantiss Skill Resort",
    district: "Angul, Odisha",
    focus: "Mining",
    bgImage: "/Homepage/campuses/mining.jpg",
  },
  {
    campus: "Kalahandi Campus",
    name: "Pantiss Skill Resort",
    district: "Kalahandi, Odisha",
    focus: "Aviation",
    bgImage: "/Homepage/campuses/aviation.jpg",
  },
  {
    campus: "Paradip Campus",
    name: "Pantiss Skill Resort",
    district: "Jagatsinghpur, Odisha",
    focus: "Shipping & Logistics",
    bgImage: "/Homepage/campuses/shipping.jpg",
  },
  {
    campus: "Jharsuguda Campus",
    name: "Pantiss Skill Resort",
    district: "Jharsuguda, Odisha",
    focus: "Construction Tech & Infra Equipment",
    bgImage: "/Homepage/campuses/construct.jpg",
  },
  {
    campus: "Sukinda Campus",
    name: "Pantiss Skill Resort",
    district: "Jajpur, Odisha",
    focus: "Power & Green Energy",
    bgImage: "/Homepage/campuses/greenenergy.jpg",
  },
  {
    campus: "Joda Campus",
    name: "Pantiss Skill Resort",
    district: "Keonjhar, Odisha",
    focus: "Green Jobs",
    bgImage: "/Homepage/campuses/rise.JPG",
  },
];

const Campuses: React.FC = () => {
  return (
    <section className="relative py-6 px-6 overflow-hidden bg-black text-neutral-100">
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
              style={{ backgroundImage: `url(${campus.bgImage})` }}
              className="
                group relative rounded-2xl bg-transparent overflow-hidden
                bg-cover bg-center
                border border-white/15
              "
            >
              <div
                className="
      absolute inset-0
      bg-gradient-to-t
      from-black/90 via-black/60 to-black/30
      group-hover:from-black/95
      transition-all duration-300
    "
              />

              {/* Content */}
              <div className="relative p-8">
                {/* Accent */}
                <span className="absolute top-0 left-8 h-1 w-16 bg-red-500 rounded-full" />

                {/* Campus */}
                <p className="text-xs uppercase tracking-wide text-neutral-300 mt-4">
                  {campus.campus}
                </p>

                <h3 className="text-xl font-semibold mt-1 text-white">
                  {campus.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-neutral-200 mt-2">
                  <MapPin className="w-4 h-4" />
                  {campus.district}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/30 my-5" />

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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 flex flex-col lg:flex-row items-center justify-center gap-6">
          <img
            src="/Homepage/dash_image_1.png"
            alt=""
            className="w-36 lg:w-44 h-36 lg:h-44 object-contain drop-shadow-xl"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <Link
            to="/skill-dashboard"
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
            className="w-36 lg:w-44 h-36 lg:h-44 object-contain drop-shadow-xl"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Campuses);
