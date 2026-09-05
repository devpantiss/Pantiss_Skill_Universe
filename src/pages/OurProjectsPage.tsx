import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowUpRight, Filter, GraduationCap, MapPin, Search } from 'lucide-react';
import { projects, type SkillingProject, type ProjectStatus } from '../components/projects/projects';
import '../components/projects/portfolio.css';

const statusFilters = [
  { value: 'all', label: 'All projects' },
  { value: 'completed', label: 'Completed' },
  { value: 'ongoing', label: 'Ongoing' },
] as const;

function PortfolioCard({ project }: { project: SkillingProject }) {
  const number = String(projects.findIndex(item => item.id === project.id) + 1).padStart(2, '0');
  return (
    <article id={project.id} className="portfolio-card">
      <div className="portfolio-card-image">
        <img src={project.image} alt={`${project.sector} sector`} width="720" height="400" loading="lazy" />
        <span className="portfolio-number">{number}</span>
        <span className="portfolio-badge">{project.status === 'completed' ? 'Completed' : project.status === 'ongoing' ? 'Ongoing' : 'Skilling initiative'}</span>
      </div>
      <div className="portfolio-card-content">
        <p className="portfolio-category"><GraduationCap size={16} aria-hidden="true" />{project.sector}</p>
        <h2>{project.title}</h2>
        <dl className="portfolio-metadata">
          <div><dt>Location</dt><dd><MapPin size={12} aria-hidden="true" />{project.location}</dd></div>
          <div><dt>Focus</dt><dd>{project.focus[0]}</dd></div>
          <div><dt>Approach</dt><dd>Sector-focused skilling</dd></div>
        </dl>
        <p className="portfolio-description">{project.description}</p>
        <Link className="portfolio-card-link" to={`/contact-us?project=${project.id}`}>Discuss a similar project <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}

export default function OurProjectsPage() {
  const [sector, setSector] = useState('All');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'all' | ProjectStatus>('all');
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'center' }));
    return () => cancelAnimationFrame(frame);
  }, [hash]);
  const resetFilters = () => { setSector('All'); setQuery(''); setStatus('all'); };
  // Publication statuses have not been supplied for these project profiles.
  const visibleProjects = projects.filter(project =>
    (sector === 'All' || project.sector === sector) &&
    `${project.title} ${project.location} ${project.sector}`.toLowerCase().includes(query.trim().toLowerCase()) &&
    (status === 'all' || project.status === status)
  );
  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        <header className="portfolio-heading">
          <div><p className="portfolio-eyebrow">Selected profiles</p><h1>Project portfolio</h1></div>
          <p>Explore Pantiss’s skilling initiatives by sector and location. Discover the projects connecting learning with opportunity.</p>
        </header>
        <div className="portfolio-status-tabs" role="group" aria-label="Filter projects by status">
          {statusFilters.map(filter => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={status === filter.value}
              aria-controls="portfolio-results"
              onClick={() => setStatus(filter.value)}
            >
              {filter.label}
              <span>{projects.filter(project => filter.value === 'all' || project.status === filter.value).length}</span>
            </button>
          ))}
        </div>
        <div className="portfolio-layout">
          <aside className="portfolio-sidebar" aria-labelledby="portfolio-filter-heading">
            <div className="portfolio-filter-heading"><span><Filter size={20} aria-hidden="true" /></span><div><h2 id="portfolio-filter-heading">Filter projects</h2><p>Refine the portfolio</p></div></div>
            <label className="portfolio-field-label" htmlFor="project-search">Search</label>
            <div className="portfolio-search"><Search size={17} aria-hidden="true" /><input id="project-search" type="search" placeholder="Project or location" value={query} onChange={event => setQuery(event.target.value)} /></div>
            <fieldset className="portfolio-categories"><legend>Project category</legend>{['All', ...projects.map(project => project.sector)].map(item => (
              <label key={item}><input type="radio" name="project-category" checked={sector === item} onChange={() => setSector(item)} /><span>{item}</span><small>{item === 'All' ? projects.length : projects.filter(project => project.sector === item).length}</small></label>
            ))}</fieldset>
            <button className="portfolio-reset" type="button" onClick={resetFilters}>Reset filters</button>
          </aside>
          <section id="portfolio-results" aria-label="Project profiles" className="portfolio-results">
            <div className="portfolio-results-bar"><p role="status"><strong>{visibleProjects.length}</strong> project {visibleProjects.length === 1 ? 'profile' : 'profiles'}</p><span>{sector === 'All' ? 'All capabilities' : sector}</span></div>
            <div className="portfolio-grid">{visibleProjects.map(project => <PortfolioCard key={project.id} project={project} />)}</div>
            {visibleProjects.length === 0 && <div className="portfolio-empty"><Search size={28} aria-hidden="true" /><h2>No matching projects</h2><p>{status !== 'all' && !projects.some(project => project.status === status) ? `No projects are marked ${status} yet.` : 'Try a different project name, location, or category.'}</p><button type="button" onClick={resetFilters}>Clear filters</button></div>}
          </section>
        </div>
      </div>
    </main>
  );
}
