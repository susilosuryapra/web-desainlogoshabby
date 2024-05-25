import React from 'react';
import { getImageURL } from '../../utils';
import styles from './Creation.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Creation = () => {
  const images = [
    'creation/creation_1.png',
    'creation/creation_2.png',
    'creation/creation_3.png',
    'creation/creation_4.png',
    'creation/creation_5.png',
    'creation/creation_6.png',
  ];

  return (
    <section className={`${styles.container} ${styles.creationContainer}`} id='about'>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemsText}>
              <h3>Leih ari Lg</h3>
              <p>Desainlogoshabby juga bisa bantu kamu buat feeds instagram menarik, poster keren, kartu nama yang memikat, dan masih banyak lagi</p>
            </div>
          </li>
        </ul>
        <div className={styles.gallery}>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={getImageURL(image)}
                  alt={`gallery image ${index + 1}`}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
