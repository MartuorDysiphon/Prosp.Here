import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import styles from './Sessions.module.css';

// Import panelist images
import kiaraImage from '../../assets/panelists/kiara.jpg';
import mpenduloImage from '../../assets/panelists/mpendulo.jpg';
import zewelanjiImage from '../../assets/panelists/zewelanji.jpg';
import veronicahImage from '../../assets/panelists/veronicah.jpg';
import zandileImage from '../../assets/panelists/zandile.jpg';

const Sessions = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const [showForm, setShowForm] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    occupation: '',
    age: '',
    session: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [showAuthWarning, setShowAuthWarning] = useState(false);
  const [pendingSession, setPendingSession] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const sessions = [
    {
      id: 1,
      title: 'Beyond the Balance Sheets',
      date: 'April 8 2026',
      time: '6:30 PM',
      platform: 'Microsoft Teams',
      platformType: 'teams',
      location: 'Online',
      meetingLink: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ABC123%40thread.v2',
      meetingPassword: 'ProspHere2026',
      description: 'Flagship panel with ACCA, SAICA, and CIMA professionals sharing unfiltered stories about the journey to designation.'
    },
    {
      id: 2,
      title: 'CV Clinic and Learnerships',
      date: 'April 15 2026',
      time: '5:00 PM',
      platform: 'Zoom',
      platformType: 'zoom',
      location: 'Online',
      meetingLink: 'https://zoom.us/j/123456789',
      meetingPassword: 'ProspHereCV',
      description: 'Get CV reviews and learn about SAICA articles, trainee contracts, and how to land your first opportunity.'
    },
    {
      id: 3,
      title: 'Ask a CA Open Floor',
      date: 'April 22 2026',
      time: '7:00 PM',
      platform: 'Microsoft Teams',
      platformType: 'teams',
      location: 'Online',
      meetingLink: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_XYZ789%40thread.v2',
      meetingPassword: 'AskCA2026',
      description: 'Anonymous question and answer session with newly qualified Chartered Accountants covering exams, mental health, burnout, and salary.'
    }
  ];

  // Panelists with images
  const panelists = [
    {
      id: 1,
      name: 'Kiara Bouw',
      role: 'Audit Trainee at Baker Tilly Tuffias',
      image: kiaraImage
    },
    {
      id: 3,
      name: 'Mpendulo Gwebo',
      role: 'Strategic Transformation Analyst at Deloitte',
      image: mpenduloImage
    },
    {
      id: 4,
      name: 'Zewelanji Mungomba',
      role: 'SAIPA Trainee at MMS Group',
      image: zewelanjiImage
    },
    {
      id: 5,
      name: 'Veronicah Siziba',
      role: 'Audit Manager at PwC',
      image: veronicahImage
    },
    {
      id: 6,
      name: 'Zandi Mlilo',
      role: 'IB Analyst at ABSA Bank',
      image: zandileImage
    }
  ];

  // Auto populate from Clerk when user is signed in
  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      setFormData(prev => ({
        ...prev,
        name: user.firstName || '',
        surname: user.lastName || '',
      }));
      
      if (pendingSession) {
        setSelectedSession(pendingSession);
        setFormData(prev => ({
          ...prev,
          session: pendingSession.title
        }));
        setShowForm(true);
        setPendingSession(null);
      }
    }
  }, [isLoaded, isSignedIn, user, pendingSession]);

  const openSignInModal = () => {
    setShowAuthWarning(false);
    setTimeout(() => {
      const signInBtn = document.getElementById('signInBtn');
      if (signInBtn) {
        signInBtn.click();
      } else {
        const btn = document.querySelector('.signInBtn');
        if (btn && btn.onclick) {
          btn.click();
        }
      }
    }, 100);
  };

  const handleRSVPClick = (session) => {
    if (isLoaded && !isSignedIn) {
      setPendingSession(session);
      setShowAuthWarning(true);
      return;
    }
    
    if (!isLoaded) {
      alert('Please wait, loading your account...');
      return;
    }
    
    setSelectedSession(session);
    setFormData(prev => ({
      ...prev,
      session: session.title
    }));
    setShowForm(true);
    setSubmitted(false);
    setReceiptData(null);
    setSubmitError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateRSVPNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `PROSP${timestamp}${randomNum}`;
  };

  // Formspree endpoint - REPLACE WITH YOUR FORMSPREE FORM ID
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvyezll';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const rsvpNumber = generateRSVPNumber();
    
    // Prepare data for Formspree
    const formspreeData = {
      name: formData.name,
      surname: formData.surname,
      occupation: formData.occupation,
      age: formData.age,
      session: selectedSession.title,
      sessionDate: selectedSession.date,
      sessionTime: selectedSession.time,
      rsvpNumber: rsvpNumber,
      email: user?.primaryEmailAddress?.emailAddress || 'Not provided',
      userId: user?.id || 'Not provided',
      _subject: `New RSVP: ${selectedSession.title} - ${formData.name} ${formData.surname}`
    };

    const fullReceiptData = {
      ...formData,
      rsvpNumber: rsvpNumber,
      sessionTitle: selectedSession.title,
      sessionDate: selectedSession.date,
      sessionTime: selectedSession.time,
      sessionLocation: selectedSession.location,
      sessionPlatform: selectedSession.platform,
      meetingLink: selectedSession.meetingLink,
      meetingPassword: selectedSession.meetingPassword
    };

    try {
      // Send to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formspreeData),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('RSVP Successfully sent to Formspree:', result);
        
        // Show receipt to user
        setReceiptData(fullReceiptData);
        setSubmitted(true);
        setShowForm(false);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
      
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitError('Failed to submit RSVP. Please try again or contact support.');
      
      // Fallback: Still show receipt even if API fails
      setReceiptData(fullReceiptData);
      setSubmitted(true);
      setShowForm(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedSession(null);
    setSubmitError('');
    setFormData({
      name: (isLoaded && isSignedIn && user?.firstName) || '',
      surname: (isLoaded && isSignedIn && user?.lastName) || '',
      occupation: '',
      age: '',
      session: ''
    });
  };

  const closeAuthWarning = () => {
    setShowAuthWarning(false);
    setPendingSession(null);
  };

  const downloadPDF = () => {
    const receiptContent = document.getElementById('receiptContent');
    if (!receiptContent) return;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Prosp.Here RSVP Confirmation</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Sora', system-ui, sans-serif; background: white; padding: 40px; color: #1a3228; }
          .receipt { max-width: 600px; margin: 0 auto; background: white; border: 2px solid #e4ede9; border-radius: 24px; padding: 32px; }
          .logo { text-align: center; margin-bottom: 24px; }
          .logo img { height: 60px; }
          h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 24px; color: #1a3228; text-align: center; margin-bottom: 8px; }
          .subtitle { text-align: center; color: #7a9188; font-size: 12px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #e4ede9; }
          .section { margin-bottom: 20px; }
          .section-title { font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #e88500; margin-bottom: 8px; }
          .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
          .info-label { font-weight: 600; color: #2c5044; }
          .info-value { color: #4a7066; }
          .badge { background: #fdf9f4; border: 1px solid #e4ede9; border-radius: 60px; padding: 8px 16px; text-align: center; margin: 16px 0; }
          .badge strong { color: #e88500; font-size: 18px; }
          .footer { text-align: center; font-size: 10px; color: #7a9188; margin-top: 24px; padding-top: 16px; border-top: 1px solid #e4ede9; }
          @media print { body { padding: 0; } .receipt { border: none; padding: 0; } }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="logo"><img src="/logo.png" alt="Prosp.Here"></div>
          <h1>RSVP Confirmation</h1>
          <div class="subtitle">You are confirmed for this event</div>
          <div class="badge"><strong>${receiptData.rsvpNumber}</strong></div>
          <div class="section">
            <div class="section-title">Event Details</div>
            <div class="info-row"><span class="info-label">Session:</span><span class="info-value">${receiptData.sessionTitle}</span></div>
            <div class="info-row"><span class="info-label">Date:</span><span class="info-value">${receiptData.sessionDate}</span></div>
            <div class="info-row"><span class="info-label">Time:</span><span class="info-value">${receiptData.sessionTime} South Africa Time</span></div>
            <div class="info-row"><span class="info-label">Location:</span><span class="info-value">${receiptData.sessionLocation} Online</span></div>
            <div class="info-row"><span class="info-label">Platform:</span><span class="info-value">${receiptData.sessionPlatform}</span></div>
          </div>
          <div class="section">
            <div class="section-title">Attendee Information</div>
            <div class="info-row"><span class="info-label">Full Name:</span><span class="info-value">${receiptData.name} ${receiptData.surname}</span></div>
            <div class="info-row"><span class="info-label">Occupation:</span><span class="info-value">${receiptData.occupation}</span></div>
            <div class="info-row"><span class="info-label">Age:</span><span class="info-value">${receiptData.age}</span></div>
          </div>
          <div class="section">
            <div class="section-title">Meeting Access</div>
            <div class="info-row"><span class="info-label">Meeting Link:</span><span class="info-value"><a href="${receiptData.meetingLink}" style="color:#e88500;">Click to join</a></span></div>
            <div class="info-row"><span class="info-label">Password:</span><span class="info-value">${receiptData.meetingPassword}</span></div>
          </div>
          <div class="footer">
            <p>This is your official RSVP confirmation. Please save this for your records.</p>
            <p>For any questions, contact us at prosp.hereteam@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const closeReceipt = () => {
    setSubmitted(false);
    setReceiptData(null);
  };

  return (
    <section id="sessions" className={styles.sessionsWrap}>
      <div className="container">
        <div className={styles.header}>
          <div className="label-tag">
            <i className="fas fa-video"></i> Free Events
          </div>
          <h2 className="section-heading">Virtual Sessions</h2>
          <p className="section-sub">
            Live, interactive, and completely free. Learn from professionals who have walked the path.
          </p>
        </div>

        <div className={styles.sessionsGrid}>
          {sessions.map((session, idx) => (
            <div key={idx} className={`${styles.sessionCard} reveal`}>
              <div>
                <h3>{session.title}</h3>
                <div className={styles.sessionMeta}>
                  <span><i className="far fa-calendar-alt"></i> {session.date}</span>
                  <span><i className={session.platformType === 'teams' ? 'fab fa-microsoft' : 'fas fa-video'}></i> {session.platform}</span>
                  <span><i className="far fa-clock"></i> {session.time}</span>
                </div>
                <p>{session.description}</p>
              </div>
              <button 
                onClick={() => handleRSVPClick(session)} 
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                RSVP now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Panelists Section with Images */}
        <div className={styles.panelistsSection}>
          <div className={styles.sectionHeader}>
            <i className="fas fa-users"></i>
            <h2>Previous Session Panelists</h2>
            <p>Industry professionals who shared their insights and experiences</p>
          </div>
          <div className={styles.panelistsCarousel}>
            {panelists.map((panelist) => (
              <div key={panelist.id} className={styles.panelistCard}>
                <div className={styles.panelistImage}>
                  {panelist.image ? (
                    <img src={panelist.image} alt={panelist.name} />
                  ) : (
                    <span>{panelist.name.charAt(0)}{panelist.name.split(' ')[1]?.charAt(0) || ''}</span>
                  )}
                </div>
                <h4>{panelist.name}</h4>
                <p>{panelist.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auth Warning Modal */}
      {showAuthWarning && (
        <div className={styles.authWarningOverlay} onClick={closeAuthWarning}>
          <div className={styles.authWarningContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.authWarningIcon}>
              <i className="fas fa-lock"></i>
            </div>
            <h3>Sign In Required</h3>
            <p>Please sign in to your account to RSVP for sessions. This helps us manage attendance and send you important updates.</p>
            <div className={styles.authWarningActions}>
              <button className="btn-primary" onClick={openSignInModal}>
                <i className="fas fa-sign-in-alt"></i> Sign In
              </button>
              <button className="btn-outline" onClick={closeAuthWarning}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RSVP Form Modal */}
      {showForm && (
        <div className={styles.formOverlay} onClick={closeForm}>
          <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.formHeader}>
              <div className={styles.formLogo}>
                <img src="/logo.png" alt="Prosp.Here" />
              </div>
              <button className={styles.closeFormBtn} onClick={closeForm}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <h3 className={styles.formTitle}>RSVP for {selectedSession?.title}</h3>
            <p className={styles.formSubtitle}>Please complete the form below to secure your spot</p>
            
            {submitError && (
              <div className={styles.errorMessage}>
                <i className="fas fa-exclamation-triangle"></i> {submitError}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className={styles.rsvpForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Name <span>*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    readOnly={isLoaded && isSignedIn}
                    className={isLoaded && isSignedIn ? styles.readonlyField : ''}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Surname <span>*</span></label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your surname"
                    readOnly={isLoaded && isSignedIn}
                    className={isLoaded && isSignedIn ? styles.readonlyField : ''}
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Occupation <span>*</span></label>
                  <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select occupation</option>
                    <option value="High School Student">High School Student</option>
                    <option value="University Student">University Student</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Young Professional">Young Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Age <span>*</span></label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="15"
                    max="100"
                    placeholder="Your age"
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Select Session <span>*</span></label>
                <select
                  name="session"
                  value={formData.session}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a session</option>
                  {sessions.map(session => (
                    <option key={session.id} value={session.title}>{session.title}</option>
                  ))}
                </select>
              </div>
              
              {isLoaded && isSignedIn && (
                <div className={styles.signedInNote}>
                  <i className="fas fa-check-circle"></i>
                  You are signed in as <strong>{user?.primaryEmailAddress?.emailAddress}</strong>
                </div>
              )}
              
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Complete RSVP'}
                <i className="fas fa-check-circle"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {submitted && receiptData && (
        <div className={styles.receiptOverlay} onClick={closeReceipt}>
          <div className={styles.receiptContainer} onClick={(e) => e.stopPropagation()}>
            <div id="receiptContent">
              <div className={styles.receiptLogo}>
                <img src="/logo.png" alt="Prosp.Here" />
              </div>
              <h2 className={styles.receiptTitle}>RSVP Confirmation</h2>
              <p className={styles.receiptSubtitle}>You are confirmed for this event</p>
              
              <div className={styles.rsvpBadge}>
                <strong>{receiptData.rsvpNumber}</strong>
              </div>
              
              <div className={styles.receiptSection}>
                <div className={styles.receiptSectionTitle}>Event Details</div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Session:</span>
                  <span className={styles.receiptValue}>{receiptData.sessionTitle}</span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Date:</span>
                  <span className={styles.receiptValue}>{receiptData.sessionDate}</span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Time:</span>
                  <span className={styles.receiptValue}>{receiptData.sessionTime} South Africa Time</span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Location:</span>
                  <span className={styles.receiptValue}>{receiptData.sessionLocation} Online</span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Platform:</span>
                  <span className={styles.receiptValue}>{receiptData.sessionPlatform}</span>
                </div>
              </div>
              
              <div className={styles.receiptSection}>
                <div className={styles.receiptSectionTitle}>Attendee Information</div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Full Name:</span>
                  <span className={styles.receiptValue}>{receiptData.name} {receiptData.surname}</span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Occupation:</span>
                  <span className={styles.receiptValue}>{receiptData.occupation}</span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Age:</span>
                  <span className={styles.receiptValue}>{receiptData.age}</span>
                </div>
              </div>
              
              <div className={styles.receiptSection}>
                <div className={styles.receiptSectionTitle}>Meeting Access</div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Meeting Link:</span>
                  <span className={styles.receiptValue}>
                    <a href={receiptData.meetingLink} target="_blank" rel="noopener noreferrer" className={styles.meetingLink}>
                      Click to join
                    </a>
                  </span>
                </div>
                <div className={styles.receiptRow}>
                  <span className={styles.receiptLabel}>Password:</span>
                  <span className={styles.receiptValue}>{receiptData.meetingPassword}</span>
                </div>
              </div>
              
              <div className={styles.receiptFooter}>
                <p>This is your official RSVP confirmation. Please save this for your records.</p>
                <p>For any questions, contact us at prosp.hereteam@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.receiptActions}>
              <button onClick={downloadPDF} className="btn-primary">
                <i className="fas fa-download"></i> Download as PDF
              </button>
              <button onClick={closeReceipt} className="btn-outline">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sessions;