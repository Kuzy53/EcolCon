

import { useState } from 'react';
import styles from './EventFilter.module.css';

const EventFilter = () => {
  const [organization, setOrganization] = useState('');
  const [keywords, setKeywords] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const filterOptions = {
    organizations: [
      "Организация 1",
      "Организация 2",
      "Организация 3"
    ],
    keywords: [
      "Конференция",
      "Вебинар",
      "Тренинг"
    ]
  };

  const handleSearch = () => {
    console.log({ organization, keywords, eventName, eventDate });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title} >Мероприятия</h3>
        <button className={styles.filterButton}>Фильтры</button>
      </div>
      <div className={styles.filters}>
        <select
          className={styles.select}
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        >
          {filterOptions.organizations.map((org, index) => (
            <option key={index} value={org}>
              {org}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        >
        {filterOptions.keywords.map((keyword, index) => (
            <option key={index} value={keyword}>
              {keyword}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="название мероприятия"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className={styles.input}
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className={styles.input}
        />
      </div>
      <button onClick={handleSearch} className={styles.searchButton}>Поиск</button>
    </div>
  );
};

export default EventFilter;
