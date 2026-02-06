import React from "react";

/* ===================== TABS ===================== */

const tabs = [
  "Overview",
  "Establishment",
  "Candidate",
  "TPA",
  "Sector",
  "Analytics",
  "DBT",
];

/* ===================== KPI DATA ===================== */

const kpis = [
  { label: "Apprentices Engaged", value: "4,847,755", color: "border-blue-500" },
  { label: "Completed Training", value: "2,476,235", color: "border-red-600" },
  { label: "Apprentices Ongoing", value: "951,555", color: "border-gray-400" },
  { label: "Apprentices Certified", value: "712,076", color: "border-orange-500" },
  { label: "Establishments Registered", value: "191,060", color: "border-green-500" },
  { label: "Establishments Active", value: "56,003", color: "border-pink-500" },
  {
    label: "DBT Paid",
    value: "₹775.94 Cr",
    sub: "as on 22/04/2025",
    color: "border-lime-500",
  },
];

/* ===================== COMPONENT ===================== */

const PlacementsOverviewSection: React.FC = () => {
  return (
    <section className="bg-black text-white rounded-2xl p-8 mt-6 space-y-12 border border-red-600">

      {/* ===================== TOP TABS ===================== */}
      <nav className="flex flex-wrap gap-2">
        {tabs.map((t, i) => {
          const active = i === 0;
          return (
            <button
              key={t}
              aria-current={active ? "page" : undefined}
              className={`
                px-6 py-3 rounded-lg text-sm font-semibold tracking-wide
                border transition-all duration-200
                ${
                  active
                    ? "bg-red-600 text-white border-red-600 shadow-[0_0_0_1px_rgba(220,38,38,0.6)]"
                    : "border-white/15 text-white/80 hover:border-red-600 hover:text-white hover:bg-red-600/10"
                }
              `}
            >
              {t}
            </button>
          );
        })}
      </nav>

      {/* ===================== KPI HEX GRID (HONEYCOMB) ===================== */}
      <div className="relative grid grid-cols-12 gap-y-16 mt-10">

        {/* ---------- TOP ROW (4 HEXES) ---------- */}
        {kpis.slice(0, 4).map((k) => (
          <div
            key={k.label}
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex justify-center"
          >
            <HexCard {...k} />
          </div>
        ))}

        {/* ---------- BOTTOM ROW (3 HEXES IN GAPS) ---------- */}
        {kpis.slice(4).map((k, index) => (
          <div
            key={k.label}
            className={`
              col-span-12 sm:col-span-6 lg:col-span-4
              flex justify-center
              -mt-14
              ${
                index === 0
                  ? "lg:translate-x-[12.5%]"
                  : index === 2
                  ? "lg:-translate-x-[12.5%]"
                  : ""
              }
            `}
          >
            <HexCard {...k} />
          </div>
        ))}

      </div>

      {/* ===================== FOOTER STRIP ===================== */}
      <div className="relative overflow-hidden rounded-xl border border-red-600/60">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10" />
        <div className="relative py-6 text-center">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Across
          </p>
          <p className="text-2xl font-semibold mt-1">India</p>
          <p className="text-sm text-white/70 mt-1">
            Apprentices Engaged
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacementsOverviewSection;

/* ===================== HEX CARD ===================== */

function HexCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub?: string;
  color: string;
}) {
  return (
    <div className="relative w-48 h-44 group">
      <div
        className={`
          absolute inset-0
          bg-gradient-to-b from-gray-900 to-gray-950
          ${color}
          border-2
          clip-hex
          flex flex-col items-center justify-center
          text-center
          transition-all duration-300
          shadow-md
          group-hover:shadow-xl
          group-hover:scale-[1.04]
        `}
      >
        <p className="text-xl font-semibold tracking-tight">
          {value}
        </p>
        <p className="text-xs text-white/70 mt-1 px-5 leading-snug">
          {label}
        </p>
        {sub && (
          <p className="text-[10px] text-white/50 mt-1">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
