export const metadata = {
  title: 'Legal Services',
  description: 'Comprehensive legal services including Dispute Resolution, Advisory & Strategy provided by SARAVANAN.N at the Supreme Court of India.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return (
    <div style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="section-heading">Legal Services</h2>
      <div className="card-luxury" style={{ marginTop: 'var(--space-12)' }}>
        <h4>Comprehensive Representation</h4>
        <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
        <p>
          [Details regarding specialized legal services, advisory, and court representation to be provided by the client.]
        </p>
      </div>
    </div>
  );
}
