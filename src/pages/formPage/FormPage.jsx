import React, { useState } from 'react';
import styles from './FormPage.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation, useRegisterMutation } from '../../app/api/apiClient';
import { setToken } from '../../app/api/authSlice';

const FormPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginUser, { isLoading: isLoginLoading }] = useLoginMutation();
  const [registerUser, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '', // Поле "ФИО"
    vk_link: '',   // Поле для ВК ссылки
    avatar: '',    // Поле для аватара
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await loginUser({ email, password }).unwrap();
      const token = response.token;
      localStorage.setItem('jwt', token);
      dispatch(setToken(token));
      navigate('/');
      window.location.reload();
    } catch (error) {
      if (error && error.data && error.data.message) {
        setErrorMessage(error.data.message);
      } else {
        setErrorMessage('Произошла ошибка. Попробуйте снова.');
      }
    }
  };

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    const { email, full_name, vk_link, password } = formData;

    try {
      const response = await registerUser({
        email,
        full_name,
        vk_link,
        password
      }).unwrap();
      setIsSignUp(false);
    } catch (error) {
      if (error && error.data && error.data.message) {
        setErrorMessage(error.data.message);
      } else {
        setErrorMessage('Произошла ошибка. Попробуйте снова.');
      }
    }
  };

  return (
    <div className={styles.app}>
      <div className={`${styles.container} ${isSignUp ? styles.rightPanelActive : ''}`} id="container">
        <div className={styles.formFlex}>
          {/* Форма регистрации */}
          <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
            <form className={styles.form} onSubmit={onSubmitRegister}>
              <h1>Регистрация</h1>
              <input
                type="text"
                placeholder="ФИО"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="ВК: id"
                name="vk_link"
                value={formData.vk_link}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button className={styles.signBtn} type="submit" disabled={isRegisterLoading}>
                {isRegisterLoading ? 'Регистрация...' : 'Зарегистрироваться'}
              </button>
            </form>
          </div>

          {/* Форма авторизации */}
          <div className={`${styles.formContainer} ${styles.signInContainer}`}>
            <form className={styles.form} onSubmit={onSubmitLogin}>
              <h1>Авторизация</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Пароль"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <a href="#">Забыли пароль?</a>
              <button className={styles.logBtn} type="submit" disabled={isLoginLoading}>
                {isLoginLoading ? 'Вход...' : 'Войти'}
              </button>
            </form>
          </div>
        </div>

        {/* Оверлей для переключения между авторизацией и регистрацией */}
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1>Добро пожаловать!</h1>
              <p>Чтобы оставаться на связи с нами, пожалуйста, войдите в систему с вашей личной информацией</p>
              <button className={styles.ghost} onClick={togglePanel}>
                Авторизация
              </button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1>Привет, Друг!</h1>
              <p>Введите свои личные данные и начните путешествие вместе с нами</p>
              <button className={styles.ghost} onClick={togglePanel}>
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default FormPage;
