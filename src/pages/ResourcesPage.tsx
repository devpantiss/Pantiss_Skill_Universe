import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  FileText, 
  TrendingUp, 
  Zap, 
  Factory,
  Ship,
  Leaf
} from "lucide-react";

/* ================= TYPES ================= */

interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tag: "Report" | "Case Study" | "Article" | "Insight";
  image: string;
  date: string;
  author: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

/* ================= SAMPLE DATA ================= */

const CATEGORIES: Category[] = [
  {
    id: "mining",
    title: "Mining",
    description: "Future of sustainable resource extraction and safety protocols.",
    image: "/Homepage/why/mines.jpg",
    icon: <div className="p-3 bg-red-500/20 text-red-400 rounded-lg"><div className="w-6 h-6 border-b-2 border-r-2 border-red-400 rotate-45" /></div> // Custom mining-like icon
  },
  {
    id: "steel",
    title: "Steel & Aluminium",
    description: "Innovations in metallurgy and green steel production.",
    image: "/Homepage/why/steel.jpg",
    icon: <Factory className="w-6 h-6 text-blue-400" />
  },
  {
    id: "power",
    title: "Power & Energy",
    description: "Transitioning to renewable grids and smart energy management.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  },
  {
    id: "greenenergy",
    title: "Green Energy",
    description: "Efficiency in oil & gas and the evolution of petrochemicals.",
    image: "/Homepage/why/greenenergy.jpg",
    icon: <Leaf className="w-6 h-6 text-green-400" />
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    description: "Global trade routes, automation, and maritime skilling.",
    image: "/Homepage/why/shippingandlogistics.jpg",
    icon: <Ship className="w-6 h-6 text-blue-500" />
  }
];

const RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Digital Transformation in Deep-Sea Mining",
    excerpt: "Exploring how AI-driven remote monitoring is revolutionizing mineral extraction in the 21st century.",
    category: "Mining",
    tag: "Report",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
    date: "March 15, 2026",
    author: "Dr. Arvind Rao"
  },
  {
    id: "2",
    title: "Green Steel: Path to Carbon Neutrality",
    excerpt: "A comprehensive analysis of hydrogen-based reduction processes in the modern steel industry.",
    category: "Steel & Aluminium",
    tag: "Case Study",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?q=80&w=2070&auto=format&fit=crop",
    date: "March 10, 2026",
    author: "Sarah Jenkins"
  },
  {
    id: "3",
    title: "Global Maritime Logistics Trends 2026",
    excerpt: "The impact of automated shipping ports on the future workforce and skilling requirements.",
    category: "Shipping & Logistics",
    tag: "Article",
    image: "https://images.unsplash.com/photo-1512418490979-92798ccc1340?q=80&w=2070&auto=format&fit=crop",
    date: "March 05, 2026",
    author: "Capt. Rajneesh Singh"
  },
  {
    id: "4",
    title: "The Role of Microgrids in Industrial Hubs",
    excerpt: "Decentralizing energy for better reliability and lower emissions in heavy industrial clusters.",
    category: "Power & Energy",
    tag: "Insight",
    image: "https://images.unsplash.com/photo-1466611653911-954ff2127184?q=80&w=2070&auto=format&fit=crop",
    date: "February 28, 2026",
    author: "Elena Petrova"
  }
];

/* ================= COMPONENTS ================= */

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 space-y-4">
    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white">{title}</h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

