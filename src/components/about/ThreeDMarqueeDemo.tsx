import React from "react";
import { motion } from "framer-motion";

interface ThreeDMarqueeProps {
  images: string[];
  speed?: number; // seconds for full loop
}

export const ThreeDMarquee: React.FC<ThreeDMarqueeProps> = ({
  images,
  speed = 20,
}) => {
  // Duplicate images to ensure seamless loop
  const loopImages = [...images, ...images];

  // Split into 4 columns
  const columns = [0, 1, 2, 3].map((col) =>
    loopImages.filter((_, idx) => idx % 4 === col)
  );

  return (
    <div className="relative h-[700px] w-full overflow-hidden group py-10">
      {/* Blurred colorful background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500 opacity-30 blur-[150px] rounded-full" />
        <div className="absolute top-2/3 left-2/3 w-80 h-80 bg-blue-500 opacity-30 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 left-2/3 w-60 h-60 bg-purple-500 opacity-30 blur-[150px] rounded-full" />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {columns.map((colImages, colIdx) => (
          <motion.div
            key={colIdx}
            className="flex flex-col gap-6"
            animate={{
              y: colIdx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: speed,
              ease: "linear",
            }}
            style={{
              animationPlayState: "running",
            }}
          >
            {colImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Image ${colIdx}-${idx}`}
                className="aspect-[970/700] w-full rounded-lg object-cover ring ring-gray-950/5"
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Pause on hover */}
      <style>{`
        .group:hover .flex {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};
