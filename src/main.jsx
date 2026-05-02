// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
