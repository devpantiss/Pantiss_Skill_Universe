// GlobalPlacements.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Users, ShieldCheck } from "lucide-react";

const stats = [
  { id: "graduates", label: "Skills Placed", value: "1,200+", icon: Users },
  { id: "countries", label: "Global Regions", value: "18+", icon: Globe },
  { id: "partners", label: "Industry Titans", value: "45+", icon: ShieldCheck },
];

const GlobalPlacements: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 lg:py-32">
      {/* --- BACKGROUND VIDEO WITH CINEMATIC OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-40 grayscale-[0.4] will-change-transform"
          src="/Homepage/3125427-uhd_3840_2160_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ transform: "translateZ(0)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent will-change-opacity" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 will-change-opacity" />
      </div>

      {/* Glowing Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT: TEXT & STRATEGY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-600/10 border border-red-500/20 rounded-full text-red-500 font-bold text-[10px] tracking-[0.3em] uppercase">
                <TrendingUp className="w-3 h-3" /> Global Trajectory
              </div>

              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                GLOBAL <br />
                <span className="text-red-600">PLACEMENTS</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                We prepare world-class professionals for high-demand industrial roles across
                six continents. Our graduates lead teams in Mining, Infrastructure,
                and energy clusters from India to West Australia.
              </p>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat) => (
                <div key={stat.id} className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md group hover:bg-white/10 transition-all">
                  <stat.icon className="text-red-500 w-6 h-6 mb-4" />
                  <div className="text-3xl font-black text-white group-hover:text-red-500 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={() => window.open("https://blue-global-force.vercel.app/", "_blank")}
                className="group relative px-10 py-5 bg-red-600 text-white font-black text-xs tracking-widest uppercase rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Careers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button
                onClick={() => window.location.href = "/contact-us"}
                className="text-white/60 hover:text-white font-bold text-xs tracking-widest uppercase border-b border-white/20 hover:border-red-500 py-1 transition-all"
              >
                Partner with us
              </button>
            </div>
          </motion.div>

          {/* RIGHT: MAP VISUALIZATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[16/11] rounded-[40px] overflow-hidden bg-white/5 border border-white/10 p-6 backdrop-blur-xl group">
              {/* Map Image with Inner Glow */}
              <div className="relative h-full w-full rounded-[32px] overflow-hidden ring-1 ring-white/10">
                <img
                  src="/Homepage/world_map.png"
                  alt="World map showing placement regions"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              {/* Float Decorative Ring */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-red-600/20 rounded-full animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GlobalPlacements;
