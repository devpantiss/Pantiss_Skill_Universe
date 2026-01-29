import React from "react";
import Slider from "react-slick";
import "./certifications.css";

interface Certification {
  title: string;
  description: string;
  imageUrl: string;
  logoUrl: string;
}

const certificationsData: Certification[] = [
  {
    title: "ISO 9002",
    description: "Quality Assured",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729175/AdobeStock_636819188_Preview_fjxys3.jpg",
    logoUrl: "/cert/iso.png",
  },
  {
    title: "NSDC (National Skill Development Council)",
    description: "Industry Engagement Partner",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729202/hector-reyes-WRo7RQFpamA-unsplash_oyoxxb.jpg",
    logoUrl: "/cert/NSDC.png",
  },
  {
    title:
      "MEPS (Management, Entrepreneurship and Professional Sector Skill Council)",
    description: "Industry Engagement Partner",
    imageUrl:
      "https://www.ualberta.ca/en/folio/media-library/2023/11/231109-women-entrepreneurs-main-16x9-3000px.jpg",
    logoUrl: "/cert/MEPSC.png",
  },
  {
    title: "SCMS (Skill Council for Mining Sector)",
    description: "Authorized Training Partner",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729210/matthew-de-livera-4Gf51uY0YQE-unsplash_j3ih5t.jpg",
    logoUrl: "/cert/SCMS.png",
  },
  {
    title: "Indian Iron and Steel Sector Skill Council",
    description: "Authorized Training Partner",
    imageUrl:
      "https://www.man-es.com/images/default-source/default-album/iron-and-steel-applications-process-industry.jpg?sfvrsn=9667eca1_4",
    logoUrl: "/cert/IISSSC.png",
  },
  {
    title: "Agriculture Skill Council of India",
    description: "Authorized Training Partner",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729200/foto-murthy-lXVWulsnNQE-unsplash_evbtha.jpg",
    logoUrl: "/cert/asci.png",
  },
];

const settings: import("react-slick").Settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Certifications: React.FC = () => {
  return (
    <section
      className="relative bg-gray-950 text-white py-24"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1762254177/peter-herrmann-z6DJJZ1-1Cg-unsplash_qxsfml.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* ===== Logo Strip ===== */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
          {certificationsData.map((c, i) => (
            <img
              key={i}
              src={c.logoUrl}
              alt={c.title}
              className="h-12 object-contain grayscale opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* ===== Heading ===== */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            <span className="border-l-4 border-red-600 pl-3">
              Certifications & Accreditations
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Our certifications demonstrate adherence to quality, compliance, and
            strong institutional partnerships across sectors.
          </p>
        </div>

        {/* ===== Slider ===== */}
        <Slider {...settings}>
          {certificationsData.map((cert, index) => (
            <div key={index} className="">
              <div className="flex h-[520px] flex-col overflow-hidden border border-gray-700 bg-gray-900/80 backdrop-blur transition hover:shadow-[0_0_28px_rgba(220,38,38,0.45)]">
                {/* Image */}
                <div className="relative h-[300px]">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div
                    className="flex h-14 w-32 items-center justify-center rounded-md px-3 transition hover:scale-105"
                  >
                    <img
                      src={cert.logoUrl}
                      alt={cert.title}
                      className="max-h-10 max-w-full object-contain"
                    />
                  </div>{" "}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-300">{cert.description}</p>
                  </div>
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-red-600 to-green-600" />
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
