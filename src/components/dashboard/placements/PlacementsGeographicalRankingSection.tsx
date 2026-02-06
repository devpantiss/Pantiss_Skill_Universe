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
/* Apprentices Placed – Geographical Ranking */

const data = [
  { state: "Maharashtra", Designated: 292978, Optional: 953720 },
  { state: "Gujarat", Designated: 257902, Optional: 268047 },
  { state: "Tamil Nadu", Designated: 61123, Optional: 424534 },
  { state: "Karnataka", Designated: 79421, Optional: 325112 },
  { state: "Uttar Pradesh", Designated: 130127, Optional: 242129 },
  { state: "Haryana", Designated: 153583, Optional: 210623 },
  { state: "Telangana", Designated: 61902, Optional: 145722 },
  { state: "West Bengal", Designated: 26813, Optional: 115254 },
  { state: "Madhya Pradesh", Designated: 43982, Optional: 85033 },
  { state: "Delhi", Designated: 23255, Optional: 97879 },
  { state: "Andhra Pradesh", Designated: 29262, Optional: 77779 },
  { state: "Rajasthan", Designated: 33430, Optional: 70822 },
  { state: "Uttarakhand", Designated: 21218, Optional: 82807 },
  { state: "Punjab", Designated: 25913, Optional: 60544 },
];

/* ===================== COMPONENT ===================== */

const PlacementsGeographicalRankingSection: React.FC = () => {
  return (
    <section className="bg-black text-white p-8 rounded-2xl border border-red-600 mt-4 space-y-6">

      {/* ===================== HEADER ===================== */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">
          Apprentices Placed by Geographical Ranking
        </h2>
        <div className="h-[2px] w-44 bg-red-600" />
      </div>

      {/* ===================== CHART ===================== */}
      <div className="border border-white/10 rounded-lg p-4">
        <div className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="state"
                stroke="#9ca3af"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                stroke="#9ca3af"
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1f2937",
                  color: "#f9fafb",
                }}
                formatter={(value?: number) =>
                  typeof value === "number" ? value.toLocaleString() : ""
                }
              />

              <Legend
                verticalAlign="bottom"
                wrapperStyle={{
                  color: "#9ca3af",
                  fontSize: 12,
                  marginTop: 12,
                }}
              />

              {/* DESIGNATED */}
              <Bar
                dataKey="Designated"
                fill="#0ea5e9"
                radius={[4, 4, 0, 0]}
              />

              {/* OPTIONAL */}
              <Bar
                dataKey="Optional"
                fill="#312e81"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ===================== FOOTNOTE ===================== */}
        <p className="text-xs text-white/50 mt-3">
          * Designated / Optional refers to employer classification under placement guidelines
        </p>
      </div>
    </section>
  );
};

export default PlacementsGeographicalRankingSection;
