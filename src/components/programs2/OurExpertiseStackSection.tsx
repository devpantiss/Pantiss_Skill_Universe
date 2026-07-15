import { useLayoutEffect, useRef, useCallback, useEffect, memo } from "react";
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
      "/programs/programs_image/diploma.jpg",
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
      "/programs/programs_image/iti.jpg",
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
      "/programs/programs_image/industry.jpg",
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
      "/programs/programs_image/upskilling.jpg",
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
      "/programs/programs_image/bootcamp.jpg",
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

/* ===================== IMAGE PRELOADER ===================== */
/* Eagerly fetch + decode every card image so the browser
   never has to decode mid-transition (a major frame-drop source). */

const preloadedImages = new Set<string>();

function preloadImages() {
  PROGRAMMES.forEach((p) => {
    [p.image, ...p.jobRoles.map((r) => r.image)].forEach((src) => {
      if (preloadedImages.has(src)) return;
      preloadedImages.add(src);
      const img = new Image();
      img.decoding = "async";
      img.src = src;
    });
  });
}

/* ===================== MAIN COMPONENT ===================== */

export default function OurProgrammesScrollStack() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sidebarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const sidebarTimelineRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  /* Preload all images once on mount */
  useEffect(() => {
    preloadImages();
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".program-slide");
      const total = cards.length;

      /* ---- Initial state ---- */
      /* visibility:hidden = browser skips paint entirely.
         Using opacity-only transitions (no translate) for cheapest GPU path. */
      gsap.set(cards, {
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
        force3D: true,
        backfaceVisibility: "hidden",
      });

      /* Only the first card is visible */
      gsap.set(cards[0], {
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
      });

      /* ---- Direct-DOM sidebar update ---- */
      const updateSidebar = (index: number) => {
        const items = sidebarRefs.current;
        for (let i = 0; i < items.length; i++) {
          const el = items[i];
          if (!el) continue;
          const isActive = i === index;
          
          const title = el.querySelector("span:last-child") as HTMLElement;
          const number = el.querySelector("span:first-child") as HTMLElement;
          const dot = el.querySelector("div") as HTMLElement;

          if (title) {
            title.style.color = isActive ? "white" : "rgba(255,255,255,0.4)";
            title.style.textShadow = isActive ? "0 0 25px rgba(255,255,255,0.2)" : "none";
            title.style.transform = isActive ? "scale(1.02)" : "scale(1)";
          }
          if (number) {
            number.style.color = isActive ? "#ef4444" : "rgba(255,255,255,0.3)";
          }
          if (dot) {
            dot.style.backgroundColor = isActive ? "#ef4444" : "rgba(255,255,255,0.2)";
            dot.style.transform = isActive ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0.5)";
            dot.style.opacity = isActive ? "1" : "0.3";
            dot.style.boxShadow = isActive ? "0 0 15px rgba(239,68,68,0.6)" : "none";
          }
        }
      };

      let lastIdx = 0;

      /* ---- Create Scrubbing Timeline ---- */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(total - 1) * 800}`, // Longer scroll for smoother feel
          pin: true,
          scrub: prefersReducedMotion ? 0 : 1, // High scrub value for "silky" follow
          snap: {
            snapTo: 1 / (total - 1),
            duration: { min: 0.2, max: 0.6 },
            ease: "power2.inOut",
          },
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
            if (sidebarTimelineRef.current) {
              sidebarTimelineRef.current.style.transform = `scaleY(${self.progress})`;
            }

            const idx = Math.round(self.progress * (total - 1));
            if (idx !== lastIdx) {
              updateSidebar(idx);
              lastIdx = idx;
            }
          }
        }
      });

      /* Build the crossfade sequence */
      cards.forEach((card, i) => {
        if (i === 0) {
          // Slide 0 starts visible
          tl.add(() => updateSidebar(0), 0);
          return;
        }

        // Fade in current, fade out previous
        const startTime = i - 0.5; // Offset to start transition slightly before full snap point
        
        tl.to(cards[i - 1], {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onStart: () => {
             // Optional: Hide pointer events on previous
             if (cards[i-1] instanceof HTMLElement) cards[i-1].style.pointerEvents = 'none';
          }
        }, startTime);

        tl.to(card, {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          onStart: () => {
            gsap.set(card, { visibility: "visible" });
            updateSidebar(i);
            if (card instanceof HTMLElement) card.style.pointerEvents = 'auto';
          }
        }, startTime);
      });

      scrollTriggerRef.current = tl.scrollTrigger || null;
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---- Click sidebar to scroll to a specific slide ---- */
  const handleSidebarClick = useCallback((index: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;
    const progress = index / (PROGRAMMES.length - 1);
    const scrollTarget = st.start + progress * (st.end - st.start);
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white pt-24 pb-8 flex items-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden" style={{ willChange: 'transform' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          style={{ pointerEvents: 'none', willChange: 'opacity' }}
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlays for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0202] via-transparent to-[#0b0202] opacity-80" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ---- Scroll progress indicator ---- */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-20">
        <div
          ref={progressRef}
          className="h-full w-full bg-gradient-to-r from-red-500/80 to-orange-400/60 origin-left"
          style={{ transform: "scaleX(0)", willChange: "transform" }}
        />
      </div>

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <aside className="w-full lg:w-[260px] shrink-0 h-full flex flex-col justify-center">
          <div>
            <div className="space-y-1.5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-red-500/80 font-bold">
                EXPLORE
              </p>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-[0.9] text-white/90">
                OUR <br /> <span className="text-white">PROGRAMS</span>
              </h2>
            </div>

            <div className="mt-8 lg:mt-12 relative">
              {/* Vertical Progress Track */}
              <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-white/10" />
              
              {/* Dynamic Glowing Timeline */}
              <div
                ref={sidebarTimelineRef}
                className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-red-500 to-orange-500 origin-top shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20"
                style={{ transform: "scaleY(0)", willChange: "transform" }}
              />

              <div className="space-y-2">
                {PROGRAMMES.map((p, i) => (
                  <div
                    key={p.title}
                    ref={(el) => {
                      sidebarRefs.current[i] = el;
                    }}
                    onClick={() => handleSidebarClick(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSidebarClick(i);
                      }
                    }}
                    className="group relative pl-6 py-2 lg:py-3 cursor-pointer transition-all duration-500"
                  >
                    {/* Active Indicator Dot */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-500 ${
                        i === 0
                          ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] scale-100 opacity-100"
                          : "bg-white/20 scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-75"
                      }`}
                      style={{
                        backgroundColor: i === 0 ? undefined : "rgba(255,255,255,0.2)",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />

                    <div className="flex flex-col gap-1.5 transition-transform duration-500 group-hover:translate-x-1">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-bold group-hover:text-red-500/50 transition-colors duration-500">
                        0{i + 1}
                      </span>
                      <span
                        className="text-base font-bold tracking-tight transition-all duration-500 group-hover:text-white"
                        style={{
                          color: i === 0 ? "white" : "rgba(255,255,255,0.4)",
                          textShadow: i === 0 ? "0 0 20px rgba(255,255,255,0.1)" : "none",
                        }}
                      >
                        {p.title}
                      </span>
                    </div>

                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div
          className="flex-1 relative w-full h-[70vh] lg:h-[75vh] max-h-[700px]"
          style={{ isolation: "isolate" }}
        >
          {PROGRAMMES.map((p, i) => (
            <div
              key={p.title}
              className="program-slide absolute inset-0"
              style={{
                contain: "layout style paint",
                backfaceVisibility: "hidden",
                willChange: "opacity, transform"
              }}
            >
              <ProgrammeCard programme={p} priority={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CARD ===================== */

const ProgrammeCard = memo(function ProgrammeCard({
  programme,
  priority = false,
}: {
  programme: Programme;
  priority?: boolean;
}) {
  const rolesRef = useRef<HTMLDivElement | null>(null);

  const scrollRoles = useCallback((dir: "prev" | "next") => {
    rolesRef.current?.scrollBy({
      left: dir === "next" ? 280 : -280,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative h-full w-full rounded-2xl overflow-hidden grid grid-cols-12 text-white shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      <div className="col-span-5 lg:col-span-4 p-3 lg:p-4">
        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={programme.image}
            alt={programme.title}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute bottom-4 w-full text-center">
            <Link
              to={programme.path}
              className="inline-flex items-center gap-2 text-xs tracking-widest text-white hover:text-white/80 transition-colors duration-300"
            >
              VIEW PROGRAMME
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-7 lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center h-full">
        <h3 className="text-2xl lg:text-4xl font-black tracking-tighter text-white leading-tight">
          {programme.title}
        </h3>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] lg:text-xs tracking-widest text-white/70">
          <MetaField label="DURATION" value={programme.duration} />
          <MetaField label="MODE" value={programme.mode} />
          <MetaField label="CERTIFICATION" value={programme.certification} />
          <MetaField label="IDEAL FOR" value={programme.idealFor} />
        </div>

        <p className="mt-3 text-xs lg:text-[13px] text-white/70 max-w-2xl leading-relaxed">
          {programme.description}
        </p>

        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className="mt-3">
          <div className="flex justify-between items-center">
            <p className="text-[10px] tracking-widest text-white/60">
              /POTENTIAL JOB ROLES
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => scrollRoles("prev")}
                aria-label="Previous role"
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollRoles("next")}
                aria-label="Next role"
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
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
                className="relative min-w-[200px] lg:min-w-[220px] h-[110px] lg:h-[130px] rounded-xl overflow-hidden group cursor-pointer snap-start"
              >
                <img
                  src={role.image}
                  alt={role.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
});

/* ===================== META ===================== */

const MetaField = memo(function MetaField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-white/40">{label}</p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  );
});