import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { App } from "./containers/App";
import reportWebVitals from './reportWebVitals';
import {ChatPage} from './containers/ChatPage';
import { createStore } from "redux";
import { liveChat } from "./reducers";
import { Provider } from "react-redux";

const store = createStore(liveChat);

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Provider store={store}>
                <Routes>
                    <Route exact path="/" element={<ChatPage/>}></Route>
                    <Route exact path="/room" element={<App/>}></Route>
                </Routes>
          </Provider>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
