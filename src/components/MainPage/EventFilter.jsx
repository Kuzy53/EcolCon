

import { useState } from 'react';
import styles from './EventFilter.module.css';

const EventFilter = ({onSearch}) => {
  const [organization, setOrganization] = useState('');
  const [keywords, setKeywords] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const filterOptions = {
    organizations: [
      "Все",
      "Организация 1",
      "Организация 2",
      "Организация 3"
    ],
    keywords: [
      "Все",
      "IT",
      "экология",
      "креатив",
      "экономика"
    ]
  };

  const handleSearch = () => {
    onSearch({ organization, keywords, eventName, eventDate });
  };

  return (
    <>
    <h3 className={styles.title} >Мероприятия</h3>
    <div className={styles.container}>
      <div className={styles.header}>
      <button className={styles.filterButton}>Фильтры</button>
      <button className={styles.mapButton}> <img className={styles.geoIcon} src="src/assets/icons/geo.svg" alt="" /> На карте</button>
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
        <div className={styles.inputContainer} >
          <p className={styles.inputSub} >название мероприятия</p>
          <input
            type="text"
            placeholder="название мероприятия"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className={styles.input}
          />
          </div>
        <div className={styles.inputContainer} >
          <p className={styles.inputSub} >дата проведения</p>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className={styles.input}
          />
        </div>

      </div>
      <button onClick={handleSearch} className={styles.searchButton}>Поиск</button>
    </div>
    
    </>
  );
};

export default EventFilter;
