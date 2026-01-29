import React from "react";

const SchoolLogoStrip: React.FC = () => {
  const schoolLogos = [
    {
      name: "School for Mines, Steel & Aluminium",
      src: "/SCHOOLS/MINES-BG.png",
    },
    {
      name: "School for Furniture & Fitting",
      src: "/SCHOOLS/FURNITURE-BG.png",
    },
    {
      name: "School for Power & Green Energy",
      src: "/SCHOOLS/POEN-BG.png",
    },
    {
      name: "School for Shipping & Logistics",
      src: "/SCHOOLS/SHIPPIN-BG.png",
    },
    {
      name: "School for Construction Tech & Infra Equipments",
      src: "/SCHOOLS/INFRA-BG.png",
    },
    {
      name: "School for Green Jobs",
      src: "/SCHOOLS/GREENJOBS-BG.png",
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
