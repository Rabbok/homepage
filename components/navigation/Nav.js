import './nav.module.scss';
import React, { useState, useEffect } from 'react';

const Nav = (props) => {
    const [showBackground, setShowBackground] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
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
        <nav className={`navigations ${props.headerNav && showBackground ? 'hide-text' : 'show-text'}`}>
            {props.headerNav && (
                <div>
                    <a rel="noreferrer" target="_blank" href="mailto:rabbok2@gmail.com">
                        <img className='navigations__img' src='img/gmail-1162901_960_720.png' alt='gmail' />
                    </a>
                </div>
            )}
            <ul className='navigations__links'>
                <li>
                    <a className='navigations__link' rel="noreferrer" target="_blank" href="https://github.com/Rabbok">
                        github
                    </a>
                </li>
                <li>
                    <a className='navigations__link' rel="noreferrer" target="_blank" href="https://www.upwork.com/freelancers/~01eba3de17dc7b1e4a">
                        upwork
                    </a>
                </li>
                <li>
                    <a className='navigations__link' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2-ba4b47278/">
                        linkedin
                    </a>
                </li>
                <li>
                    <a className='navigations__link' rel="noreferrer" target="_blank" href="https://instagram.com/rabbok02?igshid=MzNlNGNkZWQ4Mg==">
                        instagram
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;