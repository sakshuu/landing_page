import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home } from './pages';
import Page404 from './pages/Page404';
import { MyFooter, MyNavbar } from './components';

const App = () => {
  return <>
  <BrowserRouter>
  <MyNavbar/>
  <Routes>
    <Route element={<Home/>} path='/' />
    <Route element={<About/>} path='/about' />
    <Route element={<Page404/>} path='*' />
  </Routes>
  <MyFooter/>
  </BrowserRouter>
  </>
}

export default App