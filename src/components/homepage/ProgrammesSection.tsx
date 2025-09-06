import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiSearch } from "react-icons/fi";

// Now with descriptive text for all courses
const operatorCourses = [
  {
    name: "Forklift Operator",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1745667511/Mid-IC-Pneumatic-Application_bkgb2w.webp",
    desc: "Learn to safely operate forklifts in material handling and warehousing environments. Focus on real-world equipment, controls, and all safety protocols."
  },
  {
    name: "Crane Operator",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752927/Ace-hydra-crane_fsn7an.jpg",
    desc: "Master heavy lifting with overhead, tower, and mobile cranes, including setup, rigging, signaling, and advanced operations in construction settings."
  },
  {
    name: "Dumper Operator",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752927/volvo-460_ycjwtr.avif",
    desc: "Efficiently run logistics and supply chain operations—learn inventory, shipping, process flows, and essential IT/systems skills."
  },
  {
    name: "Excavator Operator",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752928/volvo-excavator_i51rgi.webp",
    desc: "Train with the latest warehouse material handling equipment (MHE): stackers, reach trucks, tuggers, pallet jacks, and more."
  },
  {
    name: "Loader Operator",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752927/loader-caterpillar_n4nnhu.jpg",
    desc: "Operate assembly lines in manufacturing—covering components fitting, safety, quality control, and process optimization."
  }
];

const technicianCourses = [
  {
    name: "Electrical Technician",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754069619/elec_vy9fwx.jpg",
    desc: "Install, maintain, and troubleshoot industrial electrical systems. Hands-on with wiring, control panels, motors, and safety standards."
  },
  {
    name: "HEMM Mechanic Technician",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754069620/HEMM_hstnts.png",
    desc: "Repair and maintain mechanical equipment for manufacturing, power, and utilities. Emphasizes diagnostics and preventive maintenance."
  },
  {
    name: "Welding Technician",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754069725/welder_jshef4.jpg",
    desc: "Master welding techniques (MIG, TIG, ARC) for construction, fabrication, and metalwork, with a focus on precision and safety."
  },
  {
    name: "Security Guard",
    bg: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1754069724/security_ao6tvz.webp",
    desc: "Diagnose and program programmable logic controllers for industrial automation and robotics, plus fault finding and testing."
  }
];

