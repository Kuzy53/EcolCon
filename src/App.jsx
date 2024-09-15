import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import './App.css'


const App = () => {

  return (
    <>
    <Routes>
     <Route element={<Home />} path="/" />
     </Routes>
    </>
  )
}

export default App;
