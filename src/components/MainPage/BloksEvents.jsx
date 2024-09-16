

import { useState } from 'react';
import styles from './BloksEvents.module.css';

const BloksEvents = () => {

  return (
<>
<div className={styles.container} >
    <div className={styles.block}>
        <img src="src/assets/main/block1.png" alt="" />
        <div className={styles.titles} >
            <div className={styles.titleItem} >IT</div>
            <div className={styles.titleItem} >Экология</div>
            <div className={styles.titleItem} >Креатив</div>
            <p className={styles.date} >18-19 сентября</p>
            <button className={styles.btn}  >Подробнее</button>
    </div>

    </div>

    <div className={styles.block}>
        <img src="src/assets/main/block2.png" alt="" />
        <div className={styles.titles} >
            <div className={styles.titleItem} >IT</div>
            <div className={styles.titleItem} >Экология</div>
            <div className={styles.titleItem} >Экономика</div>
    </div>
    <p className={styles.date} >18-19 сентября</p>
    <button className={styles.btn}  >Подробнее</button>
    </div>
</div>

</>
  )
};

export default BloksEvents;
