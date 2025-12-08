import React, { memo, useState } from "react";
import { motion, Variants } from "framer-motion";
import Slider from "react-slick";

// Define interfaces for type safety
interface ImpactData {
  courses: number;
  trained: number;
  placed: number;
}

interface Sector {
  name: string;
  description: string;
  icon: string;
  impact: ImpactData;
  certificationLevel: string;
  skills: string[];
}

interface CertificationOverviewProps {}

// Updated sectors — 7 industry-aligned certification programmes
const sectors: Sector[] = [
  {
    name: "Mines",
    description:
      "Industry-aligned certifications for mine-site roles: HEMM operation assistants, safety officers and mine supervision with modules on risk management, digital checklists and predictive maintenance basics.",
    icon: "⛏️",
    impact: { courses: 10, trained: 2100, placed: 1600 },
    certificationLevel: "Level 4-6",
    skills: ["HEMM Ops", "Mine Safety", "Predictive Maintenance"],
  },
  {
    name: "Steel & Aluminium",
    description:
      "Certifications focused on furnace operations, rolling mill processes, welding & metallurgical QA, and energy-efficiency improvements tailored for steel and aluminium plants.",
    icon: "🏭",
    impact: { courses: 12, trained: 2800, placed: 2200 },
    certificationLevel: "Level 4-6",
    skills: ["Furnace Ops", "Welding", "Metallurgical QA"],
  },
  {
    name: "Power & Green Energy",
    description:
      "Certification tracks for power plant operation, solar PV & wind maintenance, energy auditing and storage systems — equipping technicians for the green transition.",
    icon: "⚡",
    impact: { courses: 14, trained: 3300, placed: 2600 },
    certificationLevel: "Level 5-7",
    skills: ["Power Systems", "Solar PV", "Energy Auditing"],
  },
  {
    name: "Shipping & Logistics",
    description:
      "Industry-recognised certifications in warehouse management, port & cargo handling, cold-chain best practices and logistics analytics for faster, safer supply chains.",
    icon: "🚢",
    impact: { courses: 9, trained: 1700, placed: 1350 },
    certificationLevel: "Level 3-5",
    skills: ["WMS", "Port Ops", "Cold-chain"],
  },
  {
    name: "Electric Vehicles",
    description:
      "Certifications for EV service technicians and charging infrastructure teams covering battery diagnostics, BMS basics, safety protocols and EV powertrains.",
    icon: "🔋",
    impact: { courses: 8, trained: 1400, placed: 1100 },
    certificationLevel: "Level 5-7",
    skills: ["Battery Diagnostics", "BMS", "EV Safety"],
  },
  {
    name: "Construction Tech & Infra Equipment",
    description:
      "Applied certifications on equipment telematics, GPS-assisted layout, preventive maintenance and digital quality control to boost site productivity.",
    icon: "🏗️",
    impact: { courses: 13, trained: 3600, placed: 2750 },
    certificationLevel: "Level 4-6",
    skills: ["Telematics", "GPS Layout", "Preventive Maintenance"],
  },
  {
    name: "Water, Sanitation & Facility Management",
    description:
      "Sector certifications for pump & pipeline diagnostics, water quality monitoring, sanitation technology and efficient facility operations for urban and institutional settings.",
    icon: "🚰",
    impact: { courses: 7, trained: 1900, placed: 1400 },
    certificationLevel: "Level 3-5",
    skills: ["Pump Diagnostics", "Water Testing", "Facility Ops"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Custom arrow components for react-slick
interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
    onClick={onClick}
    aria-label="Previous sector"
  >
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
    onClick={onClick}
    aria-label="Next sector"
  >
    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const CertificationOverview: React.FC<CertificationOverviewProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (_i: number) => (
      <button className="w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full bg-white/30 hover:bg-white/60" />
    ),
    dotsClass: "slick-dots !bottom-[-30px] sm:!bottom-[-40px] !flex !justify-center !space-x-2",
  };

  const currentImpact = sectors[currentSlide]?.impact;
  const currentSector = sectors[currentSlide];

  return (
    <section className="relative min-h-screen py-12 lg:py-20 bg-black overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants as Variants} className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Program <span className="text-green-500"></span> Introduction
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Modular, industry-designed certification programs to upskill and reskill professionals for immediate job-readiness across core sectors:
            Mines; Steel & Aluminium; Power & Green Energy; Shipping & Logistics; Electric Vehicles; Construction Tech & Infra Equipment; Water, Sanitation & Facility Management.
          </p>
        </motion.div>

        {/* Video + Carousel */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Video */}
          <motion.div variants={fadeInLeft as Variants}>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Program Introduction</h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Certification Program Intro"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={fadeInRight as Variants}>
            <Slider {...sliderSettings}>
              {sectors.map((sector, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{sector.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{sector.name}</h4>
                        <span className="text-sm text-white/60">{sector.certificationLevel}</span>
                      </div>
                    </div>
                    <p className="text-white/80 mb-4">{sector.description}</p>
                    <div className="mt-auto">
                      <h5 className="text-sm font-semibold text-white mb-2">Key Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {sector.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>

        {/* Dynamic Impact */}
        {currentImpact && (
          <motion.div
            key={`impact-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-500">{currentImpact.courses}</div>
              <div className="text-white/80">Courses Offered</div>
              <div className="text-sm text-white/60 mt-1">{currentSector?.name}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-500">{currentImpact.trained.toLocaleString()}</div>
              <div className="text-white/80">Professionals Upskilled</div>
              <div className="text-sm text-white/60 mt-1">Industry-ready</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400">{currentImpact.placed.toLocaleString()}</div>
              <div className="text-white/80">Career Transitions</div>
              <div className="text-sm text-white/60 mt-1">Placement & Role Moves</div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default memo(CertificationOverview);