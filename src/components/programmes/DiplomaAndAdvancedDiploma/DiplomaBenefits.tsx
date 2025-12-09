// DiplomaBenefitsCards.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaHandsHelping,
  FaUniversity,
  FaRupeeSign,
  FaCertificate,
  FaChartLine,
} from "react-icons/fa";

const benefits = [
  {
    id: "curriculum",
    title: "Industry-led curriculum",
    subtitle: "Labs + Hands-on Workshops",
    icon: <FaChalkboardTeacher className="w-10 h-10" aria-hidden />,
    colors: ["#00FF9D", "#00A3FF"],
  },
  {
    id: "placement",
    title: "Strong Placement Support",
    subtitle: "Hiring drives, interview prep & employer connects",
    icon: <FaHandsHelping className="w-10 h-10" aria-hidden />,
    colors: ["#FFD166", "#FF7A59"],
  },
  {
    id: "alumni",
    title: "PSU Alumni Status",
    subtitle: "Join the Pantiss alumni network & employer pipelines",
    icon: <FaUniversity className="w-10 h-10" aria-hidden />,
    colors: ["#7BDFF6", "#6C63FF"],
  },
  {
    id: "expenditure",
    title: "Avg. Expenditure",
    subtitle: "₹65,000 - ₹1,20,000 / student",
    icon: <FaRupeeSign className="w-10 h-10" aria-hidden />,
    colors: ["#FF8DAA", "#FF5E5E"],
  },
  {
    id: "certificate",
    title: "Training Certificate",
    subtitle: "Diploma certificate & competency assessments",
    icon: <FaCertificate className="w-10 h-10" aria-hidden />,
    colors: ["#D6A0FF", "#FF77B5"],
  },
  {
    id: "package",
    title: "Avg. Package",
    subtitle: "₹2.5 LPA - ₹3.0 LPA (typical)",
    icon: <FaChartLine className="w-10 h-10" aria-hidden />,
    colors: ["#4CE6B1", "#19A974"],
  },
];

const gridVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const DiplomaBenefitsCards: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section
      aria-labelledby="diploma-benefits-heading"
      className={`w-full px-4 md:px-8 lg:px-12 py-16 bg-black text-white ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h2
            id="diploma-benefits-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
          >
           Program Benefits
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-3">
            Industry-aligned benefits designed to make students job-ready — clear outcomes, certifications and measurable value.
          </p>
        </header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
        >
          {benefits.map((b) => (
            <motion.article
              key={b.id}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white/3 to-white/2 border border-white/6 shadow-lg min-h-[300px] hover:translate-y-[-8px] transition-transform"
              variants={cardVariants}
              whileHover={{ translateY: -8, scale: 1.02 }}
              role="article"
              aria-labelledby={`title-${b.id}`}
            >
              {/* Icon circle */}
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, ${b.colors[0]}, ${b.colors[1]})`,
                  boxShadow: `0 12px 30px ${b.colors[0]}20`,
                }}
                aria-hidden
              >
                <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center ring-1 ring-white/8">
                  {b.icon}
                </div>
              </div>

              {/* Title */}
              <h3 id={`title-${b.id}`} className="text-xl font-semibold text-white mb-2">
                {b.title}
              </h3>

              {/* Subtitle / detail */}
              <p className="text-gray-200 text-sm max-w-[22rem]">{b.subtitle}</p>

              {/* Optional stat row for expenditure/package */}
              <div className="mt-6">
                {b.id === "expenditure" && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/6 text-sm">
                    Avg cost: <strong className="ml-1 text-white">₹65k - ₹1.2L</strong>
                  </div>
                )}
                {b.id === "package" && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/6 text-sm">
                    Avg package: <strong className="ml-1 text-white">₹2.5L - ₹3L</strong>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/our-programmes/diploma-programs"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-pink-500 text-black font-semibold shadow-lg hover:scale-[1.02] transition"
          >
            View Diploma Programs
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiplomaBenefitsCards;
