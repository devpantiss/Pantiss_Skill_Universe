import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaBook, FaComments, FaCheckCircle, FaIndustry, FaChalkboardTeacher, FaTools } from "react-icons/fa";

const BentoGrid: React.FC = () => {
  const features = [
    { 
      icon: FaCertificate, 
      title: "Skill Certification", 
      description: "Earn recognized certifications to validate your expertise.", 
      image: "https://c0.wallpaperflare.com/preview/459/122/476/wood-table-business-wooden.jpg" 
    },
    { 
        icon: FaIndustry, 
        title: "Industry Anchored Programs", 
        description: "Curricula designed in collaboration with top industries.", 
        image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/3df3643c-cf03-4323-8fce-d34d63d234ab_cymgyv.jpg" 
      },
    { 
      icon: FaBook, 
      title: "Systemic Learning", 
      description: "Structured courses for a comprehensive skill-building journey.", 
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739283474/WhatsApp_Image_2025-02-11_at_7.45.14_PM_zual7i.jpg" 
    },
    { 
      icon: FaComments, 
      title: "Feedback Driven Growth", 
      description: "Continuous feedback to enhance your learning path.", 
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80" 
    },
    { 
      icon: FaCheckCircle, 
      title: "Assured Employability", 
      description: "Guaranteed career opportunities with industry alignment.", 
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp" 
    },
    { 
      icon: FaChalkboardTeacher, 
      title: "Practice Driven Pedagogy", 
      description: "Hands-on learning for real-world application.", 
      image: "https://images.unsplash.com/photo-1465101046530-1f4f67d20c18?auto=format&fit=crop&w=500&q=80" 
    },
    { 
      icon: FaTools, 
      title: "Real World Skills & Intelligence", 
      description: "Develop practical skills and problem-solving abilities.", 
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/8082f70f-bce4-4bf8-8b44-002e235642d6_wtpyvv.jpg" 
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-black via-[#FF3366] to-black text-gray-100 relative overflow-hidden"
      style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' opacity='0.05'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
      }}
      aria-label="Job-Ready Academic Curriculum"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12 tracking-wide text-white relative"
          animate={{ scale: [1, 1.02, 1], opacity: [1, 0.9, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Job-Ready Academic Curriculum
          {/* <motion.span
            className="absolute left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-[#FFBE0B] to-[#00C4B4] rounded-full mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          /> */}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
        >
          At MSU, we ardently embrace the dynamic shifts characterizing the Education in 21st century. Our Strategically structured academic framework blended with several unique features are designed to create a productive learning trajectory for an enriching experience while assuring the requisite skills and knowledge to be attained for an ever-evolving career and life.
        </motion.p>
        <div className="relative">
          <motion.div
            className="absolute -top-12 -left-12 w-48 h-48 bg-[#FF3366]/20 rounded-full blur-2xl opacity-50"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-0">
            <motion.div
              className="col-span-1 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-glow hover:bg-white/20 backdrop-blur-md border border-white/20 transform translate-y-4"
              style={{ backgroundImage: `url(${features[0].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center h-full text-center">
                <FaCertificate className="text-[#FFBE0B] text-5xl mb-5 text-shadow-neon" style={{ textShadow: "0 0 10px #FFBE0B, 0 0 20px #FFBE0B" }} />
                <h3 className="text-3xl font-bold text-white mb-4">Skill Certification</h3>
                <p className="text-gray-200 text-base">Earn recognized certifications to validate your expertise.</p>
              </div>
            </motion.div>
            <motion.div
              className="col-span-1 row-span-2 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-glow hover:bg-white/20 backdrop-blur-md border border-white/20 transform -translate-x-6 translate-y-8 z-10"
              style={{ backgroundImage: `url(${features[1].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center h-full text-center">
                <FaBook className="text-[#00C4B4] text-5xl mb-5 text-shadow-neon" style={{ textShadow: "0 0 10px #00C4B4, 0 0 20px #00C4B4" }} />
                <h3 className="text-3xl font-bold text-white mb-4">Systemic Learning</h3>
                <p className="text-gray-200 text-base">Structured courses for a comprehensive skill-building journey.</p>
              </div>
            </motion.div>
            <motion.div
              className="col-span-1 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-glow hover:bg-white/20 backdrop-blur-md border border-white/20 transform translate-y-2"
              style={{ backgroundImage: `url(${features[2].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center h-full text-center">
                <FaComments className="text-[#FF3366] text-5xl mb-5 text-shadow-neon" style={{ textShadow: "0 0 10px #FF3366, 0 0 20px #FF3366" }} />
                <h3 className="text-3xl font-bold text-white mb-4">Feedback Driven Growth</h3>
                <p className="text-gray-200 text-base">Continuous feedback to enhance your learning path.</p>
              </div>
            </motion.div>
            <motion.div
              className="col-span-1 row-span-2 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-glow hover:bg-white/20 backdrop-blur-md border border-white/20 transform translate-x-6 -translate-y-4 z-10"
              style={{ backgroundImage: `url(${features[3].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center h-full text-center">
                <FaCheckCircle className="text-[#FFBE0B] text-5xl mb-5 text-shadow-neon" style={{ textShadow: "0 0 10px #FFBE0B, 0 0 20px #FFBE0B" }} />
                <h3 className="text-3xl font-bold text-white mb-4">Assured Employability</h3>
                <p className="text-gray-200 text-base">Guaranteed career opportunities with industry alignment.</p>
              </div>
            </motion.div>
            <motion.div
              className="col-span-1 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-glow hover:bg-white/20 backdrop-blur-md border border-white/20 transform -translate-y-2"
              style={{ backgroundImage: `url(${features[4].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center h-full text-center">
                <FaIndustry className="text-[#00C4B4] text-5xl mb-5 text-shadow-neon" style={{ textShadow: "0 0 10px #00C4B4, 0 0 20px #00C4B4" }} />
                <h3 className="text-3xl font-bold text-white mb-4">Industry Anchored Programs</h3>
                <p className="text-gray-200 text-base">Curricula designed in collaboration with top industries.</p>
              </div>
            </motion.div>
            <motion.div
              className="col-span-1 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-glow hover:bg-white/20 backdrop-blur-md border border-white/20 transform translate-x-4"
              style={{ backgroundImage: `url(${features[5].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center h-full text-center">
                <FaChalkboardTeacher className="text-[#FF3366] text-5xl mb-5 text-shadow-neon" style={{ textShadow: "0 0 10px #FF3366, 0 0 20px #FF3366" }} />
                <h3 className="text-3xl font-bold text-white mb-4">Practice Driven Pedagogy</h3>
                <p className="text-gray-200 text-base">Hands-on learning for real-world application.</p>
              </div>
            </motion.div>
            <motion.div
              className="col-span-1 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-glow hover:bg-white/20 backdrop-blur-md border border-white/20 transform -translate-x-4"
              style={{ backgroundImage: `url(${features[6].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center h-full text-center">
                <FaTools className="text-[#FFBE0B] text-5xl mb-5 text-shadow-neon" style={{ textShadow: "0 0 10px #FFBE0B, 0 0 20px #FFBE0B" }} />
                <h3 className="text-3xl font-bold text-white mb-4">Real World Skills & Intelligence</h3>
                <p className="text-gray-200 text-base">Develop practical skills and problem-solving abilities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;