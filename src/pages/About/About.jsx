import React from 'react';
import styles from './About.module.css';

const About = () => {
  const values = [
    {
      icon: 'fas fa-door-open',
      title: 'No gatekeeping',
      desc: 'All resources, events, and mentorship are completely free. Always.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Real connections',
      desc: 'From townships to boardrooms. Mentors who look like you and understand your journey.'
    },
    {
      icon: 'fas fa-tree',
      title: 'Long term commitment',
      desc: 'We do not just advise. We walk with you through articles, exams, and beyond.'
    }
  ];

  return (
    <section id="about" className={`${styles.aboutWrap} section-wrap`}>
      <div className="container">
        <div className={styles.header}>
          <div className="label-tag">
            <i className="fas fa-book-open"></i> Our Story
          </div>
          <h2 className="section-heading">From uncertainty to impact</h2>
          <p className="section-sub">
            Born in a Wits tutorial room. Built for Mzansi.
          </p>
        </div>

        <div className={styles.aboutInner}>
          <div className={`${styles.aboutFlex} reveal`}>
            <div className={styles.aboutText}>
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

            <div className={styles.aboutQuote}>
              <i className="fas fa-quote-left"></i>
              <p>
                "Prosp.Here will give people a roadmap to navigate SAICA articles while connecting them 
                with chartered accountants who look like them. This is the community we need in Mzansi."
              </p>
              <div className={styles.attrib}>Katlego MJ. · Software Engineer, Bloemfontein</div>
            </div>
          </div>

          <div className={styles.valuesHeader}>
            <h3>What we stand for</h3>
          </div>
          <div className={`${styles.valuesGrid} reveal`}>
            {values.map((value, idx) => (
              <div key={idx} className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <i className={value.icon}></i>
                </div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;