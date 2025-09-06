import React, { useState, useEffect, useRef } from "react";

interface Partner {
  name: string;
  logo: string;
  category: 'government' | 'industry' | 'education' | 'technology';
}

interface CategoryTheme {
  gradient: string;
  border: string;
  glow: string;
  accent: string;
}

interface FloatingOrbProps {
  size: string;
  color: string;
  position: React.CSSProperties;
  delay?: number;
}

interface PartnerCardProps {
  partner: Partner;
  index: number;
  isVisible: boolean;
}

const partners: Partner[] = [
  { name: "UGC", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/UGC.webp", category: "government" },
  { name: "NSDC", logo: "https://www.msu.edu.in/frontend_assets/images/Government-partners/govt-2.png", category: "government" },
  { name: "Sikkim", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/govt-of-sikkim.jpg", category: "government" },
  { name: "NAPS", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/NAPS.webp", category: "government" },
  { name: "NATS", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/NATS.webp", category: "government" },
  { name: "DGT", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/DGT.webp", category: "government" },
  { name: "Skill India", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Skill-India-min.webp", category: "government" },
  { name: "TTAADC", logo: "https://www.msu.edu.in/frontend_assets/images/Government-partners/govt-5.png", category: "government" },
  { name: "Film School", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/image-filem-school.jpg", category: "education" },
  { name: "iAce", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/iAce.png", category: "technology" },
  { name: "Crowne Plaza", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/Crowne_Plaza_logo_logotype.png", category: "industry" },
  { name: "Holiday Inn", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/HOLIDAY_INN_EXPRESS.png", category: "industry" },
  { name: "D23", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/d23-min.jpg", category: "industry" },
  { name: "Skilling-9", logo: "https://www.msu.edu.in/frontend_assets/images/industry-partners/skilling-9.png", category: "industry" },
  { name: "LCBS", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/LCBS.png", category: "education" },
  { name: "Don Bosco", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Don+Bosco+Image.webp", category: "education" },
  { name: "Emversity", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/website-images/emversity.jpg", category: "technology" },
  { name: "Logic Knots", logo: "https://msu-website-all-objects.s3.ap-south-1.amazonaws.com/logos/Logic-Knots.png", category: "technology" },
  { name: "Tech Partner 5", logo: "https://www.msu.edu.in/frontend_assets/images/technology-partners/tech-5.png", category: "technology" },
  { name: "Tech Partner 3", logo: "https://www.msu.edu.in/frontend_assets/images/technology-partners/tech-3.png", category: "technology" },
];

const categoryThemes: Record<Partner['category'], CategoryTheme> = {
  government: {
    gradient: "from-rose-500/30 via-rose-400/20 to-rose-500/30",
    border: "border-rose-400/40",
    glow: "shadow-rose-400/25",
    accent: "bg-rose-500"
  },
  industry: {
    gradient: "from-teal-500/30 via-teal-400/20 to-teal-500/30",
    border: "border-teal-400/40",
    glow: "shadow-teal-400/25",
    accent: "bg-teal-500"
  },
  education: {
    gradient: "from-rose-500/20 via-teal-500/15 to-rose-500/20",
    border: "border-rose-400/30",
    glow: "shadow-rose-400/20",
    accent: "bg-rose-500"
  },
  technology: {
    gradient: "from-teal-500/20 via-rose-500/15 to-teal-500/20",
    border: "border-teal-400/30",
    glow: "shadow-teal-400/20",
    accent: "bg-teal-500"
  }
};

const useIntersectionObserver = (options: IntersectionObserverInit = {}): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

const FloatingOrb: React.FC<FloatingOrbProps> = ({ size, color, position, delay = 0 }) => (
  <div
    className={`absolute ${size} ${color} rounded-full blur-3xl opacity-15 animate-pulse`}
    style={{
      ...position,
      animationDelay: `${delay}s`,
      animationDuration: `${4 + Math.random() * 4}s`
    }}
  />
);

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index }) => {
  const [cardRef, cardIsVisible] = useIntersectionObserver();
  const theme = categoryThemes[partner.category];
  
  return (
    <div
      ref={cardRef}
      className={`
        transform transition-all duration-1000 ease-out
        ${cardIsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`
        relative group cursor-pointer h-32
        bg-gradient-to-br ${theme.gradient}
        backdrop-blur-xl rounded-3xl ${theme.border}
        border-2 hover:border-gray-200/60
        hover:scale-[1.02] hover:${theme.glow}
        transition-all duration-700 ease-out
        overflow-hidden
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent
        before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500
        after:absolute after:inset-0 after:rounded-3xl
        after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
        after:translate-x-[-200%] after:skew-x-12 after:transition-transform after:duration-1000
        hover:after:translate-x-[200%]
      `}>
        {/* Animated corner accent */}
        <div className={`
          absolute top-0 right-0 w-8 h-8 ${theme.accent} 
          opacity-40 rounded-bl-2xl
          transform scale-0 group-hover:scale-100 origin-top-right
          transition-transform duration-500
        `} />
        
        {/* Main content */}
        <div className="relative z-20 h-full flex items-center justify-center p-6">
          <img
            src={partner.logo}
            alt={partner.name}
            className="
              max-h-16 w-auto object-contain
              filter brightness-90 contrast-110 grayscale
              group-hover:grayscale-0 group-hover:brightness-110
              transform group-hover:scale-110 group-hover:rotate-1
              transition-all duration-700 ease-out drop-shadow-lg
            "
            loading="lazy"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const nextElement = target.nextSibling as HTMLElement;
              if (nextElement) {
                nextElement.style.display = 'flex';
              }
            }}
          />
          <div className="hidden items-center justify-center h-16 w-20 bg-gray-800/80 backdrop-blur-sm rounded-xl text-gray-200 text-xs font-semibold text-center">
            {partner.name}
          </div>
        </div>
        
        {/* Floating tooltip */}
        <div className="
          absolute -top-14 left-1/2 transform -translate-x-1/2
          bg-gray-900/95 backdrop-blur-md text-gray-200 text-sm font-medium
          px-4 py-2 rounded-2xl border border-gray-200/20
          opacity-0 group-hover:opacity-100 
          translate-y-2 group-hover:translate-y-0
          transition-all duration-300 pointer-events-none 
          whitespace-nowrap z-30 shadow-2xl
        ">
          {partner.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95" />
        </div>

        {/* Subtle inner glow */}
        <div className="absolute inset-1 rounded-2xl bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

const PartnersLogos: React.FC = () => {
  const [sectionRef, sectionIsVisible] = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredPartners = activeFilter === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeFilter);

  const categories: string[] = ['all', ...new Set(partners.map(p => p.category))];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black to-black py-24 overflow-hidden">
      {/* Ethereal background effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Main ambient orbs */}
        <FloatingOrb 
          size="w-96 h-96" 
          color="bg-rose-500" 
          position={{ top: '10%', left: '5%' }} 
          delay={0}
        />
        <FloatingOrb 
          size="w-80 h-80" 
          color="bg-teal-500" 
          position={{ top: '20%', right: '10%' }} 
          delay={1.5}
        />
        <FloatingOrb 
          size="w-64 h-64" 
          color="bg-rose-400" 
          position={{ bottom: '25%', left: '15%' }} 
          delay={3}
        />
        <FloatingOrb 
          size="w-72 h-72" 
          color="bg-teal-400" 
          position={{ bottom: '10%', right: '20%' }} 
          delay={2}
        />

        {/* Smaller accent orbs */}
        {[...Array(8)].map((_, i) => (
          <FloatingOrb
            key={i}
            size="w-32 h-32"
            color={i % 2 === 0 ? "bg-rose-500" : "bg-teal-500"}
            position={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            delay={i * 0.7}
          />
        ))}

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-8xl mx-auto px-6 md:px-12">
        {/* Hero header with dramatic typography */}
        <div className={`
          text-center mb-20
          transform transition-all duration-1500 ease-out
          ${sectionIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}>
          <div className="relative inline-block">
            {/* <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-teal-400 to-rose-500 mb-8 tracking-tighter leading-none"> */}
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-white mb-8 tracking-tighter leading-none">
              Partners
            </h2>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-bounce opacity-60" />
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-r from-red-500 to-red-500 rounded-full animate-ping opacity-40" />
          </div>
          
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gray-200/60 to-transparent mx-auto mb-8 rounded-full" />
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
            Where Innovation Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-rose-400 font-semibold">Excellence</span>
          </p>
        </div>

        {/* Aesthetic category filters */}
        <div className={`
          flex flex-wrap justify-center gap-3 mb-16
          transform transition-all duration-1200 ease-out
          ${sectionIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `} style={{ transitionDelay: '300ms' }}>
          {categories.map((category) => {
            const isActive = activeFilter === category;
            const theme = categoryThemes[category as Partner['category']] || categoryThemes.government;
            
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  relative px-8 py-4 rounded-2xl font-semibold text-sm uppercase tracking-widest
                  transition-all duration-500 transform hover:scale-105 overflow-hidden
                  ${isActive 
                    ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg ${theme.glow} border ${theme.border}` 
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-200 hover:bg-gray-700/60 hover:text-white border border-gray-700/50'
                  }
                  before:absolute before:inset-0 before:bg-gradient-to-r 
                  before:from-transparent before:via-white/10 before:to-transparent
                  before:translate-x-[-100%] before:transition-transform before:duration-700
                  hover:before:translate-x-[100%]
                `}
              >
                <span className="relative z-10">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <span className="ml-2 text-xs opacity-60">
                    ({category === 'all' ? partners.length : partners.filter(p => p.category === category).length})
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Elegant statistics */}
        <div className={`
          grid grid-cols-2 md:grid-cols-4 gap-8 mb-20
          transform transition-all duration-1200 ease-out
          ${sectionIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `} style={{ transitionDelay: '500ms' }}>
          {Object.entries(
            partners.reduce((acc: Record<string, number>, partner) => {
              acc[partner.category] = (acc[partner.category] || 0) + 1;
              return acc;
            }, {})
          ).map(([category, count]) => {
            const theme = categoryThemes[category as Partner['category']];
            return (
              <div key={category} className="text-center group">
                <div className={`
                  relative inline-block p-6 rounded-3xl bg-gradient-to-br ${theme.gradient}
                  backdrop-blur-xl border-2 ${theme.border} hover:scale-105 transition-transform duration-500
                `}>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tabular-nums">
                    {sectionIsVisible ? count : 0}
                  </div>
                  <div className="text-gray-200 text-xs uppercase tracking-[0.2em] font-medium">
                    {category}
                  </div>
                  <div className={`absolute top-0 right-0 w-3 h-3 ${theme.accent} rounded-full opacity-60 animate-pulse`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium partners grid */}
        <div className={`
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6
          transform transition-all duration-1500 ease-out
          ${sectionIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        `} style={{ transitionDelay: '700ms' }}>
          {filteredPartners.map((partner, idx) => (
            <PartnerCard 
              key={`${partner.name}-${activeFilter}`}
              partner={partner} 
              index={idx} 
              isVisible={sectionIsVisible}
            />
          ))}
        </div>

        {/* Artistic footer */}
        <div className={`
          flex items-center justify-center mt-24 space-x-6
          transform transition-all duration-1500 ease-out
          ${sectionIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
        `} style={{ transitionDelay: '900ms' }}>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-500" />
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-to-r from-rose-500 to-teal-500 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-rose-500 to-teal-500 rounded-full animate-ping opacity-30" />
            </div>
            <div className="w-32 h-px bg-gradient-to-r from-rose-500 via-teal-500 to-rose-500" />
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-rose-500 rounded-full animate-pulse" />
              <div className="absolute -top-1 -left-1 w-5 h-5 border border-teal-500 rounded-full animate-spin opacity-40" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-teal-500 to-transparent" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};

export default PartnersLogos;