import Link from 'next/link';

export default function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <h3><Link href={`/project/${p.slug}`}>{p.title}</Link></h3>
      <p>{p.summary}</p>
      <p>
        <strong>Tech:</strong> {p.tech.join(', ')}
      </p>
      <p>
        <a href={p.repo} target="_blank" rel="noopener noreferrer">Code</a> ·{' '}
        <a href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </p>
    </article>
  );
}
