import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const slides = [
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761739709/derrick-treadwell-xgYOInZU7wg-unsplash_jyoimb.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[100vh] pt-52 w-full overflow-hidden bg-neutral-950">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          JOIN THE BIGGEST NON-PROFIT FAMILY
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-300">
          Pantiss Careers
        </p>

        <div className="mt-8 flex">
          <input
            type="text"
            placeholder="Enter keyword(s) or location"
            className="px-4 py-2 rounded-l-md focus:outline-none w-80 bg-neutral-900 text-white placeholder-neutral-400"
          />
          <button className="bg-red-600 px-6 py-2 rounded-r-md text-white font-bold hover:bg-red-700">
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;