import React from 'react';
import { getImageURL } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <img
                src={getImageURL('about/growthIcon.png')}
                alt="growth icon"
                className={styles.aboutImage}
            />
        
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemsText}>
                        <p>Sudah Siap Untuk</p>
                        <h3>Mengembangkan bisnismu ke tahap selanjutnya?</h3>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
