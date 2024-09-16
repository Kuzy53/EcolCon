import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/formPage/FormPage';
import ProfilePage from './pages/profilePage/ProfilePage';


const App = () => {

  return (
    <>
    <Routes>
     <Route element={<Home />} path="/" />
     <Route element={<FormPage />} path="/FormPage" />
     <Route element={<ProfilePage />} path="/profile" />
     </Routes>
    </>
  )
}

export default App;
