import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AlumniPortal: React.FC = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col md:flex-row items-stretch overflow-hidden relative">
      {/* Left Section (Text / Alumni Portal) */}
      <div className="w-full md:w-1/3 flex flex-col justify-center px-8 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-left z-10">
        <motion.span
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-green-300/80 mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Pantiss Skill Universe • Alumni
        </motion.span>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-4 text-green-400"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Alumni Portal
        </motion.h2>

        <motion.p
          className="text-gray-200 text-sm md:text-base leading-relaxed mb-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          The{" "}
          <span className="text-green-400 font-semibold">Pantiss Alumni Portal</span>{" "}
          is a dedicated space where former learners stay connected, informed, and
          supported long after they complete their programs.
        </motion.p>

        <motion.p
          className="text-gray-300 text-sm md:text-base leading-relaxed mb-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          From job updates and referral opportunities to mentoring younger batches,
          alumni can build networks across mining and industrial ecosystems. Access
          exclusive events, learning resources, and success stories while
          contributing back to the Pantiss community.
        </motion.p>

        <motion.a
          href="/alumni-portal"
          className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-yellow-400 text-black font-semibold rounded-full shadow-lg transition-all duration-300 w-fit text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Visit Alumni Portal <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </div>

      {/* Right Section (Parallax Background Image) */}
      <motion.div
        className="w-full md:w-2/3 relative h-[400px] md:h-[500px] bg-fixed bg-center bg-cover shadow-2xl"
        style={{
          backgroundImage:
            "url('/Homepage/alumni.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient overlay for better contrast on the left side */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/45 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default AlumniPortal;
