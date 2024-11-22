import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Grow from './components/grow';
import Projects from './components/projects';
import Prototypes from './components/prototypes';
import Review from './components/review';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Services/>
    <Grow/>
    <Projects/>
    <Prototypes/>
    <Review/>
    <Footer/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
