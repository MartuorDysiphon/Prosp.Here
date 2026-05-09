import React from 'react';
import styles from './About.module.css';

const About = () => {
  const pillars = [
    {
      icon: 'fas fa-eye',
      title: 'Exposure',
      description: 'Timely, accurate information about career paths, bursaries, and industry requirements, delivered before deadlines close.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      description: 'Practical training, CV workshops, and academic resources that transform classroom knowledge into career readiness.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Mentorship',
      description: 'Direct access to professionals who have navigated the same path and understand the South African context.'
    },
    {
      icon: 'fas fa-plug',
      title: 'Access',
      description: 'Connections to internships, graduate programmes, and professional networks that would otherwise remain out of reach.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Inclusion',
      description: 'Intentional space for women, underrepresented groups, and students from all backgrounds.'
    }
  ];

  return (
    <section className={styles.about}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Who we are</span>
          <h1>Building a better path<br />into South Africa's<br />accounting profession</h1>
          <div className={styles.headerLine}></div>
        </div>

        {/* Problem + Response Grid */}
        <div className={styles.originGrid}>
          <div className={styles.originLeft}>
            <h3>The origin</h3>
            <p>
              Late 2024. Yolisa and Midge were final-year BCom Accounting students at Wits. 
              Both were about to graduate, and neither knew when to apply for vacation work, 
              how to tell SAICA from ACCA, or which bursaries had already closed.
            </p>
            <p>
              They realised if it was this hard for them at Wits, students in Mthatha, 
              Kimberley, or Limpopo had no chance. So they decided to build what they wished they had.
            </p>
          </div>
          <div className={styles.originRight}>
            <h3>What we believe</h3>
            <p>
              Information should be free. Mentorship should be accessible. And no student 
              should navigate the accounting profession alone.
            </p>
            <p>
              Prosp.Here exists to remove the gatekeeping, connecting students across South Africa 
              with real professionals, real opportunities, and real guidance. No fees. No barriers.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className={styles.pillarsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Our framework</span>
            <h2>Five pillars that guide our work</h2>
            <p>Every programme, resource, and partnership is built on these foundations.</p>
          </div>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <div key={index} className={styles.pillar}>
                <div className={styles.pillarIcon}>
                  <i className={pillar.icon}></i>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className={styles.closing}>
          <p>
            <span>Prosp.Here</span> started in a Wits tutorial room. 
            Now we help students across South Africa navigate the same journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;