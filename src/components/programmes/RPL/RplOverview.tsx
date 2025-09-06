import React, { memo } from "react";
import { motion, Variants } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define interfaces for type safety
interface ImpactData {
  courses: number;
  trained: number;
  placed: number;
}

interface Sector {
  name: string;
  description: string;
  icon: string;
  impact: ImpactData;
}

interface RplOverviewProps {}

// Define sectors data with icons and impact
const sectors: Sector[] = [
  {
    name: "Mines, Steel & Aluminium",
    description: "Certifies expertise in mining operations, steel fabrication, and aluminium processing for enhanced safety and productivity in heavy industry operations.",
    icon: "⚒️",
    impact: { courses: 12, trained: 2500, placed: 1800 }
  },
  {
    name: "Power & Energy",
    description: "Validates skills in power plant operations, renewable energy systems, and energy efficiency management for sustainable future.",
    icon: "⚡",
    impact: { courses: 15, trained: 3200, placed: 2400 }
  },
  {
    name: "Shipping & Logistics",
    description: "Recognizes proficiency in warehouse management, freight forwarding, and port operations for global trade excellence.",
    icon: "🚢",
    impact: { courses: 10, trained: 1800, placed: 1500 }
  },
  {
    name: "Infrastructure & Facility Management",
    description: "Certifies skills in construction supervision, plumbing, and facility maintenance for modern urban development.",
    icon: "🏗️",
    impact: { courses: 18, trained: 4000, placed: 3000 }
  },
  {
    name: "Semiconductors & EV Tech",
    description: "Validates expertise in semiconductor fabrication and electric vehicle technology for the digital future.",
    icon: "🔬",
    impact: { courses: 8, trained: 1200, placed: 900 }
  },
  {
    name: "Green Jobs",
    description: "Recognizes skills in sustainable agriculture, solar installation, and waste management for environmental sustainability.",
    icon: "🌱",
    impact: { courses: 14, trained: 2800, placed: 2200 }
  },
  {
    name: "Textiles & Apparels",
    description: "Certifies proficiency in textile manufacturing and garment production for fashion and textile industries.",
    icon: "🧵",
    impact: { courses: 11, trained: 2100, placed: 1600 }
  },
  {
    name: "Social Development",
    description: "Validates skills in community mobilization and social health work for inclusive societal growth.",
    icon: "🤝",
    impact: { courses: 9, trained: 1500, placed: 1200 }
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const videoVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
  }
};

const carouselVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
  }
};

// Custom arrow components for react-slick
interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
    onClick={onClick}
    aria-label="Previous sector"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
    onClick={onClick}
    aria-label="Next sector"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const RplOverview: React.FC<RplOverviewProps> = () => {
  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i: number) => (
      <button
        className="w-3 h-3 mx-1 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots !bottom-[-40px] !flex !justify-center !space-x-2"
  };

  return (
    <section className="relative min-h-screen py-12 sm:py-16 lg:py-20 bg-black overflow-hidden">
      {/* Enhanced Vibrant Blurred Scattered Colorful Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Large background circles */}
        <div className="absolute top-10 left-16 w-96 h-96 bg-gradient-to-br from-red-600/30 to-green-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-20 w-80 h-80 bg-gradient-to-br from-green-500/30 to-red-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-red-600/25 to-green-500/25 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-gradient-to-br from-green-500/25 to-red-600/25 rounded-full blur-3xl animate-pulse delay-1400" />
        
        {/* Medium floating circles */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-red-600/20 to-green-500/20 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-3/4 right-1/3 w-56 h-56 bg-gradient-to-br from-green-500/20 to-red-600/20 rounded-full blur-2xl animate-pulse delay-1200" />
        
        {/* Small accent circles */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-br from-red-600/15 to-green-500/15 rounded-full blur-xl animate-pulse delay-300" />
        <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-gradient-to-br from-green-500/15 to-red-600/15 rounded-full blur-xl animate-pulse delay-900" />
        
        {/* Additional floating elements */}
        <div className="absolute bottom-1/3 left-1/2 w-24 h-24 bg-gradient-to-br from-red-600/10 to-green-500/10 rounded-full blur-lg animate-pulse delay-1600" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants as Variants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-white bg-clip-text text-transparent">
              Program {" "}
            </span>
            <span className="text-white/90">Overview</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Empowering professionals through skill recognition and certification across diverse industries
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Section */}
          <motion.div variants={videoVariants as Variants} className="relative group">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-600/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-500/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-600/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-500/50 rounded-br-lg" />
              
              <div className="aspect-video rounded-2xl overflow-hidden bg-black/50">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="RPL Program Overview Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-green-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Carousel Section */}
          <motion.div variants={carouselVariants as Variants} className="relative">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Skills Across <span className="bg-gradient-to-r from-red-600 to-green-500 bg-clip-text text-transparent">8 Key Sectors</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                The Recognition of Prior Learning (RPL) program validates and certifies skills across diverse industries, aligning with NSQF standards.
              </p>
            </div>

            {/* React Slick Carousel */}
            <div className="relative">
              <style>{`
                .slick-dots li button:before {
                  display: none;
                }
                .slick-track {
                  display: flex;
                  align-items: center;
                }
              `}</style>
              
              <Slider {...sliderSettings}>
                {sectors.map((sector, index) => (
                  <div key={index} className="px-2">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-gradient transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10 group">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl mb-4 p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          {sector.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors duration-300">
                            {sector.name}
                          </h4>
                          <p className="text-white/80 leading-relaxed text-sm mb-4">
                            {sector.description}
                          </p>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                              <div className="text-lg font-bold text-red-600">{sector.impact.courses}</div>
                              <div className="text-xs text-white/70">Courses</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                              <div className="text-lg font-bold text-green-500">{sector.impact.trained}</div>
                              <div className="text-xs text-white/70">Trained</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                              <div className="text-lg font-bold text-red-600">{sector.impact.placed}</div>
                              <div className="text-xs text-white/70">Placed</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated bottom border */}
                      <div className="h-1 bg-gradient-to-r from-red-600 to-green-500 rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Stats or additional info */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10">
                <div className="text-2xl font-bold text-red-600">8</div>
                <div className="text-sm text-white/70">Key Sectors</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10">
                <div className="text-2xl font-bold text-green-500">50+</div>
                <div className="text-sm text-white/70">Job Roles</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-xl border border-white/10">
                <div className="text-2xl font-bold text-red-600">NSQF</div>
                <div className="text-sm text-white/70">Aligned</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(RplOverview);