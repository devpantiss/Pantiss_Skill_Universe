import React from "react";

interface Logo {
  name: string;
  src: string;
}

interface LogoMarqueeProps {
  logos: Logo[];                  // array of logos
  height?: string;                // tailwind height e.g. "h-20"
  speed?: string;                 // animation speed e.g. "20s"
  gap?: string;                   // gap between logos e.g. "mx-6"
  bg?: string;                    // background e.g. "bg-black/80"
  className?: string;             // wrapper override
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  height = "h-20",
  speed = "20s",
  gap = "mx-6",
  bg = "bg-black/90",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden ${bg} ${className}`}>
      <div
        className="marquee flex items-center whitespace-nowrap"
        style={{ animation: `marquee ${speed} linear infinite` }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={`${logo.name}-${index}`}
            src={logo.src}
            alt={logo.name}
            className={`inline-block ${height} w-auto object-contain ${gap}`}
            loading="lazy"
          />
        ))}
      </div>

      <style>{`
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

export default LogoMarquee;