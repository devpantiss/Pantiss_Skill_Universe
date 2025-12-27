// Header.tsx (fixed)
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
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
  children?: NavSubLink[];
}

interface NavLink {
  name: string;
  path?: string;
  subLinks?: NavSubLink[];
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Study at PSU",
    subLinks: [
      {
        name: "Schools",
        children: [
          { name: "Pantiss School for Mines", path: "https://pantiss-school-for-mines-steel-alum.vercel.app" },
          { name: "Pantiss School for Steel & Aluminium", path: "https://pantiss-school-for-mines-steel-alum.vercel.app" },
          { name: "Pantiss School for Power & Green Energy", path: "https://pantiss-school-for-power-green-energy.vercel.app" },
          { name: "Pantiss School for Shipping & Logistics", path: "https://pantiss-school-for-shipping-logistics.vercel.app" },
          // { name: "Pantiss School for Electric Vehicle", path: "https://pantiss-school-for-ev.vercel.app" },
          { name: "Pantiss School for Construction Tech & Infra Equipment", path: "https://pantiss-school-for-construction-infra.vercel.app" },
          { name: "Pantiss School for Green Jobs", path: "https://pantiss-school-for-wash-facility.vercel.app" },
        ],
        path: ""
      },
      {
        name: "Locations",
        children: [
          { name: "Pantiss Skill Resort, Anugul (For Mining)", path: "https://pantiss-coe-mining.vercel.app" },
          { name: "Pantiss Skill Resort, Kalahandi (For Aviation)", path: "https://pantiss-coe-steel-aluminium.vercel.app" },
          { name: "Pantiss Skill Resort, Paradip (For Shipping & Logistics)", path: "https://pantiss-coe-energy.vercel.app" },
          { name: "Pantiss Skill Resort, Jharsuguda (For Construction Tech & Infra Equipments)", path: "https://pantiss-coe-shipping.vercel.app" },
          { name: "Pantiss Skill Resort, Sukinda (For Power & Green Energy)", path: "https://pantiss-coe-ev.vercel.app" },
          { name: "Pantiss Skill Resort, Joda (For Green Jobs)", path: "https://pantiss-coe-infrastructure.vercel.app" },
        ],
        path: ""
      },
      {
        name: "Global",
        children: [
          { name: "Botswana Mining Institute (Coming Soon!)", path: "#" },
          { name: "Namibia Resource Academy (Coming Soon!)", path: "#" },
          { name: "Zambia Mining University (Coming Soon!)", path: "#" },
        ],
        path: ""
      },
    ],
  },
  {
    name: "Programs",
    subLinks: [
      { name: "View All", path: "/our-programmes" },
      { name: "Diploma/Polytechnic Programs", path: "/our-programmes/diploma-programs" },
      { name: "ITI", path: "/our-programmes/iti-program" },
      { name: "Industry Aligned", path: "/our-programmes/industry-alligned-certification" },
      { name: "Workmen Upskilling & Reskilling Programs", path: "/our-programmes/upskilling-and-reskilling-program" },
      // { name: "", path: "/our-programmes/industry-alligned-certification" },
    ],
  },
  { name: "Contact", path: "/contact-us" },
];

const secondaryLinks = [
  { name: "Counselling Portal", path: "/counselling_portal", icon: FaStar },
  { name: "Study Portal", path: "/study_portal", icon: FaStar },
  { name: "GovPrep Portal", path: "/govprep_portal", icon: FaStar },
  { name: "Job Search Portal", path: "/job_search_portal", icon: FaAward },
  { name: "Alumni Portal", path: "/wise", icon: FaBrain },
];

