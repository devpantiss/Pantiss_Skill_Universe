import React from "react";
import { motion } from "framer-motion";

const ProgrammesHero: React.FC = () => {
  return (
    <section className="relative h-[90vh] mt-16 overflow-hidden bg-transparent">
      {/* ===================== FIXED PARALLAX VIDEO ===================== */}
      <div className="fixed inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/dxzhnns58/video/upload/v1763201687/6618336-uhd_3840_2160_24fps_yb7cwg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Primary cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/95" />

        {/* Subtle enterprise lighting (not flashy) */}
        {/* <div className="absolute top-[-35%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[220px]" /> */}
        {/* <div className="absolute bottom-[-45%] right-[-30%] h-[900px] w-[900px] rounded-full bg-blue-500/12 blur-[240px]" /> */}

        {/* Edge vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* ===================== HERO CONTENT ===================== */}
      <div className="relative z-10 flex h-full items-center justify-center pt-36 px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          {/* Eyebrow */}
          <p className="mb-6 text-xs tracking-[0.3em] text-white/60">
            OUR PROGRAMMES
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-white">
            Building Industry-Ready
            <br />
            <span className="text-white/90 font-normal">
              Skills for the Real World
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            Structured skilling pathways designed to prepare learners for
            deployment across Mining, Steel, Power, Shipping and allied
            industries — combining hands-on training, certification and
            real-world exposure.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="group inline-flex items-center justify-center gap-3 bg-white px-10 py-4 text-xs font-semibold tracking-widest text-black transition hover:bg-white/90">
              VIEW PROGRAMMES
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="group inline-flex items-center justify-center gap-3 border border-white/25 px-10 py-4 text-xs font-semibold tracking-widest text-white/85 transition hover:bg-white/5 hover:text-white">
              ADMISSION ENQUIRY
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammesHero;
