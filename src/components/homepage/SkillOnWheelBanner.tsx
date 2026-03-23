// SkillOnWheelBanner.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Truck, MapPin, Zap } from "lucide-react";

const SkillOnWheelBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-20 lg:py-0">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] items-stretch">
        
        {/* LEFT: DYNAMIC PARALLAX IMAGE */}
        <div className="relative w-full lg:w-[60%] h-[400px] lg:h-auto overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-fixed bg-center bg-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 will-change-transform"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762166427/WhatsApp_Image_2025-04-30_at_5.49.15_PM_xnmamh_2_ma665l.jpg')",
              transform: "translateZ(0)"
            }}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Edge Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          {/* Decorative Tag */}
          <div className="absolute top-12 left-12 z-20 hidden lg:block">
            <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
              <Truck className="text-red-500 w-6 h-6" />
              <div className="h-4 w-px bg-white/20" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">Rural Mobility Unit</span>
            </div>
          </div>
        </div>

        {/* RIGHT: PREMIUM CONTENT BOX */}
        <div className="relative w-full lg:w-[40%] flex flex-col justify-center px-8 lg:px-16 py-16 bg-black">
          {/* Subtle Glow Behind Text */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-full text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                <MapPin className="w-3 h-3" /> Outreach Initiative
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.85]">
                SKILL ON <br />
                <span className="text-red-500 not-italic">WHEELS</span>
              </h2>
            </div>

            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Bringing high-end technical training directly to rural and remote industrial heartlands. 
              Our mobile units bridge the digital divide, empowering the next generation of operators 
              where they live and work.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Zap className="text-red-500 w-5 h-5" />
                <div className="text-xs font-bold uppercase tracking-widest text-white">Smart Classrooms</div>
              </div>
              <div className="space-y-2">
                <Zap className="text-red-500 w-5 h-5" />
                <div className="text-xs font-bold uppercase tracking-widest text-white">Digital Tools</div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => window.location.href = "/futuristic-skill-on-wheels"}
                className="group relative px-10 py-5 bg-red-600 text-white font-black text-xs tracking-widest uppercase rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Mission <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillOnWheelBanner;
