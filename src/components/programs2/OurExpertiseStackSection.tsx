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
          "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?q=80&w=1176&auto=format&fit=crop",
      },
      {
        title: "Career-Ready Skills",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        title: "Lab-Based Learning",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/6/423853848/ZY/IF/OL/195628478/electrical-labour-contractor-service-500x500.jpg",
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
          "https://www.flyability.com/hs-fs/hubfs/mining-industry-flyability-4.jpg",
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
    title: "Industry-Aligned Skill Certification",
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
          "https://www.flyability.com/hs-fs/hubfs/mining-industry-flyability-4.jpg",
      },
      {
        title: "High Employability",
        image:
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
      },
      {
        title: "Global Standards",
        image:
          "https://www.stratospherenetworks.com/blog/wp-content/uploads/2019/11/global-network-concept-photo.jpg",
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
          "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.bfldr.com%2FS5BC9Y64%2Fat%2Fnjr7gk7np252t24pgmbnhqt%2FAdobeStock_786731786.jpeg",
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
          "https://media.assettype.com/deccanherald%2F2025-07-13%2Fzb5djuly%2Ffile702siqlkphi18ln8wf8i.jpg",
      },
      {
        title: "Job-Focused",
        image:
          "https://images.click.in/classifieds/images/177/27_09_2021_04_36_52_cb914eb0da350294ca7d6954be700c5d_s.jpg",
      },
      {
        title: "Latest Tech",
        image:
          "https://storage.googleapis.com/ureify-strapi-assets/ar_vr_resume_3a465d9ba3.jpeg",
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
          "https://www.stratospherenetworks.com/blog/wp-content/uploads/2019/11/global-network-concept-photo.jpg",
      },
      {
        title: "Overseas Opportunities",
        image:
          "https://static.themoscowtimes.com/image/article_1360/47/TASS26212748.jpg",
      },
      {
        title: "International Partnerships",
        image:
          "https://www.n-able.com/wp-content/uploads/2021/04/Blog-Merger_header.jpeg",
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
      const cards = gsap.utils.toArray<HTMLDivElement>(".program-slide");

      gsap.set(cards, {
        opacity: 0,
        y: 80,
        force3D: true,
        willChange: "transform, opacity",
      });

      gsap.set(cards[0], { opacity: 1, y: 0 });

      let active = 0;

      const changeSlide = (index: number) => {
        if (index === active) return;

        const prev = cards[active];
        const next = cards[index];

        gsap.timeline({
          defaults: { duration: 0.45, ease: "power2.out" },
        })
          .to(prev, { opacity: 0, y: -80, pointerEvents: "none" })
          .to(next, { opacity: 1, y: 0, pointerEvents: "auto" }, "<");

        active = index;
        setActiveIndex(index);
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${(cards.length - 1) * 650}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        fastScrollEnd: true,
        onUpdate(self) {
          const index = Math.round(self.progress * (cards.length - 1));
          changeSlide(index);
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
                    i === activeIndex ? "text-white" : "text-white/40"
                  }`}
                >
                  {p.title}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="w-3/4 relative h-[560px]">
          {PROGRAMMES.map((p) => (
            <div
              key={p.title}
              className="program-slide absolute inset-0 translate-z-0 will-change-transform"
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
      <div className="col-span-4 p-6">
        <div className="relative h-full rounded-xl overflow-hidden">
          <img
            src={programme.image}
            alt={programme.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
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

      <div className="col-span-8 p-10">
        <h3 className="text-5xl font-light">{programme.title}</h3>

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
            className="mt-4 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {programme.jobRoles.map((role) => (
              <div
                key={role.title}
                className="relative min-w-[270px] h-[160px] rounded-xl overflow-hidden group cursor-pointer snap-start"
              >
                <img
                  src={role.image}
                  alt={role.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

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

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-white/40">{label}</p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  );
}