import React from "react";

const SkillOnWheelsCTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-500 text-center text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">
          Join us in driving skill empowerment across India
        </h2>
        <p className="mb-8 text-lg">
          Partner with Pantiss Skill Universe to take skilling to every corner of the country.
        </p>
        <a
          href="#contact"
          className="px-8 py-3 bg-black text-green-400 font-semibold rounded-full hover:bg-gray-900 transition"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
};

export default SkillOnWheelsCTA;
