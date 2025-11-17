import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Fully equipped digital training lab",
  "Renewable energy-powered trucks",
  "Industry-certified trainers",
  "Hands-on workshops in rural areas",
];

const AboutSkillOnWheels: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* 🌌 Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* 🚚 Truck Image with hover glow */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500" />
          <img
            src="https://res.cloudinary.com/dxzhnns58/image/upload/v1762516054/edited-photo-removebg-preview_ao4noa.png"
            alt="Skill Truck"
            className="relative rounded-2xl shadow-[0_0_40px_rgba(0,255,200,0.2)] transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* 🧠 Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Taking Skilling Beyond Boundaries
          </h2>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            <span className="text-gray-100 font-medium">Skill on Wheels</span> is an innovative
            initiative by Pantiss Skill Universe that transforms learning into a mobile experience.
            Equipped with advanced digital tools, smart classrooms, and renewable energy systems,
            these trucks reach the remotest areas — unlocking new opportunities for every learner.
          </p>

          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-center text-gray-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-3 h-3 mr-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse"></div>
                {h}
              </motion.li>
            ))}
          </ul>

          {/* ✨ Neon line divider */}
          <div className="mt-10 h-0.5 w-2/3 bg-gradient-to-r from-green-400 via-cyan-400 to-transparent rounded-full opacity-60" />
        </motion.div>
      </div>

      {/* Decorative animated lines (optional but looks pro) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-[0.05]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #00ffaa 0, #00ffaa 2px, transparent 2px, transparent 40px)",
        }}
      />
    </section>
  );
};

export default AboutSkillOnWheels;
