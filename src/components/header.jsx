import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useLogoutUserMutation, useGetUserQuery } from '../app/api/apiClient';

const Header = () => {

  const [logoutUser] = useLogoutUserMutation();
  const { data: user, isLoading, refetch } = useGetUserQuery();

  const handleLogout = () => {
    logoutUser().unwrap().then(() => {
      localStorage.removeItem('jwt');
      refetch(); 
      window.location.reload();
    });
  };

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

          {isLoading ? (
            <span>Loading...</span>
          ) : user ? (
            <>

            <li className={styles.navItem}>
              <Link to={'/profile'} href="#" className={styles.navLink}>профиль</Link>
            </li>

            <li className={styles.navItem}>
              <Link to={'/orgProfile'} href="#" className={styles.navLink}>организация</Link>
            </li>

              <li className={`${styles.navItem} ${styles.regBtn}`}>
                <Link to={'/'} href="#" className={styles.navLink}>выйти</Link>
              </li>

            </>

          ) : (
            <>
            <li className={styles.navItem}>
            <Link to={'/formPage'} href="#" className={styles.navLink}>войти</Link>
            </li>
            <li className={`${styles.navItem} ${styles.regBtn}`}>
            <Link to={'/formPage'} href="#" className={styles.navLink}>зарегистрироваться</Link>
            </li>
            </>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default Header