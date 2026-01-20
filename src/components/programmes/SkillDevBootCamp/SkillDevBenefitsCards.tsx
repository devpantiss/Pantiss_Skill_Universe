import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "job-ready",
    title: "Job-Ready Bootcamp Training",
    subtitle: "Skill-first learning designed to prepare you for real site roles",
    tag: "JOB READY",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "hands-on",
    title: "Hands-on Practical Sessions",
    subtitle: "Train with industry-grade tools, equipment, and live simulations",
    tag: "PRACTICAL LEARNING",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "mentorship",
    title: "Industry Mentor Support",
    subtitle: "Learn directly from trainers and experts with field experience",
    tag: "MENTORSHIP",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "certification",
    title: "Certification & Assessment Support",
    subtitle: "Competency validation mapped to industry and employability needs",
    tag: "CERTIFIED SKILLS",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df35?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "career-support",
    title: "Career & Placement Assistance",
    subtitle: "Guidance for apprenticeships, interviews, and job opportunities",
    tag: "CAREER SUPPORT",
    image:
      "https://images.unsplash.com/photo-1604011237320-8e0506614fdf?auto=format&fit=crop&w=1400&q=1400&q=80",
  },
  {
    id: "affordable",
    title: "Affordable & High-Impact Learning",
    subtitle: "Maximum practical exposure with structured learning outcomes",
    tag: "ACCESSIBLE",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1400&q=80",
  },
];

const SkillDevBenefitsCards: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      aria-labelledby="skilldev-benefits-heading"
      className={`relative bg-black py-20 px-6 text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#00E5A8] mb-2">
            Skill Development Bootcamp
          </p>
          <h2
            id="skilldev-benefits-heading"
            className="text-4xl md:text-5xl font-extrabold"
          >
            Bootcamp Benefits
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Industry-driven training designed to build practical confidence,
            real-world skills, and career readiness through hands-on learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="
                relative group rounded-3xl overflow-hidden
                border border-[#00E5A8]/40
                shadow-[0_0_40px_rgba(0,229,168,0.18)]
                hover:shadow-[0_0_60px_rgba(0,229,168,0.35)]
                transition-all duration-500
              "
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-[360px]">
                <span className="text-xs uppercase tracking-widest text-[#00E5A8] mb-2">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-sm mb-6 max-w-md">
                  {item.subtitle}
                </p>

                <button
                  className="
                    inline-flex items-center gap-3 w-fit
                    px-6 py-3 rounded-full
                    bg-gradient-to-r from-[#00E5A8] to-[#22C55E]
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

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="/our-programmes/skill-development-bootcamp"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-gradient-to-r from-[#00E5A8] to-[#22C55E]
              text-black font-semibold shadow-lg
              hover:scale-105 transition
            "
          >
            View Bootcamp Programs
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillDevBenefitsCards;
