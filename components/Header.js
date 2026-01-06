import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <div className="title-block">
          <h1 className="site-title"><Link href="/">Project Portfolio</Link></h1>
          <nav className="site-nav">
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


