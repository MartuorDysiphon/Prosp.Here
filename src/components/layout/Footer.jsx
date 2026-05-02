import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div>
            <div className={styles.footerLogo}>
              <img src="/logo.png" alt="Prosp.Here" />
            </div>
            <p className={styles.footerTagline}>A South African initiative for accounting and finance growth.</p>
          </div>
          <div className={styles.footerSocials}>
            <a href="https://www.linkedin.com/company/prosphere" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/prosp.here" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/prosphere" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <p className={styles.footerBottom}>© 2026 Prosp.Here — Beyond the Balance Sheets. Empowering learners, students, and trainees across South Africa.</p>
        <p className={styles.footerBodies}>ACCA · CIMA · SAIPA · SAIT · SAIGA · SAICA · IRBA</p>
      </div>
    </footer>
  );
};

export default Footer;