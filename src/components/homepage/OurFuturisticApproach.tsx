import React, { memo, useMemo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaTools } from "react-icons/fa";

interface Vehicle {
  title: string;
  image: string;
  description: string;
  quantity: string;
  importFrom: string;
  techSpecs: string;
}

const fleetData: Vehicle[] = [
  {
    title: "Futuristic Skill on Wheels",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746022829/WhatsApp_Image_2025-04-30_at_5.37.40_PM_s3tcrn.jpg",
    description:
      "A state-of-the-art mobile lab equipped with AR/VR-based skill development modules, delivering immersive learning to remote areas.",
    quantity: "3",
    importFrom: "Germany",
    techSpecs:
      "AR/VR Modules, 4G+ Router, Battery Backup, Climate Control, Modular Interior",
  },
  {
    title: "Advanced Operator Training Simulators",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746023415/WhatsApp_Image_2025-03-03_at_10.47.37_PM_1_ng3dvl.jpg",
    description:
      "Realistic simulators that replicate heavy machinery controls, helping trainees master equipment handling in a safe virtual environment.",
    quantity: "2",
    importFrom: "Japan",
    techSpecs:
      "Hydraulic Joystick Interface, Haptic Feedback, 8K Display, CNC Integration",
  },
  {
    title: "Large Scale Shipping Simulator",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746023414/WhatsApp_Image_2025-02-28_at_5.00.19_PM_l7dq7p.jpg",
    description:
      "A maritime simulation module designed for hands-on logistics and port operations training using realistic AR-based controls.",
    quantity: "4",
    importFrom: "South Korea",
    techSpecs:
      "Marine AR Cockpit, Multi-user Networking, Dynamic Weather Engine, DNV Certified",
  },
  {
    title: "Infrastructure Equipment Simulator",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746023907/WhatsApp_Image_2025-02-28_at_5.00.19_PM_1_ov0z9z.jpg",
    description:
      "Simulator module for construction site operations including bulldozers, backhoes, and graders to simulate field work conditions.",
    quantity: "Coming soon",
    importFrom: "USA",
    techSpecs:
      "Heavy-Duty Motion Platform, 3D Real Terrain Engine, Remote Diagnostics",
  },
  {
    title: "Highend Welding Machinaries",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_1000,h_1000/v1746022829/welding_pfnxjr.webp",
    description:
      "Precision welding units integrated with simulation feedback for real-time skill correction and performance enhancement.",
    quantity: "3",
    importFrom: "Italy",
    techSpecs:
      "Robotic Weld Arm, Real-Time Feedback Sensors, Laser Guidance, Ergonomic Controls",
  },
  {
    title: "Electrician Training Simulators",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_600,h_1000/v1746022828/electrician_kdeqet.webp",
    description:
      "Interactive simulators for wiring, circuit assembly, and troubleshooting exercises using AR overlays and guided steps.",
    quantity: "1",
    importFrom: "Singapore",
    techSpecs:
      "Live Wiring Board, AR Instruction Display, Safety Monitoring, Modular Panels",
  },
];

interface VehicleCardProps {
  vehicle: Vehicle;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
}

