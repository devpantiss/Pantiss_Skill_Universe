import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

// Types
interface ContactInfoProps {
  name: string;
  address: string[];
  tel: string;
  email: string;
}

interface Department {
  name: string;
  tel: string;
  email: string;
}

interface HeadOffice {
  main: ContactInfoProps;
  departments: Department[];
}

interface School extends ContactInfoProps {
  name: string;
}

interface CenterOfExcellence extends ContactInfoProps {
  name: string;
}

const ContactPage: React.FC = () => {
  // Data
  const headOffice: HeadOffice = {
    main: {
      name: "Pantiss Foundation - Head Office",
      address: [
        "Plot No 1215/1500",
        "Khandagiri Bari, Bank of India Lane",
        "Bhubaneswar, Odisha, 751030",
      ],
      tel: "+91 9123456789",
      email: "info@pantissfoundation.org",
    },
    departments: [
      {
        name: "Finance",
        tel: "+91 9234567890",
        email: "finance@pantissfoundation.org",
      },
      {
        name: "HR",
        tel: "+91 9345678901",
        email: "hr@pantissfoundation.org",
      },
      {
        name: "Careers",
        tel: "+91 9456789012",
        email: "careers@pantissfoundation.org",
      },
    ],
  };

  const schools: School[] = [
    {
      name: "School for Mines, Steel & Power - Sukinda",
      address: ["Sukinda, Odisha"],
      tel: "+91 9111111111",
      email: "sukinda@pantissfoundation.org",
    },
    {
      name: "School for Mines, Steel & Power - Bhawanipatna",
      address: ["Bhawanipatna, Odisha"],
      tel: "+91 9222222222",
      email: "bhawanipatna@pantissfoundation.org",
    },
    {
      name: "School for Shipping - Talcher",
      address: ["Talcher, Odisha"],
      tel: "+91 9333333333",
      email: "talcher.shipping@pantissfoundation.org",
    },
    {
      name: "School for Shipping - Paradip",
      address: ["Paradip, Odisha"],
      tel: "+91 9444444444",
      email: "paradip.shipping@pantissfoundation.org",
    },
    {
      name: "School for Infrastructure & Facility Management - Jharsuguda",
      address: ["Jharsuguda, Odisha"],
      tel: "+91 9555555555",
      email: "jharsuguda.ifm@pantissfoundation.org",
    },
    {
      name: "School for Infrastructure & Facility Management - Joda",
      address: ["Joda, Odisha"],
      tel: "+91 9666666666",
      email: "joda.ifm@pantissfoundation.org",
    },
  ];

  const centerOfExcellence: CenterOfExcellence[] = [
    {
      name: "Center of Excellence - Talcher",
      address: ["Talcher, Odisha"],
      tel: "+91 9777777777",
      email: "coe.talcher@pantissfoundation.org",
    },
  ];

  // State
  const [activeTab, setActiveTab] = useState<
    "headOffice" | "schools" | "coe"
  >("headOffice");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Contact Info Component
  const ContactInfo: React.FC<ContactInfoProps> = ({
    name,
    address,
    tel,
    email,
  }) => (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="flex items-start text-gray-300">
        <FaMapMarkerAlt className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-1" />
        <span>
          {address.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </span>
      </p>
      <p className="flex items-center text-gray-300">
        <FaPhone className="w-5 h-5 mr-2 text-red-500" />
        <a href={`tel:${tel}`} className="hover:text-green-400">
          {tel}
        </a>
      </p>
      <p className="flex items-center text-gray-300">
        <FaEnvelope className="w-5 h-5 mr-2 text-red-500" />
        <a
          href={`mailto:${email}`}
          className="text-green-400 hover:underline break-words"
        >
          {email}
        </a>
      </p>
    </div>
  );

  return (
    <section className="relative mt-36 py-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background circles - brighter */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-60 h-60 rounded-full blur-2xl opacity-70 animate-pulse ${
              i % 2 === 0 ? "bg-red-600" : "bg-green-500"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 container mx-auto max-w-7xl flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            <span className="">Contact</span>{" "}
            <span className="text-green-500">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Reach out to us for inquiries, collaborations, or support.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 bg-gradient-to-b from-red-600 to-red-700 rounded-2xl shadow-xl p-6">
            <p className="text-sm text-gray-100 mt-2 text-center">
              Last modified on{" "}
              {new Date("2025-01-17").toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <nav className="mt-6 space-y-3">
              <button
                onClick={() => setActiveTab("headOffice")}
                className={`w-full text-left py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  activeTab === "headOffice"
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Head Office
              </button>
              <button
                onClick={() => setActiveTab("schools")}
                className={`w-full text-left py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  activeTab === "schools"
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Schools
              </button>
              <button
                onClick={() => setActiveTab("coe")}
                className={`w-full text-left py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  activeTab === "coe"
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Center of Excellence
              </button>
            </nav>
          </aside>

          {/* Main */}
          <main className="lg:w-3/4 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl p-8 relative">
            {/* Head Office */}
            {activeTab === "headOffice" && (
              <div className="space-y-6 transition-all duration-300">
                <h2 className="text-2xl font-bold text-green-400">
                  Head Office
                </h2>
                <ContactInfo {...headOffice.main} />
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {headOffice.departments.map((dept, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500 hover:shadow-lg hover:scale-105 transition"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {dept.name}
                      </h4>
                      <p className="flex items-center text-gray-300 mb-2">
                        <FaPhone className="w-5 h-5 mr-2 text-red-500" />
                        <a
                          href={`tel:${dept.tel}`}
                          className="hover:text-green-400"
                        >
                          {dept.tel}
                        </a>
                      </p>
                      <p className="flex items-center text-gray-300">
                        <FaEnvelope className="w-5 h-5 mr-2 text-red-500" />
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-green-400 hover:underline break-words"
                        >
                          {dept.email}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schools */}
            {activeTab === "schools" && (
              <div className="space-y-6 transition-all duration-300">
                <h2 className="text-2xl font-bold text-green-400">Schools</h2>
                <div className="space-y-4">
                  {schools.map((school, idx) => (
                    <div key={idx} className="border-b border-gray-700">
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === idx ? null : idx)
                        }
                        className="w-full flex justify-between items-center py-3 text-left text-lg font-semibold text-white hover:text-green-400 focus:outline-none"
                      >
                        {school.name}
                        <FaChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            expandedIndex === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedIndex === idx
                            ? "max-h-64 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pb-4">
                          <ContactInfo {...school} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Center of Excellence */}
            {activeTab === "coe" && (
              <div className="space-y-6 transition-all duration-300">
                <h2 className="text-2xl font-bold text-green-400">
                  Center of Excellence
                </h2>
                <div className="space-y-4">
                  {centerOfExcellence.map((coe, idx) => (
                    <div key={idx} className="border-b border-gray-700">
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === idx ? null : idx)
                        }
                        className="w-full flex justify-between items-center py-3 text-left text-lg font-semibold text-white hover:text-green-400 focus:outline-none"
                      >
                        {coe.name}
                        <FaChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            expandedIndex === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedIndex === idx
                            ? "max-h-64 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pb-4">
                          <ContactInfo {...coe} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
