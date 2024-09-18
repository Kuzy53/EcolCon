import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src='src/assets/logo.png' className={styles.logo}></img>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>новости</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>мероприятия</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>организация</a>
          </li>
          <li className={styles.navItem}>
          <Link to={'/formPage'} href="#" className={styles.navLink}>войти</Link>
          </li>
          <li className={`${styles.navItem} ${styles.regBtn}`}>
            <a href="#" className={styles.navLink}>зарегистрироваться</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header