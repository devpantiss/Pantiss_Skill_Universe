import React from "react";

const SchoolLogoStrip: React.FC = () => {
  const schoolLogos = [
    {
      name: "School for Mines, Steel & Aluminium",
      src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_MINES-removebg-preview_airmxv.png",
    },
    {
      name: "School for Steel & Aluminium",
      src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_STEEL___ALUMINIUM-removebg-preview_lqtpri.png",
    },
    {
      name: "School for Power & Green Energy",
      src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_POWER___GREEN_ENERGY-removebg-preview_tinr0w.png",
    },
    {
      name: "School for Shipping & Logistics",
      src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_SHIPPING___LOGISTICS-removebg-preview_ktlsje.png",
    },
    // {
    //   name: "School for Semiconductors & Robotics",
    //   src: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812463/Pantiss_School__12_-removebg-preview_akcpud.png",
    // },
    {
      name: "School for Construction Tech & Infra Equipments",
      src: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812468/Pantiss_School__14_-removebg-preview_ayzfu7.png",
    },
    {
      name: "School for Water, Sanitation & Facility Management",
      src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_WASH-removebg-preview_s8wofi.png",
    },
  ];

  return (
    <div className="flex lg:hidden top-24 left-0 w-full bg-black bg-opacity-90 z-40 overflow-hidden">
      <div className="marquee flex animate-marquee whitespace-nowrap">
        {[...schoolLogos, ...schoolLogos].map((logo, index) => (
          <img
            key={`${logo.name}-${index}`}
            src={logo.src}
            alt={`${logo.name} logo`}
            className="inline-block h-20 w-auto mx-4 object-contain"
          />
        ))}
      </div>
      <style>{`
        .marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SchoolLogoStrip;
