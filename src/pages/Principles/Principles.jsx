import React from 'react';
import styles from './Principles.module.css';

function Principles () {
    return ( 
        <div className="section Principles">
            <div className={styles.principlesSection}>
                <div className={styles.sectionHeader}>
                    <h3>Principles</h3>
                </div>
                <div className={styles.principlesGrid}>
                    <div className={styles.principleCard}>
                    <h4>Mission</h4>
                    <p>
                        To expose, educate, mentor and empower individuals across all stages of the accounting and finance journey, while promoting diversity, inclusion and professional excellence.
                    </p>
                    </div>
                    <div className={styles.principleCard}>
                    <h4>Vision</h4>
                    <p>
                        To build the most inclusive and supportive accounting and finance community in South Africa — where young people from all backgrounds can access information, mentorship, and opportunities.
                    </p>
                    </div>
                    <div className={styles.principleCard}>
                    <h4>Theme</h4>
                    <p>
                        "No gatekeeping. Just access." Breaking down barriers between students and the accounting profession — one connection at a time.
                    </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Principles ;