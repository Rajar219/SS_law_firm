import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'var(--space-12) var(--space-4)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background monogram for texture */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '40vw',
          fontFamily: 'var(--font-playfair), serif',
          color: 'rgba(201, 162, 39, 0.03)',
          zIndex: 0,
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
        }}>
          SS
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <h1 style={{ marginBottom: 'var(--space-4)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            SARAVANAN.N
          </h1>
          <h2 style={{ color: 'var(--gold-soft)', fontSize: 'var(--text-xl)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 'var(--space-8)' }}>
            Advocate, Supreme Court of India
          </h2>
          
          <div className="divider-gold-short" style={{ margin: '0 auto var(--space-8)' }}></div>
          
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-light-muted)', marginBottom: 'var(--space-12)', lineHeight: 1.8 }}>
            Dedicated legal representation before the highest courts. A practice built on rigorous analysis, strategic foresight, and an unwavering commitment to the law.
          </p>

          <div style={{ display: 'flex', gap: 'var(--space-6)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/office" className="btn-secondary">
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
