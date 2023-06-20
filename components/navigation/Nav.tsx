import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './nav.module.scss';

interface NavProps {
    headerNav?: boolean
}

const Nav: React.FC<NavProps> = (props) => {
    const [showBackground, setShowBackground] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const showBackground = scrollPosition > 500;
        setShowBackground(showBackground);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navigations} ${props.headerNav && showBackground ? styles['hide-text'] : ''}`}>
            {props.headerNav && (
                <div>
                    <a rel="noreferrer" target="_blank" href="mailto:rabbok2@gmail.com">
                        <Image width={100} height={100} className={styles.navigations__img} src='/img/gmail-1162901_960_720.png' alt='gmail' />
                    </a>
                </div>
            )}
            <ul className={styles.navigations__links}>
                <li>
                    <a className={styles.navigations__link} rel="noreferrer" target="_blank" href="https://github.com/Rabbok">
                        github
                    </a>
                </li>
                <li>
                    <a className={styles.navigations__link} rel="noreferrer" target="_blank" href="https://www.upwork.com/freelancers/~01eba3de17dc7b1e4a">
                        upwork
                    </a>
                </li>
                <li>
                    <a className={styles.navigations__link} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/maksym-novikov-dev">
                        linkedin
                    </a>
                </li>
                <li>
                    <a className={styles.navigations__link} rel="noreferrer" target="_blank" href="https://instagram.com/rabbok02?igshid=MzNlNGNkZWQ4Mg==">
                        instagram
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;