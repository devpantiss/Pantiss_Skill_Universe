import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  FaSignInAlt,
  FaStar,
  FaAward,
  FaBrain,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

interface NavSubLink {
  name: string;
  path: string;
  description: string;
  image?: string;
}

interface NavLink {
  name: string;
  path?: string;
  description: string;
  subLinks?: NavSubLink[];
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
    description:
      "Welcome to Pantiss Skill University, the next-generation hub for blue-collar skills and upward mobility in India. Uniting expertise, innovation, and social upliftment.",
  },
  {
    name: "About",
    path: "/about",
    description:
      "Discover our mission to empower India's workforce through world-class training, impactful industry engagement, and transformative student journeys. At PSU, we set audacious goals and lead with purpose.",
  },
  {
    name: "Programs",
    description:
      "Choose from a vast range of programs shaping India's workforce, offered across our specialized skill schools.",
    subLinks: [
      {
        name: "View All",
        path: "/our-programmes",
        description: "Explore the complete list of programs.",
      },
      {
        name: "Recognition of Prior Learning (RPL)",
        path: "/our-programmes/recognition-of-prior-learning",
        description: "Certifies experienced workers' skills for industry recognition.",
      },
      {
        name: "Apprenticeship & Dual Training Programs",
        path: "/our-programmes/apprenticeship-and-dual-training",
        description: "Blends classroom learning with hands-on industry training.",
      },
      {
        name: "Certificate Programs (Short-Term, Modular)",
        path: "/our-programmes/certificate-programs",
        description: "Short courses for quick, skill-specific job readiness.",
      },
      {
        name: "Diploma & Advanced Diploma Programs",
        path: "/our-programmes/diploma-programs",
        description: "Structured training for technical and supervisory roles.",
      },
      {
        name: "Skill Development Bootcamps",
        path: "/our-programmes/bootcamps",
        description: "Intensive short-term programs for rapid job entry.",
      },
      {
        name: "Bridge & Foundation Programs",
        path: "/our-programmes/bridge-foundation",
        description: "Prepares dropouts for workforce with essential skills.",
      },
      {
        name: "Upskilling & Reskilling Programs",
        path: "/our-programmes/upskilling-reskilling",
        description: "Adapts workers to new technologies for career longevity.",
      },
      {
        name: "Industry-Aligned Certification Programs",
        path: "/our-programmes/industry-certifications",
        description: "Industry-designed certifications for high employability.",
      },
      {
        name: "Continuing Professional Development (CPD)",
        path: "/our-programmes/cpd",
        description: "Specialized training for mid-level career advancement.",
      },
      {
        name: "International Mobility Programs",
        path: "/our-programmes/international-mobility",
        description: "Global-standard training for overseas job opportunities.",
      },
    ],
  },
  {
    name: "Collaborations",
    path: "/collaborations",
    description:
      "Discover our robust placement programs, connecting students with top industry partners for rewarding careers.",
  },
  {
    name: "Study at PSU",
    description:
      "Explore our schools driving the blue-collar skills revolution—from Mines & Shipping to Textiles & Robotics, all designed to create career-ready graduates.",
    subLinks: [
      {
        name: "School of Mines & Shipping",
        path: "/study/mines-shipping",
        description:
          "Cutting-edge training in mining operations and maritime logistics with advanced labs and fieldwork.",
        image:
          "https://images.unsplash.com/photo-1504384308101-f5691483d42f?auto=format&fit=crop&w=700",
      },
      {
        name: "School of Green Jobs",
        path: "/study/green-jobs",
        description:
          "Preparing future leaders for green industries through sustainable technology training.",
        image:
          "https://images.unsplash.com/photo-1500534625695-0a6b3f5190ad?auto=format&fit=crop&w=700",
      },
      {
        name: "School of Semiconductors & Robotics",
        path: "/study/semiconductors-robotics",
        description:
          "Hands-on programs in semiconductors, robotics, and automation technologies for the new economy.",
        image:
          "https://images.unsplash.com/photo-1517435126707-941ebe6640a6?auto=format&fit=crop&w=700",
      },
      {
        name: "School of Construction Tech.",
        path: "/study/construction-tech",
        description:
          "Smart construction methods and technology, enabling efficient, sustainable building projects.",
        image:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4ffa2?auto=format&fit=crop&w=700",
      },
      {
        name: "School of Textiles & Apparals",
        path: "/study/textiles-apparals",
        description:
          "Innovating textile and apparel education with a focus on design, technology, and sustainability.",
        image:
          "https://images.unsplash.com/photo-1512436996995-bb3cf3b989b2?auto=format&fit=crop&w=700",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact-us",
    description:
      "Get in touch with us. We're here to help you on your skilling journey.",
  },
];

const secondaryLinks = [
  {
    name: "ERP",
    path: "/campus-login",
    icon: FaSignInAlt,
  },
  {
    name: "LMS",
    path: "/aspire",
    icon: FaStar,
  },
  {
    name: "Placements",
    path: "/awarding-body",
    icon: FaAward,
  },
  {
    name: "Alumni Portal",
    path: "/wise",
    icon: FaBrain,
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredSubLink, setHoveredSubLink] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const { scrollHeight, clientHeight } = navRef.current;
      setIsScrollable(scrollHeight > clientHeight);
    }
  }, [openDropdown]);

  const isActive = (path?: string) => !!path && location.pathname === path;

  const handleNavMouseEnter = (name: string) => {
    if (navLinks.find((link) => link.name === name)?.subLinks) {
      setOpenDropdown(name);
    }
  };

  const handleDropdownMouseLeave = () => {
    setOpenDropdown(null);
  };

  const announcementTexts = [
    "Call +91 9874875876 for inquiries   ",
    "Admission open for 2024 batch   ",
    "Upcoming event on August 15th   ",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-glow">
      <div
        className="bg-red-600 text-white text-sm py-1 px-6 font-medium flex items-center overflow-hidden whitespace-nowrap"
        role="status"
        aria-live="polite"
      >
        <div className="flex-shrink-0 pr-4">Announcements</div>
        <div className="flex-1">
          <Marquee pauseOnHover direction="left" speed={50}>
            {announcementTexts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </Marquee>
        </div>
      </div>

      <div
        className="flex items-center justify-between py-0 px-6 border-b transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.6)" : "#000",
          borderColor: isScrolled ? "#e5e7eb" : "#1f2937",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Logo */}
        <div className="flex items-center transition-all duration-300">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1755503945/Pantiss_School__10_-removebg-preview_pkpj9w.png"
            alt="Pantiss Skill University Logo"
            className={`w-auto drop-shadow-lg animate-pulse-logo ${
              isScrolled ? "h-16" : "h-24"
            } transition-all duration-300`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex space-x-6"
          role="menubar"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const hasSubmenu = Boolean(link.subLinks && link.subLinks.length);
            const isOpen = openDropdown === link.name;
            const hasActiveChild =
              link.subLinks?.some((sl) => isActive(sl.path)) || false;

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleNavMouseEnter(link.name)}
              >
                {hasSubmenu ? (
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    className={`relative flex items-center px-3 py-2 font-semibold rounded-md text-lg transition-colors duration-300
                      ${
                        isScrolled
                          ? hasActiveChild || isActive(link.path)
                            ? "text-green-600"
                            : "text-gray-50 hover:text-green-600"
                          : hasActiveChild || isActive(link.path)
                          ? "text-green-600"
                          : "text-gray-300 hover:text-green-600"
                      }`}
                  >
                    {link.name}
                    {(hasActiveChild || isOpen || isActive(link.path)) && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-600 rounded-sm" />
                    )}
                  </button>
                ) : (
                  <a
                    href={link.path}
                    className={`relative flex items-center px-3 py-2 font-semibold rounded-md text-lg transition-colors duration-300
                      ${
                        isScrolled
                          ? isActive(link.path)
                            ? "text-green-600"
                            : "text-gray-50 hover:text-green-600"
                          : isActive(link.path)
                          ? "text-green-600"
                          : "text-gray-300 hover:text-green-600"
                      }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-600 rounded-sm" />
                    )}
                  </a>
                )}

                {/* Dropdown */}
                {isOpen && hasSubmenu && (
                  <div
                    className={`fixed left-1/2 ${
                      isScrolled ? "top-20" : "top-40"
                    } -translate-x-1/2 w-[90vw] max-w-6xl backdrop-blur-lg rounded-xl shadow-lg border z-[110] flex h-[60vh]
                      ${
                        isScrolled
                          ? "bg-black/90 text-gray-100 border-gray-700"
                          : "bg-gradient-to-br from-black/80 to-black/80 text-gray-100 border-gray-700"
                      }`}
                    onMouseLeave={handleDropdownMouseLeave}
                    role="menu"
                    aria-label={`${link.name} submenu`}
                  >
                    <section
                      className={`w-1/3 p-6 space-y-4 flex flex-col justify-center border-r ${
                        isScrolled ? "border-gray-700" : "border-gray-600"
                      }`}
                    >
                      <h2
                        id={`submenu-${link.name}`}
                        className="text-3xl font-extrabold text-red-600 tracking-tight"
                      >
                        {link.name}
                      </h2>
                      <p className="text-lg">{link.description}</p>
                    </section>

                    <div
                      className={`${
                        link.name === "Programs"
                          ? "w-2/3 p-6 flex flex-col relative"
                          : "w-1/3 p-6 overflow-y-auto"
                      }`}
                    >
                      <nav
                        ref={navRef}
                        className="flex-1 overflow-y-auto"
                        aria-labelledby={`submenu-${link.name}`}
                      >
                        {link.subLinks!.map((sub) => {
                          const isSelected = isActive(sub.path);
                          const isHovered = hoveredSubLink === sub.name;
                          return (
                            <a
                              key={sub.name}
                              href={sub.path}
                              onMouseEnter={() => setHoveredSubLink(sub.name)}
                              className={`block px-4 py-2 mb-2 rounded-md cursor-pointer text-lg font-semibold transition-colors duration-200 
                                ${
                                  isScrolled
                                    ? isSelected
                                      ? "bg-green-600 text-white shadow-lg"
                                      : isHovered
                                      ? "bg-gray-700 text-gray-200"
                                      : "hover:bg-gray-700 hover:text-gray-300"
                                    : isSelected
                                    ? "bg-green-600 text-white shadow-lg"
                                    : isHovered
                                    ? "bg-green-600 text-white"
                                    : "hover:bg-gray-700 hover:text-white"
                                }`}
                              role="menuitem"
                              aria-current={isSelected ? "page" : undefined}
                            >
                              {sub.name}
                              {link.name === "Programs" && (
                                <div
                                  className={`text-sm italic ${
                                    isScrolled ? "text-gray-400" : "text-gray-300"
                                  }`}
                                >
                                  {sub.description}
                                </div>
                              )}
                            </a>
                          );
                        })}
                      </nav>
                      {link.name === "Programs" && isScrollable && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-gray-300 animate-bounce">
                          <FaChevronDown className="w-5 h-5" />
                          <span className="ml-2 text-sm font-medium">Scroll Down</span>
                        </div>
                      )}
                    </div>

                    {link.name !== "Programs" && (
                      <section
                        className={`w-1/3 p-6 flex flex-col items-center justify-center space-y-4 border-l ${
                          isScrolled ? "border-gray-700" : "border-gray-600"
                        }`}
                      >
                        {(() => {
                          const activeSub =
                            link.subLinks!.find(
                              (sl) => sl.name === hoveredSubLink
                            ) || link.subLinks![0];
                          return (
                            <>
                              <p
                                className={`text-center font-medium ${
                                  isScrolled ? "text-gray-300" : "text-gray-200"
                                }`}
                              >
                                {activeSub.description}
                              </p>
                              {activeSub.image && (
                                <img
                                  src={activeSub.image}
                                  alt={`${activeSub.name} preview`}
                                  className="rounded-lg w-full h-48 object-cover shadow-md"
                                  loading="lazy"
                                />
                              )}
                            </>
                          );
                        })()}
                      </section>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`${
            isScrolled
              ? "text-gray-50 hover:text-green-600"
              : "text-gray-300 hover:text-green-600"
          } lg:hidden focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => {
            setIsMenuOpen((v) => !v);
            if (isMenuOpen) setOpenDropdown(null);
          }}
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {!isScrolled && (
        <div className="bg-transparent border-b border-b-red-600 border-t border-t-green-600 text-white font-semibold text-base">
          {/* Desktop Secondary Navigation */}
          <nav
            className="hidden md:flex items-center justify-end space-x-6 py-2 px-6 whitespace-nowrap"
            aria-label="Secondary navigation"
          >
            {secondaryLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className="flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <IconComponent className="mr-2" /> {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Secondary Navigation */}
          <div className="md:hidden flex items-center justify-between py-2 px-6">
            <span className="text-sm font-medium">Quick Access</span>
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
              aria-label={isSecondaryMenuOpen ? "Close secondary menu" : "Open secondary menu"}
              aria-expanded={isSecondaryMenuOpen}
              onClick={() => setIsSecondaryMenuOpen(!isSecondaryMenuOpen)}
            >
              {isSecondaryMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Secondary Menu Dropdown */}
          {isSecondaryMenuOpen && (
            <nav
              className="md:hidden bg-red-700 border-t border-red-500 py-2 px-6"
              aria-label="Secondary navigation mobile"
            >
              <div className="grid grid-cols-2 gap-2">
                {secondaryLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className="flex items-center p-2 rounded hover:bg-red-600 transition-colors duration-200"
                      onClick={() => setIsSecondaryMenuOpen(false)}
                    >
                      <IconComponent className="mr-2 text-sm" />
                      <span className="text-sm">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          className={`lg:hidden fixed ${
            isScrolled ? "top-16" : "top-40"
          } inset-x-0 backdrop-blur-md border rounded-b-lg z-[110] p-6 overflow-auto max-h-[calc(100vh-6rem)] 
            ${
              isScrolled
                ? "bg-black/90 border-gray-700 text-gray-100"
                : "bg-black/90 border-green-600 text-green-600"
            }`}
          role="menu"
        >
          {navLinks.map((link) => (
            <div key={link.name} className="mb-6">
              {link.subLinks ? (
                <>
                  <button
                    className={`block w-full text-left font-semibold text-xl mb-3 ${
                      isScrolled ? "text-green-600" : "text-green-600"
                    }`}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name
                      )
                    }
                    aria-expanded={openDropdown === link.name}
                    aria-controls={`mobile-submenu-${link.name}`}
                  >
                    {link.name}
                  </button>
                  {openDropdown === link.name && (
                    <div
                      id={`mobile-submenu-${link.name}`}
                      className="pl-4 space-y-2"
                    >
                      {link.subLinks.map((sub) => {
                        const isSelected = isActive(sub.path);
                        return (
                          <a
                            key={sub.name}
                            href={sub.path}
                            className={`block px-4 py-2 rounded-md font-medium text-lg transition-colors duration-200 
                              ${
                                isScrolled
                                  ? isSelected
                                    ? "bg-green-600 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-gray-100"
                                  : isSelected
                                  ? "bg-green-600 text-white"
                                  : "text-green-600 hover:bg-green-600 hover:text-white"
                              }`}
                            onClick={() => setIsMenuOpen(false)}
                            aria-current={isSelected ? "page" : undefined}
                          >
                            {sub.name}
                            {link.name === "Programs" && (
                              <div
                                className={`text-sm italic ${
                                  isScrolled ? "text-gray-400" : "text-gray-300"
                                }`}
                              >
                                {sub.description}
                              </div>
                            )}
                          </a>
                        );
                      })}
                      {link.name !== "Programs" && (
                        <>
                          <p
                            className={`mt-4 italic text-sm max-w-md ${
                              isScrolled ? "text-gray-400" : "text-gray-300"
                            }`}
                          >
                            {link.subLinks.find(
                              (sl) => sl.name === hoveredSubLink
                            )?.description || link.subLinks[0].description}
                          </p>
                          {link.subLinks.find(
                            (sl) => sl.name === hoveredSubLink
                          )?.image || link.subLinks[0].image ? (
                            <img
                              src={
                                link.subLinks.find(
                                  (sl) => sl.name === hoveredSubLink
                                )?.image || link.subLinks[0].image
                              }
                              alt="Menu preview"
                              className="mt-2 rounded-md object-cover w-full h-32"
                            />
                          ) : null}
                        </>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.path}
                  className={`block px-4 py-3 rounded-md font-semibold text-xl ${
                    isScrolled
                      ? "text-green-600 hover:bg-gray-700 hover:text-gray-100"
                      : "text-green-600 hover:bg-green-600 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;