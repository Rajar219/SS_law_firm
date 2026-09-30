export default function Contact() {
  return (
    <div style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: '800px', margin: '0 auto' }}>
      <h2 className="section-heading">Contact</h2>
      <div className="card-luxury" style={{ marginTop: 'var(--space-12)' }}>
        <h4>Direct Communication</h4>
        <div className="divider-gold-short"></div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
          <div>
            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Mobile</span>
            <a href="tel:+916381528329" style={{ display: 'block', fontSize: 'var(--text-xl)', color: 'var(--white-warm)', marginTop: 'var(--space-1)' }}>
              +91 6381528329
            </a>
          </div>
          
          <div>
            <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</span>
            <a href="mailto:advocatesaravananlaw@gmail.com" style={{ display: 'block', fontSize: 'var(--text-lg)', color: 'var(--white-warm)', marginTop: 'var(--space-1)' }}>
              advocatesaravananlaw@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