const CategoryCard = ({ category }: { category: Category }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/5"
  >
    <img 
      src={category.image} 
      alt={category.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-slate-900/60 to-transparent" />
    
    <div className="absolute top-6 left-6">
      <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 group-hover:border-white/30 transition-colors">
        {category.icon}
      </div>
    </div>

    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
      <p className="text-slate-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {category.description}
      </p>
      <div className="mt-4 flex items-center gap-2 text-red-400 text-sm font-semibold">
        Explore Category <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all group flex flex-col h-full"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={resource.image} 
        alt={resource.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white font-bold">
          {resource.tag}
        </span>
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-2 text-red-500/80 text-[10px] font-bold uppercase tracking-wider mb-3">
        {resource.category}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-snug">
        {resource.title}
      </h3>
      <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
        {resource.excerpt}
      </p>
      
      <div className="flex items-center justify-between pt-6 border-t border-slate-800 mt-auto">
        <div className="text-[11px] text-slate-500">
          {resource.date} • By {resource.author}
        </div>
        <button className="text-white hover:text-red-400 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

/* ================= MAIN PAGE ================= */

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
            style={{ pointerEvents: 'none' }}
          >
            <source src="/book.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)] opacity-60" /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <TrendingUp className="w-4 h-4" /> KNOWLEDGE & INSIGHTS
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter">
              INSIGHTS FOR THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-200">
                FUTURE WORKFORCE
              </span>
            </h1>
            
            <p className="text-slate-300 text-lg lg:text-xl max-w-3xl mx-auto font-medium">
              Bridging the gap between industrial evolution and workforce readiness through 
              comprehensive publications, actionable reports, and technical insights.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-4 px-6 h-16">
                <Search className="w-6 h-6 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search articles, reports, case studies..." 
                  className="bg-transparent border-none outline-none text-white w-full text-lg placeholder:text-slate-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="hidden sm:block px-8 h-12 bg-red-500 hover:bg-red-600 rounded-xl text-white font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. CATEGORY SECTION */}
        <section className="py-24 border-t border-slate-900">
          <SectionHeader 
            title="Industry Pillars" 
            subtitle="Explore specialized knowledge curated for each strategic sector of industrial skilling." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* 3. FEATURED ARTICLES */}
        <section className="py-24">
          <SectionHeader 
            title="Featured Publications" 
            subtitle="Deep dives into the technical and economic shifts defining the blue-collar workforce." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCES.slice(0, 3).map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </section>

        {/* 4. PROMOTIONAL BANNER */}
        <section className="py-12">
          <div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center p-8 lg:p-16">
            <img 
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
              alt="Promo Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent" />
            
            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Upskill for High-Demand <br />
                Mining & Metal Careers
              </h2>
              <p className="text-slate-300 text-lg">
                Join our certified programs designed by industry experts to master the future 
                of automated industrial labor.
              </p>
              <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold flex items-center gap-3 transition-transform hover:translate-x-2">
                Explore Programs <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 5. LATEST INSIGHTS SECTION */}
        <section className="py-24">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader 
              title="Latest Industrial Insights" 
              subtitle="The most recent reports and news from the global skilling landscape." 
            />
            <button className="hidden sm:flex items-center gap-2 text-white hover:text-red-400 transition-colors bg-white/5 px-6 py-2 rounded-lg border border-white/10 font-bold text-sm tracking-widest uppercase mb-12">
              View Browser <FileText className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {RESOURCES.map((res) => (
              <motion.div 
                key={res.id}
                whileHover={{ x: 10 }}
                className="group flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-red-500/30 hover:bg-slate-900/50 transition-all cursor-pointer"
              >
                <div className="w-full md:w-32 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={res.image} alt={res.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <span className="text-red-500/80">{res.category}</span>
                    <span>•</span>
                    <span>{res.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {res.title}
                  </h4>
                </div>
                <div className="flex items-center gap-4 text-slate-600 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowRight className="w-6 h-6 border p-1 rounded-full border-slate-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. FOOTER CTA */}
        <section className="py-24 border-t border-slate-900">
          <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-12 lg:p-20 text-center space-y-8 shadow-2xl shadow-red-500/20">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-none">
              READY TO MASTER YOUR <br />
              INDUSTRIAL FUTURE?
            </h2>
            <p className="text-red-100 text-xl max-w-2xl mx-auto font-medium">
              Join thousands of skilled professionals across India accelerating their careers 
              through PSU's enterprise-grade training infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-red-600 font-bold rounded-2xl text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl">
                Apply for Programs
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl text-lg hover:bg-white/10 transition-colors">
                Contact Advisory
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
