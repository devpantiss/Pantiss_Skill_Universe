import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Factory,
  FileText,
  HardHat,
  Leaf,
  Search,
  Ship,
  Sparkles,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

type ResourceType = "Report" | "Case Study" | "Article" | "Insight";

interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  type: ResourceType;
  image: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  takeaways: string[];
}

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const CATEGORIES: Category[] = [
  {
    id: "Mining",
    title: "Mining",
    description: "Safety, automation and sustainable extraction",
    image: "/Homepage/why/mines.jpg",
    icon: HardHat,
  },
  {
    id: "Steel & Aluminium",
    title: "Steel & Aluminium",
    description: "Advanced metallurgy and green production",
    image: "/Homepage/why/steel.jpg",
    icon: Factory,
  },
  {
    id: "Power & Green Energy",
    title: "Power & Green Energy",
    description: "Renewable systems and future-ready operations",
    image: "/Homepage/why/greenenergy.jpg",
    icon: Zap,
  },
  {
    id: "Shipping & Logistics",
    title: "Shipping & Logistics",
    description: "Global trade, ports and supply-chain skills",
    image: "/Homepage/why/shippingandlogistics.jpg",
    icon: Ship,
  },
  {
    id: "Green Jobs",
    title: "Green Jobs",
    description: "Climate-positive careers and circular industry",
    image: "/Homepage/why/greenjobs.jpg",
    icon: Leaf,
  },
];

const RESOURCES: Resource[] = [
  {
    id: "digital-mining",
    title: "The Connected Mine: Building a Safer, Smarter Workforce",
    excerpt:
      "A practical outlook on how remote operations, predictive maintenance and digital safety systems are reshaping frontline roles.",
    category: "Mining",
    type: "Report",
    image: "/Homepage/why/mines.jpg",
    date: "12 Aug 2026",
    readTime: "8 min read",
    author: "PSU Research Desk",
    featured: true,
    takeaways: [
      "The technical capabilities emerging across modern mine operations",
      "How digital tools can strengthen safety without replacing human judgement",
      "A role-based roadmap for reskilling supervisors and operators",
    ],
  },
  {
    id: "green-steel",
    title: "Green Steel and the New Metallurgy Skill Stack",
    excerpt:
      "What hydrogen-based production, electrification and lower-carbon processes mean for technicians and plant operators.",
    category: "Steel & Aluminium",
    type: "Insight",
    image: "/Homepage/why/steel.jpg",
    date: "05 Aug 2026",
    readTime: "6 min read",
    author: "Centre for Metals Excellence",
    takeaways: [
      "The operational shift from conventional to lower-carbon production",
      "High-value skills that will remain critical during plant modernisation",
      "Training priorities for maintenance and process-control teams",
    ],
  },
  {
    id: "women-in-mining",
    title: "Designing Safer Pathways for Women in Mining",
    excerpt:
      "A field-led case study on inclusive training, equipment readiness and workplace systems that improve participation.",
    category: "Mining",
    type: "Case Study",
    image: "/Homepage/women-in-mining.png",
    date: "28 Jul 2026",
    readTime: "7 min read",
    author: "Workforce Inclusion Lab",
    takeaways: [
      "How inclusive course design improves workplace readiness",
      "The role of equipment orientation and practical simulations",
      "Metrics organisations can use to track sustainable participation",
    ],
  },
  {
    id: "smart-ports",
    title: "Smart Ports: Skills for the Next Logistics Era",
    excerpt:
      "Automation is changing how cargo moves. Discover the hybrid technical and operational roles emerging across modern ports.",
    category: "Shipping & Logistics",
    type: "Article",
    image: "/Homepage/why/shippingandlogistics.jpg",
    date: "19 Jul 2026",
    readTime: "5 min read",
    author: "Logistics Sector Faculty",
    takeaways: [
      "Where automation is creating new responsibilities across port operations",
      "Why safety, data literacy and equipment knowledge must be taught together",
      "A progression model for entry-level logistics talent",
    ],
  },
  {
    id: "renewable-maintenance",
    title: "The Renewable Maintenance Workforce Opportunity",
    excerpt:
      "A concise guide to the installation, inspection and maintenance skills powering India's energy transition.",
    category: "Power & Green Energy",
    type: "Report",
    image: "/Homepage/why/greenenergy.jpg",
    date: "11 Jul 2026",
    readTime: "9 min read",
    author: "Energy Skills Council",
    takeaways: [
      "Core maintenance roles across solar and industrial energy systems",
      "The safety and diagnostic capabilities employers are prioritising",
      "How modular training can accelerate technician readiness",
    ],
  },
  {
    id: "circular-careers",
    title: "From Waste Streams to Green Careers",
    excerpt:
      "How circular-economy models are creating practical, local career pathways in sorting, recovery and resource management.",
    category: "Green Jobs",
    type: "Insight",
    image: "/Homepage/why/greenjobs.jpg",
    date: "02 Jul 2026",
    readTime: "6 min read",
    author: "Green Jobs Initiative",
    takeaways: [
      "New occupational pathways created by the circular economy",
      "The blend of technical knowledge and community skills these roles require",
      "Ways employers and training partners can build credible career ladders",
    ],
  },
];

