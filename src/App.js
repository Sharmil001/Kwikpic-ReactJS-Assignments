import Header from './Component/Header/Header';
import Home from './Pages/Home/Home'
import React from 'react';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
