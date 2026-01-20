import React from "react";
import { motion } from "framer-motion";

const UpskillReskillHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/programs/Hero/hero_6.jpg')",
        }}
      />

      {/* Gradient Overlay with Modern Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/60 to-black/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight font-sans">
          Program Introduction{" "}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed">
          Empowering workers across diverse sectors of the Pantiss Skill
          Universe with advanced, industry-relevant skills. Our structured
          upskilling and reskilling programs bridge skill gaps, enhance
          employability, and prepare individuals for the evolving demands of the
          job market.
        </p>
      </motion.div>
    </section>
  );
};

export default UpskillReskillHero;
