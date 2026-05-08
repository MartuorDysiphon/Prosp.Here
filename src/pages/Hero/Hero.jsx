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
            <div className="label-tag"> RSA Accounting NGO</div>
            <h1>Financial Career <span className={styles.heroHighlight}>with clarity</span></h1>
            <p className={styles.heroDescription}>Helping Individuals build successful careers in finance and accounting through Varsity Compass, 
              live virtual sessions, and mentorship from professionals connected to PROSP.HERE and . Gain real guidance, industry insight, and support in 
              one trusted space built for future finance professionals.</p>
            <div className={styles.heroCtas}>
              <a href="#compass" className="btn-primary" onClick={(e) => handleScroll(e, '#compass')}>
                <i className="fas fa-graduation-cap"></i> Varsity Compass
              </a>
              <a href="#sessions" className="btn-outline" onClick={(e) => handleScroll(e, '#sessions')}>
                <i className="fas fa-video"></i> View sessions
              </a>
            </div>
          </div>
          <div className={`${styles.heroVisualWrap} reveal`}>
            <div className={styles.heroVisual}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;