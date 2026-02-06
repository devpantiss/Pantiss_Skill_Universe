import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

/* ===================== DATA ===================== */

// Gender-wise placement engagement
const genderData = [
  {
    category: "Optional",
    Male: 2535671,
    Female: 881000,
    Transgender: 9000,
    "Data Not Available": 12000,
  },
  {
    category: "Designated",
    Male: 1275084,
    Female: 143000,
    Transgender: 5000,
    "Data Not Available": 4000,
  },
];

// Social category-wise placement engagement
const socialCategoryData = [
  { name: "General", value: 2675512 },
  { name: "OBC", value: 1437441 },
  { name: "SC", value: 593817 },
  { name: "ST", value: 226727 },
  { name: "Minority", value: 13182 },
  { name: "Data Not Available", value: 1273 },
];

/* ===================== COLORS ===================== */

const genderColors: Record<string, string> = {
  Male: "#f97316",
  Female: "#4f46e5",
  Transgender: "#a855f7",
  "Data Not Available": "#38bdf8",
};

const socialColors = [
  "#0ea5e9", // General
  "#312e81", // OBC
  "#f97316", // SC
  "#9333ea", // ST
  "#64748b", // Minority
  "#22c55e", // DNA
];

/* ===================== COMPONENT ===================== */

const PlacementsDiversityAnalyticsSection: React.FC = () => {
  return (
    <section className="bg-black text-white p-8 rounded-2xl border border-red-600 mt-4 space-y-6">

      {/* ===================== HEADER ===================== */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">
          Placements Diversity Overview
        </h2>
        <div className="h-[2px] w-32 bg-red-600" />
      </div>

      {/* ===================== CHARTS ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===================== GENDER STACKED BAR ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-4">
            Apprentices Placed by Gender
          </h4>

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={genderData}>
                <XAxis
                  dataKey="category"
                  stroke="#9ca3af"
                />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    border: "1px solid #1f2937",
                    color: "#f9fafb",
                  }}
                />

                {Object.keys(genderColors).map((key) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    fill={genderColors[key]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-xs text-white/50 mt-3">
            * Optional / Designated refers to employer category under placement norms
          </p>
        </div>

        {/* ===================== SOCIAL CATEGORY DONUT ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-4">
            Apprentices Placed by Social Category
          </h4>

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={socialCategoryData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={2}
                >
                  {socialCategoryData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={socialColors[i % socialColors.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    border: "1px solid #1f2937",
                    color: "#f9fafb",
                  }}
                />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                  wrapperStyle={{ color: "#9ca3af", fontSize: 12 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlacementsDiversityAnalyticsSection;
