import React from 'react';
import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className='app_wrapper'>
    <div className='bg'>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
      <div className="four"></div>
      <div className="five"></div>
      <div className="six"></div>
      <div className="seven"></div>
      <div className="eight"></div>
      <div className="ten"></div>
      <div className="eleven">
        <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 19.8347V0L31.9451 40H15.9726L0 19.8347Z" fill="#FF4656"/>
        <path d="M42.6484 26.6116H27.0051L48 0V19.8347L42.6484 26.6116Z" fill="#FF4656"/>
        </svg>
      </div>
      <div className="twelve"></div>
      <div className="threeteen"></div>
    </div>
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
