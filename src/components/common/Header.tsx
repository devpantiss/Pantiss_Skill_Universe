// Header.tsx — Ultra Enterprise Version (Performance Optimized)

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  FaBars,
  FaStar,
  FaAward,
  FaBrain,
  FaGraduationCap,
  FaIndustry,
  FaTools,
  FaUserCog,
  FaTimes,
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
  { name: "ERP", path: "https://erp-xi-ten.vercel.app/" },
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

const isExternalPath = (path: string) => /^https?:\/\//.test(path);

const normalizePath = (path: string) => {
  const normalized = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return normalized || "/";
};

const isInternalRoute = (path?: string) =>
  !!path && path !== "#" && !isExternalPath(path);

const isRouteMatch = (currentPath: string, targetPath?: string) => {
  if (!isInternalRoute(targetPath)) return false;

  const current = normalizePath(currentPath);
  const target = normalizePath(targetPath!);

  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
};

const subLinksMatchRoute = (subLinks: NavSubLink[] = [], currentPath: string): boolean =>
  subLinks.some((subLink) =>
    isRouteMatch(currentPath, subLink.path) ||
    subLinksMatchRoute(subLink.children, currentPath)
  );

const isNavLinkActive = (link: NavLink, currentPath: string) =>
  isRouteMatch(currentPath, link.path) ||
  subLinksMatchRoute(link.subLinks, currentPath);

/* ================= COMPONENT ================= */

const Header: React.FC = React.memo(() => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  /* ================= ACTIVE UNDERLINE ================= */

  useEffect(() => {
    if (!navRef.current || !underlineRef.current) return;

    const activeBtn = navRef.current.querySelector(
      '[data-active-marker="true"]'
    ) as HTMLElement | null;

    if (activeBtn) {
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeBtn.getBoundingClientRect();

      underlineRef.current.style.width = `${activeRect.width}px`;
      underlineRef.current.style.left = `${activeRect.left - navRect.left}px`;
      underlineRef.current.style.opacity = "1";
    } else {
      underlineRef.current.style.width = "0px";
      underlineRef.current.style.opacity = "0";
    }
  }, [location.pathname, isScrolled]);

  const toggleDropdown = useCallback((name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  }, []);

  const handleNavClick = useCallback((item: NavSubLink) => {
    if (isComingSoon(item.name)) return;

    if (shouldOpenNewTab(item.name)) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else if (isExternalPath(item.path)) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.path);
    }
  }, [navigate]);

  const announcementTexts = [
    "Call +91 9874875876 for inquiries",
    "Admission open for 2024 batch",
    "Upcoming event on August 15th",
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50">

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
              isExternalPath(item.path) ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded px-3 py-1 transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="rounded px-3 py-1 transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {item.name}
                </Link>
              )
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

          <Link
            to="/"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            aria-label="Pantiss Skill Universe home"
          >
            <img
              src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/PANTISS_SKILL_UNIVERSE-removebg-preview_jqzd3y.png"
              alt="Pantiss Skill Universe"
              className={`transition-all ${isScrolled ? "h-16" : "h-24"}`}
              width={220}
              height={96}
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav ref={navRef} className="hidden lg:flex items-center gap-10 relative">

            {/* Animated underline */}
            <div
              ref={underlineRef}
              className="absolute bottom-0 h-[2px] bg-green-400 opacity-0 transition-all duration-300"
            />

            {navLinks.map(link => {
              const isOpen = openDropdown === link.name;
              const hasSub = !!link.subLinks;
              const isActive = isNavLinkActive(link, location.pathname);

              return (
                <div key={link.name} className="relative">

                  {hasSub ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => toggleDropdown(link.name)}
                      data-active-marker={isActive ? "true" : undefined}
                      className={`py-6 font-semibold transition hover:text-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${isActive ? "text-green-400" : "text-gray-200"
                        }`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      data-path={link.path}
                      data-active-marker={isActive ? "true" : undefined}
                      to={link.path!}
                      className={`block py-6 font-semibold transition hover:text-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${isActive ? "text-green-400" : "text-gray-200"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}

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
                            <Link
                              key={program.name}
                              to={program.path}
                              className="
                                group p-6 rounded-xl border border-gray-700
                                hover:border-green-400 hover:bg-white/5
                                transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400
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
                            </Link>
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
                                      type="button"
                                      onClick={() => handleNavClick(child)}
                                      disabled={comingSoon}
                                      className={`
                                        w-full text-left px-3 py-2 rounded-lg
                                        flex justify-between items-center
                                        ${comingSoon
                                          ? "text-gray-500 cursor-not-allowed"
                                          : "text-gray-200 hover:bg-white/5 hover:text-green-400"}
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400
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

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-3 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-96px)] overflow-y-auto border-b border-gray-800 bg-black px-6 py-4 text-white shadow-2xl lg:hidden">
          <nav aria-label="Mobile navigation" className="space-y-2">
            {navLinks.map((link) => {
              const hasSub = !!link.subLinks;
              const isOpen = openDropdown === link.name;
              const isActive = isNavLinkActive(link, location.pathname);

              if (!hasSub) {
                return (
                  <Link
                    key={link.name}
                    to={link.path!}
                    className={`block rounded-lg px-3 py-3 font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${isActive ? "bg-white/10 text-green-400" : ""
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <div key={link.name}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${isActive ? "bg-white/10 text-green-400" : ""
                      }`}
                    onClick={() => toggleDropdown(link.name)}
                    aria-expanded={isOpen}
                  >
                    {link.name}
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="mt-2 space-y-2 rounded-lg border border-white/10 bg-white/5 p-3">
                      {(link.name === "Programs" ? programData : link.subLinks!).map((item) => (
                        item.children ? (
                          <div key={item.name} className="space-y-1">
                            <p className="px-2 py-1 text-xs font-bold uppercase tracking-widest text-green-400">
                              {item.name}
                            </p>
                            {item.children.map((child) => {
                              const comingSoon = isComingSoon(child.name);

                              return (
                                <button
                                  key={child.name}
                                  type="button"
                                  disabled={comingSoon}
                                  onClick={() => handleNavClick(child)}
                                  className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm text-gray-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                                >
                                  {child.name}
                                  {comingSoon && <span className="text-xs text-gray-400">Soon</span>}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block rounded-md px-2 py-2 text-sm text-gray-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {/* ================= SECONDARY ================= */}

      {!isScrolled && (
        <div className="border-y border-red-600 bg-black text-white">
          <div className="max-w-7xl mx-auto flex justify-end gap-6 px-6 py-2">
            {secondaryLinks.map(link => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                >
                  <Icon /> {link.name}
                </Link>
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
