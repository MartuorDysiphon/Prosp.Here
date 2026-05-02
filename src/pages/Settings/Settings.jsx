import React, { useState, useRef, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';
import styles from './Settings.module.css';

const Settings = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user && isLoaded) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
      });
    }
  }, [user, isLoaded]);

  // Handle scroll to settings when navigated from UserMenu
  useEffect(() => {
    // Check if we just navigated to settings
    if (window.location.hash === '#settings') {
      const settingsElement = document.getElementById('settings');
      if (settingsElement) {
        setTimeout(() => {
          const navbarHeight = 80;
          const top = settingsElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className={styles.loadingContainer}>
        <img src="/logo.png" alt="Loading" className={styles.loadingLogo} />
        <p>Loading your account...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div id="settings" className={styles.unauthorizedContainer}>
        <div className={styles.unauthorizedCard}>
          <i className="fas fa-lock"></i>
          <h2>Access Denied</h2>
          <p>Please sign in to access your settings.</p>
          <a href="#home" className="btn-primary">Go to Homepage</a>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileUpdate = async () => {
    setMessage({ text: '', type: '' });
    
    try {
      await user.update({
        firstName: formData.firstName,
        lastName: formData.lastName,
      });
      
      setMessage({ text: 'Profile updated successfully!', type: 'success' });
      setIsEditing(false);
      
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    } catch (error) {
      setMessage({ text: error.message || 'Failed to update profile', type: 'error' });
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setMessage({ text: 'Please upload a JPEG, PNG, or WEBP image', type: 'error' });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage({ text: 'Image size must be less than 5MB', type: 'error' });
      return;
    }

    setIsUploading(true);
    setMessage({ text: '', type: '' });

    try {
      await user.setProfileImage({ file });
      setMessage({ text: 'Profile picture updated successfully!', type: 'success' });
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    } catch (error) {
      setMessage({ text: error.message || 'Failed to update profile picture', type: 'error' });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = async () => {
    try {
      await user.setProfileImage({ file: null });
      setMessage({ text: 'Profile picture removed successfully!', type: 'success' });
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    } catch (error) {
      setMessage({ text: error.message || 'Failed to remove profile picture', type: 'error' });
    }
  };

  const getInitials = () => {
    const first = user.firstName || '';
    const last = user.lastName || '';
    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  };

  return (
    <div id="settings" className={styles.settingsPage}>
      <div className="container">
        <div className={styles.settingsHeader}>
          <h1 className={styles.settingsTitle}>Account Settings</h1>
          <p className={styles.settingsSubtitle}>Manage your profile and account preferences</p>
        </div>

        <div className={styles.settingsGrid}>
          {/* Profile Picture Section */}
          <div className={styles.settingsCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-camera"></i>
              <h2>Profile Picture</h2>
            </div>
            <div className={styles.profilePictureSection}>
              <div className={styles.avatarContainer}>
                {user.imageUrl ? (
                  <img src={user.imageUrl} alt="Profile" className={styles.profileImage} />
                ) : (
                  <div className={styles.initialsAvatar}>{getInitials()}</div>
                )}
                {isUploading && (
                  <div className={styles.uploadOverlay}>
                    <i className="fas fa-spinner fa-pulse"></i>
                  </div>
                )}
              </div>
              <div className={styles.profilePictureActions}>
                <button 
                  className={styles.uploadBtn}
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  <i className="fas fa-upload"></i>
                  Upload New Picture
                </button>
                {user.imageUrl && (
                  <button 
                    className={styles.removeBtn}
                    onClick={handleRemoveImage}
                    disabled={isUploading}
                  >
                    <i className="fas fa-trash-alt"></i>
                    Remove Picture
                  </button>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/jpeg,image/png,image/jpg,image/webp"
                  style={{ display: 'none' }}
                />
              </div>
              <p className={styles.imageHint}>
                <i className="fas fa-info-circle"></i>
                Recommended: Square image, PNG or JPG, max 5MB
              </p>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className={styles.settingsCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-user"></i>
              <h2>Personal Information</h2>
            </div>
            <div className={styles.infoSection}>
              <div className={styles.infoRow}>
                <div className={styles.infoLabel}>Email Address</div>
                <div className={styles.infoValue}>
                  {user.primaryEmailAddress?.emailAddress}
                  <span className={styles.emailBadge}>Verified</span>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.infoLabel}>Username</div>
                <div className={styles.infoValue}>
                  {user.username || 'Not set'}
                </div>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.cardHeader}>
              <i className="fas fa-pencil-alt"></i>
              <h2>Edit Name</h2>
            </div>
            
            {!isEditing ? (
              <div className={styles.infoSection}>
                <div className={styles.infoRow}>
                  <div className={styles.infoLabel}>First Name</div>
                  <div className={styles.infoValue}>{user.firstName || 'Not set'}</div>
                </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoLabel}>Last Name</div>
                  <div className={styles.infoValue}>{user.lastName || 'Not set'}</div>
                </div>
                <button 
                  className={styles.editBtn}
                  onClick={() => setIsEditing(true)}
                >
                  <i className="fas fa-edit"></i>
                  Edit Name
                </button>
              </div>
            ) : (
              <div className={styles.editForm}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                  />
                </div>
                <div className={styles.editActions}>
                  <button 
                    className={styles.saveBtn}
                    onClick={handleProfileUpdate}
                  >
                    <i className="fas fa-save"></i>
                    Save Changes
                  </button>
                  <button 
                    className={styles.cancelBtn}
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        firstName: user.firstName || '',
                        lastName: user.lastName || '',
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {message.text && (
              <div className={`${styles.message} ${styles[message.type]}`}>
                <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                {message.text}
              </div>
            )}
          </div>

          <div className={styles.settingsCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-shield-alt"></i>
              <h2>Account Management</h2>
            </div>
            <div className={styles.accountActions}>
              <button 
                className={styles.signOutBtn}
                onClick={() => signOut()}
              >
                <i className="fas fa-sign-out-alt"></i>
                Sign Out
              </button>
              <p className={styles.accountNote}>
                <i className="fas fa-info-circle"></i>
                To delete your account, please contact support at hello@prosphere.org.za
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;