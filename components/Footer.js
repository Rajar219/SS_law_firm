import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{
      borderTop: '1px solid var(--border-dark)',
      padding: 'var(--space-12) var(--space-8)',
      backgroundColor: 'var(--bg-secondary)',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--space-8)',
        color: 'var(--text-light-muted)'
      }}>
        
        <div>
          <h4 style={{ color: 'var(--gold-soft)', marginBottom: 'var(--space-4)', letterSpacing: '0.1em', fontSize: 'var(--text-sm)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Chamber</h4>
          <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8 }}>
            Chamber No. 214<br />
            Block D, Additional Building<br />
            Supreme Court of India<br />
            New Delhi – 110001
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--gold-soft)', marginBottom: 'var(--space-4)', letterSpacing: '0.1em', fontSize: 'var(--text-sm)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Contact</h4>
          <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8 }}>
            <a href="tel:+916381528329" style={{ display: 'block', marginBottom: '0.5rem' }}>+91 6381528329</a>
            <a href="mailto:advocatesaravananlaw@gmail.com" style={{ display: 'block' }}>advocatesaravananlaw@gmail.com</a>
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--gold-soft)', marginBottom: 'var(--space-4)', letterSpacing: '0.1em', fontSize: 'var(--text-sm)', textTransform: 'uppercase', fontFamily: 'var(--font-inter)' }}>Legal</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: 'var(--text-sm)' }}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Disclaimer</Link>
          </nav>
        </div>

      </div>
      
      <div style={{
        maxWidth: '1200px',
        margin: 'var(--space-12) auto 0',
        paddingTop: 'var(--space-6)',
        borderTop: '1px solid var(--border-dark)',
        textAlign: 'center',
        fontSize: 'var(--text-xs)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        &copy; {year} SARAVANAN.N, Advocate, Supreme Court of India. All rights reserved.
      </div>
    </footer>
  );
}
