import { useRef, useState, type KeyboardEvent } from 'react';
import './inhouse-enterprises.css';
import { ArrowUpRight, BookOpen, BriefcaseBusiness, GraduationCap, MessagesSquare, Sparkles, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EnterpriseSolution {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  action: string;
  href?: string;

}

const solutions: EnterpriseSolution[] = [
  {
    name: 'Counselling',
    tagline: 'Find your direction.',
    description: 'Connect with our team to explore learning pathways and take your next step with confidence.',
    icon: MessagesSquare,
    features: ['Career guidance', 'Programme selection'],
    action: 'Speak to a counsellor',
    href: '/contact-us',
  },
  {
    name: 'LMS (AI & AR/VR)',
    tagline: 'Go beyond the classroom.',
    description: 'Explore AI-supported learning and immersive AR/VR experiences built around practical skills.',
    icon: Sparkles,
    features: ['Interactive learning', 'Immersive experiences'],
    action: 'Open learning platform',
    href: 'https://lms-seven-peach.vercel.app/login',
  },
  {
    name: 'GovPrep',
    tagline: 'Prepare with purpose.',
    description: 'A dedicated space for government exam preparation, study resources, and focused practice.',
    icon: BookOpen,
    features: ['Exam preparation', 'Practice & revision'],
    action: 'Coming soon',
  },
  {
    name: 'Job Search Engine',
    tagline: 'Turn skills into opportunity.',
    description: 'Explore job openings and connect your training with the next step in your career.',
    icon: BriefcaseBusiness,
    features: ['Job discovery', 'Career opportunities'],
    action: 'Explore jobs',
    href: 'https://job-search-client-ten.vercel.app/',
  },
  {
    name: 'Schools',
    tagline: 'Learn for your industry.',
    description: 'Discover specialised learning across mining, energy, logistics, construction, and emerging sectors.',
    icon: GraduationCap,
    features: ['Specialised schools', 'Industry-focused programmes'],
    action: 'Explore programmes',
    href: '/our-programmes',
  },
];

function EnterpriseAction({ solution }: { solution: EnterpriseSolution }) {
  if (!solution.href) return <span className="enterprise-coming-soon"><span aria-hidden="true" />Coming soon</span>;
  const content = <>{solution.action}<ArrowUpRight size={18} aria-hidden="true" /></>;
  return solution.href.startsWith('https://')
    ? <a className="enterprise-action" href={solution.href} target="_blank" rel="noopener noreferrer">{content}<span className="sr-only"> (opens in a new tab)</span></a>
    : <Link className="enterprise-action" to={solution.href}>{content}</Link>;
}

export default function InhouseEnterprises() {
  const [active, setActive] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const solution = solutions[active];
  const Icon = solution.icon;
  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % solutions.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + solutions.length - 1) % solutions.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = solutions.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };
  return (
    <section aria-labelledby="inhouse-enterprises-title" className="enterprise-section">
      <div className="enterprise-container">
        <header className="enterprise-heading">
          <div>
            <p className="enterprise-eyebrow"><span aria-hidden="true" />Our inhouse enterprises</p>
            <h2 id="inhouse-enterprises-title">Your ambition.<br /><span>Our ecosystem.</span></h2>
          </div>
          <div className="enterprise-heading-aside"><p>Five connected solutions.<br />A world of possibilities.</p><span>Choose your next step below.</span></div>
        </header>
        <div className="enterprise-workspace">
          <div className="enterprise-navigation">
            <div className="enterprise-navigation-caption"><span>Explore the ecosystem</span><span>01 — 05</span></div>
            <div className="enterprise-tabs" role="tablist" aria-label="Enterprise solutions" aria-orientation="vertical">
              {solutions.map((item, index) => {
                const TabIcon = item.icon;
                return <button key={item.name} id={`enterprise-tab-${index}`} ref={element => { tabRefs.current[index] = element; }} role="tab" aria-selected={active === index} aria-controls="enterprise-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => onTabKeyDown(event, index)}>
                  <span className="enterprise-tab-number" aria-hidden="true">0{index + 1}</span>
                  <TabIcon className="enterprise-tab-icon" size={22} strokeWidth={1.5} aria-hidden="true" />
                  <span className="enterprise-tab-copy"><strong>{item.name}</strong><span>{item.tagline}</span></span>
                  <ArrowUpRight className="enterprise-tab-arrow" size={18} aria-hidden="true" />
                </button>;
              })}
            </div>
            <p className="enterprise-navigation-note">Built around your journey.<br /><span>From first questions to new opportunities.</span></p>
          </div>
          <div id="enterprise-panel" className="enterprise-panel" role="tabpanel" aria-labelledby={`enterprise-tab-${active}`} tabIndex={0}>
            <div key={solution.name} className="enterprise-panel-inner">
              <div className="enterprise-visual" aria-hidden="true">
                <div className="enterprise-visual-grid" />
                <span className="enterprise-visual-label">PANTISS / CONNECTED POSSIBILITIES</span>
                <div className="enterprise-orbit enterprise-orbit-outer" /><div className="enterprise-orbit enterprise-orbit-inner" />
                <div className="enterprise-core"><Icon size={66} strokeWidth={1.15} /></div>
                <span className="enterprise-floating-label enterprise-floating-first">{solution.features[0]}</span>
                <span className="enterprise-floating-label enterprise-floating-second">{solution.features[1]}</span>
                <span className="enterprise-visual-index">0{active + 1}<span> / 05</span></span>
              </div>
              <div className="enterprise-detail">
                <p className="enterprise-eyebrow">{solution.name}</p>
                <h3>{solution.tagline}</h3>
                <p className="enterprise-description">{solution.description}</p>
                <EnterpriseAction solution={solution} />
              </div>
            </div>
          </div>
        </div>
        <div className="enterprise-bottom-line"><span>Guidance</span><span aria-hidden="true">↗</span><span>Learning</span><span aria-hidden="true">↗</span><span>Preparation</span><span aria-hidden="true">↗</span><span>Opportunity</span></div>
      </div>
    </section>
  );
}
