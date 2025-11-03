import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SkillOnWheelBanner: React.FC = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col md:flex-row items-stretch overflow-hidden relative">
      {/* Left Section (Parallax Background Image) */}
      <motion.div
        className="w-full md:w-2/3 relative h-[400px] md:h-[500px] bg-fixed bg-center bg-cover md:rounded-r-3xl shadow-2xl"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762166427/WhatsApp_Image_2025-04-30_at_5.49.15_PM_xnmamh_2_ma665l.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </motion.div>

      {/* Right Section (Text) */}
      <div className="w-full md:w-1/3 flex flex-col justify-center px-8 py-12 bg-gradient-to-b from-green-900/80 to-black text-left z-10">
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-green-400"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skill on Wheels
        </motion.h2>

        <motion.p
          className="text-gray-200 text-base leading-relaxed mb-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The{" "}
          <span className="text-green-400 font-semibold">Skill on Wheels</span>{" "}
          initiative by{" "}
          <span className="text-green-400 font-semibold">
            Pantiss Skill Universe
          </span>{" "}
          brings hands-on, industry-relevant skilling directly to rural and
          remote communities. Each mobile unit is equipped with smart classrooms,
          training kits, and digital tools — bridging the skill divide and
          empowering youth in mining and industrial regions across India.
        </motion.p>

        <motion.a
          href="/skill-on-wheels"
          className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-yellow-400 text-black font-semibold rounded-full shadow-lg transition-all duration-300 w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore More <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default SkillOnWheelBanner;
