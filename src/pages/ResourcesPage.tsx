import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Play,
  X,
} from "lucide-react";

interface ContentCardItem {
  title: string;
  description: string;
  image: string;
  meta: string;
  href?: string;
  comingSoon?: boolean;
  dashboard?: boolean;
}

interface ResearchItem {
  title: string;
  subtitle: string;
  image: string;
}

interface VideoItem {
  title: string;
  image: string;
  source: string;
}

const dashboardItems: ContentCardItem[] = [
  {
    title: "Results Dashboard",
    description: "Track outcomes across programmes through clear metrics, visualisations and performance indicators.",
    image: "/Homepage/dash_image_1.png",
    meta: "Updated: August 1, 2026",
    href: "/skill-dashboard",
    dashboard: true,
  },
  {
    title: "Placements Dashboard",
    description: "Explore placement performance, qualification trends and district-level workforce outcomes.",
    image: "/Homepage/placements/students/student-3.jpg",
    meta: "Updated: August 15, 2026",
    href: "/skill-dashboard",
    dashboard: true,
  },
  {
    title: "Key Result Stories Dashboard",
    description: "Discover success narratives and data-led stories that show the measurable impact of our work.",
    image: "/Homepage/dash_image_2.png",
    meta: "Updated: August 20, 2026",
    href: "/skill-dashboard",
    dashboard: true,
  },
];

const researchItems: ResearchItem[] = [
  {
    title: "Future Workforce Needs in Mining",
    subtitle: "Industry demand and workforce readiness",
    image: "/Homepage/why/mines.jpg",
  },
  {
    title: "Women in Industrial Skilling",
    subtitle: "Participation, access and employment outcomes",
    image: "/Homepage/women-in-mining.png",
  },
  {
    title: "Green Energy Skills Outlook",
    subtitle: "Preparing technicians for the energy transition",
    image: "/Homepage/why/greenenergy.jpg",
  },
  {
    title: "Smart Logistics Workforce",
    subtitle: "Emerging roles across ports and supply chains",
    image: "/Homepage/why/shippingandlogistics.jpg",
  },
];

const toolkitItems: ContentCardItem[] = [
  {
    title: "Webinar Series",
    description: "Expert-led sessions on workforce strategy, inclusive skilling and sustainable industrial transformation.",
    image: "/careers/life/team.jpeg",
    meta: "Last updated: August 12, 2026",
  },
  {
    title: "Resource Collections",
    description: "Curated templates, case studies and practical tools for designing high-impact skill programmes.",
    image: "/careers/curriculum.jpeg",
    meta: "Last updated: August 18, 2026",
  },
  {
    title: "Training Manuals",
    description: "Step-by-step guides, implementation methods and field-ready training practices for delivery teams.",
    image: "/careers/tvet.jpg",
    meta: "Last updated: August 22, 2026",
  },
];

const videoItems: VideoItem[] = [
  {
    title: "Building the Future of Skills",
    image: "/Homepage/accredition.jpg",
    source: "/book.mp4",
  },
  {
    title: "Women Leading Industrial Change",
    image: "/Homepage/women-in-mining.png",
    source: "/Homepage/12791129_1920_1080_30fps.mp4",
  },
  {
    title: "Skills for Sustainable Livelihoods",
    image: "/Homepage/why/greenjobs.jpg",
    source: "/vid.mp4",
  },
];

const factSheetItems: ContentCardItem[] = [
  {
    title: "Mining Workforce Readiness — Odisha",
    description: "A data-led snapshot of workforce demand, occupational shifts and training priorities in mining regions.",
    image: "/Homepage/why/mines.jpg",
    meta: "Releasing soon",
    comingSoon: true,
  },
  {
    title: "Skill Development & Employability Snapshot",
    description: "Key statistics on training outcomes, employer requirements and placement trends across core sectors.",
    image: "/careers/Assessment.jpeg",
    meta: "Releasing soon",
    comingSoon: true,
  },
  {
    title: "Just Transition Indicators Framework",
    description: "Core indicators for monitoring livelihoods, inclusion, resilience and green economic opportunity.",
    image: "/careers/research&advocacy.jpg",
    meta: "Releasing soon",
    comingSoon: true,
  },
];

const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4";

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 sm:mb-12">
      <span className="h-8 w-1 rounded-full bg-red-500" aria-hidden="true" />
      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

