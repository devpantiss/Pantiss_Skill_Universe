import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Villages Reached", value: "50+" },
  { label: "Youth Trained", value: "1200+" },
  { label: "Women Participation", value: "30%" },
  { label: "Placement Rate", value: "95%" },
];

const ImpactStats: React.FC = () => {
  return (
    <section
      className="relative py-24 text-white text-center overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762517666/alex-knight--4pZ_YqcSFc-unsplash_mpzald.jpg')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-green-400 tracking-wide uppercase drop-shadow-lg">
          Impact Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl border border-green-500/30 bg-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(0,255,128,0.2)] hover:shadow-[0_0_40px_rgba(0,255,128,0.4)] transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-extrabold text-green-400 drop-shadow-md">
                {stat.value}
              </h3>
              <p className="text-gray-200 mt-3 text-lg tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Futuristic glowing grid effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.1)_0%,transparent_70%)]"></div>
    </section>
  );
};

export default ImpactStats;