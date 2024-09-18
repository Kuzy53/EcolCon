import React, { useState } from 'react';
import styles from './NewsPage.module.css';
import NewsItem from '../../components/NewsPage/NewsItem';
import Footer from '../../components/Footer';


const NewsPage = () => {
  const [newsList, setNewsList] = useState([
    {
      title: "Заголовок новости1",
      description: "По данным Australia Institute, потребление пластика в стране выросло на 60 % с 2000 года, достигнув 148 кг на человека в 2021 году.",
      tags: ["лес", "лес", "лес"],
      img: "src/assets/news/image 6.png",
      id: 1
    },
    {
      title: "Заголовок новости2",
      description: "По данным Australia Institute, потребление пластика в стране выросло на 60 % с 2000 года, достигнув 148 кг на человека в 2021 году.",
      tags: ["лес", "лес", "лес"],
      img: "src/assets/news/image 6.png",
      id: 2
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
          {newsList.map((item, index) => (
            <NewsItem key={index} news={item} />
          ))}
        </div>

          <Footer/>
      </div>
    </>
  );
};

export default NewsPage;