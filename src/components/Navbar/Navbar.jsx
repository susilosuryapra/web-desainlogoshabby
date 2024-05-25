import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageURL } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            esainhabb
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen 
                ? getImageURL('nav/closeIcon.png')
                : getImageURL('nav/menuIcon.png')
            }
            alt='menu-button'
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems}
                            ${menuOpen && styles.menuOpen}`}
                            onClick={() => setMenuOpen(false)}
                            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#testimoni">Testimoni</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
