// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import ProductListWithCart from './pages/ProductList';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProductListWithCart />} />
      <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
