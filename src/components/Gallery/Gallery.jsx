import React from 'react';
import { getImageURL } from '../../utils';
import styles from './Gallery.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Gallery = () => {
  const images = [
    'gallery/logo_1.png',
    'gallery/logo_2.png',
    'gallery/logo_3.png',
    'gallery/logo_4.png',
    'gallery/logo_5.png',
    'gallery/logo_6.png',
    'gallery/logo_7.png',
    'gallery/logo_8.png',
    'gallery/logo_9.png',
  ];

  return (
    <section className={`${styles.container} ${styles.creationContainer}`} id='gallery'>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemsText}>
              <h3>LL</h3>
              <p>Udah macem-macem nih yang Desainlogoshabby buat</p>
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
