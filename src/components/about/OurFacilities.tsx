import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const facilities = [
  {
    title: "Practical Based Learning",
    description: "Hands-on training to prepare students for real-world challenges.",
    image: "https://images.unsplash.com/photo-1581091012184-5c64a4b1d1b5?q=80&w=1920",
  },
  {
    title: "AR/VR Training Modules",
    description: "Immersive AR/VR experiences for advanced technical education.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1920",
  },
  {
    title: "Simulator Based Learning",
    description: "State-of-the-art simulators for practical industrial training.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1920",
  },
  {
    title: "Industry Expert Mentorship",
    description: "Guidance from professionals with decades of experience.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920",
  },
  {
    title: "Advanced Labs",
    description: "Fully equipped labs for experimentation and research.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1920",
  },
];

const ArrowButton = ({ onClick, direction }: { onClick?: () => void; direction: "left" | "right" }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-20 p-4 rounded-full text-white transition-all duration-300 
      group hover:scale-110 hover:shadow-lg bg-red-600 hover:shadow-[#ff3366]/50
      ${direction === "left" ? "left-6" : "right-6"}`}
      // style={{
      //   background: "linear-gradient(120deg, #dc2626 0%, #22c55e 100%)",
      //   backdropFilter: "blur(8px)",
      // }}
    aria-label={direction === "left" ? "Previous slide" : "Next slide"}
  >
    {direction === "left" ? (
      <FaChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
    ) : (
      <FaChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
    )}
  </button>
);

export default function OurFacilities() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2},
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full bg-black py-12 relative overflow-hidden">
      {/* Blurred Circle Background Elements */}
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[300px] h-[300px] rounded-full opacity-30"
        style={{
          background: "#ff3366",
          filter: "blur(100px)",
        }}
      ></div>
      <div
        className="absolute top-[-25%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "#ffbe0b",
          filter: "blur(120px)",
        }}
      ></div>
      <div
        className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full opacity-20"
        style={{
          background: "linear-gradient(135deg, #ff3366, #ffbe0b)",
          filter: "blur(80px)",
        }}
      ></div>
      <div className="px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Our Facilities</h2>
        <div className="relative" style={{ background: "transparent" }}>
          <Slider {...settings} className="overflow-hidden">
            {facilities.map((facility, index) => (
              <div key={index} className="px-2 py-2">
                <div
                  className="relative h-[350px] rounded-lg overflow-hidden group cursor-pointer ring-2 ring-green-500"
                  style={{ backgroundImage: `url(${facility.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold group-hover:-translate-y-1 transition-transform duration-300">
                      {facility.title}
                    </h3>
                    <p className="opacity-80 text-sm mt-2">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}