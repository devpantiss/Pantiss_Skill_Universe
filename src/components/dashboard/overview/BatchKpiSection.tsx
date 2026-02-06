type KpiItem = {
    label: string;
    value: number | string;
    accent: string;
  };
  
  const KPI_DATA: KpiItem[] = [
    {
      label: "Total Batches",
      value: 125189,
      accent: "from-blue-600 to-blue-500",
    },
    {
      label: "Cancelled Batches",
      value: 32280,
      accent: "from-cyan-600 to-teal-500",
    },
    {
      label: "Ongoing Batches",
      value: 260,
      accent: "from-emerald-600 to-green-500",
    },
    {
      label: "Upcoming Batches",
      value: 15,
      accent: "from-amber-600 to-orange-500",
    },
    {
      label: "Completed Batches",
      value: 92632,
      accent: "from-rose-600 to-pink-500",
    },
    {
      label: "Batches ending in next 15 Days",
      value: 61,
      accent: "from-slate-600 to-slate-500",
    },
  ];
  
  export default function BatchKpiSection() {
    return (
      <section className="w-full bg-[#0B0E11] p-6 mt-4 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {KPI_DATA.map((item) => (
            <div
              key={item.label}
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${item.accent} p-5`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-black/20" />
  
              <div className="relative z-10">
                <p className="text-2xl font-semibold tracking-tight">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-white/80 leading-snug">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  