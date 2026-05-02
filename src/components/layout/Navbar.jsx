import React, { useState, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import styles from './Navbar.module.css';
import SignInModal from './SignInModal';
import UserMenu from './UserMenu';
import SettingsModal from './SettingsModal';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [signInTab, setSignInTab] = useState('signin');
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = document.querySelector(`.${styles.navbar}`)?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  const openSignIn = (tab = 'signin') => {
    setSignInTab(tab);
    setShowSignInModal(true);
    closeMobileMenu();
  };

  const openSettings = () => {
    setShowSettingsModal(true);
    closeMobileMenu();
  };

  const handleSignOut = () => {
    signOut();
    closeMobileMenu();
  };

  const getInitials = () => {
    const firstName = user?.firstName || '';
    const lastName = user?.lastName || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#compass', label: 'Varsity Compass', id: 'compass' },
    { href: '#sessions', label: 'Sessions', id: 'sessions' },
    { href: '#professionals', label: 'Team', id: 'professionals' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <a href="#home" className={styles.logo} onClick={(e) => handleLinkClick(e, '#home')}>
            <img src="/logo.png" alt="Prosp.Here" className={styles.logoImg} />
          </a>
          <div className={styles.navLinks}>
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={activeSection === link.id ? styles.active : ''}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className={styles.authSection}>
            {isSignedIn ? (
              <UserMenu />
            ) : (
              <button 
                id="signInBtn"
                onClick={() => openSignIn('signin')} 
                className={styles.signInBtn}
              >
                <i className="fas fa-user"></i>
                Sign In
              </button>
            )}
          </div>
          <button className={styles.hamburger} onClick={toggleMobileMenu} aria-label="Open menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeMenu} onClick={closeMobileMenu} aria-label="Close menu">
          <i className="fas fa-times"></i>
        </button>
        {navLinks.map(link => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            <i className={`fas ${link.id === 'home' ? 'fa-house' : link.id === 'about' ? 'fa-leaf' : link.id === 'compass' ? 'fa-graduation-cap' : link.id === 'sessions' ? 'fa-video' : link.id === 'professionals' ? 'fa-users' : 'fa-envelope'}`}></i>
            {link.label}
          </a>
        ))}
        <div className={styles.mobileAuthDivider}></div>
        {isSignedIn ? (
          <>
            <div className={styles.mobileUserInfo}>
              <div className={styles.mobileUserAvatar}>
                {user?.imageUrl ? (
                  <img src={user.imageUrl} alt={user.firstName || ''} />
                ) : (
                  <span>{getInitials()}</span>
                )}
              </div>
              <div>
                <strong>{user?.firstName} {user?.lastName}</strong>
                <span>{user?.primaryEmailAddress?.emailAddress}</span>
              </div>
            </div>
            <button className={styles.mobileSettingsBtn} onClick={openSettings}>
              <i className="fas fa-cog"></i> Settings
            </button>
            <button className={styles.mobileLogoutBtn} onClick={handleSignOut}>
              <i className="fas fa-sign-out-alt"></i> Sign Out
            </button>
          </>
        ) : (
          <>
            <button 
              className={styles.mobileSignInBtn} 
              onClick={() => openSignIn('signin')}
            >
              <i className="fas fa-sign-in-alt"></i> Sign In
            </button>
            <button 
              className={styles.mobileSignUpBtn} 
              onClick={() => openSignIn('signup')}
            >
              <i className="fas fa-user-plus"></i> Sign Up
            </button>
          </>
        )}
      </div>
      <div
        className={`${styles.overlay} ${mobileMenuOpen ? styles.active : ''}`}
        onClick={closeMobileMenu}
      ></div>

      <SignInModal 
        isOpen={showSignInModal} 
        onClose={() => setShowSignInModal(false)}
        defaultTab={signInTab}
      />

      <SettingsModal 
        isOpen={showSettingsModal} 
        onClose={() => setShowSettingsModal(false)}
      />
    </>
  );
};

export default Navbar;