import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const slides = [
  "https://www.amity.edu/backoffice/uploads/HomeBanner/2fblg_lucknow.jpg",
  "https://www.amity.edu/backoffice/uploads/HomeBanner/6fblg_mumbai.jpg",
  "https://www.amity.edu/backoffice/uploads/HomeBanner/10fblg_ranchi.jpg",
];

const campuses = [
  "Talcher",
  "Bhawanipatna",
  "Sukinda",
  "Paradip",
  "Jharsuguda",
  "Joda",
];

const schoolLogos = [
  {
    name: "School for Mines, Steel & Aluminium",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_MINES-removebg-preview_airmxv.png",
  },
  {
    name: "School for Steel & Aluminium",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_STEEL___ALUMINIUM-removebg-preview_lqtpri.png",
  },
  {
    name: "School for Power & Green Energy",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_POWER___GREEN_ENERGY-removebg-preview_tinr0w.png",
  },
  {
    name: "School for Shipping & Logistics",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_SHIPPING___LOGISTICS-removebg-preview_ktlsje.png",
  },
  // {
  //   name: "School for Semiconductors & Robotics",
  //   src: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812463/Pantiss_School__12_-removebg-preview_akcpud.png",
  // },
  {
    name: "School for Construction Tech & Infra Equipments",
    src: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812468/Pantiss_School__14_-removebg-preview_ayzfu7.png",
  },
  {
    name: "School for Water, Sanitation & Facility Management",
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_WASH-removebg-preview_s8wofi.png",
  }
];

export default function WhyPantissSkillUniversity() {
  const [current, setCurrent] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    const logoHeight = 120; // Height per logo item (logo + gap + padding)
    const totalHeight = schoolLogos.length * logoHeight;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev - 0.5; // Slower, smoother scroll
        // Reset when the first set has completely scrolled out for view
        // This creates a seamless loop since we have duplicate content
        if (newPosition <= -totalHeight) {
          return 0;
        }
        return newPosition;
      });
    }, 16); // ~60fps for smoother animation

    return () => {
      clearInterval(interval);
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-[690px] overflow-hidden font-sans">
      {/* Background Image Slider */}
      <AnimatePresence>
        {slides.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Campus view ${idx + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: current === idx ? 1 : 0,
              scale: current === idx ? 1 : 1.05,
            }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
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
            <span className="text-green-600">UNIVERSITY</span>?
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

        {/* Sidebar: Pantiss Schools Marquee */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full w-72 sm:w-80 bg-black/80 text-white z-10 overflow-hidden rounded-l-xl flex-col">
          <div className="bg-black p-4 z-20">
            <h3 className="text-lg font-bold text-red-600 text-center tracking-wide">
              Schools at Pantiss Skill University
            </h3>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div
              className="absolute w-full"
              style={{
                transform: `translateY(${scrollPosition}px)`,
                transition: "none", // Remove any CSS transitions for smooth JS animation
              }}
            >
              <div className="flex flex-col items-center gap-6 pt-4">
                {/* Render the logos twice for seamless loop */}
                {[...schoolLogos, ...schoolLogos].map((school, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center w-full px-4"
                    style={{ height: "120px" }} // Fixed height for consistent spacing
                  >
                    <div className="w-48 h-24 flex items-center justify-center">
                      <img
                        src={school.src}
                        alt={`${school.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
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
          onClick={() =>
            setCurrent((current - 1 + slides.length) % slides.length)
          }
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
          aria-label="Previous Slide"
        >
          <FiChevronLeft size={28} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 z-30">
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
          aria-label="Next Slide"
        >
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Campus Bar */}
      {/* Campus Bar */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl bg-black/90 py-6 px-6 flex flex-col lg:flex-row gap-6 items-center justify-between text-white font-semibold z-20 rounded-t-lg shadow-lg">
        {/* Heading */}
        <motion.h2
          className="md:text-3xl text-2xl font-extrabold leading-tight tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR <span className="text-red-600">CAMPUSES</span>
        </motion.h2>

        {/* Locations */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2">
          {campuses.map((campus, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <FaMapMarkerAlt className="text-green-600" size={18} />
              <span className="text-sm sm:text-base">{campus}</span>
            </motion.div>
          ))}
        </div>
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
}
