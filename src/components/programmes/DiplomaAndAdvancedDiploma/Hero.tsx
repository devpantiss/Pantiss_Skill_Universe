import React from "react";
import { motion } from "framer-motion";

const DiplomaHero: React.FC = () => {
  // Use Vite's BASE_URL so this works even when deployed under a sub-path.
  const heroImageUrl = "/programs/Hero/hero_1.jpg";

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/10" />

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
          Industry-aligned Diploma and Polytechnic programs designed to equip
          learners with strong technical skills across Mines, Steel & Aluminium,
          Power & Energy, Shipping & Logistics, Infrastructure & Facility
          Management, Semiconductors & EV Technology, Green Jobs, Textiles &
          Apparels, and Social Development. Gain hands-on expertise and
          career-ready training aligned with national skill standards.
        </p>
      </motion.div>
    </section>
  );
};

export default DiplomaHero;
