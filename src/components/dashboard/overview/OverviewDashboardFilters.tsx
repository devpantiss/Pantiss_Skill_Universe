import React, { useEffect, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type DropdownFilter = {
  label: string;
  options: Option[];
};

const dropdownFilters: DropdownFilter[] = [
  { label: "Department", options: [{ label: "Skill Development", value: "skill" }] },
  { label: "Programme", options: [{ label: "PMKVY", value: "pmkvy" }] },
  { label: "Scheme", options: [{ label: "State Scheme", value: "state" }] },
  { label: "District", options: [{ label: "Keonjhar", value: "keonjhar" }] },
  { label: "Block", options: [{ label: "Joda", value: "joda" }] },
  { label: "ULB", options: [{ label: "Municipality", value: "municipality" }] },

  { label: "Sector", options: [{ label: "Mining", value: "mining" }] },
  { label: "Course", options: [{ label: "Electrician", value: "electrician" }] },
  { label: "Batch Start Date", options: [{ label: "Last 30 Days", value: "30" }] },
  { label: "Batch End Date", options: [{ label: "Completed", value: "completed" }] },
  { label: "SDC Code", options: [{ label: "SDC-001", value: "001" }] },
  { label: "Batch ID", options: [{ label: "BATCH-101", value: "101" }] },
];

const yesNoFilters = [
  "Enrolled",
  "Dropout",
  "Trained",
  "Assessed",
  "Passed",
  "Failed",
  "Absent",
  "Certified",
  "Placed",
  "Security Cleared",
];

const TOTAL_ENROLLED = 260_877;

const OverviewDashboardFilters: React.FC = () => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [count, setCount] = useState(0);

  /* ---------------- COUNT UP ANIMATION ---------------- */
  useEffect(() => {
    const duration = 1200; // ms
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setCount(Math.floor(eased * TOTAL_ENROLLED));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-zinc-100 mb-6 border-l-4 border-red-600 pl-3">
        Skills Dashboard
      </h2>

      {/* Row 1 & 2 : Dropdown Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {dropdownFilters.map((filter) => (
          <div key={filter.label} className="flex flex-col gap-1">
            <label className="text-xs text-zinc-400">{filter.label}</label>
            <select
              className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:border-red-600 focus:outline-none"
              value={values[filter.label] || ""}
              onChange={(e) =>
                setValues({ ...values, [filter.label]: e.target.value })
              }
            >
              <option value="">All</option>
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Row 3 : Yes / No Dropdowns + KPI */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1">
          {yesNoFilters.map((label) => (
            <div key={label} className="flex flex-col gap-1">
              <label className="text-xs text-zinc-400">{label}</label>
              <select
                className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:border-red-600 focus:outline-none"
                value={values[label] || ""}
                onChange={(e) =>
                  setValues({ ...values, [label]: e.target.value })
                }
              >
                <option value="">All</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          ))}
        </div>

        {/* KPI Card */}
        <div className="min-w-[200px] bg-zinc-900 border border-red-600 rounded-lg p-4 flex flex-col items-center justify-center">
          <p className="text-xs text-zinc-400 mb-1">Total Enrolled</p>
          <p className="text-3xl font-bold text-red-600">
            {count.toLocaleString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewDashboardFilters;