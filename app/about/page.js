export default function About() {
  return (
    <div style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="section-heading">Advocate Profile</h2>
      <div className="card-luxury" style={{ marginTop: 'var(--space-12)' }}>
        <h3 style={{ color: 'var(--gold-soft)', marginBottom: 'var(--space-2)' }}>SARAVANAN.N</h3>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
          Advocate, Supreme Court of India
        </p>
        <div className="divider-gold-short"></div>
        <p style={{ color: 'var(--text-light-muted)', lineHeight: 1.8 }}>
          Operating from the Supreme Court of India, SARAVANAN.N provides sophisticated legal representation and advisory services. The practice is dedicated to handling complex legal matters with integrity, ensuring that each client receives focused, strategic, and highly professional counsel.
        </p>
      </div>
    </div>
  );
}
