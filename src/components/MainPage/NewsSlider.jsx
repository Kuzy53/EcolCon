import React, { useState } from 'react';
import styles from './NewsSlider.module.css';


const NewsSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <img src={slide.image} alt={slide.alt} />
            <p>{slide.caption}</p>
            <p>{slide.date}</p>
            <p>{slide.location}</p>
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={handlePrev}>
        <img className={styles.arrowPrev} src="src/assets/icons/arrowLeft.png" alt="" />
      </button>
      <button className={styles.next} onClick={handleNext}>
        <img  className={styles.arrowNext} src="src/assets/icons/arrowRight.png" alt="" />
      </button>
    </div>
  );
};

export default NewsSlider;