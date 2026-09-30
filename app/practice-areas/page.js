export default function PracticeAreas() {
  const areas = [
    "Constitutional Law",
    "Appellate Practice",
    "Civil Litigation",
    "Criminal Defense",
    "Corporate Disputes",
    "Administrative Law"
  ];

  return (
    <div style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 className="section-heading">Practice Areas</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 'var(--space-12)' }}>
        [The following categories are editable placeholders to be confirmed by the client.]
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
        {areas.map(area => (
          <div key={area} className="card-luxury">
            <h4>{area}</h4>
            <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
            <p>[Description of scope and representation in {area}.]</p>
          </div>
        ))}
      </div>
    </div>
  );
}
