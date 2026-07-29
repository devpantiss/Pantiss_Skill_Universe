import React from "react";
import { motion } from "framer-motion";

interface RankingCardProps {
  logo: string;
  description: string;
}

const accreditations = [
  {
    logo: "/Homepage/acceredition/aicte.png",
    description: "AICTE",
  },
  {
    logo: "/Homepage/acceredition/iisssc.png",
    description: "IISSSC",
  },
  {
    logo: "/Homepage/acceredition/ugc_logo.png",
    description: "UGC",
  },
  {
    logo: "/Homepage/acceredition/SCMS.png",
    description: "SCMS",
  },
  {
    logo: "/Homepage/acceredition/pssc.png",
    description: "PSSC",
  },
  {
    logo: "/Homepage/acceredition/RCPSDC.png",
    description: "RCPSDC",
  },
  {
    logo: "/Homepage/acceredition/NSDC.png",
    description: "NSDC",
  },
  {
    logo: "/Homepage/acceredition/MEPSC.png",
    description: "MEPSC",
  },
  {
    logo: "/Homepage/acceredition/ncvet.png",
    description: "NCVET",
  },
  {
    logo: "/Homepage/acceredition/lsc.png",
    description: "LSC",
  },
];

const RankingCard: React.FC<RankingCardProps> = ({ logo, description }) => {
  return (
    <motion.div
      className="w-64 p-6  rounded-lg transition-all shadow-lg flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label={description}
    >
      <img
        src={logo}
        alt="Accreditation Logo"
        className="h-24 w-auto object-contain"
        loading="lazy"
        decoding="async"
      />
      {/* Optional description can be uncommented if needed */}
      {/* <p className="text-base text-gray-100 text-center">{description}</p> */}
    </motion.div>
  );
};


const Ranking: React.FC = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat py-12 px-4"
      style={{
        backgroundImage:
          "url(/Homepage/accredition.jpg)",
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
          @media (prefers-reduced-motion: reduce) {
            .marquee {
              animation: none;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold text-white">
            Our <span className="text-green-600">Accreditations</span>
          </h1>
        </div>

        <div className="overflow-hidden whitespace-nowrap relative">
          <motion.div className="marquee p-3">
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

export default React.memo(Ranking);
