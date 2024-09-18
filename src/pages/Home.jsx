import { useState } from 'react';
import NewsSlider from '../components/MainPage/NewsSlider';
import AdditionalInfo from '../components/MainPage/AdditionalInfo';

const slides = [
  {
    caption: 'This is slide 1',
    keyWords: "ключевые вопросы экологии производства",
    year: "2024",
    date: "20-22 ноября",
    location: "г. Москва, ГК «Измайлово»"
  },
  {
    caption: 'This is slide 2',
    keyWords: "ключевые вопросы экологии производства",
    year: "2024",
    date: "20-23 ноября",
    location: "г. Москва, ГК «Измайлово»"
  },
  {
    caption: 'This is slide 3',
    keyWords: "ключевые вопросы экологии производства",
    year: "2024",
    date: "20-24 ноября",
    location: "г. Москва, ГК «Измайлово»"
  },
  // Add more slides here...
];
const Home = () => {

  return (
    <>
        <main>
          <NewsSlider slides={slides} />
        </main>
        <AdditionalInfo/>
    </>
  )
}

export default Home;
