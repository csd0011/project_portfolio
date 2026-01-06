import projects from '../data/projects';
import ProjectList from '../components/ProjectList';

export default function Home() {
  const featured = projects.slice(0, 2);
  return (
    <div>
      <section className="top">
        <h2>Engineering Portfolio</h2>
        <p>technical write-ups, and deployable demos.</p>
      </section>

      <section>
        <h3>Featured projects</h3>
        <ProjectList projects={featured} />
        <p><a href="/projects">See all projects</a></p>
      </section>
    </div>
  );
}
