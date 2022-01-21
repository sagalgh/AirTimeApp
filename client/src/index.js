import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import Flight from './components/Flight';
import Map from './components/Map/Map';
import Tsa from './components/Tsa';
import Chat from './components/Chat';

import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/map' element={<App />} />
      <Route path='/flight' element={<Flight />} />
      <Route path='/tsa' element={<Tsa />}></Route>
      <Route path='/chat' element={<Chat />}></Route>
      <Route path='/register' element={<Chat />}></Route>
      <Route path='/signin' element={<Chat />}></Route>
    </Routes>
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
