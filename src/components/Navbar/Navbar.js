'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {

    const [active, setActive] = useState(false);

    return ( 
        <nav id={styles.navbar}>
            <div className={styles.navBox}>
                <a href="#" className={styles.navLogo}>
                    <Image src="/images/logo.png" alt="Yantra Doors and Windows Logo" width={161} height={44} />
                </a>
                <ul id="nav-mobile" className={styles.navMenu + " " + (active ? styles.active : "")}>
                    <li><a href="#hero">HOME</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#projects">WORK</a></li>
                    <li><a href="#footer">CONTACT</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#faqs">FAQ</a></li>
                </ul>
                
                <button className={styles.btnCta}>
                    <a href="#">Visit Us</a>
                    <Image src="/images/arrow.png" alt="Arrow" width={28} height={28} />
                </button>

                <button className={styles.hamburger} onClick={() => setActive(!active)}>
                    <Image src={active ? "/images/close.png" : "/images/menu.png"} alt="Hamburger Menu" width={24} height={24} />
                </button>

            </div>
        </nav>
    );
}

export default Navbar;