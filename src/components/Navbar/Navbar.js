'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    const [active, setActive] = useState(false);

    const navItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1 + 0.3, // Start animating items after the logo and button
                type: 'spring',
                stiffness: 50
            }
        })
    };

    const logoAndBtnVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2, // Delay to synchronize with navbar items
                type: 'spring',
                stiffness: 50
            }
        }
    };

    return (
        <motion.nav id={styles.navbar}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <div className={styles.navBox}>
                <motion.a
                    href="#"
                    className={styles.navLogo}
                    initial="hidden"
                    animate="visible"
                    variants={logoAndBtnVariants}
                >
                    <Image src="/images/logo.png" alt="Yantra Doors and Windows Logo" width={161} height={44} />
                </motion.a>

                <ul id="nav-mobile" className={`${styles.navMenu} ${active ? styles.active : ""}`}>
                    {['#hero', '#about', '#services', '#projects', '#footer', '#', '#faqs'].map((href, index) => (
                        <motion.li
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                        >
                            <a href={href} data-hover={["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}>
                                <span>{["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}</span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <motion.button
                    className={styles.btnCta}
                    initial="hidden"
                    animate="visible"
                    variants={logoAndBtnVariants}
                >
                    <a href="#">Visit Us</a>
                    <Image src="/images/arrow.png" alt="Arrow" width={28} height={28} />
                </motion.button>

                <button className={styles.hamburger} onClick={() => setActive(!active)}>
                    <Image src={active ? "/images/close.png" : "/images/menu.png"} alt="Hamburger Menu" width={24} height={24} />
                </button>
            </div>
        </motion.nav>
    );
}

export default Navbar;
