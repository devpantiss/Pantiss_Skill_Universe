import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Throttled function utility (no longer needed but kept for potential future use)

const cards = [
  {
    icon: (
      <svg width={48} height={48} fill="#fff">
        <circle cx="24" cy="24" r="22" fill="#FF3366" />
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" dy=".3em">🌟</text>
      </svg>
    ),
    heading: "State-of-the-Art Facilities",
    text: "Experience world-class infrastructure for modern skill development.",
  },
  {
    icon: (
      <svg width={48} height={48} fill="#fff">
        <circle cx="24" cy="24" r="22" fill="#FFBE0B" />
        <text x="50%" y="55%" textAnchor="middle" fill="#0F0E0E" fontSize="20" fontWeight="bold" dy=".3em">🤖</text>
      </svg>
    ),
    heading: "Robotics & Semiconductors",
    text: "Stay ahead with cutting-edge labs and research support.",
  },
  {
    icon: (
      <svg width={48} height={48} fill="#fff">
        <circle cx="24" cy="24" r="22" fill="#7c3afd" />
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" dy=".3em">🚢</text>
      </svg>
    ),
    heading: "Maritime & Shipping",
    text: "Launch careers powered by sector-leading industry partnerships.",
  },
  {
    icon: (
      <svg width={48} height={48} fill="#fff">
        <circle cx="24" cy="24" r="22" fill="#4ADE80" />
        <text x="50%" y="55%" textAnchor="middle" fill="#0F0E0E" fontSize="20" fontWeight="bold" dy=".3em">🌱</text>
      </svg>
    ),
    heading: "Green Technology",
    text: "Be future-ready in clean tech and sustainable innovations.",
  },
  {
    icon: (
      <svg width={48} height={48} fill="#fff">
        <circle cx="24" cy="24" r="22" fill="#0ea5e9" />
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" dy=".3em">🏗</text>
      </svg>
    ),
    heading: "Construction Technology",
    text: "Master high-demand construction and project skills.",
  },
  {
    icon: (
      <svg width={48} height={48} fill="#fff">
        <circle cx="24" cy="24" r="22" fill="#FF3366" />
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" dy=".3em">👗</text>
      </svg>
    ),
    heading: "Textiles & Design",
    text: "A blend of creative freedom and advanced technology.",
  },
];

const sliderSettings = {
  dots: false, // Removed dots
  infinite: true,
  speed: 600,
  slidesToShow: 3, // Base number of visible slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500, // Shortened to 1.5 seconds
  pauseOnHover: true,
  arrows: false,
  centerMode: true, // Ensure all visible slides are fully displayed
  centerPadding: "0px", // No padding to avoid clipping
  cssEase: "linear",
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 700, settings: { slidesToShow: 1 } },
  ],
};

const bgImage =
  "https://www.amity.edu/backoffice/uploads/HomeBanner/6fblg_mumbai.jpg";

const ParallaxSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] w-full py-16 flex items-center overflow-hidden select-none">
      {/* Parallax background image */}
      <div
        className="parallax-bg absolute inset-0 z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-3 md:px-0 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg">
          Discover Pantiss Skill University’s{" "}
          <span className="text-[#FFBE0B]">Distinct Advantage</span>
        </h2>
        <div className="w-full">
          <Slider {...sliderSettings}>
            {cards.map((card, idx) => (
              <div key={idx} className="px-3 py-4">
                <div
                  className="flex flex-col items-center text-center px-8 py-7 rounded-2xl ring-4 ring-[#FFBE0B] glass-card h-full min-h-[270px] max-w-xs mx-auto bg-white/20 backdrop-blur-lg shadow-xl"
                  tabIndex={0}
                  style={{
                    background: "rgba(30, 20, 44, 0.36)",
                  }}
                >
                  <div className="rounded-full bg-white/10 mb-3 flex items-center justify-center w-16 h-16 shadow">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-gray-100/90 text-[15px] tracking-tight font-normal">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Parallax CSS */}
      <style>{`
        .parallax-bg {
          background-image: url('${bgImage}');
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        }
        .slick-list { margin: 0; padding: 0; }
        .slick-slide > div { outline: none; }
        .slick-track { display: flex; align-items: center; }
      `}</style>
    </section>
  );
};

export default ParallaxSection;