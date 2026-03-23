// Header.tsx — Ultra Enterprise Version (Performance Optimized)

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  FaStar,
  FaAward,
  FaBrain,
  FaGraduationCap,
  FaIndustry,
  FaTools,
  FaUserCog,
} from "react-icons/fa";

/* ================= TYPES ================= */

interface NavSubLink {
  name: string;
  path: string;
  children?: NavSubLink[];
  description?: string;
  icon?: React.ReactNode;
}

interface NavLink {
  name: string;
  path?: string;
  subLinks?: NavSubLink[];
}

/* ================= PROGRAM ICON DATA ================= */

const programData: NavSubLink[] = [
  {
    name: "View All",
    path: "/our-programmes",
    description: "Browse all training programs",
    icon: <FaGraduationCap />,
  },
  {
    name: "Diploma/Polytechnic Programs",
    path: "/our-programmes/diploma-programs",
    description: "Industry-aligned diploma education",
    icon: <FaIndustry />,
  },
  {
    name: "ITI",
    path: "/our-programmes/iti-program",
    description: "Certified ITI skill training",
    icon: <FaTools />,
  },
  {
    name: "Industry Aligned",
    path: "/our-programmes/industry-alligned-certification",
    description: "Programs designed with industry partners",
    icon: <FaUserCog />,
  },
  {
    name: "Workmen Upskilling & Reskilling Programs",
    path: "/our-programmes/upskilling-and-reskilling-program",
    description: "Upgrade workforce capabilities",
    icon: <FaAward />,
  },
];

/* ================= NAV DATA ================= */

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Study at PSU",
    subLinks: [
      {
        name: "Schools",
        children: [
          { name: "Pantiss School for Mines", path: "https://psmsa.vercel.app/" },
          { name: "Pantiss School for Steel & Aluminium", path: "#" },
          { name: "Pantiss School for Power & Green Energy", path: "#" },
          { name: "Pantiss School for Shipping & Logistics", path: "#" },
          { name: "Pantiss School for Construction Tech & Infra Equipment", path: "#" },
          { name: "Pantiss School for Green Jobs", path: "#" },
        ],
        path: ""
      },
      {
        name: "Locations",
        children: [
          { name: "Pantiss Skill Resort, Anugul (For Mining)", path: "https://psmsa.vercel.app/" },
          { name: "Pantiss Skill Resort, Kalahandi (For Aviation)", path: "#" },
          { name: "Pantiss Skill Resort, Paradip (For Shipping & Logistics)", path: "#" },
          { name: "Pantiss Skill Resort, Jharsuguda (For Construction Tech & Infra Equipments)", path: "#" },
          { name: "Pantiss Skill Resort, Sukinda (For Power & Green Energy)", path: "#" },
          { name: "Pantiss Skill Resort, Joda (For Green Jobs)", path: "#" },
        ],
        path: ""
      },
      {
        name: "Flagship Program",
        children: [
          { name: "Skill on Wheels", path: "/futuristic-skill-on-wheels" },
          { name: "Global Placements", path: "https://blue-global-force.vercel.app/" },
        ],
        path: ""
      },
    ],
  },
  { name: "Programs", subLinks: programData },
  // { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact-us" },
];

/* ================= SECONDARY ================= */

const secondaryLinks = [
  { name: "Counselling Portal", path: "/counselling_portal", icon: FaStar },
  { name: "Study Portal", path: "/study_portal", icon: FaStar },
  { name: "GovPrep Portal", path: "/govprep_portal", icon: FaStar },
  { name: "Job Search Portal", path: "/job_search_portal", icon: FaAward },
  { name: "Alumni Portal", path: "/wise", icon: FaBrain },
];

const topRightMenu = [
  { name: "Careers", path: "/careers" },
  { name: "ERP", path: "https://erp-dusky-one.vercel.app/" },
  { name: "Resources", path: "/resources" },
];

/* ================= HELPERS ================= */

const isComingSoon = (name: string) =>
  ![
    "Pantiss School for Mines",
    "Pantiss Skill Resort, Anugul (For Mining)",
    "Global Placements",
    "Skill on Wheels",
  ].includes(name);

const shouldOpenNewTab = (name: string) =>
  [
    "Pantiss School for Mines",
    "Pantiss Skill Resort, Anugul (For Mining)",
    "Global Placements",
  ].includes(name);

/* ================= COMPONENT ================= */

