import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WomenInMining: React.FC = () => {
  return (
    <section
      className="relative w-full text-white bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Main Text */}
          <div className="space-y-5">
            <motion.span
              className="inline-flex items-center text-xs md:text-sm uppercase tracking-[0.25em] text-green-300/80"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Women in Mining • Vehicle Operators
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Women at the Wheel of{" "}
              <span className="text-green-400">Heavy Mining Fleets</span>
            </motion.h2>

            <motion.p
              className="text-gray-200/90 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              At the{" "}
              <span className="text-green-300 font-semibold">
                Pantiss School for Mines
              </span>
              , women are stepping into high-responsibility roles as{" "}
              <span className="font-semibold text-green-300">
                dumper &amp; tipper operators, excavator drivers, and loader
                operators
              </span>
              . Our programs are designed to build confidence, precision, and
              safety consciousness in some of the most demanding on-ground
              mining roles.
            </motion.p>

            <motion.p
              className="text-gray-300/85 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              Through simulator-led practice, in-yard vehicle handling, and
              mentoring by experienced operators, women learn to manage
              large-capacity fleets, coordinate with pit supervisors, and keep
              operations both productive and safe.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/women-in-mining"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full shadow-lg transition-all duration-300 text-sm md:text-base"
              >
                Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>

              <p className="text-xs md:text-sm text-gray-300">
                Dedicated tracks for Dumper/Tipper, Excavator &amp; Loader
                Operator roles.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Glass Cards Over Parallax Background */}
          <motion.div
            className="space-y-4 md:space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Dumper &amp; Tipper Operators
              </h3>
              <p className="text-xs md:text-sm text-gray-200/90 leading-relaxed">
                Training on haul-road safety, load management, signaling, and
                shift coordination to run large-capacity dumpers and tippers
                confidently in active mines.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Excavator &amp; Loader Operators
              </h3>
              <p className="text-xs md:text-sm text-gray-200/90 leading-relaxed">
                Hands-on practice on excavators and loaders with focus on
                precision digging, bench discipline, machine upkeep, and safe
                interaction with surrounding fleets.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl flex flex-col gap-3">
              <h3 className="text-lg md:text-xl font-semibold">
                Safety, Leadership &amp; Dignified Work
              </h3>
              <p className="text-xs md:text-sm text-gray-200/90 leading-relaxed">
                Beyond machine skills, women are trained in safety protocols,
                communication, and leadership so they can represent a new
                standard of inclusive and responsible mining.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-green-500/15 text-green-300 border border-green-400/40">
                  Simulator-based training
                </span>
                <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-200 border border-yellow-400/40">
                  In-field exposure
                </span>
                <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/40">
                  Mentorship &amp; support
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WomenInMining;