const statData = [
  { value: "12", label: "Universities" },
  { value: "150+", label: "Institutions & Centers" },
  { value: "300+", label: "Programmes" },
];

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="absolute -right-6 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#FFBE0B] rounded-full bg-white/10 p-2 hover:bg-[#FF3366]/20 hover:ring-2 hover:ring-[#ffbe0b] z-10 transition-all duration-300"
    onClick={onClick}
    aria-label="Next course"
    role="button"
    tabIndex={0}
  >
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    className="absolute -left-6 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#FFBE0B] rounded-full bg-white/10 p-2 hover:bg-[#FF3366]/20 hover:ring-2 hover:ring-[#ffbe0b] z-10 transition-all duration-300"
    onClick={onClick}
    aria-label="Previous course"
    role="button"
    tabIndex={0}
  >
    <svg
      className="w-10 h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const ProgrammeSection: React.FC = () => {
  const [tab, setTab] = useState<"operator" | "technician">("operator");
  const [search, setSearch] = useState("");
  const sliderRef = useRef<Slider>(null);

  const courseList =
    tab === "operator"
      ? operatorCourses.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
      : technicianCourses.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  const displayedCourses = search.trim() ? courseList : (tab === "operator" ? operatorCourses : technicianCourses);

  const settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Base number of visible slides
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {dots}
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-[#FFBE0B]/50 hover:bg-[#FFBE0B] transition-all duration-300" />
    ),
    centerMode: true, // Ensure all visible slides are fully displayed
    centerPadding: "0px", // No padding to avoid clipping
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-black via-[#bd254b] to-black min-h-[570px] py-10 md:py-16 w-full flex flex-col items-center">
      {/* Stats and Header */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row md:items-center md:justify-center gap-6 mb-3">
        <div className="flex-1 flex flex-col items-center px-2 mb-4 md:mb-0">
          <h2 className="font-bold text-2xl md:text-5xl text-white lg:text-left text-center mb-1 tracking-tight">
            STUDY AT PANTISS SKILL UNIVERSITY
          </h2>
          <p className="text-white/85 lg:text-left text-center text-base max-w-lg">
            Pantiss sets the benchmarks of the global education with a system that matches the best of practices, theories, resources and standards all over the world
          </p>
        </div>
        <div className="flex flex-row justify-center gap-6 md:gap-10">
          {statData.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-extrabold" style={{ color: "#FFBE0B" }}>{s.value}</div>
              <div className="text-base font-semibold text-white/90 text-center whitespace-nowrap">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Main Programme Card */}
      <div className="w-full max-w-5xl mt-8 mx-auto">
        <div className="bg-transparent ring-2 ring-[#FFBE0B] rounded md:mx-0 shadow-lg overflow-hidden max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-600">
            <button
              className={`flex-1 text-center py-3 text-lg font-semibold ${
                tab === "operator"
                  ? "bg-[#FFBE0B] text-[#1d212f] shadow"
                  : "bg-[#161E2E] text-white/80 hover:bg-white/10"
              } transition`}
              onClick={() => { setTab("operator"); setSearch(""); }}
            >
              Operator Programmes
            </button>
            <button
              className={`flex-1 text-center py-3 text-lg font-semibold ${
                tab === "technician"
                  ? "bg-[#FFBE0B] text-[#1d212f] shadow"
                  : "bg-[#161E2E] text-white/80 hover:bg-white/10"
              } transition`}
              onClick={() => { setTab("technician"); setSearch(""); }}
            >
              Technician Programmes
            </button>
          </div>
          {/* Search row */}
          <div className="px-6 md:px-10 py-8 flex flex-col">
            <div className="flex w-full">
              <input
                className="flex-1 border border-gray-300 rounded-l-xl px-4 py-3 focus:outline-none focus:border-[#FF3366] text-gray-800 text-lg bg-white"
                placeholder="Enter Course Name"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Find a Course"
              />
              <button className="bg-[#FF3366] px-4 rounded-r-xl flex items-center justify-center text-white text-xl hover:bg-[#d22e53] transition">
                <FiSearch />
              </button>
            </div>
            {/* Links row */}
            <div className="flex mt-4 text-[15px] justify-between pr-2 text-[#FFBE0B] font-bold">
              <button className="hover:underline" onClick={() => setSearch("")}>
                Search by Level
              </button>
              <button className="hover:underline" onClick={() => setSearch("")}>
                A to Z
              </button>
              <button className="hover:underline" onClick={() => setSearch("")}>
                Search by Discipline
              </button>
            </div>
            {/* Programme Cards Slider */}
            <div className="relative px-4">
              <Slider ref={sliderRef} {...settings}>
                {displayedCourses.length > 0 ? (
                  displayedCourses.map((c) => (
                    <div
                      key={c.name}
                      className="px-2"
                    >
                      <div
                        className="relative rounded-2xl overflow-hidden shadow-xl flex flex-col min-h-[350px] bg-white/5 border border-white/15 group"
                      >
                        {/* Card background image with overlay */}
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            backgroundImage: `url(${c.bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(2px) brightness(0.70)",
                            opacity: 0.92,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
                        <div className="relative z-20 flex flex-col justify-center h-full px-6 py-7">
                          <span className="text-xl md:text-3xl font-bold text-[#FFBE0B] drop-shadow mb-1">
                            {c.name}
                          </span>
                          <p className="text-white/90 text-[15px] font-medium leading-snug">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-200 italic text-center py-4">
                    No matching courses found.
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;