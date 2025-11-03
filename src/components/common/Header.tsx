import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  FaSignInAlt,
  FaStar,
  FaAward,
  FaBrain,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Handshake, Notebook } from "lucide-react";

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
          { name: "Pantiss School for Electric Vehicle", path: "https://pantiss-school-for-ev.vercel.app" },
          { name: "Pantiss School for Construction Tech & Infra Equipment", path: "https://pantiss-school-for-construction-infra.vercel.app" },
          { name: "Pantiss School for Water, Sanitation & Facility Management", path: "https://pantiss-school-for-wash-facility.vercel.app" },
        ],
        path: ""
      },
      {
        name: "Locations",
        children: [
          { name: "Center of Excellence for Mining", path: "https://pantiss-coe-mining.vercel.app" },
          { name: "Center of Excellence for Steel & Aluminium", path: "https://pantiss-coe-steel-aluminium.vercel.app" },
          { name: "Center of Excellence for Energy", path: "https://pantiss-coe-energy.vercel.app" },
          { name: "Center of Excellence for Shipping", path: "https://pantiss-coe-shipping.vercel.app" },
          { name: "Center of Excellence for Electric Vehicle", path: "https://pantiss-coe-ev.vercel.app" },
          { name: "Center of Excellence for Infrastructure", path: "https://pantiss-coe-infrastructure.vercel.app" },
          { name: "Center of Excellence for WASH", path: "https://pantiss-coe-wash.vercel.app" },
        ],
        path: ""
      },
      {
        name: "Global",
        children: [
          { name: "Botswana Mining Institute", path: "#" },
          { name: "Namibia Resource Academy", path: "#" },
          { name: "Zambia Mining University", path: "#" },
        ],
        path: ""
      },
    ],
  },
  {
    name: "Campus Life",
    subLinks: [
      {
        name: "Campus Life",
        children: [
          { name: "Entrepreneurship", path: "#" },
          { name: "Sports", path: "#" },
          { name: "Art and Culture", path: "#" },
          { name: "Campus Events", path: "#" },
          { name: "Student Organizations", path: "#" },
          { name: "Community Service", path: "#" },
          { name: "Visitors", path: "#" },
          { name: "Diversity", path: "#" },
          { name: "Inclusivity", path: "#" },
          { name: "On Campus Jobs", path: "#" },
          { name: "Career Enhancement Initiatives", path: "#" },
          { name: "Student Ambassadors", path: "#" },
        ],
        path: ""
      },
      {
        name: "Student Services",
        children: [
          { name: "Campus Security", path: "#" },
          { name: "UNI Health Centre", path: "#" },
          { name: "University Management System", path: "#" },
          { name: "Residential Facilities", path: "#" },
          { name: "Transportation Facilities", path: "#" },
          { name: "UNI Communications", path: "#" },
          { name: "Shopping and Dining", path: "#" },
          { name: "Banking and Postal Services", path: "#" },
          { name: "Education Loan Assistance", path: "#" },
          { name: "Placements", path: "#" },
        ],
        path: ""
      },
    ],
  },
  {
    name: "Programs",
    subLinks: [
      { name: "View All", path: "/our-programmes" },
      { name: "Recognition of Prior Learning (RPL)", path: "/our-programmes/recognition-of-prior-learning" },
      { name: "Apprenticeship & Dual Training Programs", path: "/our-programmes/apprenticeship-and-dual-training" },
      { name: "Diploma & Advanced Diploma Programs", path: "/our-programmes/diploma-programs" },
      { name: "Upskilling & Reskilling Programs", path: "/our-programmes/upskilling-and-reskilling-program" },
      { name: "Industry-Aligned Certification Programs", path: "/our-programmes/industry-alligned-certification" },
    ],
  },
  { name: "Contact", path: "/contact-us" },
];

const secondaryLinks = [
  {
    name: "ERP",
    path: "#",
    icon: FaSignInAlt,
    children: [
      { name: "Faculty", path: "/campus-login/faculty" },
      { name: "Admin Staff", path: "/campus-login/admin-staff" },
      { name: "General Staff", path: "/campus-login/general-staff" },
    ],
  },
  { name: "LMS", path: "/aspire", icon: FaStar },
  { name: "Competitives", path: "#", icon: FaAward },
  { name: "Alumni Portal", path: "/wise", icon: FaBrain },
  { name: "Collaborations", path: "/collaborations", icon: Handshake },
  { name: "Library", path: "/collaborations", icon: Notebook },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSecondaryDropdown, setOpenSecondaryDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
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
      {/* Announcement Bar */}
      <div className="bg-red-600 text-white text-sm py-1 px-6 font-medium flex items-center overflow-hidden whitespace-nowrap">
        <div className="flex-shrink-0 pr-4">Announcements</div>
        <div className="flex-1">
          <Marquee pauseOnHover direction="left" speed={50}>
            {announcementTexts.map((text, i) => (
              <span key={i} className="mx-8">
                {text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Main Header */}
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

      {/* Secondary Bar */}
      {!isScrolled && (
        <div className="bg-transparent border-y border-red-600 text-white font-semibold text-base">
          <nav className="hidden md:flex items-center justify-end space-x-6 py-2 px-6 relative">
            {secondaryLinks.map((link) => {
              const Icon = link.icon;
              const isOpen = openSecondaryDropdown === link.name;
              const hasChildren = !!link.children?.length;

              return (
                <div key={link.name} className="relative secondary-dropdown">
                  <button
                    onClick={() =>
                      hasChildren
                        ? setOpenSecondaryDropdown(isOpen ? null : link.name)
                        : (window.location.href = link.path)
                    }
                    className="flex items-center hover:underline"
                  >
                    <Icon className="mr-2" /> {link.name}
                  </button>

                  {hasChildren && isOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.children!.map((child) => (
                        <a
                          key={child.name}
                          href={child.path}
                          className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white text-sm"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
