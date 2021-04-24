import React from "react";
import ProductDetailComp from "../../Components/ProductDetail";
import "./ProductDetailpage.css";
import {useLocation , useParams} from 'react-router-dom';

const ProductDetailPage = () => {
  const ProductId = useParams().productid
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
