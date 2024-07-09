import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'; // Ensure the correct import path
import './GlobalStyles.css';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/PlaceOrder" element={<PlaceOrder />} />
    </Routes>
  );
};

export default App;
