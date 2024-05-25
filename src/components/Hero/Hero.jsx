import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  return(
    <section className={styles.container}>
      <div className={styles.content}>
          <h1 className={styles.title}>esainhabb</h1>
          <p className={styles.description}>Logo Olshop Start from Rp. 50.000 
                                      <br /> Sedia Logo Olshop free watermark 24jam jadi
                                      <br /> ✨Promo logo GRATIS thank you card✨
                                      <br /> - est. 2017 -
          </p>
          <a href="#contact" className={styles.contactBtn}>Hubungi Kami 💌</a>
      </div>
      <div className={styles.background}>
          <div className={`${styles.row} ${styles.top}`}>
              <div className={`${styles.circle} ${styles.circle1}`}></div>
              <div className={`${styles.circle} ${styles.circle2}`}></div>
              <div className={`${styles.circle} ${styles.circle3}`}></div>
          </div>
          <div className={`${styles.row} ${styles.bottom}`}>
              <div className={`${styles.circle} ${styles.circle4}`}></div>
              <div className={`${styles.circle} ${styles.circle5}`}></div>
              <div className={`${styles.circle} ${styles.circle6}`}></div>
          </div>
      </div>
    </section>
  );
};
