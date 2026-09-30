import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Subtle Architectural / Court Overlay Pattern */}
        <div className="hero-bg-pattern"></div>
        
        {/* SS Monogram Watermark */}
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

      {/* ADDITIONAL SECTIONS (Placeholder for future content) */}
      <section className="section-ivory" style={{ padding: 'var(--space-24) var(--space-8)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ color: 'var(--bg-dark)' }}>Excellence in Legal Practice</h2>
          <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
            Operating from the Supreme Court of India, the chamber specializes in complex appellate litigation, constitutional matters, and strategic advisory.
          </p>
        </div>
      </section>

      <style jsx>{`
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

        /* Architectural / Court Pattern Overlay */
        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(8, 9, 11, 0.9), rgba(8, 9, 11, 0.95)),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              rgba(201, 162, 39, 0.02) 20px,
              rgba(201, 162, 39, 0.02) 40px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 20px,
              rgba(201, 162, 39, 0.01) 20px,
              rgba(201, 162, 39, 0.01) 40px
            );
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

        @media (max-width: 768px) {
          .hero-title { font-size: var(--text-4xl); letter-spacing: 0.1em; }
          .hero-subtitle { font-size: var(--text-xs); letter-spacing: 0.15em; line-height: 1.6; }
          .hero-copy { font-size: var(--text-base); }
          .hero-ctas { flex-direction: column; width: 100%; gap: var(--space-4); }
          .hero-ctas a { width: 100%; }
        }
      `}</style>
    </>
  );
}
