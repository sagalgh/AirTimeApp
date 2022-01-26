import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Flight from './components/Flight';
import Map from './components/Map/Map';
import Tsa from './components/Tsa';
import Chat from './components/Chat';
import Register from './components/Register';
import SignIn from './components/SignIn';
import {ChatPage} from './containers/ChatPage';
import { ChatRoom } from './containers/ChatRoom';
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import App from './App';
import logger from 'redux-logger'
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)


ReactDOM.render(
  <React.StrictMode>
  <Router>
       <Provider store={store}>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/map' element={<App />} />
      <Route path='/flight' element={<Flight />} />
      <Route path='/tsa' element={<Tsa />}></Route>
      <Route path='/chathomepage' element={<ChatPage />}></Route>
      <Route path='/chatroom' element={<ChatRoom />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      
    </Routes>
    </Provider>
  </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
