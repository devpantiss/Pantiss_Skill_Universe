import SiteImage from "../../common/SiteImage";
import React from "react";
import Slider from "../../common/ViewportSlider";
import type { Settings } from "react-slick";


type GalleryItem = {
  src: string;
  title: string;
};

const galleryItems: GalleryItem[] = [
  { src: "/optimized/gallery/Gallery_1.JPG.webp", title: "Hands-on Technical Training" },
  { src: "/optimized/gallery/Gallery_2.jpg.webp", title: "Community Immersion" },
  { src: "/optimized/gallery/Gallery_3.jpg.webp", title: "Indigenous Engagement" },
  { src: "/optimized/gallery/Gallery_4.JPG.webp", title: "Livelihood & Enterprise Training" },
  { src: "/gallery/Gallery_5.JPG", title: "Structured Learning Environments" },
  { src: "/gallery/Gallery_6.JPG", title: "Skill Labs & Infrastructure" },
  { src: "/optimized/gallery/Gallery_7.JPG.webp", title: "Advanced Skill Labs" },
  { src: "/optimized/gallery/Gallery_9.JPG.webp", title: "Practical Exposure" },
  { src: "/optimized/gallery/Gallery_10.JPG.webp", title: "On-ground Training" },
];

const sliderSettings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,

  // 🔥 TRUE AUTO-SCROLL
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  cssEase: "linear",

  slidesToShow: 3,
  slidesToScroll: 1,

  pauseOnHover: true,
  pauseOnFocus: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const UpskillingAndReskillingGallery: React.FC = () => {
  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-1 w-10 bg-red-600 rounded-full" />
            <span className="uppercase tracking-wider text-sm text-neutral-400">
              Pantiss Skill Ecosystem
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pantiss Skill Universe
          </h2>

          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            An immersive ecosystem of upskilling and reskilling initiatives
            delivering real-world exposure, industry readiness, and
            community-driven transformation.
          </p>
        </div>

        {/* CAROUSEL */}
        <Slider {...sliderSettings}>
          {galleryItems.map((item, index) => (
            <div key={index} className="px-4">
              <div
                className="
                  group relative overflow-hidden rounded-xl
                  bg-neutral-900 border border-neutral-800
                  transition-shadow duration-300
                  hover:shadow-2xl
                "
              >
                {/* IMAGE */}
                <SiteImage decoding="async"
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="
                    w-full h-[380px] object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* CAPTION */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    p-5
                    bg-gradient-to-t from-black/80 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                >
                  <h4 className="text-white text-lg font-semibold">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

export default UpskillingAndReskillingGallery;
