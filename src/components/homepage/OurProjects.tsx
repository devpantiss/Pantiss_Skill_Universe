import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '../projects/projects';

export default function OurProjects() {
  return (
    <section className="projects-theme projects-section" aria-labelledby="home-projects-title">
      <div className="projects-container">
        <div className="projects-section-heading">
          <div><p className="projects-eyebrow">Learning into opportunity</p><h2 id="home-projects-title">Our Projects<span className="projects-accent">.</span></h2><p className="projects-intro">Discover the skilling initiatives connecting people, industries, and possibilities across Odisha.</p></div>
          <Link className="projects-button" to="/our-projects">View all projects <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="projects-grid">{projects.slice(0, 3).map(project => <ProjectCard key={project.id} project={project} preview />)}</div>
      </div>
    </section>
  );
}
