import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function GalleryShowcase() {
  return <section className="site-shell py-16" aria-labelledby="field-stories-title"><div className="fleet-gallery-note"><div><p className="site-eyebrow">From the field</p><h2 id="field-stories-title">A closer look at mobile training.</h2><p>Contact our team for photographs and details from our Skill on Wheels programmes.</p></div><Link className="site-button" to="/contact-us">Connect with our team<ArrowUpRight size={16} aria-hidden="true" /></Link></div></section>;
}
