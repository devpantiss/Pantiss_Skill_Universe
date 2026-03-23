import React, { useEffect, useState } from "react";
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
  CartesianGrid,
  Legend,
} from "recharts";

/* ---------------- DATA ---------------- */

const ageGenderData = [
  { age: "15", female: 4000, male: 3000, tg: 200 },
  { age: "16", female: 8000, male: 7000, tg: 300 },
  { age: "17", female: 14000, male: 10000, tg: 500 },
  { age: "18", female: 25000, male: 15000, tg: 700 },
  { age: "19", female: 20000, male: 14000, tg: 600 },
  { age: "20", female: 15000, male: 11000, tg: 500 },
];

const qualificationData = [
  { name: "SSC", female: 18000, male: 16000 },
  { name: "HSC", female: 9000, male: 8000 },
  { name: "Below 10th", female: 4000, male: 3000 },
  { name: "Graduate", female: 2000, male: 1500 },
];

const genderData = [
  { name: "Female", value: 52.3 },
  { name: "Male", value: 47.7 },
  { name: "Transgender", value: 0.2 },
];

const casteData = [
  { name: "General", value: 54.6 },
  { name: "BC", value: 21.6 },
  { name: "EBC", value: 13.5 },
  { name: "SC/ST", value: 8.7 },
];

const COLORS = ["#ec4899", "#3b82f6", "#facc15", "#22c55e"];

/* ---------------- TOOLTIP ---------------- */

const DarkTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 text-xs text-zinc-200 shadow-lg">
      {label && <p className="mb-1 text-zinc-400">{label}</p>}
      {payload.map((item: any) => (
        <p key={item.dataKey} style={{ color: item.color }}>
          {item.name}: {item.value}
        </p>
      ))}
    </div>
  );
};

/* ---------------- ANIMATED KPI CARD ---------------- */

const AnimatedStatCard = React.memo(({
  label,
  value,
}: {
  label: string;
  value: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setCount(Math.floor(eased * value));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="text-2xl font-semibold text-red-600">
        {count.toLocaleString()}
      </p>
    </div>
  );
});

/* ---------------- COMPONENT ---------------- */

const EnrollmentAnalyticsSection: React.FC = () => {
  const leftStats: [string, number][] = [
    ["Departments", 21],
    ["Schemes", 25],
    ["Running Courses", 329],
    ["Training Partners", 726],
    ["Functional Centers", 1428],
    ["Approved Batches", 9397],
    ["Ongoing", 13270],
  ];

  const rightStats: [string, number][] = [
    ["Training Over", 247607],
    ["Dropout", 13300],
    ["Assessed", 159932],
    ["Certified", 151718],
    ["Failed", 8024],
    ["Assessment Dropout", 3059],
    ["Placed", 30752],
  ];

  return (
    <section className="bg-zinc-950 border border-zinc-800 rounded-xl mt-4 p-6">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-zinc-100 mb-6 border-l-4 border-red-600 pl-3">
        Enrollment Analysis by Age, Gender, Qualification, Caste Category, Religion
      </h2>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT KPI COLUMN */}
        <div className="col-span-12 lg:col-span-2 space-y-4">
          {leftStats.map(([label, value]) => (
            <AnimatedStatCard key={label} label={label} value={value} />
          ))}
        </div>

        {/* CENTER CHARTS */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* PRIMARY INSIGHT */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-sm font-semibold text-zinc-200 mb-4 tracking-wide">
              PRIMARY INSIGHT
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-[360px]">
              <p className="text-sm text-zinc-300 mb-2 font-medium">
                Age-wise Enrollment by Gender
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageGenderData}>
                  <CartesianGrid stroke="#27272a" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="age" tick={{ fill: "#a1a1aa", fontSize: 12 }} />
                  <YAxis tick={{ fill: "#a1a1aa", fontSize: 12 }} />
                  <Tooltip content={<DarkTooltip />} />
                  <Legend />
                  <Bar dataKey="female" stackId="a" fill="#ec4899" />
                  <Bar dataKey="male" stackId="a" fill="#3b82f6" />
                  <Bar dataKey="tg" stackId="a" fill="#facc15" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* SUPPORTING INSIGHTS */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <p className="text-sm font-semibold text-zinc-200 mb-4 tracking-wide">
              SUPPORTING INSIGHTS
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Qualification */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-[260px]">
                <p className="text-sm text-zinc-300 mb-2">
                  Qualification-wise Enrollment
                </p>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={qualificationData} layout="vertical">
                    <CartesianGrid stroke="#27272a" strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" tick={{ fill: "#a1a1aa" }} />
                    <YAxis type="category" dataKey="name" tick={{ fill: "#a1a1aa" }} />
                    <Tooltip content={<DarkTooltip />} />
                    <Bar dataKey="female" stackId="a" fill="#ec4899" />
                    <Bar dataKey="male" stackId="a" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Gender */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-[260px]">
                <p className="text-sm text-zinc-300 mb-2">Gender Distribution</p>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip content={<DarkTooltip />} />
                    <Legend />
                    <Pie data={genderData} dataKey="value" innerRadius={55} outerRadius={80}>
                      {genderData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Caste */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 h-[260px]">
                <p className="text-sm text-zinc-300 mb-2">Caste Category Distribution</p>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip content={<DarkTooltip />} />
                    <Legend />
                    <Pie data={casteData} dataKey="value" innerRadius={50} outerRadius={80}>
                      {casteData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT KPI COLUMN */}
        <div className="col-span-12 lg:col-span-2 space-y-4">
          {rightStats.map(([label, value]) => (
            <AnimatedStatCard key={label} label={label} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(EnrollmentAnalyticsSection);
