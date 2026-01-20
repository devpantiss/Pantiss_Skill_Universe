import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "global-cert",
    title: "Globally Recognised Certifications",
    subtitle: "Training aligned to international job standards & compliance",
    tag: "GLOBAL READY",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "language",
    title: "Language & Communication Support",
    subtitle: "Workplace English + interview preparation for overseas roles",
    tag: "LANGUAGE BOOST",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "employer-ready",
    title: "Employer Readiness Training",
    subtitle: "Work discipline, safety culture, SOPs & productivity standards",
    tag: "WORKPLACE READY",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "documentation",
    title: "Documentation & Visa Support",
    subtitle: "Guidance for documentation, verification & process readiness",
    tag: "PROCESS SUPPORT",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "industry-connect",
    title: "International Employer Connect",
    subtitle: "Access hiring pipelines and overseas placement pathways",
    tag: "GLOBAL CONNECT",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "career-guidance",
    title: "Career Guidance & Counselling",
    subtitle: "Role mapping, salary expectations & relocation readiness",
    tag: "CAREER SUPPORT",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80",
  },
];

const IntMobilityBenefitsCards: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      aria-labelledby="mobility-benefits-heading"
      className={`relative bg-black py-20 px-6 text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-blue-400 mb-2">
            International Mobility
          </p>
          <h2
            id="mobility-benefits-heading"
            className="text-4xl md:text-5xl font-extrabold"
          >
            Program Benefits
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            A structured pathway to overseas opportunities — combining skills,
            communication, compliance, and employer readiness.
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
                border border-blue-500/40
                shadow-[0_0_40px_rgba(59,130,246,0.18)]
                hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]
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
                <span className="text-xs uppercase tracking-widest text-blue-400 mb-2">
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
                    bg-gradient-to-r from-blue-500 to-cyan-400
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
            href="/our-programmes/international-mobility"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-gradient-to-r from-blue-500 to-cyan-400
              text-black font-semibold shadow-lg
              hover:scale-105 transition
            "
          >
            View International Mobility
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntMobilityBenefitsCards;