import React from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./milestones.css";

/* =======================
   Types
======================= */

interface Milestone {
  year: string;
  title: React.ReactNode;
  description: string;
  imageUrl: string;
}

interface ArrowProps {
  onClick?: () => void;
}

/* =======================
   Data
======================= */

const milestonesData: Milestone[] = [
  {
    year: "2021",
    title: (
      <>
        <span className="text-red-600">Rehabilitation</span> &{" "}
        <span className="text-red-600">Resettlement</span>
      </>
    ),
    description:
      "We conducted an extensive Need Assessment Survey, Spatial Planning, and GIA Survey to facilitate the Rehabilitation and Resettlement (R&R) of 7,000 households across seven mines in the Chotanagpur Plateau...",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721743/2021_1_uwndfp.jpg",
  },
  {
    year: "2022",
    title: (
      <>
        <span className="text-red-600">RPL</span> &{" "}
        <span className="text-red-600">Mining Skill</span> Development Program
      </>
    ),
    description:
      "We successfully mobilized, trained, and assessed 150 candidates as part of the Mining Skill Development Program in Jajpur...",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721734/2022_stq3rx.jpg",
  },
  {
    year: "2023",
    title: (
      <>
        <span className="text-red-600">Fisheries</span> Cluster in{" "}
        <span className="text-red-600">Mining Pits</span>
      </>
    ),
    description:
      "We proudly celebrate the establishment of fisheries clusters within mining pits, transforming livelihoods for 300 families...",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721751/2023_new_wgvhrv.jpg",
  },
  {
    year: "2024",
    title: (
      <>
        <span className="text-red-600">Guava Plantation</span> in Abandoned Mining
        Land in{" "}
        <span className="text-red-600">Sukinda Chromite Region</span>
      </>
    ),
    description:
      "We transformed 350 acres of abandoned mining land into thriving guava plantations...",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721731/2024_zakmqr.jpg",
  },
];

/* =======================
   Custom Arrows
======================= */

const PreviousArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute -bottom-[70px] lg:-bottom-12 cursor-pointer left-[33%]"
    onClick={onClick}
  >
    <FaChevronLeft className="text-red-600 hover:text-red-700 text-[30px] transition-all duration-300" />
  </div>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute -bottom-[70px] lg:-bottom-12 cursor-pointer right-[32%]"
    onClick={onClick}
  >
    <FaChevronRight className="text-red-600 hover:text-red-700 text-[30px] transition-all duration-300" />
  </div>
);

/* =======================
   Component
======================= */

const Milestones: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (index: number) => (
      <button>{milestonesData[index].year}</button>
    ),
    dotsClass: "slick-dots custom-dots",
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="container mx-auto py-16 mb-6">
      {/* H1 Heading */}
      <h1 className="text-3xl sm:text-4xl text-white md:text-4xl font-bold text-center mb-12">
        Milestones
      </h1>

      <div className="flex justify-center items-center">
        <Slider {...settings} className="w-[380px] bg-transparent lg:w-[1200px]">
          {milestonesData.map((milestone) => (
            <div
              key={milestone.year}
              className="flex justify-center items-center"
            >
              <div className="flex flex-col lg:flex-row gap-x-10 items-center">
                {/* Image */}
                <div className="w-full lg:w-2/3">
                  <img
                    src={milestone.imageUrl}
                    alt={milestone.year}
                    className="w-full h-44 lg:h-[450px] object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/3 mt-5">
                  <h3 className="text-lg font-bold">{milestone.year}</h3>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-700">
                    {milestone.title}
                  </div>
                  <p className="text-md text-gray-500 mt-2">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Milestones;