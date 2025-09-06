import React, { memo } from "react";
import Marquee from "react-fast-marquee";

// Interfaces
interface Stat {
  value: string;
  description: string;
}

interface Company {
  name: string;
  logo: string;
}

interface Student {
  name: string;
  batch: string;
  package: string;
  image: string;
}

// Static Data
const statsData: Stat[] = [
  { value: "50+", description: "Recruiters partnered with Pantiss" },
  { value: "120+", description: "Job offers in Mining, Shipping, Power & Infrastructure" },
  { value: "₹3 Lac", description: "Average salary of top 25% placed students" },
  { value: "20+", description: "Global companies hiring Pantiss graduates" },
  { value: "100+", description: "Students placed at packages above ₹3.5 Lakh" },
];

const companiesData: Company[] = [
  { name: "Vedanta Resources", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746008397/Screenshot_2025-04-30_at_3.49.16_PM-removebg-preview_pf7adb.png" },
  { name: "Tata Steel", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742810048/Tata_Steel_Logo_gyv6rz.png" },
  { name: "Wistron", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746006925/wistron_u1oa59.svg" },
  { name: "Jindal Steel & Power", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746007990/Screenshot_2025-04-30_at_3.38.59_PM-removebg-preview_h2oxkt.png" },
  { name: "Dhoot Transmission", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746007547/Screenshot_2025-04-30_at_3.34.57_PM-removebg-preview_nbmrom.png" },
  { name: "Schneider Electric", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746006925/schneider_electric_q2ujfb.png" },
  { name: "FleetGuard", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746006925/fleetguard_tuohkr.png" },
];

const studentsData: Student[] = [
  {
    name: "Anjali Gocchi",
    batch: "Batch 2023",
    package: "₹3.5 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000395/students-7_xxzu1w.jpg",
  },
  {
    name: "Ranjita Gochayat",
    batch: "Batch 2023",
    package: "₹3.5 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000395/student-6_ap9vlq.jpg",
  },
  {
    name: "Nabjyoti Nayak",
    batch: "Batch 2024",
    package: "₹3.5 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000395/student-5_gbdqmb.jpg",
  },
  {
    name: "Manoj Kumar Kisan",
    batch: "Batch 2024",
    package: "₹3 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000304/student-4_yx4ee4.jpg",
  },
  {
    name: "Kanha Raula",
    batch: "Batch 2024",
    package: "₹2.8 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000303/student-3_frvbwb.jpg",
  },
  {
    name: "Subham Majhi",
    batch: "Batch 2025",
    package: "₹2.8 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000304/student-2_dw91lt.jpg",
  },
  {
    name: "Chandan Sahoo",
    batch: "Batch 2025",
    package: "₹2.64 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000304/student-1_krlvqn.jpg",
  },
];

// Components
const StatCard = memo(({ stat }: { stat: Stat }) => (
  <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
    <p className="text-gray-100 mt-2">{stat.description}</p>
  </div>
));

const CompanyLogo = memo(({ company }: { company: Company }) => (
  <div className="flex-shrink-0 w-44 h-44 flex items-center justify-center p-4">
    <img
      src={company.logo}
      alt={company.name}
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
));

const StudentCard = memo(({ student }: { student: Student }) => (
  <div className="flex-shrink-0 w-64 bg-transparent rounded-lg text-center">
    <img
      src={student.image}
      alt={student.name}
      className="w-44 h-44 rounded-full object-cover mx-auto mb-4 border-2 border-orange-500"
      loading="lazy"
    />
    <h4 className="text-lg font-semibold text-gray-100">{student.name}</h4>
    <p className="text-sm text-gray-50">{student.batch}</p>
    <p className="text-orange-600 font-bold mt-2">{student.package}</p>
  </div>
));

// Main Section
const PlacementsSection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490663/12266398_1920_1080_30fps_njenhk.mp4"
          type="video/mp4"
        />
      </video>

      {/* Blurry Circles Overlay */}
      <div className="absolute inset-0 z-5">
      {/* Large Blurry Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-30 z-0" />

      {/* Small Blurry Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-cyan-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-1/2 right-10 w-32 h-32 bg-green-600 rounded-full blur-3xl opacity-30 z-0" />
      </div>

      {/* Dark Gradient Overlay (kept for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/85 via-black/60 to-black/90 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-300 uppercase">Placements & Careers</h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
            Glance at the <span className="text-red-600">Top Companies</span> Hiring from Us
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
            Skilling Revolution Starts at Us: Exceptional Placements for 2021-2025 Batches
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Stats */}
          <div className="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statsData.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>

          {/* Marquee Content */}
          <div className="lg:w-2/3">
            <Marquee gradient={false} speed={40} pauseOnHover>
              {companiesData.map((company, i) => (
                <CompanyLogo key={`${company.name}-${i}`} company={company} />
              ))}
            </Marquee>

            <div className="text-center mb-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-50">
                Students Getting Highest Packages
              </h3>
            </div>

            <Marquee gradient={false} speed={40} pauseOnHover>
              {studentsData.map((student, i) => (
                <StudentCard key={`${student.name}-${i}`} student={student} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors">
            View Placements
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(PlacementsSection);
