import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/formPage/FormPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsItemPage from './pages/newsItemPage/NewsItemPage';
import EventsListPage from './pages/EventsListPage/EventsListPage';


import './App.css';
import Header from './components/Header';

const App = () => {

  return (
    <>
    <Header></Header>
    <Routes>
     <Route element={<Home />} path="/" />
     <Route element={<NewsPage />} path="/news" />

     <Route element={<FormPage />} path="/FormPage" />
     <Route element={<ProfilePage />} path="/profile" />
     <Route element={<NewsItemPage />} path="/news/:newsId"  />
     <Route element={<EventsListPage />} path="/eventsList"  /> 

     </Routes>
    </>
  )
}

export default App;
