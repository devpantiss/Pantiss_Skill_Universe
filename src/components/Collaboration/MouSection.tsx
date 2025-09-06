import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mouPartners = [
  {
    name: "UGC",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/ugc.png",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "NSDC",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/nsdc.png",
    image:
      "https://images.unsplash.com/photo-1521790360285-69b7e5d5a37f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Skill India",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/skillindia.png",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "AICTE",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/aicte.png",
    image:
      "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "NASSCOM",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/nasscom.png",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "TATA Trusts",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/tata.png",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "UNDP",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/undp.png",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "World Bank",
    logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1734950000/worldbank.png",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
  >
    <FaChevronLeft />
  </button>
);

const MouSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background blurry circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Memorandum of Understanding (MoU) Partners
        </h2>

        <Slider {...settings}>
          {mouPartners.map((partner, index) => (
            <div key={index} className="px-4">
              <div className="group relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-red-600/30 hover:scale-[1.02] transition transform">
                {/* Image */}
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition"
                />

                {/* Logo overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-md">
                  <img
                    src={partner.logo}
                    alt={partner.name + " logo"}
                    className="h-10 w-auto object-contain"
                  />
                </div>

                {/* Bottom info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Strategic partnership for skill development, innovation, and
                    knowledge exchange.
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

export default MouSection;
