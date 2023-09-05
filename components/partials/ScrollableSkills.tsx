import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import SkillElement from './SkillElement';
import styles from './partials.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

const ScrollableSkills: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', updateWindowWidth);

      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: isMobile ? 4 : 6,
    slidesToScroll: 1,
  };

  return (
    <div className={styles['skills-container']}>
      <Slider {...settings}>
        <SkillElement name="HTML" src="img/html-icon.png" />
        <SkillElement name="CSS" src="img/css-icon.png" />
        <SkillElement name="SASS" src="img/sass-icon.png" />
        <SkillElement name="Tailwind CSS" src="img/tailwind-icon.svg" />
        <SkillElement name="JavaScript" src="img/javascript-icon.png" />
        <SkillElement name="TypeScript" src="img/typescript-icon.png" />
        <SkillElement name="React" src="img/react-icon.png" />
        <SkillElement name="Next.js" src="img/next-icon.png" />
        <SkillElement name="Git" src="img/git-icon.png" />
      </Slider>
    </div>
  );
};

export default ScrollableSkills;