const Header: React.FC = React.memo(() => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  /* ================= SCROLL (throttled with rAF) ================= */

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= ACTIVE UNDERLINE ================= */

  useEffect(() => {
    if (!navRef.current || !underlineRef.current) return;

    const activeBtn = navRef.current.querySelector(
      `[data-path="${location.pathname}"]`
    ) as HTMLElement;

    if (activeBtn) {
      underlineRef.current.style.width = `${activeBtn.offsetWidth}px`;
      underlineRef.current.style.left = `${activeBtn.offsetLeft}px`;
    }
  }, [location.pathname]);

  const toggleDropdown = useCallback((name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  }, []);

  const handleNavClick = useCallback((item: NavSubLink) => {
    if (isComingSoon(item.name)) return;

    if (shouldOpenNewTab(item.name)) {
      window.open(item.path, "_blank");
    } else {
      window.location.href = item.path;
    }
  }, []);

  const announcementTexts = [
    "Call +91 9874875876 for inquiries",
    "Admission open for 2024 batch",
    "Upcoming event on August 15th",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ================= TOP BAR ================= */}

      <div className="w-full bg-red-600 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1">

          <Marquee pauseOnHover speed={50} gradient={false}>
            {announcementTexts.map((t, i) => (
              <span key={i} className="mx-6">{t}</span>
            ))}
          </Marquee>

          <div className="hidden sm:flex gap-4">
            {topRightMenu.map(item => (
              <button
                key={item.name}
                className="px-3 py-1 hover:bg-red-700 rounded"
                onClick={() => {
                  if (item.name === "ERP") window.open(item.path, "_blank");
                  else window.location.href = item.path;
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}

      <div
        className="bg-black border-b border-gray-800"
        style={{ backgroundColor: isScrolled ? "rgba(0,0,0,0.9)" : "#000" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          <img
            src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/PANTISS_SKILL_UNIVERSE-removebg-preview_jqzd3y.png"
            alt="logo"
            className={`transition-all ${isScrolled ? "h-16" : "h-24"}`}
            loading="eager"
            decoding="async"
          />

          <nav ref={navRef} className="hidden lg:flex items-center gap-10 relative">

            {/* Animated underline */}
            <div
              ref={underlineRef}
              className="absolute bottom-0 h-[2px] bg-green-400 transition-all duration-300"
            />

            {navLinks.map(link => {
              const isOpen = openDropdown === link.name;
              const hasSub = !!link.subLinks;

              return (
                <div key={link.name} className="relative">

                  <button
                    data-path={link.path}
                    onClick={() => hasSub ? toggleDropdown(link.name) : window.location.href = link.path!}
                    className="text-gray-200 font-semibold hover:text-green-400 transition py-6"
                  >
                    {link.name}
                  </button>

                  {/* ================= PROGRAMS MEGA ================= */}

                  {isOpen && link.name === "Programs" && (
                    <div className="
                      fixed left-0 top-[170px] w-full
                      bg-black/90 backdrop-blur-xl border-t border-gray-700
                      shadow-2xl animate-[fadeIn_.25s_ease]
                    ">
                      <div className="max-w-7xl mx-auto px-12 py-12">

                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-8">
                          Programs
                        </h3>

                        <div className="grid grid-cols-3 gap-6">

                          {programData.map(program => (
                            <button
                              key={program.name}
                              onClick={() => window.location.href = program.path}
                              className="
                                group p-6 rounded-xl border border-gray-700
                                hover:border-green-400 hover:bg-white/5
                                transition-all text-left
                              "
                            >
                              <div className="text-green-400 text-xl mb-3">
                                {program.icon}
                              </div>

                              <div className="text-sm font-semibold text-gray-200 group-hover:text-green-400">
                                {program.name}
                              </div>

                              <div className="text-xs text-gray-400 mt-2">
                                {program.description}
                              </div>
                            </button>
                          ))}

                        </div>

                      </div>
                    </div>
                  )}

                  {/* ================= STUDY PSU ================= */}

                  {isOpen && link.name === "Study at PSU" && (
                    <div className="
                      fixed left-0 top-[170px] w-full
                      bg-black/90 backdrop-blur-xl border-t border-gray-700
                      shadow-2xl animate-[fadeIn_.25s_ease]
                    ">
                      <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-3 gap-16">

                        {link.subLinks!.map(section => (
                          <div key={section.name}>
                            <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-6">
                              {section.name}
                            </h3>

                            <ul className="space-y-3">
                              {section.children?.map(child => {
                                const comingSoon = isComingSoon(child.name);

                                return (
                                  <li key={child.name}>
                                    <button
                                      onClick={() => handleNavClick(child)}
                                      disabled={comingSoon}
                                      className={`
                                        w-full text-left px-3 py-2 rounded-lg
                                        flex justify-between items-center
                                        ${comingSoon
                                          ? "text-gray-500 cursor-not-allowed"
                                          : "text-gray-200 hover:bg-white/5 hover:text-green-400"}
                                      `}
                                    >
                                      {child.name}

                                      {comingSoon && (
                                        <span className="
                                          text-xs px-2 py-1 rounded-full text-center
                                          bg-gray-700 text-white animate-pulse
                                        ">
                                          Coming Soon
                                        </span>
                                      )}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}

                      </div>
                    </div>
                  )}

                </div>
              );
            })}

          </nav>

        </div>
      </div>

      {/* ================= SECONDARY ================= */}

      {!isScrolled && (
        <div className="border-y border-red-600 bg-black text-white">
          <div className="max-w-7xl mx-auto flex justify-end gap-6 px-6 py-2">
            {secondaryLinks.map(link => {
              const Icon = link.icon;
              return (
                <button
                  key={link.name}
                  onClick={() => window.location.href = link.path}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Icon /> {link.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

    </header>
  );
});

Header.displayName = "Header";

export default Header;
