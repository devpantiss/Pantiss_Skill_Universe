import React, { memo, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Play, Pause, Users, Award, Clock, ArrowUpRight } from "lucide-react";

// Define interfaces for type safety
interface Course {
  name: string;
  nsqfLevel: number;
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

// Updated schools data — 7 sectors for Apprenticeship & Dual Training
const schools: School[] = [
  {
    id: "mines",
    name: "School of Mines",
    shortName: "Mines",
    description:
      "Apprenticeship pathways focused on mine-site operations, HEMM handling, blasting support, and mine safety systems with on-site mentors.",
    image:
      "https://images.unsplash.com/photo-1532545321809-3a8c3f6a1d7a?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-amber-600/20 via-orange-500/20 to-red-500/20",
    totalStudents: 2400,
    successRate: 93,
    courses: [
      { name: "Mining Site Supervisor (Apprenticeship)", nsqfLevel: 5, duration: "9 months", enrolled: 480 },
      { name: "HEMM Operator (Excavator/Dumper)", nsqfLevel: 4, duration: "6 months", enrolled: 620 },
      { name: "Mine Safety & Ventilation", nsqfLevel: 5, duration: "4 months", enrolled: 300 },
    ],
  },
  {
    id: "steel-aluminium",
    name: "School of Steel & Aluminium",
    shortName: "Steel & Aluminium",
    description:
      "Dual training in furnace operations, plate fabrication, welding, quality assurance and shop-floor safety in steel and aluminium plants.",
    image:
      "https://images.unsplash.com/photo-1549921296-3b0be7a9d3b4?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-gray-600/20 via-slate-500/20 to-red-600/20",
    totalStudents: 3000,
    successRate: 92,
    courses: [
      { name: "Welding & Fabrication Apprentice", nsqfLevel: 4, duration: "6 months", enrolled: 700 },
      { name: "Rolling Mill Assistant (Apprenticeship)", nsqfLevel: 5, duration: "8 months", enrolled: 500 },
      { name: "Quality Assurance in Metals", nsqfLevel: 5, duration: "5 months", enrolled: 420 },
    ],
  },
  {
    id: "power-green",
    name: "School of Power & Green Energy",
    shortName: "Power & Green Energy",
    description:
      "Earn-while-you-learn programs combining power plant rotations, solar PV installation, storage basics and safe electrical practices.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-yellow-400/20 via-green-400/20 to-teal-400/20",
    totalStudents: 3400,
    successRate: 95,
    courses: [
      { name: "Power Plant Technician (Apprenticeship)", nsqfLevel: 5, duration: "10 months", enrolled: 800 },
      { name: "Solar PV Installer & Maintainer", nsqfLevel: 4, duration: "4 months", enrolled: 900 },
      { name: "Energy Storage Assistant", nsqfLevel: 5, duration: "6 months", enrolled: 350 },
    ],
  },
  {
    id: "shipping-logistics",
    name: "School of Shipping & Logistics",
    shortName: "Shipping & Logistics",
    description:
      "Hands-on dual training in port operations, warehouse systems, cold-chain logistics and freight operations with employer placements.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&q=80&w=1200&h=800&auto=format&fit=crop&crop=entropy",
    gradient: "from-cyan-400/20 via-blue-400/20 to-indigo-400/20",
    totalStudents: 1900,
    successRate: 91,
    courses: [
      { name: "Port & Cargo Handling Apprentice", nsqfLevel: 4, duration: "5 months", enrolled: 650 },
      { name: "Warehouse Supervisor Trainee", nsqfLevel: 5, duration: "6 months", enrolled: 420 },
      { name: "Cold-chain Technician", nsqfLevel: 4, duration: "4 months", enrolled: 280 },
    ],
  },
  {
    id: "ev",
    name: "School of Electric Vehicles",
    shortName: "Electric Vehicles",
    description:
      "Workplace apprenticeships in EV diagnostics, battery handling, BMS fundamentals and charging infrastructure for emerging mobility services.",
    image:
      "https://images.unsplash.com/photo-1549921296-1c8a0b5c7eab?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-indigo-500/20 via-violet-400/20 to-pink-400/20",
    totalStudents: 1600,
    successRate: 94,
    courses: [
      { name: "EV Service Technician (Apprenticeship)", nsqfLevel: 5, duration: "8 months", enrolled: 520 },
      { name: "Battery Assembly & Safety", nsqfLevel: 4, duration: "4 months", enrolled: 420 },
      { name: "Charging Infrastructure Assistant", nsqfLevel: 4, duration: "3 months", enrolled: 260 },
    ],
  },
  {
    id: "construction",
    name: "School of Construction Tech & Infra Equipment",
    shortName: "Construction Tech",
    description:
      "Dual training in equipment operation, site supervision, formwork, concrete tech and preventive maintenance for infra projects.",
    image:
      "https://images.unsplash.com/photo-1505765055195-5f6b6a1f6b6d?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-yellow-600/20 via-amber-500/20 to-rose-500/20",
    totalStudents: 3800,
    successRate: 90,
    courses: [
      { name: "Construction Equipment Operator (Apprenticeship)", nsqfLevel: 4, duration: "6 months", enrolled: 900 },
      { name: "Site Supervisor Trainee", nsqfLevel: 5, duration: "9 months", enrolled: 540 },
      { name: "Concrete & Formwork Technician", nsqfLevel: 4, duration: "5 months", enrolled: 320 },
    ],
  },
  {
    id: "water-sanitation",
    name: "School of Water, Sanitation & Facility Management",
    shortName: "Water & Facilities",
    description:
      "Apprenticeships in pump operation, water treatment basics, sanitation services and facility maintenance for institutional and municipal settings.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-teal-400/20 via-green-400/20 to-blue-500/20",
    totalStudents: 2100,
    successRate: 92,
    courses: [
      { name: "Water Treatment Operator (Apprenticeship)", nsqfLevel: 4, duration: "6 months", enrolled: 580 },
      { name: "Sanitation Systems Technician", nsqfLevel: 4, duration: "4 months", enrolled: 420 },
      { name: "Facility Services Assistant", nsqfLevel: 3, duration: "3 months", enrolled: 300 },
    ],
  },
];

const DualTrainingSchoolsCarousel: React.FC = () => {
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
    setCurrentIndex(prev => prev === 0 ? schools.length - 1 : prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % schools.length);
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
      aria-label="Apprenticeship & Dual Training Schools Carousel"
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
            Apprenticeship & Dual Training Schools
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Earn-while-you-learn programs with lab + on-the-job rotations, aligned to NSQF standards
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
            aria-label="Previous school"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 hover:ring-green-500"
            aria-label="Next school"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Main Card */}
          <div className="mx-auto max-w-5xl">
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${currentSchool.gradient} rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
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
                    NSQF-Aligned Apprenticeship Tracks
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
                            Level {course.nsqfLevel}
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
          </div>
        </div>

        {/* Controls & Indicators */}
        <div className="flex items-center justify-center mt-8 space-x-6">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
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

export default memo(DualTrainingSchoolsCarousel);
