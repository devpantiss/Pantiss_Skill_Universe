import React, { memo, useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Award,
  Clock,
  ArrowUpRight,
  Globe,
} from "lucide-react";

interface Course {
  name: string;
  skillLevel: string;
  duration: string;
  participants: number;
}

interface Track {
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

const tracks: Track[] = [
  {
    id: "gulf",
    name: "Mobility Track: Gulf Region (ME)",
    shortName: "Gulf",
    description:
      "Job readiness for Gulf markets with safety, work discipline, and trade-specific competency preparation.",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-blue-500/20 via-cyan-500/20 to-slate-500/20",
    totalParticipants: 1680,
    successRate: 88,
    courses: [
      { name: "Worksite Safety & Compliance", skillLevel: "Basic", duration: "2 weeks", participants: 520 },
      { name: "Trade Skill Validation (Practical)", skillLevel: "Intermediate", duration: "3 weeks", participants: 460 },
      { name: "Interview + Employer SOP Readiness", skillLevel: "Basic", duration: "2 weeks", participants: 380 },
    ],
  },
  {
    id: "europe",
    name: "Mobility Track: Europe",
    shortName: "Europe",
    description:
      "Structured training aligned to quality, documentation, and employer readiness for European job roles.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-sky-500/20 via-blue-500/20 to-indigo-500/20",
    totalParticipants: 1240,
    successRate: 82,
    courses: [
      { name: "Quality Standards & Work Discipline", skillLevel: "Intermediate", duration: "3 weeks", participants: 420 },
      { name: "Documentation & Verification Prep", skillLevel: "Basic", duration: "2 weeks", participants: 360 },
      { name: "Workplace English Essentials", skillLevel: "Basic", duration: "3 weeks", participants: 520 },
    ],
  },
  {
    id: "asia",
    name: "Mobility Track: Asia-Pacific",
    shortName: "APAC",
    description:
      "Job readiness for high-demand APAC roles with skill mapping, safety, and employer communication.",
    image:
      "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?auto=format&fit=crop&w=1600&q=80",
    gradient: "from-cyan-500/20 via-blue-500/20 to-teal-500/20",
    totalParticipants: 1420,
    successRate: 85,
    courses: [
      { name: "Skill Mapping & Trade Readiness", skillLevel: "Basic", duration: "2 weeks", participants: 460 },
      { name: "Communication & Work Etiquette", skillLevel: "Basic", duration: "2 weeks", participants: 420 },
      { name: "Practical Assessment & Certification", skillLevel: "Intermediate", duration: "3 weeks", participants: 360 },
    ],
  },
];

const IntMobilityTracksCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tracks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  }, []);

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

  const currentTrack = tracks[currentIndex];

  return (
    <section
      className="relative py-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="International Mobility Tracks Carousel"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="https://res.cloudinary.com/dxzhnns58/video/upload/v1763201620/2792967-uhd_2160_1440_25fps_u4mo5l.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/50 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            International Mobility Tracks
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Choose a region-based pathway — aligned training, employer readiness,
            and documentation support for overseas opportunities.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 hover:ring-blue-500"
            aria-label="Previous track"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 hover:ring-blue-500"
            aria-label="Next track"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <div className="mx-auto max-w-5xl">
            <div className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${currentTrack.gradient} rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={currentTrack.image}
                    alt={currentTrack.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-6 right-6 flex flex-col space-y-2">
                    <div className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {currentTrack.successRate}% Success
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentTrack.shortName}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base max-w-md">
                      {currentTrack.description}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <Globe className="w-5 h-5 text-blue-400 mr-2" />
                    Training Modules
                  </h4>

                  <div className="grid gap-4">
                    {currentTrack.courses.map((course, index) => (
                      <div
                        key={index}
                        className="group/course bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-white group-hover/course:text-blue-200 transition-colors">
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

                  <div className="mt-8 flex justify-center">
                    <button className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg text-white">
                      Explore Track
                    </button>
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
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <div className="flex space-x-2">
            {tracks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-8 h-3 bg-blue-500"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-sm text-gray-400 font-medium">
            {currentIndex + 1} / {tracks.length}
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-400">
          Use arrow keys to navigate • Hover to pause • Swipe on mobile
        </div>
      </div>
    </section>
  );
};

export default memo(IntMobilityTracksCarousel);