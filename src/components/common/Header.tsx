import BrandLogo from "./BrandLogo";
// Header.tsx — Ultra Enterprise Version (Performance Optimized)

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useReducedMotion } from "framer-motion";
import {
  FaBars,
  FaChevronDown,
  FaArrowRight,
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

function ProgrammeMenu({ compact = false, onSelect }: { compact?: boolean; onSelect: () => void }) {
  const viewAll = programData[0];
  return <div className={compact ? 'header-programme-menu header-programme-menu-mobile' : 'header-programme-menu'}>
    <div className="header-dropdown-heading"><div><span className="header-dropdown-eyebrow">Find your pathway</span><h3>Programmes at Pantiss</h3></div>
      <Link to={viewAll.path} onClick={onSelect} className="header-dropdown-view-all">{viewAll.name}<FaArrowRight aria-hidden="true" /></Link>
    </div>
    <div className="header-programme-grid">{programData.slice(1).map(program => <Link key={program.path} to={program.path} onClick={onSelect} className="header-programme-option">
      <span className="header-programme-icon" aria-hidden="true">{program.icon}</span>
      <span className="header-programme-copy"><strong>{program.name}</strong><span>{program.description}</span></span>
      <FaArrowRight className="header-programme-arrow" aria-hidden="true" />
    </Link>)}</div>
    <div className="header-dropdown-footer"><span>Not sure where to start?</span><Link to="/contact-us" onClick={onSelect}>Speak to our team<FaArrowRight aria-hidden="true" /></Link></div>
  </div>;
}

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
          { name: "Skill on Wheels", path: "https://skill-on-wheels.vercel.app/" },
          // { name: "Skill on Wheels", path: "/futuristic-skill-on-wheels" },
          { name: "Global Placements", path: "https://blue-global-force.vercel.app/" },
        ],
        path: ""
      },
    ],
  },
  { name: "Programs", subLinks: programData },
  { name: "Our Projects", path: "/our-projects" },
  { name: "Placements", path: "/placements" },
  // { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact-us" },
];

/* ================= SECONDARY ================= */

const secondaryLinks = [
  { name: "Counselling Portal", path: "https://pantiss-counselling.vercel.app/", icon: FaStar },
  { name: "LMS", path: "https://lms-seven-peach.vercel.app/login", icon: FaStar },
  { name: "Job Search Portal", path: "https://job-search-client-ten.vercel.app/", icon: FaAward },
  { name: "GovPrep Portal", path: "/govprep_portal", icon: FaStar, comingSoon: true },
  { name: "Alumni Portal", path: "https://alumni-portal-rust.vercel.app/", icon: FaBrain },
];

