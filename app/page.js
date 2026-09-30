import Link from 'next/link';
import Image from 'next/image';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundColor: 'var(--bg-dark)' }}>
          <Image 
            src="/hero-sketch-compressed.jpg" 
            alt="Supreme Court Architecture Sketch"
            fill
            priority
            sizes="100vw"
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center 20%', opacity: 0.6 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8, 9, 11, 0.6), rgba(8, 9, 11, 1))' }}></div>
        </div>

        <div className="hero-content">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
            <Image src="/logo_transparent.png" alt="SS Logo" width={140} height={140} priority style={{ objectFit: 'contain' }} />
          </div>

          <h1 className="hero-title">
            SARAVANAN.N
          </h1>

          <h2 className="hero-subtitle">
            Advocate, Supreme Court of India
          </h2>

          <div className="divider-gold-short" style={{ margin: '0 auto var(--space-8)' }}></div>

          <p className="hero-copy">
            Providing premium legal counsel and dedicated representation before the highest courts.
            A practice built on rigorous analysis, strategic foresight, and an unwavering commitment to justice.
          </p>

          <div className="hero-ctas">
            <a href="https://wa.me/916381528329?text=Hello%20Mr.%20Saravanan%2C%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.%20I%20would%20like%20to%20discuss%20my%20legal%20matter%20with%20you." target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Consultation
            </a>
            <Link href="/practice-areas" className="btn-secondary">
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="section-intro">
        <Reveal delay={100}>
          <div className="container">
            <h2 className="section-heading">The Chamber</h2>
            <p className="intro-text">
              Operating from the Supreme Court of India, SARAVANAN.N provides sophisticated legal representation and advisory services.
              The practice is dedicated to handling complex legal matters with integrity, ensuring that each client receives focused,
              strategic, and highly professional counsel.
            </p>
            <Reveal delay={300}>
              <div className="profile-banner"></div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* 3. PRACTICE AREAS */}
      <section className="section-ivory" id="practice-areas">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="section-heading" style={{ color: 'var(--bg-dark)' }}>Practice Areas</h2>
          </Reveal>

          <div className="grid-3">
            {[
              { title: "Constitutional Law", desc: "Representation in writ petitions, fundamental rights enforcement, and constitutional challenges before the Apex Court." },
              { title: "Appellate Practice", desc: "Handling complex civil and criminal appeals, special leave petitions, and statutory appeals from tribunals." },
              { title: "Commercial Disputes", desc: "Advising and representing clients in high-stakes corporate litigation and arbitration matters." },
              { title: "Administrative Law", desc: "Challenging arbitrary state action and navigating complex regulatory and administrative frameworks." },
              { title: "Civil Litigation", desc: "Comprehensive strategy and representation in original civil suits, property disputes, and injunctions." },
              { title: "Criminal Defense", desc: "Providing robust defense in complex criminal trials, bail applications, and quashing petitions." }
            ].map((area, idx) => (
              <Reveal key={idx} delay={150 * (idx % 3)}>
                <div className="card-luxury" style={{ backgroundColor: 'var(--white-warm)', borderColor: 'rgba(0,0,0,0.1)' }}>
                  <h4 style={{ color: 'var(--bg-dark)' }}>{area.title}</h4>
                  <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
                  <p style={{ color: 'var(--text-muted)' }}>{area.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL APPROACH */}
      <section className="section-approach">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="section-heading">Professional Approach</h2>
          </Reveal>
          <div className="grid-3">
            <Reveal delay={200}>
              <div className="approach-card">
                <h3 className="approach-title">Counsel</h3>
                <p>Providing clear, objective, and legally sound advice to help clients navigate complex regulatory environments and mitigate potential liabilities.</p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="approach-card">
                <h3 className="approach-title">Advisor</h3>
                <p>Offering strategic foresight in negotiations, dispute resolution, and corporate governance to protect client interests before litigation arises.</p>
              </div>
            </Reveal>
            <Reveal delay={600}>
              <div className="approach-card">
                <h3 className="approach-title">Litigator</h3>
                <p>Delivering rigorous courtroom representation, focusing on meticulous preparation and persuasive advocacy before the Supreme Court and high courts.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. LEGAL SERVICES */}
      <section className="section-ivory">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="section-heading" style={{ color: 'var(--bg-dark)' }}>Legal Services</h2>
          </Reveal>
          <div className="grid-2">
            <Reveal delay={200}>
              <div className="card-luxury" style={{ backgroundColor: 'var(--white-warm)', borderColor: 'rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: 'var(--bg-dark)' }}>Dispute Resolution</h4>
                <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
                <p style={{ color: 'var(--text-muted)' }}>
                  Comprehensive handling of civil, commercial, and constitutional disputes.
                  Our approach emphasizes thorough case preparation, strategic filing, and robust representation throughout the judicial process.
                </p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="card-luxury" style={{ backgroundColor: 'var(--white-warm)', borderColor: 'rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: 'var(--bg-dark)' }}>Advisory & Strategy</h4>
                <div className="divider-gold-short" style={{ margin: 'var(--space-4) 0' }}></div>
                <p style={{ color: 'var(--text-muted)' }}>
                  Providing preemptive legal risk analysis and compliance counseling.
                  We assist individuals and organizations in structuring their affairs to align strictly with prevailing statutory and constitutional mandates.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. OFFICE / CHAMBER & 7. CONTACT & CTA */}
      <section className="section-office">
        <div className="container">
          <div className="grid-2 align-center">

            <Reveal delay={100}>
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
            </Reveal>

            <Reveal delay={300}>
              <div className="office-visual">
                <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight="0" 
                    marginWidth="0" 
                    src="https://maps.google.com/maps?q=Supreme%20Court%20of%20India,%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0, minHeight: '400px', filter: 'grayscale(100%) contrast(120%)' }}
                    title="Office Location Map"
                  ></iframe>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <a href="https://wa.me/916381528329?text=Hello%20Mr.%20Saravanan%2C%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.%20I%20would%20like%20to%20discuss%20my%20legal%20matter%20with%20you." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 'var(--space-6)' }}>
                    Request Chamber Appointment
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
