import React from 'react';
import styles from './About.module.css';

const About = () => {
  const pillars = [
    {
      icon: 'fas fa-eye',
      title: 'Exposure',
      desc: 'Early and accurate information about careers'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      desc: 'Academic and career development support'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Mentorship',
      desc: 'Guidance from those who have walked the path'
    },
    {
      icon: 'fas fa-plug',
      title: 'Access',
      desc: 'Connecting people to opportunities and networks'
    },
    {
      icon: 'fas fa-heart',
      title: 'Inclusion',
      desc: 'Creating space for all genders and pathways'
    }
  ];

  return (
    <section id="about" className={styles.aboutWrap}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className="label-tag">
            <i className="fas fa-book-open"></i> Our Story
          </div>
          <h2 className="section-heading">From uncertainty to impact</h2>
          <p className="section-sub">
            Born in a Wits tutorial room. Built for Mzansi.
          </p>
        </div>

        {/* Story Text - plain, no card */}
        <div className={styles.storyText}>
          <p>
            <strong>Prosp.Here</strong> started in <strong>2024</strong> when a group of final year Wits accounting students 
            realised the path to becoming a CA was broken.
          </p>
          <p>
            Students did not know when bursaries opened. They could not tell <strong>SAICA from ACCA</strong>. 
            They applied for vac work too late. And worst of all, <strong>no mentors who looked like them.</strong>
          </p>
          <p>
            By <strong>2025, Prosp.Here became a registered NGO</strong>. Now we connect students across South Africa with real professionals 
            from <strong>SAICA, ACCA, CIMA, SAIPA, SAIT, and IRBA</strong>. Free Varsity Compass, monthly panels, 
            WhatsApp mentorship. <strong>No fees. No gatekeeping. Just help.</strong>
          </p>
        </div>

        {/* Key Pillars Section - 5 cards */}
        <div className={styles.pillarsSection}>
          <div className={styles.sectionHeader}>
            <h3>Key Pillars</h3>
          </div>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <i className={pillar.icon}></i>
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;