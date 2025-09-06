import React from "react";

const VisionMissionGoal: React.FC = () => {
  const cards = [
    {
      title: "Our Philosophy",
      text: "Our philosophy of youth development through Education lies in empowering the individual through Skills to explore the higher version of the self. Aligning passion and profession fosters creativity, dedication, and purpose, leading to a fulfilling career.",
      bg: "url('https://www.msu.edu.in/frontend_assets/images/banner/our-philosphy.jpg')", // replace with actual
    },
    {
      title: "Our Vision",
      text: "Our vision is to be the beacon of excellence in higher education, empowering youth with skill-integrated learning pathways that seamlessly bridge the gap between academia, employability, and entrepreneurship. We envision a future where every student is equipped with the knowledge, skills, and innovative mindset to forge dignified careers and lead fulfilling lives, thereby contributing meaningfully to society and the global economy.",
      bg: "url('https://www.msu.edu.in/frontend_assets/images/banner/our-vision.jpg')", // replace with actual
    },
    {
      title: "Our Mission",
      text: "We aim to revolutionize higher education by seamlessly integrating in-demand skills with academic learning through industry-immersive apprenticeships and on-the-job training to make students industry-ready. Our goal is to nurture learners with appropriate attitudes and ethics for a sustainable progress in career and life. Our commitment extends beyond technical skills. We focus on cultivating the right attitudes and ethical values in our learners, fostering a holistic development that prepares them for sustainable career growth and a balanced, fulfilling life.",
      bg: "url('https://www.msu.edu.in/frontend_assets/images/banner/our-mision.jpg')", // replace with actual
    },
  ];

  return (
    <section className="w-full grid bg-black grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative h-[500px] flex items-end p-6 text-white group"
          style={{
            backgroundImage: `${card.bg}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-300"></div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-red-600/20 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-green-500 mb-3">
              {card.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed">{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VisionMissionGoal;