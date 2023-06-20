import React from 'react';
import styles from './partials.module.scss';

const IntroductionButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    });
  };

  return (
    <button className={styles['introduction-button']} onClick={handleClick}>
      <p className={`${styles.introduction__paragraph} ${styles['button-paragraph']}`}>
        Let's start
      </p>
    </button>
  );
};

export default IntroductionButton;
