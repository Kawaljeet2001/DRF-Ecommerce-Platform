import React from 'react'
import ProductDetailComp from "../../Components/ProductDetail";
import MiniCart from "../../Components/MiniCart";
import "./ProductDetailpage.css";

const index = () => {
    return (
        <div className = "ProductDetailPage">
            <ProductDetailComp/>
            <MiniCart/>
        </div>
    )
}

export default index
