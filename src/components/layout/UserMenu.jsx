import React, { useState, useRef, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import styles from './UserMenu.module.css';
import SettingsModal from './SettingsModal';

const UserMenu = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isSignedIn) return null;

  const getInitials = () => {
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
  const email = user.primaryEmailAddress?.emailAddress || '';

  const handleSettingsClick = () => {
    setIsOpen(false);
    setShowSettings(true);
  };

  return (
    <>
      <div className={styles.userMenu} ref={menuRef}>
        <button className={styles.userAvatar} onClick={() => setIsOpen(!isOpen)}>
          {user.imageUrl ? (
            <img src={user.imageUrl} alt={fullName} />
          ) : (
            <span>{getInitials()}</span>
          )}
        </button>

        {isOpen && (
          <div className={styles.dropdown}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatarLarge}>
                {user.imageUrl ? (
                  <img src={user.imageUrl} alt={fullName} />
                ) : (
                  <span>{getInitials()}</span>
                )}
              </div>
              <div className={styles.userDetails}>
                <strong>{fullName}</strong>
                <span>{email}</span>
              </div>
            </div>
            <div className={styles.divider}></div>
            <button 
              className={styles.settingsBtn}
              onClick={handleSettingsClick}
            >
              <i className="fas fa-cog"></i>
              Settings
            </button>
            <button 
              className={styles.logoutBtn}
              onClick={() => signOut()}
            >
              <i className="fas fa-sign-out-alt"></i>
              Sign Out
            </button>
          </div>
        )}
      </div>

      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
};

export default UserMenu;