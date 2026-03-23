import { useState, Suspense, lazy } from "react";

const DashboardOverviewPage = lazy(() => import("../../pages/dashboard/DashboardOverviewPage"));
const AttendanceDashboard = lazy(() => import("../../pages/dashboard/AttendanceDashboard"));
const DistrictwiseDashboardPage = lazy(() => import("../../pages/dashboard/DistrictwiseDashboardPage"));
const PlacementsDashboard = lazy(() => import("../../pages/dashboard/PlacementsDashboard"));

const TabLoader = () => (
  <div className="flex justify-center items-center h-[500px]">
    <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

/* ===================== TYPES ===================== */

type DashboardTab =
  | "overview"
  | "attendance"
  | "district-analytics" 
  | "placements";


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
              {
                key: "placements",
                label: "Placements",
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
        <Suspense fallback={<TabLoader />}>
          {activeTab === "overview" && <DashboardOverviewPage />}
          {activeTab === "attendance" && <AttendanceDashboard />}
          {activeTab === "district-analytics" && (
            <DistrictwiseDashboardPage />
          )}
          {activeTab === "placements" && (
            <PlacementsDashboard />
          )}
        </Suspense>
      </main>
    </section>
  );
}