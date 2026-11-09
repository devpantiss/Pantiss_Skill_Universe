import BrandLogo from "./BrandLogo";
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return <footer className="site-footer"><div className="site-shell">
    <div className="site-footer-grid">
      <div className="site-footer-brand"><Link to="/" aria-label="Pantiss Skill Universe home"><BrandLogo loading="lazy" /></Link><p>Industry-led learning.<br />Skills that open new possibilities.</p><Link className="site-footer-contact" to="/contact-us">Start a conversation<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      <nav aria-label="Learning links"><h2>Learn with Pantiss</h2><Link to="/our-programmes">Explore programmes</Link><Link to="/our-programmes/iti-program">Industrial training</Link><Link to="/our-programmes/diploma-programs">Diploma programmes</Link><Link to="/futuristic-skill-on-wheels">Skill on Wheels</Link><Link to="/placements">Placements & careers</Link></nav>
      <nav aria-label="Organisation links"><h2>Our universe</h2><Link to="/about">About Pantiss</Link><Link to="/our-projects">Our projects</Link><Link to="/collaborations">Collaborations</Link><Link to="/careers">Join our team</Link><Link to="/resources">Resources</Link><Link to="/skill-dashboard">Skill dashboard</Link></nav>
      <div><h2>Visit us</h2><address>1215/1500, Skill Education Hub<br />Khandagiri Bari, Bhubaneswar<br />Odisha, India · 751030</address><Link to="/contact-us">Office & campus contacts<ArrowUpRight size={14} aria-hidden="true" /></Link></div>
    </div><div className="site-footer-bottom"><span>© {new Date().getFullYear()} Pantiss Skill Universe</span><span>Learn. Upskill. Empower.</span><a href="#main-content">Back to top ↑</a></div>
  </div></footer>;
}
