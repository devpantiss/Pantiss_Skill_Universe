import React from "react";
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

// Courses by training duration
const durationData = [
  { duration: "6–9", Designated: 12, Optional: 390 },
  { duration: "9–12", Designated: 23, Optional: 734 },
  { duration: "12+", Designated: 243, Optional: 149 },
  { duration: ">24", Designated: 0, Optional: 65 },
];

// Apprentices engaged by qualification
const qualificationData = [
  { qualification: "Below Metric", Designated: -7382, Optional: 207783 },
  { qualification: "10th", Designated: -79934, Optional: 790901 },
  { qualification: "11th", Designated: -300, Optional: 10617 },
  { qualification: "12th", Designated: -39915, Optional: 1112592 },
  { qualification: "Diploma", Designated: -5222, Optional: 307755 },
  { qualification: "ITI", Designated: -1234546, Optional: 276728 },
  { qualification: "Graduate", Designated: -48655, Optional: 612949 },
  { qualification: "Post Graduate", Designated: -6183, Optional: 62048 },
  { qualification: "Others", Designated: -6744, Optional: 24567 },
  { qualification: "Data Not Available", Designated: -3203, Optional: 9731 },
];

/* ===================== COMPONENT ===================== */

const TrainingAndQualificationAnalyticsSection: React.FC = () => {
  return (
    <section className="bg-black text-white p-8 rounded-2xl border border-red-600 mt-4 space-y-6">

      {/* ===================== HEADER ===================== */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">
          Training Duration & Qualification Overview
        </h2>
        <div className="h-[2px] w-40 bg-red-600" />
      </div>

      {/* ===================== CHARTS ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===================== COURSES BY DURATION ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-4">
            Courses by Training Duration (Months)
          </h4>

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={durationData}
                layout="vertical"
                margin={{ left: 40 }}
              >
                <XAxis
                  type="number"
                  stroke="#9ca3af"
                />
                <YAxis
                  type="category"
                  dataKey="duration"
                  stroke="#9ca3af"
                />
                <Tooltip
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

                <Bar
                  dataKey="Designated"
                  stackId="a"
                  fill="#0ea5e9"
                  name="Designated"
                />
                <Bar
                  dataKey="Optional"
                  stackId="a"
                  fill="#312e81"
                  name="Optional"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ===================== ENGAGED BY QUALIFICATION ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-4">
            Apprentices Engaged by Qualification
          </h4>

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={qualificationData}
                layout="vertical"
                margin={{ left: 80 }}
              >
                <XAxis
                  type="number"
                  stroke="#9ca3af"
                />
                <YAxis
                  type="category"
                  dataKey="qualification"
                  stroke="#9ca3af"
                  width={110}
                />
                <Tooltip
                  formatter={(value?: number) => typeof value === 'number' ? Math.abs(value).toLocaleString() : ''}
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

                {/* DESIGNATED (LEFT) */}
                <Bar
                  dataKey="Designated"
                  fill="#86198f"
                  name="Designated"
                />

                {/* OPTIONAL (RIGHT) */}
                <Bar
                  dataKey="Optional"
                  fill="#0d9488"
                  name="Optional"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrainingAndQualificationAnalyticsSection;
