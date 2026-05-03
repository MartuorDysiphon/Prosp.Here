// Team.jsx
import React, { useState } from 'react';
import styles from './Team.module.css';

// Import images
import yolisaImg from '../../assets/team/yolisa.jpg';
import midgeImg from '../../assets/team/midge.jpg';
import faimaImg from '../../assets/team/faima.jpg';
import divaImg from '../../assets/team/diva.jpeg';

const Team = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const founders = [
    {
      id: 1,
      name: 'Yolisa Sphambo',
      role: 'Founder and Chairperson',
      title: 'Bcom Accounting',
      location: 'Johannesburg, South Africa',
      description: 'Yolisa is a passionate advocate for accessible education and career guidance. She co founded Prosp.Here to bridge the gap between aspiring accounting professionals and the industry. Her vision is to create a South Africa where every student has a mentor who looks like them.',
      hobbies: 'Running, Cooking, Writing(I\'m currently writing my own cookbook), and I love podcasts and I am a former radio presenter.',
      funFact: 'I am actually the person who came up with the name Prosp.Here. It was my idea to combine “Prosper” and “Here” to reflect the organisation mission of helping students prosper right here in South Africa.',
      quote: 'The future belongs to those who prepare for it today',
      image: yolisaImg
    },
    {
      id: 2,
      name: 'Midge Mtshweni',
      role: 'Vice Chairperson',
      title: 'BCom Accounting & BCTA',
      location: 'Johannesburg, South Africa',
      description: 'Midge is a finance professional who experienced firsthand the challenges of navigating the accounting profession without guidance. He co founded Prosp.Here to ensure no one faces those same barriers. He believes in the power of community and shared experiences.',
      hobbies: 'Football, chess, financial modeling, watching documentaries',
      funFact: 'I can solve a Rubik cube in under two minutes',
      quote: 'Your network is your net worth, but your mindset is your greatest asset',
      image: midgeImg
    },
    {
      id: 3,
      name: 'Faima Shaikh',
      role: 'Secretary',
      title: 'BAccSci & PGDA  ',
      location: 'Port Elizabeth, South Africa',
      description: 'Faima brings a unique perspective to the team with her background in accounting and her passion for educational equity. She focuses on creating resources that are accessible to students from all backgrounds. Her attention to detail ensures Prosp.Here delivers quality content.',
      hobbies: 'Reading, traveling, and creating content. I also enjoy anything creative that allows me to explore ideas and express myself.',
      funFact: 'I can speak 3 languages fluently.',
      quote: 'When you decide you’re not waiting to be saved, the universe starts meeting you halfway.',
      image: faimaImg
    },
    {
      id: 4,
      name: 'Diva Ugbobuaku ',
      role: 'People Officer',
      title: 'PDGDip(FASS) & BAccSci',
      location: 'Johannesburg, South Africa',
      description: 'As a People Officer at Prosp.her, I focus on building a connected community of learners, students, and young professionals. I coordinate mentorship programmes, support the delivery of key initiatives and events, and serve as a main point of contact to ensure strong engagement. I also provide feedback and insights to continuously improve the impact and effectiveness of Prosp.her programmes.',
      hobbies: 'Padel enthusiast, Parkrun regular, casual 5K runner, and occasional blog writer.',
      funFact: 'I\'ve traveled to all 9 Provinces in South Africa',
      quote: 'If you want to gain momentum and improve your motivation, begin by setting goals that are worthwhile but highly achievable. Master the basics. Then practice them every day without fail.” — John C. Maxwell from his book, “The 15 Invaluable Laws of Growth',
      image: divaImg
    }
  ];

  const openFounderModal = (founder) => {
    setSelectedFounder(founder);
  };

  const closeFounderModal = () => {
    setSelectedFounder(null);
  };

  return (
    <section id="professionals" className={`${styles.teamWrap} section-wrap`}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="label-tag"><i className="fas fa-users"></i> The Humans Behind It</div>
          <h2 className="section-heading">Meet the Team</h2>
          <p className="section-sub">The visionaries who started Prosp.Here in a Wits tutorial room</p>
        </div>

        {/* Founders Grid */}
        <div className={styles.foundersGrid}>
          {founders.map((founder) => (
            <div key={founder.id} className={styles.founderCard} onClick={() => openFounderModal(founder)}>
              <div className={styles.founderImage}>
                <img src={founder.image} alt={founder.name} />
              </div>
              <h4>{founder.name}</h4>
              <p>{founder.role}</p>
              <button className={styles.viewProfileBtn}>View Profile</button>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Modal */}
      {selectedFounder && (
        <div className={styles.modalOverlay} onClick={closeFounderModal}>
          <div className={styles.founderModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={closeFounderModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className={styles.modalCarousel}>
              <img 
                src={selectedFounder.image} 
                alt={selectedFounder.name} 
                className={styles.carouselImage}
              />
            </div>
            
            <div className={styles.modalBody}>
              <h2>{selectedFounder.name}</h2>
              <p className={styles.modalRole}>{selectedFounder.role} | {selectedFounder.title}</p>
              <p className={styles.modalLocation}><i className="fas fa-map-marker-alt"></i> {selectedFounder.location}</p>
              
              <div className={styles.modalSection}>
                <h3><i className="fas fa-user"></i> About</h3>
                <p>{selectedFounder.description}</p>
              </div>
              
              <div className={styles.modalSection}>
                <h3><i className="fas fa-heart"></i> Hobbies and Interests</h3>
                <p>{selectedFounder.hobbies}</p>
              </div>
              
              <div className={styles.modalSection}>
                <h3><i className="fas fa-star"></i> Fun Fact</h3>
                <p>{selectedFounder.funFact}</p>
              </div>
              
              <div className={styles.modalSection}>
                <h3><i className="fas fa-quote-left"></i> Quote</h3>
                <p className={styles.modalQuote}>"{selectedFounder.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;