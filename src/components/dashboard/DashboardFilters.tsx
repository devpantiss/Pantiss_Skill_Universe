import { useState } from "react";
import DashboardOverviewPage from "../../pages/dashboard/DashboardOverviewPage";
import AttendanceDashboard from "../../pages/dashboard/AttendanceDashboard";

/* ===================== TYPES ===================== */

type DashboardTab =
  | "overview"
  | "attendance"
  | "district-analytics";

/* ===================== PAGE COMPONENTS ===================== */



function AttendancePage() {
  return (
    <div>
      <h3 className="text-xl font-light">Attendance</h3>
      <p className="mt-2 text-sm text-white/60">
        Attendance trends, batch-level insights, and absenteeism patterns.
      </p>

      <div className="mt-8 h-72 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/40">
        Attendance charts & tables
      </div>
    </div>
  );
}

function DistrictAnalyticsPage() {
  return (
    <div>
      <h3 className="text-xl font-light">District Level Analytics</h3>
      <p className="mt-2 text-sm text-white/60">
        District-wise enrolment density, performance outcomes, and coverage.
      </p>

      <div className="mt-8 h-72 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/40">
        District heatmaps & analytics
      </div>
    </div>
  );
}


/* ===================== MAIN COMPONENT ===================== */

export default function DashboardFilters() {
  const [activeTab, setActiveTab] =
    useState<DashboardTab>("overview");

  return (
    <section className="w-full bg-black text-white lg:mt-0 sm:mt-16">
      {/* ===================== HEADER ===================== */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-5xl font-bold tracking-tight">
            Skill Dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            Programme performance, attendance monitoring,
            and district-level insights.
          </p>
        </div>
      </header>

      {/* ===================== TABS ===================== */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex gap-10 h-14">
            {[
              { key: "overview", label: "Overview" },
              { key: "attendance", label: "Attendance" },
              {
                key: "district-analytics",
                label: "District Level Analytics",
              },
            ].map((tab) => {
              const isActive = tab.key === activeTab;

              return (
                <button
                  key={tab.key}
                  onClick={() =>
                    setActiveTab(tab.key as DashboardTab)
                  }
                  className="relative h-full flex items-center focus:outline-none"
                >
                  <span
                    className={`text-sm tracking-wide transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </span>

                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ===================== CONTENT ===================== */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {activeTab === "overview" && <DashboardOverviewPage />}
        {activeTab === "attendance" && <AttendanceDashboard />}
        {activeTab === "district-analytics" && (
          <DistrictAnalyticsPage />
        )}
      </main>
    </section>
  );
}