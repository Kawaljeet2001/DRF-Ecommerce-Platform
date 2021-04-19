import './App.css';
import ProductCard from "./Components/ProductCard";
import axios from "axios";
import React from 'react'
import ProductDetail from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import MiniCart from "./Components/MiniCart"
import ProductDetailPage from "./Pages/ProductDetail";
import HomePage from "./Pages/HomePage";
function App() {

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
