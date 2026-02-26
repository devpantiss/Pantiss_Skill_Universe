import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* ===================== TYPES ===================== */

type JobRole = {
  title: string;
  image: string;
};

type Programme = {
  title: string;
  description: string;
  image: string;
  duration: string;
  mode: string;
  certification: string;
  idealFor: string;
  jobRoles: JobRole[];
  path: string;
};

/* ===================== DATA ===================== */

const PROGRAMMES: Programme[] = [
  {
    title: "Diploma/Polytechnic",
    description:
      "Comprehensive training in technical and applied sciences, preparing students for supervisory and technician roles.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421119/diploma_diqahi.avif",
    duration: "2–3 Years",
    mode: "Full-Time / Hybrid",
    certification: "State & Industry Recognised",
    idealFor: "12th Pass Students",
    jobRoles: [
      {
        title: "Technical Proficiency",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
      {
        title: "Career-Ready Skills",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Lab-Based Learning",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
    ],
    path: "/our-programmes/diploma-programs",
  },

  {
    title: "Industrial Training Institute (ITI)",
    description:
      "Hands-on skill development programs designed to create industry-ready technicians for blue-collar sectors.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762421038/iti_pld6fw.avif",
    duration: "6–24 Months",
    mode: "Full-Time",
    certification: "NCVT / SCVT",
    idealFor: "10th / 12th Pass",
    jobRoles: [
      {
        title: "Hands-On Workshops",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
      },
      {
        title: "Industry Tools",
        image:
          "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
      },
      {
        title: "Placement Assistance",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      },
    ],
    path: "/our-programmes/iti-program",
  },

  {
    title:
      "Industry-Aligned Skill Certification & Apprenticeship Programs",
    description:
      "Training and certification designed with direct input from industry partners to maximize employability.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761914370/korba_cmy2er.jpg",
    duration: "3–12 Months",
    mode: "Blended",
    certification: "Industry Certified",
    idealFor: "Students & Job Seekers",
    jobRoles: [
      {
        title: "Industry Endorsed",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
      {
        title: "High Employability",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "Global Standards",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
    ],
    path: "/our-programmes/industry-alligned-certification",
  },

  {
    title: "Workmen Upskilling & Reskilling Programs",
    description:
      "Helping the workforce adapt to evolving technologies, processes, and global industrial standards.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762422162/ChatGPT_Image_Nov_6_2025_03_12_00_PM_b0hrkz.png",
    duration: "1–6 Months",
    mode: "Blended",
    certification: "Industry Aligned",
    idealFor: "Working Professionals",
    jobRoles: [
      {
        title: "Technology Adaptation",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
      {
        title: "Skill Enhancement",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Career Longevity",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
    ],
    path: "/our-programmes/upskilling-and-reskilling-program",
  },

  {
    title: "Skill Development Bootcamps",
    description:
      "Intensive short-term programs for rapid job entry.",
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1762423419/bootcamp_mzu2xy.jpg",
    duration: "4–12 Weeks",
    mode: "Full-Time / Intensive",
    certification: "Industry Recognised",
    idealFor: "Job Seekers",
    jobRoles: [
      {
        title: "Short-Term",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
      {
        title: "Job-Focused",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "High Intensity",
        image:
          "https://images.unsplash.com/photo-1581091215367-59ab6c1c9b66",
      },
    ],
    path: "/our-programmes/skill-development-boot-camp-program",
  },

  {
    title: "International Mobility Programs",
    description:
      "Global-standard training for overseas job opportunities.",
    image:
      "https://cdn.prod.website-files.com/67139b4944f3d6b890cda082/6720a95f025dc22684bab942_64f07126f5659751e457ca5a_workforce-management-system-mining-industry.jpeg",
    duration: "18–24 Weeks",
    mode: "Hybrid",
    certification: "Global Standards",
    idealFor: "International Aspirants",
    jobRoles: [
      {
        title: "Global Standards",
        image:
          "https://images.unsplash.com/photo-1581093458791-9f3c3900df47",
      },
      {
        title: "Overseas Opportunities",
        image:
          "https://images.unsplash.com/photo-1542339147-17b88b5f7a9f",
      },
      {
        title: "International Exposure",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
    ],
    path: "/our-programmes/international-mobility-program",
  },
];

/* ===================== MAIN COMPONENT ===================== */

export default function OurProgrammesScrollStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(
        ".program-slide"
      );

      // GPU acceleration
      cards.forEach((card) => {
        gsap.set(card, {
          force3D: true,
          willChange: "transform, opacity",
        });
      });

      let lastIndex = 0;

      const setCardState = (index: number) => {
        cards.forEach((card, i) => {
          if (i === index) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.out",
              pointerEvents: "auto",
            });
          } else {
            gsap.to(card, {
              opacity: 0,
              y: -60,
              duration: 0.45,
              ease: "power2.out",
              pointerEvents: "none",
            });
          }
        });
      };

      setCardState(0);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${(cards.length - 1) * 600}`,
        pin: true,
        scrub: 0.4,
        anticipatePin: 1,
        onUpdate: (self) => {
          const index = Math.round(
            self.progress * (cards.length - 1)
          );

          if (index !== lastIndex) {
            lastIndex = index;

            requestAnimationFrame(() => {
              setActiveIndex(index);
              setCardState(index);
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0b0202] text-white pt-10"
    >
      <div className="px-6 py-20 flex gap-12">
        {/* LEFT MENU */}
        <aside className="w-1/4">
          <div className="sticky top-20">
            <h2 className="text-5xl font-light leading-tight">
              OUR <br /> PROGRAMMES
            </h2>

            <div className="mt-10 space-y-4">
              {PROGRAMMES.map((p, i) => (
                <div
                  key={p.title}
                  className={`py-4 border-b border-white/15 ${
                    i === activeIndex
                      ? "text-white"
                      : "text-white/40"
                  }`}
                >
                  {p.title}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT STACK */}
        <div className="w-3/4 relative h-[560px]">
          {PROGRAMMES.map((p) => (
            <div
              key={p.title}
              className="program-slide absolute inset-0 will-change-transform"
            >
              <ProgrammeCard programme={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CARD ===================== */

function ProgrammeCard({ programme }: { programme: Programme }) {
  const rolesRef = useRef<HTMLDivElement | null>(null);

  const scrollRoles = (dir: "prev" | "next") => {
    rolesRef.current?.scrollBy({
      left: dir === "next" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-full w-full rounded-2xl overflow-hidden grid grid-cols-12 text-white shadow-[0_25px_70px_rgba(0,0,0,0.7)]">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,0,0,0.35),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(220,38,38,0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#140000] to-[#07040E]" />
      </div>

      {/* IMAGE */}
      <div className="col-span-4 p-6">
        <div className="relative h-full rounded-xl overflow-hidden">
          <img
            src={programme.image}
            alt={programme.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-4 w-full text-center">
            <Link
              to={programme.path}
              className="inline-flex items-center gap-2 text-xs tracking-widest text-white"
            >
              VIEW PROGRAMME
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="col-span-8 p-10">
        <h3 className="text-5xl font-light">
          {programme.title}
        </h3>

        <div className="mt-6 grid grid-cols-4 gap-6 text-xs tracking-widest text-white/70">
          <Meta label="DURATION" value={programme.duration} />
          <Meta label="MODE" value={programme.mode} />
          <Meta label="CERTIFICATION" value={programme.certification} />
          <Meta label="IDEAL FOR" value={programme.idealFor} />
        </div>

        <p className="mt-6 text-sm text-white/70 max-w-2xl">
          {programme.description}
        </p>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        {/* JOB ROLES */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-[11px] tracking-widest text-white/60">
              /POTENTIAL JOB ROLES
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => scrollRoles("prev")}
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollRoles("next")}
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={rolesRef}
            className="mt-4 flex gap-4 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {programme.jobRoles.map((role) => (
              <div
                key={role.title}
                className="relative min-w-[270px] h-[160px] rounded-xl overflow-hidden group cursor-pointer"
                style={{ transform: "translateZ(0)" }}
              >
                <img
                  src={role.image}
                  alt={role.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition shadow-[0_0_40px_rgba(255,0,0,0.45)]" />

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium tracking-wide">
                    {role.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== META ===================== */

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-white/40">{label}</p>
      <p className="mt-1 font-medium text-white">
        {value}
      </p>
    </div>
  );
}