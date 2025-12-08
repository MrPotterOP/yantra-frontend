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
        <section id={styles.projects} className={'projects'}>
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

                        <p className={styles.projectText}>One of our landmark projects featuring Libart&apos;s lean-to system for creating a seamless indoor-outdoor experience. The roof glass panels come with built-in blinds inside the insulated units, offering ideal shielding from the sun&apos;s glare.</p>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image src="/images/projectJp.jpg" alt="Project Image" width={500} height={900} />
                    </div>

                    <div className={styles.projectInfo}>
                        <h4>PRIVATE VILLA - JAIPUR</h4>

                        <p className={styles.projectText}>A luxury villa designed to perfection, featuring pocket sliding windows with a full 100% opening, walkable glass floors, bespoke skylights, curved glass, marble-backed façades, and several other bespoke installations created exclusively for this project.</p>
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

                        <p className={styles.projectText}>Luxury villa by ZZ Architects, thoughtfully designed in the heart of Ajmer. The carefully curved railings seamlessly flow to create European aluminium systems in a green-woodgrain finish, tilted façades allow for expanding sightlines, and integrated mesh screens in the home reflect precision and quiet elegance.</p>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image src="/images/project3.jpeg" alt="Project Image" width={500} height={900} />
                    </div>

                    <div className={styles.projectInfo}>
                        <h4>COMMERCIAL BUILDING - PANJIM</h4>

                        <p className={styles.projectText}>High-performance lift and slide doors have been installed throughout this commercial building in the heart of Goa. Designed for smooth operation, wide openings, and excellent insulation, these systems bring in abundant natural light while maintaining comfort and acoustic control.</p>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <Image src="/images/projectHy.jpeg" alt="Project Image" width={500} height={900} />
                    </div>

                    <div className={styles.projectInfo}>
                        <h4>PRIVATE VILLA - HYDERABAD</h4>

                        <p className={styles.projectText}>A luxury villa in Jubilee Hills, high-performance, massive Italian lift and slide windows have been installed. These allow for seamless movement, extensive views, and superlative comfort within.</p>
                    </div>
                </div>


            </motion.div>
        </section>
    );
}

export default Projects;