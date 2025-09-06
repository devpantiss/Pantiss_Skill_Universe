import React, { useState, useEffect, useRef } from "react";

// Define interface for tab data
interface TabData {
  title: string;
  content: string;
  hasNotification: boolean;
}

// Define the Notices component as a TypeScript Functional Component
const Notices: React.FC = () => {
  // State for left section tabs
  const [activeLeftTab, setActiveLeftTab] = useState<keyof typeof leftTabData>("Admission");

  // State for right section tabs
  const [activeRightTab, setActiveRightTab] = useState<keyof typeof rightTabData>("Tenders");

  // Data for left section tabs
  const leftTabData: Record<string, TabData> = {
    Admission: {
      title: "Admission",
      content:
        "No Admission Notification Available! Check back later for updates on the admission process for the 2025-26 academic year.",
      hasNotification: false,
    },
    Examinations: {
      title: "Examinations",
      content:
        "No Examination Notification Available! Stay tuned for upcoming exam schedules and results.",
      hasNotification: false,
    },
  };

  // Data for right section tabs
  const rightTabData: Record<string, TabData> = {
    Tenders: {
      title: "Tenders",
      content:
        "No Tenders Notification Available! Check back for future tender announcements.",
      hasNotification: false,
    },
    Project: {
      title: "Project",
      content:
        "No Project Notification Available! Details on ongoing projects will be updated soon.",
      hasNotification: false,
    },
  };

  // Data for middle section highlights
  const highlights: string[] = [
    "Commission (UGC), ensuring academic credibility.",
    "First Skill University in North East India: Pioneer institution focusing on skill development and employability.",
    "State-of-the-art Labs and Facilities: Equipped with modern infrastructure for hands-on training and practical experience.",
  ];

  // Auto-scroll logic with typed ref
  const highlightsRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const container = highlightsRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollStep = 1; // Adjust speed
    const intervalTime = 30; // Smoother scrolling interval

    const scroll = () => {
      if (container && !isPaused) {
        scrollPosition += scrollStep;
        if (scrollPosition >= container.scrollHeight - container.clientHeight) {
          scrollPosition = 0; // Reset to top when reaching the end
        }
        container.scrollTop = scrollPosition;
      }
    };

    const interval = setInterval(scroll, intervalTime);
    return () => clearInterval(interval);
  }, [isPaused, highlights]); // Added highlights as dependency

  // Handle hover pause on individual items with improved type safety
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
      setIsPaused(false);
    }
  };

  // Generate unique keys for duplicated highlights
  const doubledHighlights = [...highlights, ...highlights].map((item, index) => ({
    content: item,
    key: `highlight-${index}`,
  }));

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Announcements Header */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold border-b-4 border-orange-500 pb-3">
            📣 Announcements
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Updated: August 06, 2025 | New Academic Calendar 2025-26 | Result
            for Assistant Professor Post
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Admissions and Examinations Tabs */}
          <div className="">
            <div className="flex">
              {Object.keys(leftTabData).map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveLeftTab(tab as keyof typeof leftTabData)
                  }
                  className={`px-6 py-3 rounded-t-lg font-medium transition-colors duration-200 ${
                    activeLeftTab === tab
                      ? "bg-[#FF3366] text-white shadow-md"
                      : "bg-gray-200 text-[#FF3366] hover:bg-gray-300"
                  }`}
                  aria-controls={`left-tab-content-${tab}`}
                  aria-selected={activeLeftTab === tab}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div
              id={`left-tab-content-${activeLeftTab}`}
              className="bg-transparent p-6 rounded-xl shadow-lg border border-[#FF3366]"
            >
              <h3 className="text-yellow-500 text-xl font-semibold mb-4 flex items-center">
                📋 {leftTabData[activeLeftTab].title}
              </h3>
              <p className="text-red-600 text-base mb-5">
                {leftTabData[activeLeftTab].content}
              </p>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                View All →
              </button>
            </div>
          </div>

          {/* Middle Column - University Highlights with Auto-Scroll */}
          <div className="bg-transparent p-6 rounded-xl shadow-lg border border-[#FF3366]">
            <h3 className="text-yellow-500 text-xl font-semibold mb-4 flex items-center">
              ⭐ University Highlights
            </h3>
            <div
              ref={highlightsRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-48 overflow-y-hidden scroll-smooth"
            >
              <ul className="space-y-6 text-gray-50 text-base">
                {doubledHighlights.map((item) => (
                  <li
                    key={item.key}
                    className="flex items-start p-2 hover:bg-gray-100 rounded transition-colors duration-200"
                  >
                    <span className="text-green-600 mr-3">✔</span>
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Tenders, Project Tabs */}
          <div className="">
            <div className="flex">
              {Object.keys(rightTabData).map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveRightTab(tab as keyof typeof rightTabData)
                  }
                  className={`px-6 py-3 rounded-t-lg font-medium transition-colors duration-200 ${
                    activeRightTab === tab
                      ? "bg-[#FF3366] text-white shadow-md"
                      : "bg-gray-200 text-[#FF3366] hover:bg-gray-300"
                  }`}
                  aria-controls={`right-tab-content-${tab}`}
                  aria-selected={activeRightTab === tab}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div
              id={`right-tab-content-${activeRightTab}`}
              className="bg-transparent p-6 rounded-xl shadow-lg border border-[#FF3366]"
            >
              <h3 className="text-yellow-500 text-xl font-semibold mb-4 flex items-center">
                {activeRightTab === "Tenders" ? "📑" : "📊"}{" "}
                {rightTabData[activeRightTab].title}
              </h3>
              <p className="text-red-600 text-base mb-5">
                {rightTabData[activeRightTab].content}
              </p>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                View All →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;