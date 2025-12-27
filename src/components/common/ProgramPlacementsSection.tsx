import React from "react";
import {
  Briefcase,
  Building2,
  TrendingUp,
  Users,
  MapPin,
  CheckCircle,
} from "lucide-react";

const placementHighlights = [
  {
    title: "Placement & Apprenticeship Outcomes",
    description:
      "Graduates are placed through a mix of direct employment, National Apprenticeship Promotion Scheme (NAPS), and on-the-job training pathways.",
    icon: Briefcase,
  },
  {
    title: "Strong Industry Partnerships",
    description:
      "Active placement tie-ups with manufacturing units, infrastructure companies, EPC contractors, logistics firms, and service providers.",
    icon: Building2,
  },
  {
    title: "Career Progression Focus",
    description:
      "Programs are designed to enable long-term career growth, not just entry-level placement, through skill depth and industry exposure.",
    icon: TrendingUp,
  },
];

const placementStats = [
  {
    label: "Overall Placement / Apprenticeship Rate",
    value: "70–85%",
    icon: CheckCircle,
  },
  {
    label: "Active Hiring Partners",
    value: "100+",
    icon: Users,
  },
  {
    label: "Placement Locations",
    value: "Local • Regional • National",
    icon: MapPin,
  },
];

const ProgramPlacementsSection: React.FC = () => {
  return (
    <section className="bg-black py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Placements & Career Outcomes
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Structured placement support aligned with industry demand, regional
            employment opportunities, and national skilling frameworks.
          </p>
        </div>

        {/* Placement Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {placementHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  bg-neutral-900
                  border border-neutral-800
                  rounded-2xl
                  p-8
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-green-500" />
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {placementStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="
                  bg-neutral-900
                  border border-neutral-800
                  rounded-2xl
                  p-8
                  text-center
                "
              >
                <Icon className="w-6 h-6 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-semibold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Transparency */}
        <div className="mt-12 max-w-4xl">
          <p className="text-xs text-gray-400 leading-relaxed">
            * Placement outcomes vary by trade, location, and individual
            performance. Placement support includes employer linkage,
            apprenticeship facilitation, and career counseling, in line with
            applicable government and industry guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramPlacementsSection;
