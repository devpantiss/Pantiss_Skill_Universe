import { useMemo, useState } from "react";

type PartnerRow = {
  id: string;
  leftTitle: string;
  rightTitle: string;
  rightDesc: string;
};

export default function LearningPartnerSection() {
  const rows: PartnerRow[] = useMemo(
    () => [
      {
        id: "01",
        leftTitle: "BUILDING DAY-ONE\nREADY TALENT",
        rightTitle: "Hire-Train-Deploy",
        rightDesc:
          "Build a workforce that’s day-one ready. Our HTD programs source, train, and deploy talent with the technical and functional skills your business needs, at scale.",
      },
      {
        id: "02",
        leftTitle: "SHAPING CONFIDENT\nFIRST-TIME LEADERS",
        rightTitle: "First-Time Managers",
        rightDesc:
          "Transform high-potential employees into confident managers. Our FTM programs focus on critical leadership behaviours, decision-making, and team management skills for new leaders.",
      },
      {
        id: "03",
        leftTitle: "DEVELOPING RESILIENT\nSENIOR LEADERSHIP",
        rightTitle: "Leadership Development",
        rightDesc:
          "Equip top-level leaders to navigate change and drive business impact. With industry-specific interventions and behavioural insights, we help create resilient, future-ready leadership.",
      },
    ],
    []
  );

  const [activeRow, setActiveRow] = useState(rows[2].id);

  return (
    <section className="relative w-full overflow-hidden bg-[#0b0202] text-white">
      
      {/* ================= BACKGROUND (RED ENTERPRISE) ================= */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0b0202]" />

        {/* Primary red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,0,0,0.45),transparent_55%)]" />

        {/* Secondary soft red */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(220,38,38,0.18),transparent_60%)]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-[42px] sm:text-[56px] md:text-[64px] leading-[1.02] font-light tracking-tight text-white/95">
              YOUR
              <br />
              LEARNING PARTNER
              <br />
              FROM HIRE TO RETIRE
            </h2>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <p className="max-w-sm text-sm md:text-[15px] leading-relaxed text-white/70 mt-2">
              We help enterprises build talent that’s ready for today and
              resilient for tomorrow.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/15" />

        {/* Rows */}
        <div className="mt-0">
          {rows.map((row, idx) => {
            const isActive = row.id === activeRow;

            return (
              <div key={row.id} className="relative">
                <button
                  onMouseEnter={() => setActiveRow(row.id)}
                  onFocus={() => setActiveRow(row.id)}
                  className="group w-full text-left focus:outline-none"
                >
                  <div className="relative">

                    {/* Hover / Active Highlight */}
                    <div
                      className={[
                        "absolute inset-0 transition-all duration-300 ease-out",
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100",
                      ].join(" ")}
                    >
                      <div className="h-full w-full bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent" />
                    </div>

                    {/* Row Content */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4 py-8 md:py-10">

                      {/* Left */}
                      <div className="lg:col-span-6">
                        <p
                          className={[
                            "text-[18px] sm:text-[20px] md:text-[22px]",
                            "leading-[1.25] tracking-wide uppercase",
                            "whitespace-pre-line",
                            "transition-colors duration-300",
                            isActive
                              ? "text-white/95"
                              : "text-white/75 group-hover:text-white/90",
                          ].join(" ")}
                        >
                          {row.leftTitle}
                        </p>
                      </div>

                      {/* Right */}
                      <div className="lg:col-span-6">
                        <p
                          className={[
                            "text-[16px] md:text-[17px]",
                            "transition-colors duration-300",
                            isActive
                              ? "text-white/90"
                              : "text-white/80 group-hover:text-white/90",
                          ].join(" ")}
                        >
                          {row.rightTitle}
                        </p>

                        <p
                          className={[
                            "mt-2 max-w-xl text-[13px] md:text-[14px] leading-relaxed",
                            "transition-colors duration-300",
                            isActive
                              ? "text-white/60"
                              : "text-white/50 group-hover:text-white/60",
                          ].join(" ")}
                        >
                          {row.rightDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Separator */}
                {idx !== rows.length - 1 && (
                  <div className="h-px w-full bg-white/15" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}