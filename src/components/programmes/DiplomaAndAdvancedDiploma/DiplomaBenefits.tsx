import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "curriculum",
    title: "Industry-led curriculum",
    subtitle: "Labs + Hands-on Workshops",
    tag: "PRACTICAL FIRST",
    image:
      "https://images.unsplash.com/photo-1581092918367-7a8b56c0c6b6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "placement",
    title: "Strong Placement Support",
    subtitle: "Hiring drives, interview prep & employer connects",
    tag: "CAREER READY",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "alumni",
    title: "PSU Alumni Status",
    subtitle: "Join the Pantiss alumni network & employer pipelines",
    tag: "LIFETIME NETWORK",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "expenditure",
    title: "Avg. Expenditure",
    subtitle: "₹65,000 - ₹1,20,000 / student",
    tag: "AFFORDABLE",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "certificate",
    title: "Training Certificate",
    subtitle: "Diploma certificate & competency assessments",
    tag: "CERTIFIED",
    image:
      "https://images.unsplash.com/photo-1584697964154-fc7c45c1a6fd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "package",
    title: "Avg. Package",
    subtitle: "₹2.5 LPA - ₹3.0 LPA (typical)",
    tag: "OUTCOMES",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
  },
];

const DiplomaBenefitsCards: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      aria-labelledby="diploma-benefits-heading"
      className={`relative bg-black py-10 px-6 text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#00E5A8] mb-2">
            Diploma Programs
          </p>
          <h2
            id="diploma-benefits-heading"
            className="text-4xl md:text-5xl font-extrabold"
          >
            Program Benefits
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Industry-aligned benefits designed to make students job-ready — clear
            outcomes, certifications and measurable value.
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
            href="/our-programmes/diploma-programs"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-gradient-to-r from-[#00E5A8] to-[#22C55E]
              text-black font-semibold shadow-lg
              hover:scale-105 transition
            "
          >
            View Diploma Programs
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiplomaBenefitsCards;
