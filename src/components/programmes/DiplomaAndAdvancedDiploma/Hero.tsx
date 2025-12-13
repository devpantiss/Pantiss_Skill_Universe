import React from "react";
import { motion } from "framer-motion";

const DiplomaHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/djtzx6wo7/image/upload/v1756907996/WhatsApp_Image_2025-09-03_at_7.27.27_PM_s7fkrs.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/60 to-black/80 backdrop-blur-sm"></div>

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

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-black to-red-600" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-black to-green-600" />

      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default DiplomaHero;
