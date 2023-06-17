import React, { useState, useRef } from 'react';
import SkillElement from './Skills';

const ScrollableSkills = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
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
        setScrollPosition(prevScrollPosition => {
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
        setScrollPosition(prevScrollPosition => {
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
      className="skills__container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={containerRef}
    >
      <div className='skills__scroll' style={{ transform: `translateX(${scrollPosition}px)` }}>
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