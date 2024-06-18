import styles from './styles.module.css';

import Image from 'next/image';

function Team() {
    return ( 
        <section id={styles.team}>
            <div className={styles.teamTitle}>
                <p>LEADERSHIP</p>

                <h1>Meet the board of directors</h1>
            </div>

            <div className={styles.teamBox}>
                <div className={styles.member}>
                    <div className={styles.memberImage}>
                        <Image src="/images/member1.png" alt="Member Image" width={500} height={900} />
                    </div>

                    <div className={styles.memberInfo}>
                        <h4>SMITA LIMAYE</h4>

                        <p>DIRECTOR - OPERATIONS & CUSTOMER FULFILMENT</p>

                        <div className={styles.memberSocial}>
                            <div className={styles.memberSocialIcon}>
                                <Image src="/images/linkedin.png" alt="Linkedin" width={20} height={20} />
                            </div>

                            <div className={styles.memberSocialIcon}>
                                <Image src="/images/email.png" alt="Email" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.member}>
                    <div className={styles.memberImage}>
                        <Image src="/images/member2.png" alt="Member Image" width={500} height={900} />
                    </div>

                    <div className={styles.memberInfo}>
                        <h4>RAVI PANJWANI</h4>

                        <p>FOUNDER</p>

                        <div className={styles.memberSocial}>
                            <div className={styles.memberSocialIcon}>
                                <Image src="/images/linkedin.png" alt="Linkedin" width={20} height={20} />
                            </div>

                            <div className={styles.memberSocialIcon}>
                                <Image src="/images/email.png" alt="Email" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.member}>
                    <div className={styles.memberImage}>
                        <Image src="/images/member3.png" alt="Member Image" width={500} height={900} />
                    </div>

                    <div className={styles.memberInfo}>
                        <h4>NIKHIL DASWANI</h4>

                        <p>DIRECTOR - MARKETING & BUSINESS DEVELOPMENT</p>

                        <div className={styles.memberSocial}>
                            <div className={styles.memberSocialIcon}>
                                <Image src="/images/linkedin.png" alt="Linkedin" width={20} height={20} />
                            </div>

                            <div className={styles.memberSocialIcon}>
                                <Image src="/images/email.png" alt="Email" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
     );
}

export default Team;