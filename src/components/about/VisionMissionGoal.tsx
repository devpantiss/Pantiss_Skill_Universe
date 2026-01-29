import React from "react";

const VisionMissionGoal: React.FC = () => {
  const cards = [
    {
      title: "Our Philosophy",
      text: "We believe skill-driven education unlocks human potential. By aligning passion with profession, learners build purpose, confidence, and careers that are meaningful, sustainable, and future-ready.",
      bg: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80')", // abstract structure
    },
    {
      title: "Our Vision",
      text: "To create a future where education seamlessly blends skills, innovation, and employability—empowering youth to thrive in industry, entrepreneurship, and the global workforce.",
      bg: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')", // abstract horizon / light
    },
    {
      title: "Our Mission",
      text: "To transform learning through industry immersion, apprenticeships, and ethical training—shaping skilled professionals ready to adapt, perform, and lead in real-world environments.",
      bg: "url('https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1400&q=80')", // abstract industrial geometry
    },
  ];

  return (
    <section className="w-full bg-black grid grid-cols-1 md:grid-cols-3">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative h-[460px] flex items-end p-6 text-white group overflow-hidden"
          style={{
            backgroundImage: card.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent transition-all duration-300" />

          {/* red accent hover overlay */}
          <div className="absolute inset-0 bg-red-600/20 opacity-0 transition-all duration-300 group-hover:opacity-100" />

          {/* Subtle noise / texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:14px_14px]" />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-3">
              {card.title}
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-white/85 max-w-md">
              {card.text}
            </p>

            {/* Accent line */}
            <div className="mt-5 h-[2px] w-10 rounded-full bg-red-500" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default VisionMissionGoal;