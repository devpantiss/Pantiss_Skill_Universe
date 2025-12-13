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

interface AdvancedDiplomaOverviewProps {}

// Advanced Diploma — 7 sectors tailored to your request
const sectors: Sector[] = [
  {
    name: "Mines",
    description:
      "Advanced Diploma modules in mine operations management, HEMM optimisation, mine safety systems, and predictive maintenance for underground and surface mining.",
    icon: "⛏️",
    impact: { courses: 8, trained: 1200, placed: 850 },
    certificationLevel: "NSQF Levels 6-8",
    skills: ["Mine Management", "HEMM Optimisation", "Predictive Maintenance"],
  },
  {
    name: "Steel & Aluminium",
    description:
      "Specialised programs in metallurgical process control, heat-treatment & surface engineering, furnace optimisation and quality assurance for steel and aluminium plants.",
    icon: "🏭",
    impact: { courses: 10, trained: 1700, placed: 1300 },
    certificationLevel: "NSQF Levels 6-8",
    skills: ["Metallurgy", "Process Control", "Quality Assurance"],
  },
  {
    name: "Power & Green Energy",
    description:
      "Advanced Diploma in power systems engineering, renewable plant operations (solar & wind), energy storage integration, and grid stability & analytics.",
    icon: "⚡",
    impact: { courses: 12, trained: 2100, placed: 1650 },
    certificationLevel: "NSQF Levels 6-8",
    skills: ["Power Systems", "Renewables Integration", "Energy Analytics"],
  },
  {
    name: "Shipping & Logistics",
    description:
      "Specialist modules in port systems engineering, cold-chain logistics, supply chain digitalisation and operations planning for large-scale logistics networks.",
    icon: "🚢",
    impact: { courses: 9, trained: 1400, placed: 1050 },
    certificationLevel: "NSQF Levels 5-7",
    skills: ["Port Systems", "Cold-Chain Ops", "Logistics Digitisation"],
  },
  {
    name: "Electric Vehicles",
    description:
      "In-depth training on EV powertrains, battery systems engineering, BMS design, fast-charging infrastructure and diagnostics for advanced service roles.",
    icon: "🔋",
    impact: { courses: 7, trained: 1100, placed: 800 },
    certificationLevel: "NSQF Levels 6-8",
    skills: ["Battery Engineering", "BMS", "EV Diagnostics"],
  },
  {
    name: "Construction Tech & Infra Equipment",
    description:
      "Advanced Diploma pathways for construction robotics, infra equipment automation, structural health monitoring and site digital twin workflows.",
    icon: "🏗️",
    impact: { courses: 11, trained: 1900, placed: 1450 },
    certificationLevel: "NSQF Levels 6-8",
    skills: ["Equipment Automation", "Structural Monitoring", "Site Digitisation"],
  },
  {
    name: "Water, Sanitation & Facility Management",
    description:
      "Specialist skilling in water treatment process engineering, wastewater systems design, smart facility management and operations for urban services.",
    icon: "🚰",
    impact: { courses: 8, trained: 1250, placed: 900 },
    certificationLevel: "NSQF Levels 5-7",
    skills: ["Water Treatment", "Wastewater Engineering", "Facility Systems"],
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

const AdvancedDiplomaOverview: React.FC<AdvancedDiplomaOverviewProps> = () => {
  // State to track current slide for dynamic impact data
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider settings for react-slick
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
    customPaging: (i: number) => (
      <button
        className="w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots !bottom-[-30px] sm:!bottom-[-40px] !flex !justify-center !space-x-2",
  };

  // Get current sector's impact data
  const currentImpact = sectors[currentSlide]?.impact;
  const currentSector = sectors[currentSlide];

  return (
    <section className="relative min-h-screen py-8 sm:py-12 lg:py-20 bg-black overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-4 sm:left-16 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-red-600/30 to-green-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-4 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-green-500/30 to-red-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-to-br from-red-600/25 to-green-500/25 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/5 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-green-500/25 to-red-600/25 rounded-full blur-3xl animate-pulse delay-1400" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants as Variants} className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            <span className="bg-white bg-clip-text text-transparent">Program</span>{" "}
            <span className="text-white/90">Introduction</span>
          </h2> */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-600 to-green-500 rounded-full mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Advanced Diploma and specialization Our key industrial sectors — deep technical theory combined with extended lab hours, industry projects and pathways to leadership roles.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 lg:mb-16">
          {/* Video Section */}
          <motion.div variants={fadeInLeft as Variants} className="order-2 xl:order-1 w-full flex flex-col">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 group flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                  Program <span className="bg-green-500 bg-clip-text text-transparent">Introduction</span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Learn how Advanced Diploma pathways create specialist technicians and supervisory talent with industry-aligned credentials.
                </p>
              </div>

              <div className="flex-1 flex flex-col min-h-0">
                <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 relative flex-1 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Advanced Diploma Overview Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />

                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-white/60">
                  <span>📺 Advanced Diploma intro</span>
                  <span>⏱️ ~4 minute overview</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-green-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Carousel Section */}
          <motion.div variants={fadeInRight as Variants} className="order-1 xl:order-2 w-full flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Our <span className="bg-green-500 bg-clip-text text-transparent">7 Key Sectors</span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Advanced Diploma specializations designed for industry needs, aligned with higher NSQF levels and practical employer projects.
                </p>
              </div>

              <div className="relative flex-1 flex flex-col min-h-0">
                <style>{`
                  .slick-dots li button:before { display: none; }
                  .slick-track { display: flex; align-items: stretch; }
                  .slick-slide > div { height: 100%; }
                  .slick-slide > div > div { height: 100%; display: flex; flex-direction: column; }
                  .equal-height-slider .slick-list { height: 100%; }
                  .equal-height-slider .slick-track { height: 100%; }
                  @media (max-width: 640px) { .slick-dots { bottom: -25px !important; } }
                  @media (min-width: 641px) { .equal-height-slider { height: calc(100% - 50px); } }
                `}</style>

                <div className="equal-height-slider flex-1 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">
                  <Slider {...sliderSettings}>
                    {sectors.map((sector, index) => (
                      <div key={index} className="px-1 sm:px-2 h-full">
                        <div className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-gradient transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10 group h-full flex flex-col">
                          {/* Header */}
                          <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                            <div className="text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                              {sector.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300 leading-tight">
                                {sector.name}
                              </h4>
                              <span className="inline-block px-2 py-1 bg-gradient-to-r from-red-600/20 to-green-500/20 rounded-full text-xs sm:text-sm text-white/80 border border-white/10">
                                {sector.certificationLevel}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-white/80 leading-relaxed text-xs sm:text-sm lg:text-base mb-4 flex-grow">
                            {sector.description}
                          </p>

                          {/* Skills Tags */}
                          <div className="mt-auto">
                            <h5 className="text-xs sm:text-sm font-semibold text-white/90 mb-2">Key Skills:</h5>
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                              {sector.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 bg-white/5 rounded-md text-xs text-white/70 border border-white/10 hover:border-green-500/30 transition-colors duration-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <div className="h-1 bg-gradient-to-r from-red-600 to-green-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Impact Data - Advanced Diploma labels */}
        {currentImpact && (
          <motion.div
            key={`impact-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
            className="bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10"
          >
            <div className="mb-4 sm:mb-6 text-center">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                <span className="text-white/70">Impact for </span>
                <span className="bg-green-500 bg-clip-text text-transparent">{currentSector?.name}</span>
              </h4>
              <p className="text-white/60 text-xs sm:text-sm lg:text-base">Current sector performance metrics (Advanced Diploma)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <motion.div
                className="text-center p-3 sm:p-4 lg:p-6 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10 hover:border-red-600/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-xl sm:text-2xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  key={`courses-${currentImpact.courses}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {currentImpact.courses}
                </motion.div>
                <div className="text-xs sm:text-sm lg:text-base text-white/70 font-medium">Advanced Diploma Programs</div>
                <div className="text-xs text-white/50 mt-1">Available</div>
              </motion.div>

              <motion.div
                className="text-center p-3 sm:p-4 lg:p-6 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  key={`trained-${currentImpact.trained}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentImpact.trained.toLocaleString()}
                </motion.div>
                <div className="text-xs sm:text-sm lg:text-base text-white/70 font-medium">Students Graduated</div>
                <div className="text-xs text-white/50 mt-1">Cumulative</div>
              </motion.div>

              <motion.div
                className="text-center p-3 sm:p-4 lg:p-6 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300"
                  key={`placed-${currentImpact.placed}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {currentImpact.placed.toLocaleString()}
                </motion.div>
                <div className="text-xs sm:text-sm lg:text-base text-white/70 font-medium">Placements</div>
                <div className="text-xs text-white/50 mt-1">Through partners</div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Additional Information Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <motion.div variants={itemVariants as Variants} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Deep Technical Labs</h4>
            <p className="text-white/70 text-sm sm:text-base">Extended lab hours and specialist equipment to build advanced technical competency.</p>
          </motion.div>

          <motion.div variants={itemVariants as Variants} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Higher NSQF Credentials</h4>
            <p className="text-white/70 text-sm sm:text-base">Specialization credits and advanced diploma credentials aligned to NSQF enabling higher technical roles.</p>
          </motion.div>

          <motion.div variants={itemVariants as Variants} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Industry Projects</h4>
            <p className="text-white/70 text-sm sm:text-base">Employer-led projects and apprenticeships that give real-world problem solving experience.</p>
          </motion.div>

          <motion.div variants={itemVariants as Variants} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Career Progression</h4>
            <p className="text-white/70 text-sm sm:text-base">Clear routes from advanced diploma to supervisory roles, specialist technician jobs and further education.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(AdvancedDiplomaOverview);
