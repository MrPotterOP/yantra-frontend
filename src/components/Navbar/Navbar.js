'use client';
import { useState } from 'react';
import { motion} from 'framer-motion';
import styles from './styles.module.css';
import Image from 'next/image';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from 'next/link';


function Navbar({doc}) {

    console.log(doc, "XXXXXX");
    

    

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


    const handleScroll = (href) => {
        setActive(false); // Close the menu if it's open

        console.log(href);
        // const element = document.querySelector(href);

        // console.log(document);

        // console.log(element);
        // if (element) {
        //     window.scrollTo({
        //         top: element.offsetTop,
        //         behavior: 'smooth'
        //     });

        //     element.scrollIntoView({ behavior: 'smooth' });
        // }

        const element = document.querySelector(`[data-scroll-to="${href}"]`);

        console.log(element, document);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
                            {/* <a href={href} data-hover={["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}  onClick={() => router.push(href)}>
                                <span>{["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}</span>
                            </a> */}

                            {/* <Link href={href} passHref legacyBehavior>
                                <a onClick={() => handleScroll(href)} data-hover={["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}>
                                    <span>{["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}</span>
                                </a>
                            </Link> */}

                            <ScrollLink
                                to={href}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                data-hover={["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}
                            >
                                <span>{["HOME", "ABOUT US", "SERVICES", "WORK", "CONTACT", "BLOG", "FAQ"][index]}</span>
                            </ScrollLink>

                            
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
