import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About/AboutPage";
import Collaborations from "./pages/Collaborations";
import ContactPage from "./pages/ContactPage";
import ProgramsPage from "./pages/ProgramsPage";
import RecognitionofPriorLearningPage from "./pages/Programmes/RecognitionofPriorLearningPage";
import ApprenticeshipAndDualTrainingPage from "./pages/Programmes/ApprenticeshipAndDualTrainingPage";
import DiplomaAndAdvancedDiplomaPage from "./pages/Programmes/DiplomaAndAdvancedDiplomaPage";

function LayoutWrapper() {
  const location = useLocation();
  const HIDE_LAYOUT_ROUTES = [
    "/job-search-engine/business/auth",
    "/job-search-engine/job-seekers/auth",
  ];
  const hideLayout = HIDE_LAYOUT_ROUTES.includes(location.pathname);

  return (
    <>
      {/* {!hideLayout && (isJobSearchRoute ? "" : <Header />)} */}
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/our-programmes" element={<ProgramsPage />} />
        <Route path="/our-programmes/recognition-of-prior-learning" element={<RecognitionofPriorLearningPage />} />
        <Route path="/our-programmes/apprenticeship-and-dual-training" element={<ApprenticeshipAndDualTrainingPage />} />
        <Route path="/our-programmes/diploma-programs" element={<DiplomaAndAdvancedDiplomaPage />} />

      </Routes>
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