const VehicleCard = memo(
  ({ vehicle, onMouseEnter, onMouseLeave, index }: VehicleCardProps) => {
    // Prepare tech specs as array
    const techList = vehicle.techSpecs.split(",").map((s) => s.trim());

    return (
      <div
        className="relative w-[400px] min-h-[630px] group cursor-pointer bg-gradient-to-b from-black via-red-700 to-black rounded-2xl overflow-hidden shadow-xl border border-green-500 flex flex-col transition-all duration-200 hover:shadow-2xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
        aria-label={`Vehicle card for ${vehicle.title}`}
        aria-describedby={`vehicle-details-${index}`}
      >
        {/* Header: title & badge */}
        <div className="flex flex-col justify-between h-[80px] mb-2 items-center bg-black/80 backdrop-blur-md px-5 py-2">
          <h3 className="text-lg font-bold text-white drop-shadow">
            {vehicle.title}
          </h3>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-600/80 text-white shadow">
            {vehicle.quantity === "Coming soon"
              ? "Coming Soon"
              : `Qty: ${vehicle.quantity}`}
          </span>
        </div>

        {/* Main image */}
        <div className="overflow-hidden flex items-center justify-center px-5 pt-1 pb-3">
          <img
            src={vehicle.image}
            alt={vehicle.title}
            className="h-56 w-full object-cover rounded-xl shadow-lg border border-gray-900"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Description */}
        <div className="px-5 pb-3">
          <p
            id={`vehicle-details-${index}`}
            className="text-gray-200 font-medium text-sm mb-2 leading-snug"
          >
            {vehicle.description}
          </p>
        </div>

        {/* Divider */}
        <hr className="mx-5 border-t border-green-700/30 mb-4" />

        {/* Info section */}
        <div className="flex-1 px-5 pb-5">
          {/* Country and specs rows */}
          <div className="flex items-center gap-2 mb-3">
            <FaGlobe
              className="text-green-500 w-4 h-4"
              aria-label="Import from"
            />
            <span className="font-semibold text-green-500 text-xs uppercase">
              Import From:
            </span>
            <span className="text-white text-sm font-medium">
              {vehicle.importFrom}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaTools
              className="text-green-500 w-4 h-4"
              aria-label="Tech specifications"
            />
            <span className="font-semibold text-green-500 text-xs uppercase">
              Tech Specs:
            </span>
          </div>
          {/* Tech specs list */}
          <ul className="list-disc list-inside text-gray-100 text-sm ml-7 space-y-1">
            {techList.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.vehicle.title === nextProps.vehicle.title
);
VehicleCard.displayName = "VehicleCard";

const OurFuturisticApproach: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const fleetList = useMemo(() => [...fleetData, ...fleetData], []);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollSpeed = 0.5;
    let animationFrameId: number;
    const scroll = () => {
      if (!isPaused) {
        scrollPositionRef.current += scrollSpeed;
        container.scrollLeft = scrollPositionRef.current;
        const totalWidth = fleetData.length * 320;
        if (scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current = 0;
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (container) scrollPositionRef.current = container.scrollLeft;
    setIsPaused(false);
  };
  return (
    <section className="relative py-16 bg-black overflow-hidden">
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
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-green-600">Futuristic Approach</span>
          </h2>
          <p className="mt-4 text-lg text-gray-50 max-w-3xl mx-auto">
            A Glimpse into our Next-Gen Lab Equipments — powered by Advanced
            Simulators, AR/VR Modules, and Real-World Skill Training
            Infrastructure.
          </p>
        </div>
        {/* Scrollable Fleet Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-6 px-4 pb-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Scrolling futuristic equipment cards"
          aria-live="off"
        >
          {fleetList.map((vehicle, index) => (
            <div
              key={`${vehicle.title}-${index}`}
              className="flex-shrink-0 min-w-[320px]"
            >
              <VehicleCard
                vehicle={vehicle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                index={index}
              />
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="text-center mt-10 flex items-center justify-center gap-4">
          {/* Left image */}
          <img
            src="https://res.cloudinary.com/djtzx6wo7/image/upload/v1756890438/19362653-removebg-preview_gudzua.png"
            alt="Dashboard Icon"
            className="w-36 lg:w-44 h-36 lg:h-44 object-contain drop-shadow-md animate-bounce"
            aria-hidden="true"
          />
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-red-600 text-white hover:text-white font-semibold rounded-lg ring-2 ring-green-600 hover:bg-green-600 hover:ring-green-600 focus-visible:ring-2 focus-visible:ring-green-600 transition-all duration-300"
            aria-label="Explore Skill and Jobs Dashboard"
          >
            Explore Skill & Jobs Dashboard
          </Link>
          {/* Right image */}
          <img
            src="https://res.cloudinary.com/djtzx6wo7/image/upload/v1756890439/4421964-removebg-preview_nu0dk9.png"
            alt="Go Icon"
            className="w-36 lg:w-44 h-36 lg:h-44 object-contain drop-shadow-md animate-bounce"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(OurFuturisticApproach, () => true);
