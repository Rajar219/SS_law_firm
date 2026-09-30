export default function Office() {
  return (
    <div style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="section-heading">Office Chamber</h2>
      <div className="card-luxury" style={{ marginTop: 'var(--space-12)' }}>
        <h4 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>Supreme Court of India</h4>
        <div className="divider-gold-short"></div>
        <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8, marginTop: 'var(--space-6)' }}>
          Chamber No. 214<br />
          Block D, Additional Building<br />
          Supreme Court of India<br />
          New Delhi – 110001
        </p>
        <p style={{ marginTop: 'var(--space-8)', color: 'var(--text-muted)' }}>
          <em>Consultations by appointment only.</em>
        </p>
      </div>
    </div>
  );
}
