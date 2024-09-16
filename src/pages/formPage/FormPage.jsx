import React, { useState, useEffect } from 'react';
import styles from './FormPage.module.scss';

const FormPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`${styles.container} ${isSignUp ? styles.rightPanelActive : ''}`} id="container">
        <div className={styles.formFlex}>
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <form className={styles.form}>
          <h1>Регистрация</h1>
          {/* <span>или используйте свой E-mail для регистрации</span> */}
          <input type="text" placeholder="ФИО" />
          <input type="text" placeholder="ВК: id" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <input type="text" placeholder="Аватарка" />

          <button className={styles.signBtn}>Зарегистрироваться</button>
        </form>
      </div>

      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form className={styles.form}>
          <h1>Авторизация</h1>
          {/* <span>или используйте свой аккаунт</span> */}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <a href="#">Забыли пароль?</a>
          <button className={styles.logBtn}>Вход</button>
        </form>
      </div>
      </div>

      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1>Добро пожаловать!</h1>
            <p>Чтобы оставаться на связи с нами, пожалуйста, войдите в систему с вашей личной информацией</p>
            <button className={styles.ghost} onClick={togglePanel}>Авторизация</button>
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <h1>Привет, Друг!</h1>
            <p>Введите свои личные данные и начните путешествие вместе с нами</p>
            <button className={styles.ghost} onClick={togglePanel}>Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
