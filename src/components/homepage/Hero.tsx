import SiteImage from "../common/SiteImage";
import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import BackgroundVideo from "../common/BackgroundVideo";
import { useViewportActivity } from "../../hooks/useViewportActivity";
import { Link } from "react-router-dom";

const sectors = [
  "Mines, Steel & Aluminium",
  "Power & Green Energy",
  "Shipping & Logistics",
  "Construction Tech & Infra Equipments",
  "Green Jobs",
];

const HeroSection: React.FC = () => {
  const [currentSectorIndex, setCurrentSectorIndex] = useState(0);
  const { ref, active } = useViewportActivity<HTMLElement>();
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (!active || prefersReducedMotion) return;
    const timer = window.setInterval(() => setCurrentSectorIndex(index => (index + 1) % sectors.length), 4500);
    return () => window.clearInterval(timer);
  }, [active, prefersReducedMotion]);

  return (
    <section ref={ref} className="home-hero relative w-full min-h-[640px] h-[100svh] overflow-hidden">
      <SiteImage decoding="async" src="/Homepage/announcements_bg.webp" alt="" fetchPriority="high"
        width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
      <BackgroundVideo src="/Homepage/hero-optimized.mp4" defer
        className="absolute inset-0 h-full w-full" />

      {/* Translucent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1
          className="text-balance text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Pantiss Skill Universe
        </h1>

        <p
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl"
        >
          Empowering Blue-Collar Workforce through Industry-Driven Skilling in
        </p>

        {/* Reserve space for the longest sector label to keep the CTA stable. */}
        <div
          className="mt-4 min-h-[3.5em] max-w-3xl text-xl md:text-3xl font-semibold"
        >
          <span className="text-[var(--site-accent)]">
            {sectors[currentSectorIndex]} Sector
          </span>

        </div>

        {/* CTA Button */}
        <div
          className="mt-10"
        >
          <Link
            to="/our-programmes"
            className="inline-flex rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
