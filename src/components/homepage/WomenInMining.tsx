// WomenInMining.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase, FaIndustry, FaMapMarkerAlt } from "react-icons/fa";

const roleCards = [
  {
    id: "dumper",
    title: "Dumper Operator",
    image:
      "/Homepage/womenInMining/dumper_volvo.png"
  },
  {
    id: "excavator",
    title: "Excavator Operator",
    image:
    "/Homepage/womenInMining/exca.jpg"
  },
  {
    id: "crane",
    title: "Crane Operator",
    image:
    "/Homepage/womenInMining/crane.jpg"
  },
  {
    id: "loader",
    title: "Loader Operator",
    image:
    "/Homepage/womenInMining/loader.jpg"
  },
];

const impacts = [
  { id: "trained", label: "Women trained", value: 1240, icon: FaUsers },
  { id: "placed", label: "Women placed", value: 860, icon: FaBriefcase },
  { id: "industries", label: "Industry partners", value: 72, icon: FaIndustry },
  { id: "centres", label: "Training centres", value: 15, icon: FaMapMarkerAlt },
];

/** Simple counter hook - animates number from 0 to target over duration ms */
function useCountTo(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - (startRef.current as number)) / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target); // ensure final value
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [target, duration]);

  return count;
}

const WomenInMining: React.FC = () => {
  // use the hook for each impact stat individually inside the render
  // (we call hook per stat — stable order since impacts is static)
  const counts = impacts.map((imp) => useCountTo(imp.value, 1600));

  return (
    <section
      className="relative w-full text-white bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png')",
      }}
      aria-labelledby="women-operators-heading"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-6">
        {/* Central headings */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1
            id="women-operators-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            Women in Mining/Steel/Power -{" "}
            <span className="text-green-400">HEMM Vehicle Operators</span>
          </h1>

          <h2 className="mt-4 text-lg md:text-xl text-gray-200 font-semibold">
            Women at the Wheel of Heavy Mining Fleets
          </h2>
        </motion.div>

        {/* Role Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {roleCards.map((card, idx) => (
            <motion.article
              key={card.id}
              className="relative h-44 rounded-2xl overflow-hidden shadow-xl border border-white/8 transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.45 }}
              role="button"
              aria-label={card.title}
            >
              {/* background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${card.image}')` }}
                aria-hidden="true"
              />
              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/45" />
              {/* title */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-lg md:text-xl font-bold text-white text-center px-4">
                  {card.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Impact section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/8 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6">
            <div className="md:flex-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Impact
              </h3>
              <p className="text-sm text-gray-300">
                Measurable outcomes from our HEMM operator programs — training,
                placements, and industry partnerships that scale women’s
                participation in heavy equipment roles.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 flex-1">
              {impacts.map((imp, i) => {
                const Icon = imp.icon;
                const animatedValue = counts[i] ?? 0;
                return (
                  <div
                    key={imp.id}
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-black/20 border border-white/6"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-green-400 to-blue-500 text-white mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl md:text-3xl font-extrabold">
                      {animatedValue.toLocaleString()}
                    </div>
                    <div className="text-xs md:text-sm text-gray-300 mt-1 text-center">
                      {imp.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WomenInMining;
