import { ArrowUpRight, MapPin, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SkillingProject } from './projects';
import './projects.css';

export default function ProjectCard({ project, preview = false }: { project: SkillingProject; preview?: boolean }) {
  return (
    <article id={preview ? undefined : project.id} className="project-card">
      <div className="project-image">
        <img src={project.image} alt={`${project.sector} sector`} loading="lazy" width="720" height="480" />
        <span className="project-tag">{project.sector}</span>
      </div>
      <div className="project-card-body">
        <p className="project-location"><MapPin size={14} aria-hidden="true" />{project.location}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {preview ? (
          <Link className="project-text-link" to={`/our-projects#${project.id}`}>Explore project <ArrowUpRight size={18} aria-hidden="true" /></Link>
        ) : (
          <details className="project-details">
            <summary>Explore focus areas <Plus size={18} aria-hidden="true" /></summary>
            <ul>{project.focus.map(focus => <li key={focus}>{focus}</li>)}</ul>
            <Link className="project-text-link" to="/contact-us">Enquire about this project <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </details>
        )}
      </div>
    </article>
  );
}
