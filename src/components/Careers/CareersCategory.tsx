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
    <section className="border-y border-white/10 bg-[#111111] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f5d38a]">
          Academic & Administrative Pathways
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Find your place in the university
        </h2>
        <p className="mt-3 text-neutral-300 max-w-3xl">
          Explore teaching, curriculum, laboratories, placements, digital learning, and quality roles that keep a skill university running well.
        </p>

        <Slider {...settings} className="mt-10">
          {careerAreas.map((area) => (
            <div
              key={area.title}
              className="px-3 cursor-pointer"
              onClick={() =>
                navigate(
                  `/careers/jobs?category=${encodeURIComponent(area.title)}`
                )
              }
            >
              <div className="group relative h-[330px] overflow-hidden rounded-md border border-white/10 bg-[#080808] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#d9a441]/70">
                <img
                  src={area.img}
                  alt={area.title}
                  className="h-48 w-full object-cover opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="p-5 text-left">
                  <span className="inline-flex rounded-sm border border-red-500/30 bg-red-950/50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-200">
                    {area.count} open {area.count === 1 ? "role" : "roles"}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-white">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    Serve learners through structured, practice-led education.
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

export default memo(CareersCategory);
