import React from "react";

interface Logo {
  name: string;
  src: string;
}

interface LogoMarqueeProps {
  logos: Logo[];                  // array of logos
  heading?: string;               // NEW: section heading
  height?: string;                // tailwind height e.g. "h-20"
  speed?: string;                 // animation speed e.g. "20s"
  gap?: string;                   // gap between logos e.g. "mx-6"
  bg?: string;                    // background e.g. "bg-black/80"
  className?: string;             // wrapper override
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  heading,
  height = "h-20",
  speed = "20s",
  gap = "mx-6",
  bg = "bg-black/90",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden ${bg} ${className}`}>
      {/* Heading */}
      {heading && (
        <div className="text-center py-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <span className="block mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-green-500 to-red-500 rounded-full" />
        </div>
      )}

      {/* Marquee */}
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