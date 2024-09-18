

import { useState } from 'react';
import styles from './BlockEvent.module.css';

const formatDates = (startDate, finishDate) => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const startDay = new Date(startDate).getDate();
  const finishDay = new Date(finishDate).getDate();
  const startMonth = months[new Date(startDate).getMonth()];
  const finishMonth = months[new Date(finishDate).getMonth()];

  return `${startDay}-${finishDay} ${startMonth}`;
};


const BlockEvent = ({ event }) => {

  return (
    <>
      <div className={styles.block}>
        <div className={styles.blockInner} >
          <img className={styles.blockImg} src="src/assets/main/block1.png" alt="" />
          {/* <img className={styles.blockImg} src={event.image} alt="" /> */}

          <div className={styles.tags} >

            {event.tags.map((tag, index) => (
              <div key={index} className={styles.tagItem} > {tag.name}</div>
            ))}
          </div>
        </div>

        <div className={styles.blockInfo} >
          <p className={styles.subtitle} >Даты проведения:</p>
          <p className={styles.date} > {formatDates(event.start_date, event.finish_date)}</p>
        </div>

        <button className={styles.btn}  >Подробнее</button>




      </div>

    </>
  )
};

export default BlockEvent;
