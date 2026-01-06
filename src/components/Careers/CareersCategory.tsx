import React, { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export type CareerArea = {
  title: string;
  count: number;
  img: string;
};

const careerAreas: CareerArea[] = [
  {
    title: "Skill Training & Delivery",
    count: 2,
    img: "/careers/vocational.JPG",
  },
  {
    title: "Curriculum & Instructional Design",
    count: 1,
    img: "/careers/curriculum.jpeg",
  },
  {
    title: "Industry Partnerships & Placements",
    count: 1,
    img: "/careers/placements.svg",
  },
  {
    title: "Assessment, Certification & RPL",
    count: 1,
    img: "/careers/Assessment.jpeg",
  },
  {
    title: "Monitoring, Evaluation & Quality",
    count: 1,
    img: "/careers/M&E.jpg",
  },
  {
    title: "Skill Lab & Infrastructure Management",
    count: 1,
    img: "/careers/ICT.jpg",
  },
  {
    title: "EdTech & Digital Learning Systems",
    count: 2,
    img: "/careers/edtech.jpeg",
  },
];

const CareersCategory: React.FC = () => {
  const navigate = useNavigate();

  const settings = useMemo(
    () => ({
      infinite: true,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 640, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  return (
    <section className="bg-neutral-950 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Careers at Pantiss Skill University
        </h2>
        <p className="mt-3 text-neutral-400 max-w-3xl">
          Join a mission-driven skilling university shaping industry-ready
          talent through training, innovation, and partnerships.
        </p>

        <Slider {...settings} className="mt-10">
          {careerAreas.map((area) => (
            <div
              key={area.title}
              className="px-4 relative text-center cursor-pointer"
              onClick={() =>
                navigate(
                  `/careers/jobs?category=${encodeURIComponent(area.title)}`
                )
              }
            >
              <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute z-100 top-3 right-10 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                {area.count}
              </span>
              <h3 className="mt-4 text-white font-semibold">{area.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default memo(CareersCategory);
