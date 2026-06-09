import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sectors = [
  "Mines, Steel & Aluminium",
  "Power & Green Energy",
  "Shipping & Logistics",
  "Construction Tech & Infra Equipments",
  "Green Jobs",
];

const colors = [
  "text-yellow-400",
  "text-green-400",
  "text-blue-400",
  "text-pink-400",
  "text-indigo-400",
  // "text-red-400",
  // "text-teal-400",
  // "text-red-400",
];

const HeroSection: React.FC = () => {
  const [currentSectorIndex, setCurrentSectorIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const currentSector = useMemo(
    () => sectors[currentSectorIndex % sectors.length],
    [currentSectorIndex]
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedText(currentSector);
      return;
    }

    const typingSpeed = isDeleting ? 50 : 100;
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
  }, [typedText, isDeleting, currentSector, prefersReducedMotion]);

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      const shouldReduceMotion = reduceMotionQuery.matches;
      setPrefersReducedMotion(shouldReduceMotion);
      if (shouldReduceMotion) setShowVideo(false);
    };

    updateMotionPreference();
    reduceMotionQuery.addEventListener("change", updateMotionPreference);
    const timer = reduceMotionQuery.matches
      ? undefined
      : window.setTimeout(() => setShowVideo(true), 250);

    return () => {
      if (timer) window.clearTimeout(timer);
      reduceMotionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <section className="relative mt-28 w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Homepage/announcements_bg.jpg')" }}
      />

      {showVideo && !prefersReducedMotion && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Homepage/HomePage_Hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Homepage/announcements_bg.jpg"
        />
      )}

      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Link
            to="/our-programmes"
            className="inline-flex rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg shadow-green-900/30 transition hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Explore Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
