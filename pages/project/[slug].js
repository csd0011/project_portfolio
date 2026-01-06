import projects from '../../data/projects';

export async function getStaticPaths() {
  const paths = projects.map(p => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  return (
    <article>
      <h2>{project.title}</h2>
      <p><strong>Date:</strong> {project.date}</p>
      <div dangerouslySetInnerHTML={{ __html: project.long }} />
      <p>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a> ·{' '}
        <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </p>
    </article>
  );
}
