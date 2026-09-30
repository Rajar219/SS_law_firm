import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>SS</div>
        <div className={styles.contactInfo}>
          <a href="mailto:advocatesaravananlaw@gmail.com">advocatesaravananlaw@gmail.com</a>
          <br />
          <a href="tel:+916381528329">+91 6381528329</a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={`${styles.heroInitials} ${styles.animateSlideUp}`}>
          SS
        </div>
        
        <h1 className={`${styles.heroName} ${styles.animateSlideUp} ${styles['delay-100']}`}>
          SARAVANAN.N
        </h1>
        
        <h2 className={`${styles.heroDesignation} ${styles.animateSlideUp} ${styles['delay-200']}`}>
          Advocate, Supreme Court of India
        </h2>

        <div className={`${styles.detailsGrid} ${styles.animateSlideUp} ${styles['delay-300']}`}>
          <div className="card-luxury">
            <h4>Office</h4>
            <div className="divider-gold-short"></div>
            <p>
              Chamber No. 214<br />
              Block D, Additional Building<br />
              Supreme Court of India<br />
              New Delhi – 110001
            </p>
          </div>
          
          <div className="card-luxury">
            <h4>Direct Contact</h4>
            <div className="divider-gold-short"></div>
            <p style={{ marginBottom: '0.5rem' }}>
              Mobile: <a href="tel:+916381528329" style={{ color: 'var(--white-warm)' }}>6381528329</a>
            </p>
            <p>
              Email: <a href="mailto:advocatesaravananlaw@gmail.com" style={{ color: 'var(--white-warm)' }}>advocatesaravananlaw@gmail.com</a>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} SARAVANAN.N. All rights reserved.</p>
      </footer>
    </div>
  );
}
