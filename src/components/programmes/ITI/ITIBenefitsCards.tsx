import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "certification",
    title: "NCVT / SCVT Approved Certification",
    subtitle: "Official ITI trade certificate recognised nationally",
    tag: "GOVT APPROVED",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "alumni",
    title: "PSU Alumni Status",
    subtitle: "Be part of the Pantiss alumni network and PSU pipelines",
    tag: "ALUMNI ACCESS",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "competency",
    title: "Industry-Recognised Skill Certificate",
    subtitle: "Competency assessments mapped to industry standards",
    tag: "SKILL VALIDATION",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df35?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "expenditure",
    title: "Avg. Expenditure",
    subtitle: "₹45,000 - ₹90,000 / year per student",
    tag: "AFFORDABLE",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "workshops",
    title: "Hands-on Trade Workshops",
    subtitle: "Training with industry-grade tools & real equipment",
    tag: "PRACTICAL TRAINING",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "apprenticeship",
    title: "Apprenticeship Prep",
    subtitle: "Focused preparatory training for apprenticeships",
    tag: "JOB READY",
    image:
      "https://images.unsplash.com/photo-1604011237320-8e0506614fdf?auto=format&fit=crop&w=1400&q=80",
  },
];

const ITIBenefitsCards: React.FC = () => {
  return (
    <section className="relative bg-black py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* ===== Header ===== */}
        <div className="mb-16 text-center">
          <p className="uppercase tracking-widest text-sm text-[#00E5A8] mb-2">
            Industry Aligned
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Certification Program Benefits
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-base">
            Compact, employer-focused certification pathways designed for rapid
            skilling and strong placement outcomes.
          </p>
        </div>

        {/* ===== Compact Cards Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="
                group relative overflow-hidden
                border border-green-600/40
                bg-black
                transition-shadow duration-300
                hover:shadow-[0_0_40px_rgba(0,229,168,0.25)]
              "
            >
              {/* Image */}
              <div className="relative h-[240px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />

                {/* Tag */}
                <span className="absolute left-4 top-4 text-[10px] tracking-widest text-[#FFD84D]">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between min-h-[90px]">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* <button
                  className="
                    mt-4 inline-flex items-center gap-2
                    text-sm font-medium text-[#00E5A8]
                    transition-all group-hover:gap-3
                  "
                >
                  Explore
                  <FaArrowRight />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-18 flex justify-center mt-16">
          <a
            href="/our-programmes/industry-alligned-certification"
            className="
              inline-flex items-center gap-3
              px-9 py-4 rounded-full
              bg-gradient-to-r from-[#00E5A8] to-[#7C4DFF]
              text-black font-semibold
              hover:scale-105 transition
            "
          >
            View Certification Programs
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ITIBenefitsCards;
