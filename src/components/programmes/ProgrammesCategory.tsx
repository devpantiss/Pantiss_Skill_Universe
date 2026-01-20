import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const programmes = [
  // ✅ Active Programmes (Currently Available)
  {
    title: "Diploma/Polytechnic",
    description:
      "Comprehensive training in technical and applied sciences, preparing students for supervisory and technician roles.",
    comingSoon: false,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421119/diploma_diqahi.avif",
    highlights: ["Technical Proficiency", "Career-Ready Skills", "Lab-Based Learning"],
    path: "/our-programmes/diploma-programs",
  },
  {
    title: "Industrial Training Institute (ITI)",
    description:
      "Hands-on skill development programs designed to create industry-ready technicians for blue-collar sectors.",
    comingSoon: false,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421038/iti_pld6fw.avif",
    highlights: ["Hands-On Workshops", "Industry Tools", "Placement Assistance"],
    path: "/our-programmes/iti-program",
  },
  // {
  //   title: "Advanced Diploma Programs",
  //   description:
  //     "Specialized advanced training for high-skill technical roles and leadership in industrial environments.",
  //   comingSoon: false,
  //   image:
  //     "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421316/adv_diploma_gl7enc.jpg",
  //   highlights: ["Advanced Skills", "Leadership Readiness", "Industry Endorsement"],
  //   path: "/our-programmes/advanced-diploma-program",
  // },
  {
    title: "Industry-Aligned Skill Certification & Apprenticeship Programs",
    description:
      "Training and certification designed with direct input from industry partners to maximize employability.",
    comingSoon: false,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761914370/korba_cmy2er.jpg",
    highlights: ["Industry Endorsed", "High Employability", "Global Standards"],
    path: "/our-programmes/industry-alligned-certification",
  },
  // {
  //   title: "Apprenticeship & Dual Training Programs",
  //   description:
  //     "Blending classroom learning with hands-on industrial training for real-world exposure and job readiness.",
  //   comingSoon: false,
  //   image:
  //     "https://factly.in/wp-content/uploads//2022/04/National-Apprenticeship-Promotion-Scheme_Image-1.jpg",
  //   highlights: ["On-the-Job Training", "Industry Exposure", "Skill Integration"],
  //   path: "/our-programmes/apprenticeship-and-dual-training",
  // },
  {
    title: "Workmen Upskilling & Reskilling Programs",
    description:
      "Helping the workforce adapt to evolving technologies, processes, and global industrial standards.",
    comingSoon: false,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762422162/ChatGPT_Image_Nov_6_2025_03_12_00_PM_b0hrkz.png",
    highlights: ["Technology Adaptation", "Skill Enhancement", "Career Longevity"],
    path: "/our-programmes/upskilling-and-reskilling-program",
  },
  // {
  //   title: "Work Integrated Training Programs (WITP)",
  //   description:
  //     "Structured programs allowing students to gain work experience while earning, bridging academia and industry.",
  //   comingSoon: false,
  //   image:
  //     "https://res.cloudinary.com/dxzhnns58/image/upload/v1761914537/workers_rjwzq5.jpg",
  //   highlights: ["Earn While You Learn", "Industry Mentorship", "Career Pathways"],
  //   path: "/our-programmes/work-integrated-training-program",
  // },

  // ✅ Now also part of main grid (no more Coming Soon section)
  {
    title: "Skill Development Bootcamps",
    description: "Intensive short-term programs for rapid job entry.",
    comingSoon: false,
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762423419/bootcamp_mzu2xy.jpg",
    highlights: ["Short-Term", "Job-Focused", "High Intensity"],
    path: "/our-programmes/skill-development-boot-camp-program",
  },
  {
    title: "International Mobility Programs",
    description:
      "Global-standard training for overseas job opportunities.",
    comingSoon: false,
    image:
      "https://cdn.prod.website-files.com/67139b4944f3d6b890cda082/6720a95f025dc22684bab942_64f07126f5659751e457ca5a_workforce-management-system-mining-industry.jpeg",
    highlights: ["Global Standards", "Overseas Opportunities", "International Exposure"],
    path: "/our-programmes/international-mobility-program",
  },
];

const ProgrammeCategories: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <section
        className="relative py-20 bg-black"
        role="region"
        aria-label="Programme Categories"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>
          <div className="absolute bottom-32 right-10 w-80 h-80 bg-green-500 rounded-full mix-blend-screen filter blur-[140px] opacity-65"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-[160px] opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-red-700 rounded-full mix-blend-screen filter blur-[130px] opacity-70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white font-black text-center mb-14 tracking-wide relative"
          >
            Programme Categories
            <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></span>
          </motion.h2>

          {/* Single Grid – 9 Active Programmes */}
          {/* <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white font-black text-center mb-8 relative"
          >
            Active Programmes
            <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-16 h-1 bg-green-500 rounded-full"></span>
          </motion.h3> */}

          <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4">
            {programmes.map((programme, index) => (
              <Link to={programme.path} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  className="relative flex flex-col justify-between min-h-[260px] md:min-h-[280px] bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl shadow-[0_6px_24px_rgba(239,68,68,0.2)] hover:shadow-[0_6px_24px_rgba(239,68,68,0.3)] overflow-hidden group hover:border-red-500 transform perspective-1000 rotateX-5 rotateY-5 hover:rotateX-0 hover:rotateY-0 hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-gray-900/75 before:rounded-2xl before:opacity-100 before:transition-opacity before:duration-500 hover:before:bg-gray-900/70 focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                  style={{
                    backgroundImage: `url(${programme.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-6 relative z-10 flex flex-col gap-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-green-500 transition-colors">
                      {programme.title}
                    </h3>
                    <p className="text-gray-100 text-sm font-medium leading-relaxed">
                      {programme.description}
                    </p>
                    {programme.highlights && (
                      <ul className="mt-1 space-y-2">
                        {programme.highlights.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-100 font-medium"
                          >
                            <FaCheckCircle className="text-green-400 w-4 h-4 mr-2" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgrammeCategories;