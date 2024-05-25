import React from 'react';
import { getImageURL } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Hubungi <br /> esainhabb</h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageURL('contact/instagramIcon.png')} alt="Email icon" />
                <a href="https://instagram.com/desainlogo.shabby">desainlogo.shabby</a>
            </li>
            <li className={styles.link}>
                <img src={getImageURL('contact/whatsappIcon.png')} alt="LinkedIn icon" />
                <a href="https://wa.me/6285707387285">0857-0738-7285</a>
            </li>
        </ul>
    </footer>
  )
}
