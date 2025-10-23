import React, { memo, useState, useMemo, useCallback, useEffect } from "react";
import { FaBookOpen, FaBed, FaChalkboardTeacher, FaFootballBall, FaTheaterMasks, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CampusLife {
  title: string;
  color: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  backgroundImage: string;
}

const campusLifeData: CampusLife[] = [
  {
    title: "Study",
    color: "bg-red-600",
    description:
      "World-class classrooms, digital libraries, modern labs, and active mentorship enable a focused and inspiring academic journey. Collaborative learning and support at every step.",
    icon: FaBookOpen,
    backgroundImage: "https://amity.edu/images/home-stu-life-img1.png",
  },
  {
    title: "Hostel",
    color: "bg-green-600",
    description:
      "Comfortable, secure hostels and modern amenities for students from all backgrounds. Make lifelong friendships, experience cultural exchange, and focus on your dreams worry-free.",
    icon: FaBed,
    backgroundImage: "https://amity.edu/images/home-stu-life-img4.png",
  },
  {
    title: "Learn",
    color: "bg-blue-600",
    description:
      "A learning culture that goes beyond books: practical workshops, projects, hackathons, and direct industry engagement. Ignite curiosity and build 21st-century skills for any career.",
    icon: FaChalkboardTeacher,
    backgroundImage: "https://amity.edu/images/home-stu-life-img2.png",
  },
  {
    title: "Play",
    color: "bg-green-600",
    description:
      "From vibrant sports grounds to indoor games & e-sports zones—balance your academics with healthy competition, fitness, and fun. Teamwork that builds true confidence.",
    icon: FaFootballBall,
    backgroundImage: "https://amity.edu/images/home-stu-life-img5.jpg",
  },
  {
    title: "Extra Curriculars",
    color: "bg-red-600",
    description:
      "Clubs in music, dance, drama, tech, leadership, and debate. Campus fests and cultural celebrations make every semester lively and give you chances to perform, create, and lead.",
    icon: FaTheaterMasks,
    backgroundImage: "https://www.mahatmandc.ac.in/wp-content/uploads/2024/11/Annual-Day-2023.jpg",
  },
  {
    title: "More",
    color: "bg-cyan-600",
    description:
      "Counseling centers, health clinics, skill bootcamps, startup incubators, and a caring, inclusive community—all made to support your growth and unique path.",
    icon: FaEllipsisH,
    backgroundImage: "https://amity.edu/images/home-stu-life-img3.png",
  },
];

const LifeItem = memo(
  ({
    sector,
    isActive,
    onMouseEnter,
    onMouseLeave,
  }: {
    sector: CampusLife;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => {
    const IconComponent = sector.icon;

    return (
      <div
        role="tab"
        aria-expanded={isActive}
        aria-label={`Expand ${sector.title}`}
        aria-controls={`panel-${sector.title}`}
        className={`relative flex-1 transition-[flex,opacity] duration-500 ease-in-out ${
          isActive ? "flex-[5]" : "flex-[1.2]"
        } cursor-pointer flex items-center justify-center overflow-hidden ${sector.color} border border-gray-700 will-change-[flex,opacity]`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onMouseEnter();
          }
        }}
        tabIndex={0}
      >
        <img
          src={isActive ? sector.backgroundImage : sector.backgroundImage.replace("w=800", "w=200")}
          alt={`${sector.title} background`}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {!isActive && (
          <div
            className="relative z-20 transform bg-black/80 p-4 rounded-md text-white text-3xl font-extrabold tracking-wide uppercase opacity-80 transition-opacity duration-500 scale-90 will-change-[opacity,transform]"
            style={{ transform: "rotate(-90deg) scale(0.9)" }}
          >
            {sector.title}
          </div>
        )}
        {isActive && (
          <div
            id={`panel-${sector.title}`}
            className="relative z-20 text-center p-6 bg-black/30 rounded-lg shadow-md transition-opacity duration-500 opacity-100 will-change-opacity"
          >
            <div className="flex justify-center mb-4">
              <IconComponent className="text-5xl text-white" />
            </div>
            <h3 className="text-3xl font-bold uppercase text-white">{sector.title}</h3>
            <p className="mt-4 text-base text-gray-200 max-w-md mx-auto leading-relaxed">{sector.description}</p>
            <Link
              to={`/life/${sector.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="mt-6 inline-block px-4 py-2 bg-green-600 text-black font-semibold rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        )}
      </div>
    );
  },
  (prev, next) =>
    prev.isActive === next.isActive && prev.sector.title === next.sector.title
);

LifeItem.displayName = "LifeItem";

const LifeOnCampusAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      requestAnimationFrame(() => {
        setActiveIndex(index);
      });
    },
    [timeoutId]
  );

  const handleMouseLeave = useCallback(() => {
    const id = setTimeout(() => {
      setActiveIndex(null);
    }, 300);
    setTimeoutId(id);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const accordionItems = useMemo(
    () =>
      campusLifeData.map((sector, index) => (
        <LifeItem
          key={sector.title}
          sector={sector}
          isActive={activeIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      )),
    [activeIndex, handleMouseEnter, handleMouseLeave]
  );

  return (
    <section className="w-full flex justify-center py-16 bg-black relative overflow-hidden">
      {/* Large Blurry Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-30 z-0" />

      {/* Small Blurry Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-cyan-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-1/2 right-10 w-32 h-32 bg-green-600 rounded-full blur-3xl opacity-30 z-0" />

      <div className="max-w-7xl w-full px-6 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white [will-change:transform]">
          Life of a <span className="text-green-600">Pantiss Student</span>
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Experience every aspect—study, hostel, learning, play, and more—in a vibrant and supportive campus community.
        </p>
        <div
          role="tablist"
          aria-label="Life on Campus"
          className="flex w-full h-[450px] sm:h-[500px] rounded-xl overflow-hidden shadow-2xl"
        >
          {accordionItems}
        </div>
        <Link
          to="/student-life"
          className="inline-block mt-8 px-4 py-2 bg-green-600 text-black font-semibold rounded-md hover:bg-green-700 transition-colors duration-300"
          aria-label="Explore all aspects of student life"
        >
          Explore All
        </Link>
      </div>
    </section>
  );
};

export default memo(LifeOnCampusAccordion, () => true);