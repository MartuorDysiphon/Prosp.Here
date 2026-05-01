import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: 'Varsity guidance',
    message: ''
  });
  const [feedback, setFeedback] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      setFeedback({
        show: true,
        message: 'Please fill in your name, email, and message.',
        type: 'error'
      });
      return;
    }

    setFeedback({
      show: true,
      message: `Thank you, ${fullName}! A real human will reply within 24 hours.`,
      type: 'success'
    });

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      topic: 'Varsity guidance',
      message: ''
    });

    setTimeout(() => {
      setFeedback({ show: false, message: '', type: '' });
    }, 6000);
  };

  return (
    <section id="contact" className={`${styles.contactWrap} section-wrap`}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="label-tag"><i className="fas fa-envelope"></i> Get In Touch</div>
          <h2 className="section-heading">Let's talk</h2>
          <p className="section-sub">Questions about varsity, sessions, or mentorship? We reply within 24 hours.</p>
        </div>

        <div className={`${styles.contactInner} reveal`}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="fullName"
                placeholder="Full name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                id="phone"
                placeholder="WhatsApp number (optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <select id="topic" value={formData.topic} onChange={handleChange}>
                <option value="Varsity guidance">Varsity guidance</option>
                <option value="Mentorship request">Mentorship request</option>
                <option value="Session RSVP">Session RSVP</option>
                <option value="Career conversation">Career conversation</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                rows="4"
                placeholder="What's on your mind? Ask anything — no limits, real humans respond."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <i className="fas fa-paper-plane"></i> Send message
            </button>
            {feedback.show && (
              <div className={feedback.type === 'success' ? styles.feedbackSuccess : styles.feedbackError} style={{ marginTop: '1rem' }}>
                <i className={feedback.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}></i>
                {feedback.message}
              </div>
            )}
          </form>
          <div className={styles.contactChannels}>
            <a href="https://wa.me/27817721216?text=Hello%20Prosp.Here%20I%20need%20guidance" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp: 081 772 1216
            </a>
            <a href="mailto:hello@prosphere.org.za">
              <i className="fas fa-envelope"></i> hello@prosphere.org.za
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;