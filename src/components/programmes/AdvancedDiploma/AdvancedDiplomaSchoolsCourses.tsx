import React, { memo, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Play, Pause, Award, Clock, ArrowUpRight } from "lucide-react";

// Interfaces
interface Course {
  name: string;
  skillLevel: string; // NSQF Level
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

// 8 Advanced Diploma Schools – Blue-Collar, NSQF Level 5–6
const schools: School[] = [
  {
    id: "mines",
    name: "Advanced Diploma in Mining Technology",
    shortName: "Mines",
    description:
      "3-year advanced diploma with 1-year paid internship in underground mining, blasting, rock mechanics, and mine safety systems.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-orange-600/20 via-amber-600/20 to-red-600/20",
    totalParticipants: 2100,
    successRate: 95,
    courses: [
      { name: "Advanced Underground Mining Operations", skillLevel: "NSQF Level 6", duration: "3 years", participants: 540 },
      { name: "Mine Blasting & Rock Engineering", skillLevel: "NSQF Level 6", duration: "3 years", participants: 480 },
      { name: "Mine Safety & Rescue Systems", skillLevel: "NSQF Level 5", duration: "2 years", participants: 420 },
    ],
  },
  {
    id: "steel-aluminium",
    name: "Advanced Diploma in Steel & Aluminium Processing",
    shortName: "Steel & Aluminium",
    description:
      "Industry-integrated training in steel rolling, aluminium smelting, furnace automation, and quality control with live plant exposure.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-gray-600/20 via-zinc-600/20 to-slate-600/20",
    totalParticipants: 1980,
    successRate: 96,
    courses: [
      { name: "Steel Rolling & Furnace Operations", skillLevel: "NSQF Level 6", duration: "3 years", participants: 620 },
      { name: "Aluminium Smelting & Fabrication", skillLevel: "NSQF Level 6", duration: "3 years", participants: 510 },
      { name: "Metallurgical Quality Control", skillLevel: "NSQF Level 5", duration: "2 years", participants: 380 },
    ],
  },
  {
    id: "power-green-energy",
    name: "Advanced Diploma in Power & Green Energy",
    shortName: "Power & Green Energy",
    description:
      "Advanced training in power plant O&M, solar PV systems, wind turbine technology, and grid integration with 6-month live project.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-yellow-500/20 via-lime-500/20 to-green-500/20",
    totalParticipants: 2300,
    successRate: 97,
    courses: [
      { name: "Power Plant Operation & Maintenance", skillLevel: "NSQF Level 6", duration: "3 years", participants: 720 },
      { name: "Solar PV System Design & Installation", skillLevel: "NSQF Level 6", duration: "3 years", participants: 680 },
      { name: "Wind Turbine Technician Training", skillLevel: "NSQF Level 5", duration: "2 years", participants: 510 },
    ],
  },
  {
    id: "shipping-logistics",
    name: "Advanced Diploma in Shipping & Logistics",
    shortName: "Shipping & Logistics",
    description:
      "Port-centric advanced diploma in crane operations, cargo handling, supply chain automation, and international logistics.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-cyan-500/20 via-teal-500/20 to-blue-500/20",
    totalParticipants: 1760,
    successRate: 93,
    courses: [
      { name: "Advanced Crane & Material Handling", skillLevel: "NSQF Level 6", duration: "3 years", participants: 580 },
      { name: "Port Automation & Logistics", skillLevel: "NSQF Level 6", duration: "3 years", participants: 490 },
      { name: "International Cargo Management", skillLevel: "NSQF Level 5", duration: "2 years", participants: 420 },
    ],
  },
  {
    id: "ev",
    name: "Advanced Diploma in Electric Vehicle Technology",
    shortName: "EV",
    description:
      "Future-ready diploma in EV battery systems, charging infrastructure, motor control, and vehicle diagnostics with OEM partnerships.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad8e9d5e2c?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    totalParticipants: 1540,
    successRate: 98,
    courses: [
      { name: "EV Battery Assembly & Testing", skillLevel: "NSQF Level 6", duration: "3 years", participants: 480 },
      { name: "Charging Station Design & O&M", skillLevel: "NSQF Level 6", duration: "3 years", participants: 420 },
      { name: "EV Drivetrain & Diagnostics", skillLevel: "NSQF Level 5", duration: "2 years", participants: 510 },
    ],
  },
  {
    id: "construction-infra",
    name: "Advanced Diploma in Construction Tech & Infra Equipment",
    shortName: "Construction & Infra",
    description:
      "Heavy equipment operator training with excavators, cranes, dozers, and concrete machinery plus site safety and project execution.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-amber-600/20 via-orange-600/20 to-red-600/20",
    totalParticipants: 2800,
    successRate: 94,
    courses: [
      { name: "Advanced Heavy Equipment Operation", skillLevel: "NSQF Level 6", duration: "3 years", participants: 880 },
      { name: "Crane & Lifting Technology", skillLevel: "NSQF Level 6", duration: "3 years", participants: 720 },
      { name: "Concrete & Piling Equipment Tech", skillLevel: "NSQF Level 5", duration: "2 years", participants: 640 },
    ],
  },
  {
    id: "water-sanitation",
    name: "Advanced Diploma in Water, Sanitation & Facility Management",
    shortName: "Water & Sanitation",
    description:
      "Specialized training in water treatment, sewage systems, plumbing design, and facility maintenance with urban infra focus.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    totalParticipants: 1680,
    successRate: 91,
    courses: [
      { name: "Water Treatment Plant Operations", skillLevel: "NSQF Level 6", duration: "3 years", participants: 520 },
      { name: "Sewage & Pipeline Systems", skillLevel: "NSQF Level 6", duration: "3 years", participants: 480 },
      { name: "Plumbing Design & Facility O&M", skillLevel: "NSQF Level 5", duration: "2 years", participants: 560 },
    ],
  },
];

const AdvancedDiplomaSchoolsCourses: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-scroll
  useEffect(() => {
    if (!isPlaying || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % schools.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, isPaused]);

  // Navigation
  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? schools.length - 1 : prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % schools.length);
  }, []);

  // Touch handlers
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
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
      aria-label="Advanced Diploma Schools Carousel"
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
            Advanced Diploma Programs
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            2–3 year NSQF Level 5–6 programs with 6–12 months paid internship, live equipment training, and direct placement in core industries
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-500"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
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
              <div className={`absolute inset-0 bg-gradient-to-r ${currentSchool.gradient} rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={currentSchool.image}
                    alt={currentSchool.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-6 right-6 flex flex-col space-y-2">
                    <div className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {currentSchool.successRate}% Placement
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentSchool.shortName}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base max-w-md">
                      {currentSchool.description}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    NSQF Level 5–6 Advanced Diplomas
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
                            {course.skillLevel}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {course.duration}
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

        {/* Controls */}
        <div className="flex items-center justify-center mt-8 space-x-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
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

        <div className="text-center mt-6 text-sm text-gray-400">
          Use arrow keys to navigate • Hover to pause • Swipe on mobile
        </div>
      </div>
    </section>
  );
};

export default memo(AdvancedDiplomaSchoolsCourses);