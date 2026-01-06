import React from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* =======================
   Types
======================= */

interface Award {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  orgLogo: string;
}

interface ArrowProps {
  onClick?: () => void;
}

/* =======================
   Data
======================= */

const awardsData: Award[] = [
  {
    year: "2021",
    title: "Star Performer Award",
    description: "#Beat_Plastic_Pollution Initiative",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
    orgLogo:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723963/c1e1380ffdd93941850639161032c834_do4ghj.png",
  },
  {
    year: "2022",
    title: "WES Innovation Award",
    description: "Youth WES Leadership Award",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
    orgLogo:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723956/pngegg_3_bcfxvx.png",
  },
  {
    year: "2023",
    title: "Kutumb Migrants Savior Award",
    description: "Helping and safeguarding migrants",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
    orgLogo:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723948/kutumb_rrini4.jpg",
  },
  {
    year: "2023",
    title: "Best Performer Award",
    description:
      "Building better livelihoods across rural Odisha",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
    orgLogo:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761724428/olm_1_ow2qdb.png",
  },
];

/* =======================
   Custom Arrows
======================= */

const PreviousArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute -left-5 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft className="text-white text-2xl hover:text-gray-300 transition" />
  </div>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute -right-5 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight className="text-white text-2xl hover:text-gray-300 transition" />
  </div>
);

/* =======================
   Component
======================= */

const Awards: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative px-10 bg-black py-6">
      <div className="flex flex-col mx-auto max-w-7xl">
        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-4xl text-white md:text-4xl font-bold text-center mb-12">
          Awards
        </h1>
        <p className="text-white text-lg text-center mx-auto mb-12 max-w-3xl">
          Our commitment to quality and reliability has earned us numerous
          awards and accolades. These recognitions reflect the trust and
          reputation we have built over the years.
        </p>
      </div>

      <Slider {...settings} className="h-[350px]">
        {awardsData.map((award, index) => (
          <div key={`${award.year}-${index}`} className="pb-16">
            <div className="relative flex flex-col items-center text-center h-[300px] px-12">
              {/* Award Image */}
              <img
                src={award.imageUrl}
                alt={award.title}
                className="absolute top-10 h-[300px] z-50 object-contain"
                loading="lazy"
              />

              {/* Content */}
              <div className="flex flex-col items-center">
                <h3 className="text-white text-lg font-semibold">
                  {award.year} — {award.title}
                </h3>

                <p className="text-gray-300 mt-2 text-sm w-[160px]">
                  {award.description}
                </p>

                <img
                  src={award.orgLogo}
                  alt={`${award.title} organisation`}
                  className="h-28 mt-6 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Awards;
