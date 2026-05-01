import React, { useState } from 'react';
import { 
  saSubjectsList, 
  determineEligibility,
  getLevel,
  getUniversityWebsite,
  getCourseDetails
} from '../../utils/compassUtils';
import styles from './Compass.module.css';

const Compass = () => {
  const [subjects, setSubjects] = useState([
    { name: 'Mathematics', percent: '' },
    { name: 'English Home Language', percent: '' },
    { name: 'Accounting', percent: '' },
    { name: 'Business Studies', percent: '' },
    { name: '', percent: '' },
    { name: '', percent: '' },
  ]);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    if (subjects.length < 12) {
      setSubjects([...subjects, { name: '', percent: '' }]);
    } else {
      alert('Maximum 12 subjects allowed.');
    }
  };

  const removeSubject = (index) => {
    if (subjects.length > 4) {
      const newSubjects = subjects.filter((_, i) => i !== index);
      setSubjects(newSubjects);
    } else {
      alert('You need at least 4 subjects.');
    }
  };

  const checkEligibility = () => {
    const validSubjects = subjects.filter(
      s => s.name && s.percent && parseFloat(s.percent) >= 0 && parseFloat(s.percent) <= 100
    );
    
    if (validSubjects.length < 4) {
      alert('Please enter at least 4 valid subjects with percentages.');
      return;
    }

    const subjectsWithPercent = validSubjects.map(s => ({
      name: s.name,
      percent: parseFloat(s.percent),
      level: getLevel(parseFloat(s.percent))
    }));

    const eligibility = determineEligibility(subjectsWithPercent);
    setResult({ ...eligibility, subjectDetails: subjectsWithPercent });
    setShowResult(true);
    
    setTimeout(() => {
      document.getElementById('resultTable')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const clearForm = () => {
    setSubjects([
      { name: 'Mathematics', percent: '' },
      { name: 'English Home Language', percent: '' },
      { name: 'Accounting', percent: '' },
      { name: 'Business Studies', percent: '' },
      { name: '', percent: '' },
      { name: '', percent: '' },
    ]);
    setShowResult(false);
    setResult(null);
    setSelectedCourse(null);
    setShowModal(false);
  };

  const handleUniversityClick = (uniName) => {
    const website = getUniversityWebsite(uniName);
    if (website) {
      window.open(website, '_blank', 'noopener noreferrer');
    }
  };

  const handleCourseClick = (courseName) => {
    const details = getCourseDetails(courseName);
    setSelectedCourse({ name: courseName, ...details });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  return (
    <section id="compass" className={`${styles.compassWrap} section-wrap`}>
      <div className="container">
        <div className={styles.header}>
          <div className="label-tag">
            <i className="fas fa-compass"></i> University Tool
          </div>
          <h2 className="section-heading">Varsity Compass</h2>
          <p className="section-sub">
            Discover which South African universities and qualifications match your profile.
          </p>
        </div>

        <div className={styles.compassInner}>
          <div className={styles.subjectsGrid}>
            {subjects.map((subject, idx) => (
              <div key={idx} className={styles.subjectGroup}>
                <div className={styles.subjectHeader}>
                  <label>Subject {idx + 1}</label>
                  {subjects.length > 4 && (
                    <button 
                      type="button" 
                      className={styles.removeBtn}
                      onClick={() => removeSubject(idx)}
                      aria-label="Remove subject"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </div>
                <select
                  value={subject.name}
                  onChange={(e) => handleSubjectChange(idx, 'name', e.target.value)}
                  className={styles.subjectSelect}
                >
                  <option value="">Select subject</option>
                  {saSubjectsList.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Final percentage 0 to 100"
                  min="0"
                  max="100"
                  step="0.5"
                  value={subject.percent}
                  onChange={(e) => handleSubjectChange(idx, 'percent', e.target.value)}
                  className={styles.subjectPercent}
                />
              </div>
            ))}
          </div>
          
          <div className={styles.actionButtons}>
            <button onClick={addSubject} className="btn-outline">
              <i className="fas fa-plus-circle"></i> Add subject
            </button>
            <button onClick={checkEligibility} className="btn-primary">
              <i className="fas fa-graduation-cap"></i> Check my eligibility
            </button>
            {showResult && (
              <button onClick={clearForm} className="btn-outline">
                <i className="fas fa-eraser"></i> Clear
              </button>
            )}
          </div>

          {showResult && result && (
            <div id="resultTable" className={`${styles.resultsCard} reveal visible`}>
              {/* Subject Results Table */}
              <div className={styles.tableSection}>
                <h3>
                  <i className="fas fa-table-list"></i> Your subject results
                </h3>
                <div className={styles.tableWrapper}>
                  <table className={styles.resultsTable}>
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Percentage</th>
                        <th>Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.subjectDetails.map((subject, idx) => (
                        <tr key={idx}>
                          <td>{subject.name}</td>
                          <td>{subject.percent}%</td>
                          <td>
                            <span className={styles.levelBadge}>
                              {subject.level}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={styles.apsSummary}>
                  <span className={styles.apsLabel}>Total APS:</span>
                  <span className={styles.apsValue}>{result.aps} points</span>
                  <span className={styles.apsNote}>Based on 7 level system</span>
                </div>
              </div>

              {/* Universities Section */}
              <div className={styles.unisSection}>
                <h3>
                  <i className="fas fa-building-columns"></i> Universities you qualify for
                </h3>
                {result.unis.length > 0 ? (
                  <div className={styles.unisGrid}>
                    {result.unis.map((uni, idx) => (
                      <button
                        key={idx}
                        className={styles.uniButton}
                        onClick={() => handleUniversityClick(uni)}
                        title={`Visit ${uni} official website`}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>{uni}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noResultBox}>
                    <i className="fas fa-exclamation-triangle"></i>
                    <p>Based on your results, please consider TVET colleges or foundation programmes.</p>
                    <a href="#contact" className="btn-outline" style={{ marginTop: '1rem' }}>
                      Talk to a mentor
                    </a>
                  </div>
                )}
              </div>

              {/* Qualifications Section */}
              {result.courses.length > 0 && (
                <div className={styles.coursesSection}>
                  <h3>
                    <i className="fas fa-book-open"></i> Suggested qualifications
                  </h3>
                  <div className={styles.coursesGrid}>
                    {result.courses.map((course, idx) => (
                      <button
                        key={idx}
                        className={styles.courseButton}
                        onClick={() => handleCourseClick(course)}
                      >
                        <i className="fas fa-info-circle"></i>
                        <span>{course}</span>
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className={styles.disclaimer}>
                <i className="fas fa-info-circle"></i>
                <p>This is a guide only. Always check with each institution for their specific requirements and application deadlines.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Course Details Modal */}
      {showModal && selectedCourse && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{selectedCourse.name}</h3>
              <button className={styles.modalClose} onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h4><i className="fas fa-clock"></i> Duration</h4>
                <p>{selectedCourse.duration}</p>
              </div>
              <div className={styles.modalSection}>
                <h4><i className="fas fa-graduation-cap"></i> About this qualification</h4>
                <p>{selectedCourse.description}</p>
              </div>
              <div className={styles.modalSection}>
                <h4><i className="fas fa-briefcase"></i> Career opportunities</h4>
                <p>{selectedCourse.careers}</p>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className="btn-outline" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Compass;