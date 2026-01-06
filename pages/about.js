import SkillBadge from '../components/SkillBadge';

export default function About() {
  const skills = ['GoLang', 'Python3', 'Docker', 'AWS'];
  return (
    <div>
      <h2>About</h2>
      <p>Backend engineer</p>
      <h3>Skills</h3>
      <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
        {skills.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
      </div>
      <h3>Current topics of study</h3>
      <ul>
        <li>Link to notebooks</li>
        <li>One</li>
        <li>Two</li>
      </ul>
    </div>
  );
}
