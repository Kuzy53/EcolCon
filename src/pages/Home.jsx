import { useState } from 'react';
import NewsSlider from '../components/MainPage/NewsSlider';
import AdditionalInfo from '../components/MainPage/AdditionalInfo';
const slides = [
  {
    image: 'https://example.com/image1.jpg',
    alt: 'Image 1',
    caption: 'This is slide 1',
    date: "20-22 ноября",
    location: "г. Москва, ГК «Измайлово»"
  },
  {
    image: 'https://example.com/image2.jpg',
    alt: 'Image 2',
    caption: 'This is slide 2',
    date: "20-23 ноября",
    location: "г. Москва, ГК «Измайлово»"
  },
  {
    image: 'https://example.com/image2.jpg',
    alt: 'Image 3',
    caption: 'This is slide 3',
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