const TYPE_OPTIONS: Array<"All" | ResourceType> = [
  "All",
  "Report",
  "Case Study",
  "Article",
  "Insight",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ResourceCard({ resource, onOpen }: { resource: Resource; onOpen: () => void }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/20"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative block h-56 overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500"
        aria-label={`Preview ${resource.title}`}
      >
        <img
          src={resource.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {resource.type}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-3 text-xs text-zinc-400">
          <span className="font-semibold text-red-400">{resource.category}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-zinc-600" />
          <span>{resource.readTime}</span>
        </div>
        <h3 className="text-xl font-bold leading-snug text-white transition group-hover:text-red-300">
          {resource.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{resource.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs text-zinc-500">{resource.date}</span>
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-white transition hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            View brief <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function ResourcePreview({ resource, onClose }: { resource: Resource; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resource-preview-title"
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-zinc-950 shadow-2xl sm:rounded-3xl"
      >
        <div className="relative h-52 overflow-hidden sm:h-64">
          <img src={resource.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/30 to-black/10" />
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Close resource preview"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-400">
            <span className="rounded-full bg-red-500/15 px-3 py-1.5 text-red-300">{resource.type}</span>
            <span>{resource.category}</span>
            <span aria-hidden="true">•</span>
            <span>{resource.readTime}</span>
          </div>
          <h2 id="resource-preview-title" className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
            {resource.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-300">{resource.excerpt}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Inside this brief</p>
            <ul className="mt-5 space-y-4">
              {resource.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3 text-sm leading-6 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{resource.author}</p>
              <p className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> {resource.date}
              </p>
            </div>
            <Link
              to="/contact-us"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950"
            >
              Request full publication <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState<(typeof TYPE_OPTIONS)[number]>("All");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const resourcesRef = useRef<HTMLElement>(null);

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return RESOURCES.filter((resource) => {
      const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
      const matchesType = activeType === "All" || resource.type === activeType;
      const searchableText = [
        resource.title,
        resource.excerpt,
        resource.category,
        resource.type,
        resource.author,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && matchesType && (!query || searchableText.includes(query));
    });
  }, [activeCategory, activeType, searchQuery]);

  const scrollToResources = () => {
    window.setTimeout(() => resourcesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    scrollToResources();
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setActiveType("All");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden px-6 pb-20 pt-52 sm:pt-56 lg:min-h-[860px] lg:pb-28 lg:pt-60">
        <div className="absolute inset-0 -z-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/Homepage/accredition.jpg"
            className="h-full w-full object-cover opacity-45"
            aria-hidden="true"
          >
            <source src="/book.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_30%,rgba(220,38,38,0.20),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.34),#000_92%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1fr_340px]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300 backdrop-blur-md">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> PSU Knowledge Centre
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Ideas that move
              <span className="block bg-gradient-to-r from-red-400 via-orange-200 to-white bg-clip-text text-transparent">
                industry forward.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
              Practical research, sector intelligence and workforce insights for the people building India's industrial future.
            </p>

            <form onSubmit={handleSearch} role="search" className="mt-10 max-w-2xl">
              <label htmlFor="resource-search" className="sr-only">Search the resource library</label>
              <div className="flex items-center rounded-2xl border border-white/15 bg-black/55 p-2 shadow-2xl backdrop-blur-xl focus-within:border-red-400/70 focus-within:ring-4 focus-within:ring-red-500/10">
                <Search className="ml-3 h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true" />
                <input
                  id="resource-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search mining, green skills, reports..."
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 sm:text-base"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-7"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl lg:block"
            aria-label="Resource library summary"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Explore the library</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-black/35 p-4">
                <FileText className="h-5 w-5 text-red-400" aria-hidden="true" />
                <p className="mt-5 text-3xl font-black">{RESOURCES.length}</p>
                <p className="mt-1 text-xs text-zinc-400">Curated briefs</p>
              </div>
              <div className="rounded-2xl bg-black/35 p-4">
                <Factory className="h-5 w-5 text-orange-300" aria-hidden="true" />
                <p className="mt-5 text-3xl font-black">{CATEGORIES.length}</p>
                <p className="mt-1 text-xs text-zinc-400">Core sectors</p>
              </div>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs text-zinc-400">
              <Clock3 className="h-4 w-4 text-red-400" aria-hidden="true" /> Updated monthly by PSU faculty
            </p>
          </motion.aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/70 px-6 py-8" aria-label="Knowledge centre highlights">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          {[
            [BookOpen, "Field-led research", "Built around real operating environments"],
            [UsersRound, "Expert perspective", "Created with faculty and industry practitioners"],
            [Leaf, "Future-focused", "Tracking the skills shaping sustainable growth"],
          ].map(([Icon, title, description]) => {
            const HighlightIcon = Icon as LucideIcon;
            return (
              <div key={title as string} className="flex items-start gap-4 sm:border-r sm:border-white/10 sm:pr-6 sm:last:border-0">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <HighlightIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-bold text-white">{title as string}</h2>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">{description as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Browse by sector</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Start with your industry.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Move directly into the trends, technologies and workforce priorities most relevant to your work.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(isActive ? "All" : category.id);
                    scrollToResources();
                  }}
                  aria-pressed={isActive}
                  className={`group relative min-h-72 overflow-hidden rounded-3xl border text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black ${
                    isActive ? "border-red-400 ring-2 ring-red-500/25" : "border-white/10 hover:-translate-y-1 hover:border-white/30"
                  }`}
                >
                  <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/50 text-red-300 backdrop-blur-md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-white">{category.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-zinc-300">{category.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-red-300">
                      {isActive ? "Selected" : "Explore sector"} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={resourcesRef} className="scroll-mt-40 border-t border-white/10 bg-zinc-950/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Resource library</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Latest thinking, made practical.</h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter resources by type">
              {TYPE_OPTIONS.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveType(type)}
                  aria-pressed={activeType === type}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                    activeType === type
                      ? "border-red-500 bg-red-600 text-white"
                      : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-4 text-sm text-zinc-400" aria-live="polite">
            <p>
              Showing <span className="font-bold text-white">{filteredResources.length}</span> {filteredResources.length === 1 ? "resource" : "resources"}
              {activeCategory !== "All" && <> in <span className="font-bold text-white">{activeCategory}</span></>}
            </p>
            {(searchQuery || activeCategory !== "All" || activeType !== "All") && (
              <button type="button" onClick={clearFilters} className="inline-flex items-center gap-2 font-semibold text-red-400 transition hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
                <X className="h-4 w-4" aria-hidden="true" /> Clear filters
              </button>
            )}
          </div>

          {filteredResources.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} onOpen={() => setSelectedResource(resource)} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-20 text-center">
              <Search className="mx-auto h-10 w-10 text-zinc-600" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-white">No matching resources yet</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">Try a broader search or clear your filters to explore the full knowledge library.</p>
              <button type="button" onClick={clearFilters} className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
                View all resources
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-red-400/20 bg-gradient-to-br from-red-700 via-red-800 to-zinc-950 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border-[70px] border-white/[0.04]" aria-hidden="true" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-100">Turn insight into capability</p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Build the workforce your next chapter needs.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-red-100/80">
                Explore industry-aligned programs designed around real roles, modern equipment and measurable workplace outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/our-programmes" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-red-700 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-red-800">
                Explore programs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact-us" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Speak with our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedResource && <ResourcePreview resource={selectedResource} onClose={() => setSelectedResource(null)} />}
      </AnimatePresence>
    </main>
  );
}
