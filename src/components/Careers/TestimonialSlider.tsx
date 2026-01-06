import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

type Testimonial = {
  image: string;
  quote: string;
  name: string;
  title: string;
  location: string;
};

const TestimonialSlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const testimonials: Testimonial[] = [
    {
      image: "/teams/dwarka.png",
      quote:
        "As the Lead for Water, Sanitation, and Hygiene at Pantiss Foundation, I am committed to ensuring that every community we serve has access to safe water, proper sanitation, and hygienic living conditions. Our work goes beyond infrastructure — it’s about restoring dignity, promoting health, and empowering people to build cleaner, safer futures. Each project is a step toward a healthier, more equitable society.",
      name: "Mr. Dwarka Prasad Bisoyi",
      title: "Lead, (Water & Sanitation)",
      location: "Bhubaneswar, Odisha",
    },
    {
      image: "/teams/rahul.png",
      quote:
        "As the Lead for Education, Skills Development, and Migration at Pantiss Foundation, I’ve witnessed how targeted skilling and education can transform lives and communities. Our mission is to empower youth and migrant workers with the right opportunities, bridging the gap between potential and employment. At Pantiss, every initiative we take moves us closer to an inclusive and self-reliant Odisha.",
      name: "Mr. Rahul Nayak",
      title: "Lead, (Technical, Vocational & Educational Training)",
      location: "Bhubaneswar, Odisha",
    },
    {
      image: "/teams/Padmini.png",
      quote:
        "As the Co-Lead for Placements and Industry Engagement at Pantiss Foundation, I’ve had the opportunity to bridge the gap between skilled talent and meaningful employment. By fostering strong partnerships with industries, we’re not only enhancing livelihood opportunities but also strengthening community resilience. At Pantiss, we believe in creating pathways where every skill leads to a sustainable future.",
      name: "Ms. Padmini Kumari Bisoyi",
      title:
        "Co-Lead, (Protection from Sexual Exploitation and Abuse(PSEA), Gender Justice & Diversity)",
      location: "Bhubaneswar, Odisha",
    },
    {
      image: "/teams/manasi.jpeg",
      quote:
        "As an Associate in Social Compliance and Safeguarding at Pantiss Foundation, I take pride in ensuring that our programs uphold the highest standards of ethics, safety, and inclusivity. Every initiative we undertake is guided by the principles of dignity and protection for all. It’s inspiring to work in an environment that not only drives social impact but also prioritizes the well-being and rights of every individual we serve.",
      name: "Manasi Behera",
      title: "Associate, (Recruitment, Learning & Performance)",
      location: "Bhubaneswar, Odisha",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode[]) => (
      <ul className="flex justify-center gap-2 mt-6">
        {dots.map((dot, index) => (
          <li key={index}>{dot}</li>
        ))}
      </ul>
    ),
  };

  return (
    <section className="bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-12">
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2
                       text-red-500 text-[48px] p-2 z-10
                       hover:text-white transition-colors"
          >
            <FaChevronLeft />
          </button>

          {/* SLIDER */}
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10">

                  {/* IMAGE */}
                  <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-lg object-cover w-[360px] h-[460px] shadow-2xl"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="w-full lg:w-2/3 text-neutral-300">
                    <svg
                      className="w-40 h-40 text-neutral-700 mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 107 96"
                    >
                      <path
                        d="M48 96V47.888H23.887C24.488 32.525 32.526 24.58 48 24.056V0C16 3.672 0 19.635 0 47.888V96h48zm59 0V47.888H82.887C83.488 32.525 91.526 24.58 107 24.056V0C75 3.672 59 19.635 59 47.888V96h48z"
                        fill="currentColor"
                      />
                    </svg>

                    <p className="text-lg md:text-2xl italic font-light leading-relaxed">
                      {testimonial.quote}
                    </p>

                    <h3 className="mt-6 font-bold text-xl text-red-500">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-neutral-400">
                      {testimonial.title}
                      <br />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* RIGHT ARROW */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2
                       text-red-500 text-[48px] p-2 z-10
                       hover:text-white transition-colors"
          >
            <FaChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
