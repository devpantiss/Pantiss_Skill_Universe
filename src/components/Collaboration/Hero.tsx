import React, { memo } from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = memo(() => {
  return (
    <div className="relative mt-28 text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742999025/9310125-uhd_3840_2160_30fps_l4ievp.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-8 py-20 md:py-32 space-y-10">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6 animate-fade-in text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            <span className="text-red-600">Collaborate</span> with Pantiss Skill University
          </h1>
          <p className="text-lg text-gray-300">
            Together, let’s bridge academia and industry by creating opportunities in 
            <span className="text-green-500 font-semibold"> skill development, research, and workforce transformation</span>.
          </p>

          {/* Call to Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              to="/collaborate/corporates"
              className="px-6 py-4 bg-black/70 border border-red-600/50 rounded-xl text-center font-semibold hover:bg-red-600/20 transition-all duration-300 shadow-md"
            >
              For Corporates
            </Link>
            <Link
              to="/collaborate/institutions"
              className="px-6 py-4 bg-black/70 border border-red-600/50 rounded-xl text-center font-semibold hover:bg-red-600/20 transition-all duration-300 shadow-md"
            >
              For Institutions
            </Link>
            <Link
              to="/collaborate/government"
              className="px-6 py-4 bg-black/70 border border-green-500/50 rounded-xl text-center font-semibold hover:bg-green-500/20 transition-all duration-300 shadow-md"
            >
              For Government
            </Link>
            <Link
              to="/collaborate/research"
              className="px-6 py-4 bg-black/70 border border-green-500/50 rounded-xl text-center font-semibold hover:bg-green-500/20 transition-all duration-300 shadow-md"
            >
              For Research Partners
            </Link>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 1.2s ease-out forwards;
        }
        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
});

export default HeroSection;
