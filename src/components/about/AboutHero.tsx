import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.msu.edu.in/frontend_assets/images/who-we-are-cover.png')",
        }}
      />

      {/* Overlay for black tint */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center md:items-end">
        <div className="w-full px-6 md:px-12 max-w-4xl">
          <div className="text-center md:text-left md:mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-red-600">Who</span>{" "}
              <span className="text-green-600">We Are</span>
            </h1>
            <p className="text-gray-200 md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              <span className="text-green-600 font-semibold">
                Pantiss Skill Universe
              </span>{" "}
              is dedicated to empowering communities through skill development,
              vocational training, and industry-led education. We bridge the gap
              between academic learning and real-world application, offering
              career pathways that transform lives and drive socio-economic
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
