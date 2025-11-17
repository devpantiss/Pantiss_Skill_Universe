import React from "react";
import { motion } from "framer-motion";

const SkillOnWheelsHero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full mt-24 overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        src="https://res.cloudinary.com/dxzhnns58/video/upload/v1762513847/ezgif-74246123c8574281_cwuees.mp4"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Futuristic Skill on Wheels
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 max-w-2xl text-gray-200 text-lg md:text-xl"
        >
          Empowering remote communities through mobile skill training and industry-ready education.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 px-6 py-3 bg-green-500 text-black rounded-full font-semibold hover:bg-green-400 transition"
        >
          Explore the Initiative
        </motion.a>
      </div>
    </section>
  );
};

export default SkillOnWheelsHero;
