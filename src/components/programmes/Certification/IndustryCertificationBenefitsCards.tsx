import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "industry-cert",
    title: "Industry Certification",
    subtitle: "Co-branded certificates aligned with employer expectations",
    tag: "EMPLOYER TRUSTED",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp",
  },
  {
    id: "rapid-upskill",
    title: "Rapid Upskilling",
    subtitle: "Short, focused modules designed for immediate job-readiness",
    tag: "FAST TRACK",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "alumni",
    title: "PSU Alumni Status",
    subtitle: "Join the Pantiss alumni network and employer pipelines",
    tag: "LIFETIME NETWORK",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "short-term",
    title: "Short-Term Course",
    subtitle: "High-intensity training with strong employability outcomes",
    tag: "JOB READY",
    image:
      "https://images.unsplash.com/photo-1581092918367-7a8b56c0c6b6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "expenditure",
    title: "Avg. Expenditure",
    subtitle: "₹10,000 - ₹40,000 / student",
    tag: "AFFORDABLE",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "placement-rate",
    title: "Placement Rate",
    subtitle: "Average ~95% placement for certified candidates",
    tag: "OUTCOMES",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  },
];

const IndustryCertificationBenefitsCards: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      className={`relative bg-black py-20 px-6 text-white ${className}`}
      aria-labelledby="industry-cert-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-[#00E5A8] mb-2">
            Industry Aligned
          </p>
          <h2
            id="industry-cert-benefits-heading"
            className="text-4xl md:text-5xl font-extrabold"
          >
            Certification Program Benefits
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Short, employer-focused certification pathways that rapidly upskill
            learners and connect them to hiring pipelines.
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
                border border-green-600/60
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-[360px]">
                <span className="text-xs uppercase tracking-widest text-[#FFD84D] mb-2">
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

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="/our-programmes/industry-alligned-certification"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-gradient-to-r from-[#00E5A8] to-[#7C4DFF]
              text-black font-semibold shadow-lg
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

export default IndustryCertificationBenefitsCards;
