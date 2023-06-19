import React, { useState, useRef } from 'react';
import SkillElement from './SkillElement';
import styles from './partials.module.scss';

const ScrollableSkills: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }
    const dx = event.clientX - dragStartX;
    setDragStartX(event.clientX);
    setScrollPosition((prevPosition) => prevPosition + dx);
    if (scrollPosition > 100) {
      setScrollPosition(100);
    } else if (scrollPosition < -100) {
      setScrollPosition(-100);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollPosition > 0) {
      const intervalId = setInterval(() => {
        setScrollPosition((prevScrollPosition) => {
          const newPosition = prevScrollPosition - 1;
          if (newPosition <= 0) {
            clearInterval(intervalId);
            return 0;
          } else {
            return newPosition;
          }
        });
      }, 10);
    } else if (scrollPosition < 0) {
      const intervalId = setInterval(() => {
        setScrollPosition((prevScrollPosition) => {
          const newPosition = prevScrollPosition + 1;
          if (newPosition >= 0) {
            clearInterval(intervalId);
            return 0;
          } else {
            return newPosition;
          }
        });
      }, 10);
    }
  };

  return (
    <div
      className={styles["skills-container"]}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={containerRef}
    >
      <div className={styles.skills__scroll} style={{ transform: `translateX(${scrollPosition}px)` }}>
        <SkillElement name="HTML" src="img/html-icon.png" />
        <SkillElement name="CSS" src="img/css-icon.png" />
        <SkillElement name="JavaScript" src="img/javascript-icon.png" />
        <SkillElement name="TypeScript" src="img/typescript-icon.png" />
        <SkillElement name="React" src="img/react-icon.png" />
        <SkillElement name="Git" src="img/git-icon.png" />
      </div>
    </div>
  );
};

export default ScrollableSkills;