import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const quickLinks = [
    "Admissions",
    "Skill Training Programs",
    "Alumni Network",
    "Certificate Courses",
    "Academics",
    "Campus Events",
  ];

  const socialIcons = [
    { icon: <FaLinkedin className="text-2xl" />, label: "LinkedIn", href: "#" },
    { icon: <FaFacebook className="text-2xl" />, label: "Facebook", href: "#" },
    { icon: <FaTwitter className="text-2xl" />, label: "Twitter", href: "#" },
    { icon: <FaYoutube className="text-2xl" />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-black text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Details */}
        <div>
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1755503945/Pantiss_School__10_-removebg-preview_pkpj9w.png"
            alt="Pantiss Skill University Logo"
            className="h-20 mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong>Pantiss Skill University</strong> is a leading institution
            dedicated to fostering skill development and innovation. Our mission
            is to empower students with industry-relevant skills and knowledge
            through cutting-edge education and hands-on training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-orange-500 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-orange-500 pb-2">
            Contact Info
          </h4>
          <address className="not-italic text-sm leading-relaxed text-gray-300 mb-4">
            <strong>Pantiss Skill University</strong><br />
            1215/1500, Skill Education Hub,<br />
            Khandagiri Bari,<br />
            Bhubaneswar – 751030, Khordha, Odisha
          </address>
          <p className="text-sm mb-1">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+912298765432"
              className="hover:text-orange-500 transition-colors"
            >
              +91-22-9876-5432
            </a>
          </p>
          <p className="text-sm mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@pantiss-skill-univ.org"
              className="hover:text-orange-500 transition-colors"
            >
              contact@pantiss-skill-univ.org
            </a>
          </p>

          <div>
            <h5 className="text-sm font-semibold text-white mb-2">
              Connect With Us
            </h5>
            <div className="flex space-x-4 mb-4">
              {socialIcons.map(({ icon, label, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="text-white text-xl hover:text-orange-500 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-xs text-gray-100 space-x-2">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-200 border-t border-orange-500 pt-4">
        &copy; {new Date().getFullYear()} Pantiss Skill University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
