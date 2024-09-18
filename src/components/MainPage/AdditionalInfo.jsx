import React, { useState } from 'react';
import styles from './AdditionalInfo.module.css';
import SelectEvents from './EventFilter';
import BloksEvents from './BloksEvents';
import Footer from './Footer';
const AdditionalInfo = () => {

  const [newsList, setNewsList] = useState([
    {
      title: "Заголовок новости1",
      description: "По данным Australia Institute, потребление пластика в стране выросло на 60 % с 2000 года, достигнув 148 кг на человека в 2021 году.",
      tags: ["лес", "лес", "лес"],
      img: "src/assets/news/image 6.png"
    },
    {
      title: "Заголовок новости2",
      description: "По данным Australia Institute, потребление пластика в стране выросло на 60 % с 2000 года, достигнув 148 кг на человека в 2021 году.",
      tags: ["лес", "лес", "лес"],
      img: "src/assets/news/image 6.png"
    }
  ]);

  const renderNewsItem = (item) => (
    <div className={styles.newsItem}>
      <img className={styles.newsItemImg} src={item.img} alt={item.title} />
      <div className={styles.newsItemTextBlock}>
        <h3 className={styles.newsItemTitle}>{item.title}</h3>
        <p className={styles.newsItemText}>{item.description}</p>
        <div className={styles.newsItemTags}>
          {item.tags.map((tag, index) => (
            <div className={styles.newsItemTag} key={index}>#{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
<section className={styles.additionalInfo} >
  <div className={styles.container} >
  <SelectEvents/>
  <BloksEvents/>

  <h1 className={styles.newTitle}>Новости</h1>

  <div className={styles.news}>
          {newsList.map((item, index) => renderNewsItem(item))}
        </div>

  <Footer/>
  </div>
    <img src="src/assets/main/blot1.png" className={styles.blot1} alt="" />
    <img src="src/assets/main/blot2.png" className={styles.blot2} alt="" />
    <img src="src/assets/main/blot3.png" className={styles.blot3} alt="" />

</section>
  );
};

export default AdditionalInfo;