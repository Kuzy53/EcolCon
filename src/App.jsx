import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/formPage/FormPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import './App.css';
import Header from './components/Header';

const App = () => {

  return (
    <>
    <Header></Header>
    <Routes>
     <Route element={<Home />} path="/" />
     <Route element={<FormPage />} path="/FormPage" />
     <Route element={<ProfilePage />} path="/profile" />
     </Routes>
    </>
  )
}

export default App;
