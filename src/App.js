import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from './Components/Container';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';


function App() {
  return (
    <>
    <Navbar/>
    <Container/>
    </>
  );
}

export default App;
