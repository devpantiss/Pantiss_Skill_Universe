import React from "react";
import { motion } from "framer-motion";

const IntMobilityHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/programs/Hero/global_hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
      >
        <p className="text-sm md:text-base tracking-widest uppercase text-blue-300 mb-3">
          Pantiss Skill Universe • International Mobility
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight font-sans">
          International Mobility Programs
        </h1>

        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed max-w-3xl mx-auto">
          Build globally recognised skills, meet international job standards,
          and access overseas opportunities with structured training, language
          support, and employer-ready preparation.
        </p>

        {/* Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            "Global Standards Training",
            "Language & Soft Skills",
            "Visa & Documentation Support",
            "Employer Readiness",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm md:text-base text-gray-100 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
            Apply Now
          </button>
          <button className="px-7 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition font-semibold border border-white/20">
            Download Brochure
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default IntMobilityHero;
