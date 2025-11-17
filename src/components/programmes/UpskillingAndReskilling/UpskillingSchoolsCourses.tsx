import React, { memo, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Play, Pause, Award, Clock, ArrowUpRight } from "lucide-react";

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

// Updated schools data — 7 sectors for Upskilling & Reskilling
const schools: School[] = [
  {
    id: "mines",
    name: "Upskilling in Mines",
    shortName: "Mines",
    description:
      "Short modules for mine-site supervisors, HEMM assistants and safety officers — practical training on digital checklists, predictive maintenance basics and safety behaviour change.",
    image:
      "https://images.unsplash.com/photo-1532545321809-3a8c3f6a1d7a?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    totalParticipants: 2400,
    successRate: 93,
    courses: [
      { name: "HEMM Basics & Monitoring (Micro)", skillLevel: "Basic", duration: "4 weeks", participants: 320 },
      { name: "Predictive Maintenance Fundamentals", skillLevel: "Intermediate", duration: "8 weeks", participants: 210 },
      { name: "Mine Safety Behaviour & Systems", skillLevel: "Intermediate", duration: "6 weeks", participants: 180 },
    ],
  },
  {
    id: "steel-aluminium",
    name: "Upskilling in Steel & Aluminium",
    shortName: "Steel & Aluminium",
    description:
      "Reskilling tracks for furnace assistants, advanced welding processes and metallurgical QA focused on process optimisation and energy efficiency.",
    image:
      "https://images.unsplash.com/photo-1549921296-3b0be7a9d3b4?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-gray-600/20 via-slate-500/20 to-red-600/20",
    totalParticipants: 3000,
    successRate: 92,
    courses: [
      { name: "Advanced Welding Techniques (Short)", skillLevel: "Intermediate", duration: "6 weeks", participants: 420 },
      { name: "Metallurgical QA & Defect Reduction", skillLevel: "Intermediate", duration: "8 weeks", participants: 300 },
      { name: "Energy Efficient Furnace Ops", skillLevel: "Basic", duration: "4 weeks", participants: 200 },
    ],
  },
  {
    id: "power-green",
    name: "Upskilling in Power & Green Energy",
    shortName: "Power & Green Energy",
    description:
      "Targeted modules in solar PV maintenance, inverter diagnostics, energy auditing and storage basics to support the green transition.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-yellow-400/20 via-green-400/20 to-teal-400/20",
    totalParticipants: 3400,
    successRate: 95,
    courses: [
      { name: "Solar PV Installation & Maintenance", skillLevel: "Basic", duration: "6 weeks", participants: 720 },
      { name: "Inverter & Battery Diagnostics (Hands-on)", skillLevel: "Intermediate", duration: "8 weeks", participants: 540 },
      { name: "Energy Auditing Essentials", skillLevel: "Basic", duration: "4 weeks", participants: 380 },
    ],
  },
  {
    id: "shipping-logistics",
    name: "Upskilling in Shipping & Logistics",
    shortName: "Shipping & Logistics",
    description:
      "Practical short courses for warehouse digitisation, cold-chain handling, last-mile optimisation and inventory analytics to improve throughput.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-cyan-400/20 via-blue-400/20 to-indigo-400/20",
    totalParticipants: 1900,
    successRate: 91,
    courses: [
      { name: "Warehouse Digital Tools (WMS) — Intro", skillLevel: "Basic", duration: "3 weeks", participants: 460 },
      { name: "Cold-chain Operations & Safety", skillLevel: "Intermediate", duration: "6 weeks", participants: 320 },
      { name: "Last-mile Efficiency Practices", skillLevel: "Basic", duration: "4 weeks", participants: 250 },
    ],
  },
  {
    id: "ev",
    name: "Upskilling in Electric Vehicles",
    shortName: "Electric Vehicles",
    description:
      "Reskilling modules for EV service technicians: battery health diagnostics, BMS basics, charging safety and retrofit workflows for legacy workshops.",
    image:
      "https://images.unsplash.com/photo-1549921296-1c8a0b5c7eab?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-indigo-500/20 via-violet-400/20 to-pink-400/20",
    totalParticipants: 1600,
    successRate: 94,
    courses: [
      { name: "Battery Health & Diagnostics (Short)", skillLevel: "Basic", duration: "4 weeks", participants: 420 },
      { name: "EV Service Workflow & Safety", skillLevel: "Intermediate", duration: "6 weeks", participants: 380 },
      { name: "Charging Infrastructure Basics", skillLevel: "Basic", duration: "3 weeks", participants: 220 },
    ],
  },
  {
    id: "construction",
    name: "Upskilling in Construction Tech & Infra Equipment",
    shortName: "Construction Tech",
    description:
      "Short upskilling on equipment telematics, GPS-assisted layout, preventive maintenance and digital quality checks to raise on-site productivity.",
    image:
      "https://images.unsplash.com/photo-1505765055195-5f6b6a1f6b6d?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-yellow-600/20 via-amber-500/20 to-rose-500/20",
    totalParticipants: 3800,
    successRate: 90,
    courses: [
      { name: "Equipment Telematics & Data Basics", skillLevel: "Basic", duration: "5 weeks", participants: 740 },
      { name: "GPS Site Layout & Digitisation", skillLevel: "Intermediate", duration: "6 weeks", participants: 520 },
      { name: "Preventive Maintenance for Infra Equipment", skillLevel: "Basic", duration: "4 weeks", participants: 380 },
    ],
  },
  {
    id: "water-sanitation",
    name: "Upskilling in Water, Sanitation & Facility Management",
    shortName: "Water & Facilities",
    description:
      "Practical reskilling for pump diagnostics, water quality monitoring, smart sanitation systems and efficient facility operations for institutions and municipalities.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=800&fit=crop&crop=entropy",
    gradient: "from-teal-400/20 via-green-400/20 to-blue-500/20",
    totalParticipants: 2100,
    successRate: 92,
    courses: [
      { name: "Pump Operation & Diagnostics (Short)", skillLevel: "Basic", duration: "4 weeks", participants: 520 },
      { name: "Water Quality Testing Fundamentals", skillLevel: "Basic", duration: "3 weeks", participants: 340 },
      { name: "Facility Efficiency & Ops", skillLevel: "Intermediate", duration: "6 weeks", participants: 260 },
    ],
  },
];

const UpskillingReskillingSchoolsCourses: React.FC = () => {
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
      aria-label="Upskilling & Reskilling Schools Carousel"
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
            Upskilling & Reskilling Schools
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Short, industry-aligned upskilling and reskilling modules that rapidly upgrade on-job capabilities across core sectors.
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
                      {currentSchool.totalParticipants.toLocaleString()} Participants
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
                    Short Stackable Upskilling Modules
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
                          <span className="flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            {course.participants} trained
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

export default memo(UpskillingReskillingSchoolsCourses);
