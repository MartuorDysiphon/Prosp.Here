import React, { useState, useRef, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import styles from './SettingsModal.module.css';

const SettingsModal = ({ isOpen, onClose }) => {
  const { user, isLoaded } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
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

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsEditing(false);
      setMessage({ text: '', type: '' });
      setIsUploading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
      
      setTimeout(() => setMessage({ text: '', type: '' }), 2000);
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
      setTimeout(() => setMessage({ text: '', type: '' }), 2000);
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
      setTimeout(() => setMessage({ text: '', type: '' }), 2000);
    } catch (error) {
      setMessage({ text: error.message || 'Failed to remove profile picture', type: 'error' });
    }
  };

  const getInitials = () => {
    const first = user?.firstName || '';
    const last = user?.lastName || '';
    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className={styles.modalHeader}>
          <div className={styles.logoWrapper}>
            <img src="/assets/logo.png" alt="Prosp.Here" className={styles.modalLogo} />
          </div>
          <h2 className={styles.modalTitle}>Account Settings</h2>
          <p className={styles.modalSubtitle}>Manage your profile and account preferences</p>
        </div>

        <div className={styles.modalBody}>
          {/* Profile Picture Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <i className="fas fa-camera"></i>
              <h3>Profile Picture</h3>
            </div>
            <div className={styles.profilePictureSection}>
              <div className={styles.avatarContainer}>
                {user?.imageUrl ? (
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
                  Upload
                </button>
                {user?.imageUrl && (
                  <button 
                    className={styles.removeBtn}
                    onClick={handleRemoveImage}
                    disabled={isUploading}
                  >
                    <i className="fas fa-trash-alt"></i>
                    Remove
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
            </div>
          </div>

          {/* Personal Information Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <i className="fas fa-user"></i>
              <h3>Personal Information</h3>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{user?.primaryEmailAddress?.emailAddress}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Username</span>
              <span className={styles.infoValue}>{user?.username || 'Not set'}</span>
            </div>
          </div>

          {/* Edit Name Section */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <i className="fas fa-pencil-alt"></i>
              <h3>Edit Name</h3>
            </div>
            
            {!isEditing ? (
              <>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>First Name</span>
                  <span className={styles.infoValue}>{user?.firstName || 'Not set'}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Last Name</span>
                  <span className={styles.infoValue}>{user?.lastName || 'Not set'}</span>
                </div>
                <button 
                  className={styles.editBtn}
                  onClick={() => setIsEditing(true)}
                >
                  <i className="fas fa-edit"></i>
                  Edit Name
                </button>
              </>
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
                    Save
                  </button>
                  <button 
                    className={styles.cancelBtn}
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        firstName: user?.firstName || '',
                        lastName: user?.lastName || '',
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Message Display */}
          {message.text && (
            <div className={`${styles.message} ${styles[message.type]}`}>
              <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
              {message.text}
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.signOutBtn} onClick={() => user?.signOut()}>
            <i className="fas fa-sign-out-alt"></i>
            Sign Out
          </button>
          <button className={styles.closeModalBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;