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
    title: "Pantiss School for Mines",
    description:
      "Equipping future mining professionals with advanced skills in exploration, mineral processing, and sustainable extraction practices.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_MINES-removebg-preview_airmxv.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756755056/VN20250902_005536_c5eudz.mp4",
    impact: [
      { label: "Courses", value: 20 },
      { label: "Students", value: "3,200+" },
      { label: "Industry Partners", value: 10 },
    ],
    programs: ["Mining Technician", "Mine Safety Supervisor"],
  },
  {
    title: "Pantiss School for Steel & Aluminium",
    description:
      "Focused on metallurgical innovation, process engineering, and sustainability in steel and aluminium production.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_STEEL___ALUMINIUM-removebg-preview_lqtpri.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756794883/VN20250902_010449_pztskt.mp4",
    impact: [
      { label: "Courses", value: 18 },
      { label: "Students", value: "2,700+" },
      { label: "Research Labs", value: 6 },
    ],
    programs: ["Metallurgical Engineer", "Plant Process Controller"],
  },
  {
    title: "Pantiss School for Power & Green Energy",
    description:
      "Building expertise in renewable energy, grid management, and sustainable power technologies for the future.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_POWER___GREEN_ENERGY-removebg-preview_tinr0w.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756795877/VN20250902_121823_amqd0h.mp4",
    impact: [
      { label: "Courses", value: 22 },
      { label: "Students", value: "2,500+" },
      { label: "Energy Labs", value: 7 },
    ],
    programs: ["Renewable Energy Technician", "Smart Grid Engineer"],
  },
  {
    title: "Pantiss School for Shipping & Logistics",
    description:
      "Training in maritime logistics, port operations, supply chain optimization, and global freight management.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_SHIPPING___LOGISTICS-removebg-preview_ktlsje.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756796198/VN20250902_122323_uebp1a.mp4",
    impact: [
      { label: "Courses", value: 16 },
      { label: "Students", value: "2,400+" },
      { label: "Partner Ports", value: 5 },
    ],
    programs: ["Maritime Logistics Officer", "Port Operations Manager"],
  },
  {
    title: "Pantiss School for Electric Vehicles",
    description:
      "Focused on EV design, battery technology, and electric mobility systems to drive the clean transportation revolution.",
    logo: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1756812463/Pantiss_School__12_-removebg-preview_akcpud.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756795877/VN20250902_121823_amqd0h.mp4",
    impact: [
      { label: "Courses", value: 19 },
      { label: "Students", value: "2,100+" },
      { label: "EV Labs", value: 5 },
    ],
    programs: ["EV Technician", "Battery Design Engineer"],
  },
  {
    title: "Pantiss School for Construction Tech & Infra Equipment",
    description:
      "Developing professionals in construction technologies, heavy equipment management, and smart infrastructure systems.",
    logo: "hhttps://res.cloudinary.com/dxzhnns58/image/upload/v1761928458/SCHOOL_FOR_CONSTRUCTION___INFRA_EQUIPMENT-removebg-preview_rpgnjo.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756796295/10810481-hd_1920_1080_30fps_psg3sc.mp4",
    impact: [
      { label: "Courses", value: 21 },
      { label: "Students", value: "2,900+" },
      { label: "Construction Sites", value: 9 },
    ],
    programs: ["Construction Manager", "Infrastructure Equipment Specialist"],
  },
  {
    title: "Pantiss School for Water, Sanitation & Facility Management",
    description:
      "Specializing in water resource management, sanitation engineering, and sustainable facility operations for a cleaner tomorrow.",
    logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/SCHOOL_FOR_WASH-removebg-preview_s8wofi.png",
    video: "https://res.cloudinary.com/djtzx6wo7/video/upload/v1756795583/13386003_3840_2160_50fps_jtj4ls.mp4",
    impact: [
      { label: "Courses", value: 17 },
      { label: "Students", value: "2,000+" },
      { label: "Partner Municipalities", value: 4 },
    ],
    programs: ["Water Treatment Specialist", "Facility Operations Manager"],
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
