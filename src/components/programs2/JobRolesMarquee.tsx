import React from "react";
import Marquee from "react-fast-marquee";
import {
  HardHat,
  Factory,
  Zap,
  Ship,
  Truck,
  Building2,
  Droplet,
} from "lucide-react";

const jobCategories = [
  {
    industry: "Mining",
    icon: <HardHat className="w-5 h-5" />,
    roles: [
      "Mine Helper",
      "Drill Operator",
      "Blaster",
      "Haul Truck Driver",
      "Loader Operator",
      "Mine Safety Assistant",
      "Maintenance Fitter (Mines)",
    ],
  },
  {
    industry: "Steel & Aluminium",
    icon: <Factory className="w-5 h-5" />,
    roles: [
      "Furnace Operator",
      "Crane Operator",
      "Casting Helper",
      "Rolling Mill Worker",
      "Welder",
      "Maintenance Technician",
      "Material Handler",
    ],
  },
  {
    industry: "Power & Green Energy",
    icon: <Zap className="w-5 h-5" />,
    roles: [
      "Solar Panel Installer",
      "Wind Turbine Technician",
      "Boiler Operator",
      "Turbine Maintenance Worker",
      "Line Technician",
      "Electrical Fitter",
      "Battery Assembly Worker",
    ],
  },
  {
    industry: "Shipping & Logistics",
    icon: <Ship className="w-5 h-5" />,
    roles: [
      "Dock Worker",
      "Cargo Handler",
      "Forklift Operator",
      "Warehouse Assistant",
      "Container Loader",
      "Seafarer Helper",
      "Port Equipment Technician",
    ],
  },
  {
    industry: "Electric Vehicles",
    icon: <Truck className="w-5 h-5" />,
    roles: [
      "EV Assembly Line Operator",
      "Battery Technician",
      "Charging Station Attendant",
      "Motor Assembly Worker",
      "Wiring Technician",
      "Testing & Quality Assistant",
      "Maintenance Fitter (EV Plant)",
    ],
  },
  {
    industry: "Construction Tech & Infra Equipments",
    icon: <Building2 className="w-5 h-5" />,
    roles: [
      "Construction Helper",
      "Excavator Operator",
      "Mason",
      "Bar Bender",
      "Crane Operator",
      "Concrete Technician",
      "Survey Assistant",
    ],
  },
  {
    industry: "Water, Sanitation & Facility Management",
    icon: <Droplet className="w-5 h-5" />,
    roles: [
      "Plumber",
      "Water Supply Technician",
      "Sewage Treatment Operator",
      "Waste Segregation Worker",
      "Facility Cleaner",
      "Maintenance Electrician",
      "Community Sanitation Worker",
    ],
  },
];

const CoreIndustriesJobRolesMarquee: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">

      {/* Enhanced Background with Depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0b0202]" />

        {/* Floating Glassmorphic Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 60px)",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="inline-block text-[10px] uppercase tracking-[0.3em] text-red-500/80 mb-6 font-semibold">
            PSMSA • Programs • Industry Roles
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Core Industry <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-red-500/50">Job Roles</span>
          </h2>

          <p className="mt-4 text-white/70 max-w-3xl mx-auto text-base">
            Industry-aligned blue-collar job roles under PSMSA programs,
            designed to meet workforce requirements across multiple sectors.
          </p>
        </div>

        {/* Industry Blocks */}
        <div className="space-y-10">
          {jobCategories.map((category, index) => (
            <div
              key={category.industry}
              className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 items-stretch group/row"
            >
              {/* Glassmorphic Industry Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-6 py-5 flex items-center gap-5 transition-all duration-500 group-hover/row:bg-white/[0.06] group-hover/row:border-red-500/30">
                <div className="h-12 w-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500/90 shadow-[0_0_20px_rgba(220,38,38,0.1)] transition-transform duration-500 group-hover/row:scale-110">
                  {category.icon}
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-medium">
                    Sector
                  </p>
                  <p className="text-lg font-semibold tracking-tight leading-tight">
                    {category.industry}
                  </p>
                </div>
                {/* Subtle row inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.02] to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Roles Marquee Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm px-4 py-4 flex items-center">
                {/* Edge Fades */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0b0202] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0b0202] to-transparent z-10" />

                <Marquee
                  gradient={false}
                  speed={30 + Math.random() * 10}
                  direction={index % 2 === 0 ? "left" : "right"}
                  pauseOnHover
                >
                  <div className="flex gap-4 pr-6">
                    {category.roles.map((role, idx) => (
                      <div
                        key={idx}
                        className="
                          group/pill relative
                          px-6 py-3 rounded-full
                          text-sm font-medium whitespace-nowrap
                          bg-white/[0.03] border border-green-600
                          text-white/70
                          hover:text-white
                          transition-all duration-300
                          cursor-default
                        "
                      >
                        <span className="relative inline-flex items-center justify-center mr-3">
                          <span className="absolute h-2.5 w-2.5 rounded-full bg-red-500/10 animate-ping" />
                          <span className="relative h-1.5 w-1.5 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                        </span>
                        {role}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </section>
  );
};

export default CoreIndustriesJobRolesMarquee;