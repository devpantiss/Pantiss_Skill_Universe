import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your card data
const slides = [
  {
    image:
      "https://www.amity.edu/backoffice/Uploads/HomeBanner/7banner_7banner_amity1.webp",
    heading: "World-class Labs & Research",
    subHeading: "Ranked in Global Top 3%",
    paragraph:
      "Our research and training facilities empower students to innovate and excel in their fields, with global recognition from QS and THE.",
  },
  {
    image:
      "https://www.amity.edu/backoffice/Uploads/HomeBanner/103banner_103banner_amity4.webp",
    heading: "Skill-Based Learning",
    subHeading: "Future-Proof Curriculum",
    paragraph:
      "Hands-on skill development and industry collaboration ensure students stay at the forefront of tech, safety, and professional standards.",
  },
  {
    image:
      "https://www.amity.edu/backoffice/Uploads/HomeBanner/102banner_102banner_amity3.webp",
    heading: "Career Opportunities",
    subHeading: "Top Recruiter Partnerships",
    paragraph:
      "Our graduates are placed at leading companies worldwide, enjoying vibrant career advancements and global exposure.",
  },
  {
    image:
      "https://www.amity.edu/backoffice/Uploads/HomeBanner/101banner_101banner_amity2.webp",
    heading: "Inclusive Student Life",
    subHeading: "Support & Well-Being",
    paragraph:
      "Experience a welcoming campus with strong mentoring, vibrant co-curriculars, and a focus on holistic student well-being.",
  },
  // Repeat or add more cards for seamless infinity in carousel
  {
    image:
      "https://www.amity.edu/backoffice/Uploads/HomeBanner/7banner_7banner_amity1.webp",
    heading: "Advanced Training",
    subHeading: "Industry 4.0 Ready",
    paragraph:
      "Our partnerships and training ensure you are job-ready for tomorrow's world.",
  },
  {
    image:
      "https://www.amity.edu/backoffice/Uploads/HomeBanner/103banner_103banner_amity4.webp",
    heading: "Growth Mindset",
    subHeading: "Nurturing Talent",
    paragraph:
      "Unlock holistic personal and professional growth through unique campus experiences.",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3, // Base number of visible slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  arrows: false,
  // cssEase: "linear",
  // centerMode: true, // Enable center mode to keep all slides visible
  // centerPadding: "0px", // No padding to avoid clipping, adjust if needed
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 700, settings: { slidesToShow: 1 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } },
  ],
};

const Welcome: React.FC = () => (
  <section className="w-full py-12 px-0 bg-gradient-to-b from-black via-[#FF3366]/30 to-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center font-bold text-white mb-10 drop-shadow">
        Welcome To <span className="text-[#FF3366]">Pantiss Skill</span> <span className="text-[#FFBE0B]">University</span>
      </h2>

      <Slider {...settings}>
        {slides.map((card, id) => (
          <div key={id} className="py-2 px-2">
            <div
              className={`
                h-full flex flex-col bg-white/10 backdrop-blur-md
                rounded-2xl border border-white/20 shadow-xl
                p-4
                min-h-[200px] max-w-md
              `}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.6rem",
                background: "rgba(24, 19, 30, 0.36)",
              }}
            >
              <div className="w-[64px] h-[64px] rounded-full overflow-hidden shadow mb-2 flex-shrink-0">
                <img src={card.image} alt={card.heading} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col items-center text-center">
                <h3 className="text-base md:text-lg font-bold text-[#FFBE0B]">{card.heading}</h3>
                <div className="text-xs md:text-sm text-[#FF3366] mb-1 font-semibold">{card.subHeading}</div>
                {/* <p className="text-xs md:text-sm text-white/85 font-medium">{card.paragraph}</p> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    {/* <style>
      {`
        .slick-list { margin: 0; padding: 0; }
        .slick-slide > div { outline: none; }
        .slick-track { display: flex; align-items: center; }
      `}
    </style> */}
  </section>
);

export default Welcome;