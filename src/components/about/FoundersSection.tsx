import React from "react";
import { FaLinkedin } from "react-icons/fa";

interface Founder {
  name: string;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  readMore?: boolean;
  linkedin?: string;
}

const founders: Founder[] = [
  {
    name: "Mr. Stalin Nayak",
    title: "Founder & Chancellor, Pantiss Skills Universe",
    subtitle:
      "Founder & CEO, PANTISS Group",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761685978/stalinsir_l53ura.jpg",
    description:
      "Mr. Stalin Nayak is a visionary leader in higher education and skill development. With a strong focus on bridging academia and industry, he has played a pivotal role in shaping skill ecosystems that enhance employability and empower youth across India.",
    readMore: true,
    linkedin: "#",
  },
];

const FoundersSection: React.FC = () => {
  return (
    <section className="relative bg-black py-24 px-6 md:px-20 overflow-hidden">
      {/* 🔴🟢 Original Vibrant Blurry Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600 rounded-full blur-[180px] opacity-70" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-green-500 rounded-full blur-[160px] opacity-70" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-red-600 rounded-full blur-[140px] opacity-65" />
      <div className="absolute bottom-10 right-1/3 w-[300px] h-[300px] bg-green-500 rounded-full blur-[120px] opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-orange-500 pl-4">
            Our Founders
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Leadership that drives purpose, innovation, and industry-aligned
            skill development.
          </p>
        </div>

        {/* Founder Profiles */}
        <div className="space-y-20">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className="flex justify-center md:justify-start">
                <div className="relative h-[450px] rounded-xl overflow-hidden shadow-xl shadow-black/50">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-white bg-black/40 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">
                    {founder.name}
                  </h3>

                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-500 transition"
                      aria-label="LinkedIn profile"
                    >
                      <FaLinkedin size={22} />
                    </a>
                  )}
                </div>

                <p className="mt-2 text-sm text-gray-300">
                  {founder.title}
                </p>

                {founder.subtitle && (
                  <p className="mt-1 text-sm text-gray-400 italic">
                    {founder.subtitle}
                  </p>
                )}

                <p className="mt-6 text-gray-200 leading-relaxed">
                  {founder.description}
                  {/* {founder.readMore && (
                    <a
                      href="#"
                      className="ml-2 text-orange-400 hover:underline font-medium"
                    >
                      Read more
                    </a>
                  )} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;