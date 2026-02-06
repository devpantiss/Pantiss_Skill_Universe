import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar, Doughnut } from "react-chartjs-2";
  
  ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );
  
  /* ===================== GAUGE DATA (5 CARDS) ===================== */
  
  const gaugeData = [
    { title: "% Present (STT)", value: 32.6 },
    { title: "% Present (SP)", value: 41.2 },
    { title: "% Present (RPL)", value: 48.9 },
    { title: "% Present (Women)", value: 44.1 },
    { title: "% Present (Overall)", value: 39.8 },
  ];
  
  /* ===================== MONTHLY ATTENDANCE (7 DISTRICTS) ===================== */
  
  const blockAttendance = [
    {
      block: "Keonjhar",
      Apr: 36,
      May: 34,
      Jun: 18,
      Jul: 19,
      Aug: 18,
      Sep: 17,
      Oct: 24,
      Nov: 40,
      Dec: 49,
      Jan: 45,
    },
    {
      block: "Sundargarh",
      Apr: 30,
      May: 28,
      Jun: 10,
      Jul: 6,
      Aug: 9,
      Sep: 7,
      Oct: 18,
      Nov: 38,
      Dec: 58,
      Jan: 68,
    },
    {
      block: "Angul",
      Apr: 27,
      May: 10,
      Jun: 2,
      Jul: 28,
      Aug: 0,
      Sep: 0,
      Oct: 12,
      Nov: 47,
      Dec: 53,
      Jan: 64,
    },
    {
      block: "Jharsuguda",
      Apr: 42,
      May: 38,
      Jun: 24,
      Jul: 26,
      Aug: 29,
      Sep: 31,
      Oct: 36,
      Nov: 44,
      Dec: 51,
      Jan: 57,
    },
    {
      block: "Joda",
      Apr: 33,
      May: 29,
      Jun: 16,
      Jul: 18,
      Aug: 21,
      Sep: 19,
      Oct: 27,
      Nov: 41,
      Dec: 48,
      Jan: 52,
    },
    {
      block: "Barbil",
      Apr: 35,
      May: 32,
      Jun: 19,
      Jul: 22,
      Aug: 24,
      Sep: 23,
      Oct: 30,
      Nov: 45,
      Dec: 55,
      Jan: 61,
    },
    {
      block: "Koira",
      Apr: 25,
      May: 21,
      Jun: 8,
      Jul: 12,
      Aug: 14,
      Sep: 13,
      Oct: 20,
      Nov: 36,
      Dec: 42,
      Jan: 49,
    },
  ];
  
  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
  
  /* ===================== UTILS ===================== */
  
  const cellColor = (v: number) => {
    if (v >= 80) return "bg-green-600";
    if (v >= 60) return "bg-yellow-500";
    if (v >= 40) return "bg-orange-500";
    if (v > 0) return "bg-red-600";
    return "bg-[#1f2937]";
  };
  
  /* ===================== COMPONENT ===================== */
  
  export default function AttendanceAnalyticsSection() {
    /* ===================== BAR CHART ===================== */
  
    const barChartData = {
      labels: blockAttendance.map(b => b.block),
      datasets: [
        {
          label: "Avg Attendance %",
          data: blockAttendance.map(b =>
            Math.round(
              months.reduce((s, m) => s + (b as any)[m], 0) / months.length
            )
          ),
          backgroundColor: "#dc2626",
          borderRadius: 6,
        },
      ],
    };
  
    const barOptions = {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx: any) => `${ctx.parsed.y}%`,
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 60,
          ticks: { color: "#9ca3af" },
          grid: { color: "#1f2937" },
        },
        x: {
          ticks: { color: "#9ca3af" },
          grid: { display: false },
        },
      },
    };
  
    /* ===================== RENDER ===================== */
  
    return (
      <section className="bg-black text-white mt-4 p-6 space-y-10 rounded-xl">
  
        {/* ===================== ROW 1: GAUGES (5) ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {gaugeData.map(g => (
            <GaugeCard key={g.title} title={g.title} value={g.value} />
          ))}
        </div>
  
        {/* ===================== ROW 2: BAR CHART ===================== */}
        <div className="bg-[#11161C] border border-white/10 rounded-xl p-6">
          <h3 className="text-sm text-white/70 mb-4">
            Average Attendance % by District
          </h3>
          <Bar data={barChartData} options={barOptions} />
        </div>
  
        {/* ===================== ROW 3: MONTHLY TABLE (7 DISTRICTS) ===================== */}
        <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 overflow-auto">
          <h3 className="text-sm text-white/70 mb-4">
            District-wise Monthly Attendance (%)
          </h3>
  
          <table className="min-w-full text-xs border-collapse">
            <thead className="sticky top-0 bg-[#11161C]">
              <tr>
                <th className="p-2 text-left">District</th>
                {months.map(m => (
                  <th key={m} className="p-2 text-center">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blockAttendance.map(b => (
                <tr key={b.block} className="border-t border-white/10">
                  <td className="p-2 font-medium">{b.block}</td>
                  {months.map(m => (
                    <td key={m} className="p-2 text-center">
                      <span
                        className={`px-2 py-1 rounded text-black text-xs ${cellColor(
                          (b as any)[m]
                        )}`}
                      >
                        {(b as any)[m]}%
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  
  /* ===================== GAUGE CARD ===================== */
  
  function GaugeCard({ title, value }: { title: string; value: number }) {
    const data = {
      labels: ["Present", "Remaining"],
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: ["#dc2626", "#1f2937"],
          borderWidth: 0,
        },
      ],
    };
  
    const options = {
      rotation: -90,
      circumference: 180,
      cutout: "75%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx: any) => `${ctx.parsed}%`,
          },
        },
      },
    };
  
    return (
      <div className="bg-[#11161C] border border-white/10 rounded-xl p-4">
        <p className="text-xs text-white/60 mb-2">{title}</p>
  
        <div className="relative h-36">
          <Doughnut data={data} options={options} />
  
          <div className="absolute inset-y-0 right-0 flex items-center justify-center">
            <span className="text-2xl font-semibold">{value}%</span>
          </div>
        </div>
  
        <div className="flex justify-between max-w-[150px] text-[10px] text-white/40 -mt-2">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    );
  }
  