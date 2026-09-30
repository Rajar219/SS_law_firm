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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
        {areas.map(area => (
          <div key={area} className="card-luxury">
            <h4>{area}</h4>
            <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
            <p>Providing strategic representation and advisory services in matters relating to {area}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
