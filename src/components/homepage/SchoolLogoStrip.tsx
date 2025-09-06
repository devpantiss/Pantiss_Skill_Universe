import React from "react";

const SchoolLogoStrip: React.FC = () => {
  const schoolLogos = [
    {
      name: "School of Mines & Shipping",
      src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754995492/Pantiss_School__9_-removebg-preview_fdnur9.png",
    },
    {
      name: "School of Green Jobs",
      src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649629/Pantiss_School__6_-removebg-preview_esbuhn.png",
    },
    {
      name: "School of Semiconductors & Robotics",
      src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649629/Pantiss_School__5_-removebg-preview_sqdizv.png",
    },
    {
      name: "School of Construction Tech.",
      src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649629/Pantiss_School__7_-removebg-preview_hmbcvw.png",
    },
    {
      name: "School of Textiles & Apparals",
      src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754649630/Pantiss_School__8_-removebg-preview_ieapit.png",
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