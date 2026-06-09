import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/* ===================== DATA ===================== */

const rawData = [
  {
    course: "Electrician",
    Male: 296599,
    Female: 19106,
    Transgender: 0,
  },
  {
    course: "Fitter",
    Male: 285882,
    Female: 9800,
    Transgender: 0,
  },
  {
    course: "Automotive Assembly Operator",
    Male: 193196,
    Female: 42902,
    Transgender: 0,
  },
  {
    course: "Automotive Assembly Technician",
    Male: 122301,
    Female: 29322,
    Transgender: 0,
  },
  {
    course: "Assembly Line Operator",
    Male: 101648,
    Female: 21743,
    Transgender: 0,
  },
  {
    course: "Customer Care Executive – Domestic Voice V3",
    Male: 62655,
    Female: 50816,
    Transgender: 0,
  },
  {
    course: "Computer Operator & Programming Assistant",
    Male: 51870,
    Female: 46781,
    Transgender: 0,
  },
  {
    course: "Retail Trainee Associate",
    Male: 64389,
    Female: 29154,
    Transgender: 0,
  },
  {
    course: "Welder (Gas and Electric)",
    Male: 86806,
    Female: 0,
    Transgender: 0,
  },
  {
    course: "Assembly Line Operator V3.0",
    Male: 58617,
    Female: 16875,
    Transgender: 0,
  },
];

/* ===================== COLORS ===================== */

const genderColors: Record<string, string> = {
  Male: "#f97316",
  Female: "#4f46e5",
  Transgender: "#a855f7",
};

type Gender = "Male" | "Female" | "Transgender";
const genders: Gender[] = ["Female", "Male", "Transgender"];

/* ===================== COMPONENT ===================== */

const TopEnrolledCoursesSection: React.FC = () => {
  const [activeGender, setActiveGender] = useState<
    "All" | Gender
  >("All");

  const chartData =
    activeGender === "All"
      ? rawData
      : rawData.map((r) => ({
          course: r.course,
          [activeGender]: r[activeGender],
        }));

  return (
    <section className="bg-black text-white p-8 rounded-2xl border border-red-600 mt-4 space-y-6">

      {/* ===================== HEADER ===================== */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">
          Top 10 Enrolled Courses
        </h2>

        {/* ===================== GENDER TOGGLE ===================== */}
        <div className="flex border border-white/20 rounded-lg overflow-hidden">
          {genders.map((g) => (
            <button
              type="button"
              key={g}
              onClick={() => setActiveGender(g)}
              className={`px-4 py-2 text-sm transition ${
                activeGender === g
                  ? "bg-red-600 text-white"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* ===================== CHART ===================== */}
      <div className="border border-white/10 rounded-lg p-4">
        <div className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis
                dataKey="course"
                stroke="#9ca3af"
                tick={{ fontSize: 11 }}
                interval={0}
                angle={-15}
                textAnchor="end"
              />
              <YAxis
                stroke="#9ca3af"
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                formatter={(value: number | undefined) => 
                  (typeof value === "number" ? value.toLocaleString() : "")}
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1f2937",
                  color: "#f9fafb",
                }}
              />
              <Legend
                verticalAlign="bottom"
                wrapperStyle={{ color: "#9ca3af", fontSize: 12 }}
              />

              {activeGender === "All" ? (
                <>
                  <Bar dataKey="Male" stackId="a" fill={genderColors.Male} />
                  <Bar dataKey="Female" stackId="a" fill={genderColors.Female} />
                  <Bar
                    dataKey="Transgender"
                    stackId="a"
                    fill={genderColors.Transgender}
                  />
                </>
              ) : (
                <Bar
                  dataKey={activeGender}
                  fill={genderColors[activeGender]}
                  radius={[4, 4, 0, 0]}
                />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default TopEnrolledCoursesSection;
