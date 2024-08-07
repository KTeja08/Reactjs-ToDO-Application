// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout'; // Import Layout component
import App from './App';
import Home from './Components/Home';
import About from './Components/About';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} /> 
      <Route path="/" element={<Layout />}> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/app" element={<App />} /> 
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
