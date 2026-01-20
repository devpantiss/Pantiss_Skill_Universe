import React from "react";
import { motion } from "framer-motion";

const ITIHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/programs/Hero/hero_3.jpg')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/10"></div>

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
          Hands-on technical training designed to build strong vocational skills
          for aspiring technicians and craftsmen. Our ITI programs offer
          practical workshops, industry-standard tools, and expert guidance to
          prepare students for careers across trades like Electrical, Fitter,
          Welding, Mechanical, and more.
        </p>
      </motion.div>
    </section>
  );
};

export default ITIHero;
