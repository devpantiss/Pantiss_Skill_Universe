import React from "react";
import { motion } from "framer-motion";

const fleet = [
  {
    title: "Futuristic Mining Skill on Wheels",
    image: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762514722/edited-photo_akwcos.png",
  },
  {
    title: "GreenNext Skill on Wheels",
    image: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762524261/DALL_E_2025-11-07_19.30.43_-_A_professional_promotional_truck_designed_for_Green_Next_Skill_on_Wheels_featuring_a_bright_green_and_white_color_scheme_with_silver_accents_and_ec_k8buwi.webp",
  },
  {
    title: "Electra Skill on Wheels",
    image: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762524260/DALL_E_2025-11-07_19.29.41_-_A_professional_promotional_truck_with_a_vibrant_electric_blue_and_silver_color_scheme_accented_with_neon_green_highlights_and_glowing_LED_lighting._T_iyo7p9.webp",
  },
  {
    title: "Titan Skill on Wheels",
    image: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762524259/DALL_E_2025-11-07_19.25.50_-_A_highly_detailed_promotional_truck_with_a_bright_orange_body_metallic_gray_and_black_accents_surrounded_by_LED_lighting._The_truck_prominently_dis_jcv4vc.webp",
  },
  {
    title: "Safety Edge Skill on Wheels",
    image: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762524258/DALL_E_2025-11-07_19.17.11_-_A_professionally_designed_promotional_truck_similar_in_layout_and_lighting_to_the_Futuristic_Mining_Skill_on_Wheels_vehicle_but_themed_for_Safety_zrdsuf.webp",
  },
  {
    title: "Aqua Skill on Wheels",
    image: "https://res.cloudinary.com/dxzhnns58/image/upload/v1762524260/DALL_E_2025-11-07_19.28.44_-_A_professional_promotional_truck_with_a_sleek_aqua_blue_and_cyan_color_scheme_accented_by_white_and_silver_details_surrounded_by_glowing_LED_lighting_zvipet.webp",
  },
];

const FleetDetails: React.FC = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Subtle animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,150,0.15),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          Fleet & Infrastructure
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {fleet.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-green-400/50 shadow-lg hover:shadow-green-400/20"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400/40 rounded-2xl transition duration-300"></div>

              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm tracking-wide">
                  Empowering the next generation of skilled professionals on the move.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-400/10 to-transparent"></div>
    </section>
  );
};

export default FleetDetails;
