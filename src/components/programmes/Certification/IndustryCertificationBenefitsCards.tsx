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
      "https://images.unsplash.com/photo-1581091870627-3f9c9c5c9a8d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "rapid-upskill",
    title: "Rapid Upskilling",
    subtitle: "Short, focused modules for immediate job-readiness",
    tag: "FAST TRACK",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "alumni",
    title: "PSU Alumni Status",
    subtitle: "Access alumni network and employer pipelines",
    tag: "LIFETIME NETWORK",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "short-term",
    title: "Short-Term Courses",
    subtitle: "High-intensity training with employability focus",
    tag: "JOB READY",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "expenditure",
    title: "Affordable Training",
    subtitle: "₹10,000 – ₹40,000 per learner",
    tag: "COST EFFECTIVE",
    image:
      "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "placement-rate",
    title: "Placement Outcomes",
    subtitle: "Average ~95% placement for certified candidates",
    tag: "OUTCOMES",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
];

const IndustryCertificationBenefitsCards: React.FC = () => {
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

export default IndustryCertificationBenefitsCards;