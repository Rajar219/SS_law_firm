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
        <div className={`${styles.heroInitials} gold-text animate-fade-in`}>
          SS
        </div>
        
        <h1 className={`${styles.heroName} animate-fade-in delay-100`}>
          SARAVANAN.N
        </h1>
        
        <h2 className={`${styles.heroDesignation} animate-fade-in delay-200`}>
          Advocate, Supreme Court of India
        </h2>

        <div className={`${styles.detailsGrid} animate-fade-in delay-300`}>
          <div className={styles.detailsColumn}>
            <h3>Office</h3>
            <p>
              Chamber No. 214<br />
              Block D, Additional Building<br />
              Supreme Court of India<br />
              New Delhi – 110001
            </p>
          </div>
          <div className={styles.detailsColumn}>
            <h3>Direct Contact</h3>
            <a href="tel:+916381528329">Mobile: 6381528329</a>
            <a href="mailto:advocatesaravananlaw@gmail.com">advocatesaravananlaw@gmail.com</a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} SARAVANAN.N. All rights reserved.</p>
      </footer>
    </div>
  );
}
