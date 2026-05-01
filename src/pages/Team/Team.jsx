import React, { useState } from 'react';
import styles from './Team.module.css';

const Team = () => {
  const [selectedFounder, setSelectedFounder] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const founders = [
    {
      id: 1,
      name: 'Yolisa Sphambo',
      role: 'Co Founder',
      title: 'Strategic Leader',
      location: 'Johannesburg, South Africa',
      description: 'Yolisa is a passionate advocate for accessible education and career guidance. She co founded Prosp.Here to bridge the gap between aspiring accounting professionals and the industry. Her vision is to create a South Africa where every student has a mentor who looks like them.',
      hobbies: 'Reading, hiking, mentoring young professionals, playing netball',
      funFact: 'She once walked 10 kilometers to submit a bursary application that changed her life',
      quote: 'The future belongs to those who prepare for it today',
      images: [
        '/assets/founders/yolisa1.jpg',
        '/assets/founders/yolisa2.jpg',
        '/assets/founders/yolisa3.jpg'
      ]
    },
    {
      id: 2,
      name: 'Midge Mtshweni',
      role: 'Co Founder',
      title: 'Finance Professional',
      location: 'Pretoria, South Africa',
      description: 'Midge is a finance professional who experienced firsthand the challenges of navigating the accounting profession without guidance. He co founded Prosp.Here to ensure no one faces those same barriers. He believes in the power of community and shared experiences.',
      hobbies: 'Football, chess, financial modeling, watching documentaries',
      funFact: 'He can solve a Rubik cube in under two minutes',
      quote: 'Your network is your net worth, but your mindset is your greatest asset',
      images: [
        '/assets/founders/midge1.jpg',
        '/assets/founders/midge2.jpg',
        '/assets/founders/midge3.jpg'
      ]
    },
    {
      id: 3,
      name: 'Faima Shaikh',
      role: 'Co Founder',
      title: 'Accounting Professional',
      location: 'Durban, South Africa',
      description: 'Faima brings a unique perspective to the team with her background in accounting and her passion for educational equity. She focuses on creating resources that are accessible to students from all backgrounds. Her attention to detail ensures Prosp.Here delivers quality content.',
      hobbies: 'Cooking, traveling, photography, volunteering at youth centres',
      funFact: 'She has visited 15 countries and collected a pen from each one',
      quote: 'Education is the most powerful weapon you can use to change the world',
      images: [
        '/assets/founders/faima1.jpg',
        '/assets/founders/faima2.jpg',
        '/assets/founders/faima3.jpg'
      ]
    },
    {
      id: 4,
      name: 'Thabo Nkosi',
      role: 'Co Founder',
      title: 'Strategy and Operations Lead',
      location: 'Cape Town, South Africa',
      description: 'Thabo joined the founding team with a background in business strategy and operations. He saw the potential of Prosp.Here to scale impact across South Africa. He focuses on building partnerships with universities and corporations to expand the organisation reach.',
      hobbies: 'Running, reading business books, podcasting, coaching youth soccer',
      funFact: 'He ran the Two Oceans Marathon twice and finished both times',
      quote: 'Small consistent actions lead to extraordinary results',
      images: [
        '/assets/founders/thabo1.jpg',
        '/assets/founders/thabo2.jpg',
        '/assets/founders/thabo3.jpg'
      ]
    }
  ];

  const openFounderModal = (founder) => {
    setSelectedFounder(founder);
    setCurrentImageIndex(0);
  };

  const closeFounderModal = () => {
    setSelectedFounder(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedFounder) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedFounder.images.length);
    }
  };

  const prevImage = () => {
    if (selectedFounder) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedFounder.images.length) % selectedFounder.images.length);
    }
  };

  return (
    <section id="professionals" className={`${styles.teamWrap} section-wrap`}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="label-tag"><i className="fas fa-users"></i> The Humans Behind It</div>
          <h2 className="section-heading">Meet the Founders</h2>
          <p className="section-sub">The visionaries who started Prosp.Here in a Wits tutorial room</p>
        </div>

        {/* Founders Grid */}
        <div className={styles.foundersGrid}>
          {founders.map((founder) => (
            <div key={founder.id} className={styles.founderCard} onClick={() => openFounderModal(founder)}>
              <div className={styles.founderImage}>
                <img src={founder.images[0]} alt={founder.name} />
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
              <button className={styles.carouselNav} onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <img 
                src={selectedFounder.images[currentImageIndex]} 
                alt={selectedFounder.name} 
                className={styles.carouselImage}
              />
              <button className={styles.carouselNav} onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className={styles.carouselDots}>
              {selectedFounder.images.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`${styles.dot} ${currentImageIndex === idx ? styles.activeDot : ''}`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
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