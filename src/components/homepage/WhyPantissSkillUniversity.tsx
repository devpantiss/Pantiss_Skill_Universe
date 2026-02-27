import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  "/Homepage/why/mines.jpg",
  "/Homepage/why/steel.jpg",
  "/Homepage/why/greenenergy.jpg",
  "/Homepage/why/shippingandlogistics.jpg",
  "/Homepage/why/construction.jpg",
  "/Homepage/why/greenjobs.jpg"
];

const schoolLogos = [
  {
    name: "School for Mines, Steel & Aluminium",
    src: "/SCHOOLS/MINES-BG.png",
  },
  {
    name: "School for Furniture & Fitting",
    src: "/SCHOOLS/FURNITURE-BG.png",
  },
  {
    name: "School for Power & Green Energy",
    src: "/SCHOOLS/POEN-BG.png",
  },
  {
    name: "School for Shipping & Logistics",
    src: "/SCHOOLS/SHIPPIN-BG.png",
  },
  {
    name: "School for Construction Tech & Infra Equipments",
    src: "/SCHOOLS/INFRA-BG.png",
  },
  {
    name: "School for Green Jobs",
    src: "/SCHOOLS/GREENJOBS-BG.png",
  },
];

// CSS animation style for seamless vertical scroll — replaces 60fps setInterval
const scrollAnimationStyle = `
  @keyframes verticalScroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  .school-logo-scroll {
    animation: verticalScroll 24s linear infinite;
  }
  .school-logo-scroll:hover {
    animation-play-state: paused;
  }
`;

const WhyPantissSkillUniversity: React.FC = React.memo(() => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  return (
    <div className="relative w-full h-[690px] overflow-hidden font-sans">
      <style>{scrollAnimationStyle}</style>

      {/* Background Image Slider — only render current slide */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current]}
          alt={`Campus view ${current + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black z-10" />

      {/* Main Content */}
      <div className="relative z-20 text-white px-6 sm:px-12 pt-16 sm:pt-24 max-w-7xl h-full mx-auto flex flex-col sm:flex-row gap-8">
        <div className="max-w-lg flex flex-col justify-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WHY <span className="text-red-600">PANTISS SKILL</span>{" "}
            <span className="text-green-600">UNIVERSE</span>?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg mb-4 leading-relaxed text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering youth from industrial and emerging sectors with
            world-class education, technical skills, and leadership across
            India's key growth industries.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl font-semibold mb-6 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading transformation for a just, skilled, and sustainable future.
          </motion.p>
          <motion.button
            className="px-6 py-3 border-2 border-white rounded-lg text-white font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
            aria-label="Learn More About Pantiss Skill University"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Pantiss
          </motion.button>
        </div>

        {/* Sidebar: Pantiss Schools Marquee — now CSS-animated, zero re-renders */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full w-72 sm:w-80 bg-black/80 text-white z-10 overflow-hidden rounded-l-xl flex-col">
          <div className="bg-black p-4 z-20">
            <h3 className="text-lg font-bold text-red-600 text-center tracking-wide">
              Schools at Pantiss Skill University
            </h3>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="school-logo-scroll">
              <div className="flex flex-col items-center gap-6 pt-4">
                {/* Render the logos twice for seamless loop */}
                {[...schoolLogos, ...schoolLogos].map((school, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center w-full px-4"
                    style={{ height: "120px" }}
                  >
                    <div className="w-48 h-24 flex items-center justify-center">
                      <img
                        src={school.src}
                        alt={`${school.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 z-30">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
          aria-label="Previous Slide"
        >
          <FiChevronLeft size={28} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 z-30">
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
          aria-label="Next Slide"
        >
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Subscribe Tag */}
      <motion.div
        className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-40 bg-green-600 text-white px-3 py-1.5 rotate-90 origin-bottom-right font-bold shadow-md rounded-sm"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        SUBSCRIBE
      </motion.div>
    </div>
  );
});

WhyPantissSkillUniversity.displayName = "WhyPantissSkillUniversity";

export default WhyPantissSkillUniversity;
