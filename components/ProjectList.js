import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <section className="project-list">
      {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
    </section>
  );
}
