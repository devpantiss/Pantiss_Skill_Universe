import React from "react";
import { FaLinkedin } from "react-icons/fa";

interface Founder {
  name: string;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  readMore?: boolean;
}

const founders: Founder[] = [
  {
    name: "Mr. Stalin Nayak",
    title: "Founder & Chancellor of Pantiss Skills Universe",
    subtitle:
      "Founder & MD of Medhavi Foundation, NSDC Advisor, IIT Kharagpur, Stanford University",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761685978/stalinsir_l53ura.jpg",
    description:
      "Mr. Pravesh Dudani, Founder and Chancellor of Medhavi Skills University (MSU), Sikkim, is a visionary leader in the field of higher education and skill development. With an unwavering commitment to bridging the gap between academia and industry, he has dedicated his life to creating opportunities that enhance employability and empower the Indian youth. As Managing Director of Medhavi Foundation, the sponsoring body of MSU, he has played a pivotal role in reshaping the education and skilling landscape in India.",
    readMore: true,
  },
  // {
  //   name: "Mr. Sanjay Pradhan",
  //   title: "Founder & Vice-Chancellor of Pantiss Skills Universe",
  //   subtitle: "Co-Founder & MD of Medhavi Foundation, NSDC Advisor",
  //   image:
  //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040837/Sanjay_sir_b5cld1.jpg",
  //   description:
  //     "Mr. Kuldip Sarma stands as a beacon of visionary leadership within the realm of higher education, wielding his dynamic presence as both the Co-Founder & Pro-Chancellor of Medhavi Skills University. His contribution and leadership mark a transformative era in educational paradigms. Under his stewardship, the institution has burgeoned, guided by a steadfast commitment to accessible and purpose-driven education.",
  //   readMore: true,
  // },
];

const FoundersSection: React.FC = () => {
  return (
    <section className="relative bg-black py-16 px-6 md:px-20 overflow-hidden">
      {/* Vibrant Blurry Circles */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600 rounded-full blur-[180px] opacity-70"></div>
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-green-500 rounded-full blur-[160px] opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-red-600 rounded-full blur-[140px] opacity-65"></div>
      <div className="absolute bottom-10 right-1/3 w-[300px] h-[300px] bg-green-500 rounded-full blur-[120px] opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 border-l-4 border-orange-500 pl-4">
          Our Founders
        </h2>

        <div className="space-y-20">
          {founders.map((founder, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="bg-blue-600 rounded-lg overflow-hidden w-64 h-72 flex items-center justify-center shadow-lg shadow-black/50">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-white max-w-2xl bg-black/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {founder.name}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-500"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </h3>
                <p className="text-sm text-gray-300 italic">{founder.title}</p>
                {founder.subtitle && (
                  <p className="text-sm text-gray-400 italic mb-4">
                    {founder.subtitle}
                  </p>
                )}
                <p className="text-gray-200 mt-4 leading-relaxed">
                  {founder.description}
                  {founder.readMore && (
                    <a
                      href="#"
                      className="text-orange-300 ml-1 hover:underline"
                    >
                      Read more
                    </a>
                  )}
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
