'use client'

import styles from './styles.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';


function Projects() {

    const hidden = {
        opacity: 0,
        y: 50
    }

    const show = {
        opacity: 1,
        y: 0
    }

    const transition = {
        duration: 1,
        ease: 'easeInOut'
    }

    const variants = {
        hidden,
        show
    }


    return ( 
        <section id={styles.projects}>
            <motion.div 
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition}

            className={styles.projectsBoxLeft}>
                <motion.div
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition}
                 className={styles.projectsTitle}>
                    <p className={styles.titleText}>PROJECTS</p>
                    <h1>Showcasing our finest works</h1>
                </motion.div>

                <div className={`${styles.project} ${styles.right}`}>
                    <div className={styles.projectImage}>
                        <Image src="/images/project1.jpeg" alt="Project Image" width={500} height={900} />
                    </div>

                    <div className={styles.projectInfo}>
                        <h4>AER LOUNGE, FOUR SEASONS MUMBAI</h4>

                        <p className={styles.projectText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image src="/images/project1.jpeg" alt="Project Image" width={500} height={900} />
                    </div>

                    <div className={styles.projectInfo}>
                        <h4>AER LOUNGE, FOUR SEASONS MUMBAI</h4>

                        <p className={styles.projectText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition}
            className={styles.projectsBoxRight}>
                <div className={styles.project}>
                        <div className={styles.projectImage}>
                            <Image src="/images/project2.jpg" alt="Project Image" width={500} height={900} />
                        </div>

                        <div className={styles.projectInfo}>
                            <h4>PRIVATE VILLA - AJMER</h4>

                            <p className={styles.projectText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image src="/images/project3.jpeg" alt="Project Image" width={500} height={900} />
                    </div>

                    <div className={styles.projectInfo}>
                        <h4>COMMERCIAL BUILDING - PANJIM</h4>

                        <p className={styles.projectText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image src="/images/project3.jpeg" alt="Project Image" width={500} height={900} />
                    </div>

                    <div className={styles.projectInfo}>
                        <h4>COMMERCIAL BUILDING - PANJIM</h4>

                        <p className={styles.projectText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>


            </motion.div>
        </section>
     );
}

export default Projects;