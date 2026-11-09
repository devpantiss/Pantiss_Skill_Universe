import { lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import DeferredSection from '../components/common/DeferredSection';
const PlacementsShowcase = lazy(() => import('../components/common/PlacementsShowcaseSection'));

export default function Placements() {
  return <div><section className="placements-intro"><div className="site-shell"><p className="site-eyebrow">From learning to livelihood</p><h1>Skills that take<br />you forward.</h1><p>Explore placement pathways, meet our hiring partners, and see how industry-led training connects learning with opportunity.</p><div className="flex flex-wrap gap-3"><a className="site-button" href="#placement-outcomes">Explore placement outcomes<ArrowUpRight size={16} aria-hidden="true" /></a><Link className="site-button site-button-secondary" to="/contact-us">Talk to our team</Link></div></div></section><DeferredSection id="placement-outcomes"><PlacementsShowcase /></DeferredSection></div>;
}
