import React, { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

// Import author images
import katlegoImage from '../../assets/testimonials/kat.jpg';
import thandoImage from '../../assets/testimonials/kat.jpg';
import leratoImage from '../../assets/testimonials/kat.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Katlego MJ',
      role: 'Software Engineer, Bloemfontein',
      image: katlegoImage,
      quote: 'Prosp.Here will give people a roadmap to navigate SAICA articles while connecting them with chartered accountants who look like them. This is the community we need in Mzansi.',
      rating: 5
    },
    {
      id: 2,
      name: 'Thando Nkosi',
      role: 'SAICA Trainee, Johannesburg',
      image: thandoImage,
      quote: 'Before Prosp.Here, I had no idea where to start my accounting journey. The mentorship program connected me with a CA who looked like me and understood my struggles. Now I am thriving in my articles!',
      rating: 5
    },
    {
      id: 3,
      name: 'Lerato Molefe',
      role: 'Accounting Student, University of Pretoria',
      image: leratoImage,
      quote: 'The Varsity Compass and free sessions helped me understand the difference between SAICA and ACCA. I finally know which path is right for me. Thank you Prosp.Here for the free resources!',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    if (isAutoPlaying) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(nextTestimonial, 5000);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextTestimonial, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    autoPlayRef.current = setInterval(nextTestimonial, 5000);
  };

  const renderStars = (rating) => {
    return (
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fas fa-star ${i < rating ? styles.starFilled : styles.starEmpty}`}></i>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className={styles.testimonialsWrap}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className="label-tag">
            <i className="fas fa-comment-dots"></i> Testimonials
          </div>
          <h2 className="section-heading">What Our <span className={styles.accentText}>Community Says</span></h2>
          <p className="section-sub">
            Real stories from students and professionals who have walked with us
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className={styles.carouselContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prevTestimonial}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={nextTestimonial}>
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Testimonial Card */}
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <i className="fas fa-quote-left"></i>
            </div>
            
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialQuote}>
                "{testimonials[activeIndex].quote}"
              </p>
              
              {renderStars(testimonials[activeIndex].rating)}
              
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonials[activeIndex].name}</h4>
                  <p>{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className={styles.dotsContainer}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;