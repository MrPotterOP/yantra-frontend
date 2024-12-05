import styles from './styles.module.css';

import Navbar from '../Navbar/Navbar';

import Image from 'next/image';

function Header() {
    return ( 
        <header className={styles.header}>
            <Navbar />

            <div className={styles.headerBox}>
                <div className={styles.headerBg}>
                    <Image src="/images/contact.png" alt="Contact" width={1800} height={600}></Image>

                    <div className={styles.bgGrad}></div>
                </div>

                <div className={styles.headerText}>
                    <h1>CONTACT US</h1>
                    <p>Fill the basic info about you and the project and we will reach out to you within 24 hours. If you have anything specific or any quarry you can mail us at sales@yantraindia.com</p>
                </div>
            </div>
        </header>
     );
}

export default Header;