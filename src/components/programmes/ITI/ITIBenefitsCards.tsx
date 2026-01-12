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

const ITIBenefitsCards: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      aria-labelledby="iti-benefits-heading"
      className={`relative bg-black py-20 px-6 text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#00E5A8] mb-2">
            ITI Programs
          </p>
          <h2
            id="iti-benefits-heading"
            className="text-4xl md:text-5xl font-extrabold"
          >
            Program Benefits
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            NCVT/SCVT-aligned trade training structured to deliver certified,
            job-ready tradespeople with strong industry linkages.
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
            href="/our-programmes/iti-program"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-gradient-to-r from-[#00E5A8] to-[#22C55E]
              text-black font-semibold shadow-lg
              hover:scale-105 transition
            "
          >
            View ITI Programs
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ITIBenefitsCards;
