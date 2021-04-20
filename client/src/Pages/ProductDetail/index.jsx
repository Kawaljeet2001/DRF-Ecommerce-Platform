import React from "react";
import ProductDetailComp from "../../Components/ProductDetail";
import MiniCart from "../../Components/MiniCart";
import "./ProductDetailpage.css";
import ProductCard from "../../Components/ProductCard";

const ProductDetailPage = ({ DisplayImages, ProductInfo }) => {
  return (
    <div className="ProductDetailPage">
      <ProductDetailComp
        DisplayImages={DisplayImages}
        ProductInfo={ProductInfo}
      />
      <div className="Similar-products">
        <p>SIMILAR PRODUCTS</p>
        <div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
