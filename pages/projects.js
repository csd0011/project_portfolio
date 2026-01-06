import projects from '../data/projects';
import ProjectList from '../components/ProjectList';

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectList projects={projects} />
    </div>
  );
}
