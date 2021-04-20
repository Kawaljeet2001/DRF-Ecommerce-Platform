import './App.css';
import ProductCard from "./Components/ProductCard";
import axios from "axios";
import React from 'react'
import ProductDetail from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import MiniCart from "./Components/MiniCart"
import ProductDetailPage from "./Pages/ProductDetail";
import HomePage from "./Pages/HomePage";
import {Route} from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Route path = "/" exact>
        <HomePage/>
      </Route>
      <Route path = "/product">
        <ProductDetailPage
          ProductInfo = {
        //     "id": 2,
        //     "category": {
        //         "category_name": "clothing"
        //     },
        //     "color": {
        //         "color_code": "#000000",
        //         "color_name": "black"
        //     },
        //     "name": "Roadster :  Men Teal Blue & Black Printed Round Neck T-shirt",
        //     "brand": "ROADSTER",
        //     "description": "Teal blue and Black printed T-shirt has a round neck, and short sleeves",
        //     "price": 1500,
        //     "sizes_available" : ['M' , 'L' , 'XL' , 'XXL'],
        //     "thumbnail": "/media/products/default.jpg",
        //     "stock": 20
        // }{
          {"id": 3,
          "category": {
              "category_name": "clothing"
          },
          "color": {
              "color_code": "#000000",
              "color_name": "black"
          },
          "name": "WROGN Navy Printed Polo T-shirt",
          "brand": "WROGN",
          "description": "Navy blue printed polo T-shirt, has a polo collar with a short button placket, short sleeves.",
          "price": 999.0,
          "sizes_available" : ['S' , 'M' , 'L' , 'XL' , 'XXL'],
          "thumbnail": "/media/products/3_1.jpg",
          "stock": 20
      }}
          DisplayImages = {[
            {
                "image": "/media/3_1.jpg",
                "image_description": "retg"
            },
            {
                "image": "/media/3_2.jpg",
                "image_description": "ge4g4et"
            },
            {
                "image": "/media/3_3.jpg",
                "image_description": "e4gtg4"
            },
            {
                "image": "/media/3_4.jpg",
                "image_description": "e4tg4e"
            },
            {
                "image": "/media/3_5.jpg",
                "image_description": "e54tge4tg4"
            }
        ]}
        />
      </Route>

    </div>
  );
}

export default App;
