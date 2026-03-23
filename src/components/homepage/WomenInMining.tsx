// WomenInMining.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers, FaBriefcase, FaIndustry, FaMapMarkerAlt, FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const roleCards = [
  {
    id: "dumper",
    title: "Dumper Operator",
    image: "/Homepage/womenInMining/dumper_volvo.png",
    description: "Mastering heavy-payload logistics in challenging terrains."
  },
  {
    id: "excavator",
    title: "Excavator Operator",
    image: "/Homepage/womenInMining/exca.jpg",
    description: "Precision-based earthmover operations for global mining."
  },
  {
    id: "crane",
    title: "Crane Operator",
    image: "/Homepage/womenInMining/crane.jpg",
    description: "High-altitude structural lifting and maritime logistics."
  },
  {
    id: "loader",
    title: "Loader Operator",
    image: "/Homepage/womenInMining/loader.jpg",
    description: "Optimizing material flow with efficiency and power."
  },
];

const impacts = [
  { id: "trained", label: "Skills Certified", value: "1,240+", icon: FaUsers },
  { id: "placed", label: "Career Placements", value: "860+", icon: FaBriefcase },
  { id: "industries", label: "Global Partners", value: "72+", icon: FaIndustry },
  { id: "centres", label: "Tech Hubs", value: "15+", icon: FaMapMarkerAlt },
];

const WomenInMining: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % roleCards.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + roleCards.length) % roleCards.length);

  return (
    <section className="relative w-full text-white py-24 overflow-hidden">
      {/* Optimized Background: Hardware Accelerated Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover grayscale-[0.2] will-change-transform"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762167481/Gemini_Generated_Image_dm4793dm4793dm47_obiynh.png')",
          transform: "translateZ(0)"
        }}
      />
      
      {/* Optimize Glow Layers */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black/40 to-[#0a0a0a] will-change-opacity" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-red-900/10 blur-[150px] rounded-full opacity-50 will-change-opacity" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-red-800/5 blur-[120px] rounded-full opacity-30 will-change-opacity" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* LEFT: MINIMALIST CONTENT */}
          <div className="w-full lg:w-[40%] space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="h-px w-12 bg-red-600" />
                <span className="text-red-500 font-black text-xs tracking-[0.4em] uppercase">Empowerment</span>
              </motion.div>

              <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">
                WOMEN IN <br />
                <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)]">INDUSTRIES</span>
              </h2>

              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-md">
                We are building a future where expertise knows no gender. 
                Pioneering professional growth in heavy engineering and global logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <button 
                onClick={() => window.location.href = "/our-programmes"}
                className="px-10 py-5 bg-red-600 text-white font-black text-xs tracking-widest uppercase rounded-full hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20 flex items-center gap-3"
              >
                Join the Network <FaArrowRight className="w-3 h-3" />
              </button>
              
              <button 
                onClick={() => window.location.href = "/about"}
                className="text-xs font-black tracking-widest uppercase border-b-2 border-white/20 hover:border-red-600 transition-colors py-1"
              >
                Our Initiatives
              </button>
            </div>

            {/* MINIMAL IMPACT DASHBOARD */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              {impacts.slice(0, 4).map((imp) => (
                <div key={imp.id} className="space-y-1">
                  <div className="text-3xl font-black tracking-tight">{imp.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{imp.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: PREMIUM INTERACTIVE GALLERY */}
          <div className="w-full lg:w-[60%]">
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[40px] shadow-2xl bg-white/5 border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={roleCards[activeIndex].image} 
                    alt={roleCards[activeIndex].title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* SLIDE CONTENT */}
                  <div className="absolute bottom-12 left-12 right-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="space-y-4"
                    >
                      <div className="inline-block px-4 py-1.5 bg-red-600 text-[10px] font-black tracking-widest uppercase rounded-md shadow-lg shadow-red-600/30">
                        {roleCards[activeIndex].title}
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-white max-w-lg leading-tight">
                        {roleCards[activeIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CONTROLS */}
              <div className="absolute top-1/2 -translate-y-1/2 right-8 flex flex-col gap-4 z-20">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all active:scale-90"
                >
                  <FaChevronLeft className="w-3 h-3 text-white" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all active:scale-90"
                >
                  <FaChevronRight className="w-3 h-3 text-white" />
                </button>
              </div>

              {/* INDICATORS */}
              <div className="absolute bottom-12 right-12 flex gap-3">
                {roleCards.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-10 bg-red-600' : 'w-4 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WomenInMining;
