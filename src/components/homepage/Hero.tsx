import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const sectors = [
  "Mines, Steel & Aluminium",
  "Power",
  "Shipping",
  "Infrastructure & Facility Management",
  "Semiconductors & EV Tech",
  "Textiles & Apparels",
  "Green Jobs",
  "Social Development",
];

const colors = [
  "text-yellow-400",
  "text-green-400",
  "text-blue-400",
  "text-pink-400",
  "text-indigo-400",
  "text-red-400",
  "text-teal-400",
  "text-red-400",
];

const HeroSection: React.FC = () => {
  const [currentSectorIndex, setCurrentSectorIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentSector = useMemo(
    () => sectors[currentSectorIndex % sectors.length],
    [currentSectorIndex]
  );

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;
    let timer: number;

    if (!isDeleting && typedText.length < currentSector.length) {
      timer = setTimeout(() => {
        setTypedText(currentSector.substring(0, typedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(currentSector.substring(0, typedText.length - 1));
      }, typingSpeed);
    } else if (!isDeleting && typedText.length === currentSector.length) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setCurrentSectorIndex((prev) => (prev + 1) % sectors.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentSector]);

  return (
    <section className="relative mt-28 w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/djtzx6wo7/video/upload/v1756733216/VN20250901_165205_yy2bdd.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Pantiss Skill Universe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl"
        >
          Empowering Blue-Collar Workforce through Industry-Driven Skilling in
        </motion.p>

        {/* Typing Sector Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 h-10 text-xl md:text-3xl font-semibold"
        >
          <span className={`${colors[currentSectorIndex % colors.length]}`}>
            {typedText} Sector
          </span>
          <span className="text-white animate-pulse">|</span>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg"
        >
          Explore Programs
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;