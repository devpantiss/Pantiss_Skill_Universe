import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RankingCardProps {
  logo: string;
  description: string;
}

const RankingCard: React.FC<RankingCardProps> = ({ logo, description }) => {
  return (
    <motion.div
      className="w-64 p-6 border border-green-600 rounded-lg bg-black/70 hover:bg-green-700/80 transition-all shadow-lg flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label={description}
    >
      <img src={logo} alt="Accreditation Logo" className="h-24 w-auto object-contain" />
      {/* Optional description can be uncommented if needed */}
      {/* <p className="text-base text-gray-100 text-center">{description}</p> */}
    </motion.div>
  );
};


const Ranking: React.FC = () => {
  const accreditations = [
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746099074/SCMS_yjzmgs.png",
      rank: "NAAC A+",
      description: "Skill Council for Mining Sector",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104823/LSC-logo-removebg-preview_tzg0qq.png",
      rank: "NBA",
      description: "Logistics Sector Council",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_400,h_100/v1746104823/Rubber-removebg-preview_jg5caq.png",
      rank: "NBA",
      description: "Rubber, Chemical & Petrochemical Skill Development Council",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746099064/Power_jqvk3e.png",
      rank: "NBA",
      description: "Power Sector Skill Council",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104823/IESC-removebg-preview_ra8pvj.png",
      rank: "NBA",
      description: "Infrastructure Equipments Skill Council",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104823/Hydrocarbon-removebg-preview_nqzwz3.png",
      rank: "NBA",
      description: "Hydrocarbon Sector Skill Council",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104822/IISSSC-removebg-preview_o0qz4s.png",
      rank: "NBA",
      description: "Indian Iron & Steel Sector Skill Council",
    },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]); // Subtle parallax offset for cards

  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-12 px-4"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820278/2cf04226-46c3-4820-90e4-61a001350d8b_l1cetk.jpg)",
      }}
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold text-white">
            Our <span className="text-green-600">Accreditations</span>
          </h1>
        </div>

        <div className="overflow-hidden whitespace-nowrap relative">
          <motion.div className="marquee p-3" style={{ y }}>
            {accreditations.concat(accreditations).map((item, index) => (
              <div key={index} className="w-64 mx-4">
                <RankingCard {...item} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ranking;