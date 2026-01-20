import React, { memo, useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Play,
  Pause,
  Award,
  Clock,
  ArrowUpRight,
} from "lucide-react";

// Define interfaces for type safety
interface Course {
  name: string;
  skillLevel: string;
  duration: string;
  participants: number;
}

interface School {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  gradient: string;
  totalParticipants: number;
  successRate: number;
  courses: Course[];
}

// Skill Development Bootcamp Programs (sectors)
const schools: School[] = [
  {
    id: "mining-operations",
    name: "Bootcamp: Mining Operations & Safety",
    shortName: "Mining Ops",
    description:
      "Hands-on bootcamp focused on safety-first mine operations, basic equipment handling, and worksite discipline — built for rapid job readiness in mining ecosystems.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451906/dominik-vanyi-Mk2ls9UBO2E-unsplash_1_uk97mb.jpg",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    totalParticipants: 1620,
    successRate: 92,
    courses: [
      {
        name: "Mine Safety Essentials (Bootcamp)",
        skillLevel: "Basic",
        duration: "2 weeks",
        participants: 420,
      },
      {
        name: "HEMM Basics & Worksite Protocol",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 320,
      },
      {
        name: "Maintenance Support (Fitter Basics)",
        skillLevel: "Intermediate",
        duration: "4 weeks",
        participants: 200,
      },
    ],
  },
  {
    id: "steel-aluminium",
    name: "Bootcamp: Steel & Aluminium Shop-Floor Skills",
    shortName: "Steel & Al",
    description:
      "Bootcamp training for welding basics, fabrication practices, and shop-floor safety — designed for foundries, rolling mills, and industrial fabrication roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451904/ant-rozetsky-_qWeqqmpBpU-unsplash_depnwu.jpg",
    gradient: "from-gray-600/20 via-slate-500/20 to-red-500/20",
    totalParticipants: 1840,
    successRate: 90,
    courses: [
      {
        name: "Welding Foundations (Arc / MIG Basics)",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 600,
      },
      {
        name: "Fabrication & Measurement Skills",
        skillLevel: "Intermediate",
        duration: "4 weeks",
        participants: 480,
      },
      {
        name: "Industrial Safety & Work Discipline",
        skillLevel: "Basic",
        duration: "2 weeks",
        participants: 220,
      },
    ],
  },
  {
    id: "power-green",
    name: "Bootcamp: Electrical & Green Energy",
    shortName: "Power & Green",
    description:
      "Bootcamp covering electrical basics, safe wiring practices, solar PV fundamentals, and maintenance support — bridging conventional power with renewable systems.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451905/sungrow-emea-VC-m6ULjJ6Y-unsplash_fjglkj.jpg",
    gradient: "from-yellow-400/20 via-green-400/20 to-cyan-400/20",
    totalParticipants: 2060,
    successRate: 94,
    courses: [
      {
        name: "Electrical Safety + Wiring Basics",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 680,
      },
      {
        name: "Solar PV Installation Fundamentals",
        skillLevel: "Intermediate",
        duration: "4 weeks",
        participants: 520,
      },
      {
        name: "Industrial Maintenance Assistant",
        skillLevel: "Intermediate",
        duration: "4 weeks",
        participants: 360,
      },
    ],
  },
  {
    id: "shipping-logistics",
    name: "Bootcamp: Shipping, Ports & Logistics",
    shortName: "Logistics",
    description:
      "Bootcamp for port handling basics, warehouse operations, and supply chain discipline — designed for rapid placement in logistics and service roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451912/ozren-cuculic-eBKxooPEU5w-unsplash_jphgdn.jpg",
    gradient: "from-blue-400/20 via-cyan-400/20 to-teal-400/20",
    totalParticipants: 1380,
    successRate: 91,
    courses: [
      {
        name: "Port Cargo Handling Basics",
        skillLevel: "Basic",
        duration: "2 weeks",
        participants: 540,
      },
      {
        name: "Warehouse & Inventory Operations",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 420,
      },
      {
        name: "Cold Storage & Handling Support",
        skillLevel: "Intermediate",
        duration: "4 weeks",
        participants: 220,
      },
    ],
  },
  {
    id: "ev",
    name: "Bootcamp: Electric Vehicles & E-Mobility",
    shortName: "EV",
    description:
      "Skill bootcamps for EV servicing basics, battery safety, and diagnostics fundamentals — designed for the growing e-mobility service ecosystem.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451903/chuttersnap-xJLsHl0hIik-unsplash_1_pmlvht.jpg",
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-400/20",
    totalParticipants: 1260,
    successRate: 95,
    courses: [
      {
        name: "EV Technician Foundations",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 540,
      },
      {
        name: "Battery Safety & Handling (Basics)",
        skillLevel: "Intermediate",
        duration: "3 weeks",
        participants: 420,
      },
      {
        name: "Light Diagnostics & Servicing Skills",
        skillLevel: "Basic",
        duration: "2 weeks",
        participants: 300,
      },
    ],
  },
  {
    id: "construction-tech",
    name: "Bootcamp: Construction & Infra Equipment",
    shortName: "Construction",
    description:
      "Bootcamp training for site-ready roles covering basic machinery awareness, formwork practices, and equipment maintenance support.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451909/luan-fonseca-azH6gVcRmBE-unsplash_otmxaa.jpg",
    gradient: "from-amber-300/20 via-rose-300/20 to-slate-400/20",
    totalParticipants: 1720,
    successRate: 89,
    courses: [
      {
        name: "Site Safety & Work Readiness",
        skillLevel: "Basic",
        duration: "2 weeks",
        participants: 560,
      },
      {
        name: "Formwork + Concrete Basics",
        skillLevel: "Intermediate",
        duration: "3 weeks",
        participants: 420,
      },
      {
        name: "Maintenance Support (Fitter Basics)",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 240,
      },
    ],
  },
  {
    id: "water-sanitation-facility",
    name: "Bootcamp: Water, Sanitation & Facility Support",
    shortName: "Water & FM",
    description:
      "Bootcamps focused on pump operations basics, sanitation maintenance, and facility support skills for institutional and community environments.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1763451908/gallery-ds-X_tEarX6svc-unsplash_sy31wa.jpg",
    gradient: "from-teal-400/20 via-emerald-400/20 to-blue-400/20",
    totalParticipants: 1480,
    successRate: 90,
    courses: [
      {
        name: "Pump Operator Basics",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 520,
      },
      {
        name: "Sanitation & Wastewater Support",
        skillLevel: "Basic",
        duration: "3 weeks",
        participants: 420,
      },
      {
        name: "Facility Maintenance (Electrical/Plumbing)",
        skillLevel: "Intermediate",
        duration: "4 weeks",
        participants: 180,
      },
    ],
  },
];

const SkillDevSchoolsCourses: React.FC = () => {
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
    setCurrentIndex((prev) => (prev === 0 ? schools.length - 1 : prev - 1));
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
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
    return () => window.removeEventListener("keydown", handleKeyDown);
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
      aria-label="Skill Development Bootcamp Programs Carousel"
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

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/50 to-black"></div>

        {/* Animated Overlay Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-green-600/30 to-red-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-600/30 to-green-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-green-100 to-red-100 bg-clip-text text-transparent">
            Skill Development Bootcamps
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Short-term, hands-on bootcamps built for real job roles — practical
            training, safety-first discipline, and career support aligned with
            workforce demand across key industries.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 hover:ring-green-500"
            aria-label="Previous program"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 hover:ring-green-500"
            aria-label="Next program"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Main Card */}
          <div className="mx-auto max-w-5xl">
            <div className="relative group">
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
                    Bootcamp Tracks & Modules
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
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {course.duration}
                          </span>
                          <span className="text-xs text-gray-400">
                            Participants: {course.participants}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls & Indicators */}
        <div className="flex items-center justify-center mt-8 space-x-6">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          {/* Indicators */}
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

          {/* Progress Indicator */}
          <div className="text-sm text-gray-400 font-medium">
            {currentIndex + 1} / {schools.length}
          </div>
        </div>

        {/* Navigation Hints */}
        <div className="text-center mt-6 text-sm text-gray-400">
          Use arrow keys to navigate • Hover to pause • Swipe on mobile
        </div>
      </div>
    </section>
  );
};

export default memo(SkillDevSchoolsCourses);
