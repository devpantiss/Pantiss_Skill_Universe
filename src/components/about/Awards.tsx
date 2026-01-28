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
    description: "Building better livelihoods across rural Odisha",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
    orgLogo:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761724428/olm_1_ow2qdb.png",
  },
];

/* =======================
   Custom Arrows
======================= */

const ArrowBase =
  "absolute top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur transition hover:bg-white hover:text-black";

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button className={`${ArrowBase} -left-4`} onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button className={`${ArrowBase} -right-4`} onClick={onClick}>
    <FaChevronRight />
  </button>
);

/* =======================
   Component
======================= */

const Awards: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="relative bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Awards & Recognition
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-white/60">
            Milestones that reflect our long-term commitment to excellence and
            impact.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {awardsData.map((award, idx) => (
              <div key={idx}>
                {/* Rail Item */}
                <div className="grid grid-cols-12 items-center gap-8 rounded-xl border border-white/10 bg-white/5 px-6 py-8">
                  {/* Year */}
                  <div className="col-span-2">
                    <div className="text-4xl font-semibold tracking-tight text-white/90">
                      {award.year}
                    </div>
                    <div className="mt-2 h-px w-10 bg-white/30" />
                  </div>

                  {/* Golden Decor with Centered Logo */}
                  <div className="col-span-3 flex justify-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD873] to-[#D4AF37] shadow-lg">
                      <img
                        src={award.orgLogo}
                        alt={`${award.title} organisation`}
                        className="h-16 w-16 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Award Image */}
                  <div className="col-span-3 flex justify-center">
                    <img
                      src={award.imageUrl}
                      alt={award.title}
                      className="h-32 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="col-span-4">
                    <h3 className="text-lg font-medium">
                      {award.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Awards;