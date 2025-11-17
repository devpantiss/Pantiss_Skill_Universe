import React, { memo, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Play, Pause, Users, Award, Clock, ArrowUpRight } from "lucide-react";

// Define interfaces
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

// Updated schools data - 7 schools focused on blue-collar job training
const schools: School[] = [
  {
    id: "mines",
    name: "School for Mines",
    shortName: "Mines",
    description:
      "Hands-on diploma in mining operations, drilling, blasting, rock mechanics, and underground safety for entry-level mining technicians.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-orange-600/20 via-amber-600/20 to-red-600/20",
    totalStudents: 3200,
    successRate: 93,
    courses: [
      { name: "Diploma in Underground Mining", nsqfLevel: 5, duration: "2 years", enrolled: 680 },
      { name: "Advanced Diploma in Drilling & Blasting", nsqfLevel: 6, duration: "3 years", enrolled: 540 },
      { name: "Diploma in Mine Safety & Rescue", nsqfLevel: 4, duration: "1.5 years", enrolled: 420 },
    ],
  },
  {
    id: "steel-aluminium",
    name: "School for Steel & Aluminium",
    shortName: "Steel & Aluminium",
    description:
      "Practical training in steel rolling, aluminium smelting, furnace operation, and quality testing for plant floor technicians.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-gray-500/20 via-zinc-500/20 to-slate-500/20",
    totalStudents: 2900,
    successRate: 95,
    courses: [
      { name: "Diploma in Steel Plant Operations", nsqfLevel: 5, duration: "2 years", enrolled: 720 },
      { name: "Advanced Diploma in Aluminium Fabrication", nsqfLevel: 6, duration: "3 years", enrolled: 480 },
      { name: "Diploma in Furnace & Quality Control", nsqfLevel: 4, duration: "1.5 years", enrolled: 380 },
    ],
  },
  {
    id: "power-green-energy",
    name: "School for Power & Green Energy",
    shortName: "Power & Green Energy",
    description:
      "Training in turbine operation, solar panel installation, wind turbine maintenance, and electrical safety for renewable energy technicians.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-yellow-500/20 via-lime-500/20 to-green-500/20",
    totalStudents: 3400,
    successRate: 96,
    courses: [
      { name: "Diploma in Solar PV Installation", nsqfLevel: 4, duration: "1.5 years", enrolled: 980 },
      { name: "Advanced Diploma in Wind Turbine Tech", nsqfLevel: 6, duration: "3 years", enrolled: 620 },
      { name: "Diploma in Power Plant Maintenance", nsqfLevel: 5, duration: "2 years", enrolled: 780 },
    ],
  },
  {
    id: "shipping-logistics",
    name: "School for Shipping & Logistics",
    shortName: "Shipping & Logistics",
    description:
      "Training in crane operation, forklift driving, cargo handling, and port safety for blue-collar logistics and shipping roles.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-cyan-500/20 via-teal-500/20 to-blue-500/20",
    totalStudents: 2600,
    successRate: 91,
    courses: [
      { name: "Diploma in Crane & Forklift Operation", nsqfLevel: 4, duration: "1.5 years", enrolled: 820 },
      { name: "Advanced Diploma in Port Logistics", nsqfLevel: 6, duration: "2.5 years", enrolled: 540 },
      { name: "Diploma in Cargo Handling & Safety", nsqfLevel: 5, duration: "2 years", enrolled: 460 },
    ],
  },
  {
    id: "ev",
    name: "School for EV",
    shortName: "EV",
    description:
      "Practical diploma in battery assembly, charging station setup, EV motor repair, and diagnostics for electric vehicle technicians.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad8e9d5e2c?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    totalStudents: 2100,
    successRate: 97,
    courses: [
      { name: "Diploma in EV Battery Systems", nsqfLevel: 5, duration: "2 years", enrolled: 680 },
      { name: "Advanced Diploma in Charging Infrastructure", nsqfLevel: 6, duration: "3 years", enrolled: 420 },
      { name: "Diploma in EV Drivetrain Repair", nsqfLevel: 4, duration: "1.5 years", enrolled: 510 },
    ],
  },
  {
    id: "construction-infra",
    name: "School for Construction Tech & Infra Equipment",
    shortName: "Construction & Infra",
    description:
      "Training on excavators, dozers, cranes, concrete pumps, and site safety for heavy equipment operators and technicians.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-amber-600/20 via-orange-600/20 to-red-600/20",
    totalStudents: 3800,
    successRate: 94,
    courses: [
      { name: "Diploma in Excavator & Dozer Operation", nsqfLevel: 4, duration: "1.5 years", enrolled: 980 },
      { name: "Advanced Diploma in Crane Operations", nsqfLevel: 6, duration: "3 years", enrolled: 720 },
      { name: "Diploma in Concrete Equipment Tech", nsqfLevel: 5, duration: "2 years", enrolled: 640 },
    ],
  },
  {
    id: "water-sanitation",
    name: "School for Water, Sanitation & Facility Management",
    shortName: "Water & Sanitation",
    description:
      "Diploma in plumbing, pipeline installation, sewage systems, water treatment, and building maintenance for sanitation technicians.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop&crop=entropy",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    totalStudents: 2400,
    successRate: 90,
    courses: [
      { name: "Diploma in Plumbing & Pipeline Tech", nsqfLevel: 4, duration: "1.5 years", enrolled: 780 },
      { name: "Advanced Diploma in Sewage Systems", nsqfLevel: 6, duration: "3 years", enrolled: 480 },
      { name: "Diploma in Water Treatment Operations", nsqfLevel: 5, duration: "2 years", enrolled: 560 },
    ],
  },
];

const DiplomaSchoolsCarousel: React.FC = () => {
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
      aria-label="Blue-Collar Diploma Schools Carousel"
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
            Blue-Collar Diploma Schools
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Job-ready diploma programs with 6-month paid internships, NSQF certification, and 100% placement in core industries
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
                    <div className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {currentSchool.totalStudents.toLocaleString()} Trained
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
                    NSQF-Aligned Blue-Collar Diplomas
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

export default memo(DiplomaSchoolsCarousel);