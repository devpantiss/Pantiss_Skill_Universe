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

// Active establishments by apprenticeship engagement band
const engagementBandData = [
  { band: "< 2.5%", active: 26089 },
  { band: "5–10%", active: 19322 },
  { band: "2.5–5%", active: 16641 },
  { band: "10–15%", active: 12921 },
  { band: "> 15%", active: 12635 },
];

// Establishment profile by type
const establishmentTypeData = [
  { type: "Central Government", active: 4412, registered: 148259 },
  { type: "Central PSU", active: 4636, registered: 174722 },
  { type: "Co-Operative", active: 1659, registered: 12353 },
  { type: "Data Not Available", active: 16701, registered: 83 },
  { type: "Private Sector", active: 242792, registered: 4141424 },
  { type: "State Government", active: 23056, registered: 215935 },
  { type: "State PSU", active: 12065, registered: 215935 },
];

/* ===================== COMPONENT ===================== */

const EstablishmentProfileAnalyticsSection: React.FC = () => {
  return (
    <section className="bg-black text-white p-8 rounded-2xl border border-red-600 mt-4 space-y-6">

      {/* ===================== HEADER ===================== */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">
          Establishment Profile Overview
        </h2>
        <div className="h-[2px] w-40 bg-red-600" />
      </div>

      {/* ===================== CHARTS ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ===================== ACTIVE ESTABLISHMENT PROFILE ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-3">
            Active Establishment Profile
          </h4>
          <p className="text-xs text-white/50 mb-4">
            Based on Apprenticeship Engagement Band
          </p>

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementBandData}>
                <XAxis
                  dataKey="band"
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
                    typeof value === "number" ? value.toLocaleString() : ""}
                />

                <Bar
                  dataKey="active"
                  fill="#2563eb"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ===================== ESTABLISHMENT PROFILE BY TYPE ===================== */}
        <div className="border border-white/10 rounded-lg p-4">
          <h4 className="text-sm text-white/70 mb-4">
            Establishment Profile by Type
          </h4>

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={establishmentTypeData}>
                <XAxis
                  dataKey="type"
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

                {/* ACTIVE */}
                <Bar
                  dataKey="active"
                  fill="#2563eb"
                  radius={[4, 4, 0, 0]}
                  name="Active"
                />

                {/* REGISTERED */}
                <Bar
                  dataKey="registered"
                  fill="#f97316"
                  radius={[4, 4, 0, 0]}
                  name="Registered"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EstablishmentProfileAnalyticsSection;