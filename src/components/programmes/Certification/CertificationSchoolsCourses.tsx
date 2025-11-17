import React, { memo, useState, useEffect, useCallback } from "react";
import {
  CheckCircle,
  Play,
  Pause,
  Users,
  Award,
  Clock,
  ArrowUpRight,
} from "lucide-react";

// Define interfaces for type safety
interface Course {
  name: string;
  level: string;
  duration: string;
  enrolled: number;
}

interface School {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  gradient: string;
  courses: Course[];
  totalStudents: number;
  successRate: number;
}

// Updated schools data — exactly the 7 sectors you requested
const schools: School[] = [
  {
    id: "mines",
    name: "School of Mines",
    shortName: "Mines",
    description:
      "Industry-certified programs in mine-site operations, HEMM assistance, mine safety and surveying — designed for rapid workforce readiness on-site.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    totalStudents: 2300,
    successRate: 92,
    courses: [
      { name: "Certification in Mine Operations", level: "Level 4", duration: "6 months", enrolled: 520 },
      { name: "HEMM Assistance Certificate", level: "Level 3", duration: "4 months", enrolled: 410 },
      { name: "Mine Safety & Surveying", level: "Level 4", duration: "6 months", enrolled: 360 },
    ],
  },
  {
    id: "steel-aluminium",
    name: "School of Steel & Aluminium",
    shortName: "Steel & Aluminium",
    description:
      "Certifications focused on furnace operations, rolling mills, welding, metallurgical quality and energy-efficiency improvements for smelters and mills.",
    image:
      "https://images.unsplash.com/photo-1581091870622-3b1b2e38c2d8?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-gray-500/20 via-slate-400/20 to-indigo-500/20",
    totalStudents: 2800,
    successRate: 94,
    courses: [
      { name: "Furnace & Melt Shop Certificate", level: "Level 4", duration: "9 months", enrolled: 650 },
      { name: "Welding & Fabrication Certification", level: "Level 3", duration: "6 months", enrolled: 520 },
      { name: "Metallurgical QA Certificate", level: "Level 4", duration: "6 months", enrolled: 430 },
    ],
  },
  {
    id: "power-green",
    name: "School of Power & Green Energy",
    shortName: "Power & Green",
    description:
      "Industry-aligned certifications in power plant operations, solar PV & wind technician tracks, energy auditing and battery storage basics for the green transition.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-yellow-400/20 via-green-400/20 to-cyan-400/20",
    totalStudents: 3400,
    successRate: 96,
    courses: [
      { name: "Power Plant Operations Certificate", level: "Level 5", duration: "9 months", enrolled: 720 },
      { name: "Solar PV Installer Certification", level: "Level 3", duration: "6 months", enrolled: 900 },
      { name: "Energy Audit & Storage Basics", level: "Level 4", duration: "6 months", enrolled: 480 },
    ],
  },
  {
    id: "shipping-logistics",
    name: "School of Shipping & Logistics",
    shortName: "Shipping & Logistics",
    description:
      "Short-term and advanced certifications in warehouse management, port & cargo handling, cold-chain and freight forwarding tailored for modern supply chains.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-green-400/20 via-cyan-400/20 to-teal-400/20",
    totalStudents: 2000,
    successRate: 91,
    courses: [
      { name: "Warehouse Management Certification", level: "Level 4", duration: "6 months", enrolled: 480 },
      { name: "Port & Cargo Handling Certificate", level: "Level 3", duration: "5 months", enrolled: 700 },
      { name: "Freight Forwarding & Customs", level: "Level 3", duration: "6 months", enrolled: 320 },
    ],
  },
  {
    id: "electric-vehicles",
    name: "School of Electric Vehicles",
    shortName: "Electric Vehicles",
    description:
      "Industry certificates for EV service technicians, battery diagnostics, BMS fundamentals and charging infrastructure safety for electric mobility roles.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-red-400/20 via-purple-400/20 to-blue-400/20",
    totalStudents: 1600,
    successRate: 95,
    courses: [
      { name: "EV Systems Technician Certificate", level: "Level 4", duration: "9 months", enrolled: 530 },
      { name: "Battery Diagnostics & BMS", level: "Level 5", duration: "6 months", enrolled: 420 },
      { name: "Charging Infrastructure Tech", level: "Level 4", duration: "4 months", enrolled: 310 },
    ],
  },
  {
    id: "construction-tech",
    name: "School of Construction Tech & Infra Equipment",
    shortName: "Construction Tech",
    description:
      "Applied certifications on construction equipment ops, telematics, GPS-assisted layout, preventive maintenance and digital quality control for higher site productivity.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-orange-400/20 via-amber-400/20 to-red-400/20",
    totalStudents: 3700,
    successRate: 90,
    courses: [
      { name: "Infra Equipment Operator Certificate", level: "Level 4", duration: "8 months", enrolled: 780 },
      { name: "Telematics & Preventive Maintenance", level: "Level 4", duration: "6 months", enrolled: 620 },
      { name: "GPS Layout & Site QA", level: "Level 3", duration: "4 months", enrolled: 340 },
    ],
  },
  {
    id: "water-sanitation-fm",
    name: "School of Water, Sanitation & Facility Management",
    shortName: "Water & FM",
    description:
      "Certification courses in pump & pipeline diagnostics, water quality monitoring, sanitation tech and efficient facility operations for urban and institutional settings.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-teal-400/20 via-green-400/20 to-cyan-400/20",
    totalStudents: 2100,
    successRate: 92,
    courses: [
      { name: "Pump & Pipeline Diagnostics", level: "Level 3", duration: "4 months", enrolled: 610 },
      { name: "Water Quality & Treatment Certificate", level: "Level 4", duration: "6 months", enrolled: 520 },
      { name: "Facility Operations & Sanitation", level: "Level 3", duration: "5 months", enrolled: 380 },
    ],
  },
];

const CertificationSchoolsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-scroll with pause on hover
  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % schools.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? schools.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % schools.length);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const currentSchool = schools[currentIndex];

  return (
    <section
      className="relative py-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Industry-Aligned Certification Schools Carousel"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dxzhnns58/video/upload/v1763201620/2792967-uhd_2160_1440_25fps_u4mo5l.mp4"
            type="video/mp4"
          />
          <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black"></div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/50 to-black"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-100 to-red-100 bg-clip-text text-transparent">
            Industry-Aligned Certification Schools
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Short-term and advanced certifications co-designed with industry, offering hands-on training and recognized credentials for future-ready careers.
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-5xl relative group">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${currentSchool.gradient} rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500`}
          ></div>

          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            {/* Image Section */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={currentSchool.image}
                alt={currentSchool.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Overlay Stats */}
              <div className="absolute top-6 right-6 flex flex-col space-y-2">
                <div className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {currentSchool.successRate}% Success
                </div>
                <div className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {currentSchool.totalStudents.toLocaleString()} Students
                </div>
              </div>

              {/* School Badge */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentSchool.shortName}
                </h3>
                <p className="text-gray-200 text-sm md:text-base max-w-md">
                  {currentSchool.description}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Industry-Certified Programs
              </h4>

              <div className="grid gap-4">
                {currentSchool.courses.map((course, index) => (
                  <div
                    key={index}
                    className="group/course bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-white group-hover/course:text-green-300 transition-colors">
                        {course.name}
                      </h5>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover/course:text-white transition-colors" />
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-lg font-medium">
                        {course.level}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {course.enrolled} enrolled
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center mt-8 space-x-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <div className="flex space-x-2">
            {schools.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-8 h-3 bg-green-500"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-sm text-gray-400 font-medium">
            {currentIndex + 1} / {schools.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CertificationSchoolsCarousel);
