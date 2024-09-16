import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/formPage/FormPage';


const App = () => {

  return (
    <>
    <Routes>
     <Route element={<Home />} path="/" />
     <Route element={<FormPage />} path="/FormPage" />
     </Routes>
    </>
  )
}

export default App;
