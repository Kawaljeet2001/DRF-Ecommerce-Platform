import React from "react";
import ProductDetailComp from "../../Components/ProductDetail";
import MiniCart from "../../Components/MiniCart";
import "./ProductDetailpage.css";
import ProductCard from "../../Components/ProductCard";
import {useLocation , useParams} from 'react-router-dom';
import axios from "axios";

const ProductDetailPage = () => {
  const ProductId = useParams().productid
  console.log(ProductId)
  return (
    <div className="ProductDetailPage">
      <ProductDetailComp
        id = {ProductId}
      />
     <div className="Similar-products">
        <p>SIMILAR PRODUCTS</p>
        <div>
       </div>
      </div>
      
    </div>
  );
};

export default ProductDetailPage;
