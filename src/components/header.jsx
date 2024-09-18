import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
      <Link to={'/'} className={styles.logo}><img src='src/assets/logo.png' className={styles.logo}></img></Link>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
          <Link to={'/news'} href="#" className={styles.navLink}>новости</Link>
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
          <Link to={'/formPage'} href="#" className={styles.navLink}>зарегистрироваться</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header