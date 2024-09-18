import React, { useState } from 'react';
import styles from './NewsSlider.module.css';
import SliderBack from '/sliderBack.svg'


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
            {/* <img src={SliderBack} className={styles.slideImg} alt="SliderBack" /> */}
            <div className={styles.slideContainer}>
              <div className={styles.slideBlock}>
              <h1>{slide.caption}</h1>
              <div className={styles.slideFlex}>
                <h2>{slide.keyWords}</h2>
                <p>{slide.year}</p>
              </div>
              </div>
            
            </div>

            <div className={styles.slideInfo}>
              <button className={styles.slideBtn}>Зарегистрироваться</button>
              <div className={styles.slideInfoContainer}>
                <h1>Дата: {slide.date}</h1>
                <h2>{slide.location}</h2>
              </div>
            </div>
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