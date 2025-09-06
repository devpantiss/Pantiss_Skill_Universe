import React, { useRef, useEffect, useState } from "react";

type ImpactItem = {
  label: string;
  value: string | number;
};

type School = {
  title: string;
  description: string;
  logo: string;
  image?: string; // optional now
  video?: string; // new field
  impact: ImpactItem[];
  programs: string[];
};

const schools: School[] = [
  {
    title: "Pantiss School of Mines, Steel and Aluminium",
    description:
      "Specialized training in mining operations, maritime logistics, heavy machinery, and safety standards to empower skilled professionals.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812463/Pantiss_School__11_-removebg-preview_klz9oz.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756755056/VN20250902_005536_c5eudz.mp4", // sample video
    impact: [
      { label: "Courses", value: 25 },
      { label: "Students", value: "3,500+" },
      { label: "Partner Companies", value: 12 },
    ],
    programs: ["Mining Technician", "Maritime Logistics Coordinator"],
  },
  {
    title: "Pantiss School of Power & Energy",
    description:
      "Focused on cutting-edge construction techniques, equipment operation, and safety management for infrastructure projects.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812472/Pantiss_School__16_-removebg-preview_orjaul.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756794883/VN20250902_010449_pztskt.mp4",
    impact: [
      { label: "Courses", value: 18 },
      { label: "Students", value: "2,800+" },
      { label: "Partner Sites", value: 8 },
    ],
    programs: ["Construction Manager", "BIM Specialist"],
  },
  {
    title: "Pantiss School of Shipping & Logistics",
    description:
      "Focused on cutting-edge construction techniques, equipment operation, and safety management for infrastructure projects.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812475/Pantiss_School__17_-removebg-preview_atj0qf.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756796198/VN20250902_122323_uebp1a.mp4",
    impact: [
      { label: "Courses", value: 18 },
      { label: "Students", value: "2,800+" },
      { label: "Partner Sites", value: 8 },
    ],
    programs: ["Construction Manager", "BIM Specialist"],
  },
  {
    title: "Pantiss School of Infra & Facility Management",
    description:
      "Focused on cutting-edge construction techniques, equipment operation, and safety management for infrastructure projects.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812468/Pantiss_School__14_-removebg-preview_ayzfu7.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756796295/10810481-hd_1920_1080_30fps_psg3sc.mp4",
    impact: [
      { label: "Courses", value: 18 },
      { label: "Students", value: "2,800+" },
      { label: "Partner Sites", value: 8 },
    ],
    programs: ["Construction Manager", "BIM Specialist"],
  },
  {
    title: "Pantiss School of Semiconductors & EV Tech",
    description:
      "Cutting-edge programs on semiconductor fabrication, robotics engineering, and embedded systems development.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812463/Pantiss_School__12_-removebg-preview_akcpud.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756795877/VN20250902_121823_amqd0h.mp4",
    impact: [
      { label: "Courses", value: 20 },
      { label: "Students", value: "2,100+" },
      { label: "Research Labs", value: 5 },
    ],
    programs: ["Semiconductor Fabricator", "Robotics Engineer"],
  },
  {
    title: "Pantiss School of Green Jobs",
    description:
      "Preparing the workforce for emerging green sectors including renewable energy, environmental tech, and sustainable mining.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812466/Pantiss_School__13_-removebg-preview_sbdhnc.png",
    video: "https://www.w3schools.com/html/movie.mp4",
    impact: [
      { label: "Courses", value: 15 },
      { label: "Students", value: "1,700+" },
      { label: "Green Certifications", value: 10 },
    ],
    programs: ["Renewable Energy Technician", "Environmental Consultant"],
  },
  {
    title: "Pantiss School of Textiles & Apparels",
    description:
      "Programs centered on modern textile manufacturing, apparel design, quality control, and sustainable materials.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812470/Pantiss_School__15_-removebg-preview_oaihyc.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756795583/13386003_3840_2160_50fps_jtj4ls.mp4",
    impact: [
      { label: "Courses", value: 22 },
      { label: "Students", value: "2,300+" },
      { label: "Design Studios", value: 4 },
    ],
    programs: ["Textile Designer", "Apparel Manufacturing Specialist"],
  },
  {
    title: "Pantiss School of Social Development",
    description:
      "Programs centered on modern textile manufacturing, apparel design, quality control, and sustainable materials.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812477/Pantiss_School__18_-removebg-preview_d0ekr8.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756795583/13386003_3840_2160_50fps_jtj4ls.mp4",
    impact: [
      { label: "Courses", value: 22 },
      { label: "Students", value: "2,300+" },
      { label: "Design Studios", value: 4 },
    ],
    programs: ["Textile Designer", "Apparel Manufacturing Specialist"],
  },
];

const HorizontalScrollComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const isHorizontalScroll = container.scrollWidth > container.clientWidth;
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (isHorizontalScroll) {
        if (
          !(scrollLeft === 0 && event.deltaY < 0) &&
          !(scrollLeft + clientWidth === scrollWidth && event.deltaY > 0)
        ) {
          event.preventDefault();
          container.scrollBy({
            left: event.deltaY,
            behavior: "smooth",
          });
        }
      }
    };

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(index);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Scrollable Area */}
      <div
        ref={containerRef}
        className="flex-1 relative w-full h-full flex overflow-x-auto snap-x snap-mandatory z-10"
        aria-live="off"
      >
        {schools.map((school, idx) => (
          <section
            key={school.title}
            className="flex-shrink-0 w-screen h-full flex lg:flex-row flex-col snap-start"
            aria-labelledby={`school-${school.title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {/* Left */}
            <div className="relative lg:w-1/2 h-full bg-gradient-to-b from-black via-red-600 to-black flex flex-col px-16 py-24 justify-center gap-8 text-white">
              {/* Slide Number (top right corner) */}
              <div className="absolute top-6 right-6 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md text-green-400">
                {String(idx + 1).padStart(2, "0")} / {String(schools.length).padStart(2, "0")}
              </div>

              <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
                <img
                  src={school.logo}
                  alt={`${school.title} logo`}
                  className="w-80 object-contain py-4"
                  loading="lazy"
                />
                <h3
                  id={`school-${school.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-3xl font-semibold text-center"
                >
                  {school.title}
                </h3>
                <p className="text-lg">{school.description}</p>

                {/* Programs List */}
                <div className="mt-6">
                  <h4 className="text-xl font-medium mb-2 text-green-400">Programs Offered</h4>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    {school.programs.map((program) => (
                      <li key={program}>{program}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {school.impact.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center bg-white/10 rounded-md p-4 hover:bg-white/20 transition-all"
                    aria-label={`${label}: ${value}`}
                  >
                    <span className="text-4xl font-extrabold text-green-400">{value}</span>
                    <span className="text-base text-green-200 uppercase tracking-wider mt-1">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="lg:w-1/2 h-full relative overflow-hidden">
              {school.video ? (
                <video
                  src={school.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                school.image && (
                  <img
                    src={school.image}
                    alt={`${school.title} image`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )
              )}
              <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-50 pointer-events-none" />
            </div>
          </section>
        ))}
      </div>

      {/* Constant Footer with Slide Number */}
      <div className="h-16 flex items-center justify-center bg-black text-white text-lg font-medium tracking-wide">
        {String(currentIndex + 1).padStart(2, "0")} / {String(schools.length).padStart(2, "0")}
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;
