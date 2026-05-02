import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBgPattern}></div>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className="label-tag"><i className="fas fa-seedling"></i> RSA Accounting NGO</div>
            <h1>Financial Career <span className={styles.heroHighlight}>with clarity</span></h1>
            <p className={styles.heroDescription}>Varsity Compass, live virtual sessions, and real mentors from SAICA, ACCA, CIMA. All in one trusted space, no gatekeeping, no fees.</p>
            <div className={styles.heroCtas}>
              <a href="#compass" className="btn-primary" onClick={(e) => handleScroll(e, '#compass')}>
                <i className="fas fa-graduation-cap"></i> Varsity Compass
              </a>
              <a href="#sessions" className="btn-outline" onClick={(e) => handleScroll(e, '#sessions')}>
                <i className="fas fa-video"></i> View sessions
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.statItem}><span className={styles.statNumber}>8+</span><div className={styles.statLabel}>Bodies</div></div>
              <div className={styles.statItem}><span className={styles.statNumber}>4</span><div className={styles.statLabel}>Experts</div></div>
              <div className={styles.statItem}><span className={styles.statNumber}>100+</span><div className={styles.statLabel}>Members</div></div>
              <div className={styles.statItem}><span className={styles.statNumber}>9</span><div className={styles.statLabel}>Provinces</div></div>
            </div>
          </div>
          <div className={`${styles.heroVisualWrap} reveal`}>
            <div className={styles.heroVisual}></div>
            <div className={styles.heroFloatCard}>
              <div className={styles.icon}><i className="fas fa-check-circle"></i></div>
              <div className={styles.text}><strong>Free for everyone</strong>No fees included.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;