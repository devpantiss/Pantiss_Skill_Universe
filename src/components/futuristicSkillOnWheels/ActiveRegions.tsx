import React from "react";

const regions = [
  { name: "Jharsuguda, Odisha", impact: "500+ youth trained" },
  { name: "Sundargarh, Odisha", impact: "300+ youth trained" },
  { name: "Raigarh, Chhattisgarh", impact: "200+ women trained" },
];

const ActiveRegions: React.FC = () => {
  return (
    <section
      className="relative py-24 text-white bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762518724/andreea-tilihoi-m4oi9nwIly4-unsplash_ay3jbw.jpg')", // 🔹 Replace with your background
      }}
    >
      {/* 🖤 Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* 🌐 Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Active Regions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <div
              key={i}
              className="relative group bg-gray-900/50 border border-gray-700 rounded-2xl p-8 shadow-xl backdrop-blur-md
                         hover:border-green-400/60 hover:shadow-[0_0_25px_rgba(0,255,160,0.4)] transition-all duration-500"
            >
              {/* Glow accent */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition duration-500" />
              
              <h3 className="relative text-2xl font-semibold z-10">{region.name}</h3>
              <p className="relative text-gray-300 mt-3 z-10 text-lg">{region.impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Moving gradient overlay for subtle depth */}
      {/* <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #00ffaa 0, #00ffaa 1px, transparent 1px, transparent 40px)",
        }}
      /> */}
    </section>
  );
};

export default ActiveRegions;
