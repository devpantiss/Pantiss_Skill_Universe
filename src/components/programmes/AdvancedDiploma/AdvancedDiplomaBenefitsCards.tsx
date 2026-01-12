import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "curriculum",
    title: "Industry-Endorsed Curriculum",
    tag: "CHALLENGE YOUR LIMITS",
    description:
      "Co-designed with mining, steel & aluminium employers to match real job roles.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp",
  },
  {
    id: "certification",
    title: "Advanced Diploma Certification",
    tag: "LEARN FROM THE BEST",
    description:
      "Higher technical qualification designed for leadership & supervisory roles.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742816194/2cf04226-46c3-4820-90e4-61a001350d8b_jkt1vh.jpg",
  },
  {
    id: "placement",
    title: "100% Placement Support",
    tag: "CAREER OUTCOMES",
    description:
      "Dedicated placement cell, PSU pipelines & private sector hiring.",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg",
  },
  {
    id: "package",
    title: "High Salary & Growth",
    tag: "RETURN ON SKILL",
    description:
      "₹4–5 LPA average packages with long-term career progression.",
    image:
      "https://cdn.prod.website-files.com/67139b4944f3d6b890cda082/6720a95f025dc22684bab942_64f07126f5659751e457ca5a_workforce-management-system-mining-industry.jpeg",
  },
];

const AdvancedDiplomaBenefitsCards: React.FC = () => {
  return (
    <section className="relative bg-[#05070D] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#00E5A8] mb-2">
            Why Choose Pantiss
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Advanced Diploma Benefits
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="
                relative group rounded-3xl overflow-hidden
                border border-[#FFD84D]/60
                shadow-[0_0_40px_rgba(255,216,77,0.15)]
                hover:shadow-[0_0_60px_rgba(0,229,168,0.35)]
                transition-all duration-500
              "
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-[380px]">
                <span className="text-xs uppercase tracking-widest text-[#FFD84D] mb-2">
                  {item.tag}
                </span>

                <h3 className="text-3xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-sm max-w-md mb-6">
                  {item.description}
                </p>

                {/* CTA */}
                <button
                  className="
                    inline-flex items-center gap-3 w-fit
                    px-6 py-3 rounded-full
                    bg-gradient-to-r from-[#00E5A8] to-[#7C4DFF]
                    text-black font-semibold
                    hover:scale-105 transition
                  "
                >
                  Explore
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedDiplomaBenefitsCards;
