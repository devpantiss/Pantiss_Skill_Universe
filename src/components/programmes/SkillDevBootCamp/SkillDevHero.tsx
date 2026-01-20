import React from "react";
import { motion } from "framer-motion";

const SkillDevHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/programs/Hero/hero_2.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/20" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
      >
        <p className="text-sm md:text-base tracking-widest uppercase text-gray-300 mb-3">
          Pantiss Skill Universe • Bootcamp Program
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight font-sans">
          Skill Development Bootcamp
        </h1>

        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed max-w-3xl mx-auto">
          Get job-ready with hands-on, industry-driven training built for real
          work environments. Learn practical skills, gain confidence on tools &
          equipment, and earn certification support — designed to help you
          transition from learner to professional faster.
        </p>

        {/* Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            "Hands-on Training",
            "Industry-Aligned Curriculum",
            "Certification Support",
            "Career Guidance",
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
          <button className="px-7 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition font-semibold shadow-lg">
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

export default SkillDevHero;