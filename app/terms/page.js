export default function Terms() {
  return (
    <div style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="section-heading">Terms & Disclaimer</h2>
      <div className="card-luxury" style={{ marginTop: 'var(--space-12)' }}>
        <h4>Legal Disclaimer</h4>
        <div className="divider-gold-short"></div>
        <p>
          The information provided on this website is for general informational purposes only and does not constitute legal advice. 
          Accessing this website or communicating with the chamber does not create an attorney-client relationship.
        </p>
        <p style={{ marginTop: 'var(--space-4)' }}>
          [Additional compliance terms as per Bar Council of India guidelines to be added.]
        </p>
      </div>
    </div>
  );
}