const topRightMenu = [
  { name: "Careers", path: "/careers" },
  { name: "ERP", path: "https://pantiss.cloud" },
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
  const shouldReduceMotion = useReducedMotion();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [comingSoonNotice, setComingSoonNotice] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement | null>(null);
  const portalTriggerRef = useRef<HTMLButtonElement>(null);
  const portalPanelRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  // Reserve the expanded header height without moving content as it collapses on scroll.
  useEffect(() => {
    const header = headerRef.current;
    if (!header || isScrolled || mobileMenuOpen) return;
    const measure = () => document.documentElement.style.setProperty('--site-header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, [isScrolled, mobileMenuOpen]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const measure = () => header.style.setProperty('--header-dropdown-top', `${Math.ceil(header.getBoundingClientRect().bottom)}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

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
    setPortalsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (portalPanelRef.current?.contains(document.activeElement)) portalTriggerRef.current?.focus();
        if (document.activeElement?.closest("[data-header-dropdown]")) dropdownTriggerRef.current?.focus();
        setPortalsOpen(false);
        setOpenDropdown(null);
        setMobileMenuOpen(false);
        setComingSoonNotice(null);
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

  useEffect(() => {
    if (!comingSoonNotice) return;

    const timeoutId = window.setTimeout(() => setComingSoonNotice(null), 3500);
    return () => window.clearTimeout(timeoutId);
  }, [comingSoonNotice]);

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
    setOpenDropdown(null);
    setMobileMenuOpen(false);

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
    "Explore industry-led skill programmes",
    "Learn. Upskill. Empower.",
  ];

  return (
    <header ref={headerRef} className="legacy-header fixed top-0 left-0 w-full z-50">

      {/* ================= TOP BAR ================= */}

      <div className="w-full bg-red-600 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1">

          <Marquee play={!shouldReduceMotion} pauseOnHover speed={50} gradient={false}>
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
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            aria-label="Pantiss Skill Universe home"
          >
            <BrandLogo
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
              className="absolute bottom-0 h-[2px] bg-red-400 opacity-0 transition-all duration-300"
            />

            {navLinks.map(link => {
              const isOpen = openDropdown === link.name;
              const hasSub = !!link.subLinks;
              const isActive = isNavLinkActive(link, location.pathname);

              return (
                <div key={link.name} className="relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null); }}>

                  {hasSub ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={link.name === "Programs" ? "header-programmes-menu" : "header-study-menu"}
                      onClick={event => { dropdownTriggerRef.current = event.currentTarget; toggleDropdown(link.name); }}
                      data-active-marker={isActive ? "true" : undefined}
                      className={`py-6 font-semibold transition hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${isActive ? "text-red-400" : "text-gray-200"
                        }`}
                    >
                      {link.name}<FaChevronDown className="header-dropdown-chevron" aria-hidden="true" />
                    </button>
                  ) : isExternalPath(link.path!) ? (
                    <a
                      data-path={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.name} (opens in a new tab)`}
                      className="block py-6 font-semibold text-gray-200 transition hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      data-path={link.path}
                      data-active-marker={isActive ? "true" : undefined}
                      to={link.path!}
                      className={`block py-6 font-semibold transition hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${isActive ? "text-red-400" : "text-gray-200"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {isOpen && link.name === "Programs" && (
                    <div id="header-programmes-menu" data-header-dropdown className="header-mega-panel header-mega-programmes"><ProgrammeMenu onSelect={() => setOpenDropdown(null)} /></div>
                  )}
                  {isOpen && link.name === "Study at PSU" && (
                    <div id="header-study-menu" data-header-dropdown className="header-mega-panel">
                      <div className="header-dropdown-heading"><div><span className="header-dropdown-eyebrow">Explore our universe</span><h3>Study at PSU</h3></div><span className="header-dropdown-intro">Schools, campuses & opportunities</span></div>
                      <div className="header-study-grid">{link.subLinks!.map(section => <section key={section.name} className="header-study-group">
                        <h4>{section.name}</h4><ul>{section.children?.map(child => <li key={child.name}><button type="button" onClick={() => handleNavClick(child)} disabled={isComingSoon(child.name)} className="header-study-option">
                          <span>{child.name}</span>{isComingSoon(child.name) ? <span className="header-unavailable-badge">Soon</span> : <FaArrowRight aria-hidden="true" />}
                        </button></li>)}</ul>
                      </section>)}</div>
                    </div>
                  )}

                </div>
              );
            })}

          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-3 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 lg:hidden"
            onClick={() => { setPortalsOpen(false); setMobileMenuOpen((open) => !open); }}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-navigation-panel overflow-y-auto border-b border-gray-800 bg-black px-6 py-4 text-white shadow-2xl lg:hidden">
          <nav aria-label="Mobile navigation" className="space-y-2">
            {navLinks.map((link) => {
              const hasSub = !!link.subLinks;
              const isOpen = openDropdown === link.name;
              const isActive = isNavLinkActive(link, location.pathname);

              if (!hasSub) {
                return isExternalPath(link.path!) ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.name} (opens in a new tab)`}
                    className="block rounded-lg px-3 py-3 font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path!}
                    className={`block rounded-lg px-3 py-3 font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${isActive ? "bg-white/10 text-red-400" : ""
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
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${isActive ? "bg-white/10 text-red-400" : ""
                      }`}
                    onClick={() => toggleDropdown(link.name)}
                    aria-expanded={isOpen}
                  >
                    {link.name}
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (link.name === "Programs" ? <ProgrammeMenu compact onSelect={() => { setOpenDropdown(null); setMobileMenuOpen(false); }} /> : (
                    <div className="header-mobile-study">
                      {link.subLinks!.map((item) => (
                        item.children ? (
                          <div key={item.name} className="space-y-1">
                            <p className="px-2 py-1 text-xs font-bold uppercase tracking-widest text-red-400">
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
                                  className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm text-gray-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
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
                            className="block rounded-md px-2 py-2 text-sm text-gray-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {/* Keep the desktop portal row; disclose a complete touch-friendly grid on mobile. */}
      {!isScrolled && (
        <div className="portal-navigation" data-open={portalsOpen}>
          <div className="portal-navigation-inner">
            <button ref={portalTriggerRef} type="button" className="portal-navigation-toggle"
              aria-expanded={portalsOpen} aria-controls="header-portals"
              onClick={() => { setMobileMenuOpen(false); setOpenDropdown(null); setPortalsOpen(open => !open); }}>
              <span>Quick access <strong>Portals</strong></span>
              <FaChevronDown aria-hidden="true" />
            </button>
            <nav ref={portalPanelRef} id="header-portals" aria-label="Portals" className="portal-navigation-links">
              {secondaryLinks.map(link => {
                const Icon = link.icon;
                const content = <><Icon aria-hidden="true" /><span>{link.name}</span></>;
                return link.comingSoon ? (
                  <button key={link.name} type="button" onClick={() => setComingSoonNotice(link.name)} aria-label={`${link.name} — coming soon`}>{content}<span className="portal-soon">Soon</span></button>
                ) : isExternalPath(link.path) ? (
                  <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" aria-label={`${link.name} (opens in a new tab)`}>{content}</a>
                ) : <Link key={link.name} to={link.path}>{content}</Link>;
              })}
            </nav>
          </div>
        </div>
      )}

      {comingSoonNotice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-4 z-[60] flex max-w-sm items-center gap-3 rounded-xl border border-white/15 bg-gray-950/95 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:right-6"
        >
          <FaStar className="shrink-0 text-amber-400" aria-hidden="true" />
          <p className="text-sm">
            <span className="font-semibold">{comingSoonNotice}</span> is coming soon.
          </p>
          <button
            type="button"
            onClick={() => setComingSoonNotice(null)}
            className="ml-1 rounded-md p-1 text-gray-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            aria-label="Dismiss coming soon notice"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>
      )}

    </header>
  );
});

Header.displayName = "Header";

export default Header;
