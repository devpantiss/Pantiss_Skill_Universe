import "./App.css";
import React, { Suspense, useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "leaflet/dist/leaflet.css";

const HIDE_LAYOUT_ROUTES = [
  "/job-search-engine/business/auth",
  "/job-search-engine/job-seekers/auth",
];

// --- Route-level code splitting via React.lazy ---
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/About/AboutPage"));
const Collaborations = React.lazy(() => import("./pages/Collaborations"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProgramsPage = React.lazy(() => import("./pages/ProgramsPage"));
const DiplomaAndAdvancedDiplomaPage = React.lazy(() => import("./pages/Programmes/DiplomaAndAdvancedDiplomaPage"));
const UpskillingAndReskillingPage = React.lazy(() => import("./pages/Programmes/UpskillingAndReskillingPage"));
const IndustryAllignedCertificationPage = React.lazy(() => import("./pages/Programmes/IndustryAllignedCertificationPage"));
const FuturisticSkillOnWheels = React.lazy(() => import("./pages/FuturisticSkillOnWheels"));
const ITIPage = React.lazy(() => import("./pages/Programmes/ITIPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const CareersPage = React.lazy(() => import("./pages/CareersPage"));
const JobsPage = React.lazy(() => import("./pages/JobsPage"));
const InternationalMobilityPage = React.lazy(() => import("./pages/Programmes/InternationalMobilityPage"));
const SkillDevBootCampPage = React.lazy(() => import("./pages/Programmes/SkillDevBootCampPage"));
const ProgramPage = React.lazy(() => import("./pages/ProgramPage"));
const ResourcesPage = React.lazy(() => import("./pages/ResourcesPage"));
const OurProjectsPage = React.lazy(() => import("./pages/OurProjectsPage"));
const Placements = React.lazy(() => import("./pages/Placements"));

// Lightweight loading fallback
const PageLoadingFallback = () => (
  <div
    className="flex min-h-[60vh] items-center justify-center bg-black text-white"
    role="status"
    aria-live="polite"
  >
    <span className="sr-only">Loading page</span>
    <div className="h-10 w-10 rounded-full border-4 border-green-500 border-t-transparent motion-safe:animate-spin" />
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = HIDE_LAYOUT_ROUTES.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!hideLayout && <Header />}
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/programmes" element={<ProgramsPage />} />
          <Route path="/skill-dashboard" element={<DashboardPage />} />
          <Route path="/futuristic-skill-on-wheels" element={<FuturisticSkillOnWheels />} />
          <Route path="/careers/jobs" element={<JobsPage />} />
          <Route path="/our-programmes" element={<ProgramPage />} />
          <Route path="/our-programmes/diploma-programs" element={<DiplomaAndAdvancedDiplomaPage />} />
          <Route path="/our-programmes/upskilling-and-reskilling-program" element={<UpskillingAndReskillingPage />} />
          <Route path="/our-programmes/industry-alligned-certification" element={<IndustryAllignedCertificationPage />} />
          <Route path="/our-programmes/iti-program" element={<ITIPage />} />
          <Route path="/our-programmes/international-mobility-program" element={<InternationalMobilityPage />} />
          <Route path="/our-programmes/skill-development-boot-camp-program" element={<SkillDevBootCampPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/our-projects" element={<OurProjectsPage />} />
          <Route path="/placements" element={<Placements />} />
        </Routes>
      </Suspense>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
