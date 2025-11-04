import React from "react";
import Slider from "react-slick";
import "./certifications.css";

interface Certification {
  title: string;
  description: string;
  imageUrl: string;
}

const certificationsData: Certification[] = [
  {
    title: "ISO 9002",
    description: "Quality Assured",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729175/AdobeStock_636819188_Preview_fjxys3.jpg",
  },
  {
    title: "NSDC (National Skill Development Council)",
    description: "Industry Engagement Partner",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729202/hector-reyes-WRo7RQFpamA-unsplash_oyoxxb.jpg",
  },
  {
    title:
      "MEPS (Management, Entrepreneurship and Professional Sector Skill Council)",
    description: "Industry Engagement Partner",
    imageUrl:
      "https://www.ualberta.ca/en/folio/media-library/2023/11/231109-women-entrepreneurs-main-16x9-3000px.jpg",
  },
  {
    title: "SCMS (Skill Council for Mining Sector)",
    description: "Authorized Training Partner",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729210/matthew-de-livera-4Gf51uY0YQE-unsplash_j3ih5t.jpg",
  },
  {
    title: "Indian Iron and Steel Sector Skill Council",
    description: "Authorized Training Partner",
    imageUrl:
      "https://www.man-es.com/images/default-source/default-album/iron-and-steel-applications-process-industry.jpg?sfvrsn=9667eca1_4",
  },
  {
    title: "Agriculture Skill Council of India",
    description: "Authorized Training Partner",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729200/foto-murthy-lXVWulsnNQE-unsplash_evbtha.jpg",
  },
];

const settings: import("react-slick").Settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const Certifications: React.FC = () => {
  return (
    <section
      className="relative bg-gray-950 text-white py-24"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762254177/peter-herrmann-z6DJJZ1-1Cg-unsplash_qxsfml.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Title */}
        <div className="text-left mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            <span className="border-l-4 border-red-600 pl-3">
              Certifications & Accreditations
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Our certifications reflect our commitment to skill excellence,
            adherence to quality standards, and strong partnerships across
            industries and councils.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings} className="certifications-slider w-full">
          {certificationsData.map((cert, index) => (
            <div key={index} className="px-1">
              <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 flex flex-col h-[520px]">
                <div className="relative flex-shrink-0">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-[380px] object-cover ring-2 ring-red-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-70"></div>
                </div>

                <div className="flex-grow flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                  <div className="h-1 w-20 mt-4 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certifications;
