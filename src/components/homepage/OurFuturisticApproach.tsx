import React, { memo } from "react";

/* ===================== TYPES ===================== */

interface InfraItem {
  title: string;
  image: string;
  description: string;
  quantity: string;
  importFrom: string;
  techSpecs: string;
}

/* ===================== INFRA DATA (UPDATED) ===================== */

const infraData: InfraItem[] = [
  {
    title: "Advanced Operator Training Simulators",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-03-03_at_10.47.37_PM_ex1zpe.jpg",
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
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762158602/WhatsApp_Image_2025-02-28_at_5.00.19_PM_frl41v.jpg",
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
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762159262/crane_empyz0.png",
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
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762157793/welding_pjajxn.webp",
    description:
      "Precision welding units integrated with simulation feedback for real-time skill correction and performance enhancement.",
    quantity: "3",
    importFrom: "Italy",
    techSpecs:
      "Robotic Weld Arm, Real-Time Feedback Sensors, Laser Guidance, Ergonomic Controls",
  },
  {
    title: "Electrician Training AR/VR",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762160341/WhatsApp_Image_2025-11-03_at_2.21.32_PM_cepy4c.jpg",
    description:
      "Interactive AR/VR for wiring, circuit assembly, and troubleshooting exercises using AR overlays and guided steps.",
    quantity: "1",
    importFrom: "Singapore",
    techSpecs:
      "Live Wiring Board, AR Instruction Display, Safety Monitoring, Modular Panels",
  },
];

/* ===================== INFRA CARD ===================== */

const InfraCard = ({ item }: { item: InfraItem }) => {
  const comingSoon = item.quantity.toLowerCase().includes("coming");

  return (
    <div className="w-[380px] shrink-0 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition">
      {/* HEADER */}
      <div className="bg-red-500/10 text-center py-3">
        <h3 className="text-white font-semibold">{item.title}</h3>
        <p className="text-red-600 text-sm">{item.quantity}</p>
      </div>

      {/* IMAGE */}
      <div className="relative h-56">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
      </div>

      {/* CONTENT */}
      <div className="p-5 text-sm text-zinc-300 space-y-3">
        <p className="text-zinc-400">{item.description}</p>

        {comingSoon ? (
          <p className="text-center text-red-400 font-semibold">
            Coming Soon
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-red-600">Imported From</p>
                <p>{item.importFrom}</p>
              </div>
              <div>
                <p className="text-red-600">Availability</p>
                <p>{item.quantity}</p>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              {item.techSpecs}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

/* ===================== MARQUEE ===================== */

const Marquee = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-hidden">
    {/* EDGE FADES */}
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

    <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
      {children}
    </div>
  </div>
);

/* ===================== MAIN SECTION ===================== */

const InfrastructureSection: React.FC = () => {
  return (
    <section className="bg-black py-12 space-y-10">
      {/* KEYFRAMES */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 42s linear infinite;
        }
      `}</style>

      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">
          Futuristic <span className="text-red-600">Equipments</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
          Advanced simulation and AR/VR-driven infrastructure designed to deliver
          next-generation industrial and mining skilling experiences.
        </p>
      </div>

      {/* MARQUEE */}
      <Marquee>
        {[...infraData, ...infraData].map((item, idx) => (
          <InfraCard key={idx} item={item} />
        ))}
      </Marquee>
    </section>
  );
};

export default memo(InfrastructureSection);
