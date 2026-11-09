import React, { Suspense, useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
import PageErrorBoundary from "./components/common/PageErrorBoundary";

const HIDE_LAYOUT_ROUTES = [
  "/job-search-engine/business/auth",
  "/job-search-engine/job-seekers/auth",
];

// --- Route-level code splitting via React.lazy ---

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

const PageLoadingFallback = () => (
  <div className="site-loading" role="status" aria-live="polite">
    <span className="sr-only">Loading page</span>
    <div className="site-loading-block" style={{ width: '140px' }} />
    <div className="site-loading-block site-loading-title" />
    <div className="site-loading-block" /><div className="site-loading-block" style={{ width: '65%' }} />
    <div className="site-loading-block site-loading-media" />
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
  useEffect(() => {
    const segment = location.pathname.split('/').filter(Boolean).pop();
    const title = segment ? segment.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase()) : 'Industry-led Skills & Training';
    document.title = `${title} | Pantiss Skill Universe`;
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to content</a>
      {!hideLayout && <Header />}
      <main id="main-content" tabIndex={-1} className={hideLayout ? undefined : "site-main"}>
      <PageErrorBoundary key={location.pathname}>
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
          <Route path="*" element={<section className="site-message"><p className="site-eyebrow">Page not found</p><h1>A new direction awaits.</h1><p>This address doesn’t match a page. Explore our programmes or return home.</p><Link className="site-button" to="/">Return home</Link></section>} />
        </Routes>
      </Suspense>
      </PageErrorBoundary>
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router><LayoutWrapper /></Router>
    </MotionConfig>
  );
}

export default App;
