

import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {

  return (
<>

<div className={styles.container} >
    <h3 className={styles.title} >Присоединяйся к нам в сотсетях</h3>
    <div className={styles.links} >
        <a  className={styles.chatBotLink} href="#">Чат-бот</a>
        <a  className={styles.link} href="#">
        <img  className={styles.linkImg} src="src/assets/icons/Telegram.png" alt="" />
        </a>
        <a  className={styles.link} href="#">
        <img className={styles.linkImg}  src="src/assets/icons/vk.png" alt="" />
        </a>
    </div>
</div>

</>
  )
};

export default Footer;
