import React, { useState } from 'react';
import styles from './NewsPage.module.css';

const NewsPage = () => {
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

  const [tags, setTags] = useState([
    'лес',
    'экологияРоссии',
    'пластик',
    'загрязнение',
    'вода',
    'экология_в_мире',
    'климат',
    'воздух'
  ]);

  const onDeleteTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  }

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
    <>
      <div className={styles.container}>
        <div className={styles.filterTags}>
          {tags.map((tag, index) => (
            <div className={styles.filterTag} key={index}>#{tag}
              <p onClick={() => onDeleteTag(tag)} className={styles.filterTagClose} alt="">X</p>
            </div>
          ))}
        </div>

        <div className={styles.news}>
          {newsList.map((item, index) => renderNewsItem(item))}
        </div>


        <div className={styles.containerFooter} >
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
      </div>
    </>
  );
};

export default NewsPage;