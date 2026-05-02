import React, { useState } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import styles from './SignInModal.module.css';

const SignInModal = ({ isOpen, onClose, defaultTab = 'signin' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className={styles.modalHeader}>
          <img src="/logo.png" alt="Prosp.Here" className={styles.modalLogo} />
        </div>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'signin' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('signin')}
          >
            Sign In
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'signup' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>
        
        <div className={styles.authContainer}>
          {activeTab === 'signin' ? (
            <SignIn routing="virtual" redirectUrl="/" signUpUrl="/" />
          ) : (
            <SignUp routing="virtual" redirectUrl="/" signInUrl="/" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInModal;