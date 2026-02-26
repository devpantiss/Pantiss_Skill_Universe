import { useState, Suspense } from "react";
import { Download } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Bounds,
} from "@react-three/drei";

/* ===================== TYPES ===================== */

type Program = {
  id: string;
  name: string;
  description: string;
  duration: string;
  certification: string;
  pdfUrl: string;
  image: string;
};

/* ===================== DATA ===================== */

const PROGRAMS: Program[] = [
  {
    id: "diploma",
    name: "Diploma / Polytechnic",
    description:
      "Comprehensive training in technical and applied sciences, preparing students for supervisory and technician roles.",
    duration: "2–3 Years",
    certification: "State & Industry Recognised",
    pdfUrl: "/pdfs/diploma.pdf",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421119/diploma_diqahi.avif",
  },
  {
    id: "iti",
    name: "Industrial Training Institute (ITI)",
    description:
      "Hands-on skill development programs designed to create industry-ready technicians for blue-collar sectors.",
    duration: "6–24 Months",
    certification: "NCVT / SCVT",
    pdfUrl: "/pdfs/iti.pdf",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421038/iti_pld6fw.avif",
  },
  {
    id: "industry_certification",
    name:
      "Industry-Aligned Skill Certification & Apprenticeship Programs",
    description:
      "Training and certification designed with direct input from industry partners to maximize employability.",
    duration: "3–12 Months",
    certification: "Industry Certified",
    pdfUrl: "/pdfs/industry-certification.pdf",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761914370/korba_cmy2er.jpg",
  },
  {
    id: "upskilling",
    name: "Workmen Upskilling & Reskilling Programs",
    description:
      "Helping the workforce adapt to evolving technologies, processes, and global industrial standards.",
    duration: "1–6 Months",
    certification: "Industry Aligned",
    pdfUrl: "/pdfs/upskilling.pdf",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762422162/ChatGPT_Image_Nov_6_2025_03_12_00_PM_b0hrkz.png",
  },
  {
    id: "bootcamp",
    name: "Skill Development Bootcamps",
    description:
      "Intensive short-term programs for rapid job entry.",
    duration: "4–12 Weeks",
    certification: "Industry Recognised",
    pdfUrl: "/pdfs/bootcamp.pdf",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762423419/bootcamp_mzu2xy.jpg",
  },
  {
    id: "international",
    name: "International Mobility Programs",
    description:
      "Global-standard training for overseas job opportunities.",
    duration: "18–24 Weeks",
    certification: "Global Standards",
    pdfUrl: "/pdfs/international.pdf",
    image:
      "https://cdn.prod.website-files.com/67139b4944f3d6b890cda082/6720a95f025dc22684bab942_64f07126f5659751e457ca5a_workforce-management-system-mining-industry.jpeg",
  },
];

/* ===================== 3D MODEL ===================== */

function SkillUniverseModel() {
  const { scene } = useGLTF("/model/worker.glb");
  return <primitive object={scene} />;
}

/* ===================== COMPONENT ===================== */

export default function ProgrammeSyllabusExplorer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProgram = PROGRAMS.find((p) => p.id === activeId);

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-[#0b0202] text-white overflow-hidden">

      {/* ================= RED BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0b0202]" />

        {/* Primary red glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,0,0,0.25),transparent_55%)]" />

        {/* Secondary glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_85%,rgba(220,38,38,0.18),transparent_60%)]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-5">
            <h2 className="text-[48px] leading-[1.05] font-light tracking-tight">
              PROGRAMMES
              <br />& CURRICULUM
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Structured skilling pathways designed for industrial deployment,
              statutory compliance and long-term workforce readiness.
            </p>

            {/* IMAGE OR MODEL */}
            <div className="relative mt-12 h-[360px] overflow-hidden rounded-lg border border-red-500/20 bg-black">
              {activeProgram ? (
                <img
                  key={activeProgram.id}
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                />
              ) : (
                <Canvas camera={{ fov: 42 }} dpr={[1, 1.5]}>
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[6, 10, 6]} intensity={1} />

                  <Suspense fallback={null}>
                    <Bounds fit clip observe margin={1.25}>
                      <SkillUniverseModel />
                    </Bounds>
                    <Environment preset="city" />
                  </Suspense>

                  <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.45}
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 2.3}
                    maxPolarAngle={Math.PI / 2.3}
                  />
                </Canvas>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="lg:col-span-7">
            <div className="border-t border-red-500/30">
              {PROGRAMS.map((program) => {
                const isActive = program.id === activeId;

                return (
                  <div
                    key={program.id}
                    className="border-b border-red-500/30"
                  >
                    {/* HEADER */}
                    <button
                      onClick={() => toggle(program.id)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className="text-lg tracking-wide group-hover:text-red-400 transition">
                        {program.name}
                      </span>

                      <span
                        className={`text-5xl font-light transition-all duration-300 ${
                          isActive
                            ? "rotate-45 text-red-500"
                            : "rotate-0 text-white/70"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* BODY */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden pb-4">
                        <p className="text-sm text-white/65 max-w-3xl">
                          {program.description}
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-10 text-xs tracking-widest text-white/60">
                          <div>
                            <p className="text-white/40">DURATION</p>
                            <p className="mt-1">{program.duration}</p>
                          </div>
                          <div>
                            <p className="text-white/40">
                              CERTIFICATION
                            </p>
                            <p className="mt-1">
                              {program.certification}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <a
                            href={program.pdfUrl}
                            download
                            className="inline-flex items-center gap-3 border border-red-500/40 px-6 py-3 text-xs tracking-widest text-white/80 hover:bg-red-500/10 transition"
                          >
                            DOWNLOAD SYLLABUS
                            <Download className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ===================== PRELOAD ===================== */

useGLTF.preload("/model/worker.glb");