const topRightMenu = [
  {
    name: "ERP",
    children: [
      { name: "Faculty", path: "/campus-login/faculty" },
      { name: "Admin Staff", path: "/campus-login/admin-staff" },
      { name: "General Staff", path: "/campus-login/general-staff" },
    ],
  },
  { name: "Careers", path: "/careers" },
  { name: "Blogs", path: "/blogs" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // const [openSecondaryDropdown, setOpenSecondaryDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // top-right mini menu state (for ERP dropdown)
  const [openTopMenu, setOpenTopMenu] = useState<string | null>(null);

  // MOBILE accordion state (moved out of loop to respect Rules of Hooks)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path?: string) => !!path && location.pathname === path;

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const announcementTexts = [
    "Call +91 9874875876 for inquiries",
    "Admission open for 2024 batch",
    "Upcoming event on August 15th",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-glow">
      {/* Top red bar: left = Announcements (Marquee), right = mini menu (ERP/Careers/Blogs) */}
      <div className="w-full bg-red-600 text-white text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4 py-1">
          {/* Left: Announcements Marquee */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex-shrink-0 font-semibold pr-2">Announcements</div>
            <div className="flex-1 min-w-0">
              <Marquee pauseOnHover direction="left" speed={50} gradient={false}>
                {announcementTexts.map((text, i) => (
                  <span key={i} className="mx-6 whitespace-nowrap">
                    {text}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>

          {/* Right: mini menu */}
          <div className="hidden sm:flex items-center gap-4">
            {topRightMenu.map((item) => {
              const hasChildren = !!item.children?.length;
              const isOpen = openTopMenu === item.name;
              return (
                <div key={item.name} className="relative">
                  <button
                    className="px-3 py-1 rounded-md hover:bg-red-700 transition flex items-center gap-2"
                    onClick={() =>
                      hasChildren ? setOpenTopMenu(isOpen ? null : item.name) : (window.location.href = item.path!)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`top-menu-${item.name}`}
                  >
                    <span className="text-sm font-semibold">{item.name}</span>
                    {hasChildren && <FaChevronDown className="text-xs mt-0.5" />}
                  </button>

                  {hasChildren && isOpen && (
                    <div
                      id={`top-menu-${item.name}`}
                      className="absolute right-0 mt-2 w-48 bg-black/95 border border-gray-700 rounded-md shadow-lg z-50"
                    >
                      {item.children!.map((c) => (
                        <a
                          key={c.name}
                          href={c.path}
                          className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-800"
                        >
                          {c.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: a compact icon to open top menu items inside the main mobile menu */}
          <div className="sm:hidden">
            <button
              className="px-2 py-1 rounded-md hover:bg-red-700"
              onClick={() => {
                // toggle mobile menu (reuse isMenuOpen)
                setIsMenuOpen((v) => !v);
              }}
              aria-label="Open mobile menu"
            >
              {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header (kept as-is in layout and behavior) */}
      <div
        className="flex items-center justify-between py-0 px-6 border-b transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(0,0,0,0.6)" : "#000",
        }}
      >
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761928459/PANTISS_SKILL_UNIVERSE-removebg-preview_jqzd3y.png"
          alt="Logo"
          className={`w-auto ${isScrolled ? "h-16" : "h-24"} transition-all duration-300`}
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => {
            const hasSubmenu = !!link.subLinks?.length;
            const isOpen = openDropdown === link.name;

            return (
              <div key={link.name} className="relative">
                {hasSubmenu ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`relative flex items-center px-3 py-2 font-semibold text-lg transition-colors ${
                      isActive(link.path)
                        ? "text-green-500"
                        : "text-gray-200 hover:text-green-600"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.path}
                    className={`flex items-center px-3 py-2 font-semibold text-lg transition-colors ${
                      isActive(link.path)
                        ? "text-green-500"
                        : "text-gray-200 hover:text-green-600"
                    }`}
                  >
                    {link.name}
                  </a>
                )}

                {/* Dropdown (Fixed position) */}
                {isOpen && hasSubmenu && (
                  <div className="fixed left-0 top-[170px] w-screen bg-black/95 text-gray-100 border-t border-gray-700 shadow-xl p-10 z-40 animate-fadeInDown">
                    {link.name === "Programs" ? (
                      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {link.subLinks!.map((program) => (
                          <a
                            key={program.name}
                            href={program.path}
                            className="block px-4 py-3 text-lg border border-gray-700 rounded-md hover:text-green-400 hover:border-green-400 transition"
                          >
                            {program.name}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-center gap-16">
                        {link.subLinks!.map((sub) => (
                          <div key={sub.name} className="w-1/3">
                            <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1 text-gray-300 uppercase">
                              {sub.name}
                            </h3>
                            <ul className="space-y-1">
                              {sub.children?.map((child) => (
                                <li key={child.name}>
                                  <a
                                    href={child.path}
                                    className="text-sm hover:text-green-400 transition-colors"
                                  >
                                    {child.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sub-header (the secondary bar) with requested options */}
      {!isScrolled && (
        <div className="bg-transparent border-y border-red-600 text-white font-semibold text-base">
          <nav className="hidden md:flex items-center justify-end space-x-6 py-2 px-6 relative">
            {secondaryLinks.map((link) => {
              const Icon = link.icon;
              // const isOpen = openSecondaryDropdown === link.name;

              return (
                <div key={link.name} className="relative secondary-dropdown">
                  <button
                    onClick={() => (window.location.href = link.path)
                    }
                    className="flex items-center hover:underline gap-2"
                  >
                    {Icon && <Icon className="mr-1" />} <span>{link.name}</span>
                  </button>
                </div>
              );
            })}
          </nav>
        </div>
      )}

      {/* MOBILE MENU (includes top-right items + nav + secondary links) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/98 text-white border-t border-gray-800">
          <div className="px-4 py-4">
            {/* Top-right items (ERP / Careers / Blogs) inside mobile menu */}
            <div className="flex flex-col gap-2 border-b border-gray-800 pb-3 mb-3">
              {topRightMenu.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = openTopMenu === item.name;
                return (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between py-2 font-semibold text-left"
                      onClick={() =>
                        hasChildren ? setOpenTopMenu(isOpen ? null : item.name) : (window.location.href = item.path!)
                      }
                    >
                      <span>{item.name}</span>
                      {hasChildren && <FaChevronDown className="text-xs" />}
                    </button>

                    {hasChildren && isOpen && (
                      <div className="pl-4 mt-1">
                        {item.children!.map((c) => (
                          <a key={c.name} href={c.path} className="block py-1 text-sm text-gray-300">
                            {c.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Main nav links */}
            <div className="space-y-2">
              {navLinks.map((link) => {
                const hasSubmenu = !!link.subLinks?.length;
                const isOpen = mobileAccordion === link.name;
                return (
                  <div key={link.name} className="border-b border-gray-800 pb-2">
                    <button
                      onClick={() =>
                        hasSubmenu
                          ? setMobileAccordion((prev) => (prev === link.name ? null : link.name))
                          : (window.location.href = link.path || "#")
                      }
                      className="w-full flex items-center justify-between py-2 text-left font-semibold"
                    >
                      <span>{link.name}</span>
                      {hasSubmenu && <FaChevronDown />}
                    </button>

                    {hasSubmenu && isOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.subLinks!.map((section) => (
                          <div key={section.name}>
                            <div className="text-sm font-semibold text-gray-300 mb-1">{section.name}</div>
                            <div className="pl-2">
                              {section.children?.map((child) => (
                                <a key={child.name} href={child.path} className="block py-1 text-sm text-gray-200">
                                  {child.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Secondary Links (mobile) */}
            <div className="mt-4 border-t border-gray-800 pt-3">
              {secondaryLinks.map((s) => (
                <a key={s.name} href={s.path} className="block py-2 text-lg font-medium text-gray-200">
                  <span className="inline-block mr-3 align-middle">{s.icon && React.createElement(s.icon)}</span>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;