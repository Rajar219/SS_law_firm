import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ 
      padding: 'var(--space-6) var(--space-8)', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '1px solid var(--border-dark)',
      backgroundColor: 'var(--bg-dark)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'var(--text-xl)', color: 'var(--gold-primary)', letterSpacing: '0.1em' }}>
        <Link href="/">SS</Link>
      </div>
      <nav style={{ display: 'flex', gap: 'var(--space-6)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/practice-areas" className="nav-link">Practice Areas</Link>
        <Link href="/services" className="nav-link">Services</Link>
        <Link href="/approach" className="nav-link">Approach</Link>
        <Link href="/office" className="nav-link">Office</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </nav>
      <style>{`
        .nav-link {
          color: var(--text-light-muted);
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--gold-soft);
        }
        @media (max-width: 1024px) {
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
