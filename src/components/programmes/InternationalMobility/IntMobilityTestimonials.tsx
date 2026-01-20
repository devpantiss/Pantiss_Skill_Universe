import React, { useState, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";

interface Testimonial {
  logo?: string;
  text: string;
  name: string;
  designation: string;
  photo?: string;
  category: "Students" | "Trainers" | "Industries";
}

const testimonials: Testimonial[] = [
  {
    logo: "https://labournet.in/wp-content/uploads/2022/03/Hindustan_Unilever_Logo-1.png",
    text: `International mobility candidates trained here show strong workplace discipline, safety awareness, and communication readiness — making onboarding smoother across global sites.`,
    name: "Employer Partner",
    designation: "Overseas Hiring Manager",
    photo: "https://via.placeholder.com/150",
    category: "Industries",
  },
  {
    text: `The language sessions and interview practice helped me crack my overseas assessment. The program guided me through documentation and readiness.`,
    name: "Ayesha Khan",
    designation: "Mobility Candidate (2024)",
    photo: "https://via.placeholder.com/150",
    category: "Students",
  },
  {
    text: `We train with global standards in mind — SOP discipline, safety, and communication. Learners become confident and professional for international roles.`,
    name: "Rohit Mehta",
    designation: "Trainer – International Readiness",
    photo: "https://via.placeholder.com/150",
    category: "Trainers",
  },
];

const defaultImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="absolute -right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500 rounded-full bg-white/10 p-2 hover:bg-white/20 z-10 transition-all duration-300"
    onClick={onClick}
    aria-label="Next testimonial"
    role="button"
    tabIndex={0}
  >
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="absolute -left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500 rounded-full bg-white/10 p-2 hover:bg-white/20 z-10 transition-all duration-300"
    onClick={onClick}
    aria-label="Previous testimonial"
    role="button"
    tabIndex={0}
  >
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const IntMobilityTestimonials: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [activeTab, setActiveTab] = useState<"Students" | "Trainers" | "Industries">("Industries");

  const handleBeforeChange = (current: number, next: number) => {
    gsap.fromTo(
      `.slick-slide[data-index="${current}"]`,
      { opacity: 0.5, y: 20 },
      { opacity: 0, y: 0, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      `.slick-slide[data-index="${next}"]`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  };

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: handleBeforeChange,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {dots}
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-blue-500/50 hover:bg-blue-500 transition-all duration-300" />
    ),
  };

  React.useEffect(() => {
    if (sliderRef.current) sliderRef.current.slickGoTo(0);
  }, [activeTab]);

  const filteredTestimonials = testimonials.filter((t) => t.category === activeTab);

  return (
    <section className="relative w-full py-20" aria-label="International Mobility Testimonials">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/Homepage/HomePage_Hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="max-w-8xl mx-auto px-6 relative z-20 flex flex-col md:flex-row">
        {/* Tabs */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <div className="flex flex-col space-y-2">
            {["Students", "Trainers", "Industries"].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-4 text-lg font-semibold rounded-lg transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div className="w-full md:w-3/4">
          <h2 className="text-5xl font-semibold text-white text-center mb-12 relative tracking-wide">
            Global Journeys & Success Stories
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-lg" />
          </h2>

          <Slider ref={sliderRef} {...settings}>
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-6 flex flex-col items-start relative h-full transition-all duration-300">
                    <div className="mb-8">
                      <img
                        src={testimonial.logo || defaultImage}
                        alt="Company Logo"
                        className="h-16 object-contain"
                        loading="lazy"
                        onError={(e) => (((e.target as HTMLImageElement).src = defaultImage))}
                      />
                    </div>

                    <p className="text-gray-50 italic text-base mb-6 flex-1">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center mt-auto">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-5">
                        <img
                          src={testimonial.photo || defaultImage}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                          loading="lazy"
                          onError={(e) => (((e.target as HTMLImageElement).src = defaultImage))}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-xl">{testimonial.name}</p>
                        <p className="text-md text-gray-200">{testimonial.designation}</p>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 text-blue-500 text-4xl font-bold animate-pulse-slow">
                      “
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-200 italic text-center py-4">
                No testimonials available for this category.
              </div>
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Custom animation for quotation mark
const style = document.createElement("style");
style.textContent = `
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default IntMobilityTestimonials;
