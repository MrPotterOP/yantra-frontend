import styles from './styles.module.css';
import Image from 'next/image';

function Projects() {
    return ( 
        <section id={styles.projects}>
            <div className={styles.projectsBoxLeft}>
                <div className={styles.projectsTitle}>
                    <p className={styles.titleText}>PROJECTS</p>
                    <h1>Showcasing our finest works</h1>
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
            </div>

            <div className={styles.projectsBoxRight}>
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
            </div>
        </section>
     );
}

export default Projects;