function CardGrid({
  items,
  onComingSoon,
}: {
  items: ContentCardItem[];
  onComingSoon: (title: string) => void;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="group flex min-h-[540px] flex-col overflow-hidden rounded-2xl border-2 border-red-600 bg-zinc-950 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-2xl hover:shadow-red-950/20"
        >
          <div className="relative h-56 overflow-hidden bg-zinc-900">
            {item.dashboard ? (
              <div className="absolute inset-0 bg-zinc-950 p-4 text-white" aria-hidden="true">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-12 rounded-sm bg-red-500" />
                  <span className="h-2.5 w-16 rounded-sm bg-zinc-700" />
                  <span className="h-2.5 w-14 rounded-sm bg-zinc-700" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 border-y border-red-500/70 py-3">
                  {[68, 42, 82, 55].map((width, metricIndex) => (
                    <div key={metricIndex}>
                      <span className="block h-1.5 rounded-full bg-zinc-700" />
                      <span className="mt-2 block h-2 rounded-sm bg-zinc-200" style={{ width: `${width}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-[1fr_1.35fr] gap-3">
                  <div className="rounded border border-red-500/50 p-3">
                    <span className="block h-2 w-16 rounded bg-zinc-600" />
                    <div className="mt-4 flex h-16 items-end gap-2">
                      {[45, 78, 60, 92, 68].map((height, barIndex) => (
                        <span key={barIndex} className="flex-1 rounded-t bg-red-500" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded border border-red-500/50 p-3">
                    <span className="block h-2 w-20 rounded bg-zinc-600" />
                    <div className="mt-4 space-y-2.5">
                      {[85, 64, 76, 48].map((width, rowIndex) => (
                        <div key={rowIndex} className="flex items-center gap-2">
                          <span className="h-1.5 w-8 rounded bg-zinc-700" />
                          <span className="h-2 rounded-full bg-amber-400" style={{ width: `${width}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            )}
            {item.comingSoon && (
              <span className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-white">
                Coming soon
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
            <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-semibold capitalize text-zinc-500">{item.meta}</span>
              {item.href ? (
                <Link
                  to={item.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 ${focusRing}`}
                >
                  Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => onComingSoon(item.title)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${item.comingSoon ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700" : "bg-red-600 text-white hover:bg-red-700"
                    } ${focusRing}`}
                >
                  {item.comingSoon ? "Launching soon" : "Explore"}
                  {!item.comingSoon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </button>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function FeatureBanner({
  title,
  description,
  image,
  action,
  onAction,
}: {
  title: string;
  description: string;
  image: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <section
      className="relative isolate overflow-hidden border-t-2 border-red-600 bg-cover bg-center bg-no-repeat bg-fixed px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-16"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-4xl">
          <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">{description}</p>
        </div>
        {action && onAction && (
          <button type="button" onClick={onAction} className={`shrink-0 rounded-lg bg-red-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-700 ${focusRing} focus-visible:ring-offset-black`}>
            {action}
          </button>
        )}
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  const [researchIndex, setResearchIndex] = useState(1);
  const [notice, setNotice] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    if (!notice) return;
    const timeoutId = window.setTimeout(() => setNotice(null), 3500);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  useEffect(() => {
    if (!activeVideo) return;
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setActiveVideo(null);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const showComingSoon = (title: string) => setNotice(`${title} is coming soon.`);
  const moveResearch = (direction: number) => {
    setResearchIndex((current) => (current + direction + researchItems.length) % researchItems.length);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pb-16 pt-[210px] sm:px-10 sm:pb-20 sm:pt-[225px] lg:px-16 lg:pb-16 lg:pt-[250px]">
        <img
          src="/resources-hero-analytics.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/25" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-20 mx-auto w-full max-w-[1440px]">
          <div className="max-w-[760px] lg:pl-4">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-zinc-900/80 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
              Publications &amp; Research
            </span>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Insights for a
              <span className="block text-red-500">Changing World</span>
            </h1>
            <p className="mt-7 max-w-[700px] text-base leading-7 text-zinc-200 sm:text-lg sm:leading-8">
              Discover Pantiss publications exploring workforce transformation, sustainability, and community development. Our research delivers practical insights for policymakers, industry leaders, and innovators.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
                className={`inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-red-700 ${focusRing} focus-visible:ring-offset-black`}
              >
                Browse Publications
              </button>
              <button type="button" onClick={() => showComingSoon("Latest report")} className={`inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-black/60 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-red-500 hover:bg-red-600 ${focusRing} focus-visible:ring-offset-black`}>
                Latest Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboards" className="scroll-mt-36 border-t border-red-600/30 bg-black px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading>Dashboards & Data Analytics</SectionHeading>
          <CardGrid items={dashboardItems} onComingSoon={showComingSoon} />
          <div className="mt-10 flex justify-center">
            <Link to="/skill-dashboard" className={`rounded-lg bg-red-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 ${focusRing}`}>
              View all dashboards
            </Link>
          </div>
        </div>
      </section>

      <FeatureBanner
        title="Our Programs Impact Assessment Report"
        description="Evaluating our initiatives' transformative effects on communities, industries and workforce outcomes."
        image="/About/cert_bg.jpg"
        action="View report"
        onAction={() => showComingSoon("Impact Assessment Report")}
      />

      <section id="research" className="scroll-mt-36 overflow-hidden bg-red-600 px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading>Research & Reports</SectionHeading>
            <p className="max-w-xl text-base leading-8 text-red-50 sm:text-lg">
              Explore PSU research publications covering workforce development, industrial transformation, climate resilience and community impact.
            </p>
            <button type="button" onClick={() => showComingSoon("Research library")} className={`mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-bold text-red-700 transition hover:bg-zinc-950 hover:text-white ${focusRing} focus-visible:ring-white focus-visible:ring-offset-red-600`}>
              View all reports <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div>
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-3">
              {[-1, 0, 1].map((offset) => {
                const itemIndex = (researchIndex + offset + researchItems.length) % researchItems.length;
                const item = researchItems[itemIndex];
                const active = offset === 0;
                return (
                  <button
                    key={`${item.title}-${offset}`}
                    type="button"
                    onClick={() => active ? showComingSoon(item.title) : setResearchIndex(itemIndex)}
                    className={`group relative overflow-hidden rounded-2xl border-2 border-red-600 bg-zinc-950 text-left shadow-2xl transition duration-500 ${active ? "h-[430px] sm:scale-105" : "hidden h-[350px] opacity-75 sm:block"} ${focusRing} focus-visible:ring-white focus-visible:ring-offset-red-600`}
                    aria-label={`${active ? "Open" : "Show"} ${item.title}`}
                  >
                    <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-xl font-black leading-tight text-white">{item.title}</p>
                      <p className="mt-2 text-xs leading-5 text-zinc-300">{item.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button type="button" onClick={() => moveResearch(-1)} className={`rounded-full border-2 border-white p-3 transition hover:bg-white hover:text-red-600 ${focusRing} focus-visible:ring-white focus-visible:ring-offset-red-600`} aria-label="Previous report">
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex gap-2" aria-hidden="true">
                {researchItems.map((item, index) => <span key={item.title} className={`h-2 rounded-full transition-all ${index === researchIndex ? "w-8 bg-white" : "w-2 bg-white/30"}`} />)}
              </div>
              <button type="button" onClick={() => moveResearch(1)} className={`rounded-full border-2 border-white p-3 transition hover:bg-white hover:text-red-600 ${focusRing} focus-visible:ring-white focus-visible:ring-offset-red-600`} aria-label="Next report">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureBanner
        title="2026 Model Mining Villages Report"
        description="Discover our latest findings on resilient livelihoods, local infrastructure and community-led development in mining regions."
        image="/Homepage/why/mines.jpg"
        action="Coming soon"
        onAction={() => showComingSoon("Model Mining Villages Report")}
      />

      <section className="border-t border-red-600/30 bg-black px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading>Toolkit</SectionHeading>
          <CardGrid items={toolkitItems} onComingSoon={showComingSoon} />
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => showComingSoon("Complete toolkit")} className={`rounded-lg bg-red-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 ${focusRing}`}>
              View more
            </button>
          </div>
        </div>
      </section>

      <FeatureBanner
        title="Voices of Impact — The Podcasts"
        description="Conversations with industry leaders, educators and change-makers shaping the future of skills, sustainability and livelihoods."
        image="/careers/research&advocacy.jpg"
      />

      <section className="bg-red-600 px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading>Videos</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {videoItems.map((video, index) => (
              <motion.button
                key={video.title}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                onClick={() => setActiveVideo(video)}
                className={`group overflow-hidden rounded-2xl border-2 border-red-600 bg-zinc-950 text-left shadow-xl ${focusRing} focus-visible:ring-white focus-visible:ring-offset-red-600`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={video.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />
                  <span className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md transition group-hover:scale-110 group-hover:bg-red-600">
                    <Play className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-h-28 p-6">
                  <h3 className="text-lg font-black leading-snug text-red-600">{video.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-red-600/30 bg-black px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading>Fact Sheets</SectionHeading>
          <CardGrid items={factSheetItems} onComingSoon={showComingSoon} />
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => showComingSoon("Fact sheet library")} className={`rounded-lg bg-red-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 ${focusRing}`}>
              View all fact sheets
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {notice && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} role="status" aria-live="polite" className="fixed right-4 top-4 z-[90] flex max-w-sm items-center gap-3 rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-sm text-white shadow-2xl sm:right-6">
            <FileText className="h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
            <span className="font-semibold">{notice}</span>
            <button type="button" onClick={() => setNotice(null)} className="ml-1 rounded-md p-1 text-zinc-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" aria-label="Dismiss notification">
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setActiveVideo(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} role="dialog" aria-modal="true" aria-labelledby="video-title" className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white">
                <h2 id="video-title" className="font-bold">{activeVideo.title}</h2>
                <button type="button" autoFocus onClick={() => setActiveVideo(null)} className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" aria-label="Close video">
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <video src={activeVideo.source} controls autoPlay playsInline className="aspect-video w-full bg-black" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
