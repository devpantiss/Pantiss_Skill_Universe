import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WomenInMining: React.FC = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col md:flex-row items-stretch overflow-hidden relative">
      {/* Left Section (Text) */}
      <div className="w-full md:w-1/3 flex flex-col justify-center px-8 py-12 bg-gradient-to-b from-black via-green-900/80 to-black text-left z-10">
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-green-400"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Breaking Stereotypes in Mining
        </motion.h2>

        <motion.p
          className="text-gray-200 text-base leading-relaxed mb-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At the <span className="text-green-400 font-semibold">Pantiss School for Mines</span>,
          women are challenging conventions in traditionally male-dominated industries. Through
          technical skilling, leadership development, and mentorship programs, Pantiss empowers
          women to lead mining operations, drive sustainability, and inspire future generations to
          redefine what’s possible underground and beyond.
        </motion.p>

        <motion.a
          href="/women-in-mining"
          className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-yellow-400 text-black font-semibold rounded-full shadow-lg transition-all duration-300 w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore More <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </div>

      {/* Right Section (Parallax Background Image) */}
      <motion.div
        className="w-full md:w-2/3 relative h-[400px] md:h-[500px] bg-fixed bg-center bg-cover md:rounded-l-3xl shadow-2xl"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default WomenInMining;
