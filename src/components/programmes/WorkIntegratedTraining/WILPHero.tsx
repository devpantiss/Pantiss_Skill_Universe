import React from "react";
import { motion } from "framer-motion";

const WILPHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/djtzx6wo7/image/upload/v1756969575/Gemini_Generated_Image_qpe2ylqpe2ylqpe2_qmxnkn.png')",
        }}
      />

      {/* Gradient Overlay with Modern Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-gray-900/60 to-black/85 backdrop-blur-sm"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight font-sans">
          Program Introduction{" "}
        </h1>

        <p className="text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed max-w-3xl mx-auto">
          Industry-embedded, earn-while-you-learn pathways that combine
          on-the-job training with targeted classroom modules — designed
          specifically for blue-collar roles. Our WILP certifies practical
          competency, shortens recruitment cycles, and builds job-ready workers
          who can step on-site from day one.
        </p>

        {/* Sectors list */}
        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl">⛏️</div>
            <div>
              <div className="font-semibold text-white">Mines</div>
              <div className="text-xs text-white/70">HEMM assistance, mine safety, site ops</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl">🏭</div>
            <div>
              <div className="font-semibold text-white">Steel & Aluminium</div>
              <div className="text-xs text-white/70">Furnace ops, rolling mills, fabrication</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl">⚡</div>
            <div>
              <div className="font-semibold text-white">Power & Green Energy</div>
              <div className="text-xs text-white/70">Plant rotations, solar & wind tech, energy audits</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl">🚢</div>
            <div>
              <div className="font-semibold text-white">Shipping & Logistics</div>
              <div className="text-xs text-white/70">Port ops, warehouse, freight handling</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl">🔋</div>
            <div>
              <div className="font-semibold text-white">Electric Vehicles</div>
              <div className="text-xs text-white/70">EV maintenance, battery systems, charging infra</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl">🏗️</div>
            <div>
              <div className="font-semibold text-white">Construction Tech & Infra</div>
              <div className="text-xs text-white/70">Equipment ops, surveying, site supervision</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10 sm:col-span-2 lg:col-auto">
            <div className="text-2xl">🚰</div>
            <div>
              <div className="font-semibold text-white">Water, Sanitation & Facility Mgmt</div>
              <div className="text-xs text-white/70">Pump & pipeline, sanitation, facility ops</div>
            </div>
          </div>
        </motion.div> */}

        {/* Short CTA row */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            className="inline-flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-full font-semibold shadow-md hover:brightness-105 transition"
            href="#programs"
          >
            Explore WILP programs
          </a>
          <a
            className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition"
            href="#partners"
          >
            Industry partners & outcomes
          </a>
        </div>
      </motion.div>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-black to-red-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-black to-green-600"></div>

      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/18 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-500/18 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default WILPHero;
