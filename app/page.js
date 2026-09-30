import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="hero-watermark">SS</div>
        
        <div className="hero-content">
          <div className="hero-logo-small animate-fade-up delay-100">SS</div>
          
          <h1 className="hero-title animate-fade-up delay-200">
            SARAVANAN.N
          </h1>
          
          <h2 className="hero-subtitle animate-fade-up delay-300">
            Advocate, Supreme Court of India
          </h2>
          
          <div className="divider-gold-short animate-fade-up delay-400" style={{ margin: '0 auto var(--space-8)' }}></div>
          
          <p className="hero-copy animate-fade-up delay-500">
            Providing premium legal counsel and dedicated representation before the highest courts. 
            A practice built on rigorous analysis, strategic foresight, and an unwavering commitment to justice.
          </p>

          <div className="hero-ctas animate-fade-up delay-600">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/practice-areas" className="btn-secondary">
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-intro">
        <div className="container">
          <h2 className="section-heading">The Chamber</h2>
          <p className="intro-text">
            Operating from the Supreme Court of India, SARAVANAN.N provides sophisticated legal representation and advisory services. 
            The practice is dedicated to handling complex legal matters with integrity, ensuring that each client receives focused, 
            strategic, and highly professional counsel.
          </p>
        </div>
      </section>

      {/* 3. PRACTICE AREAS */}
      <section className="section-ivory" id="practice-areas">
        <div className="container">
          <h2 className="section-heading" style={{ color: 'var(--bg-dark)' }}>Practice Areas</h2>
          <p className="section-subheading">
            [The following categories are placeholders for primary areas of practice. Final categories to be verified by the client.]
          </p>
          
          <div className="grid-3">
            {[
              { title: "Constitutional Law", desc: "Representation in writ petitions, fundamental rights enforcement, and constitutional challenges before the Apex Court." },
              { title: "Appellate Practice", desc: "Handling complex civil and criminal appeals, special leave petitions, and statutory appeals from tribunals." },
              { title: "Commercial Disputes", desc: "Advising and representing clients in high-stakes corporate litigation and arbitration matters." },
              { title: "Administrative Law", desc: "Challenging arbitrary state action and navigating complex regulatory and administrative frameworks." },
              { title: "Civil Litigation", desc: "Comprehensive strategy and representation in original civil suits, property disputes, and injunctions." },
              { title: "Criminal Defense", desc: "Providing robust defense in complex criminal trials, bail applications, and quashing petitions." }
            ].map((area, idx) => (
              <div key={idx} className="card-luxury" style={{ backgroundColor: 'var(--white-warm)', borderColor: 'rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: 'var(--bg-dark)' }}>{area.title}</h4>
                <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
                <p style={{ color: 'var(--text-muted)' }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL APPROACH */}
      <section className="section-approach">
        <div className="container">
          <h2 className="section-heading">Professional Approach</h2>
          <div className="grid-3">
            <div className="approach-card">
              <h3 className="approach-title">Counsel</h3>
              <p>Providing clear, objective, and legally sound advice to help clients navigate complex regulatory environments and mitigate potential liabilities.</p>
            </div>
            <div className="approach-card">
              <h3 className="approach-title">Advisor</h3>
              <p>Offering strategic foresight in negotiations, dispute resolution, and corporate governance to protect client interests before litigation arises.</p>
            </div>
            <div className="approach-card">
              <h3 className="approach-title">Litigator</h3>
              <p>Delivering rigorous courtroom representation, focusing on meticulous preparation and persuasive advocacy before the Supreme Court and high courts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEGAL SERVICES */}
      <section className="section-ivory">
        <div className="container">
          <h2 className="section-heading" style={{ color: 'var(--bg-dark)' }}>Legal Services</h2>
          <div className="grid-2">
            <div className="card-luxury" style={{ backgroundColor: 'var(--white-warm)', borderColor: 'rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--bg-dark)' }}>Dispute Resolution</h4>
              <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
              <p style={{ color: 'var(--text-muted)' }}>
                Comprehensive handling of civil, commercial, and constitutional disputes. 
                Our approach emphasizes thorough case preparation, strategic filing, and robust representation throughout the judicial process.
              </p>
            </div>
            <div className="card-luxury" style={{ backgroundColor: 'var(--white-warm)', borderColor: 'rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--bg-dark)' }}>Advisory & Strategy</h4>
              <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
              <p style={{ color: 'var(--text-muted)' }}>
                Providing preemptive legal risk analysis and compliance counseling. 
                We assist individuals and organizations in structuring their affairs to align strictly with prevailing statutory and constitutional mandates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFFICE / CHAMBER & 7. CONTACT & CTA */}
      <section className="section-office">
        <div className="container">
          <div className="grid-2 align-center">
            
            <div className="office-details">
              <h2 className="section-heading" style={{ textAlign: 'left' }}>Office Chamber</h2>
              <div className="card-luxury">
                <h3 style={{ color: 'var(--white-warm)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>Supreme Court of India</h3>
                <div className="divider-gold-short"></div>
                <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8, marginTop: 'var(--space-6)', color: 'var(--text-light)' }}>
                  Chamber No. 214<br />
                  Block D, Additional Building<br />
                  Supreme Court of India<br />
                  New Delhi – 110001
                </p>
                
                <div className="contact-methods" style={{ marginTop: 'var(--space-8)' }}>
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <span className="contact-label">Direct Mobile</span>
                    <a href="tel:+916381528329" className="contact-link">+91 6381528329</a>
                  </div>
                  <div>
                    <span className="contact-label">Electronic Mail</span>
                    <a href="mailto:advocatesaravananlaw@gmail.com" className="contact-link" style={{ fontSize: 'var(--text-base)' }}>advocatesaravananlaw@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="office-visual">
              <div className="map-placeholder">
                <div className="map-icon">SS</div>
                <p>Interactive Map Integration Placeholder</p>
                <Link href="/contact" className="btn-primary" style={{ marginTop: 'var(--space-6)' }}>
                  Request Chamber Appointment
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        /* Shared Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-24) var(--space-8);
        }

        /* Hero */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: calc(var(--space-24) + 60px) var(--space-8) var(--space-24);
          background-color: var(--bg-dark);
          overflow: hidden;
          text-align: center;
        }

        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(8, 9, 11, 0.9), rgba(8, 9, 11, 0.95)),
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(201, 162, 39, 0.02) 20px, rgba(201, 162, 39, 0.02) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(201, 162, 39, 0.01) 20px, rgba(201, 162, 39, 0.01) 40px);
          z-index: 1;
        }

        .hero-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-playfair), serif;
          font-size: 50vw;
          line-height: 1;
          color: rgba(201, 162, 39, 0.03);
          z-index: 2;
          pointer-events: none;
          white-space: nowrap;
          user-select: none;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          width: 100%;
        }

        .hero-logo-small {
          font-family: var(--font-playfair), serif;
          font-size: var(--text-2xl);
          color: var(--gold-primary);
          margin-bottom: var(--space-8);
          letter-spacing: 0.2em;
        }

        .hero-title {
          font-size: var(--text-6xl);
          letter-spacing: 0.15em;
          color: var(--white-warm);
          text-transform: uppercase;
          margin-bottom: var(--space-4);
        }

        .hero-subtitle {
          font-family: var(--font-inter), sans-serif;
          font-size: var(--text-lg);
          letter-spacing: 0.3em;
          color: var(--gold-soft);
          text-transform: uppercase;
          margin-bottom: var(--space-8);
          font-weight: 300;
        }

        .hero-copy {
          font-size: var(--text-lg);
          color: var(--text-light-muted);
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto var(--space-12);
          font-weight: 300;
        }

        .hero-ctas {
          display: flex;
          gap: var(--space-6);
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Introduction */
        .section-intro {
          background-color: var(--bg-secondary);
          text-align: center;
        }

        .intro-text {
          font-size: var(--text-xl);
          line-height: 1.8;
          color: var(--text-light-muted);
          max-width: 800px;
          margin: 0 auto;
          font-weight: 300;
        }

        /* Practice Areas & General Ivory */
        .section-ivory {
          background-color: var(--ivory);
          color: var(--text-dark);
        }

        .section-subheading {
          text-align: center;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto var(--space-12);
          font-style: italic;
        }

        /* Approach */
        .section-approach {
          background-color: var(--bg-dark);
          text-align: center;
        }

        .approach-card {
          padding: var(--space-8);
          border-left: 1px solid var(--border-dark);
          text-align: left;
        }

        .approach-title {
          font-family: var(--font-playfair), serif;
          font-size: var(--text-2xl);
          color: var(--white-warm);
          margin-bottom: var(--space-4);
        }

        .approach-card p {
          color: var(--text-light-muted);
          line-height: 1.8;
        }

        /* Office & Contact */
        .section-office {
          background-color: var(--bg-secondary);
        }

        .contact-label {
          display: block;
          font-size: var(--text-xs);
          color: var(--gold-soft);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-1);
        }

        .contact-link {
          font-size: var(--text-xl);
          color: var(--white-warm);
          display: inline-block;
        }

        .contact-link:hover {
          color: var(--gold-primary);
        }

        .map-placeholder {
          background-color: var(--bg-dark);
          border: 1px solid var(--border-dark);
          height: 100%;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          border-radius: var(--radius-md);
        }

        .map-icon {
          font-family: var(--font-playfair), serif;
          font-size: var(--text-4xl);
          color: rgba(201, 162, 39, 0.2);
          margin-bottom: var(--space-4);
        }

        /* Grids */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }

        .align-center {
          align-items: center;
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        @media (max-width: 1024px) {
          .grid-3 { grid-template-columns: 1fr 1fr; }
          .approach-card { border-left: none; border-bottom: 1px solid var(--border-dark); padding: var(--space-6) 0; }
        }

        @media (max-width: 768px) {
          .container { padding: var(--space-16) var(--space-4); }
          .grid-2, .grid-3 { grid-template-columns: 1fr; }
          
          .hero-title { font-size: var(--text-4xl); letter-spacing: 0.1em; }
          .hero-subtitle { font-size: var(--text-xs); letter-spacing: 0.15em; line-height: 1.6; }
          .hero-copy { font-size: var(--text-base); }
          .hero-ctas { flex-direction: column; width: 100%; gap: var(--space-4); }
          .hero-ctas a { width: 100%; }

          .office-details .section-heading { text-align: center !important; }
          .office-details .card-luxury { text-align: center; }
          .office-details .divider-gold-short { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </>
  );
}
