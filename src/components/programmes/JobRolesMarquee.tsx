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
    icon: <HardHat className="w-6 h-6" />,
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
    icon: <Factory className="w-6 h-6" />,
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
    icon: <Zap className="w-6 h-6" />,
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
    icon: <Ship className="w-6 h-6" />,
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
    icon: <Truck className="w-6 h-6" />,
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
    icon: <Building2 className="w-6 h-6" />,
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
    icon: <Droplet className="w-6 h-6" />,
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

const JobRolesMarquee = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 40 L60 40 L60 60 L40 60 Z\' stroke=\'%23ffffff\' stroke-width=\'1\' fill=\'none\' /%3E%3Cpath d=\'M35 50 A15 15 0 1 0 65 50 A15 15 0 1 0 35 50 Z\' stroke=\'%23ffffff\' stroke-width=\'1\' fill=\'none\' /%3E%3C/svg%3E')]"></div>
      </div>

      {/* Gradient Lighting Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500 rounded-full filter blur-[120px] opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-[100px] opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-green-400">Blue Collar Job Roles</span> Across
            Industries
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore opportunities in emerging industrial and green sectors with
            our skill programs.
          </p>
        </div>

        {/* Job Roles Marquees */}
        <div className="space-y-4 pb-12">
          {jobCategories.map((category, index) => (
            <div key={category.industry} className="flex items-center gap-4 group">
              <div
                className="flex items-center gap-2 px-4 py-3 w-64 bg-transparent backdrop-blur-md border border-green-400 rounded-full font-bold text-sm md:text-base text-white transition-all duration-300 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
                aria-label={`Industry: ${category.industry}`}
              >
                {React.cloneElement(category.icon, {
                  className:
                    "w-6 h-6 group-hover:text-green-400 transition-colors duration-300",
                })}
                <span>{category.industry}</span>
              </div>

              <div className="flex-1 overflow-hidden">
                <Marquee
                  gradient={false}
                  direction={index % 2 === 0 ? "left" : "right"}
                  speed={40}
                  pauseOnHover={true}
                  className="py-1"
                >
                  <div className="flex gap-4">
                    {category.roles.map((role, idx) => (
                      <div
                        key={idx}
                        className={`
                          px-6 py-3 rounded-full font-medium text-sm md:text-base whitespace-nowrap
                          transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                          ${index % 2 === 0
                            ? 'bg-red-500/10 text-red-400 border border-red-500 hover:bg-red-500/20 hover:text-red-300 hover:shadow-red-500/20'
                            : 'bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 hover:text-green-300 hover:shadow-green-500/20'
                          }
                        `}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Gradient Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-black to-green-500"></div>
      </div>
    </section>
  );
};

export default JobRolesMarquee;
