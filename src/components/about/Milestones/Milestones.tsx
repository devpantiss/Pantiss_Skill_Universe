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
        <span className="text-red-500">Rehabilitation</span> &{" "}
        <span className="text-red-500">Resettlement</span>
      </>
    ),
    description:
      "Conducted extensive need assessment surveys, spatial planning, and GIA studies for rehabilitation and resettlement of 7,000 households across seven mines in the Chotanagpur Plateau.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721743/2021_1_uwndfp.jpg",
  },
  {
    year: "2022",
    title: (
      <>
        <span className="text-red-500">RPL</span> &{" "}
        <span className="text-red-500">Mining Skill</span> Development
      </>
    ),
    description:
      "Mobilized, trained, and assessed 150 youth under structured mining skill development programs in Jajpur district.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721734/2022_stq3rx.jpg",
  },
  {
    year: "2023",
    title: (
      <>
        <span className="text-red-500">Fisheries</span> Clusters in{" "}
        <span className="text-red-500">Mining Pits</span>
      </>
    ),
    description:
      "Established fisheries clusters inside mining pits, positively impacting livelihoods of over 300 families.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721751/2023_new_wgvhrv.jpg",
  },
  {
    year: "2024",
    title: (
      <>
        <span className="text-red-500">Guava Plantation</span> on{" "}
        <span className="text-red-500">Abandoned Mining Land</span>
      </>
    ),
    description:
      "Converted 350 acres of abandoned mining land into productive guava plantations in the Sukinda Chromite region.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721731/2024_zakmqr.jpg",
  },
];

/* =======================
   Real Slick Arrows
======================= */

const ArrowBase =
  "slick-arrow absolute bottom-[-70px] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-red-500/30 bg-black/70 text-red-400 backdrop-blur transition hover:bg-red-500 hover:text-black";

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className={`${ArrowBase} left-[calc(50%-160px)]`}
    aria-label="Previous"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className={`${ArrowBase} left-[calc(50%+120px)]`}
    aria-label="Next"
  >
    <FaChevronRight />
  </button>
);

/* =======================
   Component
======================= */

const Milestones: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i: number) => (
      <button className="text-xs font-semibold text-red-400 transition hover:text-red-300">
        {milestonesData[i].year}
      </button>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* ===== Red Ambient Background ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-red-400">
            Our Journey
          </p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Milestones
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60">
            A timeline of impact-driven initiatives shaping sustainable
            livelihoods and resilient communities.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {milestonesData.map((milestone) => (
            <div key={milestone.year} className="px-3">
              <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-12 lg:p-10">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl lg:col-span-7">
                  <img
                    src={milestone.imageUrl}
                    alt={milestone.year}
                    className="h-52 w-full object-cover lg:h-[420px]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Year Badge */}
                  <div className="absolute left-5 top-5 rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-black shadow-lg">
                    {milestone.year}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-semibold text-white lg:text-3xl">
                    {milestone.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {milestone.description}
                  </p>

                  <div className="mt-6 h-[2px] w-12 rounded-full bg-red-500" />
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