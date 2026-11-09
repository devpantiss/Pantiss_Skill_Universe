import BackgroundVideo from "../common/BackgroundVideo";
import React from "react";
import { motion } from "framer-motion";

const ProgrammesHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <BackgroundVideo src="/optimized/video/programmes.mp4" className="absolute inset-0 w-full h-full object-cover" defer />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />

      {/* Content */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Explore Our <span className="text-red-500">Programmes</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Empowering students with industry-ready skills, hands-on training, and
          a future-focused curriculum to lead in tomorrow’s workforce.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#programme-directory" className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-full shadow-lg transition">
            View All Programmes
          </a>
          <a href="/contact-us" className="bg-red-500 hover:bg-red-600 text-white text-lg px-6 py-3 rounded-full shadow-lg transition">
            Admission Enquiry
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ProgrammesHero;
